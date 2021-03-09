
$(document).ready(function () { 
  

    $.getJSON("https://api.github.com/search/repositories?q=user:jacobybx+sort:updated",  
            function (data) { 
        var statusStart = ''; 
  
  
        $.each(data, function (key, value) { 
  
  
        //Display Widget Button Data   
          statusStart += "<div id='ID" +  value.id +"' class='widget-shop-item'><img loading='lazy' class='item-logo' src='" + value.logo + "'><br><div class='item-text-container'><h3>" + value.name +"</h3><p>" + value.createdBy + "-" + value.price + "</p></div></div>"; 
  
           // Append Widget Button
        }); 
         $('#githubFeed').append(statusStart); 
    }); 
  }); 
  
if (localStorage.getItem("reposName") === null) {
    document.getElementById('setup-btn').style.display="block";
    }
        