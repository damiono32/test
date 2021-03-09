$.getJSON("http://www.reddit.com/r/webdev/.json?jsonp=?", function(data) {
    $.each(data.data.children, function(i,item){
     
        console.log(item.data.title);
        console.log(item.data.author);
        console.log(item.data.url);
        console.log(item.icon_img);

  
    });
});