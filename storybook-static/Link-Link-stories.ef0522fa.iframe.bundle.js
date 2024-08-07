"use strict";(self.webpackChunkalfabit_design_system=self.webpackChunkalfabit_design_system||[]).push([[0],{"./components/Link/Link.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Disabled:()=>Disabled,Primary:()=>Primary,Violet:()=>Violet,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Link_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");const Link=({children,href,disabled,className,...rest})=>(0,jsx_runtime.jsx)("a",{href:disabled?void 0:href,className:`text-primary aria-disabled:text-disabled ${className}`,"aria-disabled":disabled,...rest,children}),Link_Link=Link;try{Link.displayName="Link",Link.__docgenInfo={description:"",displayName:"Link",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Link/Link.tsx#Link"]={docgenInfo:Link.__docgenInfo,name:"Link",path:"components/Link/Link.tsx#Link"})}catch(__react_docgen_typescript_loader_error){}const Link_stories={title:"Molecules/Link",component:Link_Link,argTypes:{children:{type:"string"},href:{type:"string"},disabled:{type:"boolean"},className:{type:"string"}}},Primary={args:{children:"Link",href:"/"}},Disabled={args:{children:"Link",href:"/",disabled:!0}},Violet={args:{children:"Link",href:"/",className:"theme-violet"}},__namedExportsOrder=["Primary","Disabled","Violet"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: "Link",\n    href: "/"\n  }\n}',...Primary.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: "Link",\n    href: "/",\n    disabled: true\n  }\n}',...Disabled.parameters?.docs?.source}}},Violet.parameters={...Violet.parameters,docs:{...Violet.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: "Link",\n    href: "/",\n    className: "theme-violet"\n  }\n}',...Violet.parameters?.docs?.source}}}}}]);