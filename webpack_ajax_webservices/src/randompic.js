require('jquery');
 

import * as constantes from '.././constants';
 
 
//API dogs 
let ShowRandomImagesDogs = function() {
    var result = "";
    var scriptUrl = constantes.URL_IMG_DOGS;
    $.ajax({
       url: scriptUrl,
       type: 'get',
       dataType: 'json',
       async: true,
       success: function(data) {
        result = data.url;
        var dogsimgcontainer = document.getElementById('dogsimgcontainer');
        var imgdog=document.createElement('img'); 
        imgdog.setAttribute("src",result); 
        dogsimgcontainer.appendChild(imgdog);
   
       } 
    });
  
}


//API cats 
let ShowRandomImagesCats = function() {
    var result = "";
    var scriptUrl = constantes.URL_IMG_CATS;
    $.ajax({
       url: scriptUrl,
       type: 'get',
       dataType: 'json',
       async: true,
       success: function(data) {
           result = data[0]['url'];
           var contenedor = document.getElementById('contenedorcats');
           var img=document.createElement('img'); 
           img.setAttribute("src",result); 
            contenedor.appendChild(img);
       } 
    });
 
}
ShowRandomImagesDogs();
ShowRandomImagesCats();
// export{
//    ShowRandomImagesDogs,
//    ShowRandomImagesCats,
// }