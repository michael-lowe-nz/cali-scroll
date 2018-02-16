import $ from 'jquery'
import scrollama from 'scrollama';
import 'animate.css/animate.min.css';
import './index.scss'

const scroller = scrollama();

scroller
  .setup({
    step: '.step', // required
    offset: 0.4,
    debug: false
  })
  .onStepEnter(response => {
    console.log('response', response.element)
    $(response.element)
      .addClass('slideInLeft shown');
  })
