"use strict";(self.webpackChunkalfabit_design_system=self.webpackChunkalfabit_design_system||[]).push([[635],{"./components/Typography/Typography.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,TextHeadingH1:()=>TextHeadingH1,TextHeadingH2:()=>TextHeadingH2,TextHeadingH3:()=>TextHeadingH3,TextParagraph:()=>TextParagraph,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Atoms/Typography",component:__webpack_require__("./components/Typography/Typography.tsx").Z,argTypes:{className:{type:"string"}}},Primary={args:{children:"Texto"}},TextHeadingH1={args:{children:"Texto",element:"h1",size:"title1",className:"font-extrabold"}},TextHeadingH2={args:{children:"Texto",element:"h2",size:"title2",className:"font-extrabold"}},TextHeadingH3={args:{children:"Texto",element:"h3",size:"title3",className:"font-extrabold"}},TextParagraph={args:{children:"Texto",element:"p",size:"md",className:"text-primary"}},__namedExportsOrder=["Primary","TextHeadingH1","TextHeadingH2","TextHeadingH3","TextParagraph"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: "Texto"\n  }\n}',...Primary.parameters?.docs?.source}}},TextHeadingH1.parameters={...TextHeadingH1.parameters,docs:{...TextHeadingH1.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: "Texto",\n    element: "h1",\n    size: "title1",\n    className: "font-extrabold"\n  }\n}',...TextHeadingH1.parameters?.docs?.source}}},TextHeadingH2.parameters={...TextHeadingH2.parameters,docs:{...TextHeadingH2.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: "Texto",\n    element: "h2",\n    size: "title2",\n    className: "font-extrabold"\n  }\n}',...TextHeadingH2.parameters?.docs?.source}}},TextHeadingH3.parameters={...TextHeadingH3.parameters,docs:{...TextHeadingH3.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: "Texto",\n    element: "h3",\n    size: "title3",\n    className: "font-extrabold"\n  }\n}',...TextHeadingH3.parameters?.docs?.source}}},TextParagraph.parameters={...TextParagraph.parameters,docs:{...TextParagraph.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: "Texto",\n    element: "p",\n    size: "md",\n    className: "text-primary"\n  }\n}',...TextParagraph.parameters?.docs?.source}}}},"./components/Typography/Typography.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");const textVariants=(0,__webpack_require__("./node_modules/class-variance-authority/dist/index.mjs").j)("text-gray-primary text-sm font-normal",{variants:{variant:{primary:"text-gray-primary",secondary:"text-gray-secondary",tertiary:"text-gray-tertiary"},size:{xs:"text-xs",sm:"text-sm",md:"text-md",xl:"text-xl",title1:"text-txl",title2:"text-tlg",title3:"text-tmd"},defaultVariants:{variant:"primary",size:"md"}}}),Typography=({children,element="p",className,...rest})=>{const Element=element;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Element,{className:`${textVariants(rest)} ${className}`,...rest,children})},__WEBPACK_DEFAULT_EXPORT__=Typography;try{Typography.displayName="Typography",Typography.__docgenInfo={description:"",displayName:"Typography",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'"primary" | "secondary" | "tertiary" | null'}},defaultVariants:{defaultValue:null,description:"",name:"defaultVariants",required:!1,type:{name:'"variant" | "size" | null'}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'"xs" | "sm" | "md" | "xl" | "title1" | "title2" | "title3" | null'}},element:{defaultValue:{value:"p"},description:"",name:"element",required:!1,type:{name:"enum",value:[{value:'"symbol"'},{value:'"object"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"article"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"big"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"button"'},{value:'"canvas"'},{value:'"caption"'},{value:'"center"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"dialog"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"figure"'},{value:'"footer"'},{value:'"form"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"img"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"keygen"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"link"'},{value:'"main"'},{value:'"map"'},{value:'"mark"'},{value:'"menu"'},{value:'"menuitem"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noindex"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"option"'},{value:'"output"'},{value:'"p"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"slot"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"style"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"table"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"time"'},{value:'"title"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'},{value:'"webview"'},{value:'"svg"'},{value:'"animate"'},{value:'"animateMotion"'},{value:'"animateTransform"'},{value:'"circle"'},{value:'"clipPath"'},{value:'"defs"'},{value:'"desc"'},{value:'"ellipse"'},{value:'"feBlend"'},{value:'"feColorMatrix"'},{value:'"feComponentTransfer"'},{value:'"feComposite"'},{value:'"feConvolveMatrix"'},{value:'"feDiffuseLighting"'},{value:'"feDisplacementMap"'},{value:'"feDistantLight"'},{value:'"feDropShadow"'},{value:'"feFlood"'},{value:'"feFuncA"'},{value:'"feFuncB"'},{value:'"feFuncG"'},{value:'"feFuncR"'},{value:'"feGaussianBlur"'},{value:'"feImage"'},{value:'"feMerge"'},{value:'"feMergeNode"'},{value:'"feMorphology"'},{value:'"feOffset"'},{value:'"fePointLight"'},{value:'"feSpecularLighting"'},{value:'"feSpotLight"'},{value:'"feTile"'},{value:'"feTurbulence"'},{value:'"filter"'},{value:'"foreignObject"'},{value:'"g"'},{value:'"image"'},{value:'"line"'},{value:'"linearGradient"'},{value:'"marker"'},{value:'"mask"'},{value:'"metadata"'},{value:'"mpath"'},{value:'"path"'},{value:'"pattern"'},{value:'"polygon"'},{value:'"polyline"'},{value:'"radialGradient"'},{value:'"rect"'},{value:'"stop"'},{value:'"switch"'},{value:'"text"'},{value:'"textPath"'},{value:'"tspan"'},{value:'"use"'},{value:'"view"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Typography/Typography.tsx#Typography"]={docgenInfo:Typography.__docgenInfo,name:"Typography",path:"components/Typography/Typography.tsx#Typography"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/class-variance-authority/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{j:()=>cva});const falsyToString=value=>"boolean"==typeof value?"".concat(value):0===value?"0":value,cx=function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n},cva=(base,config)=>props=>{var ref;if(null==(null==config?void 0:config.variants))return cx(base,null==props?void 0:props.class,null==props?void 0:props.className);const{variants,defaultVariants}=config,getVariantClassNames=Object.keys(variants).map((variant=>{const variantProp=null==props?void 0:props[variant],defaultVariantProp=null==defaultVariants?void 0:defaultVariants[variant];if(null===variantProp)return null;const variantKey=falsyToString(variantProp)||falsyToString(defaultVariantProp);return variants[variant][variantKey]})),propsWithoutUndefined=props&&Object.entries(props).reduce(((acc,param)=>{let[key,value]=param;return void 0===value||(acc[key]=value),acc}),{}),getCompoundVariantClassNames=null==config||null===(ref=config.compoundVariants)||void 0===ref?void 0:ref.reduce(((acc,param1)=>{let{class:cvClass,className:cvClassName,...compoundVariantOptions}=param1;return Object.entries(compoundVariantOptions).every((param=>{let[key,value]=param;return Array.isArray(value)?value.includes({...defaultVariants,...propsWithoutUndefined}[key]):{...defaultVariants,...propsWithoutUndefined}[key]===value}))?[...acc,cvClass,cvClassName]:acc}),[]);return cx(base,getVariantClassNames,getCompoundVariantClassNames,null==props?void 0:props.class,null==props?void 0:props.className)}}}]);