import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const searchForm = document.querySelector('.search-form');
const loadMoreBtn = document.querySelector('.load-more');
const galleryContainer = document.querySelector('.gallery');

let currentPage = 1;
let currentQuery = '';
const perPage = 40;

searchForm.addEventListener('submit', handleSearchSubmit);
loadMoreBtn.addEventListener('click', handleLoadMore);

function handleSearchSubmit(event) {
  event.preventDefault();

  const searchInput = event.target.elements.searchQuery;
  const searchQuery = searchInput.value.trim();

  if (!searchQuery) {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search term!',
      position: 'topRight',
    });
    return;
  }
  clearGallery();
  currentPage = 1;
  currentQuery = searchQuery;
  loadMoreBtn.classList.add('hidden');

  showLoader();

  getImagesByQuery(searchQuery, currentPage)
    .then(handleSearchResponse)
    .catch(handleError)
    .finally(hideLoader);
}

function handleLoadMore() {
  currentPage++;
  showLoader();
  loadMoreBtn.classList.add('hidden');

  getImagesByQuery(currentQuery, currentPage)
    .then(data => {
      createGallery(data.hits);
      
      const totalHits = data.totalHits;
      const maxPage = Math.ceil(totalHits / perPage);

      if (currentPage < maxPage) {
        loadMoreBtn.classList.remove('hidden');
      } else {
        loadMoreBtn.classList.add('hidden');
        iziToast.info({
          title: 'Info',
          message: "We're sorry, but you've reached the end of search results.",
          position: 'topRight',
        });
      }

      if (currentPage > 1) {
        const cardHeight = galleryContainer
          .firstElementChild
          .getBoundingClientRect().height;
        
        window.scrollBy({
          top: cardHeight * 2,
          behavior: 'smooth',
        });
      }
    })
    .catch(handleError)
    .finally(() => {
      hideLoader();
    });
}

function handleSearchResponse(data) {
  const images = data.hits;
  const totalHits = data.totalHits;

  if (images.length === 0) {
    iziToast.error({
      title: 'Error',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight',
    });
    return;
  }

  createGallery(images);

  if (totalHits > perPage) {
    loadMoreBtn.classList.remove('hidden');
  }


  iziToast.success({
    title: 'Success',
    message: `Hooray! We found ${totalHits} images.`,
    position: 'topRight',
  });
}

function handleError(error) {
  console.error('Error:', error);
  
  iziToast.error({
    title: 'Error',
    message: 'Something went wrong. Please try again later!',
    position: 'topRight',
  });
}
