!function(){"use strict";const e=document.querySelectorAll(".list__item[data-has-children]");document.querySelectorAll(".list__item[data-has-children] > .list");const t=document.getElementById("header__popup"),o=document.querySelector(".header__button_open"),c=document.querySelector(".modal__button_close"),n=document.querySelector(".navigation__content"),r=n.querySelectorAll('a[href="#"]'),l=(document.querySelector(".navigation__content_column"),n.querySelectorAll('a[href="#"]'));function u(){document.body.classList.remove("scroll-lock")}function i(){t.close(),u()}e.forEach((e=>{!function(e){const t=e.querySelector(":scope > .list");t.setAttribute("hidden",""),e.addEventListener("click",(function(o){!function(e,t){"true"===e.getAttribute("aria-expanded")?(e.setAttribute("aria-expanded","false"),t.setAttribute("hidden","")):(e.setAttribute("aria-expanded","true"),t.removeAttribute("hidden"))}(e,t)}))}(e)})),t.addEventListener("click",(function({currentTarget:e,target:t}){t===e&&e.close()})),o.addEventListener("click",(function(){t.showModal(),document.body.classList.add("scroll-lock")})),c.addEventListener("click",(e=>{e.stopPropagation(),i()})),r.forEach((e=>{var t;(t=e).addEventListener("click",(function(e){e.preventDefault();const o=t.getAttribute("href");document.querySelector(""+o).scrollIntoView({block:"start"})}))})),l.forEach((e=>{var t;(t=e).addEventListener("click",(function(e){e.preventDefault();const o=t.getAttribute("href");u(),document.querySelector(""+o).scrollIntoView({block:"start"}),i()}))})),document.querySelectorAll('.button[href="#"]').forEach((e=>{e.addEventListener("click",(function(t){t.preventDefault();const o=e.getAttribute("href");document.querySelector(""+o).scrollIntoView({block:"start"})}))}));const d=document.querySelector('a[href="#header"]');d.addEventListener("click",(function(e){e.preventDefault();const t=d.getAttribute("href");document.querySelector(""+t).scrollIntoView({block:"start"})})),console.log("Hello world!!!")}();