/*! For license information please see Box-Box-stories.55def6eb.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkalfabit_design_system=self.webpackChunkalfabit_design_system||[]).push([[556],{"./components/Box/Box.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BoxAlert:()=>BoxAlert,BoxError:()=>BoxError,BoxSuccess:()=>BoxSuccess,Default:()=>Default,Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Atoms/Box",component:__webpack_require__("./components/Box/Box.tsx").Z,argTypes:{children:{type:"string"},type:{type:"string",options:["primary","secondary","dark","success","alert","error"],control:{type:"select"}},rounded:{type:"boolean"},border:{type:"boolean"},filledBackground:{type:"boolean"},className:{type:"string"}}},Primary={args:{}},Default={args:{children:"Este é uma Box Padrão",filledBackground:!0,type:"primary"}},BoxAlert={args:{children:"Este é um alerta!",filledBackground:!0,rounded:!0,type:"alert"}},BoxSuccess={args:{children:"Operação concluída com sucesso!",filledBackground:!0,rounded:!0,type:"success"}},BoxError={args:{children:"Ocorreu um erro durante a operação.",filledBackground:!0,rounded:!0,type:"error"}},__namedExportsOrder=["Primary","Default","BoxAlert","BoxSuccess","BoxError"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Primary.parameters?.docs?.source}}},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: "Este é uma Box Padrão",\n    filledBackground: true,\n    type: "primary"\n  }\n}',...Default.parameters?.docs?.source}}},BoxAlert.parameters={...BoxAlert.parameters,docs:{...BoxAlert.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: "Este é um alerta!",\n    filledBackground: true,\n    rounded: true,\n    type: "alert"\n  }\n}',...BoxAlert.parameters?.docs?.source}}},BoxSuccess.parameters={...BoxSuccess.parameters,docs:{...BoxSuccess.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: "Operação concluída com sucesso!",\n    filledBackground: true,\n    rounded: true,\n    type: "success"\n  }\n}',...BoxSuccess.parameters?.docs?.source}}},BoxError.parameters={...BoxError.parameters,docs:{...BoxError.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: "Ocorreu um erro durante a operação.",\n    filledBackground: true,\n    rounded: true,\n    type: "error"\n  }\n}',...BoxError.parameters?.docs?.source}}}},"./components/Box/Box.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);const boxClassMap={primary:"bg-primary",secondary:"bg-tertiary",dark:"bg-dark",alert:"bg-yellow-100 text-yellow-900",success:"bg-green-100 text-green-900",error:"bg-red-100 text-red-900"},Box=({rounded=!1,border=!1,filledBackground=!1,type="primary",children,className,...rest})=>{const classes=classnames__WEBPACK_IMPORTED_MODULE_1___default()({"rounded-md":rounded,"border border-gray-100":border,"bg-dark":filledBackground,[boxClassMap[type]]:type});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:classes,...rest,children})},__WEBPACK_DEFAULT_EXPORT__=Box;try{Box.displayName="Box",Box.__docgenInfo={description:"",displayName:"Box",props:{rounded:{defaultValue:{value:"false"},description:"",name:"rounded",required:!1,type:{name:"boolean"}},border:{defaultValue:{value:"false"},description:"",name:"border",required:!1,type:{name:"boolean"}},filledBackground:{defaultValue:{value:"false"},description:"",name:"filledBackground",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"primary"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"alert"'},{value:'"success"'},{value:'"error"'},{value:'"primary"'},{value:'"secondary"'},{value:'"dark"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Box/Box.tsx#Box"]={docgenInfo:Box.__docgenInfo,name:"Box",path:"components/Box/Box.tsx#Box"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);