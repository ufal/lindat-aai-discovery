(function(a){function c(c){function h(){c?l.removeData(c):o&&delete d[o]}function f(){j.id=setTimeout(function(){j.fn()},q)}var k=this,l,j={},m=c?a.fn:a,n=arguments,r=4,o=n[1],q=n[2],p=n[3];"string"!==typeof o&&(r--,o=c=0,q=n[1],p=n[2]);c?(l=k.eq(0),l.data(c,j=l.data(c)||{})):o&&(j=d[o]||(d[o]={}));j.id&&clearTimeout(j.id);delete j.id;if(p)j.fn=function(a){"string"===typeof p&&(p=m[p]);!0===p.apply(k,e.call(n,r))&&!a?f():h()},f();else{if(j.fn)return void 0===q?h():j.fn(!1===q),!0;h()}}var d={},e=
Array.prototype.slice;a.doTimeout=function(){return c.apply(window,[0].concat(e.call(arguments)))};a.fn.doTimeout=function(){var a=e.call(arguments),d=c.apply(this,["doTimeout"+a[0]].concat(a));return"number"===typeof a[0]||"number"===typeof a[1]?this:d}})(jQuery);if("undefined"==typeof console)var console={log:function(){}};
var DiscoJuice={Constants:{Countries:{AF:"Afghanistan",AX:"\u00c5land Islands",AL:"Albania",DZ:"Algeria",AS:"American Samoa",AD:"Andorra",AO:"Angola",AI:"Anguilla",AQ:"Antarctica",AG:"Antigua and Barbuda",AR:"Argentina",AM:"Armenia",AW:"Aruba",AC:"Ascension Island",AU:"Australia",AT:"Austria",AZ:"Azerbaijan",BS:"Bahamas",BH:"Bahrain",BD:"Bangladesh",BB:"Barbados",BY:"Belarus",BE:"Belgium",BZ:"Belize",BJ:"Benin",BM:"Bermuda",BT:"Bhutan",BO:"Bolivia",BQ:"Bonaire, Sint Eustatius and Saba",BA:"Bosnia and Herzegovina",
BW:"Botswana",BV:"Bouvet Island",BR:"Brazil",IO:"British Indian Ocean Territory",VG:"British Virgin Islands",BN:"Brunei Darussalam",BG:"Bulgaria",BF:"Burkina Faso",MM:"Burma",BI:"Burundi",KH:"Cambodia",CM:"Cameroon",CA:"Canada",CV:"Cape Verde",KY:"Cayman Islands",CF:"Central African Republic",TD:"Chad",CL:"Chile",CN:"China",CX:"Christmas Island",CC:"Cocos (Keeling) Islands",CO:"Colombia",KM:"Comoros",CD:"Congo, Democratic Republic of the",CG:"Congo, Republic of the",CK:"Cook Islands",CR:"Costa Rica",
CI:"C\u00f4te d'Ivoire",HR:"Croatia",CU:"Cuba",CW:"Cura\u00e7ao",CY:"Cyprus",CZ:"Czech Republic",DK:"Denmark",DJ:"Djibouti",DM:"Dominica",DO:"Dominican Republic",EC:"Ecuador",EG:"Egypt",SV:"El Salvador",GQ:"Equatorial Guinea",ER:"Eritrea",EE:"Estonia",ET:"Ethiopia",FK:"Falkland Islands",FO:"Faroe Islands",FJ:"Fiji",FI:"Finland",FR:"France",GF:"French Guiana",PF:"French Polynesia",TF:"French Southern and Antarctic Lands",GA:"Gabon",GM:"Gambia",GE:"Georgia",DE:"Germany",GH:"Ghana",GI:"Gibraltar",GR:"Greece",
GL:"Greenland",GD:"Grenada",GP:"Guadeloupe",GU:"Guam",GT:"Guatemala",GG:"Guernsey",GN:"Guinea",GW:"Guinea-Bissau",GY:"Guyana",HT:"Haiti",HM:"Heard Island and McDonald Islands",HN:"Honduras",HK:"Hong Kong",HU:"Hungary",IS:"Iceland",IN:"India",ID:"Indonesia",IR:"Iran",IQ:"Iraq",IE:"Ireland",IM:"Isle of Man",IL:"Israel",IT:"Italy",JM:"Jamaica",JP:"Japan",JE:"Jersey",JO:"Jordan",KZ:"Kazakhstan",KE:"Kenya",KI:"Kiribati",KP:"North Korea",KR:"South Korea",KW:"Kuwait",KG:"Kyrgyzstan",LA:"Laos",LV:"Latvia",
LB:"Lebanon",LS:"Lesotho",LR:"Liberia",LY:"Libya",LI:"Liechtenstein",LT:"Lithuania",LU:"Luxembourg",MO:"Macau",MK:"Macedonia",MG:"Madagascar",MW:"Malawi",MY:"Malaysia",MV:"Maldives",ML:"Mali",MT:"Malta",MH:"Marshall Islands",MQ:"Martinique",MR:"Mauritania",MU:"Mauritius",YT:"Mayotte",MX:"Mexico",FM:"Micronesia, Federated States of",MD:"Moldova",MC:"Monaco",MN:"Mongolia",ME:"Montenegro",MS:"Montserrat",MA:"Morocco",MZ:"Mozambique",NA:"Namibia",NR:"Nauru",NP:"Nepal",NL:"Netherlands",NC:"New Caledonia",
NZ:"New Zealand",NI:"Nicaragua",NE:"Niger",NG:"Nigeria",NU:"Niue",NF:"Norfolk Island",MP:"Northern Mariana Islands",NO:"Norway",OM:"Oman",PK:"Pakistan",PW:"Palau",PS:"Palestine",PA:"Panama",PG:"Papua New Guinea",PY:"Paraguay",PE:"Peru",PH:"Philippines",PN:"Pitcairn Islands",PL:"Poland",PT:"Portugal",PR:"Puerto Rico",QA:"Qatar",RE:"R\u00e9union",RO:"Romania",RU:"Russia",RW:"Rwanda",BL:"Saint Barth\u00e9lemy",SH:"Saint Helena, Ascension and Tristan da Cunha",KN:"Saint Kitts and Nevis",LC:"Saint Lucia",
MF:"Saint Martin",PM:"Saint Pierre and Miquelon",VC:"Saint Vincent and the Grenadines",WS:"Samoa",SM:"San Marino",ST:"S\u00e3o Tom\u00e9 and Pr\u00edncipe",SA:"Saudi Arabia",SN:"Senegal",RS:"Serbia",SC:"Seychelles",SL:"Sierra Leone",SG:"Singapore",SX:"Sint Maarten",SK:"Slovakia",SI:"Slovenia",SB:"Solomon Islands",SO:"Somalia",ZA:"South Africa",GS:"South Georgia and the South Sandwich Islands",ES:"Spain",LK:"Sri Lanka",SD:"Sudan",SR:"Suriname",SJ:"Svalbard and Jan Mayen",SZ:"Swaziland",SE:"Sweden",
CH:"Switzerland",SY:"Syria",TW:"Taiwan",TJ:"Tajikistan",TZ:"Tanzania",TH:"Thailand",TL:"Timor-Leste",TG:"Togo",TK:"Tokelau",TO:"Tonga",TT:"Trinidad and Tobago",TN:"Tunisia",TR:"Turkey",TM:"Turkmenistan",TC:"Turks and Caicos Islands",TV:"Tuvalu",UG:"Uganda",UA:"Ukraine",GB:"UK",AE:"United Arab Emirates",UM:"United States Minor Outlying Islands",UY:"Uruguay",US:"USA",UZ:"Uzbekistan",VU:"Vanuatu",VA:"Vatican City",VE:"Venezuela",VN:"Viet Nam",VI:"Virgin Islands, U.S.",WF:"Wallis and Futuna",EH:"Western Sahara",
YE:"Yemen",ZM:"Zambia",ZW:"Zimbabwe",XX:"Experimental"},Flags:{AD:"ad.png",AE:"ae.png",AF:"af.png",AG:"ag.png",AI:"ai.png",AL:"al.png",AM:"am.png",AN:"an.png",AO:"ao.png",AR:"ar.png",AS:"as.png",AT:"at.png",AU:"au.png",AW:"aw.png",AX:"ax.png",AZ:"az.png",BA:"ba.png",BB:"bb.png",BD:"bd.png",BE:"be.png",BF:"bf.png",BG:"bg.png",BH:"bh.png",BI:"bi.png",BJ:"bj.png",BM:"bm.png",BN:"bn.png",BO:"bo.png",BR:"br.png",BS:"bs.png",BT:"bt.png",BV:"bv.png",BW:"bw.png",BY:"by.png",BZ:"bz.png",CA:"ca.png",CC:"cc.png",
CD:"cd.png",CF:"cf.png",CG:"cg.png",CH:"ch.png",CI:"ci.png",CK:"ck.png",CL:"cl.png",CM:"cm.png",CN:"cn.png",CO:"co.png",CR:"cr.png",CS:"cs.png",CU:"cu.png",CV:"cv.png",CX:"cx.png",CY:"cy.png",CZ:"cz.png",DE:"de.png",DJ:"dj.png",DK:"dk.png",DM:"dm.png",DO:"do.png",DZ:"dz.png",EC:"ec.png",EE:"ee.png",EG:"eg.png",EH:"eh.png",ER:"er.png",ES:"es.png",ET:"et.png",FI:"fi.png",FJ:"fj.png",FK:"fk.png",FM:"fm.png",FO:"fo.png",FR:"fr.png",GA:"ga.png",GB:"gb.png",GD:"gd.png",GE:"ge.png",GF:"gf.png",GH:"gh.png",
GI:"gi.png",GL:"gl.png",GM:"gm.png",GN:"gn.png",GP:"gp.png",GQ:"gq.png",GR:"gr.png",GS:"gs.png",GT:"gt.png",GU:"gu.png",GW:"gw.png",GY:"gy.png",HK:"hk.png",HM:"hm.png",HN:"hn.png",HR:"hr.png",HT:"ht.png",HU:"hu.png",ID:"id.png",IE:"ie.png",IL:"il.png",IN:"in.png",IO:"io.png",IQ:"iq.png",IR:"ir.png",IS:"is.png",IT:"it.png",JM:"jm.png",JO:"jo.png",JP:"jp.png",KE:"ke.png",KG:"kg.png",KH:"kh.png",KI:"ki.png",KM:"km.png",KN:"kn.png",KP:"kp.png",KR:"kr.png",KW:"kw.png",KY:"ky.png",KZ:"kz.png",LA:"la.png",
LB:"lb.png",LC:"lc.png",LI:"li.png",LK:"lk.png",LR:"lr.png",LS:"ls.png",LT:"lt.png",LU:"lu.png",LV:"lv.png",LY:"ly.png",MA:"ma.png",MC:"mc.png",MD:"md.png",ME:"me.png",MG:"mg.png",MH:"mh.png",MK:"mk.png",ML:"ml.png",MM:"mm.png",MN:"mn.png",MO:"mo.png",MP:"mp.png",MQ:"mq.png",MR:"mr.png",MS:"ms.png",MT:"mt.png",MU:"mu.png",MV:"mv.png",MW:"mw.png",MX:"mx.png",MY:"my.png",MZ:"mz.png",NA:"na.png",NC:"nc.png",NE:"ne.png",NF:"nf.png",NG:"ng.png",NI:"ni.png",NL:"nl.png",NO:"no.png",NP:"np.png",NR:"nr.png",
NU:"nu.png",NZ:"nz.png",OM:"om.png",PA:"pa.png",PE:"pe.png",PF:"pf.png",PG:"pg.png",PH:"ph.png",PK:"pk.png",PL:"pl.png",PM:"pm.png",PN:"pn.png",PR:"pr.png",PS:"ps.png",PT:"pt.png",PW:"pw.png",PY:"py.png",QA:"qa.png",RE:"re.png",RO:"ro.png",RS:"rs.png",RU:"ru.png",RW:"rw.png",SA:"sa.png",SB:"sb.png",SC:"sc.png",SD:"sd.png",SE:"se.png",SG:"sg.png",SH:"sh.png",SI:"si.png",SJ:"sj.png",SK:"sk.png",SL:"sl.png",SM:"sm.png",SN:"sn.png",SO:"so.png",SR:"sr.png",ST:"st.png",SV:"sv.png",SY:"sy.png",SZ:"sz.png",
TC:"tc.png",TD:"td.png",TF:"tf.png",TG:"tg.png",TH:"th.png",TJ:"tj.png",TK:"tk.png",TL:"tl.png",TM:"tm.png",TN:"tn.png",TO:"to.png",TR:"tr.png",TT:"tt.png",TV:"tv.png",TW:"tw.png",TZ:"tz.png",UA:"ua.png",UG:"ug.png",UM:"um.png",US:"us.png",UY:"uy.png",UZ:"uz.png",VA:"va.png",VC:"vc.png",VE:"ve.png",VG:"vg.png",VI:"vi.png",VN:"vn.png",VU:"vu.png",WF:"wf.png",WS:"ws.png",YE:"ye.png",YT:"yt.png",ZA:"za.png",ZM:"zm.png",ZW:"zw.png"}}};
DiscoJuice.Utils={log:function(a){console.log(a)},options:function(){var a;return{get:function(c,d){return!a||"undefined"===typeof a[c]?d:a[c]},set:function(c){a=c},update:function(c,d){a[c]=d}}}(),escapeHTML:function(a){return a.replace(/&/g,"&amp;").replace(/>/g,"&gt;").replace(/</g,"&lt;").replace(/"/g,"&quot;")},addQueryParam:function(a,c,d){var e=-1!=a.indexOf("?")?"&":"?";"?"===a.charAt(a.length-1)&&(e="");return a+e+encodeURIComponent(c)+"="+encodeURIComponent(d)},createCookie:function(a,c){var d=
"_DiscoJuice_"+(c||"EntityID"),e=new Date;e.setTime(e.getTime()+15768E7);e="; expires="+e.toGMTString();document.cookie=d+"="+escape(a)+e+"; path=/"},readCookie:function(a){for(var a="_DiscoJuice_"+(a||"EntityID")+"=",c=document.cookie.split(";"),d=0;d<c.length;d++){for(var e=c[d];" "==e.charAt(0);)e=e.substring(1,e.length);if(0==e.indexOf(a))return unescape(e.substring(a.length,e.length))}return null},eraseCookie:function(a){DiscoJuice.createCookie("_DiscoJuice_"+(a||"EntityID"),"",-1)},searchMatch:function(a,
c){if(-1!==a.title.toLowerCase().search(c.toLowerCase())||a.descr&&-1!==a.descr.toLowerCase().search(c.toLowerCase()))return!0;var d,g;if(a.keywords)for(d in a.keywords){g=a.keywords[d];if(-1!==g.toLowerCase().search(c.toLowerCase()))return g}return!1},calculateDistance:function(a,c,d,e){var g=this.toRad(d-a),c=this.toRad(e-c),a=Math.sin(g/2)*Math.sin(g/2)+Math.cos(this.toRad(a))*Math.cos(this.toRad(d))*Math.sin(c/2)*Math.sin(c/2);return 6371*2*Math.atan2(Math.sqrt(a),
Math.sqrt(1-a))},toRad:function(a){return a*Math.PI/180},waiter:function(a,c){function d(){h?console.log("Execution cancelled. Already performed."):(h=!0,a(e))}var e={},g=[],h=!1;e.allowMultiple=!1;e.startTimer=function(){0===g.length?(console.log("Executing because no action is scheduled...."),h||d()):setTimeout(function(){console.log("Action timeout!");h||d()},c)};e.runAction=function(a,c){var l={completed:!1};g.push(l);console.log("Running action "+g.length);a(function(){var a;l.completed=!0;for(a=
0;a<g.length;a++)if(!g[a].completed){console.log("Cannot execute because we are waiting for another action to complete.");return}h?e.allowMultiple?(console.log("Slow response; but executing anyway!!"),d()):"function"===typeof c&&(console.log("All actions completed. Too late for executing..."),c()):(console.log("All actions completed. Executing!"),d())})};return e}};
(function(a){a.fn.DiscoJuice=function(a){return this.each(function(d,e){/*console.log("Target is");console.log(e);*/a.target=e;DiscoJuice.Utils.options.set(a);DiscoJuice.Control.ui=DiscoJuice.UI;DiscoJuice.UI.control=DiscoJuice.Control;DiscoJuice.UI.enable(this)})}})(jQuery);"undefined"==typeof DiscoJuice&&(DiscoJuice={});
DiscoJuice.UI={parent:DiscoJuice,control:null,popup:null,alreadyLoaded:{},resulthtml:"Loading data\u2026",show:function(){this.control.load();this.popup.fadeIn("slow");$("div#discojuice_overlay").show();this.focusSearch()},focusSearch:function(){$("input.discojuice_search").focus()},hide:function(){$("div#discojuice_overlay").fadeOut("slow");this.popup.fadeOut("slow")},clearItems:function(){this.resulthtml="";this.alreadyLoaded={}},sprintf:function(){if(arguments&&!(1>arguments.length)&&RegExp){for(var a=
arguments[0],c=/([^%]*)%('.|0|\x20)?(-)?(\d+)?(\.\d+)?(%|b|c|d|u|f|o|s|x|X)(.*)/,d=b=[],e=0,g=0;d=c.exec(a);){var a=d[1],h=d[2],f=d[4],k=d[5],l=d[6],d=d[7];g++;if("%"==l)k="%";else{e++;e>=arguments.length&&alert("Error! Not enough function arguments ("+(arguments.length-1)+", excluding the string)\nfor the number of substitution parameters in string ("+e+" so far).");var j=arguments[e],m="";h&&"'"==h.substr(0,1)?m=a.substr(1,1):h&&(m=h);h=-1;f&&(h=parseInt(f));f=-1;k&&"f"==l&&(f=parseInt(k.substring(1)));
k=j;switch(l){case "b":k=parseInt(j).toString(2);break;case "c":k=String.fromCharCode(parseInt(j));break;case "d":k=parseInt(j)?parseInt(j):0;break;case "u":k=Math.abs(j);break;case "f":k=-1<f?Math.round(parseFloat(j)*Math.pow(10,f))/Math.pow(10,f):parseFloat(j);break;case "o":k=parseInt(j).toString(8);break;case "s":k=j;break;case "x":k=(""+parseInt(j).toString(16)).toLowerCase();break;case "X":k=(""+parseInt(j).toString(16)).toUpperCase()}l=h-k.toString().length;m=0<l?Array(l+1).join(m?m:" "):""}a=
a+m+k+d}return a}},addItem:function(a,c,d,e,g,h){var f="",h=h?"enabled":"disabled",k=this.parent.Utils.options.get("discoPath","")+"logos/",l=this.parent.Utils.options.get("discoPath","")+"flags/",j=!1,m=this.parent.Utils.options.get("debug.weight",!1),n=a.entityID;a.subID&&(n+="#"+a.subID);if(!this.alreadyLoaded[n]){this.alreadyLoaded[n]=!0;a.icon&&this.parent.Utils.options.get("showIcon",!0)&&(f+='<img class="logo" src="'+k+a.icon+'" />',j=!0);g&&(f+='<span style="font-size: 80%; -webkit-border-radius: 3px; -moz-border-radius: 3px; border-radius: 3px; border: 1px solid #ccc; background: #eee; color: #777; padding: 3px 2px 0px 2px; margin: 3px; float: left; left: -10px">&#8629;</span>');
f+='<span class="title">'+a.title+"</span>";d&&!0!==d?f+='<span class="substring">&#8212; '+d+"</span>":a.descr&&(f+='<span class="substring">&#8212; '+a.descr+"</span>");if((c||void 0!=e)&&this.parent.Utils.options.get("showLocationInfo",!0))f+='<span class="location">',c&&(f+='<span class="country">',c.flag&&(f+='<img src="'+l+c.flag+'" alt="'+escape(c.country)+'" /> '),f+=c.country+"</span>"),void 0!=e&&(f=1>e?f+('<span class="distance">'+DiscoJuice.Dict.nearby+"</span>"):f+('<span class="distance">'+
Math.round(e)+" km</span>")),f+="</span>";m&&(f+='<div class="debug">',a.subID&&(f+='<input value="'+a.subID+'" />'),c=0,a.weight&&(c+=a.weight),a.distanceweight&&(c+=a.distanceweight),f+='Weight <strong style="color: #888">'+Math.round(100*c)/100+"</strong> ",a.weight&&(f+=" (base "+a.weight+")   "),a.distanceweight&&(f+="(dist "+Math.round(100*a.distanceweight)/100+")"),f+="</div>");j&&(f+='<hr style="clear: both; height: 0px; visibility:hidden" />');f='<a href="" class="'+h+'" rel="'+escape(n)+
'" title="'+DiscoJuice.Utils.escapeHTML(a.title)+'">'+f+"</a>";this.resulthtml+=f}},setScreen:function(a){$("div.discojuice_listContent").hide();$("div#locatemediv").hide();$("div#search").hide();$("div.filters").hide();$("div#discojuice_page div.discojuice_content").html(a);$("div#discojuice_page").show();$("div#discojuice_page_return").show();console.log($("div#discojuice_page"))},returnToProviderList:function(){$("div.discojuice_listContent").show();$("div#discojuice_page").hide();$("div#discojuice_page_return").hide();
this.parent.Utils.options.get("location",!1)&&navigator.geolocation&&$("div#locatemediv").show();$("div#search").show();$("div.filters").show()},refreshData:function(a,c,d){var e=this;this.parent.Utils.log("DiscoJuice.UI refreshData()");this.popup.find("div.scroller").empty().append(this.resulthtml);this.popup.find("div.scroller a").each(function(){$(this).click(function(a){a.preventDefault();a.stopPropagation();var c=unescape($(this).attr("rel")),a=c,d=void 0;c.match(/^.*#.+?$/)&&(c=/^(.*)#(.+?)$/.exec(c),
a=c[1],d=c[2]);e.control.selectProvider(a,d)})});a?(a='<a class="discojuice_showmore textlink" href="">'+this.sprintf(DiscoJuice.Dict.moreLink,c,this.parent.Control.data.length)+"\u2026</a>",this.popup.find("p.discojuice_moreLinkContainer").empty().append(a),this.popup.find("p.discojuice_moreLinkContainer a.discojuice_showmore").click(function(a){a.preventDefault();e.control.increase()})):(this.popup.find("p.discojuice_moreLinkContainer").empty(),10<d&&this.popup.find("p.discojuice_moreLinkContainer").append('<span style="color: #888">'+
d+" entries listed</span>"))},error:function(a){console.log("error"+a);this.popup.find("div#discojuice_error").show();this.popup.find("div.discojuice_errortext").append('<p style="border-bottom: 1px dotted #ddd; margin-bottom: 3px" class="discojuice_errortext">'+a+"</p>")},enable:function(a){var c=this.parent.Utils.options.get("discoPath","")+"images/",d=this.parent.Utils.options.get("textSearch",DiscoJuice.Dict.orSearch),e=this.parent.Utils.options.get("textHelp",DiscoJuice.Dict.help),g=this.parent.Utils.options.get("textHelpMore",
DiscoJuice.Dict.helpMore),h=this.parent.Utils.options.get("subtitle",null),c='<div style="display: none" class="discojuice"><div class="top"><a href="#" class="discojuice_close">&nbsp;</a><p class="discojuice_maintitle">'+this.parent.Utils.options.get("title","Title")+"</p>"+(null!==h?'<p class="discojuice_subtitle">'+h+"</p>":"")+'</div><div class="discojuice_listContent" style=""><div class="scroller"><a href="" class="enabled" rel="https%3A//cas.cuni.cz/idp/shibboleth" title="Univerzita Karlova v Praze"><span style="font-size: 80%; -webkit-border-radius: 3px; -moz-border-radius: 3px; border-radius: 3px; border: 1px solid #ccc; background: #eee; color: #777; padding: 3px 2px 0px 2px; margin: 3px; float: left; left: -10px">?</span><span class="title">Univerzita Karlova v Praze</span><span class="location"><span class="country"><img src="' + this.parent.Utils.options.get("discoPath", "") + 'flags/cz.png" alt="Czech%20Republic"> Czech Republic</span></span></a><div class="loadingData" ><img src="'+c+'spinning.gif" /> '+DiscoJuice.Dict.loading+'...</div></div><p class="discojuice_moreLinkContainer" style="margin: 0px; padding: 4px">&nbsp;</p></div><div id="discojuice_page" style="display: none"  class="" ><div class="discojuice_content" style=""></div></div><div id="discojuice_page_return" style="display: none"  class="" ><div class="" style=""><input id="discojuice_returntoproviderlist" type="submit" value="\u00ab '+
DiscoJuice.Dict.pageReturn+'" /></div></div><div id="search" class="" ><p><input type="search" class="discojuice_search" results=5 autosave="discojuice" name="searchfield" placeholder="'+d+'" value="" /></p><div class="discojuice_whatisthis" style="margin-top: 15px;"><a  href="#" class="textlink discojuice_what">'+e+'</a><p class="discojuice_whattext">'+g+'</p></div></div><div id="discojuice_error" style="display: none"  class="" ><img src="'+c+'error.png" style="float: left" /><div class="discojuice_errortext" style="clear: none; margin-top: 0px; margin-left: 30px; font-size: 11px;"></div></div><div id="locatemediv"><div class="locatemebefore"><p style="margin-top: 10px"><a id="locateme" href=""><img style="float: left; margin-right: 5px; margin-top: -10px" src="'+
c+'target.png" alt="locate me..." />'+DiscoJuice.Dict.locateMe+'</a></p><p style="color: #999" id="locatemeinfo"></p></div><div style="clear: both" class="locatemeafter"></div></div><div style="display: none"><button id="discojuiceextesion_listener" /></div><div class="bottom"><div class="filters" style="padding: 0px; margin: 0px"></div><p id="dj_help" style="margin 0px; text-align: right; color: #ccc; font-size: 75%">DiscoJuice &copy; UNINETT <img class="" style="position: relative; bottom: -4px; right: -5px" alt="Information" src="'+
c+'info.png" />';"</p></div></div>";var f=this,d=$("body");this.parent.Utils.options.get("useTarget",!1)&&(d=this.parent.Utils.options.get("target",d));/*console.log("Target is");console.log(d);*/this.parent.Utils.options.get("overlay",!0)&&(/*console.log("DiscoJuice Enable: adding overlay"),*/$('<div id="discojuice_overlay" style="display: none"></div>').appendTo($("body")));this.popup=$(c).appendTo(d);
	var that = this;
	this.popup.find("div.scroller a").each(function() {
                        var overthere = that;        // Overthere is a reference to the UI object
                        $(this).click(function(event) {
                                event.preventDefault();
                                event.stopPropagation();
                                // The "rel" attribute is containing: 'entityid#subid'
                                // THe following code, decodes that.
                                var relID = unescape($(this).attr('rel'));
                                var entityID = relID;
                                var subID = undefined;
                                if (relID.match(/^.*#.+?$/)) {
                                        var matched = /^(.*)#(.+?)$/.exec(relID);
                                        entityID = matched[1];
                                        subID = matched[2];
                                }
                                overthere.control.selectProvider(entityID, subID);
			})});!0===this.parent.Utils.options.get("always",!1)?(this.popup.find(".discojuice_close").hide(),this.show()):
$(a).click(function(a){a.preventDefault();f.show();return!1});this.popup.find("p#dj_help").click(function(){f.setScreen("<h2>"+DiscoJuice.Dict.about+'</h2><p style="margin: .5em 0px">'+f.sprintf(DiscoJuice.Dict.aboutDescr,'<a href="http://uninett.no">',"</a>")+'</p><p style="margin: .5em 10px"><a href="http://discojuice.org" target="_blank">'+DiscoJuice.Dict.aboutMore+'</a></p><p style="margin: .5em 0px; font-size: 80%">'+DiscoJuice.Dict.version+": "+DiscoJuice.Version)});this.popup.find("#discojuiceextesion_listener").click(function(){f.control.discojuiceextension()});
this.popup.find("#discojuice_page_return input").click(function(a){a.preventDefault();f.returnToProviderList()});this.popup.find(".discojuice_close").click(function(){f.hide()});this.popup.find(".discojuice_what").click(function(){f.popup.find(".discojuice_whatisthis").toggleClass("show")});this.parent.Utils.options.get("location",!1)&&navigator.geolocation&&(f=this,$("a#locateme").click(function(a){var c=f.parent.Utils.options.get("discoPath","")+"images/";f.parent.Utils.log("Locate me. Detected click event.");
a.preventDefault();a.stopPropagation();$("div.locatemebefore").hide();$("div.locatemeafter").html('<div class="loadingData" ><img src="'+c+'spinning.gif" /> '+DiscoJuice.Dict.locating+"...</div>");f.control.locateMe()}))},setLocationText:function(a){return $("div.locatemeafter").html(a)},addContent:function(a){return $(a).appendTo($("body"))},addFilter:function(a){return $(a).prependTo(this.popup.find(".filters"))}};"undefined"==typeof DiscoJuice&&(DiscoJuice={});
DiscoJuice.Control={parent:DiscoJuice,ui:null,data:null,quickEntry:null,subsetEnabled:null,filters:{},location:null,showdistance:!1,maxhits:25,extensionResponse:null,wncr:[],registerCallback:function(a){this.wncr.push(a);return this.wncr.length-1},runCallback:function(a){if(this.wncr[a]&&"function"===typeof this.wncr[a])this.wncr[a]()},load:function(){var a=this;if(!this.data){this.data=[];this.subsetEnabled=this.parent.Utils.options.get("subsetEnabled",null);var c=this.parent.Utils.options.get("inlinemetadata"),
d=this.parent.Utils.options.get("metadata"),e=[],g={},h=null,f;"string"===typeof d?e.push(d):"object"===typeof d&&d&&(e=d);"object"===typeof c&&c&&(this.data=c);this.parent.Utils.log("metadataurl is "+d);if(d){c=this.parent.Utils.options.get("disco");this.parent.Utils.options.get("discoSetRequestor",!1)&&(g.entityID=c.spentityid);a.parent.Utils.log("Setting up load() waiter");c=DiscoJuice.Utils.waiter(function(){a.parent.Utils.log("load() waiter EXECUTE");a.postLoad()},1E4);for(f=0;f<e.length;f++)h=
e[f],c.runAction(function(c){var d=f+1;$.ajax({url:h,dataType:"jsonp",jsonpCallback:function(){return"dj_md_"+d},cache:!0,data:g,success:function(f){a.data=$.merge(a.data,f);a.parent.Utils.log("Successfully loaded metadata ("+f.length+") ("+d+" of "+e.length+")");c()}})},function(){var c=h;return function(){a.ui.error("Metadata retrieval from ["+c+"] too slow. Ignoring response.")}}());c.startTimer()}}},postLoad:function(){var a=this,c;if(this.data){for(i=0;i<this.data.length;i++)!this.data[i].title&&
this.data[i].DisplayNames&&(this.data[i].title=this.data[i].DisplayNames[0].value);a.parent.Utils.options.get("country",!1)&&a.filterCountrySetup();a.readCookie();a.readExtensionResponse();a.parent.Utils.log("Setting up postLoad() waiter");c=DiscoJuice.Utils.waiter(function(){a.prepareData();a.searchboxSetup();a.parent.Utils.log("postLoad() waiter EXECUTE")},2E3);c.allowMultiple=!0;a.discoReadSetup(c);a.discoSubReadSetup(c);a.getCountry(c);c.startTimer()}},readCookie:function(){if(this.parent.Utils.options.get("cookie",
!1)){var a=this.parent.Utils.readCookie(),c=a,d=void 0;a&&a.match(/^.*#.+?$/)&&(d=/^(.*)#(.+?)$/.exec(a),c=d[1],d=d[2]);this.parent.Utils.log("COOKIE read "+a);a&&this.setWeight(-100,c,d)}},readExtensionResponse:function(){this.extensionResponse&&(this.extensionResponse.autologin&&this.selectProvider(this.extensionResponse.entityID,this.extensionResponse.subID),this.extensionResponse.selectedRelID&&this.setWeight(-100,this.extensionResponse.entityID,this.extensionResponse.subID),this.parent.Utils.log("DiscoJuice Extension readExtensionResponse "+
this.extensionResponse.entityID+" "+this.extensionResponse.subID))},discojuiceextension:function(){var a=$("meta#discojuiceextension_id").attr("content");if(a){var c=a,d=void 0;a&&a.match(/^.*#.+?$/)&&(d=/^(.*)#(.+?)$/.exec(a),c=d[1],d=d[2]);this.parent.Utils.log("DiscoJuice Extension read "+a+" "+c+" "+d);var e=$("meta#discojuice_autologin").attr("content");this.extensionResponse={selectedRelID:a,entityID:c,subID:d,autologin:e}}},setWeight:function(a,c,d){for(i=0;i<this.data.length;i++)if(this.data[i].entityID===
c&&(!d||this.data[i].subID))if(!(d&&d!==this.data[i].subID)&&(!this.data[i].subID||d)){isNaN(this.data[i].weight)&&(this.data[i].weight=0);this.data[i].weight+=a;this.parent.Utils.log("COOKIE Setting weight to "+this.data[i].weight);return}this.parent.Utils.log("DiscoJuice setWeight failer (no entries found for) "+c+" # "+d)},discoResponseError:function(a,c){this.parent.Utils.log("DiscoResponse ERROR Received cid="+a);a&&this.runCallback(a);c&&this.ui.error(c)},discoResponse:function(a,c,d,e){this.parent.Utils.log("DiscoResponse Received from ["+
a+"] entityID: "+c+" subID: "+d);var a=!0,g=this.parent.Utils.options.get("disco");if(g&&(g=g.subIDstores)&&g[c]&&!d)this.parent.Utils.log("Ignoring discoResponse from entityID: "+c+" because subID was required and not provided"),a=!1;a&&this.setWeight(-100,c,d);e?this.runCallback(e):this.prepareData()},calculateDistance:function(a){for(var c,d,e=0;e<this.data.length;e++)if(this.data[e].geo){c=[];d=[];"object"==typeof this.data[e].geo&&this.data[e].geo instanceof Array?c=this.data[e].geo:c.push(this.data[e].geo);
for(var g=0;g<c.length;g++)d.push(this.parent.Utils.calculateDistance(c[g].lat,c[g].lon,this.location[0],this.location[1]));this.data[e].distance=Math.min.apply(Math,d);this.data[e].distanceweight=2*Math.log(this.data[e].distance+1)-10}this.showdistance=!0;a&&this.prepareData()},locateMe:function(){var a=this;this.parent.Utils.log("Locate Me");navigator.geolocation?navigator.geolocation.getCurrentPosition(function(c){a.ui.setLocationText("You are here: "+c.coords.latitude+", "+c.coords.longitude+
". Nearby providers shown on top.");a.location=[c.coords.latitude,c.coords.longitude];a.calculateDistance(!0)},function(c){switch(c.code){case c.TIMEOUT:a.ui.setLocationText("Timeout");break;case c.POSITION_UNAVAILABLE:a.ui.setLocationText("Position unavailable");break;case c.PERMISSION_DENIED:a.ui.setLocationText("Permission denied");break;case c.UNKNOWN_ERROR:a.ui.setLocationText("Unknown error")}}):this.parent.Utils.log("Did not find navigator.geolocation")},increase:function(){this.maxhits+=100;
this.prepareData()},isEnabled:function(a){var c=a.entityID;a.subID&&(c+="#"+a.subID);return null===this.subsetEnabled||this.subsetEnabled[c]||this.subsetEnabled[a.entityID]?!0:!1},prepareData:function(){this.parent.Utils.log("DiscoJuice.Control prepareData()");var a,c,d,e,g=!1,h=this.getTerm(),f=this.getCategories();this.quickEntry=null;if(this.data){this.data.sort(function(a,c){var d,e;d=a.weight?a.weight:0;e=c.weight?c.weight:0;a.distanceweight&&(d+=a.distanceweight);c.distanceweight&&(e+=c.distanceweight);
return d-e});h||f?this.ui.popup.find("p.discojuice_showall").show():this.ui.popup.find("p.discojuice_showall").hide();this.ui.clearItems();var k=!1;for(c=a=0;c<this.data.length;c++)if(d=this.data[c],d.weight||(d.weight=0),d.title){if(h){if(e=this.parent.Utils.searchMatch(d,h),!1===e)continue}else e=null;if(f&&f.country){if(!d.country)continue;if("_all_"!==d.country&&f.country!==d.country&&-50<d.weight)continue}if(++a>this.maxhits){g=!0;break}var l=null;if(d.country){var j=this.parent.Constants.Countries[d.country]?
this.parent.Constants.Countries[d.country]:d.country;"_all_"!==j&&(l={country:j,flag:this.parent.Constants.Flags[d.country]?this.parent.Constants.Flags[d.country]:void 0})}j=!1;k||(h&&!1!==e?k=j=!0:h||(k=j=!0));var m=this.isEnabled(d);this.ui.addItem(d,l,e,d.distance,j,m);j&&(this.quickEntry=d)}else this.parent.Utils.log("No title for this entry ["+d.entityID+d.relID+"] skipping.");this.ui.refreshData(g,this.maxhits,a)}},hitEnter:function(){this.parent.Utils.log(this.quickEntry);this.selectProvider(this.quickEntry.entityID,
this.quickEntry.subID)},selectProvider:function(a,c){var d,e=this,g=null;d=this.parent.Utils.options.get("callback");for(i=0;i<this.data.length;i++)if(this.data[i].entityID==a&&(!c||c==this.data[i].subID))g=this.data[i];
if(g==null) g={'country': 'CZ','entityID': 'https://cas.cuni.cz/idp/shibboleth','geo': {'lat': '50.0705102', 'lon': '14.4198844'},'title': 'Univerzita Karlova v Praze','weight': -1000};
if(g.auth&&"local"===g.auth)this.parent.Utils.log("local"),d(g,e);else{var h=e.discoWrite(a,c);if(this.parent.Utils.options.get("cookie",!1)){var f=a;c&&(f+="#"+c);this.parent.Utils.log("COOKIE write "+f);this.parent.Utils.createCookie(f)}this.parent.Utils.log("Entity Selected");this.parent.Utils.log(g);
d&&(h?$.doTimeout(1E3,function(){d(g,e)}):d(g,e))}},discoReadSetup:function(a){var c=this,d=this.parent.Utils.options.get("disco");if(d){var e="",g=d.url,h=d.spentityid,f=d.stores,k,l,j,m;if(f)for(k=0;k<f.length;k++)a.runAction(function(a){j=c.registerCallback(a);m=DiscoJuice.Utils.addQueryParam(g,"cid",j);l=f[k];c.parent.Utils.log("Setting up DisoJuice Read from Store ["+l+"]");iframeurl=l+"?entityID="+escape(h)+"&isPassive=true&returnIDParam=entityID&return="+escape(m);e='<iframe src="'+iframeurl+
'" style="display: none"></iframe>';c.ui.addContent(e)})}},discoSubReadSetup:function(a){var c=this.parent.Utils.options.get("disco"),d=this;this.parent.Utils.log("discoSubReadSetup()");if(c){var e="",g=c.url,h=c.spentityid,f=c.subIDstores,k,l;if(f)for(var j in f)this.parent.Utils.log("discoSubReadSetup()"),a.runAction(function(a){l=d.registerCallback(a);g=c.url+"?entityID="+escape(j)+"&cid="+l;k=f[j];d.parent.Utils.log("Setting up SubID DisoJuice Read from Store ["+j+"] =>  ["+k+"]");iframeurl=k+
"?entityID="+escape(h)+"&isPassive=true&returnIDParam=subID&return="+escape(g);d.parent.Utils.log("iFrame URL is  ["+iframeurl+"]");d.parent.Utils.log("return URL is  ["+g+"]");e='<iframe src="'+iframeurl+'" style="display: none"></iframe>';d.ui.addContent(e)})}},discoWrite:function(a,c){var d=this.parent.Utils.options.get("disco");if(!d||!d.writableStore)return!1;var e=d.url,g=d.spentityid,h=d.writableStore,f=a;this.parent.Utils.log("DiscoJuice.Control discoWrite()");if(c){this.parent.Utils.log("DiscoJuice.Control discoWrite(...)");
if(d.subIDwritableStores&&d.subIDwritableStores[a])return this.parent.Utils.log("DiscoJuice.Control discoWrite("+a+") with SubID ["+c+"]"),iframeurl=d.subIDwritableStores[a]+escape(c),this.parent.Utils.log("DiscoJuice.Control discoWrite iframeURL ("+iframeurl+") "),this.ui.addContent('<iframe src="'+iframeurl+'" style="display: none"></iframe>'),!0;f+="#"+c}this.parent.Utils.log("DiscoJuice.Control discoWrite("+f+") to "+h);iframeurl=DiscoJuice.Utils.addQueryParam(h,"origin",g);iframeurl=DiscoJuice.Utils.addQueryParam(iframeurl,
"IdPentityID",f);iframeurl=DiscoJuice.Utils.addQueryParam(iframeurl,"isPassive","true");iframeurl=DiscoJuice.Utils.addQueryParam(iframeurl,"returnIDParam","bogus");iframeurl=DiscoJuice.Utils.addQueryParam(iframeurl,"return",e);this.parent.Utils.log("DiscoJuice.Control discoWrite iframeURL (2)("+iframeurl+") ");this.ui.addContent('<iframe src="'+iframeurl+'" style="display: none"></iframe>');return!0},searchboxSetup:function(){var a=this,c=function(a){var c={delay:400,counter:0};c.callback=a;c.ping=
function(a){c.counter++;setTimeout(function(){0===--c.counter&&c.callback(a)},c.delay)};return c}(function(){term=a.ui.popup.find("input.discojuice_search").val();1!==term.length&&a.prepareData()});this.ui.popup.find("input.discojuice_search").keydown(function(d){var e;d&&d.which?e=d.which:window.event&&(d=window.event,e=d.keyCode);13==e?a.hitEnter():27==e?a.ui.hide():c.ping(d)});this.ui.popup.find("input.discojuice_search").change(function(a){c.ping(a)});this.ui.popup.find("input.discojuice_search").mousedown(function(a){c.ping(a)})},
filterCountrySetup:function(a){var c=this,d;this.parent.Utils.log("filterCountrySetup()");var e={};for(d in this.data)this.data[d].country&&"_all_"!==this.data[d].country&&(e[this.data[d].country]=!0);var g=0;for(d in e)g++;g=this.parent.Utils.options.get("setCountry");!a&&g&&filterOptions[g]&&(a=g);g='<p class="discojuice_filter_country">'+DiscoJuice.Dict.showIn+' <select class="discojuice_filterCountrySelect" name="filterCountrySelect">';g=a?g+('<option value="all">'+DiscoJuice.Dict.allCountries+
"</option>"):g+('<option value="all" selected="selected">'+DiscoJuice.Dict.allCountries+"</option>");for(d in this.parent.Constants.Countries)d===a?g+='<option value="'+d+'" selected="selected">'+this.parent.Constants.Countries[d]+"</option>":e[d]&&(g+='<option value="'+d+'" >'+this.parent.Constants.Countries[d]+"</option>");g=g+"</select>"+(' <a class="discojuice_showall textlink" href="">'+DiscoJuice.Dict.showAllCountries+"</a>");this.ui.addFilter(g+"</p>").find("select").change(function(a){a.preventDefault();
c.resetTerm();c.ui.focusSearch();"all"!==c.ui.popup.find("select.discojuice_filterCountrySelect").val()?c.ui.popup.find("a.discojuice_showall").show():c.ui.popup.find("a.discojuice_showall").hide();c.prepareData()});this.ui.popup.find("a.discojuice_showall").click(function(a){a.preventDefault();c.resetCategories();c.resetTerm();c.prepareData(!0);c.ui.focusSearch();c.ui.popup.find("a.discojuice_showall").hide()})},setCountry:function(a,c){this.parent.Constants.Countries[a]&&(this.ui.popup.find("select.discojuice_filterCountrySelect").val(a),
c&&this.prepareData())},setPosition:function(a,c,d){this.location=[a,c];this.calculateDistance(d)},getCountry:function(a){var c=this.parent.Utils.options.get("countryAPI",!1),d=this;if(c){var e=this.parent.Utils.readCookie("Country2"),g=parseFloat(this.parent.Utils.readCookie("GeoLat")),h=parseFloat(this.parent.Utils.readCookie("GeoLon"));e?(this.setCountry(e,!1),this.parent.Utils.log("DiscoJuice getCountry() : Found country in cache: "+e),g&&h&&this.setPosition(g,h,!1)):a.runAction(function(a){$.ajax({cache:!0,
url:c,dataType:"jsonp",jsonpCallback:function(){return"dj_country"},success:function(c){c&&"ok"==c.status&&c.country?(d.parent.Utils.createCookie(c.country,"Country2"),d.setCountry(c.country,!1),d.parent.Utils.log("DiscoJuice getCountry() : Country lookup succeeded: "+c.country),c.geo&&c.geo.lat&&c.geo.lon&&(d.setPosition(c.geo.lat,c.geo.lon,!1),d.parent.Utils.createCookie(c.geo.lat,"GeoLat"),d.parent.Utils.createCookie(c.geo.lon,"GeoLon"))):c&&c.error?(d.parent.Utils.log("DiscoJuice getCountry() : Country lookup failed: "+
(c.error||"")),d.ui.error("Error looking up users localization by country: "+(c.error||""))):(d.parent.Utils.log("DiscoJuice getCountry() : Country lookup failed"),d.ui.error("Error looking up users localization by country."));a()}})})}},resetCategories:function(){this.ui.popup.find("select.discojuice_filterCountrySelect").val("all")},getCategories:function(){var a={},c;if((c=this.ui.popup.find("select.discojuice_filterTypeSelect").val())&&"all"!==c)a.type=c;if((c=this.ui.popup.find("select.discojuice_filterCountrySelect").val())&&
"all"!==c)a.country=c;return a},getTerm:function(){return this.ui.popup.find("input.discojuice_search").val()},resetTerm:function(){this.ui.popup.find("input.discojuice_search").val("")}};"undefined"==typeof DiscoJuice&&(DiscoJuice={});
function getConfig(a,c,d,e,g){a={title:"Sign in to <strong>"+a+"</strong>",subtitle:"Select your Provider",disco:{spentityid:c,url:d,stores:["https://store.discojuice.org/"],writableStore:"https://store.discojuice.org/"},cookie:!0,country:!0,location:!0,countryAPI:"https://ufal-point-dev.ms.mff.cuni.cz/php/discojuice/country.php",discoPath:new URL('../', window.location.protocol + '//' + ($('script[src*=discojuice]').attr('src').split('//')[1] || new URL($('script[src*=discojuice]').attr('src'), window.location).href.split('//')[1])),callback:function(a){window.location=g+escape(a.entityID)},metadata:[]};for(c=0;c<e.length;c++)a.metadata.push("https://static.discojuice.org/feeds/"+e[c]);
return a}DiscoJuice.Hosted={getConfig:getConfig,setup:function(a,c,d,e,g,h){var f;f=getConfig(c,d,e,g,h);$(document).ready(function(){$(a).DiscoJuice(f)})}};DiscoJuice.Version="2.1 (2012-02-07 19:18)";"undefined"==typeof DiscoJuice&&(DiscoJuice={});
DiscoJuice.Dict={about:"About DiscoJuice",aboutDescr:"DiscoJuice is a user interface to help users select which provider to login with. DiscoJuice is created by %sUNINETT%s",aboutMore:"Read more about DiscoJuice",loading:"Loading list of providers",orSearch:"or search for a provider, such as Example University",pageReturn:"Return to list of providers",version:"Version",nearby:"Nearby",moreLink:"Results limited to %d of total %d entries \u2013 show more",help:"Please help, I cannot find my provider",
helpMore:"If your institusion is not connected to this service, you may create a new account using any of the guest login providers. You also may contact your instituion to request being connected with this service.",locateMe:"Locate me and show nearby providers",locating:"Getting your location",showIn:"Show providers in",allCountries:"all countries",showAllCountries:"show all countries"};

