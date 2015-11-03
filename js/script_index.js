// Authors - Kevin and Ransom

function changeImage(i) {

    var el = document.getElementsByClassName('jumbotron');
    console.log("value of i is: " + i);
    if (i < 10){
        el[0].style.backgroundImage = "url('images/pdxcg_0" + i + ".jpg')";
    }
    if (i > 9 && i < 61) {
        if (i === 36 || i === 42) {
            i++;
        }
        el[0].style.backgroundImage = "url('images/pdxcg_" + i + ".jpg')";
    }
    if (i === 61) {
        i = 1;
    }
    ++i;
    setTimeout(changeImage, 5000, i);
} 