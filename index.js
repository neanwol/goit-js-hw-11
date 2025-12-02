import{a as S,S as P,i as u}from"./assets/vendor-CNqCr-V-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const w="https://pixabay.com/api/";function d(e,o=1){const r={key:API_KEY,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:40};return S.get(w,{params:r}).then(i=>i.data).catch(i=>{throw console.error("Error in getImagesByQuery:",i),i})}let a=null;function f(e){const o=document.querySelector(".gallery"),r=e.map(({webformatURL:i,largeImageURL:t,tags:s,likes:c,views:b,comments:L,downloads:v})=>`
      <li class="gallery-item">
        <div class="photo-card">
          <a href="${t}" class="gallery-link">
            <img src="${i}" alt="${s}" loading="lazy" class="gallery-image" />
          </a>
          <div class="info">
            <p class="info-item">
              <b>Likes</b>
              <span class="info-value">${c}</span>
            </p>
            <p class="info-item">
              <b>Views</b>
              <span class="info-value">${b}</span>
            </p>
            <p class="info-item">
              <b>Comments</b>
              <span class="info-value">${L}</span>
            </p>
            <p class="info-item">
              <b>Downloads</b>
              <span class="info-value">${v}</span>
            </p>
          </div>
        </div>
      </li>
    `).join("");o.insertAdjacentHTML("beforeend",r),a?a.refresh():a=new P(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"})}function E(){const e=document.querySelector(".gallery");e&&(e.innerHTML=""),a&&(a.destroy(),a=null)}function h(){const e=document.querySelector(".loader");e&&e.classList.add("visible")}function p(){const e=document.querySelector(".loader");e&&e.classList.remove("visible")}const q=document.querySelector(".search-form"),l=document.querySelector(".load-more"),H=document.querySelector(".gallery");let n=1,m="";const g=40;q.addEventListener("submit",R);l.addEventListener("click",$);function R(e){e.preventDefault();const r=e.target.elements.searchQuery.value.trim();if(!r){u.warning({title:"Warning",message:"Please enter a search term!",position:"topRight"});return}E(),n=1,m=r,l.classList.add("hidden"),h(),d(r,n).then(I).catch(y).finally(p)}function $(){n++,h(),l.classList.add("hidden"),d(m,n).then(e=>{f(e.hits);const o=e.totalHits,r=Math.ceil(o/g);if(n<r?l.classList.remove("hidden"):(l.classList.add("hidden"),u.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})),n>1){const i=H.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:i*2,behavior:"smooth"})}}).catch(y).finally(()=>{p()})}function I(e){const o=e.hits,r=e.totalHits;if(o.length===0){u.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}f(o),r>g&&l.classList.remove("hidden"),u.success({title:"Success",message:`Hooray! We found ${r} images.`,position:"topRight"})}function y(e){console.error("Error:",e),u.error({title:"Error",message:"Something went wrong. Please try again later!",position:"topRight"})}
//# sourceMappingURL=index.js.map
