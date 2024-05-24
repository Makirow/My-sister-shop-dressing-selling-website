var firstIndex = 0;

function automatic() {


    setTimeout(automatic, 7000);

   
    const img = document.querySelectorAll(".Front-Page-Images .Bg-Image img");
    for (  var pics = 0; pics < img.length; pics++) {
       img[pics].style.opacity = "0"; 
       img[pics].style.transform = "scale(2.2)";       
    }
    firstIndex++;
    if (firstIndex > img.length) {
         firstIndex = 1;
    }
    img[firstIndex - 1].style.opacity = "1";
    img[firstIndex - 1].style.transform = "scale(1.8)";
    img[firstIndex - 1].style.transition = "5s";
}

automatic();