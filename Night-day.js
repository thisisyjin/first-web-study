// night-day toggle button

var Body = {
  setColor:function(color){
    var target = document.querySelector('body');
    target.style.color = color;
  },
  setBackgroundColor:function(color){
    var target = document.querySelector('body');
    target.style.backgroundColor = color;
  }
}

var Link = {
  setColor:function(color){
    var links = document.querySelectorAll('a');
    var i = 0;
    while(i<links.length){
      links[i].style.color = color;
      i = i + 1;
      }
    }
}



function nightDayHandler(self){
var target = document.querySelector('body');
if(self.value === 'night'){
  Body.setBackgroundColor('black');
  Body.setColor('white');
  self.value = 'day';

  Link.setColor('powderblue');

} else {
  Body.setBackgroundColor('white');
  Body.setColor('black');
  self.value = 'night';

  Link.setColor('blue');
  }
}
