import{i as d,S as f}from"./assets/vendor-b2f381a5.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();function y(s){const t=new URLSearchParams({key:"44067044-e8359f631c20f41f339c4060c",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"});return h(t)}function h(s){return fetch(`https://pixabay.com/api/?${s}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}function m(){d.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"rgb(239, 64, 64)",theme:"dark"})}function p(s,t){const l=[];s.hits.forEach(e=>{l.push(`
                <li class="gallery-item">
                    <div class="gallerys">
                        <a class="gallery-link" href="${e.largeImageURL}">
                            <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" />
                        </a>
                    </div>
                    <div class="gallery-item-description">
                        <ul class="gallery-item-list">
                            <li class="gallery-item-list-item">
                                <h3>likes</h3>
                                <p>${e.likes}</p>
                            </li>
                            <li class="gallery-item-list-item">
                                <h3>views</h3>
                                <p>${e.views}</p>
                                </li>
                            <li class="gallery-item-list-item">
                                <h3>comments</h3>
                                <p>${e.comments}</p>
                            </li>
                            <li class="gallery-item-list-item">
                                <h3>downolads</h3>
                                <p>${e.downloads}</p>
                            </li>
                        </ul>
                    </div>
                </li>`)});const o=`${l.join("")}`;t.innerHTML=o}const a=document.querySelector(".search-form"),n=document.querySelector(".gallery-list"),c=document.querySelector("#loader");let u=document.querySelector(".gallerys");a.addEventListener("submit",s=>{s.preventDefault(),n.innerHTML="",c.style.display="block";const t=a.elements.searchItem.value.replace(" ","+");y(t).then(l=>{c.style.display="none",l.hits.length!=0?(p(l,n),u.refresh()):m()}).catch(l=>console.log(`error ${l}`))});u=new f(".gallerys a",{captionDelay:200});
//# sourceMappingURL=commonHelpers.js.map
