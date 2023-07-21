$(function() {
  $('#nav-search-select').change(function() {
    var selectedText = $(this).find('option:selected').text();
    $('#nav-search').find('.nav-search-label').html(selectedText);
  });
});
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  var scrollToTopButton = document.getElementById("scrollToTop");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopButton.style.display = "block"; // Show the button when user scrolls down
  } else {
    scrollToTopButton.style.display = "none"; // Hide the button when user is at the top
  }
}

function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}
$(document).ready(function() {
  // Smooth scroll when "see more" links are clicked
  $("a[href^='#']").on('click', function(event) {
    event.preventDefault();
    var target = $(this.hash);
    $('html, body').animate({
      scrollTop: target.offset().top
    }, 800); // Adjust the scroll speed as needed
  });
});
document.addEventListener('DOMContentLoaded', function() {
// Get the "Add to Cart" button
const addToCartButton = document.getElementById('add-to-cart-btn');

// Add a click event listener to the "Add to Cart" button
addToCartButton.addEventListener('click', function() {
  // Show the notification using an alert
  alert('Item added');
});
});
