using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Offerte.Core.Models
{
    public class Role
    {
        //public const string SUPERADMIN = "SUPERADMIN";
        public const string ADMIN = "ADMIN";    //Amministratore
        public const string MANAGER = "MANAGER";    //Capogruppo della Company
        public const string OPERATOR = "OPERATOR";  //Centralino
        public const string CUSTOMER = "CUSTOMER";  //Cliente che vede i suoi ordini
    }

    public class CustomerTypes
    {
        public const string CORPORATE = "0";
        public const string PERSON = "1";
    }
    
    public class NotificationTypes
    {
        public const string MAIL = "M";
        public const string APP_MESSAGE = "A";
    }

    public class Environments
    {
        public const string PRODUCTION = "PRODUCTION";
        public const string STAGING = "STAGING";
    }
}
