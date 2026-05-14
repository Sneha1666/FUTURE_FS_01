document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();

  document.getElementById("successMessage").innerText =
    "Thank you! Your message has been submitted ✅";

  this.reset();
});