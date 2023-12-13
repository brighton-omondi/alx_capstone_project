// JavaScript to control the floating card

// Function to close the floating card
function closeCard() {
    var floatingCard = document.getElementById('floatingCard');
    floatingCard.style.display = 'none';
  }
  
  // Show the floating card when the page loads
  window.onload = function() {
    var floatingCard = document.getElementById('floatingCard');
    floatingCard.style.display = 'block';
  };
  