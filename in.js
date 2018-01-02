var box = document.getElementById('box');
var items = box.children;
var gap = 10;

window.onload = function(){
  waterFall();

  
}

window.onresize = function(){
  waterFall();
};

window.onscroll = function(){
  //if (getClient().height + getScrollTop() >= items[29].offsetTop  && getClient().height + getScrollTop() <= items[59].offsetTop ) {
  if (getClient().height + getScrollTop() >= items[29].offsetTop) {
    for (var i = 30; i < 60; i++) {
      var div = document.createElement("div");
      div.className = "item";
      div.innerHTML = '<img src="myImage/' + i + '.jpg">';
      box.appendChild(div);
    }
    /*if(items[i].offsetTop < getClient().height + getScrollTop()){
        items[i].src = items[i].getAttribute("data-src");
      }*/
    waterFall();
  }
}

function getClient(){
  return {
    width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
    height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
  }
}

function getScrollTop(){
  return window.pageYOffset || document.documentElement.scrollTop;
}

function waterFall(){
    var pageWidth = getClient().width;
    var itemWidth = items[0].offsetWidth;
    var columns = parseInt(pageWidth / (itemWidth + gap));
    var arr = [];
    for(var i = 0; i < items.length; i++){
      if(i < columns){
        items[i].style.top = 0;
        items[i].style.left = (itemWidth + gap) * i + 'px';
        arr.push(items[i].offsetHeight);
      }else{
        var minHeight = arr[0];
        var index = 0;
        for(var j = 0; j < arr.length; j++){
          if(minHeight > arr[j]){
            //minHeight = arr[j];
            index = j;
          }
        }
        items[i].style.top = arr[index] + gap + 'px';
        items[i].style.left = items[index].offsetLeft + 'px';
        arr[index] = arr[index] + items[i].offsetHeight + gap;
      }
    }    
  }
