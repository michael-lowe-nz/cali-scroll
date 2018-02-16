import $ from 'jquery'
import scrollama from 'scrollama';
import 'animate.css/animate.min.css';
import './index.scss'

const scroller = scrollama();

scroller
  .setup({
    step: '.step', // required
    // container: '.scroll', // required (for sticky)
    offset: 0.5, // optional, default = 0.5
    debug: true // optional, default = false
  })
  .onStepEnter(response => {
    console.log('response', response.element)
    $(response.element)
      .addClass('slideInLeft shown');
  })
