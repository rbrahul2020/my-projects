class barClass{
  makeBar()
     {var bar = new ProgressBar.Circle(".progressContainer", {
     color: '#aaa',
     // This has to be the same size as the maximum width to
     // prevent clipping
     strokeWidth: 6,
     trailWidth: 2,
     easing: 'easeInOut',
     duration: 1400,
     text: {
       autoStyleContainer: false
     },
     from: { color: '#80E067', width: 2 },
     to: { color: '#80E067', width: 6 },
     // Set default step function for all animate calls
     step: function(state, circle) {
       circle.path.setAttribute('stroke', state.color);
       circle.path.setAttribute('stroke-width', state.width);

       var value = Math.round(circle.value() * 100);
       if (value === 0) {
         circle.setText('0');
       } else {
         circle.setText(`${value}%`);
       }

     }
   });
   bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
   bar.text.style.fontSize = '2rem';
   bar.text.style.color='black';
   return(bar);}

}