function imgToBG(){
  let imgToBG=document.querySelectorAll(".img-to-bg");
  for (var i = 0; i < imgToBG.length; i++) {
    if(imgToBG[i].querySelector('img')){
      imgToBG[i].style.backgroundImage = 'url('+imgToBG[i].querySelector('img').getAttribute('src')+')';
    }
  }
}

imgToBG();
