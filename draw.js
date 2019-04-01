const c = document.querySelector('canvas').getContext('2d');
console.log(c);
c.canvas.width = window.innerWidth;
c.canvas.height = window.innerHeight;

let domImg = document.getElementsByTagName('img')[0]
// because of reference of the image source
// it's in the DOM so I must check the Window Object
window.onload = function(){
  c.drawImage(domImg,0,0)
}


let objImg = new Image();
objImg.src = "save.jpeg";
// because of the reference of the image source
// its in the Object source so I must check the Object
objImg.onload = function () {
  c.drawImage(objImg,550,0)
}
