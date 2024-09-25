import{S as i}from"./assets/vendor-CWwQENHe.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const l="46140865-1cf24fb63bb06dafc67be25f6";function p(o){return new Promise((s,r)=>{let e=`https://pixabay.com/api/?${new URLSearchParams({key:l,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;fetch(e).then(t=>t.json()).then(t=>{s(t)}).catch(t=>{r(t)})})}const f=new i(".gallery-container a",{captionsData:"alt",captionDelay:250}),u=document.querySelector(".gallery-container");function m(o){const s=o.map(r=>`<li class="gallery-item">
            <a class="gallery-link" href="${r.largeImageURL}">
                <img class="gallery-image" src="${r.webformatURL}" alt="${r.tags}" width=""/>
                <div class="small-container">
                <p>Likes <span>${r.likes}</span></p>
                <p>Views <span>${r.views}</span></p>
                <p>Comments <span>${r.comments}</span></p>
                <p>Downloads <span>${r.downloads}</span></p>
                </div>
            </a>
        </li>`).join("");u.innerHTML=s,f.refresh()}const c=document.querySelector("form");c.addEventListener("submit",o=>{o.preventDefault();const s=c.elements.search.value.trim();s!==""&&p(s).then(r=>{const n=r.hits;console.log(n),m(n)}).catch(r=>{console.log(r)})});
//# sourceMappingURL=index.js.map
