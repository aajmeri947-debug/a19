(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){var d=document.documentElement,rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
[].forEach.call(document.querySelectorAll('.stg'),function(g){[].forEach.call(g.children,function(c,i){c.style.transitionDelay=(i*110)+'ms';});});
function cnt(el){var to=parseFloat(el.getAttribute('data-count')),dec=(el.getAttribute('data-count').split('.')[1]||'').length,t0=null,dur=1600;if(rm){el.textContent=to.toFixed(dec);return;}function f(t){if(!t0)t0=t;var p=Math.min(1,(t-t0)/dur),e=1-Math.pow(1-p,3);el.textContent=(to*e).toFixed(dec);if(p<1)requestAnimationFrame(f);}requestAnimationFrame(f);}
var els=[].slice.call(document.querySelectorAll('.rv,[data-count]'));
if(rm||!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in');if(e.hasAttribute('data-count'))e.textContent=e.getAttribute('data-count');});}
else{var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var ts=(e.target.__rv||[]).concat(els.indexOf(e.target)>-1?[e.target]:[]);ts.forEach(function(t){t.classList.add('in');if(t.hasAttribute('data-count'))cnt(t);});io.unobserve(e.target);}});},{rootMargin:'0px 0px -6% 0px',threshold:.01});
 els.forEach(function(e){var o=e;if(e.classList.contains('rv-c')||e.classList.contains('rv-w')){o=e.parentElement;}if(o!==e){(o.__rv=o.__rv||[]).push(e);}io.observe(o);});
 setTimeout(function(){els.forEach(function(e){var r=e.getBoundingClientRect();if(r.top<innerHeight&&r.bottom>0)e.classList.add('in');});},1200);}
var px=[].slice.call(document.querySelectorAll('[data-px]')),pr=document.getElementById('prog'),tk=false;
function upd(){var h=innerHeight;if(!rm)px.forEach(function(el){var r=el.parentElement.getBoundingClientRect();if(r.bottom<0||r.top>h)return;var s=+el.getAttribute('data-px');el.style.transform='translate3d(0,'+((r.top+r.height/2-h/2)*s).toFixed(1)+'px,0) scale(1.14)';});
 if(pr){var m=d.scrollHeight-h;pr.style.width=(m>0?scrollY/m*100:0)+'%';}d.classList.toggle('scd',scrollY>60);tk=false;}
addEventListener('scroll',function(){if(!tk){requestAnimationFrame(upd);tk=true;}},{passive:true});addEventListener('resize',upd);upd();
[].forEach.call(document.querySelectorAll('.hs'),function(s){var down=false,x0=0,s0=0,mv=0;s.addEventListener('pointerdown',function(e){if(e.pointerType!=='mouse')return;down=true;mv=0;x0=e.clientX;s0=s.scrollLeft;s.classList.add('drag');});addEventListener('pointerup',function(){down=false;s.classList.remove('drag');});s.addEventListener('pointermove',function(e){if(!down)return;mv=Math.abs(e.clientX-x0);s.scrollLeft=s0-(e.clientX-x0);});s.addEventListener('click',function(e){if(mv>6){e.preventDefault();e.stopPropagation();}},true);});
})();
(function(){function $(i){return document.getElementById(i);}
var B=[['Remember','Recall facts and basic terms.',['What is {t}?','List the key terms linked to {t}.','When and where does {t} happen?','Define {t} in one sentence.']],
['Understand','Explain ideas in your own words.',['Explain {t} in your own words.','What is the main idea behind {t}?','Give an example of {t}.','How would you summarise {t} for a friend?']],
['Apply','Use the idea in a new situation.',['How could {t} be used in real life?','Solve a new problem using what you know about {t}.','What would happen if {t} changed in a familiar setting?','Show how {t} works with your own example.']],
['Analyse','Break it into parts and see how they connect.',['What are the parts of {t}, and how do they relate?','Compare {t} with something similar. What is different?','What evidence supports what we know about {t}?','What causes {t}, and what does it affect?']],
['Evaluate','Judge, justify and defend a view.',['What are the strengths and weaknesses of current thinking on {t}?','Do you agree with a common claim about {t}? Why?','Which explanation of {t} is most convincing, and why?','How important is {t}? Justify your answer.']],
['Create','Put ideas together into something new.',['Design an experiment to test something about {t}.','Write a short story or analogy that explains {t}.','Propose a new way to teach {t} to younger students.','Combine {t} with another idea to make something new.']]],lv=1;
function esc(s){return s.replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
function bl(){var t=esc($('bl-t').value.trim()||'your topic'),b=B[lv];$('bl-n').textContent='Level '+(lv+1);$('bl-l').textContent=b[0];$('bl-d').textContent=b[1];$('bl-q').innerHTML=b[2].map(function(q,i){return '<li style="animation-delay:'+i*.06+'s">'+q.replace('{t}','<b>'+t+'</b>')+'</li>';}).join('');
 [].forEach.call(document.querySelectorAll('.lvl'),function(g){var on=+g.dataset.v===lv;g.classList.toggle('on',on);g.setAttribute('aria-pressed',on);});$('bl-ok').textContent='';}
if($('bl-t')){[].forEach.call(document.querySelectorAll('.lvl'),function(g){g.addEventListener('click',function(){lv=+g.dataset.v;bl();});g.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();lv=+g.dataset.v;bl();}});});$('bl-t').addEventListener('input',bl);
 $('bl-c').addEventListener('click',function(){var tx=[].map.call(document.querySelectorAll('#bl-q li'),function(l,i){return (i+1)+'. '+l.textContent;}).join('\n');try{navigator.clipboard.writeText(tx).then(function(){$('bl-ok').textContent='copied';},function(){$('bl-ok').textContent='select and copy';});}catch(e){$('bl-ok').textContent='select and copy';}});bl();}
function syl(w){w=w.toLowerCase().replace(/[^a-z]/g,'');if(w.length<=3)return 1;w=w.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/,'').replace(/^y/,'');var m=w.match(/[aeiouy]{1,2}/g);return m?m.length:1;}
function ex(){var t=$('ex-t').value,ss=t.split(/(?<=[.!?])\s+/).filter(function(s){return /[a-z]/i.test(s);}),words=t.match(/[A-Za-z'-]+/g)||[],W=words.length,S=Math.max(1,ss.length),sy=0,long=0;words.forEach(function(w){var s=syl(w);sy+=s;if(s>=4||w.length>=12)long++;});
 var g=W?Math.max(1,Math.round(0.39*(W/S)+11.8*(sy/W)-15.59)):0;$('ex-w').textContent=W;$('ex-s').textContent=(W/S).toFixed(1)+' w';$('ex-l').textContent=long;$('ex-g').textContent=W?'Grade '+Math.min(g,18):'—';$('ex-arc').style.strokeDashoffset=252*(1-Math.min(1,g/16));$('ex-arc').style.stroke=g<=8?'#7BD88F':g<=11?'#FFB347':'#FF6B5B';
 $('ex-v').textContent=!W?'Write an explanation to begin.':g<=7?'Clear and simple. A twelve-year-old could follow this.':g<=10?'Nearly there. Shorten the longest sentences or swap a few long words.':'Too complex for a beginner. Break it into shorter sentences and replace jargon with everyday words.';
 $('ex-hl').innerHTML=ss.map(function(s){var n=(s.match(/[A-Za-z'-]+/g)||[]).length,h=esc(s).replace(/[A-Za-z'-]+/g,function(w){return (syl(w)>=4||w.length>=12)?'<span class="lw">'+w+'</span>':w;});return n>22?'<span class="ls">'+h+'</span>':h;}).join(' ')||'<span class="in-mono">your highlighted text appears here</span>';}
if($('ex-t')){$('ex-t').addEventListener('input',ex);ex();}
})();
