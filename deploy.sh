#!/bin/bash
dt=$(date '+%d %h %Y %H:%M:%S');
echo "INFO: Script started at $dt"
# User configs must be done here!
hostname="demo.hbai.me"
ssl=false
# End of user configs

echo -e "INFO: Getting info about your OS \c"
unameOut="$(uname -s)"
echo "done"
echo -e "INFO: Are you running this script as root or sudo? \c"
if [[ $EUID -ne 0 ]]; then
   echo "No"
   echo "ERROR: This script must be run as root since it installs some packages necessary for installing npm and mocha" 
   exit 1
else
echo "Yes"
fi
linux(){
if [ "$OSID" = "ID=ubuntu" ] || [ "$OSID" = "ID=debian" ] || [ "$OSLIKE" = "ID_LIKE=debian" ]; then
echo "INFO: Your Linux distribution is Debian/Ubuntu"
apt update -y
apt upgrade -y
echo "INFO: Installing Apache"
apt install apache2 -y
echo "INFO: Checking if 'target.tar' and 'parseoptimised' exists"
#echo "INFO: 'target.tar' exists, deleting..."
rm -rf target.tar
#echo "INFO: 'parseoptimised' exists, deleting..."
rm -rf parseoptimised
exit 0
echo "INFO: Downloading our project..."
wget https://hbai.me/442-getLatestBuild
echo "INFO: Downloading parser..."
wget https://hbai.me/442-getParser
echo "INFO: Verifying package integrity"
./parseoptimised --check-integrity
echo "INFO: Generating files..."
./parseoptimised --generate-files sample.conf $hostname
echo "INFO: Making sure your Apache is ready to go"
./parseoptimised --parse sampleConfig.conf
echo "INFO: Extracting our project..."
tar -xvf target.tar -C /var/www/$hostname/html/
echo "INFO: Starting Apache, and create apache at the boot time"
systemctl start httpd
systemctl enable httpd
echo "INFO: Cleaning up..."
rm -rf target.tar
rm -rf parseoptimised
elif [ '$OSID" = "ID="centos"' ] || [ '$OSID" = "ID="rhel"' ]; then
echo "INFO: Your Linux distribution is CentOS or Red Hat"
yum update -y
yum install httpd wget -y
#yum groupinstall 'Development Tools'
echo "INFO: Generating folders"
mkdir /etc/httpd/sites-available /etc/httpd/sites-enabled
mkdir -p /var/www/$hostname/html
echo "INFO: Setting up SELinux..."
setsebool -P httpd_unified 1
echo "INFO: Checking if 'target.tar' and 'parseoptimised' exists"
if [ -e "target.tar" ]; then
echo "INFO: 'target.tar' exists, deleting..."
rm -rf target.tar
fi
if [ -e "parseoptimised" ]; then
echo "INFO: 'parseoptimised' exists, deleting..."
rm -rf parseoptimised
fi
echo "INFO: Downloading our project..."
wget https://hbai.me/442-getLatestBuild
echo "INFO: Downloading parser..."
# I have to recompile from CentOS 7 host since g++ on Ubuntu 18.04 LTS is too new
wget https://hbai.me/442-getParser
echo "INFO: Generating files..."
chmod 777 parseoptimised
./parseoptimised --generate-files /etc/httpd/sites-available/$hostname.conf $hostname
ln -s /etc/httpd/sites-available/$hostname.conf /etc/httpd/sites-enabled/$hostname.conf
echo "INFO: Making sure your Apache is ready to go"
./parseoptimised --parse /etc/httpd/conf/httpd.conf
echo "INFO: Extracting our project..."
tar -xvf target.tar -C /var/www/$hostname/html/
echo "INFO: Making sure user has access to these files"
chmod 755 -R /var/www/
echo -e "INFO: Setting up firewalld? \c"
firewall-cmd --permanent --zone=public --add-service=http
echo -e "INFO: Reloading firewalld settings? \c"
firewall-cmd --reload
echo "INFO: Setting up SELinux..."
setsebool -P httpd_unified 1
echo "INFO: Starting Apache, and create apache at the boot time"
systemctl start httpd
systemctl enable httpd
echo -e "INFO: Checking SSL status \c"
if [ "$ssl" = true ]; then
echo "true"
yum -y install yum-utils epel-release
yum-config-manager --enable rhui-REGION-rhel-server-extras rhui-REGION-rhel-server-optional
yum install certbot python2-certbot-apache
certbot --apache
echo -e "INFO: Allowing https service: \c"
firewall-cmd --zone=public --add-service=https --permanent
echo -e "INFO: Reloading settings: \c"
firewall-cmd --reload

else
echo "false"
fi
echo "INFO: Cleaning up..."
rm -rf target.tar
rm -rf parseoptimised
rm -rf install.sh
else
echo "INFO: Your Linux distribution is not supported yet"
fi
}
function others(){
echo "ERROR: Unsupported platform."
}
case "${unameOut}" in
    Linux*)     linux;;
    *)          others;;
esac