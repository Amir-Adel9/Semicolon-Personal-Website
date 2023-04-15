const slider = document.querySelector('.slider');
const arrowIcons = document.querySelectorAll('.slider-wrapper i');
const firstImage = document.querySelectorAll('.cat-image')[0];

let isDragging = false,
  prevPageX,
  prevScrollLeft;

let firstImageWidth = firstImage.offsetWidth + 14;

arrowIcons.forEach((icon) => {
  icon.addEventListener('click', () => {
    if (icon.classList.contains('fa-angle-left')) {
      slider.scrollLeft -= firstImageWidth;
    } else {
      slider.scrollLeft += firstImageWidth;
    }
  });
});

const startDragging = (e) => {
  isDragging = true;
  prevPageX = e.pageX;
  prevScrollLeft = slider.scrollLeft;
};

const drag = (e) => {
  if (!isDragging) return;
  e.preventDefault();
  slider.classList.add('dragging');
  let positionDifference = e.pageX - prevPageX;
  slider.scrollLeft = prevScrollLeft - positionDifference;
};

const stopDragging = () => {
  isDragging = false;
  slider.classList.remove('dragging');
};

slider.addEventListener('mousedown', startDragging);
slider.addEventListener('mousemove', drag);
slider.addEventListener('mouseup', stopDragging);
slider.addEventListener('mouseleave', stopDragging);
