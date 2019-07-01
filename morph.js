
var morphTimeline = new TimelineMax({ 
  repeat:-1,
  repeatDelay:2
}); 

morphTimeline
  .to('#shark',2,{fill: "#FFFFFF", morphSVG:{fill: "##FFFFFF", shape:"#b-shark"}})
  .to('#shark',2,{fill: "#15FB00", morphSVG:{fill: "#15FB00", shape:"#star"}},"+=4")
  .to('#shark',2,{fill: "#78F96D", morphSVG:{fill: "#78F96D", shape:"#shark"}},"+=2"); 

