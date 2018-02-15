import $ from 'jquery'
import scrollama from 'scrollama';

require('./index.scss');
require('../node_modules/animate.css/animate.css');

// instantiate the scrollama
const scroller = scrollama();

scroller
  .setup({
    step: '.scroll__text .step', // required
    container: '.scroll', // required (for sticky)
    graphic: '.scroll__graphic', // required (for sticky)
    offset: 0.5, // optional, default = 0.5
    debug: false // optional, default = false
  })
  .onStepEnter((obj, index, another) => {
    console.log('step enter:', obj, index);
    if(obj.index === 0) {
      console.log('adding fade-in');
      $('.hero-1-txt').addClass('fade-in');
    }
  })
  .onStepExit((obj, index) => {
    // if(obj.index === 0) {
    //   $('.hero-1-txt').removeClass('fade-in');
    // }
  })
  .onContainerEnter(() => console.log('Eventing cont-enter'))
  .onContainerExit(() => console.log('Eventing cont-exit'))

// scroller
//   .setup({
//     step: '.step',
//     offset: 0.8,
//     debug: false
//   })
//   .onStepEnter(() => {
//     console.log('Entering step');
//     $('.hero-1-txt').removeClass('fade-in')
//   })
  // .onStepExit(() => $('.hero-1-txt').removeClass('fade-in'));
