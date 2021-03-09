<?php
// I AM JS, I LIVE TO SERVE JS.....MY GOAL IS TO DECODE IMAGES TO BASE64


$qur = $_GET['q'];

$car = $_GET['c'];

$str = "http://suggestqueries.google.com/complete/search?client=chrome&q=". $qur ."";


$outa = json_decode(file_get_contents($str));

if(!empty($outa[1])){
echo'<ul>';

foreach($outa[1] as $v){
    echo '<li onclick="search_query(this.innerText)">'. $v .'</li>';
}

echo'</ul>';
}
else{
    echo '';
}