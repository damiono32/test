$(document).ready(function () { 
  

    $.getJSON("https://official-joke-api.appspot.com/random_ten",  
            function (data) { 
        var statusStart = ''; 
  
  
        $.each(data, function (key, value) { 
  
  
        //Display Widget Button Data   

        statusStart += "<div class='job-container'><h3     id='cpSetup"+ value.id +"' class='setup'>" + value.setup + "</h3><h3 class='punchline' id='cpunch" + value.id +"'>"+ value.punchline +"</h3></div>"

  
           // Append Widget Button
          
      
           setTimeout(function(){
          // widget Button Event Listener
          document.getElementById("cpSetup" + value.id).addEventListener("click", jokeAction);
          function jokeAction(){
            document.getElementById('cpunch' + value.id).style.display='block';document.getElementById('cpSetup' + value.id).style.display='none';document.getElementById('panelBackground').style.width= '106%';document.getElementById('newJoke').style.display='block'
          }
        }, 50);
        }); 
          
        $('#jokeResults').append(statusStart); 
    }); 
  }); 
  
  document.getElementById('newJoke').addEventListener("click",newJoke)
  function newJoke(){
    document.location.href = document.location.href;
  }