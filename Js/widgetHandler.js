


document.getElementById("widget-item2").addEventListener("load", loadedFrames);

function loadedFrames() {
    document.getElementById('widgetLoader').style.display='none';
}
 
 
 document.getElementById('slot2Name').innerHTML = localStorage.getItem('slot2');
 document.getElementById('slot3Name').innerHTML = localStorage.getItem('slot3');
 document.getElementById('slot4Name').innerHTML = localStorage.getItem('slot4');
 document.getElementById('slot5Name').innerHTML = localStorage.getItem('slot5');
 document.getElementById('slot6Name').innerHTML = localStorage.getItem('slot6');

 
 document.getElementById('slot2img').src = localStorage.getItem('slot2img');
 document.getElementById('slot3img').src = localStorage.getItem('slot3img');
 document.getElementById('slot4img').src = localStorage.getItem('slot4img');
 document.getElementById('slot5img').src = localStorage.getItem('slot5img');
 document.getElementById('slot6img').src = localStorage.getItem('slot6img');

 document.getElementById('widget-slot2').classList.add(localStorage.getItem('slot2size'));
 document.getElementById('widget-slot3').classList.add(localStorage.getItem('slot3size'));
 document.getElementById('widget-slot4').classList.add(localStorage.getItem('slot4size'));
 document.getElementById('widget-slot5').classList.add(localStorage.getItem('slot5size'));
 document.getElementById('widget-slot6').classList.add(localStorage.getItem('slot6size'));

 document.getElementById('widget-item2').src = localStorage.getItem('slot2frame');
 document.getElementById('widget-item3').src = localStorage.getItem('slot3frame');
 document.getElementById('widget-item4').src = localStorage.getItem('slot4frame');
 document.getElementById('widget-item5').src = localStorage.getItem('slot5frame');
 document.getElementById('widget-item6').src = localStorage.getItem('slot6frame');



 if(localStorage.getItem('slot2') == null){
     document.getElementById('widget-slot2').style.display='none';
 }
 if(localStorage.getItem('slot3') == null){
    document.getElementById('widget-slot3').style.display='none';
}
if(localStorage.getItem('slot4') == null){
    document.getElementById('widget-slot4').style.display='none';
}
if(localStorage.getItem('slot5') == null){
    document.getElementById('widget-slot5').style.display='none';
}
if(localStorage.getItem('slot6') == null){
    document.getElementById('widget-slot6').style.display='none';
}



//Local Storage & Widget Manipulation


document.getElementById('editH31').innerHTML = localStorage.getItem('slot1');
document.getElementById('editH32').innerHTML = localStorage.getItem('slot2');
document.getElementById('editH33').innerHTML = localStorage.getItem('slot3');
document.getElementById('editH34').innerHTML = localStorage.getItem('slot4');
document.getElementById('editH35').innerHTML = localStorage.getItem('slot5');
document.getElementById('editH36').innerHTML = localStorage.getItem('slot6');

document.getElementById('editImg1').src = localStorage.getItem('slot1img');
document.getElementById('editImg2').src = localStorage.getItem('slot2img');
document.getElementById('editImg3').src = localStorage.getItem('slot3img');
document.getElementById('editImg4').src = localStorage.getItem('slot4img');
document.getElementById('editImg5').src = localStorage.getItem('slot5img');
document.getElementById('editImg6').src = localStorage.getItem('slot6img');




  

function setState(currentSlotState){
localStorage.setItem('slot' + currentSlotState, globalName);
localStorage.setItem('slot' + currentSlotState + 'img', globalImage);
localStorage.setItem('slot' + currentSlotState + 'frame', globalLink);
localStorage.setItem('slot' + currentSlotState + 'size', globalSize);

window.top.location.reload();
}

function popup(tempName, tempImage, tempCreatedBy, tempPrice, tempLogo, tempLink, tempSize){
  window.globalName = tempName;
  window.globalImage= tempImage; 
  window.globalCreatedBy = tempCreatedBy; 
  window.globalPrice = tempPrice; 
  window.globalLogo = tempLogo; 
  window.globalLink = tempLink; 
  window.globalSize = tempSize;
  
  document.getElementById('install').style.display='block';
  document.getElementById('nameOutput').innerHTML = tempName;
  document.getElementById('createdByOutput').innerHTML = tempCreatedBy;
  document.getElementById('priceOutput').innerHTML = tempPrice;
  document.getElementById('logoOutput').src= tempLogo;
  document.getElementById('widgetPreview').src= tempLink;
  if (tempSize == "Large"){
  document.getElementById('widgetPreview').style.height = "350px";
  }
  if (tempSize == "Medium"){
      document.getElementById('widgetPreview').style.height = "145px";
  }
          }


// Swiper Initialization 



// YouTube Widget JS

     //AIzaSyDdfrfHCtBCHwe4l_UBg-UOrHzIvMc4Sx4
     var htmlString = "";
     var apiKey = 'AIzaSyDdfrfHCtBCHwe4l_UBg-UOrHzIvMc4Sx4'; //https://console.developers.google.com
     var channelID = localStorage.getItem('ytChannelID').substring(32);
     var maxResults = 4;
     
     
     function youtube(){
         $.getJSON('https://www.googleapis.com/youtube/v3/search?key=' + apiKey + '&channelId=' + channelID + '&part=snippet,id&order=date&maxResults=' + (maxResults > 50 ? 50 : maxResults), function(data) {
         $.each(data.items, function(i, item) {
             var videoID = item['id']['videoId'];
             var title = item['snippet']['title'];
             var videoEmbed = "https://www.youtube.com/watch?v=" + videoID;
             htmlString += '<div class="video">' + '<a target="_blank" href="' + videoEmbed + '" class="lightbox" data-fancybox-type="iframe"><img src="http://img.youtube.com/vi/' + videoID + '/0.jpg"></a><p>' + title + '</p></div>';
         });
         $('#youtube-channel-feed').html(htmlString);
     });
     }
     
     youtube();
     
     document.getElementById('youtuberName').innerHTML = localStorage.getItem('ChannelName');


