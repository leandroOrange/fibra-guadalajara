"use strict";var wrapperList=document.querySelector("#wrapper-list"),cities=["leon","queretaro","nicolas-romero","toluca","veracruz","torreon","guadalajara","tepic","culiacan","tuxtla","puebla","morelia","hermosillo","durango","xalapa","mochis","mazatlan","obregon","guaymas","colima"],theraCamp=["display","fb-branding","fb-breach","fb-conversions","fb-trafico","fb-brand","y-preroll"];function renderList(a,t){a.forEach(function(r){var a=document.createElement("h5"),e=document.createTextNode(r);a.appendChild(e),wrapperList.appendChild(a),t.forEach(function(a){var e=document.createElement("a"),t=document.createTextNode("https://megacable-promociones.com.mx/movil-buenfin/gracias.php?campaign=".concat(a,"&city=").concat(r,"&ag=th&page=typ"));e.appendChild(t),e.href="https://megacable-promociones.com.mx/movil-buenfin/gracias.php?campaign=".concat(a,"&city=").concat(r,"&ag=th&page=typ"),e.target="_blank",wrapperList.appendChild(e)})})}renderList(cities,theraCamp);