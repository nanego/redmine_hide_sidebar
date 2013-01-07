function setCookie(c_name,value,exdays)
{
    var exdate=new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
    document.cookie=c_name + "=" + c_value + ";path=/";
}

function getCookie(c_name)
{
    var i,x,y,ARRcookies=document.cookie.split(";");
    for (i=0;i<ARRcookies.length;i++)
    {
        x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
        y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
        x=x.replace(/^\s+|\s+$/g,"");
        if (x==c_name)
            return unescape(y);
    }
}

function hideSideBar()
{
    if( document.getElementById("sidebar").style.display != 'none' )
    {
        document.getElementById("sidebar").style.display = 'none';
        document.getElementById('content').style.width="auto";
        document.getElementById('hideSidebarButton').className = 'hide';
        setCookie("sidebarCookie","hide",100);
    } else {
        document.getElementById("sidebar").style.display = 'block';
        document.getElementById('content').style.width="75%";
        document.getElementById('hideSidebarButton').className = 'show';
        setCookie("sidebarCookie","show",100);
    }
}