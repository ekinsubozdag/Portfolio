(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{62:function(e,t,i){},68:function(e,t,i){},69:function(e,t,i){},71:function(e,t,i){},91:function(e,t,i){},92:function(e,t,i){},93:function(e,t,i){},94:function(e,t,i){},95:function(e,t,i){},96:function(e,t,i){},97:function(e,t,i){},98:function(e,t,i){"use strict";i.r(t);var n=i(9),a=i(10),o=i(0),s=i(1),c=Object(o.createContext)(),l=function(e){var t=e.children,i=Object(o.useState)("light"),n=Object(a.a)(i,2),l=n[0],r=n[1];Object(o.useEffect)((function(){"dark"===localStorage.getItem("themeName")&&r("dark")}),[]);return Object(s.jsx)(c.Provider,{value:[{themeName:l,toggleTheme:function(){var e="dark"===l?"light":"dark";localStorage.setItem("themeName",e),r(e)}}],children:t})},r=i.p+"static/media/sunbathingIcon.e8f00913.png",h=i.p+"static/media/colorMixerIcon.931c0867.jpg",d=i.p+"static/media/islandIcon.e611002f.png",m=i.p+"static/media/popcornIcon.bdf0ca9f.png",u=i.p+"static/media/candyCubeIcon.0cd06b28.png",p=i.p+"static/media/snapIcon.4d5a02d9.png",b=i.p+"static/media/saveHerIcon.13cd8e79.png",j=i.p+"static/media/torchMasterIcon.2435e9b8.jpg",g="https://ekinsubozdag.github.io",f="Ekinsu Bozdag",v="Ekinsu Bozdag",y="Game Developer",x=["High School - Ankara Atat\xfcrk '11","B.S. in CS - Bilkent University '15"],O="https://example.com",w={linkedin:"https://www.linkedin.com/in/ekinsu-bozda%C4%9F-a0892b167",github:"https://github.com/ekinsubozdag"},k=[{name:"Stick Wizard Game",short_description:"Defeat ghost with drawing their signs.",description:"Random number of ghosts comes next to the player.Levels have multiple stages of ghost attack.Defeat them by drawing particular sign on their head.When ghost come closer to the players area before drawing level fails. Reaching the opponent's area enables dunk mode where you can get style points and make a slam dunk.",sourceCode:"https://github.com",livePreview:"https://github.com",videoUrl:"https://vimeo.com/641868531",details:["Development platform: Unity","Development time: ~2 week","had a reference one of Google halloween mini game"]},{name:"Foresight Game",short_description:"Tap in true position",description:"Every level has different scenerioLevels have stages,character animate different poses in stagesGame aim is tapping on the right time",sourceCode:"https://github.com",livePreview:"https://github.com",videoUrl:"https://vimeo.com/641925710",details:["Development platform: Unity","Development time: ~2 month","I worked with unity timeline feature in this game"]},{name:"Easter Egg Runner",short_description:"Egg clones in runner platform",description:"Egg ",sourceCode:"https://github.com",livePreview:"https://github.com",appIcon:m,videoUrl:"https://vimeo.com/641927501",details:["Development platform: Unity","Development time: ~3 week"]},{name:"Island Clash",short_description:"Merge the islands and defeat the boss",description:"Mini strategy game in which you control little islands that carry your army. Pick up volcano island and merge it with forest, the forest burns down and damagest the enemy. Pick up waterfall island and merge it with the volcano, your allies heal up and join your army. Follow the correct order of merges to build the biggest army possible. Only then you will able to defeat the big boss at the end",sourceCode:"https://github.com",livePreview:"https://github.com",appIcon:d,videoUrl:"https://vimeo.com/615724306",details:["Development platform: Unity","Development time: ~3 weeks","Mostly collider based logic","Custom shaders and effects","Not really successful to convey what type of island is useful for what, lacking in the aspect of game design"]},{name:"Sunbathing",short_description:"Get the perfect tan",description:"A summer themed game where you try to get as much sunlight as possible. Each level begins with a sunscreen phase, you have to rub the sunscreen fast to move on. Then the tanning phases begin, you have to avoid the shadows to tan the character properly. In addition, some random objects may come into play and try to block your sun. At the end how much sun tan you got is calculated and a success ratio is determined.",sourceCode:"https://github.com",livePreview:"https://github.com",appIcon:r,videoUrl:"https://vimeo.com/637362033",details:["Development platform: Unity","Development time: ~3 weeks","relied heavily on Inverse Kinematics","contributed heavily to the custom shader created by the Technical Artist","custom tanning made possible by manipulating vertex color of the mesh","tan % calculated by finding out the ratio of tanned vertices"]},{name:"Snap It All",short_description:"Get rid of annoying flies",description:"Flies are especially annoying in the summer. Help the old lady kill some flies by slapping, spraying or throwing slippers at them. ",sourceCode:"https://github.com",livePreview:"https://github.com",appIcon:p,videoUrl:"https://vimeo.com/615725220",details:["Development platform: Unity","Development time: ~1 weeks","Fun little game with cute grandma and custom made flies","Although visually decent, the gameplay was hard due to the controls"]},{name:"Color Mixer",short_description:"Mix the colors to reach the destination",description:"Each level has a target color as a destination. The purpose is to draw a line passing through correct colors to reach the target. While passing through each color, the color of the line gradually mixex towards the combination of all colors touched so far. If any of the obstacles laying around is touched, you have to start over.",sourceCode:"https://github.com",livePreview:"https://github.com",appIcon:h,videoUrl:"https://vimeo.com/615724233",details:["Development platform: Unity","Development time: ~1 week","relied on custom shader for showing the drawn line with brush strokes","color mixing is attempted to represent how water colors actually mix in real life"]},{name:"Candy Cube",short_description:"Match and destroy the cubes",description:"A simple cube puzzle game where you need to match colors to destroy little cubes inside. After you match the cubes, if they are destroyed the cubes currently above fall down. Each time cubes fall, new matches are checked, so it is possible to match multiple sets of cubes to make combos. Also possible to rotate the cube to find more matches. The goal in each level to reach the target score without running out of time.",sourceCode:"https://github.com",livePreview:"https://github.com",appIcon:u,videoUrl:"https://vimeo.com/615724190",details:["Development platform: Unity","Development time: ~1 week","Biggest challenge was to make the cubes fall down depending on the rotation of the cube instead of physics","Used a matrix to hold a reference to all the cubes and find out if any of the cubes are missing below a cube to make it fall","When a matching is searched, the cubes on the edges allow matches to follow to the connected sides of the cubes"]},{name:"Save Her",short_description:"Save the girl from the zombies",description:"A game where you play the role of a dual power wielding super hero.Protect the girl at all times by casting ice beam on the zombies running after her. When a zombie is completely frozen, automatically send a fireball to shatter it and inflict damage around the impact. Recommended to use the objects around to make your job easier such as the wooden bridge and explosive barrels. ",sourceCode:"https://github.com",livePreview:"https://github.com",appIcon:b,videoUrl:"https://vimeo.com/615724585",details:["Development platform: Unity","Development time: ~2 weeks","used splines for the movement of camera, hero and the girl","relied on NavMesh to control the zombies","custom shaders on ice beam, fire ball and explosions","separate but synchronized animations for the level end sequence"]},{name:"Torch Master",short_description:"Light up as many cakes as you can",description:"In this birthday party themed game, your task is to light up as many cakes as you can. Don't let your gas run out by timing your moves precisely But watch out for the bomb cakes!",sourceCode:"https://github.com",livePreview:"https://github.com",appIcon:j,videoUrl:"https://vimeo.com/615725255",details:["Development platform: Unity","Development time: ~1 week","Simple collider game where cakes spawn at a distance and move towards camera"]}],_=["C#","Unity","HTML","CSS","JavaScript","React","Git","Java"],N="ekinzu09@gmail.com",C=i(45),I=i.n(C),D=i(40),U=i.n(D),S=i(47),z=i.n(S),E=i(46),P=i.n(E),A=(i(62),function(){var e=Object(o.useContext)(c),t=Object(a.a)(e,1)[0],i=t.themeName,n=t.toggleTheme,l=Object(o.useState)(!1),r=Object(a.a)(l,2),h=r[0],d=r[1],m=function(){return d(!h)};return Object(s.jsxs)("nav",{className:"center nav",children:[Object(s.jsxs)("ul",{style:{display:h?"flex":null},className:"nav__list",children:[k.length?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#projects",onClick:m,className:"link link--nav",children:"Projects"})}):null,_.length?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#skills",onClick:m,className:"link link--nav",children:"Skills"})}):null,N?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#contact",onClick:m,className:"link link--nav",children:"Contact"})}):null]}),Object(s.jsx)("button",{type:"button",onClick:n,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===i?Object(s.jsx)(U.a,{}):Object(s.jsx)(I.a,{})}),Object(s.jsx)("button",{type:"button",onClick:m,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:h?Object(s.jsx)(P.a,{}):Object(s.jsx)(z.a,{})})]})}),M=(i(68),function(){var e=g,t=f;return Object(s.jsxs)("header",{className:"header center",children:[Object(s.jsx)("h3",{children:e?Object(s.jsx)("a",{href:e,className:"link",children:t}):t}),Object(s.jsx)(A,{})]})}),T=i(48),G=i.n(T),L=i(49),B=i.n(L),F=(i(69),function(){var e=v,t=y,i=x,n=O,a=w;return Object(s.jsxs)("div",{className:"about center",children:[e&&Object(s.jsxs)("h1",{children:["Hi, I am ",Object(s.jsx)("span",{className:"about__name",children:e})]}),t&&Object(s.jsxs)("h2",{className:"about__role",children:["A ",t]}),Object(s.jsx)("p",{className:"about__desc",children:i.map((function(e){return Object(s.jsxs)("p",{children:[" ",e," "]})}))}),Object(s.jsxs)("div",{className:"about__contact center",children:[n&&Object(s.jsx)("a",{href:"/OmerMertCandanCV.pdf",target:"_blank",download:!0,children:Object(s.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),a&&Object(s.jsxs)(s.Fragment,{children:[a.github&&Object(s.jsx)("a",{href:a.github,"aria-label":"github",className:"link link--icon",children:Object(s.jsx)(G.a,{})}),a.linkedin&&Object(s.jsx)("a",{href:a.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(s.jsx)(B.a,{})})]})]})]})}),R=i(32),H=i.n(R),W=i(51),J=i.n(W),q=(i(71),i(115)),K=i(114),V=i(50),Y=i.n(V),Q={position:"absolute",top:"10vh",left:"10vw",width:"80vw",height:"80vh",bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4,paddingLeft:"5vw",paddingRight:"5vw",display:"flex",flexDirection:"row",color:"#cdcdff",backgroundColor:"#23283e"},X=function(e){var t=e.project,i=Object(o.useState)(!1),n=Object(a.a)(i,2),c=n[0],l=n[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(q.a,{open:c,onClose:function(){return l(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(s.jsxs)(K.a,{sx:Q,children:[Object(s.jsx)(Y.a,{width:"40vw",height:"100%",url:t.videoUrl}),Object(s.jsx)("div",{className:"info",children:Object(s.jsxs)("div",{className:"project",children:[Object(s.jsx)("h3",{className:"section__title",children:t.name}),Object(s.jsx)("p",{className:"project__description",children:t.description}),Object(s.jsx)("br",{}),Object(s.jsx)("h4",{className:"section__title",children:"Details"}),t.details.map((function(e){return Object(s.jsx)("li",{className:"project__detail",children:e})}))]})})]})}),Object(s.jsxs)("div",{className:"project",children:[Object(s.jsx)("h3",{children:t.name}),Object(s.jsx)("img",{src:t.appIcon,alt:"app icon",className:"app-icon"}),Object(s.jsx)("br",{}),Object(s.jsx)("p",{className:"project__short__description",children:t.short_description}),t.livePreview&&Object(s.jsx)("button",{type:"button",onClick:function(){return l(!0)},"aria-label":"source code",className:"link link--icon",style:{marginTop:20},children:Object(s.jsx)(J.a,{})})]})]})},Z=(i(91),function(){return k.length?Object(s.jsxs)("section",{id:"projects",className:"section projects",children:[Object(s.jsx)("h2",{className:"section__title",children:"Games"}),Object(s.jsx)("div",{className:"projects__grid",children:k.map((function(e){return Object(s.jsx)(X,{project:e},H()())}))})]}):null}),$=(i(92),function(){return _.length?Object(s.jsxs)("section",{className:"section skills",id:"skills",children:[Object(s.jsx)("h2",{className:"section__title",children:"Skills"}),Object(s.jsx)("ul",{className:"skills__list",children:_.map((function(e){return Object(s.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},H()())}))})]}):null}),ee=i(52),te=i.n(ee),ie=(i(93),function(){var e=Object(o.useState)(!1),t=Object(a.a)(e,2),i=t[0],n=t[1];return Object(o.useEffect)((function(){var e=function(){return window.pageYOffset>500?n(!0):n(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),i?Object(s.jsx)("div",{className:"scroll-top",children:Object(s.jsx)("a",{href:"#top",children:Object(s.jsx)(te.a,{fontSize:"large"})})}):null}),ne=(i(94),function(){return N?Object(s.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(s.jsx)("h2",{className:"section__title",children:"Contact"}),Object(s.jsx)("a",{href:"mailto:".concat(N),children:Object(s.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),ae=(i(95),function(){return Object(s.jsx)("footer",{className:"footer",children:Object(s.jsx)("p",{children:" Last updated November 2021 "})})}),oe=(i(96),function(){var e=Object(o.useContext)(c),t=Object(a.a)(e,1)[0].themeName;return Object(s.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(s.jsx)(M,{}),Object(s.jsxs)("main",{children:[Object(s.jsx)(F,{}),Object(s.jsx)(Z,{}),Object(s.jsx)($,{}),Object(s.jsx)(ne,{})]}),Object(s.jsx)(ie,{}),Object(s.jsx)(ae,{})]})});i(97);Object(n.render)(Object(s.jsx)(l,{children:Object(s.jsx)(oe,{})}),document.getElementById("root"))}},[[98,1,2]]]);
//# sourceMappingURL=main.ad41da99.chunk.js.map