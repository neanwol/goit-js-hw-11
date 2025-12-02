import{a as v,S as w,i as d}from"./assets/vendor-CNqCr-V-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const E="https://pixabay.com/api/";function u(e,o=1){const r={key:API_KEY,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:40};return v.get(E,{params:r}).then(n=>n.data).catch(n=>{throw console.error("Error in getImagesByQuery:",n),n})}const h=document.querySelector(".gallery");let a;function p(e){const o=e.map(({webformatURL:r,largeImageURL:n,tags:t,likes:s,views:l,comments:L,downloads:S})=>`
      <div class="photo-card">
        <a href="${n}" class="gallery-link">
          <img src="${r}" alt="${t}" loading="lazy" class="gallery-image" />
        </a>
        <div class="info">
          <p class="info-item">
            <b>Likes</b>
            <span>${s}</span>
          </p>
          <p class="info-item">
            <b>Views</b>
            <span>${l}</span>
          </p>
          <p class="info-item">
            <b>Comments</b>
            <span>${L}</span>
          </p>
          <p class="info-item">
            <b>Downloads</b>
            <span>${S}</span>
          </p>
        </div>
      </div>
    `).join("");h.insertAdjacentHTML("beforeend",o),a?a.refresh():a=new w(".gallery a",{captionsData:"alt",captionDelay:250})}function P(){h.innerHTML="",a&&(a.destroy(),a=null)}function f(){const e=document.querySelector(".loader");e&&(e.style.display="block")}function m(){const e=document.querySelector(".loader");e&&(e.style.display="none")}const q=document.querySelector(".search-form"),c=document.querySelector(".load-more"),$=document.querySelector(".gallery");let i=1,g="";const y=40;q.addEventListener("submit",H);c.addEventListener("click",R);function H(e){e.preventDefault();const r=e.target.elements.searchQuery.value.trim();if(!r){d.warning({title:"Warning",message:"Please enter a search term!",position:"topRight"});return}P(),i=1,g=r,c.classList.add("hidden"),f(),u(r,i).then(I).catch(b).finally(m)}function R(){i++,f(),c.classList.add("hidden"),u(g,i).then(e=>{p(e.hits);const o=e.totalHits,r=Math.ceil(o/y);if(i<r?c.classList.remove("hidden"):(c.classList.add("hidden"),d.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})),i>1){const n=$.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:n*2,behavior:"smooth"})}}).catch(b).finally(()=>{m()})}function I(e){const o=e.hits,r=e.totalHits;if(o.length===0){d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}p(o),r>y&&c.classList.remove("hidden"),d.success({title:"Success",message:`Hooray! We found ${r} images.`,position:"topRight"})}function b(e){console.error("Error:",e),d.error({title:"Error",message:"Something went wrong. Please try again later!",position:"topRight"})}
//# sourceMappingURL=index.js.map
