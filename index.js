(function() {
  'use strict';

  let stopButton = document.getElementById('stopButton')
  let stopLight = document.getElementById('stopLight')
  stopButton.addEventListener('click', function() {
    stopLight.classList.toggle('stop')
  })

  let slowButton = document.getElementById('slowButton')
  let slowLight = document.getElementById('slowLight')
  slowButton.addEventListener('click', function() {
    slowLight.classList.toggle('slow')
  })

  let goButton = document.getElementById('goButton')
  let goLight = document.getElementById('goLight')
  goButton.addEventListener('click', function() {
    goLight.classList.toggle('go')
  })
})();
