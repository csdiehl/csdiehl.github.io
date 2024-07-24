import{r as g}from"./index.LFf77hJu.js";import{c as d,a as R,b as m}from"./index.35036246.AKdxUwVC.js";var T={exports:{}},y={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N=g,z=Symbol.for("react.element"),O=Symbol.for("react.fragment"),C=Object.prototype.hasOwnProperty,E=N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,M={key:!0,ref:!0,__self:!0,__source:!0};function I(e,a,n){var s,o={},c=null,r=null;n!==void 0&&(c=""+n),a.key!==void 0&&(c=""+a.key),a.ref!==void 0&&(r=a.ref);for(s in a)C.call(a,s)&&!M.hasOwnProperty(s)&&(o[s]=a[s]);if(e&&e.defaultProps)for(s in a=e.defaultProps,a)o[s]===void 0&&(o[s]=a[s]);return{$$typeof:z,type:e,key:c,ref:r,props:o,_owner:E.current}}y.Fragment=O;y.jsx=I;y.jsxs=I;T.exports=y;var i=T.exports,D=new Map,v=new WeakMap,P=0,W=void 0;function V(e){return e?(v.has(e)||(P+=1,v.set(e,P.toString())),v.get(e)):"0"}function F(e){return Object.keys(e).sort().filter(a=>e[a]!==void 0).map(a=>`${a}_${a==="root"?V(e.root):e[a]}`).toString()}function $(e){const a=F(e);let n=D.get(a);if(!n){const s=new Map;let o;const c=new IntersectionObserver(r=>{r.forEach(t=>{var l;const f=t.isIntersecting&&o.some(u=>t.intersectionRatio>=u);e.trackVisibility&&typeof t.isVisible>"u"&&(t.isVisible=f),(l=s.get(t.target))==null||l.forEach(u=>{u(f,t)})})},e);o=c.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:a,observer:c,elements:s},D.set(a,n)}return n}function U(e,a,n={},s=W){if(typeof window.IntersectionObserver>"u"&&s!==void 0){const l=e.getBoundingClientRect();return a(s,{isIntersecting:s,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:l,intersectionRect:l,rootBounds:l}),()=>{}}const{id:o,observer:c,elements:r}=$(n),t=r.get(e)||[];return r.has(e)||r.set(e,t),t.push(a),c.observe(e),function(){t.splice(t.indexOf(a),1),t.length===0&&(r.delete(e),c.unobserve(e)),r.size===0&&(c.disconnect(),D.delete(o))}}function J({threshold:e,delay:a,trackVisibility:n,rootMargin:s,root:o,triggerOnce:c,skip:r,initialInView:t,fallbackInView:l,onChange:f}={}){var u;const[b,G]=g.useState(null),j=g.useRef(),[k,_]=g.useState({inView:!!t,entry:void 0});j.current=f,g.useEffect(()=>{if(r||!b)return;let h;return h=U(b,(L,x)=>{_({inView:L,entry:x}),j.current&&j.current(L,x),x.isIntersecting&&c&&h&&(h(),h=void 0)},{root:o,rootMargin:s,threshold:e,trackVisibility:n,delay:a},l),()=>{h&&h()}},[Array.isArray(e)?e.toString():e,b,o,s,c,r,n,l,a]);const w=(u=k.entry)==null?void 0:u.target,A=g.useRef();!b&&w&&!c&&!r&&A.current!==w&&(A.current=w,_({inView:!!t,entry:void 0}));const p=[G,k.inView,k.entry];return p.ref=p[0],p.inView=p[1],p.entry=p[2],p}const B=e=>{const{ref:a,inView:n}=J({threshold:.6});return i.jsxs("div",{ref:a,className:n?d.tile:`${d.tile} ${d["tile-hidden"]}`,children:[i.jsxs("div",{children:[i.jsx("h2",{className:d["project-title"],children:e.title}),i.jsx("p",{className:d.description,children:e.description}),i.jsx("p",{className:d["language-tag"],children:e.languageTag.join(" / ")}),i.jsxs("div",{style:{display:"flex",gap:"16px"},children:[i.jsxs("a",{className:d["project-link"],href:e.link,children:[i.jsx("span",{children:"View Project"}),i.jsx("img",{alt:"right-arrow",src:"/arrow-right.svg"})]}),e?.codeLink&&i.jsxs("a",{className:d["project-link"],href:e.codeLink,children:[i.jsx("span",{children:"View Code"}),i.jsx("img",{alt:"right-arrow",src:"/arrow-right.svg"})]})]})]}),i.jsx("a",{href:e.link,children:i.jsx("img",{className:d["tile-img"],src:e?.image,alt:e.title})}),e.badge&&i.jsx("img",{className:d.badge,alt:"information is beautiful awards badge",src:e.badge})]})},S=[{name:"Recharts Sunburst Chart",link:"https://master--63da8268a0da9970db6992aa.chromatic.com/?path=/story/api-chart-sunburstchart--sunburst",codeLink:"https://github.com/recharts/recharts/pull/4037",imageLink:"/recharts_sunburst.png",languages:["React.js","Typescript","D3.js"],tag:["Dashboards","Web development"],description:"A new chart type for Recharts, an open-source React data visualization library with more than 173k users. The sunburst is a visually appealing variant of the treemap."},{name:"AP Wildfire Tracker",link:"https://interactives.ap.org/ap-wildfire-tracker/?sort=acres",imageLink:"/fire-tracker-screenshot.png",languages:["React.js","Typescript","Mapbox GL JS"],tag:["Geospatial","Dashboards","Data journalism"],description:"An interactive dashboard that displays real-time fire incident information and surrounding demographics, updated every 15 minutes.",cloudinaryId:"fire_tracker_ul6unw"},{name:"Olympics Records Progression",link:"https://apnews.com/projects/olympic-athletes-progress/",imageLink:"/olympic_records.png",languages:["React.js","Typescript","D3.js"],tag:["Data journalism","Web development"],description:"Interactive charts that explore the progress of Olympic records over time."},{name:"AI Data Assistant",link:"https://ai-data-assistant.vercel.app/login",codeLink:"https://github.com/csdiehl/ai-data-assistant",imageLink:"/bitcoin_line.png",languages:["React.js","Typescript","D3.js"],tag:["Dashboards","Web development"],description:"Explore your data using conversational AI. A full-stack Next.js web app, using Vercel's AI SDK and a firebase backend, that allows users to chat with a database, save and load data snapshots, and use generative UI to build charts."},{name:"Carbon footprint explorer",link:"https://apnews.com/projects/carbon-footprint-calculator/",imageLink:"/income_calculator.png",languages:["React.js","Typescript","D3.js"],tag:["Dashboards","Data journalism"],description:"An interactive visualization tool for exploring how your income and consumer spending decisions affect your carbon footprint."},{name:"AP Extreme Heat Tracker",link:"https://interactives.ap.org/heat-tracker/",codeLink:"https://github.com/csdiehl/ap-heat-tracker",imageLink:"/heat_tracker.png",languages:["React.js","D3.js","Typescript","Mapbox GL JS","Python"],tag:["Geospatial","Dashboards","Data journalism"],description:"A real-time heat tracking app that pulls data every day from satellites and 1,000+ weather stations across the globe, analyzes it for deviations from normal temperatures, and displays it in an interactive, searchable map and custom line chart."},{name:"Climate and Disease",link:"https://projects.apnews.com/features/2023/climate-change-disease-animals-warming-earth/index.html",imageLink:"/grist-disease.png",languages:["React.js","D3.js","Python"],tag:["Data Journalism","Geospatial"],description:"A parallax scrolling experience. Data visualizations highlight the links between climate change and disease, including the migration of animal species and recent history of climate disasters.",cloudinaryId:"grist-disease_ygobl1",badge:"./iib_badge.png"},{name:"Paris Olympics Interactive Graphics",link:"https://www.ap.org/content/topics/sports/interactive-graphics/",imageLink:"/hometown_heroes.png",languages:["React.js"],tag:["Data Journalism","Geospatial"],description:"Olympic graphics licensed to nearly 100 publications, including Time and FOX, to visualize more than 650 athletes, track medal counts in real time, and explore olympic venues. I produced the hometown heroes and venues maps and oversaw production of the other graphics."},{name:"Ski resorts are embracing a new role: climate activist",link:"https://apnews.com/article/climate-change-activism-ski-industry-028d83e19543db5d7633ea83932bdde3",imageLink:"/skiing.png",languages:["React.js","D3.js"],tag:["Data journalism","Web development"],description:"A scrollytelling page that weaves together photo, video, maps and data visualization to explore the effects of climate change on skiing and snowpack.",cloudinaryId:"skiing_xpcioo"},{name:"CEO Pay Visualization",link:"https://apnews.com/article/wildfires-forest-thinning-community-risk-biden-9d77309cb9e7520069b3c575d850aadc",imageLink:"/ceo.png",languages:["React.js","D3.js"],tag:["Data journalism"],description:"An interactive scatterplot and diverging bar chart to visualize results of an AP survey on CEO performance and compensation.",cloudinaryId:"fire_thinning_bzqrtp"},{name:"Death and Regrowth on the Great Barrier Reef",link:"https://projects.apnews.com/features/2022/coral-reef-immersive/index.html",imageLink:"/GBR.png",languages:["React.js","Python"],tag:["Geospatial","Data journalism"],description:"An interactive map visualization of major coral bleaching events.",cloudinaryId:"GBR_yt22no"},{name:"Transit Segment Priority Finder",link:"https://ibi-group.github.io/mbta-transit-priority-finder/",imageLink:"/mbta_tool.PNG",languages:["React.js","Python"],tag:["Geospatial","Dashboards"],description:"Dashboard built for internal use at MBTA. Allows agency to filter and select stop-to-stop bus segments for transit priority measures such as bus-only lanes. Users can adjust the weights as needed to calculate a new weighted average score based on their priorities."},{name:"Maui Fires Timeline",link:"https://interactives.ap.org/hawaii-timeline/",imageLink:"/lahaina.png",languages:["React.js","Typescript","Mapbox GL JS"],tag:["Geospatial","Data journalism"],description:"An interactive map that tells the story of the Lahania wildire using smooth animations.",cloudinaryId:"lahaina_fqon1l"},{name:"Wildfire Risk Maps",link:"https://apnews.com/article/wildfires-forest-thinning-community-risk-biden-9d77309cb9e7520069b3c575d850aadc",imageLink:"/wildfire.png",languages:["React.js","D3.js"],tag:["Data journalism","Geospatial"],description:"A series of interactive maps that explore a Forest Service plan to mitigate wildfire throughout the U.S.",cloudinaryId:"fire_thinning_bzqrtp"},{name:"An Underwater Paradise Under Threat",link:"https://apnews.com/projects/mexico-tren-maya-climate-yucatan/",imageLink:"/cenotes.png",languages:["React.js","D3.js"],tag:["Web development"],description:"I developed this webpage and the accompanying maps to showcase AP reporters' work documenting destruction of cenotes in the Yucatan Peninsula."},{name:"WMATA Dashboard",link:"https://github.com/csdiehl/smart-card-data-dashboard#readme",imageLink:"/WMATA_web_app.png",languages:["Javascript","Python"],tag:["Dashboards","Geospatial"],description:"Interactive dashboard built for internal use at Washington D.C. Metropolitan Transit Authority. Visualizes smart card data."},{name:"Spotify Reccomendation Engine",link:"https://csdiehl.github.io/spotify-reccomendation-engine/",imageLink:"/spotify_app.png",languages:["React.js"],tag:["Dashboards"],description:"Allows users to connect Spotify accounts and receive music reccomendations using the Spotify Web API."},{name:"Protests Visualization",link:"https://observablehq.com/@csdiehl/protests-analysis",imageLink:"/protests.png",languages:["React.js"],tag:["Data journalism"],description:"Interactive, Javascript-based data visualization of recent protests in the United States"},{name:"Transit System Dashboard",link:"https://cse512-21s.github.io/FP-Transit_System/",imageLink:"/orcaviz.png",languages:["React.js"],tag:["Dashboards","Geospatial"],description:"Dashboard for visualizing smart card data showing passenger journeys on Sound Transit in the Puget Sound region"},{name:"Outdoor Access Score",link:"https://rpubs.com/csdiehl/outdoor-access",imageLink:"/outdoor_access.png",description:"A custom gravity model I built for a graduate school course that shows census tracts in King County by their ability to access outdoor activities.",languages:["Python","R"],tag:["Geospatial"]},{name:"Transit Smart Card Clustering",link:"https://rpubs.com/csdiehl/transit-clusters",imageLink:"/clusters.png",description:"A machine learning model that clusters transit stations in King Count based on ridership demographics.",languages:["Python","R"],tag:["Geospatial"]},{name:"Mobility in a Pandemic",link:"",imageLink:"/covid_mobility.jpg",description:"Data visualization of the change in Google searches for common destinations before and after the pandemic.",languages:["Python","R"],tag:[]},{name:"Visualizing Police Use of Force",link:"",imageLink:"/police_force.jpg",description:"",languages:["Python","R"],tag:[]}],q=g.forwardRef((e,a)=>{const[n,s]=g.useState(!1),o=e.filters==="All"?S:S.filter(t=>t.tag.includes(e.filters)),r=(n?o:o.slice(0,6)).map(t=>i.jsx(B,{tag:t.tag,title:t.name,link:t.link,codeLink:t?.codeLink,image:t.imageLink,languageTag:t.languages,cloudinaryId:t?.cloudinaryId,badge:t?.badge,description:t.description},t.link+t.name));return i.jsxs("div",{className:"fade-in",ref:a,children:[i.jsx("div",{className:R.tileContainer,children:r}),i.jsxs("button",{onClick:()=>s(t=>!t),className:R["see-more-button"],children:[i.jsxs("span",{children:[n?"Hide":"See more"," projects"]}),i.jsx("img",{className:R[n?"arrow-clicked":""],alt:"arrow",height:"24px",width:"24px",src:"/down-arrow.svg"})]})]})}),K=["All","Geospatial","Dashboards","Data journalism","Web development"];function X(){const[e,a]=g.useState("All"),n=g.useRef();return i.jsxs("div",{className:m.App,style:{width:"100%"},children:[i.jsx("div",{className:m["nav-bar"],children:K.map(s=>i.jsx("button",{onClick:()=>a(s),className:`${m["nav-btn"]} ${m[e===s?"nav-btn-clicked":"project-button"]}`,children:s},s))}),i.jsx("div",{className:m["nav-line"],children:i.jsx("div",{className:m["nav-highlight"]})}),i.jsx(q,{filters:e,ref:n})]})}export{X as default};