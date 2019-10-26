using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using System.Diagnostics;
using System.Runtime.InteropServices;
using System.Windows.Forms;

namespace FullScreen_T1
{
    /// <summary>
    /// Reference(s)
    /// http://geekswithblogs.net/aghausman/archive/2009/04/26/disable-special-keys-in-win-app-c.aspx
    /// https://stackoverflow.com/questions/2490577/suppress-task-switch-keys-winkey-alt-tab-alt-esc-ctrl-esc-using-low-level-k 
    /// </summary>
    public class KeyBoardStroke : IDisposable
    {
        private static bool _lastWasCtrlKey = false;

        // Structure contain information about low-level keyboard input event
        [StructLayout(LayoutKind.Sequential)]
        private struct Kbdllhookstruct
        {
            public readonly Keys key;
            public readonly int scanCode;
            public readonly int flags;
            public readonly int time;
            public readonly IntPtr extra;
        }

        //System level functions to be used for hook and unhook keyboard input
        private delegate IntPtr LowLevelKeyboardProc(int nCode, IntPtr wParam, IntPtr lParam);

        [DllImport("user32.dll", CharSet = CharSet.Auto, SetLastError = true)]
        private static extern IntPtr SetWindowsHookEx(int id, LowLevelKeyboardProc callback, IntPtr hMod,
            uint dwThreadId);

        [DllImport("user32.dll", CharSet = CharSet.Auto, SetLastError = true)]
        private static extern bool UnhookWindowsHookEx(IntPtr hook);

        [DllImport("user32.dll", CharSet = CharSet.Auto, SetLastError = true)]
        private static extern IntPtr CallNextHookEx(IntPtr hook, int nCode, IntPtr wp, IntPtr lp);

        [DllImport("kernel32.dll", CharSet = CharSet.Auto, SetLastError = true)]
        private static extern IntPtr GetModuleHandle(string name);

        [DllImport("user32.dll", CharSet = CharSet.Auto)]
        private static extern short GetAsyncKeyState(Keys key);


        //Declaring Global objects
        private IntPtr _ptrHook;
        private readonly LowLevelKeyboardProc _objKeyboardProcess;

        public KeyBoardStroke()
        {
            ProcessModule objCurrentModule = Process.GetCurrentProcess().MainModule; //Get Current Module
            _objKeyboardProcess =
                new LowLevelKeyboardProc(CaptureKey); //Assign callback function each time keyboard process
            if (objCurrentModule != null)
                _ptrHook = SetWindowsHookEx(13, _objKeyboardProcess, GetModuleHandle(objCurrentModule.ModuleName),
                    0); //Setting Hook of Keyboard Process for current module
        }

        private IntPtr CaptureKey(int nCode, IntPtr wp, IntPtr lp)
        {
            if (nCode >= 0)
            {
                Kbdllhookstruct objKeyInfo = (Kbdllhookstruct)Marshal.PtrToStructure(lp, typeof(Kbdllhookstruct));

                // Disabling Windows keys 
                switch (objKeyInfo.key)
                {
                    case Keys.RWin:
                    case Keys.LWin:
                    case Keys.Tab when HasAltModifier(objKeyInfo.flags):
                    case Keys.Escape when HasAltModifier(objKeyInfo.flags):
                    case Keys.Delete when HasAltModifier(objKeyInfo.flags):
                    case Keys.F4 when HasAltModifier(objKeyInfo.flags):
                    case Keys.Escape when _lastWasCtrlKey:
                        _lastWasCtrlKey = false;
                        return (IntPtr)1;
                    case Keys.LControlKey:
                    case Keys.RControlKey:
                        _lastWasCtrlKey = true;
                        break;
                    case Keys.LShiftKey:
                    case Keys.RShiftKey:
                        // Do nothing as the Ctrl key could have been before this
                        break;
                    default:
                        _lastWasCtrlKey = false;
                        break;
                }
            }
            return CallNextHookEx(_ptrHook, nCode, wp, lp);
        }

        private bool HasAltModifier(int flags)
        {
            return (flags & 0x20) == 0x20;
        }


        private void ReleaseUnmanagedResources()
        {
            // TODO release unmanaged resources here
            if (_ptrHook != IntPtr.Zero)
            {
                UnhookWindowsHookEx(_ptrHook);
                _ptrHook = IntPtr.Zero;
            }
        }

        protected virtual void Dispose(bool disposing)
        {
            ReleaseUnmanagedResources();
            if (disposing)
            {
                
            }
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        ~KeyBoardStroke()
        {
            Dispose(false);
        }
    }
}
