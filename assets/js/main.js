function darkmode(){
    document.getElementById("body").style.backgroundColor="black";
    document.getElementById("body").style.color="white";
    document.getElementById("hero").style.backgroundImage='url("assets/img/darkmode-img/image_12.jpg"),url("assets/img/darkmode-img/image_4.jpg"),url("assets/img/darkmode-img/image_5.jpg")'; //hero die bilder ausgetauscht
    document.getElementById("change1").setAttribute("src", "assets/img/darkmode-img/image_1.jpg");
    document.getElementById("change2").setAttribute("src", "assets/img/darkmode-img/image_2.jpg");
    document.getElementById("change3").setAttribute("src", "assets/img/darkmode-img/image_6.jpg");
    document.getElementById("change4").setAttribute("src", "assets/img/darkmode-img/image_7.jpg");
    document.getElementById("change5").setAttribute("src", "assets/img/darkmode-img/image_8.jpg"); //5 bilder in der Gallerie ausgetauscht
    document.getElementById("nav").style.color= "white";
}
function lightmode(){
    document.getElementById("body").style.backgroundColor="white";
    document.getElementById("body").style.color="black";
    document.getElementById("hero").style.backgroundImage='url("assets/img/wo-left.png"),url("assets/img/landspace-mid.png"),url("assets/img/man-right.jpg")'; //hero die bilder ausgetauscht
    document.getElementById("change1").setAttribute("src", "assets/img/adrian-Xft-JdC-Jbc-unsplash.png");
    document.getElementById("change2").setAttribute("src", "assets/img/chris-herath-FcvIlm3I2Ts-unsplash.png");
    document.getElementById("change3").setAttribute("src", "assets/img/matthew-henry-kX9lb7LUDWc-unsplash.png");
    document.getElementById("change4").setAttribute("src", "assets/img/phoebe-strafford-EBbP0Wrbmqs-unsplash.png");
    document.getElementById("change5").setAttribute("src", "assets/img/ronan-furuta-ZJ8M0bfiu8U-unsplash.png"); //5 bilder in der Gallerie ausgetauscht
    document.getElementById("nav").style.color= "black";
}