webpackJsonp([1],{Jmt5:function(t,e){},NHnr:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});o("K3J8"),o("Jmt5");var a=o("7+uW"),i=o("woOf"),s=o.n(i),n=o("c/Tr"),r=o.n(n),l=o("mvHQ"),c=o.n(l),u=o("DAYN"),d={name:"TurnTable",components:{draggable:o.n(u).a},data:function(){return{isRunning:!1,isMobile:!1,giftEditMode:!0,showButtons:!0,editAreaOpacity:1,turnStatus:{currentDeg:0,targetDeg:0,rollBackDeg:0},giftDegs:[],currentResult:"",resultList:[],dataList:[],dataNo:0,dataName:"預設",gift:{},defaultGift:{chance:10,text:"",textColor:"",textSize:this.defaultGiftTextSize,backgroundColor:this.defaultGiftBackgroundColor,edit:!0},gifts:[],defaultGifts:[{chance:10,text:"RED",textColor:"",textSize:"",backgroundColor:"",edit:!1},{chance:10,text:"BLUE",textColor:"",textSize:"",backgroundColor:"",edit:!1}],config:{},defaultConfig:{autoStop:!0,runTime:6,rollBackRange:.25,showAlert:!0,baseSize:500,singleColor:"#b0e0e6",doubleColor:"#e4c6d0",borderWidth:1,borderColor:"#ffffff",textColor:"#ffffff",buttonColor:"#f19393",buttonText:"GO"}}},watch:{isRunning:function(t){if(!this.config.autoStop){var e=t?"running":"paused";document.documentElement.style.setProperty("--animitionState",e)}},gifts:{handler:function(){this.buideTurnTable()},deep:!0},config:{handler:function(){this.buideTurnTable()},deep:!0},turnStatus:{handler:function(){this.updateturnStatus()},deep:!0}},computed:{showGiftsToTextArea:function(){return c()(this.gifts)},animitionType:function(){return{"turnTable__canvas--manualTrun":!this.config.autoStop,"turnTable__canvas--autoTrun":this.isRunning&&this.config.autoStop}},countDataChance:function(){var t=0;return this.gifts.forEach(function(e){t+=e.chance}),t},defaultGiftBackgroundColor:function(){return this.getDefaultGiftBackgroundColor()},pixelRatio:function(){return 2*window.devicePixelRatio||2}},methods:{checkMobile:function(){return/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)},getChance:function(t){return(t/this.countDataChance*100).toFixed(1)+"%"},getDefaultGiftBackgroundColor:function(t){return(t||this.gifts.length)%2==0?this.config.doubleColor:this.config.singleColor},newData:function(){this.dataName="未命名",this.dataNo=this.dataList.length,this.setDefaultDatas()},saveData:function(){var t={dataName:this.dataName,gifts:r()(this.gifts),config:s()({},this.config)};this.$set(this.dataList,this.dataNo,t),this.setDataListToLocalStorage()},loadData:function(t){this.dataNo=t,this.dataName=this.dataList[t].dataName,this.gifts=this.dataList[t].gifts,this.config=this.dataList[t].config},deleteData:function(t){confirm("確定刪除這個設定檔嗎？")&&(this.dataList.splice(t,1),this.loadData(0))},setDefaultDatas:function(){this.gifts=this.getDefaultGfits(),this.config=this.getDefaultConfig()},setDataListToLocalStorage:function(){var t=c()(this.dataList);localStorage.setItem("turnTableDataList",t)},getDataListFromLocalStorage:function(){return JSON.parse(localStorage.getItem("turnTableDataList"))},editGiftData:function(t){var e=this.gifts[t];e.clone=s()({},e),e.edit=!0},saveGiftData:function(t){this.gifts[t].edit=!1},cancleGiftData:function(t){var e=this.gifts[t];delete(e=s()(e,e.clone)).clone,e.edit=!1},removeGiftData:function(t){this.gifts.splice(t,1)},addGiftData:function(){this.gifts.push(this.gift),this.setDefaultGift()},getDefaultGfits:function(){return r()(this.defaultGifts)},setGiftsByTextArea:function(t){this.gifts=JSON.parse(t.target.value)},setDefaultGift:function(){this.gift=s()({},this.defaultGift)},getDefaultConfig:function(){var t=window.innerHeight,e=window.innerWidth;return this.defaultConfig.baseSize=t>e?Math.floor(.8*e):Math.floor(.6*t),s()({},this.defaultConfig)},setConfigToLocalStorage:function(){var t=c()(this.config);localStorage.setItem("turnTableConfig",t)},drawCanvas:function(){var t=this,e=this.config.baseSize*(this.pixelRatio/2),o=document.querySelector(".turnTable__canvas"),a=o.getContext("2d");o.setAttribute("width",this.config.baseSize*this.pixelRatio),o.setAttribute("height",this.config.baseSize*this.pixelRatio),this.giftDegs=[];var i=0;this.gifts.forEach(function(o,s){var n=o.chance/t.countDataChance*360,r=n*(Math.PI/180);t.giftDegs[s]={from:0===s?0:t.giftDegs[s-1].to,to:0===s?n:t.giftDegs[s-1].to+n,name:o.text},a.save(),a.beginPath(),a.translate(e,e),a.moveTo(0,0),a.rotate(i),a.arc(0,0,e-t.config.borderWidth,0,r,!1),i+=r,a.fillStyle=o.backgroundColor||t.getDefaultGiftBackgroundColor(s),a.fill(),a.lineWidth=t.config.borderWidth*t.pixelRatio,a.strokeStyle=t.config.borderColor,a.stroke(),a.rotate(r/2),a.fillStyle=o.textColor||t.config.textColor,a.font=o.textSize?o.textSize+"px Microsoft JhengHei":t.config.baseSize/o.text.length*(t.pixelRatio/4)+"px Microsoft JhengHei",a.textBaseline="middle",a.fillText(o.text,e/2.25,0),a.restore()}),this.config.autoStop?o.addEventListener("animationend",this.autoTurnStop):o.removeEventListener("animationend",this.autoTurnStop)},animitionProc:function(){this.config.autoStop?this.autoTurnStart():this.manualTrun()},manualTrun:function(){this.isRunning=!this.isRunning},autoTurnStart:function(){if(!this.isRunning){var t=Math.floor(360*Math.random())+3600,e=Math.random()*this.config.rollBackRange+1;this.turnStatus.rollBackDeg=e<1.01?1:e,this.turnStatus.targetDeg=t,this.isRunning=!0}},autoTurnStop:function(){var t=this;this.isRunning=!1,this.turnStatus.currentDeg=Math.floor(this.turnStatus.targetDeg%360);var e=360-this.turnStatus.currentDeg;this.giftDegs.forEach(function(o){e>=o.from&&e<=o.to&&(t.resultList.push(o.name),t.currentResult=o.name,setTimeout(function(){t.currentResult=""},3500))})},buideTurnTable:function(){document.documentElement.style.setProperty("--turnTableSize",this.config.baseSize+20+"px"),document.documentElement.style.setProperty("--buttonSize",this.config.baseSize/3.5+"px"),document.documentElement.style.setProperty("--buttonFontSize",this.config.baseSize/10+"px"),document.documentElement.style.setProperty("--arrowHeight",this.config.baseSize/7+"px"),document.documentElement.style.setProperty("--arrowWidth",this.config.baseSize/5+"px"),document.documentElement.style.setProperty("--buttonColor",""+this.config.buttonColor),document.documentElement.style.setProperty("--runTime",this.config.runTime+"s"),document.documentElement.style.setProperty("--animitionState","paused"),this.resultList=[],this.drawCanvas()},updateturnStatus:function(){document.documentElement.style.setProperty("--targetDeg",this.turnStatus.targetDeg+"deg"),document.documentElement.style.setProperty("--currentDeg",this.turnStatus.currentDeg+"deg"),document.documentElement.style.setProperty("--rollBackDeg",""+this.turnStatus.rollBackDeg)}},beforeMount:function(){this.isMobile=this.checkMobile(),this.setDefaultGift(),this.dataList=this.getDataListFromLocalStorage()||[],this.dataName=this.dataList[0]?this.dataList[0].dataName:this.dataName,this.config=this.dataList[0]?this.dataList[0].config:this.getDefaultConfig(),this.gifts=this.dataList[0]?this.dataList[0].gifts:this.getDefaultGfits()},mounted:function(){var t=this;this.buideTurnTable(),document.addEventListener("keypress",function(e){32===e.keyCode&&t.animitionProc()})}},m={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[t.config.showAlert?o("div",{staticClass:"alert alert-info text-center mx-auto w-75 mt-5 fade",class:{"alert--show":t.currentResult}},[t._v(t._s(t.currentResult))]):t._e(),o("div",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],staticClass:"turnTable"},[o("div",{staticClass:"turnTable__body"},[o("canvas",{staticClass:"turnTable__canvas",class:t.animitionType,style:{width:t.config.baseSize+"px",height:t.config.baseSize+"px"}})]),o("div",{staticClass:"turnTable__button",on:{click:t.animitionProc}},[o("div",{staticClass:"turnTable__arrow"}),o("div",{staticClass:"turnTable__button__content"},[o("span",{staticClass:"turnTable__button__text"},[t._v(t._s(t.config.buttonText))])])])]),o("div",{staticClass:"buttonArea"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.showButtons,expression:"showButtons"}],staticClass:"mx-1",attrs:{id:"showButtons",type:"checkbox"},domProps:{checked:!t.showButtons,checked:Array.isArray(t.showButtons)?t._i(t.showButtons,null)>-1:t.showButtons},on:{change:function(e){var o=t.showButtons,a=e.target,i=!!a.checked;if(Array.isArray(o)){var s=t._i(o,null);a.checked?s<0&&(t.showButtons=o.concat([null])):s>-1&&(t.showButtons=o.slice(0,s).concat(o.slice(s+1)))}else t.showButtons=i}}}),o("label",{staticClass:"text-sm-right",attrs:{for:"showButtons"}},[t._v("顯示設定")]),o("br"),o("div",{directives:[{name:"show",rawName:"v-show",value:t.showButtons,expression:"showButtons"}],staticClass:"buttons"},[t.config.autoStop?o("button",{staticClass:"btn btn-outline-danger mr-4",attrs:{"data-toggle":"modal","data-target":"#resultList"}},[t._v("轉出結果")]):t._e(),o("button",{staticClass:"btn btn-outline-info",attrs:{"data-toggle":"modal","data-target":"#dataSetting"}},[t._v("轉盤設定")])])]),t.config.autoStop?o("div",{staticClass:"modal fade",attrs:{id:"resultList"}},[o("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[o("div",{staticClass:"modal-content"},[t._m(0),o("div",{staticClass:"modal-body"},[o("div",{staticClass:"table-responsive"},[o("table",{staticClass:"table table-bordered table-sm"},[t._m(1),o("tbody",{staticClass:"text-center"},t._l(t.resultList,function(e,a){return o("tr",[o("td",{staticClass:"text-center"},[t._v(t._s(a+1))]),o("td",{staticClass:"text-center"},[t._v(t._s(e))])])}))])])]),o("div",{staticClass:"modal-footer"},[o("button",{staticClass:"btn btn-sm btn-outline-secondary ml-2 px-3",on:{click:function(e){e.preventDefault(),t.resultList=[]}}},[t._v("清空資訊")]),o("button",{staticClass:"btn btn-sm btn-secondary ml-2 px-3",attrs:{"data-dismiss":"modal"}},[t._v("關閉      ")])])])])]):t._e(),o("div",{staticClass:"modal fade",style:{opacity:t.editAreaOpacity},attrs:{id:"dataSetting"}},[o("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[o("div",{staticClass:"modal-content"},[o("div",{staticClass:"modal-header"},[o("h5",{staticClass:"modal-title"},[t._v("轉盤資訊設定")]),o("label",{staticClass:"text-sm ml-3"},[t._v("| 背景透明度:")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.editAreaOpacity,expression:"editAreaOpacity"}],attrs:{type:"range",min:"0.1",max:"1",step:"0.1"},domProps:{value:t.editAreaOpacity},on:{__r:function(e){t.editAreaOpacity=e.target.value}}}),t._m(2)]),o("div",{staticClass:"modal-body"},[t._m(3),o("div",{staticClass:"tab-content"},[o("div",{staticClass:"tab-pane fade show active py-3 px-1",attrs:{id:"edit-data",role:"tabpanel"}},[o("form",{staticClass:"form-inline",on:{submit:function(t){t.preventDefault()}}},[o("div",{staticClass:"form-group w-100 mb-2"},[o("label",{staticClass:"mr-2"},[t._v("編輯模式:")]),o("div",{staticClass:"form-check ml-4 ml-sm-0 mr-sm-2"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.giftEditMode,expression:"giftEditMode"}],staticClass:"form-check-input",attrs:{id:"editBySet",type:"radio",name:"editMode",checked:"checked"},domProps:{value:!0,checked:t._q(t.giftEditMode,!0)},on:{change:function(e){t.giftEditMode=!0}}}),o("label",{attrs:{for:"editBySet"}},[t._v("單塊新增")])]),o("div",{staticClass:"form-check ml-4 ml-sm-0"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.giftEditMode,expression:"giftEditMode"}],staticClass:"form-check-input",attrs:{id:"editByData",type:"radio",name:"editMode"},domProps:{value:!1,checked:t._q(t.giftEditMode,!1)},on:{change:function(e){t.giftEditMode=!1}}}),o("label",{attrs:{for:"editByData"}},[t._v("資料編輯(Array-Object)")])])]),t.giftEditMode?o("div",{staticClass:"editBySet w-100"},[o("div",{staticClass:"table-responsive"},[o("table",{staticClass:"table table-bordered table-hover table-sm mt-1"},[t._m(4),o("draggable",{staticClass:"dragArea",attrs:{list:t.gifts,element:"tbody"}},t._l(t.gifts,function(e,a){return o("tr",[o("td",[o("div",{staticClass:"input-group justify-content-center"},[o("span",{directives:[{name:"show",rawName:"v-show",value:!e.edit,expression:"!gift.edit"}]},[t._v(t._s(t.getChance(e.chance)))]),o("input",{directives:[{name:"show",rawName:"v-show",value:e.edit,expression:"gift.edit"},{name:"model",rawName:"v-model.number",value:e.chance,expression:"gift.chance",modifiers:{number:!0}}],staticClass:"form-control form-control-sm",attrs:{type:"number",min:"1",step:"0.1"},domProps:{value:e.chance},on:{input:function(o){o.target.composing||t.$set(e,"chance",t._n(o.target.value))},blur:function(e){t.$forceUpdate()}}})])]),o("td",{style:{"background-color":e.backgroundColor||t.getDefaultGiftBackgroundColor(a)}},[o("div",{staticClass:"input-group justify-content-center"},[o("span",{directives:[{name:"show",rawName:"v-show",value:!e.edit,expression:"!gift.edit"}]},[t._v(t._s(e.backgroundColor||"預設"))]),t.isMobile?t._e():o("input",{directives:[{name:"show",rawName:"v-show",value:e.edit,expression:"gift.edit"},{name:"model",rawName:"v-model",value:e.backgroundColor,expression:"gift.backgroundColor"}],staticClass:"mx-1",style:{width:"25px"},attrs:{type:"color"},domProps:{value:e.backgroundColor},on:{input:function(o){o.target.composing||t.$set(e,"backgroundColor",o.target.value)}}}),o("input",{directives:[{name:"show",rawName:"v-show",value:e.edit,expression:"gift.edit"},{name:"model",rawName:"v-model",value:e.backgroundColor,expression:"gift.backgroundColor"}],staticClass:"form-control form-control-sm",attrs:{type:"text",placeholder:t.getDefaultGiftBackgroundColor()},domProps:{value:e.backgroundColor},on:{input:function(o){o.target.composing||t.$set(e,"backgroundColor",o.target.value)}}})])]),o("td",{style:{"background-color":e.textColor||t.config.textColor}},[o("div",{staticClass:"input-group justify-content-center"},[o("span",{directives:[{name:"show",rawName:"v-show",value:!e.edit,expression:"!gift.edit"}]},[t._v(t._s(e.textColor||"預設"))]),t.isMobile?t._e():o("input",{directives:[{name:"show",rawName:"v-show",value:e.edit,expression:"gift.edit"},{name:"model",rawName:"v-model",value:e.textColor,expression:"gift.textColor"}],staticClass:"mx-1",style:{width:"25px"},attrs:{type:"color"},domProps:{value:e.textColor},on:{input:function(o){o.target.composing||t.$set(e,"textColor",o.target.value)}}}),o("input",{directives:[{name:"show",rawName:"v-show",value:e.edit,expression:"gift.edit"},{name:"model",rawName:"v-model",value:e.textColor,expression:"gift.textColor"}],staticClass:"form-control form-control-sm",attrs:{type:"text",placeholder:t.config.textColor},domProps:{value:e.textColor},on:{input:function(o){o.target.composing||t.$set(e,"textColor",o.target.value)}}})])]),o("td",[o("div",{staticClass:"input-group"},[o("span",{directives:[{name:"show",rawName:"v-show",value:!e.edit,expression:"!gift.edit"}]},[t._v(t._s(e.text))]),o("input",{directives:[{name:"show",rawName:"v-show",value:e.edit,expression:"gift.edit"},{name:"model",rawName:"v-model",value:e.text,expression:"gift.text"}],staticClass:"form-control form-control-sm",attrs:{type:"text"},domProps:{value:e.text},on:{input:function(o){o.target.composing||t.$set(e,"text",o.target.value)}}})])]),o("td",[o("div",{staticClass:"input-group justify-content-center"},[o("span",{directives:[{name:"show",rawName:"v-show",value:!e.edit,expression:"!gift.edit"}]},[t._v(t._s(e.textSize||"預設"))]),o("input",{directives:[{name:"show",rawName:"v-show",value:e.edit,expression:"gift.edit"},{name:"model",rawName:"v-model",value:e.textSize,expression:"gift.textSize"}],staticClass:"form-control form-control-sm",attrs:{type:"number"},domProps:{value:e.textSize},on:{input:function(o){o.target.composing||t.$set(e,"textSize",o.target.value)}}})])]),o("td",[o("div",{staticClass:"input-group text-center justify-content-center"},[o("button",{directives:[{name:"show",rawName:"v-show",value:!e.edit,expression:"!gift.edit"}],staticClass:"btn btn-sm btn-outline-info mx-1",on:{click:function(e){e.preventDefault(),t.editGiftData(a)}}},[t._v("編輯")]),o("button",{directives:[{name:"show",rawName:"v-show",value:!e.edit,expression:"!gift.edit"}],staticClass:"btn btn-sm btn-outline-danger mx-1",on:{click:function(e){e.preventDefault(),t.removeGiftData(a)}}},[t._v("移除")]),o("button",{directives:[{name:"show",rawName:"v-show",value:e.edit,expression:"gift.edit"}],staticClass:"btn btn-sm btn-outline-success mx-1",on:{click:function(e){e.preventDefault(),t.saveGiftData(a)}}},[t._v("儲存")]),o("button",{directives:[{name:"show",rawName:"v-show",value:e.edit,expression:"gift.edit"}],staticClass:"btn btn-sm btn-outline-secondary mx-1",on:{click:function(e){e.preventDefault(),t.cancleGiftData(a)}}},[t._v("取消")])])])])}))],1)]),o("button",{staticClass:"btn btn-sm btn-outline-success px-5 mx-1",on:{click:t.addGiftData}},[t._v("新增區塊")])]):o("div",{staticClass:"editByDate w-100 my-2"},[o("textarea",{staticClass:"form-control form-control-sm w-100",domProps:{value:t.showGiftsToTextArea},on:{input:t.setGiftsByTextArea}})])])]),o("div",{staticClass:"tab-pane fade py-3 px-1",attrs:{id:"edit-config",role:"tabpanel"}},[o("form",{staticClass:"form-inline row",on:{submit:function(t){t.preventDefault()}}},[o("div",{staticClass:"form-group w-100 mb-3 col-md-4"},[o("label",{staticClass:"mr-2"},[t._v("停止模式:")]),o("div",{staticClass:"form-check ml-4 ml-sm-0 mr-sm-2"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.config.autoStop,expression:"config.autoStop"}],staticClass:"form-check-input",attrs:{id:"autoStopTrue",type:"radio",name:"autoStop",checked:"checked"},domProps:{value:!0,checked:t._q(t.config.autoStop,!0)},on:{change:function(e){t.$set(t.config,"autoStop",!0)}}}),o("label",{attrs:{for:"autoStopTrue"}},[t._v("自動")])]),o("div",{staticClass:"form-check ml-4 ml-sm-0"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.config.autoStop,expression:"config.autoStop"}],staticClass:"form-check-input",attrs:{id:"autoStopFalse",type:"radio",name:"autoStop"},domProps:{value:!1,checked:t._q(t.config.autoStop,!1)},on:{change:function(e){t.$set(t.config,"autoStop",!1)}}}),o("label",{attrs:{for:"autoStopFalse"}},[t._v("手動")])])]),o("div",{staticClass:"form-group w-100 mb-3 col-md-8"},[o("label",{staticClass:"mr-2"},[t._v("轉出資訊:")]),o("div",{staticClass:"form-check ml-4 ml-sm-0 mr-sm-2"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.config.showAlert,expression:"config.showAlert"}],staticClass:"form-check-input",attrs:{id:"showAlertTrue",type:"radio",name:"showAlert",checked:"checked"},domProps:{value:!0,checked:t._q(t.config.showAlert,!0)},on:{change:function(e){t.$set(t.config,"showAlert",!0)}}}),o("label",{attrs:{for:"showAlertTrue"}},[t._v("顯示")])]),o("div",{staticClass:"form-check ml-4 ml-sm-0"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.config.showAlert,expression:"config.showAlert"}],staticClass:"form-check-input",attrs:{id:"showAlertFalse",type:"radio",name:"showAlert"},domProps:{value:!1,checked:t._q(t.config.showAlert,!1)},on:{change:function(e){t.$set(t.config,"showAlert",!1)}}}),o("label",{attrs:{for:"showAlertFalse"}},[t._v("關閉")])])]),o("div",{staticClass:"form-group w-100 mb-3 col-md-4"},[o("label",[t._v(t._s(t.config.autoStop?"動畫時間長度(s):":"轉10圈的轉速(s):"))]),o("input",{directives:[{name:"model",rawName:"v-model.number",value:t.config.runTime,expression:"config.runTime",modifiers:{number:!0}}],staticClass:"form-control form-control-sm w-100",attrs:{type:"number",min:"1",step:"1"},domProps:{value:t.config.runTime},on:{input:function(e){e.target.composing||t.$set(t.config,"runTime",t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})]),o("div",{staticClass:"form-group w-100 mb-3 col-md-4"},[o("label",[t._v("轉盤尺寸設定(px):")]),o("input",{directives:[{name:"model",rawName:"v-model.number",value:t.config.baseSize,expression:"config.baseSize",modifiers:{number:!0}}],staticClass:"form-control form-control-sm w-100",attrs:{type:"number",step:"1",min:"150"},domProps:{value:t.config.baseSize},on:{input:function(e){e.target.composing||t.$set(t.config,"baseSize",t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})]),t.config.autoStop?o("div",{staticClass:"form-group w-100 mb-3 col-md-4"},[o("label",[t._v("最大回彈角度(百分比):")]),o("input",{directives:[{name:"model",rawName:"v-model.number",value:t.config.rollBackRange,expression:"config.rollBackRange",modifiers:{number:!0}}],staticClass:"form-control form-control-sm w-100",attrs:{type:"number",step:"0.01",min:"0.1",max:"1",readonly:!t.config.autoStop},domProps:{value:t.config.rollBackRange},on:{input:function(e){e.target.composing||t.$set(t.config,"rollBackRange",t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})]):t._e(),o("div",{staticClass:"form-group w-100 mb-3 col-md-4"},[o("label",[t._v("區塊預設色(單數):")]),o("div",{staticClass:"input-group w-100"},[t.isMobile?t._e():o("input",{directives:[{name:"model",rawName:"v-model",value:t.config.singleColor,expression:"config.singleColor"}],staticClass:"mx-1 my-1",style:{width:"25px"},attrs:{type:"color"},domProps:{value:t.config.singleColor},on:{input:function(e){e.target.composing||t.$set(t.config,"singleColor",e.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:t.config.singleColor,expression:"config.singleColor"}],staticClass:"form-control form-control-sm",attrs:{type:"text"},domProps:{value:t.config.singleColor},on:{input:function(e){e.target.composing||t.$set(t.config,"singleColor",e.target.value)}}})])]),o("div",{staticClass:"form-group w-100 mb-3 col-md-4"},[o("label",[t._v("區塊預設色(雙數):")]),o("div",{staticClass:"input-group w-100"},[t.isMobile?t._e():o("input",{directives:[{name:"model",rawName:"v-model",value:t.config.doubleColor,expression:"config.doubleColor"}],staticClass:"mx-1 my-1",style:{width:"25px"},attrs:{type:"color"},domProps:{value:t.config.doubleColor},on:{input:function(e){e.target.composing||t.$set(t.config,"doubleColor",e.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:t.config.doubleColor,expression:"config.doubleColor"}],staticClass:"form-control form-control-sm",attrs:{type:"text"},domProps:{value:t.config.doubleColor},on:{input:function(e){e.target.composing||t.$set(t.config,"doubleColor",e.target.value)}}})])]),o("div",{staticClass:"form-group w-100 mb-3 col-md-4"},[o("label",[t._v("區塊邊框寬度:")]),o("input",{directives:[{name:"model",rawName:"v-model.number",value:t.config.borderWidth,expression:"config.borderWidth",modifiers:{number:!0}}],staticClass:"form-control form-control-sm w-100",attrs:{type:"number",min:"1",step:"1"},domProps:{value:t.config.borderWidth},on:{input:function(e){e.target.composing||t.$set(t.config,"borderWidth",t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})]),o("div",{staticClass:"form-group w-100 mb-3 col-md-4"},[o("label",[t._v("按鈕顏色:")]),o("div",{staticClass:"input-group w-100"},[t.isMobile?t._e():o("input",{directives:[{name:"model",rawName:"v-model",value:t.config.buttonColor,expression:"config.buttonColor"}],staticClass:"mx-1 my-1",style:{width:"25px"},attrs:{type:"color"},domProps:{value:t.config.buttonColor},on:{input:function(e){e.target.composing||t.$set(t.config,"buttonColor",e.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:t.config.buttonColor,expression:"config.buttonColor"}],staticClass:"form-control form-control-sm",attrs:{type:"text"},domProps:{value:t.config.buttonColor},on:{input:function(e){e.target.composing||t.$set(t.config,"buttonColor",e.target.value)}}})])]),o("div",{staticClass:"form-group w-100 mb-3 col-md-8"},[o("label",[t._v("按鈕文字:")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.config.buttonText,expression:"config.buttonText"}],staticClass:"form-control form-control-sm w-100",attrs:{type:"text"},domProps:{value:t.config.buttonText},on:{input:function(e){e.target.composing||t.$set(t.config,"buttonText",e.target.value)}}})])])]),o("div",{staticClass:"tab-pane fade py-3 px-1",attrs:{id:"dataList",role:"tabpanel"}},[t._l(t.dataList,function(e,a){return[o("button",{staticClass:"btn btn-sm btn-outline-info px-3 m-1",on:{click:function(e){e.preventDefault(),t.loadData(a)}}},[t._v(t._s(e.dataName))])]})],2)])]),o("div",{staticClass:"modal-footer"},[o("form",{staticClass:"form-inline",on:{submit:function(t){t.preventDefault()}}},[o("label",{staticClass:"mr-2"},[t._v("設定檔名稱:")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.dataName,expression:"dataName"}],staticClass:"form-control form-control-sm",attrs:{type:"text"},domProps:{value:t.dataName},on:{input:function(e){e.target.composing||(t.dataName=e.target.value)}}})]),o("button",{staticClass:"btn btn-sm btn-outline-primary mx-1 px-3",on:{click:function(e){e.preventDefault(),t.newData(e)}}},[t._v("新增")]),o("button",{staticClass:"btn btn-sm btn-outline-success mx-1 px-3",on:{click:function(e){e.preventDefault(),t.saveData()}}},[t._v("儲存")]),0!==t.dataNo?o("button",{staticClass:"btn btn-sm btn-outline-danger mx-1 px-3",on:{click:function(e){e.preventDefault(),t.deleteData(t.dataNo)}}},[t._v("刪除")]):t._e(),o("button",{staticClass:"btn btn-sm btn-outline-secondary mx-1 px-3",on:{click:function(e){e.preventDefault(),t.setDefaultDatas()}}},[t._v("預設")]),o("button",{staticClass:"btn btn-sm btn-secondary",attrs:{"data-dismiss":"modal"}},[t._v("關閉")])])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title"},[this._v("轉出結果")]),e("button",{staticClass:"close",attrs:{"data-dismiss":"modal"}},[e("span",[this._v("×")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",{staticClass:"text-center"},[e("tr",[e("th",{staticClass:"text-center",attrs:{scope:"col"}},[this._v("No")]),e("th",{staticClass:"text-center",attrs:{scope:"col"}},[this._v("內容")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"close",attrs:{"data-dismiss":"modal"}},[e("span",[this._v("×")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"nav nav-tabs",attrs:{role:"tablist"}},[e("li",{staticClass:"nav-item text-center"},[e("a",{staticClass:"nav-link active",attrs:{"data-toggle":"tab",href:"#edit-data",role:"tab"}},[this._v("區塊設定")])]),e("li",{staticClass:"nav-item text-center"},[e("a",{staticClass:"nav-link",attrs:{"data-toggle":"tab",href:"#edit-config",role:"tab"}},[this._v("轉盤設定")])]),e("li",{staticClass:"nav-item text-center"},[e("a",{staticClass:"nav-link",attrs:{"data-toggle":"tab",href:"#dataList",role:"tab"}},[this._v("設定集")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",{staticClass:"text-center"},[e("tr",[e("th",{attrs:{scope:"col",width:"10%"}},[this._v("區塊占比")]),e("th",{attrs:{scope:"col",width:"15%"}},[this._v("背景顏色")]),e("th",{attrs:{scope:"col",width:"15%"}},[this._v("文字顏色")]),e("th",{attrs:{scope:"col",width:"40%"}},[this._v("文字內容")]),e("th",{attrs:{scope:"col",width:"10%"}},[this._v("文字大小")]),e("th",{attrs:{scope:"col",width:"10%"}},[this._v("功能")])])])}]};var f={name:"app",components:{TurnTable:o("VU/8")(d,m,!1,function(t){o("cGrV")},null,null).exports}},g={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("TurnTable")],1)},staticRenderFns:[]},p=o("VU/8")(f,g,!1,null,null,null).exports;a.a.config.productionTip=!1,new a.a({el:"#app",template:"<App/>",components:{App:p}})},cGrV:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.1d5135dcc7042022a7d9.js.map