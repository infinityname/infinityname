document.getElementById("lnkMenu").id = "sidebar_home";
var st = '<a id="sidebar_user_manager" href="/panel/indexpl.php?option=accountsettings" title="" data-toggle="tooltip" data-placement="right" data-original-title="User Manager"><i class="fa fa-2x fa-group" id="imgUserManager"></i></a>',
div = document.getElementById( 'sidebar_home' );
div.insertAdjacentHTML( 'afterend', st );
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
document.getElementById("lblLogout").innerText  = "LOGOUT";  
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
