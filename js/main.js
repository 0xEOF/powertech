(function(){
var b=document.getElementById('burger'),l=document.getElementById('links');
if(b&&l){b.addEventListener('click',function(){var o=l.classList.toggle('open');b.setAttribute('aria-expanded',o)});
l.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){l.classList.remove('open')})})}
var t=document.getElementById('track');
if(t){t.innerHTML+=t.innerHTML;t.querySelectorAll('a:nth-child(n+5)').forEach(function(a){a.tabIndex=-1;a.setAttribute('aria-hidden','true')})}
var els=document.querySelectorAll('.reveal');
if(!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in')});return}
var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.1});
els.forEach(function(e){io.observe(e)});
})();
