(function(){
  "use strict";
  /* Start of your code */

  console.log('The script is running.');

  // Define the elements that we're going to manipulate
  let navigationLinks = document.querySelectorAll('.nav-link');
  let navbarElement = document.querySelector('.navbar');
  let headerElement = document.querySelector('#header');

  // Define the colours
  let colorArray = ['bg-dark', 'bg-primary', 'bg-warning', 'bg-success', 'bg-danger'];

  function changeNavbarColor(colorClass) {  	
  	navbarElement.classList.remove('bg-dark'); // Disable the default colour
  	headerElement.className = colorArray[colorClass];
  }

  // Assign the event handler to all the links
  for (let i = 0; i < navigationLinks.length; i++) {
  	navigationLinks[i].onclick = function () {
  		changeNavbarColor(i);
  	}
  }

  /* End of your code */
})();