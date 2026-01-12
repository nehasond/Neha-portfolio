// Sticky Navigation Menu
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
// Show/hide sticky navigation and scroll button based on scroll position
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  } else {
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
};
// Side Navigation Menu
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = () => {
  navBar.classList.add("active"); // Show the navbar
  menuBtn.style.display = "none"; // Hide menu icon
  cancelBtn.style.display = "block"; // Show cancel icon
  body.classList.add("disabledScroll"); // Optional: prevent background scroll
};

cancelBtn.onclick = () => {
  navBar.classList.remove("active"); // Hide the navbar
  menuBtn.style.display = "block"; // Show menu icon
  cancelBtn.style.display = "none"; // Hide cancel icon
  body.classList.remove("disabledScroll");
};

// Mailto click handler: show a small notification when opening the user's mail client
function showEmailNotification(text) {
  const n = document.createElement('div');
  n.className = 'email-notification';
  n.textContent = text;
  document.body.appendChild(n);
  requestAnimationFrame(() => n.classList.add('visible'));
  setTimeout(() => {
    n.classList.remove('visible');
    setTimeout(() => n.remove(), 300);
  }, 2000);
}

document.addEventListener('click', function (e) {
  const a = e.target.closest('a[href^="mailto:"]');
  if (!a) return;
  e.preventDefault();
  const href = a.getAttribute('href');
  // open mail client and show notification
  window.location.href = href;
  showEmailNotification('Opening your mail client...');
});
