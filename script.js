function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
// Select the elements
const spans = document.querySelectorAll('.logo span');

// Function to toggle visibility of spans based on scroll position
function toggleSpansVisibility() {
  // Get the current scroll position
  const scrollPosition = window.scrollY || window.pageYOffset;

  // Determine when to show/hide the spans
  if (scrollPosition > 200) { // Change 100 to your desired scroll position
    // Show spans
    spans.forEach(span => span.style.display = 'none');
  } else {
    // Hide spans
    spans.forEach(span => span.style.display = 'inline');
  }
}

// Add scroll event listener
window.addEventListener('scroll', toggleSpansVisibility);

// Smooth scrolling for navigation links
document.querySelectorAll('#desktop-nav .nav-links a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// Adjust top padding for content when nav is fixed
const desktopNavHeight = document.getElementById('desktop-nav').offsetHeight;
document.body.style.paddingTop = desktopNavHeight + 'px';



