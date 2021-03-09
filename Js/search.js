
var glob_last_element_clicked = null;

function show_ele(clas, ele){
 
    glob_last_element_clicked = ele;
    if(document.querySelector('.' + clas) != null){
    document.querySelector('.' + clas).classList.remove(clas)
    }
    ele.classList.add(clas)
    console.log(clas)
}



function remove_ele(ele){
    console.log(ele)
    
   var q = document.querySelector(".show_flex")
    if( q != null && q.getAttribute("id") == "editor-add-top" ){
        return
    }
   if( ele.getAttribute("data-c") == null && q != null && ele.parentElement.getAttribute("id") != "choose-site-options" && ele.getAttribute("id") != "new-shortcute-top"){
        document.querySelector(".show_flex").classList.remove("show_flex")
        glob_last_element_clicked = null
        console.log("remove")
   }
   if(glob_last_element_clicked != null){
        if(ele.getAttribute("data-c") != null && ele.getAttribute("data-c") != glob_last_element_clicked.getAttribute("data-c")){
            console.log(glob_last_element_clicked)
            document.querySelector(".show_flex").classList.remove("show_flex")
            glob_last_element_clicked = null
            
        }
    }

}

document.addEventListener("click", function(event){
    // SEARCH
    var search = document.getElementById("search-style");
    var outSearch = search.contains(event.target);

    if (!outSearch) {
        if(search.classList.contains('search-on'))
        search.classList.remove("search-on")
        document.getElementById("autocomplete-results").style.display ="none"
    }


    // TOP SITE OPTIONS
    remove_ele(event.target)

  
})



document.getElementById("search-style").addEventListener("click", function(){
    var search = document.getElementById("search-style");
    search.classList.add("search-on")
    search.querySelector("input").focus()
    document.getElementById("autocomplete-results").style.display ="block"
})



document.getElementById("search-style").querySelector("input").addEventListener("keyup", function(){
    if(document.getElementById("search-style").querySelector("input").value == ""){
        document.getElementById("search-style").querySelector("#search-cancel").style.display = "none"
    }
    else{
    document.getElementById("search-style").querySelector("#search-cancel").style.display = "block"
    }
})

document.getElementById("search-style").querySelector("#search-cancel").addEventListener("click", function(){
    var search = document.getElementById("search-style");
    search.querySelector("#search-cancel").style.display = "none"
    search.querySelector("input").value = ""
    document.getElementById("autocomplete-results").innerHTML = ""
})

function options_top_site(ele){
    remove_ele(ele)
    glob_last_element_clicked = ele;
    var menu = ele.nextSibling.nextSibling
    menu.classList.add("show_flex")
    menu.firstElementChild.setAttribute("onclick", 'edit_menu_site(this)')
    menu.lastElementChild.setAttribute("onclick", 'last_menu_site(this)')
    glob_last_element_clicked = ele
    var p = ele.parentElement.nextElementSibling.nextElementSibling
    p.setAttribute("data-i", p.innerHTML)
    ele.parentElement.parentElement.parentElement.setAttribute("data-i", p.innerHTML)
}

//TOP SITE EDIT BUTTONS && DELETE

function edit_menu_site(ele){
    var menu = document.getElementById("editor-add-top").querySelector("div")
    var url = ele.parentElement.parentElement.nextElementSibling.getAttribute("href")
    var title = ele.parentElement.parentElement.nextElementSibling.nextElementSibling.innerHTML
    console.log(menu)
    menu.querySelector("#url-top").value = url
    menu.querySelector("#name-top").value = title

    show_ele('show_flex', document.getElementById("editor-add-top"))
}

document.getElementById("top-site-cancel").addEventListener("click", function(event){
    var res = event.target.parentElement.parentElement.querySelectorAll("input")
    for(var i of res){
        i.value = ""
        console.log(i.value)

    }
    document.querySelector(".show_flex").classList.remove("show_flex")
    glob_last_element_clicked = null
})

document.getElementById("top-site-submit").addEventListener("click", function(event){
var determiner = event.target.parentElement.parentElement.querySelector("p").innerHTML
var url = document.getElementById("url-top").value
var res = url.match(/(?:\w+\W+\w+\W+\w+)/)
if(res == null){
    url = 'https://' + url
}
if(determiner == "Edit shorcut"){
    var main_par = event.target.parentElement.parentElement.parentElement.parentElement
   
    var target = main_par.querySelector('[data-i = "' + main_par.getAttribute("data-i")+ '"]')
    target.innerHTML = document.getElementById("name-top").value
    target.previousElementSibling.setAttribute("href", url)
    target.previousElementSibling.firstElementChild.src = url + '/favicon.ico'
}
else{
    var main_par = event.target.parentElement.parentElement.parentElement.parentElement
    main_par.querySelector('#add-new-shorcuts').insertAdjacentHTML('beforebegin', `
    <div class="top-site">
    <div  class="top-site-options-container">
      <img style="opacity: 0;" id="top-site-option-init" src="Assets/threeDots.svg">
      <div class="site-options" id="choose-site-options">
          <button class="edit-url-shorcut">Edit</button>
          <button>Delete</button>
      </div>
    </div>
    <a href="`+ url +`"><img src="https://s2.googleusercontent.com/s2/favicons?domain=`+ url +`"></a>
    <p>`+document.getElementById("name-top").value+`</p>
    </div>`)
}
})

function last_menu_site(ele){
    ele.parentElement.parentElement.parentElement.remove()
}

// TOP SITE ADD SHORT

document.getElementById("new-shortcute-top").addEventListener("click", function(){
    var edit = document.getElementById("editor-add-top")
    edit.querySelector("p").innerHTML = "Add shortcut"
    show_ele('show_flex', edit)
    console.log("fdsf")
})

//SPICE OF LIFE OF BROKEN TOP SITE IMAGES

function replace_br_img(title, ele){
    var el = document.createElement("span")
    el.classList.add("broken-top-site-img")
    console.log(title)
    el.innerHTML = title[0]
    ele.insertAdjacentElement("beforebegin", el)
    ele.remove()
}




// SEARCH ENGINE AUTOCORRECT FOR GOOGLE

document.getElementById("search-style").querySelector("input").addEventListener("keyup", function(e){
var query = document.getElementById("search-style").querySelector("input").value
query = query.replace(" ", "+")
console.log(query)
var car = e.target.selectionStart

var hx = new XMLHttpRequest();
hx.open("GET", "/Js/imJs.php?q="+query+"&c="+car, true);
hx.onreadystatechange = function(){
    if (hx.readyState == 4 && hx.status == 200){
       document.getElementById("autocomplete-results").innerHTML = hx.responseText;
     
    }
    if(document.activeElement == document.getElementById("search-style").querySelector("input")){
        // window.removeEventListener("keyup", search_query())
        // window.addEventListener("keyup", search_query(e))
    }
};
hx.send();
})



function search_query(q){
    document.getElementById("search-style").querySelector("input").value = q
    document.getElementById("search-box-form").submit()
}