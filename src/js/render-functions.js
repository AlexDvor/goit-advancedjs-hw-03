export const createImgCard = ({ webformatURL, largeImageURL, tags }) => {
  return `<li class="gallery-item">
  <a class="gallery-link" href=${largeImageURL}>
    <img
      class="gallery-image"
      src=${webformatURL}
      data-source=${largeImageURL}
      alt=${tags}
    />
  </a>
</li>
`;
};
