var f=Object.defineProperty;var u=(t,r,i)=>r in t?f(t,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[r]=i;var c=(t,r,i)=>u(t,typeof r!="symbol"?r+"":r,i);import{S as m,i as l}from"./assets/vendor-De63neY_.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();class h{constructor(){c(this,"API_KEY","22579303-973b9b71134c76d3c38c0933d");c(this,"URL_API"," https://pixabay.com/api")}getSearchParams(r){return new URLSearchParams({key:this.API_KEY,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"}).toString()}getPhotoByQuery(r){return fetch(`${this.URL_API}/?${this.getSearchParams(r)}`).then(i=>{if(!i.ok)throw new Error(i.status);return i.json()})}}const g=new h,y=({downloads:t=0,comments:r=0,likes:i=0,views:a=0,webformatURL:e,largeImageURL:o,tags:s})=>`<li class="gallery-item">
  <a class="gallery-link" href=${o}>
    <img class="gallery-image" src=${e} data-source=${o} alt=${s} />
    <div class='wrapper-info'>
      <div class='info'>
        <p>Likes</p>
        <p>${i}</p>
      </div>
      <div class='info'>
        <p>Views</p>
        <p>${a}</p>
      </div>
      <div class='info'>
        <p>Coments</p>
        <p>${r}</p>
      </div>
      <div class='info'>
        <p>Downloads</p>
        <p>${t}</p>
      </div>
    </div>
  </a>
</li>
`,n={form:document.querySelector(".form"),imgWrap:document.querySelector(".gallery"),loader:document.querySelector(".loader")},d=(t,r)=>{r==="error"?l.error({message:t,position:"topRight"}):r==="warning"?l.warning({message:t,position:"topRight"}):l.show({message:t,position:"topRight"})},P=t=>{t.preventDefault();const r=t.target,a=new FormData(r).get("search-field").trim();if(!a){d("The search field is empty. Please enter text to search.","warning");return}n.loader.classList.add("is-loaded"),g.getPhotoByQuery(a).then(e=>{var s;(s=e.hits)!=null&&s.length||d("Sorry, there are no images matching your search query. Please try again!","error"),console.log(e.hits);const o=e.hits.map(p=>y(p)).join("");n.imgWrap.innerHTML=o,new m(".gallery-link",{captionsData:"alt",captionDelay:250,overlayOpacity:.9})}).catch(e=>console.log(e)).finally(()=>{n.loader.classList.remove("is-loaded")})};n.form.addEventListener("submit",P);
//# sourceMappingURL=index.js.map
