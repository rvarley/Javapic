//<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>

var jtron = $('div[id="jumbotron"]');
jtron.css('background-image');
jtron.css('background-image', 'url("./images/pdxcg_09.jpg")');
img = 'url("./images/pdxcg_11.jpg")';
console.log("img:  " + img);
jtron.css('background-image', img);

console.log(jtron.css('background-image'));


function changeImage(i) {
    if (i < 10){
    img = "url('images/pdxcg_0" + i + ".jpg')";
    console.log("img in first if is:  " + img);
    jtron.css('background-image', img);
    }
    if (i > 9 && i < 61) {
        if (i === 36 || i === 42) {
            i++;
        }
        img = "url('images/pdxcg_" + i + ".jpg')";
        console.log("img in first if is:  " + img);
        jtron.css('background-image', img);
    }
    if (i === 61) {
        i = 1;
    }
    ++i;
    setTimeout(changeImage, 5000, i);
} 
var i = 1; 
changeImage(i)

