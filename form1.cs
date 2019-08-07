using System;
using System.Text;
using System.Windows.Forms;
using System.IO;
using System.Net.NetworkInformation;
using System.Security.Cryptography;
using System.Management;
namespace ssmms
{
    public partial class Form1 : Form
    {
        private static byte[] m_Key = new byte[32];
        private static byte[] m_IV = new byte[16];

        public Form1()
        {
            InitializeComponent();            
            this.generateCode();
          
        }

        private void generateCode() {
            string str = Guid.NewGuid().ToString().ToUpper().Replace('-', '1');
            string mac1 = this.CAM();
            string mac2 = "D01D819F1F310C1DE";
            string enc1 = Form1.EncryptData(Form1.DecryptData("ItSLgz5ruBKwmCD0qD9+oA==") + mac1 + "|" + str ?? "");
            string enc2 = Form1.EncryptData(Form1.DecryptData("ItSLgz5ruBKwmCD0qD9+oA==") + mac2 + "|" + str ?? "");
            string url = Form1.DecryptData("1txdOEWPYl/GJ/rGO0RCeZH2IjRRKXNFWSBl+G2fMXaXgNkAVtDBHnSDGRSRTykFpvuYUe+8sgZTRMw525Ld+rbrMKxVv7DUom8IKUDSKXc=");
            string url1 = url + enc1;


            textBox1.Text = url1;
        }

        private void Form1_Load(object sender, EventArgs e)
        {

        }

        public string CAM()
        {
            string str = string.Empty;
            try
            {
                NetworkInterface.GetAllNetworkInterfaces();
                ManagementObjectCollection objectCollection = new ManagementObjectSearcher("SELECT * FROM Win32_NetworkAdapter").Get();
                int num = 0;
                foreach (ManagementObject managementObject in objectCollection)
                {
                    if (managementObject["MacAddress"] != null)
                    {
                        if (num == 0)
                            str = managementObject["MacAddress"].ToString();
                        ++num;
                    }
                }
            }
            catch (Exception ex)
            {
                str = "NOMACID";
            }
            return str.ToString().Replace(":", string.Empty).Trim();
        }

        private static string EncryptData(string data)
        {
            string base64String;
            try
            {
                if (!Form1.InitKey())
                    throw new ApplicationException("Error. Fail to generate key for encryption");
                ICryptoTransform encryptor = new RijndaelManaged().CreateEncryptor(Form1.m_Key, Form1.m_IV);
                byte[] bytes = Encoding.ASCII.GetBytes(data);
                MemoryStream memoryStream = new MemoryStream();
                CryptoStream cryptoStream = new CryptoStream((Stream)memoryStream, encryptor, CryptoStreamMode.Write);
                cryptoStream.Write(bytes, 0, bytes.Length);
                cryptoStream.FlushFinalBlock();
                base64String = Convert.ToBase64String(memoryStream.ToArray());
                cryptoStream.Close();
                memoryStream.Close();
            }
            catch (Exception ex)
            {
                throw new ApplicationException("Server temporarily down.Try later.");
            }
            return base64String;
        }

        private static string DecryptData(string data)
        {
            string end;
            try
            {
                if (!Form1.InitKey())
                    throw new ApplicationException("Error. Fail to generate key for decryption");
                ICryptoTransform decryptor = new RijndaelManaged().CreateDecryptor(Form1.m_Key, Form1.m_IV);
                MemoryStream memoryStream = new MemoryStream(Convert.FromBase64String(data));
                CryptoStream cryptoStream = new CryptoStream((Stream)memoryStream, decryptor, CryptoStreamMode.Read);
                end = new StreamReader((Stream)cryptoStream).ReadToEnd();
                cryptoStream.Close();
                memoryStream.Close();
            }
            catch (Exception ex)
            {
                throw new ApplicationException("Server temporarily down.Try later.");
            }
            return end;
        }
        private static bool InitKey()
        {
            try
            {
                byte[] bytes = Encoding.ASCII.GetBytes("1$F%C&4^5@xXp4p#783sd&%^5ngj!s");
                SHA256Managed shA256Managed = new SHA256Managed();
                Array.Copy((Array)shA256Managed.ComputeHash(shA256Managed.ComputeHash(bytes)), 0, (Array)Form1.m_Key, 0, 32);
                Array.Copy((Array)Form1.m_Key, 0, (Array)Form1.m_IV, 0, 16);
                Array.Sort<byte>(Form1.m_IV);
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        
        private void button1_Click(object sender, EventArgs e)
        {
            this.generateCode();
        }

        private void button2_Click(object sender, EventArgs e)
        {
            System.Diagnostics.Process.Start("chrome.exe",textBox1.Text);
        }

        private void button3_Click(object sender, EventArgs e)
        {
            System.Diagnostics.Process.Start("firefox.exe", textBox1.Text);
        }
    }
}
