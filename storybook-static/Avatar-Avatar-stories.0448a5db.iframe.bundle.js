"use strict";(self.webpackChunkalfabit_design_system=self.webpackChunkalfabit_design_system||[]).push([[454],{"./components/Avatar/Avatar.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AvatarImage:()=>Avatar_stories_AvatarImage,AvatarLarge:()=>AvatarLarge,AvatarMedium:()=>AvatarMedium,AvatarSmall:()=>AvatarSmall,Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Avatar_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),UserIcon=__webpack_require__("./node_modules/@heroicons/react/24/outline/esm/UserIcon.js");const Avatar_AvatarIcon=()=>(0,jsx_runtime.jsx)(UserIcon.Z,{className:"absolute w-1/2 h-1/2"});var next_image=__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs");const AvatarImage=({src,altDescription})=>(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(next_image.Z,{src,alt:altDescription,className:"rounded-full",width:100,height:100})}),Avatar_AvatarImage=AvatarImage;try{AvatarImage.displayName="AvatarImage",AvatarImage.__docgenInfo={description:"",displayName:"AvatarImage",props:{src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string"}},altDescription:{defaultValue:null,description:"",name:"altDescription",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Avatar/AvatarImage.tsx#AvatarImage"]={docgenInfo:AvatarImage.__docgenInfo,name:"AvatarImage",path:"components/Avatar/AvatarImage.tsx#AvatarImage"})}catch(__react_docgen_typescript_loader_error){}const avatarSizeMap={xs:"w-5 h-5",sm:"w-6 h-6",md:"w-8 h-8",lg:"w-9 h-9"},Avatar=({size="xs",image,descricao="",className,...rest})=>{const avatarSizeClass=avatarSizeMap[size],avatarComponent=image?(0,jsx_runtime.jsx)(Avatar_AvatarImage,{src:image,altDescription:descricao}):(0,jsx_runtime.jsx)(Avatar_AvatarIcon,{});return(0,jsx_runtime.jsx)("div",{className:classnames_default()("relative rounded-full bg-slate-100 flex items-center justify-center text-slate-400",avatarSizeClass,className),...rest,children:avatarComponent})},Avatar_Avatar=Avatar;try{Avatar.displayName="Avatar",Avatar.__docgenInfo={description:"",displayName:"Avatar",props:{size:{defaultValue:{value:"xs"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"string"}},descricao:{defaultValue:{value:""},description:"",name:"descricao",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Avatar/Avatar.tsx#Avatar"]={docgenInfo:Avatar.__docgenInfo,name:"Avatar",path:"components/Avatar/Avatar.tsx#Avatar"})}catch(__react_docgen_typescript_loader_error){}const Avatar_stories={title:"Atoms/Avatar",component:Avatar_Avatar,argTypes:{className:{type:"string"},size:{type:"string"}}},Primary={args:{}},AvatarSmall={args:{size:"sm"}},AvatarMedium={args:{size:"md"}},AvatarLarge={args:{size:"lg"}},Avatar_stories_AvatarImage={args:{size:"lg",image:"https://placehold.co/400x400.png"}},__namedExportsOrder=["Primary","AvatarSmall","AvatarMedium","AvatarLarge","AvatarImage"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Primary.parameters?.docs?.source}}},AvatarSmall.parameters={...AvatarSmall.parameters,docs:{...AvatarSmall.parameters?.docs,source:{originalSource:'{\n  args: {\n    size: "sm"\n  }\n}',...AvatarSmall.parameters?.docs?.source}}},AvatarMedium.parameters={...AvatarMedium.parameters,docs:{...AvatarMedium.parameters?.docs,source:{originalSource:'{\n  args: {\n    size: "md"\n  }\n}',...AvatarMedium.parameters?.docs?.source}}},AvatarLarge.parameters={...AvatarLarge.parameters,docs:{...AvatarLarge.parameters?.docs,source:{originalSource:'{\n  args: {\n    size: "lg"\n  }\n}',...AvatarLarge.parameters?.docs?.source}}},Avatar_stories_AvatarImage.parameters={...Avatar_stories_AvatarImage.parameters,docs:{...Avatar_stories_AvatarImage.parameters?.docs,source:{originalSource:'{\n  args: {\n    size: "lg",\n    image: "https://placehold.co/400x400.png"\n  }\n}',...Avatar_stories_AvatarImage.parameters?.docs?.source}}}}}]);