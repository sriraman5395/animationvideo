var text = document.querySelector('#text');

var tl = anime.timeline({
  easing: 'easeOutExpo',
  duration: 20000
});
  
  // Add children
  tl
  .add({
    targets: '#text',
    translateX:0,
    opacity: [0, 1],
    easing: 'easeOutExpo',
    duration: 500
  });
  
  // Add animation to fade out the element
  tl.add({
    targets: '#text',
    translateX:0,
    opacity: [1, 0],
    easing: 'easeOutExpo',
    duration: 1000
  })
  
 tl.add({
  targets: '#text',
  opacity: [0, 1],
  translateX: [-200, 0],
  easing: 'easeOutExpo',
  duration: 1500
});
tl.add({
    targets: '#text',
    scale: [1, 2], // Increase size to 3 times original size
    duration: 1000, // Animation duration in milliseconds
    easing: 'easeInOutQuad'
  })
  .add({
    targets: '#text',
    scale: [2, 1], // Decrease size back to original
    duration: 1000,
    easing: 'easeInOutQuad'
  });
  tl
  .add({
    targets: '#text',
    translateY: [-20, 0],
    rotateX: ['70deg', '0deg'],
    transformorigin: top,
    opacity:[0,1],
    duration: 300,
    easing: 'easeInOutQuad'
  });
  tl.add({
    targets: '#text',
    opacity: 0,
    duration: 300
  });

  tl.add({
    targets: '#text',
    opacity: [0,1],
    duration: 1000,
    begin: function(anim) {
      // Change the text to "Flutter"
      text.textContent = "Flutter";
    },
    scale:[0.5,1],
  });

  tl.add({
    targets: '#box2  ',
    opacity: [0,1],
    left:['100%','50%'],
    duration: 1000,
    begin: function(anim) {
      // Change the text to "Flutter"
      text.textContent = "Hello World";
    },
    scale:[0.5,1],
  }, '-=1000');
  tl.add({
    targets: '#box',
    opacity: 1, 
    scale:[1,0.75],
    translateX: ['0%', '-90%'],
    duration: 1000,
    easing: 'easeInOutQuad'
  }, '-=1000');
  

  tl.add({
    targets: '#text2',
    opacity: [0, 1],
    translateX: ['100%', '0%'],
    translateY: [-50, -50],
    easing: 'easeOutExpo',
    duration: 1000
  });
  
  tl.add({
    targets: '#top-text',
    opacity: [0,1],
    translateY: [50, 35],
    translateX: ['100%', '0%'],
    easing: 'easeInOutQuad',
    duration: 1000
  }, '-=1000');
  
  tl.add({
    targets: '#bottom-text',
    opacity: [0,1],
    translateY: [50, 0],
    translateX: ['100%', '0%'],
    easing: 'easeInOutQuad',
    duration: 1000
  }, '-=1000');
  tl
  .add({
    targets: '#text',
    translateY: [-20, 0],
    rotateX: ['70deg', '0deg'],
    transformorigin: top,
    opacity:[0,1],
    duration: 300,
    easing: 'easeInOutQuad'
  });
  tl.add({
    targets: ['#text2', '#top-text', '#bottom-text'],
    translateY: [-20, 500],
    opacity: [1,0],
    duration: 300,
    easing: 'easeInOutQuad'
  });
  tl.add({
    targets: '#text2',
    translateY: [500, -20],
    opacity: [1,1],
    begin: function(anim) {
     
      text2.innerHTML = "Text('HelloWorld ')<br>.animate()<br>.fade(duration: 2000ms)<br>.slideY()";
    },
    duration: 300,
    easing: 'easeInOutQuad'
  });
  tl
  .add({
    targets: '#text',
    translateY: [-20, 0],
    rotateX: ['70deg', '0deg'],
    transformorigin: top,
    opacity:[0,1],
    duration: 700,
    easing: 'easeInOutQuad'
  });
  tl.add({
    targets: '#countdown',
    innerHTML: [1, 5],
    opacity:[0,1],
    easing: 'linear',
    round: 1,
    duration: 1000
  }, '-=1000'); 