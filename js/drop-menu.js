"use strict";var menuElem=document.querySelector(".filter__button-arrow"),titleElem=document.querySelector(".filter__drop-menu");menuElem.addEventListener("click",function(e){e.preventDefault(),titleElem.classList.toggle("filter-open")}),menuElem.addEventListener("click",function(e){e.preventDefault(),menuElem.classList.toggle("filter__button-arrow--open")});