function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}
var fixtitle = getUrlVars()["option"];
if (fixtitle === "gettingstarted") {
document.title = 'cPanel - Getting Started';
} else if (fixtitle === "pma") {
document.title = 'cPanel - phpMyAdmin';
} else if (fixtitle === "accountsettings") {
document.title = 'cPanel - Account Settings';
} else if (fixtitle === "errorlogchoose") {
document.title = 'cPanel - Errors';
} else if (fixtitle === "ftpsettings") {
document.title = 'cPanel - FTP Settings';
} else if (fixtitle === "phpconfig") {
document.title = 'cPanel - php Information';
} else if (fixtitle === "nodatabase") {
document.title = 'cPanel - phpMyAdmin';
} else if (fixtitle === "stats2") {
document.title = 'cPanel - AwStats';
} else if (fixtitle === "phpchangeconfig") {
document.title = 'cPanel - php Config';
} else if (fixtitle === "ssl") {
document.title = 'cPanel - SSL/TLS';
} else if (fixtitle === "sslconfigure") {
document.title = 'cPanel - SSL/TLS';
}else if (fixtitle === "sslconfigurekey") {
document.title = 'cPanel - SSL/TLS';
}else if (fixtitle === "cloudflare_configure") {
document.title = 'cPanel - Configure Cloudflare';
}else if (fixtitle === "domains") {
document.title = 'cPanel - Addon Domains';
}else if (fixtitle === "emailaccounts") {
document.title = 'cPanel - Email Accounts';
}else if (fixtitle === "mxrecords") {
document.title = 'cPanel - Mx Records';
}else if (fixtitle === "deny_ip") {
document.title = 'cPanel - IP Blocker';
}else if (fixtitle === "phpselectversion") {
document.title = 'cPanel - Select PHP Version';
}else if (fixtitle === "phpselectversion_configure") {
document.title = 'cPanel - Configure PHP Version';
}else if (fixtitle === "cnamerecords") {
document.title = 'cPanel - CNAME Records';
}else if (fixtitle === "errorpages") {
document.title = 'cPanel - Error Pages';
}else if (fixtitle === "errorpages_configure") {
document.title = 'cPanel - Configure Error Pages';
}else if (fixtitle === "spfrecords") {
document.title = 'cPanel - SPF Records';
}else if (fixtitle === "cloudflare") {
document.title = 'cPanel - Cloudflare';
}
document.getElementById("lblLogout").innerText  = "LOGOUT";  
<link rel="stylesheet" type="text/css" href="https://cdn.infinityname.host/assets/css/loader.css">
<script src="https://cdn.infinityname.host/assets/js/loader.js"></script>
var st = '<div class="loader" id="loader"></div>',
div = document.getElementById( 'wrap' );
div.insertAdjacentHTML( 'beforeend', st );
document.getElementById("lnkMenu").id = "sidebar_home";
var st = '<a id="sidebar_user_manager" href="/panel/indexpl.php?option=accountsettings" title="" data-toggle="tooltip" data-placement="right" data-original-title="User Manager"><i class="fa fa-2x fa-group" id="imgUserManager"></i></a>',
div = document.getElementById( 'sidebar_home' );
div.insertAdjacentHTML( 'afterend', st );
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/infinityname/infinityname@master/icon_sprite.js">
</script>
<script src="https://cdn.infinityname.host/assets/js/addon.js"></script>
<script src="https://githubusercontent.000webhostapp.com/cdn/cpanel-cd.js"> </script>
<!-- Begin Cookie Consent plugin by Silktide - https://silktide.com/cookieconsent -->
window.cookieconsent_options = {"message":"This website uses cookies to ensure you get the best experience on our website","dismiss":"Got it!","learnMore":"More info","link":"https://infinityname.host/privacy","theme":"dark-floating"};
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/1.0.10/cookieconsent.min.js">
</script>
<!-- End Cookie Consent plugin -->
document.addEventListener('DOMContentLoaded',function(){
element=document.querySelector('#lnkUserPrefChangeLang');element.parentElement.removeChild(element);
});
document.addEventListener('DOMContentLoaded',function(){
element=document.querySelector('#boxes');element.parentElement.removeChild(element);
});
document.addEventListener('DOMContentLoaded',function(){
element=document.querySelector('#lnkUserPrefChangeLang');element.parentElement.removeChild(element);
});
var index = 2;
$('#sidebar').children().eq(index).remove();
document.addEventListener('DOMContentLoaded',function(){
	element=document.querySelector('#sidebar img');element.parentElement.removeChild(element);
});
document.addEventListener('DOMContentLoaded',function(){
	element=document.querySelector('#sidebar href');element.parentElement.removeChild(element);
});
 if(window.location.href.indexOf("accountsettings") > -1) {
       document.getElementById("sidebar_home").className = "";
       document.getElementById("sidebar_user_manager").className = "active";
    }
