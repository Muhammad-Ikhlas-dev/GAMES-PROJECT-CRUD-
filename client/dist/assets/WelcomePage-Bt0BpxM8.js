import{j as e,u as n,r as l,a,b as c}from"./index-C0qmoWQM.js";import{H as r,L as i}from"./LogoutBtn-BKBxKGxO.js";const m="/assets/welcome_img-YLkwfKVi.png",x="/assets/profile_icon-B0aVNZ7C.jpg",d=s=>(console.log("profile re-rendered"),e.jsxs("div",{className:"flex flex-col justify-center items-center",children:[e.jsx("img",{className:"w-8 object-cover object-center",src:x,alt:""}),e.jsx("p",{className:"font-bold",children:s.username})]})),u=()=>{const s=n(),{username:t,token:o}=l.useContext(a);return l.useEffect(()=>{console.log("token in WelcomePage: ",o),console.log("username in WelcomePage: ",t),o||s("/login")},[]),e.jsxs("div",{className:"h-[100%] bg-[#40670C] overflow-hidden",children:[e.jsxs("div",{className:"flex justify-between pl-[2px] pr-[10px] items-center",children:[e.jsx(c,{}),e.jsx(r,{}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(d,{username:t}),e.jsx(i,{})]})]}),e.jsxs("div",{className:"flex justify-center items-center gap-32 pl-12 mt-[5%]",children:[e.jsxs("div",{children:[e.jsxs("h1",{className:"text-6xl font-bold font-mono text-center",children:["Hey",e.jsx("span",{className:"mx-2 w-fit h-fit font-bold text-[#DF5E3A]",children:t}),"enjoy our #1M+ TRENDING"]}),e.jsx("h1",{className:"text-6xl font-bold font-mono text-center",children:"GAMES"}),e.jsx("p",{className:"font-bold w-[25rem] m-auto text-lg text-center mt-7",children:"play million of games worldwide and play online tournaments and much more without any subscription, Yup It's Free."})]}),e.jsx("div",{className:"w-full h-fit",children:e.jsx("img",{className:"w-full scale-125 object-cover object-center",src:m,alt:"unable to load"})})]})]})};export{u as default};
