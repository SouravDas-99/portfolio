
function renderSite(S){
const SC=S.scene,H=S.hero,A=S.about,W=S.work,K=S.skills,E=S.experience,C=S.contact,N=S.numbers;
const two=h=>`${h[0]}<br><span class="muted">${h[1]}</span>`;
const kl=t=>`<p class="k" style="font:500 12px var(--mono);color:var(--acc);margin:0 0 18px">${t}</p>`;
const num=(o,st)=>`<em${st?' style="font-style:normal"':''} data-n="${o.n}"${o.pad?` data-pad="${o.pad}"`:''}${o.k?` data-suf="${o.k}"`:''}>0</em>`;
const art={w:a=>`<div class="fr"><span>${a[0]}</span><strong>${a[1]}</strong><i>${a[2]}</i></div>`,g:a=>`<div class="ct"><strong>${a[0]}</strong><small>${a[1]}</small></div>`,l:a=>`<div class="ps"><span>${a[0]}</span><strong>${a[1]}</strong><i>${a[2]}</i></div>`,s:a=>`<div class="st">${a.map(x=>`<span>${x}</span>`).join('')}</div>`};
const proj=p=>`<article class="proj" data-d="${p.id}" tabindex="0" role="button"><div class="art ${p.style}"><span class="kick">${p.kicker}</span>${art[p.style](p.art)}</div><div class="info"><div class="meta"><span>${p.metaL}</span><span>${p.metaR}</span></div><h3>${p.title}</h3><p>${p.text}</p><div class="tags">${p.tags.map(t=>`<span>${t}</span>`).join('')}</div><div class="bt">${p.link?`<a href="#" target="_blank" rel="noreferrer" data-link="${p.link.to}">${p.link.label}</a>`:''}<span class="more">View details <b>+</b></span></div></div></article>`;
const D='data-d="X" tabindex="0" role="button"';
return `<section class="stage" id="stage">
<div class="frame" aria-hidden="true"><i class="sweep"></i><i class="sweep b"></i><i class="cn tl"></i><i class="cn br"></i></div>
<div class="orbit" aria-hidden="true"><div class="halo"></div><div class="ring r1"><i></i></div><div class="ring r2"><i></i></div></div>
<div class="vt" aria-hidden="true"><span class="fill">${S.bigWord}</span><span class="out">${S.bigWord}</span></div>
<div class="hero2"><div>
<div class="tag fade"><span class="dot"></span>${H.status}</div>
<p class="hk fade d2">${H.kicker.join('<br>')}</p><span class="kbar fade d2"></span>
<h1>${H.headline.map((l,i)=>`<span class="ln"><span>${i==H.headline.length-1?`<span class="shine">${l}</span>`:l}</span></span>`).join('')}</h1>
<p class="lede fade d2">${H.intro}</p>
<div class="actions fade d3"><a class="vbtn" href="#work"><span>${H.button}</span><b>→</b></a><a class="link" href="#contact">${H.link}</a></div></div>
<div class="hr"><div class="gc"><div class="gh"><span class="gi">✎</span><div><small>${H.cardTitle[0]}</small><strong>${H.cardTitle[1]}</strong></div></div><ul>${H.cardList.map(x=>`<li>${x}</li>`).join('')}</ul></div>
<div class="gc">${H.stats.map(o=>`<div class="gs"><strong>${num(o,1)}${o.plus||''}</strong><span>${o.label}</span></div>`).join('')}</div></div></div>
<div class="sh" aria-hidden="true"><span class="mouse"><i></i></span><span>SCROLL<br>DOWN</span></div></section>
<div class="marq" aria-hidden="true"><div class="track" id="track"></div></div>
<section class="scene" id="scene"><div class="sin"><p class="sl">${SC.label}</p><p class="sx">${SC.text.split(' ').map(w=>`<span class="sw${SC.highlight.some(h=>w.toLowerCase().includes(h))?' hl':''}">${w}</span>`).join(' ')}</p></div></section>
<section class="wrap stats" aria-label="Highlights">${N.items.map(o=>`<div class="stat" ${D.replace('X','stat')}><strong>${num(o)}${o.plus?`<em>${o.plus}</em>`:''}</strong><span>${o.label}<br><small>${o.sub}</small></span></div>`).join('')}<p>${N.note}</p></section>
<section id="about" class="wrap sec"><div class="head"><p class="k">${A.label}</p><h2>${two(A.heading)}</h2></div><div class="about"><div>${A.paragraphs.map(p=>`<p>${p}</p>`).join('')}<div class="sign"><span>${A.sign}<br><small>${A.signSub}</small></span></div></div><div class="card">${A.steps.map((s,i)=>`<div class="step"><span>0${i+1}</span><div><strong>${s[0]}</strong><p>${s[1]}</p></div></div>`).join('')}</div></div></section>
<section id="work" class="band"><div class="wrap sec"><div class="head row"><div><p class="k">${W.label}</p><h2>${two(W.heading)}</h2></div><p>${W.intro}</p></div><div class="grid">${W.projects.map(proj).join('')}</div></div></section>
<section id="skills" class="wrap sec"><div class="head"><p class="k">${K.label}</p><h2>${two(K.heading)}</h2></div><div class="skills">${K.groups.map((g,i)=>`<div class="sk" ${D.replace('X','sk')}><span>0${i+1}</span><h3>${g.title}</h3><p>${g.items.join(' · ')}</p></div>`).join('')}</div><p class="fine">${K.note}</p></section>
<section class="band" id="exp"><div class="wrap sec exp"><div>${kl(E.label)}<h2>${two(E.heading)}</h2></div><div class="tl">${E.items.map(t=>`<div class="ti" ${D.replace('X','ti')}><small>${t.date}</small><h3>${t.role}</h3><p class="co">${t.org}</p><p>${t.text}</p></div>`).join('')}</div></div></section>
<section id="contact" class="wrap sec"><div class="panel"><div>${kl(C.label)}<h2>${C.heading[0]}<br>${C.heading[1]} <span class="shine">${C.highlight}</span></h2><p class="c">${C.text}</p></div><div class="links"><a href="#" data-link="email">Email me <span>↗</span></a><a href="#" target="_blank" rel="noreferrer" data-link="linkedin">LinkedIn <span>↗</span></a><a href="#" target="_blank" rel="noreferrer" data-link="youtube">YouTube <span>↗</span></a></div></div></section>`}
document.getElementById('top').innerHTML=renderSite(SITE);
document.title=SITE.name+' — Portfolio';
document.querySelectorAll('.bn').forEach(e=>{e.innerHTML=`<span class="mark">${SITE.logo}<b>.</b></span>${SITE.name.toUpperCase()}`});
document.getElementById('ft').textContent=SITE.footer;
const EX={};SITE.work.projects.forEach(p=>EX[p.id]={f:p.facts,m:p.notes});

const links={email:SITE.contact.email,linkedin:SITE.contact.linkedin,youtube:SITE.contact.youtube};
document.querySelectorAll("[data-link]").forEach(a=>{const v=links[a.dataset.link];if(v)a.href=a.dataset.link==="email"?"mailto:"+v:v});
document.getElementById("yr").textContent=new Date().getFullYear();
const nav=document.getElementById("nav"),bur=document.getElementById("burger");
bur.onclick=()=>bur.setAttribute("aria-expanded",nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(a=>a.onclick=()=>{nav.classList.remove("open");bur.setAttribute("aria-expanded","false")});
// marquee
const words=SITE.marquee;
const t=document.getElementById("track");t.innerHTML=[...words,...words].map(w=>`<span>${w}</span>`).join("");
const still=matchMedia("(prefers-reduced-motion:reduce)").matches;
// counters
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;io.unobserve(e.target);const el=e.target,n=+el.dataset.n,suf=el.dataset.suf||"",pad=+el.dataset.pad||0,fmt=v=>String(v).padStart(pad,"0")+suf;
if(still){el.textContent=fmt(n);return}const s=performance.now();(function f(now){const p=Math.min((now-s)/1400,1),v=Math.round(n*(1-Math.pow(1-p,3)));el.textContent=fmt(v);if(p<1)requestAnimationFrame(f)})(s)}),{threshold:.6});
document.querySelectorAll("[data-n]").forEach(el=>io.observe(el));
// live background
const cv=document.getElementById("bg"),cx=cv.getContext("2d"),glow=document.getElementById("glow");
let W,H,P=[],m={x:-999,y:-999},dpr=Math.min(devicePixelRatio||1,2);
function size(){W=innerWidth;H=innerHeight;cv.width=W*dpr;cv.height=H*dpr;cx.setTransform(dpr,0,0,dpr,0,0);const n=Math.min(Math.round(W*H/16000),110);P=Array.from({length:n},()=>({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.35,vy:(Math.random()-.5)*.35,r:Math.random()*1.6+.6}))}
function draw(){cx.clearRect(0,0,W,H);
for(const p of P){const dx=p.x-m.x,dy=p.y-m.y,d=Math.hypot(dx,dy);if(d<160){p.x+=dx/d*(160-d)*.02;p.y+=dy/d*(160-d)*.02}
if(!still){p.x+=p.vx;p.y+=p.vy}if(p.x<0)p.x=W;if(p.x>W)p.x=0;if(p.y<0)p.y=H;if(p.y>H)p.y=0}
for(let i=0;i<P.length;i++){const a=P[i];cx.fillStyle="rgba(168,152,255,.7)";cx.beginPath();cx.arc(a.x,a.y,a.r,0,6.283);cx.fill();
for(let j=i+1;j<P.length;j++){const b=P[j],d=Math.hypot(a.x-b.x,a.y-b.y);if(d<140){cx.strokeStyle=`rgba(168,152,255,${(1-d/140)*.22})`;cx.lineWidth=1;cx.beginPath();cx.moveTo(a.x,a.y);cx.lineTo(b.x,b.y);cx.stroke()}}
const d=Math.hypot(a.x-m.x,a.y-m.y);if(d<190){cx.strokeStyle=`rgba(168,152,255,${(1-d/190)*.5})`;cx.beginPath();cx.moveTo(a.x,a.y);cx.lineTo(m.x,m.y);cx.stroke()}}
if(!still)requestAnimationFrame(draw)}
addEventListener("resize",()=>{size();if(still)draw()});
addEventListener("pointermove",e=>{m.x=e.clientX;m.y=e.clientY;glow.style.left=m.x+"px";glow.style.top=m.y+"px"},{passive:true});
size();draw();
/* ---- hero parallax + section counter ---- */
const stg=document.getElementById('stage');
if(!still)addEventListener('pointermove',e=>{stg.style.setProperty('--mx',(e.clientX/innerWidth-.5)*2);stg.style.setProperty('--my',(e.clientY/innerHeight-.5)*2)},{passive:true});
const ids=['stage','about','work','skills','exp','contact'],cn=document.getElementById('cn'),navA=[...document.querySelectorAll('nav a')];
const spy=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;const id=e.target.id,i=ids.indexOf(id);cn.textContent=String(i+1).padStart(2,'0');cn.classList.remove('pop');void cn.offsetWidth;cn.classList.add('pop');setGlow(i);const h=id==='stage'?'#top':'#'+id;navA.forEach(a=>a.classList.toggle('on',a.getAttribute('href')===h))}),{rootMargin:'-45% 0px -50% 0px'});
ids.forEach(id=>{const el=document.getElementById(id);if(el)spy.observe(el)});
/* ---- scroll reveal ---- */
const sel='.head .k,.about p,.sign,.step,.proj,.sk,.ti,.stat,.stats p,.fine,.panel p.c,.links a';
if(!still){
document.querySelectorAll(sel).forEach(el=>{const i=[...el.parentNode.children].indexOf(el);el.style.setProperty('--dl',(i%4)*.12+'s');el.classList.add('rv')});
const rv=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;const el=e.target;rv.unobserve(el);el.classList.add('in');
if(el.classList.contains('k'))scramble(el);
if(el.classList.contains('rv'))setTimeout(()=>{el.classList.remove('rv','in');el.style.removeProperty('--dl')},1700)}),{threshold:.15,rootMargin:'0px 0px -6% 0px'});
document.querySelectorAll('.rv').forEach(el=>rv.observe(el));
const split=(n,c)=>[...n.childNodes].forEach(x=>{if(x.nodeType===3){const f=document.createDocumentFragment();x.textContent.split(/(\s+)/).forEach(t=>{if(!t)return;if(!t.trim()){f.append(' ');return}const w=document.createElement('span');w.className='wd';w.style.setProperty('--w',c.n++);w.textContent=t;f.append(w)});x.replaceWith(f)}else if(x.nodeName!=='BR'){if(x.classList.contains('shine')){x.classList.add('wd');x.style.setProperty('--w',c.n++)}else split(x,c)}});
const hio=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');hio.unobserve(e.target)}}),{threshold:.3});
document.querySelectorAll('.head h2,.panel h2,.exp h2').forEach(h=>{split(h,{n:0});hio.observe(h)});
}
function scramble(el){const t=el.textContent,ch='01<>/+*#';let f=0;const id=setInterval(()=>{el.textContent=[...t].map((c,i)=>c===' '?c:i<f/1.5?c:ch[Math.random()*ch.length|0]).join('');if(++f>t.length*1.5){el.textContent=t;clearInterval(id)}},28)}
/* ---- scroll progress ---- */
const prog=document.getElementById('prog');
addEventListener('scroll',()=>{prog.style.transform=`scaleX(${scrollY/(document.documentElement.scrollHeight-innerHeight||1)})`},{passive:true});
/* ---- 3D tilt on project cards ---- */
if(!still&&matchMedia('(hover:hover)').matches)document.querySelectorAll('.proj').forEach(c=>{
c.addEventListener('pointermove',e=>{const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform=`perspective(900px) rotateX(${-y*7}deg) rotateY(${x*9}deg) translateY(-6px)`});
c.addEventListener('pointerleave',()=>c.style.transform='')});
/* ---- click for details ---- */
const mod=document.getElementById('mod'),mp=mod.querySelector('.mp'),mc=document.getElementById('mc');let last=null;
function build(el){let n=0;const si=h=>`<div class="si" style="--i:${n++}">${h}</div>`,d=el.dataset.d,q=x=>el.querySelector(x),tx=x=>q(x)?q(x).textContent.trim():'';let top='',b='';
if(EX[d]){const x=EX[d];top=si(q('.art').outerHTML);n=0;
b=si(`<p class="mt">${tx('.meta')}</p>`.replace(/(<\/span>)?(.+)/,'$&'))+si(`<h3 id="mt">${tx('h3')}</h3>`)+si(`<p>${tx('.info>p')}</p>`)+si(`<div class="fx">${x.f.map(f=>`<div><small>${f[0]}</small><b>${f[1]}</b></div>`).join('')}</div>`)+si(`<div class="chips">${[...el.querySelectorAll('.tags span')].map(s=>`<span>${s.textContent}</span>`).join('')}</div>`)+x.m.map((t,i)=>si(`<p class="${i?'ft':''}">${t}</p>`)).join('');
const a=q('.bt a');if(a)b+=si(`<a class="btn" href="${a.href}" target="_blank" rel="noreferrer">Visit channel <span>↗</span></a>`)}
else if(d==='sk'){b=si(`<p class="mt">Skill group ${tx('span')}</p>`)+si(`<h3 id="mt">${tx('h3')}</h3>`)+si(`<div class="chips">${tx('p').split(' · ').map(s=>`<span>${s}</span>`).join('')}</div>`)+si(`<p class="ft">${tx('.fine')||document.querySelector('.fine').textContent}</p>`)}
else if(d==='ti'){b=si(`<p class="mt">${tx('small')}</p>`)+si(`<h3 id="mt">${tx('h3')}</h3>`)+si(`<p>${tx('.co')}</p>`)+si(`<p>${el.lastElementChild.textContent}</p>`)}
else{b=si(`<p class="mt">Highlight</p>`)+si(`<div class="bignum" id="mt">${q('strong').textContent}</div>`)+si(`<h3>${q('span').firstChild.textContent}</h3>`)+si(`<p>${tx('small')}</p>`)+si(`<p class="ft">${document.querySelector('.stats p').textContent}</p>`)}
mc.innerHTML=top+`<div class="mbody">${b}</div>`}
function openMod(el,x,y){last=el;build(el);const r=mp.getBoundingClientRect();mp.style.setProperty('--ox',Math.max(0,Math.min(r.width,x-r.left))+'px');mp.style.setProperty('--oy',Math.max(0,Math.min(r.height,y-r.top))+'px');mp.scrollTop=0;document.body.style.overflow='hidden';lenis&&lenis.stop();mod.setAttribute('aria-hidden','false');requestAnimationFrame(()=>requestAnimationFrame(()=>{mod.classList.add('open');document.getElementById('mx').focus({preventScroll:true})}))}
function closeMod(){mod.classList.remove('open');mod.setAttribute('aria-hidden','true');document.body.style.overflow='';lenis&&lenis.start();if(last)last.focus({preventScroll:true})}
document.addEventListener('click',e=>{if(mod.classList.contains('open')){if(e.target.closest('.mx')||e.target.classList.contains('mb'))closeMod();return}
if(e.target.closest('a'))return;const el=e.target.closest('[data-d]');if(el)openMod(el,e.clientX,e.clientY)});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&mod.classList.contains('open'))closeMod();
if((e.key==='Enter'||e.key===' ')&&e.target.matches&&e.target.matches('[data-d]')){e.preventDefault();const r=e.target.getBoundingClientRect();openMod(e.target,r.left+r.width/2,r.top+r.height/2)}});

/* ---- cinematic layer: smooth scroll, intro, parallax, scene, glow ---- */
let lenis=null;
try{if(typeof Lenis!=='undefined'&&!still){lenis=new Lenis({duration:1.2});const raf=t=>{lenis.raf(t);requestAnimationFrame(raf)};requestAnimationFrame(raf)}}catch(e){lenis=null}
document.addEventListener('click',e=>{const a=e.target.closest('a[href^="#"]'),h=a&&a.getAttribute('href');if(!h||h==='#')return;const t=h==='#top'?0:document.querySelector(h);if(t===null)return;e.preventDefault();if(lenis)lenis.scrollTo(t,{offset:-80});else if(t===0)scrollTo({top:0,behavior:'smooth'});else t.scrollIntoView({behavior:'smooth'})});
const GL=['#7d6df0','#9b5cf0','#d553c8','#ff6aa0','#ff8f6b','#7d6df0'];
function setGlow(i){const r=document.documentElement.style;r.setProperty('--g1',GL[i]);r.setProperty('--g2',GL[(i+1)%6]);r.setProperty('--g3',GL[(i+2)%6])}
const sc=document.getElementById('scene'),sws=[...sc.querySelectorAll('.sw')],sx=sc.querySelector('.sx');
function onScroll(){const y=scrollY,sh=stg.offsetHeight;
stg.style.setProperty('--sy',(-y*.22)+'px');stg.style.setProperty('--sy2',(y*.12)+'px');stg.style.setProperty('--hy',(y*.18)+'px');stg.style.setProperty('--ho',Math.max(0,1-y/(sh*.75)));
const r=sc.getBoundingClientRect(),p=Math.min(1,Math.max(0,-r.top/(r.height-innerHeight)));sx.style.setProperty('--sp',p);const k=p*sws.length*1.25;sws.forEach((w,i)=>w.classList.toggle('on',i<k))}
if(!still){addEventListener('scroll',onScroll,{passive:true});onScroll()}else sws.forEach(w=>w.classList.add('on'));
(function(){const it=document.getElementById('intro');if(!it)return;
if(still){it.remove();document.body.classList.remove('pre');return}
const iw=document.getElementById('iw'),ic=document.getElementById('ic'),bar=document.getElementById('ibar');
iw.innerHTML=[...SITE.bigWord].map((c,i)=>`<span style="--i:${i}">${c}</span>`).join('');
lenis&&lenis.stop();let st=null;
function f(t){if(!st)st=t;const p=Math.min((t-st)/1800,1),v=Math.round(100*(1-Math.pow(1-p,2.2)));ic.textContent=v;bar.style.transform=`scaleX(${v/100})`;
if(p<1)requestAnimationFrame(f);else setTimeout(()=>{it.classList.add('done');document.body.classList.remove('pre');lenis&&lenis.start();setTimeout(()=>it.remove(),1300)},300)}
requestAnimationFrame(f)})();
