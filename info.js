// JavaScript to control the floating card

// Function to close the floating card
function closeCard() {
    var floatingCard = document.getElementById('floatingCard');
    floatingCard.style.display = 'none';
    // Allow user interaction with the rest of the site after closing the card
    document.body.style.pointerEvents = 'auto';
  }
  
  // Function to prevent user interaction with the site, except for the X icon
  function preventInteraction() {
    // Prevent user interaction with the rest of the site until the card is closed
    document.body.style.pointerEvents = 'none';
    // Allow interaction with the X icon
    var closeIcon = document.querySelector('.close-btn');
    closeIcon.style.pointerEvents = 'auto';
  }
  
  // Show the floating card when the page loads and prevent interaction with the site
  window.onload = function() {
    var floatingCard = document.getElementById('floatingCard');
    floatingCard.style.display = 'block';
    preventInteraction();
  };
  