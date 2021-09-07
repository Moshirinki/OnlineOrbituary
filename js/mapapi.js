function initMap(){
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -25.683153753931126, lng: 28.131193455235238},
        zoom: 12,
        mapId: 'a7ca9a4d25576fd'
      });

      //Adding Second Location
      new google.maps.Marker({
position:{lat:-25.67084070551146,lng:28.110433522191162 },
map,
title:"Home",
icon: {
  url:"images/home.svg",
  scaledSize:new google.maps.Size(38,31)
}
      });
//animation:google.maps.Animation.Drop,
      new google.maps.Marker({
        position:{lat:-25.677704950803957,lng:28.131974784656734 },
        map,
        title:"Cemetery",
        icon: {
          url:"images/cemetry.svg",
          scaledSize:new google.maps.Size(38,31)
        }
              });
}



 //Single Page Code
$(document).ready(function () {
       $("#home").click(function () {
          $("#slide").show();
           $("#program").hide();
           $("#lf").hide();
           $("#map").hide();
       });

       $("#prg").click(function () {
         $("#slide").hide();
         $("#program").show();
         $("#lf").hide();
         $("#map").hide();
     });

     $("#venue").click(function () {
       $("#slide").hide();
       $("#program").hide();
       $("#lf").hide();
       $("#map").show();
   });

   $("#feed").click(function () {
     $("#slide").hide();
     $("#program").hide();
     $("#lf").show();
     $("#map").hide();
 });

 
    
   });
 //Single Page Code

 
//WOnderPark
//-25.67084070551146, 28.110433522191162


//Final Resting Place
//-25.677704950803957, 28.131974784656734

// First Co-ordinates
//-25.683153753931126, 28.131193455235238