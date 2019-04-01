# checking for loading image 
## _First_: DOM Element
```javascript
let img = document.getElementById('imageId')
window.onload = function(){
  ctx.drawImage(img,x,x)
}

```
## _Second_: Object Constructor
```javascript
let img = new Image()
img.src = 'save.jpeg'
img.onload = function(){
  ctx.drawImage(img,x,y)
}


```
