(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"038e":function(t,e,a){"use strict";var s=a("8e42"),n=a.n(s);n.a},"0565":function(t,e,a){"use strict";var s=a("16f0"),n=a.n(s);n.a},1100:function(t,e,a){t.exports=a.p+"img/background.5f42e13e.jpg"},"16f0":function(t,e,a){},2614:function(t,e,a){"use strict";var s=a("cd7c"),n=a.n(s);n.a},7180:function(t,e,a){t.exports=a.p+"img/parallax.7e7a7786.jpg"},"8b24":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-layout",{attrs:{view:"hHh lpr fff"}},[s("q-header",[s("q-toolbar",[s("q-toolbar-title",{staticClass:"font-russo"},[t._v(" Welcome ")]),s("q-tabs",{staticClass:"text-accent",model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[s("q-tab",{attrs:{name:"intro",label:"Intro"},on:{click:function(e){return t.scrollToElement("intro")}}}),s("q-tab",{attrs:{name:"about",label:"About"},on:{click:function(e){return t.scrollToElement("about")}}}),s("q-tab",{attrs:{name:"projects",label:"Projects"},on:{click:function(e){return t.scrollToElement("projects")}}}),s("q-tab",{attrs:{name:"contact",label:"Contact"},on:{click:function(e){return t.scrollToElement("contact")}}})],1)],1)],1),s("q-page-container",[s("q-page",[s("section",{attrs:{id:"intro"}},[s("q-img",{attrs:{src:a("1100"),height:"85vh"}},[s("div",{staticClass:"absolute-full text-h1 flex flex-center font-russo"},[s("transition",{attrs:{appear:"","enter-active-class":"animated fadeInDown"}},[s("span",[t._v(" Hi,  ")])]),s("transition",{attrs:{appear:"","enter-active-class":"animated lightSpeedInRight"}},[s("span",[t._v(" I'm Wills ")])])],1)])],1),s("section",{staticClass:"q-py-xl",attrs:{id:"about"}},[s("div",{staticClass:"text-h3 text-center font-russo q-mb-lg"},[t._v("About Me")]),s("div",{staticClass:"q-mb-xl"},[s("AboutCard",{staticClass:"q-mx-auto"})],1),s("div",{staticClass:"row"},t._l(t.skills,(function(t){return s("div",{key:t.title,staticClass:"col-12 col-sm-6 col-md-3 q-mb-xl"},[s("SkillCard",{staticClass:"q-mx-auto",attrs:{icon:t.icon,title:t.title}})],1)})),0)]),s("section",{staticClass:"q-py-xl bg-secondary",attrs:{id:"projects"}},[s("div",{staticClass:"text-h3 text-center font-russo q-mb-lg"},[t._v("My Projects")]),s("div",{staticClass:"row"},t._l(t.projects,(function(t){return s("div",{key:t.title,staticClass:"col-12 col-sm-6 col-md-4 q-mb-xl"},[s("ProjectCard",{staticClass:"q-mx-auto",attrs:{image:t.image,title:t.title,subtitle:t.subtitle,link:t.link}})],1)})),0)]),s("section",{attrs:{id:"contact"}},[s("ContactForm")],1)])],1),s("q-footer",{staticClass:"q-py-xs"},[s("div",{staticClass:"flex justify-center"},t._l(t.footers,(function(e){return s("q-btn",{key:e.name,attrs:{flat:"",round:"",size:"lg",icon:e.icon},on:{click:function(a){return t.goTo(e.link)}}})})),1)])],1)},n=[],i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-card",{staticStyle:{"min-width":"430px","max-width":"80%"},attrs:{dark:""}},[s("q-bar",[s("q-btn",{attrs:{dense:"",flat:"",round:"",icon:"lens",size:"8.5px",color:"red"}}),s("q-btn",{attrs:{dense:"",flat:"",round:"",icon:"lens",size:"8.5px",color:"yellow"}}),s("q-btn",{attrs:{dense:"",flat:"",round:"",icon:"lens",size:"8.5px",color:"green"}}),s("div",{staticClass:"col text-center text-weight-bold"},[t._v("Greeting")])],1),s("q-card-section",{attrs:{horizontal:t.largeScreen}},[s("div",{staticClass:"q-mx-auto",staticStyle:{width:"300px"}},[s("q-img",{staticStyle:{"border-radius":"inherit"},attrs:{src:a("de8e"),width:"300px"}})],1),s("q-card-section",{staticClass:"full-width font-ubuntu"},[s("div",{staticClass:"text-h4 text-weight-bold text-negative text-center"},[s("span",{staticClass:"text-info"},[t._v("<")]),t._v("Software Engineer\n        "),s("span",{staticClass:"text-info"},[t._v("/>")])]),s("div",{staticClass:"text-subtitle1"},[s("span",{staticClass:"text-info"},[t._v("{")]),s("br"),t._v("\n          "),s("span",{staticClass:"text-negative"},[t._v('"name": ')]),s("span",[t._v('"Ooi Boon Pin",')]),s("br"),t._v("\n\n          "),s("span",{staticClass:"text-negative"},[t._v('"country": ')]),s("span",[t._v('"Malaysia",')]),s("br"),t._v("\n\n          "),s("span",{staticClass:"text-negative"},[t._v('"email": ')]),s("span",[t._v('"bp_ooi0702@hotmail.com",')]),s("br"),t._v("\n\n          "),s("span",{staticClass:"text-negative"},[t._v('"languages": ')]),s("span",[t._v("[")]),s("br"),t._v("\n            "),s("span",[t._v('"JavaScript",')]),s("br"),t._v("\n            "),s("span",[t._v('"Python",')]),s("br"),t._v("\n            "),s("span",[t._v('"Go",')]),s("br"),t._v("\n            "),s("span",[t._v('"Dart"')]),s("br"),t._v("\n          "),s("span",[t._v("]")]),s("br"),s("span",{staticClass:"text-info"},[t._v("}")])])])],1)],1)},o=[],r={name:"AboutCard",data(){return{largeScreen:!0}},watch:{"$q.screen.width"(){this.setScreen()}},mounted:function(){this.setScreen()},methods:{setScreen(){this.$q.screen.width<this.$q.screen.sizes.md?this.largeScreen=!1:this.largeScreen=!0}}},l=r,c=a("2877"),u=a("f09f"),d=a("d847"),b=a("9c40"),m=a("a370"),p=a("068f"),f=a("eebe"),g=a.n(f),h=Object(c["a"])(l,i,o,!1,null,null,null),v=h.exports;g()(h,"components",{QCard:u["a"],QBar:d["a"],QBtn:b["a"],QCardSection:m["a"],QImg:p["a"]});var x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-card",{staticClass:"full-height",class:{"shadow-12":t.hover},staticStyle:{width:"230px"},attrs:{square:""},on:{mouseover:function(e){t.hover=!0},mouseleave:function(e){t.hover=!1}}},[a("q-card-section",{staticClass:"text-center"},[a("q-icon",{attrs:{name:t.icon,size:"100px",color:"primary"}})],1),a("q-card-section",[a("div",{staticClass:"text-h5 text-center text-weight-bold text-secondary"},[t._v("\n      "+t._s(t.title)+"\n    ")])])],1)},C=[],q={name:"SkillCard",props:{icon:String,title:String},data(){return{hover:!1}}},_=q,w=a("0016"),y=Object(c["a"])(_,x,C,!1,null,null,null),S=y.exports;g()(y,"components",{QCard:u["a"],QCardSection:m["a"],QIcon:w["a"]});var k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-card",{staticClass:"zoom full-height",class:{"shadow-12":t.hover},staticStyle:{width:"230px"},on:{mouseover:function(e){t.hover=!0},mouseleave:function(e){t.hover=!1}}},[a("q-img",{attrs:{src:"./projects/"+t.image,height:"160px"}}),a("q-card-section",[a("div",{staticClass:"text-h6"},[t._v(t._s(t.title))])]),a("q-card-section",{staticClass:"q-pt-none"},[t._v("\n    "+t._s(t.subtitle)+"\n  ")]),""!==t.link?a("q-card-actions",{attrs:{align:"right"}},[a("a",{staticClass:"link text-subtitle2 text-primary",attrs:{href:t.link,target:"_blank"}},[t._v("Visit website >>")])]):t._e()],1)},j=[],Q={name:"ProjectCard",props:{image:String,title:String,subtitle:String,link:String},data(){return{hover:!1}}},P=Q,T=(a("2614"),a("4b7e")),E=Object(c["a"])(P,k,j,!1,null,"19d5f324",null),I=E.exports;g()(E,"components",{QCard:u["a"],QImg:p["a"],QCardSection:m["a"],QCardActions:T["a"]});var M=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-parallax",{attrs:{src:a("7180"),height:600}},[s("div",{staticClass:"full-width"},[s("div",{staticClass:"text-h3 text-center text-white font-russo"},[t._v("Contact Me")]),s("div",{staticClass:"q-mx-auto q-mt-xl",style:{width:t.largeScreen?"50%":"90%"}},[s("q-form",{staticClass:"bg-opacity rounded-corner q-pa-lg",on:{submit:function(e){return e.preventDefault(),t.sendMail(e)}}},[s("q-input",{staticClass:"q-mb-lg",attrs:{outlined:"",label:"Subject *","bg-color":"white",color:"secondary",rules:[function(t){return!!t||"* Required"}]},model:{value:t.subject,callback:function(e){t.subject=e},expression:"subject"}}),s("q-input",{attrs:{outlined:"",type:"textarea",label:"Your Message *","bg-color":"white",color:"secondary","input-style":"resize:none;",rules:[function(t){return!!t||"* Required"}]},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}}),s("div",{staticClass:"flex justify-center q-mt-xl"},[s("q-btn",{attrs:{type:"submit",label:"Send Message",size:"lg",color:"positive"}})],1)],1)],1)])])},$=[],z={name:"ContactForm",data(){return{largeScreen:!0,subject:"",message:""}},watch:{"$q.screen.width"(){this.setScreen()}},mounted:function(){this.setScreen()},methods:{setScreen(){this.$q.screen.width<this.$q.screen.sizes.md?this.largeScreen=!1:this.largeScreen=!0},sendMail(){window.location.href=`mailto:bp_ooi0702@hotmail.com?subject=${this.subject}&body=${this.message}`,subject="",message=""}}},O=z,B=(a("038e"),a("639d")),A=a("0378"),D=a("27f9"),F=Object(c["a"])(O,M,$,!1,null,"fa239170",null),G=F.exports;g()(F,"components",{QParallax:B["a"],QForm:A["a"],QInput:D["a"],QBtn:b["a"]});var H=a("0831"),R=a("b06b");const{getScrollTarget:J,setScrollPosition:W}=H["a"];var L={name:"PageIndex",components:{AboutCard:v,SkillCard:S,ProjectCard:I,ContactForm:G},data(){return{tab:"intro",skills:[{icon:"devices",title:"Web Development"},{icon:"memory",title:"Embedded System"},{icon:"cloud_upload",title:"Internet of Things"},{icon:"psychology",title:"Artificial Intelligence"}],projects:[{image:"resume.jpg",title:"My Resume",subtitle:"My resume webpage built with plain HTML/CSS",link:"https://ooibp.github.io/"},{image:"euler.png",title:"Project Euler",subtitle:"My Github repo for solving Project Euler using Go language",link:"https://github.com/OoiBP/ProjectEuler"},{image:"dashboard.jpg",title:"IoT Dashboard",subtitle:"My ongoing dashboard monitoring project for IoT",link:""}],footers:[{name:"facebook",icon:"fab fa-facebook",link:"https://www.facebook.com/OoiBP92/"},{name:"github",icon:"fab fa-github",link:"https://github.com/OoiBP"},{name:"linkedin",icon:"fab fa-linkedin",link:"https://www.linkedin.com/in/boon-pin-ooi-715185194"}]}},methods:{scrollToElement(t){let e=document.getElementById(t);const a=J(e),s=e.offsetTop+3,n=300;W(a,s,n)},goTo(t){Object(R["a"])(t)}}},V=L,Y=(a("0565"),a("4d5a")),K=a("e359"),N=a("65c6"),U=a("6ac5"),X=a("429b"),Z=a("7460"),tt=a("09e3"),et=a("9989"),at=a("7ff0"),st=Object(c["a"])(V,s,n,!1,null,null,null);e["default"]=st.exports;g()(st,"components",{QLayout:Y["a"],QHeader:K["a"],QToolbar:N["a"],QToolbarTitle:U["a"],QTabs:X["a"],QTab:Z["a"],QPageContainer:tt["a"],QPage:et["a"],QImg:p["a"],QFooter:at["a"],QBtn:b["a"]})},"8e42":function(t,e,a){},cd7c:function(t,e,a){},de8e:function(t,e,a){t.exports=a.p+"img/my_pic.347c2efe.jpg"}}]);