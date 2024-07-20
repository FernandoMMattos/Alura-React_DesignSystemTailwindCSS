/*! For license information please see Divider-Divider-mdx.45c82a70.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkalfabit_design_system=self.webpackChunkalfabit_design_system||[]).push([[650,61],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>MDXProvider,a:()=>useMDXComponents});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./components/Divider/Divider.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/next/dist/compiled/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),C_Users_etclo_OneDrive_Desktop_all_programming_alura_React_Construindo_um_design_system_modulo_2_Eleve_o_nivel_da_sua_documentacao_no_storybook_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_Divider_stories_ts__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/Divider/Divider.stories.ts");function _createMdxContent(props){const _components={h1:"h1",h2:"h2",h3:"h3",p:"p",...(0,C_Users_etclo_OneDrive_Desktop_all_programming_alura_React_Construindo_um_design_system_modulo_2_Eleve_o_nivel_da_sua_documentacao_no_storybook_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__.a)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_Divider_stories_ts__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"divisor",children:"Divisor"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Este é um componente divisor de seções."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"divisor-default",children:"Divisor Default"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Divider_stories_ts__WEBPACK_IMPORTED_MODULE_2__.Default}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"divisor-com-texto",children:"Divisor com Texto"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Divider_stories_ts__WEBPACK_IMPORTED_MODULE_2__.DivisorWithProps}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"divisor-com-espessura",children:"Divisor com Espessura"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Divider_stories_ts__WEBPACK_IMPORTED_MODULE_2__.ThicknessDivisor}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"divisor-com-fundo-claro",children:"Divisor com fundo claro"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Divider_stories_ts__WEBPACK_IMPORTED_MODULE_2__.DivisorDark}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"documentação-interativa",children:"Documentação Interativa"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.sq,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.ZX,{})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,C_Users_etclo_OneDrive_Desktop_all_programming_alura_React_Construindo_um_design_system_modulo_2_Eleve_o_nivel_da_sua_documentacao_no_storybook_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__.a)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext},"./components/Divider/Divider.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,DivisorDark:()=>DivisorDark,DivisorWithProps:()=>DivisorWithProps,Primary:()=>Primary,ThicknessDivisor:()=>ThicknessDivisor,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Divider_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames);const colorClassMap={light:"bg-light",dark:"bg-dark",black:"bg-black"},Divider=({width,height="h-[1px]",children,bgColor="black",...rest})=>{const colorClass=colorClassMap[bgColor],barClass=classnames_default()(children?"w-1/3":"w-1/2",height,colorClass);return(0,jsx_runtime.jsxs)("div",{className:classnames_default()(width,"flex items-center justify-center"),children:[(0,jsx_runtime.jsx)("div",{className:barClass}),children&&(0,jsx_runtime.jsx)("div",{className:"px-3",children}),(0,jsx_runtime.jsx)("div",{className:barClass})]})},Divider_Divider=Divider;try{Divider.displayName="Divider",Divider.__docgenInfo={description:"",displayName:"Divider",props:{width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},height:{defaultValue:{value:"h-[1px]"},description:"",name:"height",required:!1,type:{name:"string"}},bgColor:{defaultValue:{value:"black"},description:"",name:"bgColor",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'},{value:'"black"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Divider/Divider.tsx#Divider"]={docgenInfo:Divider.__docgenInfo,name:"Divider",path:"components/Divider/Divider.tsx#Divider"})}catch(__react_docgen_typescript_loader_error){}const Divider_stories={title:"Atoms/Divider",component:Divider_Divider,argTypes:{children:{type:"string"}}},Primary={args:{}},Default={args:{}},DivisorWithProps={args:{children:"Olá mundo"}},ThicknessDivisor={args:{height:"h-[4px]"}},DivisorDark={args:{bgColor:"dark",height:"h-1"}},__namedExportsOrder=["Primary","Default","DivisorWithProps","ThicknessDivisor","DivisorDark"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Primary.parameters?.docs?.source}}},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Default.parameters?.docs?.source}}},DivisorWithProps.parameters={...DivisorWithProps.parameters,docs:{...DivisorWithProps.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: "Olá mundo"\n  }\n}',...DivisorWithProps.parameters?.docs?.source}}},ThicknessDivisor.parameters={...ThicknessDivisor.parameters,docs:{...ThicknessDivisor.parameters?.docs,source:{originalSource:'{\n  args: {\n    height: "h-[4px]"\n  }\n}',...ThicknessDivisor.parameters?.docs?.source}}},DivisorDark.parameters={...DivisorDark.parameters,docs:{...DivisorDark.parameters?.docs,source:{originalSource:'{\n  args: {\n    bgColor: "dark",\n    height: "h-1"\n  }\n}',...DivisorDark.parameters?.docs?.source}}}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);