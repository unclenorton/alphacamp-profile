$(function(){
  "use strict";
  /* Start of your code */

  console.log('The script is running.');

  // Define the elements that we're going to manipulate
  let navigationLinks = document.querySelectorAll('.nav-link'),
      navbarElement = document.querySelector('.navbar'),
      headerElement = document.querySelector('#header'),
      formElement = document.querySelector('form'),
      textElement = document.querySelector('#message'),
      validationMessageElement = document.querySelector('#messageError'),
      navButton = document.querySelector('.navbar-toggler'),
      bodyElement = document.querySelector('body');

  // Define the colours
  let colorArray = ['bg-dark', 'bg-primary', 'bg-warning', 'bg-success', 'bg-danger'];

  function changeNavbarColor(colorClass) {
  	navbarElement.classList.remove('bg-dark'); // Disable the default colour
  	headerElement.className = colorArray[colorClass];
  }

  formElement.addEventListener('submit', function (event) {
    // First, prevent the form from submitting
    event.preventDefault();

    if (textElement.value === '') {
      // If the message is empty, make the error visible
      validationMessageElement.classList.remove('d-none');
    } else {
      // If not empty, hide the error...
      validationMessageElement.classList.add('d-none');
      // And submit the form
      formElement.submit();
    }
  });

  // Assign the event handler to all the links
  for (let i = 0; i < navigationLinks.length; i++) {
  	navigationLinks[i].onclick = function (event) {
  		changeNavbarColor(i);
  	}
  }

  navButton.onclick = function () {
    if (bodyElement.className === "with-menu") {
      bodyElement.className = "";
    } else {
      bodyElement.className = "with-menu";
    }
  };

  // Set the modal image source to the one of the clicked image
  $('.portfolio-item').on('click', function (e) {
    let imageElement = $(e.currentTarget).find('img');
    let imageSource = imageElement.attr('src');
    $('.modal-body img').attr('src', imageSource);
  });

  // Ajax call
  $.ajax({
    url : 'https://reqres.in/api/unknown',
    data : '',
    type : 'GET',
    dataType : 'json'
  }).done(function (json) {

    if (json.data !== undefined) { // Check if the data is there
      for (let i = 0; i < json.data.length; i++) { // Iterate over the array
        let newOption = $('<option>') // Create a shadow element
            .attr('value', json.data[i].color)
            .text(json.data[i].name);

        newOption.appendTo($('#colours')); // Add the element to the select box
      }  
    }
    
    $('#colours').on('change', function () { // Handle the selection event
      $('#message').css('background-color', $('#colours').val() );
    });
  });

  /* End of your code */
});