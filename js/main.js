import "bootstrap";

const chevron = document.querySelector('.chevron')
const filters = document.querySelector('.filters')

chevron.addEventListener('click', () => {
  filters.classList.toggle('display-block')
})