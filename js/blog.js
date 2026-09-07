const container = document.querySelector('.blog-list-content');

container.addEventListener('wheel', (event) => {
  // Prevent the default vertical page scroll behavior
  event.preventDefault();
  
  // Use scrollBy to move horizontally instead of vertically
  container.scrollBy({
    left: event.deltaY,
    behavior: 'smooth' // Adds an elegant smooth transition
  });
});