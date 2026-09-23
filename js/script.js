const menuBtn=document.querySelector(".menu-btn");
const nav=document.querySelector(".nav");
if(menuBtn&&nav){
 menuBtn.addEventListener("click",()=>{
   const open=nav.classList.toggle("open");
   menuBtn.setAttribute("aria-expanded",String(open));
   menuBtn.setAttribute("aria-label",open?"Close menu":"Open menu");
   menuBtn.textContent=open?"×":"☰";
 });
 nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{
   nav.classList.remove("open"); menuBtn.setAttribute("aria-expanded","false"); menuBtn.setAttribute("aria-label","Open menu"); menuBtn.textContent="☰";
 }));
}
const page=document.body.dataset.page;
document.querySelectorAll(".nav a[data-page]").forEach(a=>{if(a.dataset.page===page)a.classList.add("active");});
const progress=document.querySelector(".progress");
window.addEventListener("scroll",()=>{
 const max=document.documentElement.scrollHeight-window.innerHeight;
 if(progress) progress.style.width=`${max>0?(window.scrollY/max)*100:0}%`;
},{passive:true});
const revealObserver=new IntersectionObserver(entries=>{
 entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");revealObserver.unobserve(entry.target);}});
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>revealObserver.observe(el));
