var m=t=>{throw TypeError(t)};var g=(t,e,o)=>e.has(t)||m("Cannot "+o);var f=(t,e,o)=>(g(t,e,"read from private field"),o?o.call(t):e.get(t)),n=(t,e,o)=>e.has(t)?m("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,o);var h=(t,e,o)=>(g(t,e,"access private method"),o);import{S as P,i as u}from"./assets/vendor-De63neY_.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function o(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(r){if(r.ep)return;r.ep=!0;const i=o(r);fetch(r.href,i)}})();var l,d,p,v;class L{constructor(){n(this,p);n(this,l,"22579303-973b9b71134c76d3c38c0933d");n(this,d," https://pixabay.com/api")}getPhotoByQuery(e){return fetch(`${f(this,d)}/?${h(this,p,v).call(this,e)}`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})}}l=new WeakMap,d=new WeakMap,p=new WeakSet,v=function(e){return new URLSearchParams({key:f(this,l),q:e,image_type:"photo",orientation:"horizontal",safesearch:"true"}).toString()};const b=new L,S=({downloads:t=0,comments:e=0,likes:o=0,views:a=0,webformatURL:r,largeImageURL:i,tags:s})=>`<li class="gallery-item">
      <a class="gallery-link" href=${i}>
        <div class='gallery-thumb-image'>
          <img class="gallery-image" src=${r} data-source=${i} alt=${s} />
        </div>
        <div class='wrapper-info'>
          <div class='info'>
            <p>Likes</p>
            <p>${o}</p>
          </div>
          <div class='info'>
            <p>Views</p>
            <p>${a}</p>
          </div>
          <div class='info'>
            <p>Coments</p>
            <p>${e}</p>
          </div>
          <div class='info'>
            <p>Downloads</p>
            <p>${t}</p>
          </div>
        </div>
      </a>
    </li>
`,c={form:document.querySelector(".form"),imgWrap:document.querySelector(".gallery"),loader:document.querySelector(".loader")},y=(t,e)=>{e==="error"?u.error({message:t,position:"topRight"}):e==="warning"?u.warning({message:t,position:"topRight"}):u.show({message:t,position:"topRight"})},$=t=>{t.preventDefault();const e=t.target,a=new FormData(e).get("search-field").trim();if(!a){y("The search field is empty. Please enter text to search.","warning");return}c.loader.classList.add("is-loaded"),b.getPhotoByQuery(a).then(r=>{var s;(s=r.hits)!=null&&s.length||y("Sorry, there are no images matching your search query. Please try again!","error");const i=r.hits.map(w=>S(w)).join("");c.imgWrap.innerHTML=i,new P(".gallery-link",{captionsData:"alt",captionDelay:250,overlayOpacity:.9})}).catch(r=>console.log(r)).finally(()=>{c.loader.classList.remove("is-loaded")})};c.form.addEventListener("submit",$);
//# sourceMappingURL=index.js.map
