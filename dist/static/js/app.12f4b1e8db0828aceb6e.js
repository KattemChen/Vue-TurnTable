webpackJsonp([1],{Jmt5:function(t,e){},NHnr:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});o("K3J8"),o("Jmt5");var s=o("7+uW"),a=o("woOf"),i=o.n(a),n=o("c/Tr"),r=o.n(n),l=o("mvHQ"),c=o.n(l),u={name:"TurnTable",data:function(){return{isRunning:!1,isMobile:!1,sectorEditMode:!0,showButtons:!0,editAreaOpacity:1,giftsDeg:[],turnStatus:{currentDeg:0,targetDeg:0,rollBackDeg:0},gifts:[],defaultGifts:[{chance:10,text:"RED",textColor:"",textSize:"",backgroundColor:""},{chance:10,text:"BLUE",textColor:"",textSize:"",backgroundColor:""}],currentResult:"",resultList:[],sector:{},defaultSector:{chance:10,text:"",textColor:"",textSize:"",backgroundColor:this.defaultSectorColor},config:{},defaultConfig:{autoStop:!0,runTime:6,rollBackRange:.25,showAlert:!0,baseSize:500,singleColor:"#b0e0e6",doubleColor:"#e4c6d0",borderWidth:1,borderColor:"#ffffff",textColor:"#ffffff",buttonColor:"#f19393",buttonText:"GO"}}},watch:{isRunning:function(t){if(!this.config.autoStop){var e=t?"running":"paused";document.documentElement.style.setProperty("--animitionState",e)}},gifts:function(){this.buideTurnTable()},config:{handler:function(){this.buideTurnTable()},deep:!0},turnStatus:{handler:function(){this.updateturnStatus()},deep:!0}},computed:{showGiftsToTextArea:function(){return c()(this.gifts)},animitionType:function(){return{"turnTable__canvas--manualTrun":!this.config.autoStop,"turnTable__canvas--autoTrun":this.isRunning&&this.config.autoStop}},countDataChance:function(){var t=0;return this.gifts.forEach(function(e){t+=e.chance}),t},defaultSectorColor:function(){return this.getDefaultSectorColor()},pixelRatio:function(){return window.devicePixelRatio||1}},methods:{checkMobile:function(){return/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)},getChance:function(t){return(t/this.countDataChance*100).toFixed(1)+"%"},getDefaultSectorColor:function(t){return(t||this.gifts.length)%2==0?this.config.doubleColor:this.config.singleColor},addGiftData:function(){this.gifts.push(this.sector),this.setDefaultSector()},removeGiftData:function(t){this.gifts.splice(t,1)},getDefaultGfits:function(){return r()(this.defaultGifts)},setGiftsByTextArea:function(t){this.gifts=JSON.parse(t.target.value)},setGiftDataToLocalStorage:function(){var t=c()(this.gifts);localStorage.setItem("turnTableGiftDatas",t)},getGiftDataFromLocalStorage:function(){return JSON.parse(localStorage.getItem("turnTableGiftDatas"))},setDefaultSector:function(){this.sector=i()({},this.defaultSector)},getDefaultConfig:function(){var t=window.innerHeight,e=window.innerWidth;return this.defaultConfig.baseSize=t>e?Math.floor(.8*e):Math.floor(.6*t),i()({},this.defaultConfig)},setConfigToLocalStorage:function(){var t=c()(this.config);localStorage.setItem("turnTableConfig",t)},getConfigFromLocalStorage:function(){return JSON.parse(localStorage.getItem("turnTableConfig"))},drawCanvas:function(){var t=this,e=this.config.baseSize*(this.pixelRatio/2),o=document.querySelector(".turnTable__canvas"),s=o.getContext("2d");o.setAttribute("width",this.config.baseSize*this.pixelRatio),o.setAttribute("height",this.config.baseSize*this.pixelRatio),this.giftsDeg=[];var a=0;this.gifts.forEach(function(o,i){var n=o.chance/t.countDataChance*360,r=n*(Math.PI/180);t.giftsDeg[i]={from:0===i?0:t.giftsDeg[i-1].to,to:0===i?n:t.giftsDeg[i-1].to+n,name:o.text},s.save(),s.beginPath(),s.translate(e,e),s.moveTo(0,0),s.rotate(a),s.arc(0,0,e-t.config.borderWidth,0,r,!1),a+=r,s.fillStyle=o.backgroundColor||t.getDefaultSectorColor(i),s.fill(),s.lineWidth=t.config.borderWidth*t.pixelRatio,s.strokeStyle=t.config.borderColor,s.stroke(),s.rotate(r/2),s.fillStyle=o.textColor||t.config.textColor,s.font=o.textSize?o.textSize+"px Microsoft JhengHei":t.config.baseSize/o.text.length/t.pixelRatio+"px Microsoft JhengHei",s.textBaseline="middle",s.fillText(o.text,e/2.3,0),s.restore()}),this.config.autoStop?o.addEventListener("animationend",this.autoTurnStop):o.removeEventListener("animationend",this.autoTurnStop)},animitionProc:function(){this.config.autoStop?this.autoTurnStart():this.manualTrun()},manualTrun:function(){this.isRunning=!this.isRunning},autoTurnStart:function(){if(!this.isRunning){var t=Math.floor(360*Math.random())+3600,e=Math.random()*this.config.rollBackRange+1;this.turnStatus.rollBackDeg=e<1.01?1:e,this.turnStatus.targetDeg=t,this.isRunning=!0}},autoTurnStop:function(){var t=this;this.isRunning=!1,this.turnStatus.currentDeg=Math.floor(this.turnStatus.targetDeg%360);var e=360-this.turnStatus.currentDeg;this.giftsDeg.forEach(function(o){e>=o.from&&e<=o.to&&(t.resultList.push(o.name),t.currentResult=o.name,setTimeout(function(){t.currentResult=""},3500))})},buideTurnTable:function(){document.documentElement.style.setProperty("--turnTableSize",this.config.baseSize+20+"px"),document.documentElement.style.setProperty("--buttonSize",this.config.baseSize/3.5+"px"),document.documentElement.style.setProperty("--buttonFontSize",this.config.baseSize/10+"px"),document.documentElement.style.setProperty("--arrowHeight",this.config.baseSize/7+"px"),document.documentElement.style.setProperty("--arrowWidth",this.config.baseSize/5+"px"),document.documentElement.style.setProperty("--buttonColor",""+this.config.buttonColor),document.documentElement.style.setProperty("--runTime",this.config.runTime+"s"),document.documentElement.style.setProperty("--animitionState","paused"),this.resultList=[],this.drawCanvas()},updateturnStatus:function(){document.documentElement.style.setProperty("--targetDeg",this.turnStatus.targetDeg+"deg"),document.documentElement.style.setProperty("--currentDeg",this.turnStatus.currentDeg+"deg"),document.documentElement.style.setProperty("--rollBackDeg",""+this.turnStatus.rollBackDeg)}},beforeMount:function(){this.isMobile=this.checkMobile(),this.setDefaultSector(),this.config=this.getConfigFromLocalStorage()||this.getDefaultConfig(),this.gifts=this.getGiftDataFromLocalStorage()||this.getDefaultGfits()},mounted:function(){var t=this;this.buideTurnTable(),document.addEventListener("keypress",function(e){32===e.keyCode&&t.animitionProc()})}},m={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[t.config.showAlert?o("div",{staticClass:"alert alert-info text-center mx-auto w-75 mt-5 fade",class:{"alert--show":t.currentResult}},[t._v(t._s(t.currentResult))]):t._e(),o("div",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],staticClass:"turnTable"},[o("div",{staticClass:"turnTable__body"},[o("canvas",{staticClass:"turnTable__canvas",class:t.animitionType,style:{width:t.config.baseSize+"px",height:t.config.baseSize+"px"}})]),o("div",{staticClass:"turnTable__button",on:{click:t.animitionProc}},[o("div",{staticClass:"turnTable__arrow"}),o("div",{staticClass:"turnTable__button__content"},[o("span",{staticClass:"turnTable__button__text"},[t._v(t._s(t.config.buttonText))])])])]),o("div",{staticClass:"buttonArea"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.showButtons,expression:"showButtons"}],staticClass:"mr-2",attrs:{id:"showButtons",type:"checkbox"},domProps:{checked:!t.showButtons,checked:Array.isArray(t.showButtons)?t._i(t.showButtons,null)>-1:t.showButtons},on:{change:function(e){var o=t.showButtons,s=e.target,a=!!s.checked;if(Array.isArray(o)){var i=t._i(o,null);s.checked?i<0&&(t.showButtons=o.concat([null])):i>-1&&(t.showButtons=o.slice(0,i).concat(o.slice(i+1)))}else t.showButtons=a}}}),o("label",{staticClass:"text-sm-right",attrs:{for:"showButtons"}},[t._v("顯示設定")]),o("br"),o("div",{directives:[{name:"show",rawName:"v-show",value:t.showButtons,expression:"showButtons"}],staticClass:"buttons"},[t.config.autoStop?o("button",{staticClass:"btn btn-outline-danger mr-4",attrs:{"data-toggle":"modal","data-target":"#resultList"}},[t._v("轉出結果")]):t._e(),o("button",{staticClass:"btn btn-outline-info mr-4",attrs:{"data-toggle":"modal","data-target":"#sector"}},[t._v("區塊編輯")]),o("button",{staticClass:"btn btn-outline-warning",attrs:{"data-toggle":"modal","data-target":"#config"}},[t._v("轉盤設定")])])]),t.config.autoStop?o("div",{staticClass:"modal fade",attrs:{id:"resultList"}},[o("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[o("div",{staticClass:"modal-content"},[t._m(0),o("div",{staticClass:"modal-body"},[o("div",{staticClass:"table-responsive"},[o("table",{staticClass:"table table-bordered table-sm"},[t._m(1),o("tbody",{staticClass:"text-center"},t._l(t.resultList,function(e,s){return o("tr",[o("td",{staticClass:"text-center"},[t._v(t._s(s+1))]),o("td",{staticClass:"text-center"},[t._v(t._s(e))])])}))])])]),o("div",{staticClass:"modal-footer"},[o("button",{staticClass:"btn btn-sm btn-outline-secondary ml-2 px-3",on:{click:function(e){e.preventDefault(),t.resultList=[]}}},[t._v("清空資訊")]),o("button",{staticClass:"btn btn-sm btn-secondary ml-2 px-3",attrs:{"data-dismiss":"modal"}},[t._v("關閉")])])])])]):t._e(),o("div",{staticClass:"modal fade",style:{opacity:t.editAreaOpacity},attrs:{id:"sector"}},[o("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[o("div",{staticClass:"modal-content"},[o("div",{staticClass:"modal-header"},[o("h5",{staticClass:"modal-title"},[t._v("區塊編輯")]),o("label",{staticClass:"text-sm ml-3"},[t._v("| 背景透明度:")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.editAreaOpacity,expression:"editAreaOpacity"}],attrs:{type:"range",min:"0.1",max:"1",step:"0.1"},domProps:{value:t.editAreaOpacity},on:{__r:function(e){t.editAreaOpacity=e.target.value}}}),t._m(2)]),o("div",{staticClass:"modal-body"},[o("form",{staticClass:"form-inline",on:{submit:function(e){e.preventDefault(),t.addGiftData(e)}}},[o("div",{staticClass:"form-group w-100 mb-2"},[o("label",{staticClass:"mr-2"},[t._v("編輯模式:")]),o("div",{staticClass:"form-check ml-4 ml-sm-0 mr-sm-2"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.sectorEditMode,expression:"sectorEditMode"}],staticClass:"form-check-input",attrs:{id:"editBySet",type:"radio",name:"editMode",checked:"checked"},domProps:{value:!0,checked:t._q(t.sectorEditMode,!0)},on:{change:function(e){t.sectorEditMode=!0}}}),o("label",{attrs:{for:"editBySet"}},[t._v("單塊新增")])]),o("div",{staticClass:"form-check ml-4 ml-sm-0"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.sectorEditMode,expression:"sectorEditMode"}],staticClass:"form-check-input",attrs:{id:"editByData",type:"radio",name:"editMode"},domProps:{value:!1,checked:t._q(t.sectorEditMode,!1)},on:{change:function(e){t.sectorEditMode=!1}}}),o("label",{attrs:{for:"editByData"}},[t._v("資料編輯(Array-Object)")])])]),t.sectorEditMode?o("div",{staticClass:"editBySet w-100"},[o("div",{staticClass:"form-group w-100 mb-2"},[o("label",{staticClass:"mr-2"},[t._v("背景顏色:")]),t.isMobile?t._e():o("input",{directives:[{name:"model",rawName:"v-model",value:t.sector.backgroundColor,expression:"sector.backgroundColor"}],staticClass:"mr-2",attrs:{type:"color"},domProps:{value:t.sector.backgroundColor},on:{input:function(e){e.target.composing||t.$set(t.sector,"backgroundColor",e.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:t.sector.backgroundColor,expression:"sector.backgroundColor"}],staticClass:"form-control form-control-sm",attrs:{type:"text",placeholder:t.getDefaultSectorColor()},domProps:{value:t.sector.backgroundColor},on:{input:function(e){e.target.composing||t.$set(t.sector,"backgroundColor",e.target.value)}}})]),o("div",{staticClass:"form-group w-100 mb-2"},[o("label",{staticClass:"mr-2"},[t._v("文字顏色:")]),t.isMobile?t._e():o("input",{directives:[{name:"model",rawName:"v-model",value:t.sector.textColor,expression:"sector.textColor"}],staticClass:"mr-2",attrs:{type:"color"},domProps:{value:t.sector.textColor},on:{input:function(e){e.target.composing||t.$set(t.sector,"textColor",e.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:t.sector.textColor,expression:"sector.textColor"}],staticClass:"form-control form-control-sm",attrs:{type:"text",placeholder:t.config.textColor},domProps:{value:t.sector.textColor},on:{input:function(e){e.target.composing||t.$set(t.sector,"textColor",e.target.value)}}})]),o("div",{staticClass:"form-group w-100 mb-2"},[o("label",{staticClass:"mr-2"},[t._v("文字尺寸:")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.sector.textSize,expression:"sector.textSize"}],staticClass:"form-control form-control-sm",attrs:{type:"number",min:"10",placeholder:"請輸入文字尺寸"},domProps:{value:t.sector.textSize},on:{input:function(e){e.target.composing||t.$set(t.sector,"textSize",e.target.value)}}})]),o("div",{staticClass:"form-group w-100 mb-2"},[o("label",{staticClass:"mr-2"},[t._v("文字內容:")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.sector.text,expression:"sector.text"}],staticClass:"form-control form-control-sm",attrs:{type:"text",placeholder:"請輸入文字內容"},domProps:{value:t.sector.text},on:{input:function(e){e.target.composing||t.$set(t.sector,"text",e.target.value)}}})]),o("div",{staticClass:"form-group w-100 mb-2"},[o("label",{staticClass:"mr-2"},[t._v("出現機率:")]),o("input",{directives:[{name:"model",rawName:"v-model.number",value:t.sector.chance,expression:"sector.chance",modifiers:{number:!0}}],staticClass:"form-control form-control-sm",attrs:{type:"number",min:"1",step:"0.1"},domProps:{value:t.sector.chance},on:{input:function(e){e.target.composing||t.$set(t.sector,"chance",t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})]),t._m(3)]):o("div",{staticClass:"editByDate w-100 my-2"},[o("textarea",{staticClass:"form-control form-control-sm w-100",domProps:{value:t.showGiftsToTextArea},on:{input:t.setGiftsByTextArea}})]),o("div",{staticClass:"table-responsive"},[o("table",{staticClass:"table table-bordered table-sm mt-3"},[t._m(4),o("tbody",{staticClass:"text-center"},t._l(t.gifts,function(e,s){return o("tr",[o("td",[t._v(t._s(t.getChance(e.chance)))]),o("td",{style:{"background-color":e.backgroundColor||t.getDefaultSectorColor(s)}},[t._v(t._s(e.backgroundColor||t.getDefaultSectorColor(s)))]),o("td",{style:{"background-color":e.textColor||t.config.textColor}},[t._v(t._s(e.textColor||t.config.textColor))]),o("td",[t._v(t._s(e.text))]),o("td",[o("button",{staticClass:"btn btn-sm btn-outline-danger",on:{click:function(e){e.preventDefault(),t.removeGiftData(s)}}},[t._v("移除")])])])}))])])])]),o("div",{staticClass:"modal-footer"},[o("button",{staticClass:"btn btn-sm btn-outline-success",on:{click:function(e){e.preventDefault(),t.setGiftDataToLocalStorage(e)}}},[t._v("儲存設定")]),o("button",{staticClass:"btn btn-sm btn-outline-secondary ml-2 px-3",on:{click:function(e){e.preventDefault(),t.gifts=t.getDefaultGfits()}}},[t._v("清空重設")]),o("button",{staticClass:"btn btn-sm btn-secondary ml-2 px-3",attrs:{"data-dismiss":"modal"}},[t._v("關閉")])])])])]),o("div",{staticClass:"modal fade",style:{opacity:t.editAreaOpacity},attrs:{id:"config"}},[o("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[o("div",{staticClass:"modal-content"},[o("div",{staticClass:"modal-header"},[o("h5",{staticClass:"modal-title"},[t._v("轉盤設定")]),o("label",{staticClass:"text-sm ml-3"},[t._v("| 背景透明度:")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.editAreaOpacity,expression:"editAreaOpacity"}],attrs:{type:"range",min:"0.1",max:"1",step:"0.1"},domProps:{value:t.editAreaOpacity},on:{__r:function(e){t.editAreaOpacity=e.target.value}}}),t._m(5)]),o("div",{staticClass:"modal-body"},[o("form",{staticClass:"form-inline",on:{submit:function(t){t.preventDefault()}}},[o("div",{staticClass:"form-group w-100 mb-2"},[o("label",{staticClass:"mr-2"},[t._v("停止模式:")]),o("div",{staticClass:"form-check ml-4 ml-sm-0 mr-sm-2"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.config.autoStop,expression:"config.autoStop"}],staticClass:"form-check-input",attrs:{id:"autoStopTrue",type:"radio",name:"autoStop",checked:"checked"},domProps:{value:!0,checked:t._q(t.config.autoStop,!0)},on:{change:function(e){t.$set(t.config,"autoStop",!0)}}}),o("label",{attrs:{for:"autoStopTrue"}},[t._v("自動")])]),o("div",{staticClass:"form-check ml-4 ml-sm-0"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.config.autoStop,expression:"config.autoStop"}],staticClass:"form-check-input",attrs:{id:"autoStopFalse",type:"radio",name:"autoStop"},domProps:{value:!1,checked:t._q(t.config.autoStop,!1)},on:{change:function(e){t.$set(t.config,"autoStop",!1)}}}),o("label",{attrs:{for:"autoStopFalse"}},[t._v("手動")])])]),t.config.autoStop?o("div",{staticClass:"form-group w-100 mb-2"},[o("label",{staticClass:"mr-2"},[t._v("轉出資訊:")]),o("div",{staticClass:"form-check ml-4 ml-sm-0 mr-sm-2"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.config.showAlert,expression:"config.showAlert"}],staticClass:"form-check-input",attrs:{id:"showAlertTrue",type:"radio",name:"showAlert",checked:"checked"},domProps:{value:!0,checked:t._q(t.config.showAlert,!0)},on:{change:function(e){t.$set(t.config,"showAlert",!0)}}}),o("label",{attrs:{for:"showAlertTrue"}},[t._v("顯示")])]),o("div",{staticClass:"form-check ml-4 ml-sm-0"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.config.showAlert,expression:"config.showAlert"}],staticClass:"form-check-input",attrs:{id:"showAlertFalse",type:"radio",name:"showAlert"},domProps:{value:!1,checked:t._q(t.config.showAlert,!1)},on:{change:function(e){t.$set(t.config,"showAlert",!1)}}}),o("label",{attrs:{for:"showAlertFalse"}},[t._v("關閉")])])]):t._e(),o("div",{staticClass:"form-group w-100 mb-2"},[o("label",{staticClass:"mr-2"},[t._v(t._s(t.config.autoStop?"動畫時間長度(s):":"轉10圈的轉速(s):"))]),o("input",{directives:[{name:"model",rawName:"v-model.number",value:t.config.runTime,expression:"config.runTime",modifiers:{number:!0}}],staticClass:"form-control form-control-sm",attrs:{type:"number",min:"1",step:"1"},domProps:{value:t.config.runTime},on:{input:function(e){e.target.composing||t.$set(t.config,"runTime",t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})]),o("div",{staticClass:"form-group w-100 mb-2"},[o("label",{staticClass:"mr-2"},[t._v("轉盤尺寸設定(px):")]),o("input",{directives:[{name:"model",rawName:"v-model.number",value:t.config.baseSize,expression:"config.baseSize",modifiers:{number:!0}}],staticClass:"form-control form-control-sm",attrs:{type:"number",step:"1",min:"150"},domProps:{value:t.config.baseSize},on:{input:function(e){e.target.composing||t.$set(t.config,"baseSize",t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})]),t.config.autoStop?o("div",{staticClass:"form-group w-100 mb-2"},[o("label",{staticClass:"mr-2"},[t._v("回彈角度設定(百分比）:")]),o("input",{directives:[{name:"model",rawName:"v-model.number",value:t.config.rollBackRange,expression:"config.rollBackRange",modifiers:{number:!0}}],staticClass:"form-control form-control-sm",attrs:{type:"number",step:"0.01",min:"0.1",max:"1",readonly:!t.config.autoStop},domProps:{value:t.config.rollBackRange},on:{input:function(e){e.target.composing||t.$set(t.config,"rollBackRange",t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})]):t._e(),o("div",{staticClass:"form-group w-100 mb-2"},[o("label",{staticClass:"mr-2"},[t._v("區塊預設色(單數):")]),t.isMobile?t._e():o("input",{directives:[{name:"model",rawName:"v-model",value:t.config.singleColor,expression:"config.singleColor"}],staticClass:"mr-2",attrs:{type:"color"},domProps:{value:t.config.singleColor},on:{input:function(e){e.target.composing||t.$set(t.config,"singleColor",e.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:t.config.singleColor,expression:"config.singleColor"}],staticClass:"form-control form-control-sm",attrs:{type:"text"},domProps:{value:t.config.singleColor},on:{input:function(e){e.target.composing||t.$set(t.config,"singleColor",e.target.value)}}})]),o("div",{staticClass:"form-group w-100 mb-2"},[o("label",{staticClass:"mr-2"},[t._v("區塊預設色(雙數):")]),t.isMobile?t._e():o("input",{directives:[{name:"model",rawName:"v-model",value:t.config.doubleColor,expression:"config.doubleColor"}],staticClass:"mr-2",attrs:{type:"color"},domProps:{value:t.config.doubleColor},on:{input:function(e){e.target.composing||t.$set(t.config,"doubleColor",e.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:t.config.doubleColor,expression:"config.doubleColor"}],staticClass:"form-control form-control-sm",attrs:{type:"text"},domProps:{value:t.config.doubleColor},on:{input:function(e){e.target.composing||t.$set(t.config,"doubleColor",e.target.value)}}})]),o("div",{staticClass:"form-group w-100 mb-2"},[o("label",{staticClass:"mr-2"},[t._v("區塊邊框寬度")]),o("input",{directives:[{name:"model",rawName:"v-model.number",value:t.config.borderWidth,expression:"config.borderWidth",modifiers:{number:!0}}],staticClass:"form-control form-control-sm",attrs:{type:"number",min:"1",step:"1"},domProps:{value:t.config.borderWidth},on:{input:function(e){e.target.composing||t.$set(t.config,"borderWidth",t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})]),o("div",{staticClass:"form-group w-100 mb-2"},[o("label",{staticClass:"mr-2"},[t._v("按鈕顏色:")]),t.isMobile?t._e():o("input",{directives:[{name:"model",rawName:"v-model",value:t.config.buttonColor,expression:"config.buttonColor"}],staticClass:"mr-2",attrs:{type:"color"},domProps:{value:t.config.buttonColor},on:{input:function(e){e.target.composing||t.$set(t.config,"buttonColor",e.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:t.config.buttonColor,expression:"config.buttonColor"}],staticClass:"form-control form-control-sm",attrs:{type:"text"},domProps:{value:t.config.buttonColor},on:{input:function(e){e.target.composing||t.$set(t.config,"buttonColor",e.target.value)}}})]),o("div",{staticClass:"form-group w-100 mb-2"},[o("label",{staticClass:"mr-2"},[t._v("按鈕文字:")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.config.buttonText,expression:"config.buttonText"}],staticClass:"form-control form-control-sm",attrs:{type:"text"},domProps:{value:t.config.buttonText},on:{input:function(e){e.target.composing||t.$set(t.config,"buttonText",e.target.value)}}})])])]),o("div",{staticClass:"modal-footer"},[o("button",{staticClass:"btn btn-sm btn-outline-success",on:{click:function(e){e.preventDefault(),t.setConfigToLocalStorage(e)}}},[t._v("儲存設定")]),o("button",{staticClass:"btn btn-sm btn-outline-secondary ml-2 px-3",on:{click:function(e){e.preventDefault(),t.config=t.getDefaultConfig()}}},[t._v("重新設定")]),o("button",{staticClass:"btn btn-sm btn-secondary ml-2 px-3",attrs:{"data-dismiss":"modal"}},[t._v("關閉")])])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title"},[this._v("轉出結果")]),e("button",{staticClass:"close",attrs:{"data-dismiss":"modal"}},[e("span",[this._v("×")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",{staticClass:"text-center"},[e("tr",[e("th",{staticClass:"text-center",attrs:{scope:"col"}},[this._v("No")]),e("th",{staticClass:"text-center",attrs:{scope:"col"}},[this._v("內容")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"close",attrs:{"data-dismiss":"modal"}},[e("span",[this._v("×")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-group w-100 mb-2"},[e("button",{staticClass:"btn btn-sm btn-success px-5",attrs:{type:"submit"}},[this._v("新增")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",{staticClass:"text-center"},[e("tr",[e("th",{attrs:{scope:"col"}},[this._v("區塊占比")]),e("th",{attrs:{scope:"col"}},[this._v("背景顏色")]),e("th",{attrs:{scope:"col"}},[this._v("文字顏色")]),e("th",{attrs:{scope:"col"}},[this._v("文字內容")]),e("th",{attrs:{scope:"col"}},[this._v("移除")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"close",attrs:{"data-dismiss":"modal"}},[e("span",[this._v("×")])])}]};var d={name:"app",components:{TurnTable:o("VU/8")(u,m,!1,function(t){o("qQ5Q")},null,null).exports}},f={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("TurnTable")],1)},staticRenderFns:[]},g=o("VU/8")(d,f,!1,null,null,null).exports;s.a.config.productionTip=!1,new s.a({el:"#app",template:"<App/>",components:{App:g}})},qQ5Q:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.12f4b1e8db0828aceb6e.js.map