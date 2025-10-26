var l=Object.defineProperty;var u=(a,e,r)=>e in a?l(a,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[e]=r;var n=(a,e,r)=>u(a,typeof e!="symbol"?e+"":e,r);import{S as f}from"./assets/vendor-B-WyX8ve.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();class m{constructor(){n(this,"API_KEY","22579303-973b9b71134c76d3c38c0933d");n(this,"URL_API"," https://pixabay.com/api")}getSearchParams(e){return new URLSearchParams({key:this.API_KEY,q:e,image_type:"photo",orientation:"horizontal",safesearch:"true"}).toString()}getPhotoByQuery(e){return fetch(`${this.URL_API}/?${this.getSearchParams(e)}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}}const d=new m,y=({webformatURL:a,largeImageURL:e,tags:r})=>`<li class="gallery-item">
  <a class="gallery-link" href=${e}>
    <img
      class="gallery-image"
      src=${a}
      data-source=${e}
      alt=${r}
    />
  </a>
</li>
`,c={form:document.querySelector(".form"),imgWrap:document.querySelector(".gallery")},h=a=>{a.preventDefault();const e=a.target,s=new FormData(e).get("search-field");d.getPhotoByQuery(s).then(t=>{const o=t.hits.map(i=>y(i)).join("");c.imgWrap.innerHTML=o,new f(".gallery-link",{captionsData:"alt",captionDelay:250,overlayOpacity:.9})}).catch(t=>console.log(t))};c.form.addEventListener("submit",h);
//# sourceMappingURL=index.js.map
