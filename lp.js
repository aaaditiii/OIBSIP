document.addEventListener("DOMContentLoaded", function() {
    const signinBtn = document.getElementById("signin-btn");
    const signinPopup = document.getElementById("signin-popup");
    const closeSigninPopup = document.getElementById("close-signin-popup");
  
    signinBtn.addEventListener("click", function() {
      signinPopup.style.display = "block";
    });
  
    closeSigninPopup.addEventListener("click", function() {
      signinPopup.style.display = "none";
    });
  });

  function loadBookingInfo() {
    
    const bookingInfo = "Check out our special offers!";

    
    document.getElementById('booking-info').innerText = bookingInfo;
}


window.onload = loadBookingInfo;


const packages = document.querySelectorAll('.package');


packages.forEach(package => {
  package.addEventListener('click', () => {
  
    const packageDetails = package.querySelector('.package-details');
    packageDetails.classList.toggle('hidden');
  });
});


function openSignUpPopup() {
  document.getElementById("signup-popup").style.display = "block";
}


document.getElementById("close-signup-popup").addEventListener("click", function() {
  document.getElementById("signup-popup").style.display = "none";
});

