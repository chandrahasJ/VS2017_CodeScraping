using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Management;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace ComputerHardware_T1
{
    /// <summary>
    /// Reference Taken from below Links
    /// Make Sure you add Reference of "System.Management" & "System.Management.Instrumentation"
    /// 
    /// https://docs.microsoft.com/en-us/windows/win32/wmisdk/connecting-to-wmi-remotely-with-c-
    /// https://www.codeproject.com/Articles/17973/How-To-Get-Hardware-Information-CPU-ID-MainBoard-I
    /// </summary>
    public partial class Form1 : Form
    {
        WinCollection _WinCollection = new WinCollection();
        public Form1()
        {
            InitializeComponent();
        }

        private void btnSCD_Click(object sender, EventArgs e)
        {
            StringBuilder sb = new StringBuilder();
            foreach (var keyName in _WinCollection.GetKey())
            {

                sb.AppendLine($"------------Key Name : {keyName}------------------------");
                if (keyName == "Win32_AccountSID" 
                    || keyName == "Win32_ActionCheck"
                    || keyName == "Win32_AllocatedResource")
                {
                    continue;
                }
                using (ManagementObjectSearcher searcher = new ManagementObjectSearcher(
                    "select * from " + keyName))
                {
                    foreach (ManagementObject share in searcher.Get())
                    {
                        foreach (PropertyData PC in share.Properties)
                        {
                            //some codes ...
                            sb.AppendLine($"{PC.Name} - {PC.Value}");
                        }
                    }
                }
            }

            txtData.Text = sb.ToString();
            

            ;
        }

        private void btnCRCD_Click(object sender, EventArgs e)
        {

        }


    }

    public class WinCollection
    {
        public List<string> GetKey()
        {
            List<string> lstKey = new List<string>();
            lstKey.Add("Win32_1394Controller");
            lstKey.Add("Win32_1394ControllerDevice");
            lstKey.Add("Win32_Account");
            lstKey.Add("Win32_AccountSID");
            lstKey.Add("Win32_ACE");
            lstKey.Add("Win32_ActionCheck");
            lstKey.Add("Win32_AllocatedResource");
            lstKey.Add("Win32_ApplicationCommandLine");
            lstKey.Add("Win32_ApplicationService");
            lstKey.Add("Win32_AssociatedBattery");
            lstKey.Add("Win32_AssociatedProcessorMemory");
            lstKey.Add("Win32_BaseBoard");
            lstKey.Add("Win32_BaseService");
            lstKey.Add("Win32_Battery");
            lstKey.Add("Win32_Binary");
            lstKey.Add("Win32_BindImageAction");
            lstKey.Add("Win32_BIOS");
            lstKey.Add("Win32_BootConfiguration");
            lstKey.Add("Win32_Bus");
            lstKey.Add("Win32_CacheMemory");
            lstKey.Add("Win32_CDROMDrive");
            lstKey.Add("Win32_CheckCheck");
            lstKey.Add("Win32_CIMLogicalDeviceCIMDataFile");
            lstKey.Add("Win32_ClassicCOMApplicationClasses");
            lstKey.Add("Win32_ClassicCOMClass");
            lstKey.Add("Win32_ClassicCOMClassSetting");
            lstKey.Add("Win32_ClassicCOMClassSettings");
            lstKey.Add("Win32_ClassInfoAction");
            lstKey.Add("Win32_ClientApplicationSetting");
            lstKey.Add("Win32_CodecFile");
            lstKey.Add("Win32_COMApplication");
            lstKey.Add("Win32_COMApplicationClasses");
            lstKey.Add("Win32_COMApplicationSettings");
            lstKey.Add("Win32_COMClass");
            lstKey.Add("Win32_ComClassAutoEmulator");
            lstKey.Add("Win32_ComClassEmulator");
            lstKey.Add("Win32_CommandLineAccess");
            lstKey.Add("Win32_ComponentCategory");
            lstKey.Add("Win32_ComputerSystem");
            lstKey.Add("Win32_ComputerSystemProcessor");
            lstKey.Add("Win32_ComputerSystemProduct");
            lstKey.Add("Win32_COMSetting");
            lstKey.Add("Win32_Condition");
            lstKey.Add("Win32_CreateFolderAction");
            lstKey.Add("Win32_CurrentProbe");
            lstKey.Add("Win32_DCOMApplication");
            lstKey.Add("Win32_DCOMApplicationAccessAllowedSetting");
            lstKey.Add("Win32_DCOMApplicationLaunchAllowedSetting");
            lstKey.Add("Win32_DCOMApplicationSetting");
            lstKey.Add("Win32_DependentService");
            lstKey.Add("Win32_Desktop");
            lstKey.Add("Win32_DesktopMonitor");
            lstKey.Add("Win32_DeviceBus");
            lstKey.Add("Win32_DeviceMemoryAddress");
            lstKey.Add("Win32_DeviceSettings");
            lstKey.Add("Win32_Directory");
            lstKey.Add("Win32_DirectorySpecification");
            lstKey.Add("Win32_DiskDrive");
            lstKey.Add("Win32_DiskDriveToDiskPartition");
            lstKey.Add("Win32_DiskPartition");
            lstKey.Add("Win32_DisplayConfiguration");
            lstKey.Add("Win32_DisplayControllerConfiguration");
            lstKey.Add("Win32_DMAChannel");
            lstKey.Add("Win32_DriverVXD");
            lstKey.Add("Win32_DuplicateFileAction");
            lstKey.Add("Win32_Environment");
            lstKey.Add("Win32_EnvironmentSpecification");
            lstKey.Add("Win32_ExtensionInfoAction");
            lstKey.Add("Win32_Fan");
            lstKey.Add("Win32_FileSpecification");
            lstKey.Add("Win32_FloppyController");
            lstKey.Add("Win32_FloppyDrive");
            lstKey.Add("Win32_FontInfoAction");
            lstKey.Add("Win32_Group");
            lstKey.Add("Win32_GroupUser");
            lstKey.Add("Win32_HeatPipe");
            lstKey.Add("Win32_IDEController");
            lstKey.Add("Win32_IDEControllerDevice");
            lstKey.Add("Win32_ImplementedCategory");
            lstKey.Add("Win32_InfraredDevice");
            lstKey.Add("Win32_IniFileSpecification");
            lstKey.Add("Win32_InstalledSoftwareElement");
            lstKey.Add("Win32_IRQResource");
            lstKey.Add("Win32_Keyboard");
            lstKey.Add("Win32_LaunchCondition");
            lstKey.Add("Win32_LoadOrderGroup");
            lstKey.Add("Win32_LoadOrderGroupServiceDependencies");
            lstKey.Add("Win32_LoadOrderGroupServiceMembers");
            lstKey.Add("Win32_LogicalDisk");
            lstKey.Add("Win32_LogicalDiskRootDirectory");
            lstKey.Add("Win32_LogicalDiskToPartition");
            lstKey.Add("Win32_LogicalFileAccess");
            lstKey.Add("Win32_LogicalFileAuditing");
            lstKey.Add("Win32_LogicalFileGroup");
            lstKey.Add("Win32_LogicalFileOwner");
            lstKey.Add("Win32_LogicalFileSecuritySetting");
            lstKey.Add("Win32_LogicalMemoryConfiguration");
            lstKey.Add("Win32_LogicalProgramGroup");
            lstKey.Add("Win32_LogicalProgramGroupDirectory");
            lstKey.Add("Win32_LogicalProgramGroupItem");
            lstKey.Add("Win32_LogicalProgramGroupItemDataFile");
            lstKey.Add("Win32_LogicalShareAccess");
            lstKey.Add("Win32_LogicalShareAuditing");
            lstKey.Add("Win32_LogicalShareSecuritySetting");
            lstKey.Add("Win32_ManagedSystemElementResource");
            lstKey.Add("Win32_MemoryArray");
            lstKey.Add("Win32_MemoryArrayLocation");
            lstKey.Add("Win32_MemoryDevice");
            lstKey.Add("Win32_MemoryDeviceArray");
            lstKey.Add("Win32_MemoryDeviceLocation");
            lstKey.Add("Win32_MethodParameterClass");
            lstKey.Add("Win32_MIMEInfoAction");
            lstKey.Add("Win32_MotherboardDevice");
            lstKey.Add("Win32_MoveFileAction");
            lstKey.Add("Win32_MSIResource");
            lstKey.Add("Win32_NetworkAdapter");
            lstKey.Add("Win32_NetworkAdapterConfiguration");
            lstKey.Add("Win32_NetworkAdapterSetting");
            lstKey.Add("Win32_NetworkClient");
            lstKey.Add("Win32_NetworkConnection");
            lstKey.Add("Win32_NetworkLoginProfile");
            lstKey.Add("Win32_NetworkProtocol");
            lstKey.Add("Win32_NTEventlogFile");
            lstKey.Add("Win32_NTLogEvent");
            lstKey.Add("Win32_NTLogEventComputer");
            lstKey.Add("Win32_NTLogEventLog");
            lstKey.Add("Win32_NTLogEventUser");
            lstKey.Add("Win32_ODBCAttribute");
            lstKey.Add("Win32_ODBCDataSourceAttribute");
            lstKey.Add("Win32_ODBCDataSourceSpecification");
            lstKey.Add("Win32_ODBCDriverAttribute");
            lstKey.Add("Win32_ODBCDriverSoftwareElement");
            lstKey.Add("Win32_ODBCDriverSpecification");
            lstKey.Add("Win32_ODBCSourceAttribute");
            lstKey.Add("Win32_ODBCTranslatorSpecification");
            lstKey.Add("Win32_OnBoardDevice");
            lstKey.Add("Win32_OperatingSystem");
            lstKey.Add("Win32_OperatingSystemQFE");
            lstKey.Add("Win32_OSRecoveryConfiguration");
            lstKey.Add("Win32_PageFile");
            lstKey.Add("Win32_PageFileElementSetting");
            lstKey.Add("Win32_PageFileSetting");
            lstKey.Add("Win32_PageFileUsage");
            lstKey.Add("Win32_ParallelPort");
            lstKey.Add("Win32_Patch");
            lstKey.Add("Win32_PatchFile");
            lstKey.Add("Win32_PatchPackage");
            lstKey.Add("Win32_PCMCIAController");
            lstKey.Add("Win32_Perf");
            lstKey.Add("Win32_PerfRawData");
            lstKey.Add("Win32_PerfRawData_ASP_ActiveServerPages");
            lstKey.Add("Win32_PerfRawData_ASPNET_114322_ASPNETAppsv114322");
            lstKey.Add("Win32_PerfRawData_ASPNET_114322_ASPNETv114322");
            lstKey.Add("Win32_PerfRawData_ASPNET_ASPNET");
            lstKey.Add("Win32_PerfRawData_ASPNET_ASPNETApplications");
            lstKey.Add("Win32_PerfRawData_IAS_IASAccountingClients");
            lstKey.Add("Win32_PerfRawData_IAS_IASAccountingServer");
            lstKey.Add("Win32_PerfRawData_IAS_IASAuthenticationClients");
            lstKey.Add("Win32_PerfRawData_IAS_IASAuthenticationServer");
            lstKey.Add("Win32_PerfRawData_InetInfo_InternetInformationServicesGlobal");
            lstKey.Add("Win32_PerfRawData_MSDTC_DistributedTransactionCoordinator");
            lstKey.Add("Win32_PerfRawData_MSFTPSVC_FTPService");
            lstKey.Add("Win32_PerfRawData_MSSQLSERVER_SQLServerAccessMethods");
            lstKey.Add("Win32_PerfRawData_MSSQLSERVER_SQLServerBackupDevice");
            lstKey.Add("Win32_PerfRawData_MSSQLSERVER_SQLServerBufferManager");
            lstKey.Add("Win32_PerfRawData_MSSQLSERVER_SQLServerBufferPartition");
            lstKey.Add("Win32_PerfRawData_MSSQLSERVER_SQLServerCacheManager");
            lstKey.Add("Win32_PerfRawData_MSSQLSERVER_SQLServerDatabases");
            lstKey.Add("Win32_PerfRawData_MSSQLSERVER_SQLServerGeneralStatistics");
            lstKey.Add("Win32_PerfRawData_MSSQLSERVER_SQLServerLatches");
            lstKey.Add("Win32_PerfRawData_MSSQLSERVER_SQLServerLocks");
            lstKey.Add("Win32_PerfRawData_MSSQLSERVER_SQLServerMemoryManager");
            lstKey.Add("Win32_PerfRawData_MSSQLSERVER_SQLServerReplicationAgents");
            lstKey.Add("Win32_PerfRawData_MSSQLSERVER_SQLServerReplicationDist");
            lstKey.Add("Win32_PerfRawData_MSSQLSERVER_SQLServerReplicationLogreader");
            lstKey.Add("Win32_PerfRawData_MSSQLSERVER_SQLServerReplicationMerge");
            lstKey.Add("Win32_PerfRawData_MSSQLSERVER_SQLServerReplicationSnapshot");
            lstKey.Add("Win32_PerfRawData_MSSQLSERVER_SQLServerSQLStatistics");
            lstKey.Add("Win32_PerfRawData_MSSQLSERVER_SQLServerUserSettable");
            lstKey.Add("Win32_PerfRawData_NETFramework_NETCLRExceptions");
            lstKey.Add("Win32_PerfRawData_NETFramework_NETCLRInterop");
            lstKey.Add("Win32_PerfRawData_NETFramework_NETCLRJit");
            lstKey.Add("Win32_PerfRawData_NETFramework_NETCLRLoading");
            lstKey.Add("Win32_PerfRawData_NETFramework_NETCLRLocksAndThreads");
            lstKey.Add("Win32_PerfRawData_NETFramework_NETCLRMemory");
            lstKey.Add("Win32_PerfRawData_NETFramework_NETCLRRemoting");
            lstKey.Add("Win32_PerfRawData_NETFramework_NETCLRSecurity");
            lstKey.Add("Win32_PerfRawData_Outlook_Outlook");
            lstKey.Add("Win32_PerfRawData_PerfDisk_PhysicalDisk");
            lstKey.Add("Win32_PerfRawData_PerfNet_Browser");
            lstKey.Add("Win32_PerfRawData_PerfNet_Redirector");
            lstKey.Add("Win32_PerfRawData_PerfNet_Server");
            lstKey.Add("Win32_PerfRawData_PerfNet_ServerWorkQueues");
            lstKey.Add("Win32_PerfRawData_PerfOS_Cache");
            lstKey.Add("Win32_PerfRawData_PerfOS_Memory");
            lstKey.Add("Win32_PerfRawData_PerfOS_Objects");
            lstKey.Add("Win32_PerfRawData_PerfOS_PagingFile");
            lstKey.Add("Win32_PerfRawData_PerfOS_Processor");
            lstKey.Add("Win32_PerfRawData_PerfOS_System");
            lstKey.Add("Win32_PerfRawData_PerfProc_FullImage_Costly");
            lstKey.Add("Win32_PerfRawData_PerfProc_Image_Costly");
            lstKey.Add("Win32_PerfRawData_PerfProc_JobObject");
            lstKey.Add("Win32_PerfRawData_PerfProc_JobObjectDetails");
            lstKey.Add("Win32_PerfRawData_PerfProc_Process");
            lstKey.Add("Win32_PerfRawData_PerfProc_ProcessAddressSpace_Costly");
            lstKey.Add("Win32_PerfRawData_PerfProc_Thread");
            lstKey.Add("Win32_PerfRawData_PerfProc_ThreadDetails_Costly");
            lstKey.Add("Win32_PerfRawData_RemoteAccess_RASPort");
            lstKey.Add("Win32_PerfRawData_RemoteAccess_RASTotal");
            lstKey.Add("Win32_PerfRawData_RSVP_ACSPerRSVPService");
            lstKey.Add("Win32_PerfRawData_Spooler_PrintQueue");
            lstKey.Add("Win32_PerfRawData_TapiSrv_Telephony");
            lstKey.Add("Win32_PerfRawData_Tcpip_ICMP");
            lstKey.Add("Win32_PerfRawData_Tcpip_IP");
            lstKey.Add("Win32_PerfRawData_Tcpip_NBTConnection");
            lstKey.Add("Win32_PerfRawData_Tcpip_NetworkInterface");
            lstKey.Add("Win32_PerfRawData_Tcpip_TCP");
            lstKey.Add("Win32_PerfRawData_Tcpip_UDP");
            lstKey.Add("Win32_PerfRawData_W3SVC_WebService");
            lstKey.Add("Win32_PhysicalMemory");
            lstKey.Add("Win32_PhysicalMemoryArray");
            lstKey.Add("Win32_PhysicalMemoryLocation");
            lstKey.Add("Win32_PNPAllocatedResource");
            lstKey.Add("Win32_PnPDevice");
            lstKey.Add("Win32_PnPEntity");
            lstKey.Add("Win32_PointingDevice");
            lstKey.Add("Win32_PortableBattery");
            lstKey.Add("Win32_PortConnector");
            lstKey.Add("Win32_PortResource");
            lstKey.Add("Win32_POTSModem");
            lstKey.Add("Win32_POTSModemToSerialPort");
            lstKey.Add("Win32_PowerManagementEvent");
            lstKey.Add("Win32_Printer");
            lstKey.Add("Win32_PrinterConfiguration");
            lstKey.Add("Win32_PrinterController");
            lstKey.Add("Win32_PrinterDriverDll");
            lstKey.Add("Win32_PrinterSetting");
            lstKey.Add("Win32_PrinterShare");
            lstKey.Add("Win32_PrintJob");
            lstKey.Add("Win32_PrivilegesStatus");
            lstKey.Add("Win32_Process");
            lstKey.Add("Win32_Processor");
            lstKey.Add("Win32_ProcessStartup");
            lstKey.Add("Win32_Product");
            lstKey.Add("Win32_ProductCheck");
            lstKey.Add("Win32_ProductResource");
            lstKey.Add("Win32_ProductSoftwareFeatures");
            lstKey.Add("Win32_ProgIDSpecification");
            lstKey.Add("Win32_ProgramGroup");
            lstKey.Add("Win32_ProgramGroupContents");
            lstKey.Add("Win32_ProgramGroupOrItem");
            lstKey.Add("Win32_Property");
            lstKey.Add("Win32_ProtocolBinding");
            lstKey.Add("Win32_PublishComponentAction");
            lstKey.Add("Win32_QuickFixEngineering");
            lstKey.Add("Win32_Refrigeration");
            lstKey.Add("Win32_Registry");
            lstKey.Add("Win32_RegistryAction");
            lstKey.Add("Win32_RemoveFileAction");
            lstKey.Add("Win32_RemoveIniAction");
            lstKey.Add("Win32_ReserveCost");
            lstKey.Add("Win32_ScheduledJob");
            lstKey.Add("Win32_SCSIController");
            lstKey.Add("Win32_SCSIControllerDevice");
            lstKey.Add("Win32_SecurityDescriptor");
            lstKey.Add("Win32_SecuritySetting");
            lstKey.Add("Win32_SecuritySettingAccess");
            lstKey.Add("Win32_SecuritySettingAuditing");
            lstKey.Add("Win32_SecuritySettingGroup");
            lstKey.Add("Win32_SecuritySettingOfLogicalFile");
            lstKey.Add("Win32_SecuritySettingOfLogicalShare");
            lstKey.Add("Win32_SecuritySettingOfObject");
            lstKey.Add("Win32_SecuritySettingOwner");
            lstKey.Add("Win32_SelfRegModuleAction");
            lstKey.Add("Win32_SerialPort");
            lstKey.Add("Win32_SerialPortConfiguration");
            lstKey.Add("Win32_SerialPortSetting");
            lstKey.Add("Win32_Service");
            lstKey.Add("Win32_ServiceControl");
            lstKey.Add("Win32_ServiceSpecification");
            lstKey.Add("Win32_ServiceSpecificationService");
            lstKey.Add("Win32_SettingCheck");
            lstKey.Add("Win32_Share");
            lstKey.Add("Win32_ShareToDirectory");
            lstKey.Add("Win32_ShortcutAction");
            lstKey.Add("Win32_ShortcutFile");
            lstKey.Add("Win32_ShortcutSAP");
            lstKey.Add("Win32_SID");
            lstKey.Add("Win32_SMBIOSMemory");
            lstKey.Add("Win32_SoftwareElement");
            lstKey.Add("Win32_SoftwareElementAction");
            lstKey.Add("Win32_SoftwareElementCheck");
            lstKey.Add("Win32_SoftwareElementCondition");
            lstKey.Add("Win32_SoftwareElementResource");
            lstKey.Add("Win32_SoftwareFeature");
            lstKey.Add("Win32_SoftwareFeatureAction");
            lstKey.Add("Win32_SoftwareFeatureCheck");
            lstKey.Add("Win32_SoftwareFeatureParent");
            lstKey.Add("Win32_SoftwareFeatureSoftwareElements");
            lstKey.Add("Win32_SoundDevice");
            lstKey.Add("Win32_StartupCommand");
            lstKey.Add("Win32_SubDirectory");
            lstKey.Add("Win32_SystemAccount");
            lstKey.Add("Win32_SystemBIOS");
            lstKey.Add("Win32_SystemBootConfiguration");
            lstKey.Add("Win32_SystemDesktop");
            lstKey.Add("Win32_SystemDevices");
            lstKey.Add("Win32_SystemDriver");
            lstKey.Add("Win32_SystemDriverPNPEntity");
            lstKey.Add("Win32_SystemEnclosure");
            lstKey.Add("Win32_SystemLoadOrderGroups");
            lstKey.Add("Win32_SystemLogicalMemoryConfiguration");
            lstKey.Add("Win32_SystemMemoryResource");
            lstKey.Add("Win32_SystemNetworkConnections");
            lstKey.Add("Win32_SystemOperatingSystem");
            lstKey.Add("Win32_SystemPartitions");
            lstKey.Add("Win32_SystemProcesses");
            lstKey.Add("Win32_SystemProgramGroups");
            lstKey.Add("Win32_SystemResources");
            lstKey.Add("Win32_SystemServices");
            lstKey.Add("Win32_SystemSetting");
            lstKey.Add("Win32_SystemSlot");
            lstKey.Add("Win32_SystemSystemDriver");
            lstKey.Add("Win32_SystemTimeZone");
            lstKey.Add("Win32_SystemUsers");
            lstKey.Add("Win32_TapeDrive");
            lstKey.Add("Win32_TemperatureProbe");
            lstKey.Add("Win32_Thread");
            lstKey.Add("Win32_TimeZone");
            lstKey.Add("Win32_Trustee");
            lstKey.Add("Win32_TypeLibraryAction");
            lstKey.Add("Win32_UninterruptiblePowerSupply");
            lstKey.Add("Win32_USBController");
            lstKey.Add("Win32_USBControllerDevice");
            lstKey.Add("Win32_UserAccount");
            lstKey.Add("Win32_UserDesktop");
            lstKey.Add("Win32_VideoConfiguration");
            lstKey.Add("Win32_VideoController");
            lstKey.Add("Win32_VideoSettings");
            lstKey.Add("Win32_VoltageProbe");
            lstKey.Add("Win32_WMIElementSetting");
            lstKey.Add("Win32_WMISetting");

            return lstKey;
        }
    }
}
