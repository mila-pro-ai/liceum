const categories=["Życie szkoły","Wywiady i opinie","Kultura i książki","Nauka i technologia","Sport","Kreatywność","Wydarzenia","Foto i wideo"];
const fallback=[
{category:"ŻYCIE SZKOŁY",title:"Co dzieje się za szkolnymi drzwiami?",excerpt:"Poznaj inicjatywy, projekty i wydarzenia, które tworzą codzienność naszej społeczności.",author:"Redakcja",date:"Materiał przykładowy",featured:true},
{category:"GŁOS UCZNIÓW",title:"Młodzi mają głos. Czas na Twoją perspektywę.",excerpt:"Opinie, rozmowy i pomysły uczniów — miejsce na różne punkty widzenia.",author:"Redakcja",date:"Materiał przykładowy",featured:true},
{category:"KULTURA",title:"Książki, filmy i muzyka, które polecamy",excerpt:"Redakcyjne inspiracje na wolny czas.",author:"Redakcja",date:"Materiał przykładowy"},
{category:"NAUKA I TECHNOLOGIA",title:"Technologie, które zmieniają naszą codzienność",excerpt:"Uczniowskie spojrzenie na cyfrowy świat.",author:"Redakcja",date:"Materiał przykładowy"},
{category:"SPORT",title:"Aktywność po lekcjach — nasze pomysły",excerpt:"Sport, ruch i dobre nawyki w szkolnym rytmie.",author:"Redakcja",date:"Materiał przykładowy"}
];
const $=s=>document.querySelector(s);
function card(a,feature=false){return `<article class="${feature?'feature-card':'article-card'}">${a.cover?`<img class="article-cover" src="${a.cover}" alt="">`:''}<span class="tag">${a.category||"AKTUALNOŚCI"}</span><h3>${a.title}</h3><p>${a.excerpt||""}</p><div class="article-meta">${a.author||"Redakcja"} · ${a.date||""}</div></article>`}
function render(list){
 const featured=list.filter(a=>a.featured).slice(0,2);
 const rest=list.filter(a=>!a.featured);
 $('#featured').innerHTML=featured.map(a=>card(a,true)).join('');
 $('#articles').innerHTML=rest.map(a=>card(a)).join('');
}
$('#categories').innerHTML=categories.map((c,i)=>`<a class="category" href="#aktualnosci"><span>0${i+1} / RUBRYKA</span>${c} →</a>`).join('');
render(fallback);
fetch('data/articles.json').then(r=>{if(!r.ok)throw Error('No content file');return r.json()}).then(data=>{if(Array.isArray(data)&&data.length)render(data)}).catch(()=>{});
const options=["Więcej wydarzeń i spotkań","Warsztaty i koła zainteresowań","Turnieje sportowe","Projekty artystyczne"];
$('#poll-options').innerHTML=options.map((p,i)=>`<button class="poll-option" data-v="${i}">${p}</button>`).join('');
$('#year').textContent=new Date().getFullYear();
let selected=null;
$('#poll-options').addEventListener('click',e=>{const b=e.target.closest('[data-v]');if(!b)return;selected=b.dataset.v;document.querySelectorAll('.poll-option').forEach(x=>x.classList.toggle('selected',x===b));$('#vote-btn').disabled=false;});
$('#vote-btn').addEventListener('click',()=>{if(selected===null)return;$('#poll-note').textContent='Dziękujemy za udział! To demonstracyjna sonda — głos nie jest wysyłany na serwer.';$('#vote-btn').disabled=true;});
$('.menu-toggle').addEventListener('click',()=>{const n=$('.nav');n.classList.toggle('open');$('.menu-toggle').setAttribute('aria-expanded',n.classList.contains('open'));});
