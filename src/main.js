import SimpleLightbox from 'simplelightbox';
import { API_PixaBay } from './js/pixabay-api';
import { createImgCard } from './js/render-functions';

const refs = {
  form: document.querySelector('.form'),
  imgWrap: document.querySelector('.gallery'),
};

const onSubmitBtn = e => {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  const searchField = formData.get('search-field');

  API_PixaBay.getPhotoByQuery(searchField)
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
};

refs.form.addEventListener('submit', onSubmitBtn);
