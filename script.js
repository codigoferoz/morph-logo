//here we create a timeline so it can play on repeat
var morphTimeline = new TimelineMax({ 
  repeat:-1,
  repeatDelay:2
}); 

morphTimeline
  .to('#pathtuto1',2,{morphSVG:{shape:"#pathtuto2"}}) 
//path #pathtuto1 morph into #pathtuto2 during 2 seconds
  .to('#pathtuto1',2,{morphSVG:{shape:"#pathtuto3"}},"+=2")
//2 seconds later path #pathtuto1 morph into #pathtuto3 during 2 seconds
  .to('#pathtuto1',2,{morphSVG:{shape:"#pathtuto1"}},"+=2"); 
//2 seconds later path #pathtuto1 morph back into #pathtuto1 during 2 seconds
;