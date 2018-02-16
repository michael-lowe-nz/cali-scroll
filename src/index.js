import $ from 'jquery'
import scrollama from 'scrollama';
import 'animate.css/animate.min.css';
import './index.scss'

// require('./index.scss');
// require('../node_modules/animate.css/animate.css');

// instantiate the scrollama
const scroller = scrollama();

scroller
  .setup({
    step: '.step', // required
    // container: '.scroll', // required (for sticky)
    offset: 0.5, // optional, default = 0.5
    debug: false // optional, default = false
  })
  .onStepEnter(response => {
    $(response.element)
      .addClass('slideInLeft shown');
  })
