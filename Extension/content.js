

// Listening to messages in Context Script
const msg = "hi"
chrome.runtime.sendMessage({ message: msg }, function(response) {

    var init = localStorage.getItem("Google_TS_data")
    window.addEventListener("load", function(){
        if(!init){
            localStorage.setItem("Google_TS_data", JSON.stringify(response))
           
        }
        var ob = response['message']
        for(var i=0; i < ob.length; i++){
            var fav = "https://www.google.com/s2/favicons?sz=64&domain_url=" + ob[i].url
  
            document.getElementById("add-new-shorcuts").insertAdjacentHTML("afterend", `
            <div class="top-site">
            <div  class="top-site-options-container">
              <img style="opacity: 0;" id="top-site-option-init" data-c="`+i+`" onclick="options_top_site(this)" src="Assets/threeDots.svg">
              <div class="site-options" id="choose-site-options">
                  <button class="edit-url-shorcut">Edit</button>
                  <button>Delete</button>
              </div>
            </div>
            <a href="`+ ob[i].url +`"><img src="`+ fav +`"></a>
            <p>`+ob[i].title+`</p>
        
            </div>
            `)
          
            
        }
        
      
    })
});

// Check if image is an error





// Nothing to see here just sneaking in some Widget JS :)

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('button').addEventListener('click', main);      
});

// alert("testing Js");

// function main(){
//     alert("testing Js")
// }