import SimpleLightbox from 'simplelightbox';
import { API_PixaBay } from './js/pixabay-api';
import { createImgCard } from './js/render-functions';

const refs = {
  imgWrap: document.querySelector('.gallery'),
};

// const createGallery = images.map(item => createImgCard(item)).join('');
// refs.imgWrap.innerHTML = createGallery;
// new SimpleLightbox('.gallery-link', {
//   captionsData: 'alt',
//   captionDelay: 250,
//   overlayOpacity: 0.9,
// });

API_PixaBay.getPhotoByQuery('cat')
  .then(data => {
    const createGallery = data.hits.map(item => createImgCard(item)).join('');

    refs.imgWrap.innerHTML = createGallery;
    new SimpleLightbox('.gallery-link', {
      captionsData: 'alt',
      captionDelay: 250,
      overlayOpacity: 0.9,
    });
  })
  .catch(e => console.log(e));

// largeImageURL;
