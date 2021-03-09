  
    document.getElementById('widgetSetup').addEventListener("click", setup);
    function setup(){
      document.getElementById('menu-pop').style.display='block'
    }
    document.getElementById('channelName').addEventListener("input", nameData);
    function nameData(){
        localStorage.setItem('ChannelName', document.getElementById('channelName').value);document.getElementById('youtuberName').innerHTML = document.getElementById('channelName').value
    }
    document.getElementById('channelUrl').addEventListener('input', urlData);
    function urlData(){
        localStorage.setItem('ytChannelID', document.getElementById('channelUrl').value);
    }
    document.getElementById('form-close').addEventListener('click', confirmYt)
    function confirmYt(){
        document.getElementById('menu-pop').style.display='none'; youtube()
    }
  
  
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
  
