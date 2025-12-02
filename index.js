import{a as q,S as E,i as c}from"./assets/vendor-MgecxatS.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();const M="53508808-db25438414f7039efcc38d51b",P="https://pixabay.com/api/";function f(e,o=1){const n={key:M,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:40};return q.get(P,{params:n}).then(s=>s.data).catch(s=>{throw console.error("Error in getImagesByQuery:",s),s})}let i=null;function m(e){const o=document.querySelector(".gallery"),n=e.map(({webformatURL:s,largeImageURL:t,tags:r,likes:a,views:v,comments:S,downloads:w})=>`
      <li class="gallery-item">
        <div class="photo-card">
          <a href="${t}" class="gallery-link">
            <img src="${s}" alt="${r}" loading="lazy" class="gallery-image" />
          </a>
          <div class="info">
            <p class="info-item">
              <b>Likes</b>
              <span class="info-value">${a}</span>
            </p>
            <p class="info-item">
              <b>Views</b>
              <span class="info-value">${v}</span>
            </p>
            <p class="info-item">
              <b>Comments</b>
              <span class="info-value">${S}</span>
            </p>
            <p class="info-item">
              <b>Downloads</b>
              <span class="info-value">${w}</span>
            </p>
          </div>
        </div>
      </li>
    `).join("");o.insertAdjacentHTML("beforeend",n),i?i.refresh():i=new E(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"})}function B(){const e=document.querySelector(".gallery");e&&(e.innerHTML=""),i&&(i.destroy(),i=null)}function h(){const e=document.querySelector(".loader");e&&e.classList.add("visible")}function p(){const e=document.querySelector(".loader");e&&e.classList.remove("visible")}function g(){const e=document.querySelector(".load-more");e&&e.classList.remove("hidden")}function d(){const e=document.querySelector(".load-more");e&&e.classList.add("hidden")}function R(){const e=document.querySelector(".gallery");if(!e||e.children.length===0)return;const o=e.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:o*2,behavior:"smooth"})}const $=document.querySelector(".search-form");let l=1,y="";const b=40;let u=0;$.addEventListener("submit",C);document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".load-more");e&&e.addEventListener("click",I)});function C(e){e.preventDefault();const n=e.target.elements.searchQuery.value.trim();if(!n){c.warning({title:"Warning",message:"Please enter a search term!",position:"topRight"});return}B(),l=1,y=n,d(),h(),f(n,l).then(O).catch(L).finally(p)}function I(){l++,h(),d(),f(y,l).then(e=>{m(e.hits);const o=Math.ceil(u/b);l<o?g():(d(),c.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})),R()}).catch(L).finally(()=>{p()})}function O(e){const o=e.hits;if(u=e.totalHits,o.length===0){c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}m(o),u>b&&g(),c.success({title:"Success",message:`Hooray! We found ${u} images.`,position:"topRight"})}function L(e){console.error("Error:",e),c.error({title:"Error",message:"Something went wrong. Please try again later!",position:"topRight"})}
//# sourceMappingURL=index.js.map
