!function(e){var t={};function n(o){if(t[o])return t[o].exports;var l=t[o]={i:o,l:!1,exports:{}};return e[o].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(o,l,function(t){return e[t]}.bind(null,l));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=class{constructor(){this.url="http://192.168.1.25:3000"}createClient(e){return new Promise((t,n)=>{$.ajax({type:"POST",url:this.url+"/createClient",crossDomian:!0,data:e}).done(e=>{t(e)}).fail(e=>{n(e)})})}editClient(e){return new Promise((t,n)=>{$.ajax({type:"POST",url:this.url+"/editClient",crossDomian:!0,data:e}).done(()=>{t()}).fail(e=>{n(e)})})}deleteClient(e){return new Promise((t,n)=>{$.ajax({type:"POST",url:this.url+"/deleteClient",crossDomian:!0,data:e}).done(e=>{t(e)}).fail(e=>{n(e)})})}getAll(){return new Promise((e,t)=>{$.ajax({type:"POST",url:this.url+"/database",crossDomian:!0}).done(t=>{e(t)}).fail(e=>{t(e)})})}}},function(e,t,n){"use strict";n.r(t);var o=n(0),l=n.n(o);function c(){function e(e){e.classList.add("edit-td");const t=document.createElement("input");t.style.width=e.clientWidth-8+"px",t.style.height=e.clientHeight-16+"px",t.style.border="none",t.style.padding="0",t.className="text-center form-input edit-input selected",t.value=e.textContent,e.innerHTML="",e.appendChild(t),t.focus(),$(t).blur(()=>{e.textContent=e.firstChild.value,e.classList.remove("edit-td")})}$(".main-table").on("click",e=>{let t=e.target;"TR"==t.parentNode.tagName&&($("tr:not(:first)").removeClass("selected"),$(t.parentNode).addClass("selected"))}),$(".main-table").on("dblclick",t=>{let n=t.target;const o=$(n).attr("data");if(void 0!==o&&"readonly"==o)return!1;if(void 0!==o&&"tel"==o)e(n);else if(void 0!==o&&["fiscal","fiscalDate","mnbk","barcodeScanner","moneyBox","drive","state","prnt","typeCon","libra","ofdTerm"].includes(o)){const e=document.createElement("select");n.classList.add("edit-td"),e.innerHTML=function(e){return(new Map).set("fiscal","\n                    <select>\n                      <option>ATOL 22ПТК</option>\n                      <option>ATOL 20Ф</option>\n                      <option>ATOL 11Ф</option>\n                      <option>ATOL 30Ф</option>\n                      <option>ATOL 55Ф</option>\n                      <option>ATOL 77Ф</option>\n                      <option>ATOL SIGMA-7</option>\n                      <option>ATOL SIGMA-8</option>\n                      <option>ATOL SIGMA-10</option>\n                      <option>Evotor</option>\n                      <option>Spark-115Ф</option>\n                      <option>Shtrih</option>\n                    </select>\n                  ").set("mnbk","\n                    <select>\n                      <option>POSBANK APEXA G</option>\n                      <option>ATOL VIVA</option>\n                      <option>ATOL VIVA 2</option>\n                      <option>ATOL VIVA Turbo</option>\n                      <option>ATOL VIVA Turbo 2</option>\n                      <option>ATOL VIVA Jazz</option>\n                      <option>ATOL OPTIMA</option>\n                      <option>POSIFLEX</option>\n                    </select>\n                    ").set("barcodeScanner","\n                    <select>\n                      <option>Honeywell 1450G</option>\n                      <option>Honeywell(Беспров.)</option>\n                      <option>ATOL</option>\n                      <option>DataLogic</option>\n                    </select>\n                    ").set("moneyBox","\n                    <select>\n                      <option>Большой</option>\n                      <option>Средний</option>\n                      <option>Малый</option>\n                    </select>\n                    ").set("fiscalDate",'\n                    <select id="fiscalTime">\n                    <option disabled selected>...</option>\n                    <option value="15">15 мес.</option>\n                    <option value="36">36 мес.</option>\n                    </select>\n                    ').set("drive",'\n                    <select">\n                    <option>HDD</option>\n                    <option>SSD</option>\n                    </select>\n                    ').set("state","\n                    <select>\n                    <option>Плохое</option>\n                    <option>Стабильное</option>\n                    <option>Хоршее</option>\n                    </select>\n                    ").set("prnt",'\n                    <select name="fout-select">\n                    <option>ATOL RP226</option>\n                    <option>SPARK PP</option>\n                    <option>Sam4s</option>\n                    </select>\n                    ').set("typeCon","\n                    <select>\n                    <option>USB</option>\n                    <option>COM</option>\n                    <option>Ethernet</option>\n                    </select>\n                    ").set("libra","\n                    <select>\n                    <option disabled selected>-Выберите модель-</option>\n                    <option>Strih Print</option>\n                    <option>Strih Print-mini</option>\n                    <option>Cas</option>\n                    <option>ATOL Marta</option>\n                    </select>\n                        ").set("ofdTerm",'\n                    <select>\n                    <option disabled selected>...</option>\n                    <option value="12">12 мес.</option>\n                    <option value="36">36 мес.</option>\n                    </select>\n                    ').get(e)}(o),n.innerHTML="",n.appendChild(e),e.focus(),$(e).blur(()=>{n.textContent=n.firstChild.value,n.classList.remove("edit-td")})}else e(n)}),$(".btn-main-delete").on("click",()=>{1==$(".main-table").find(".selected").closest("tbody").children("tr").length?$(".main-table").find(".selected").children("td").each((e,t)=>{t.textContent="..."}):$(".main-table").find(".selected").remove()}),$(".btn-main-add").on("click",()=>{const e=$(".main-table").find(".selected").clone();$(".main-table").find(".selected").after(e),$("tr:not(:first)").removeClass("selected")})}$("#table-body-modal-contacts").on("click",function(e){let t=$(e.target).parent()[0];e.target.className.match("icon-cross-modal-contact")&&$(t).parent()[0].remove()}),$("#table-body-modal-connects").on("click",function(e){let t=$(e.target).parent()[0];e.target.className.match("icon-cross-modal-connect")&&$(t).parent()[0].remove()}),$(".cool-input__input").on("input",function(){""==$(this).val()?$(this).removeClass("cool-input__input_filled"):$(this).addClass("cool-input__input_filled")}),$(document).on("click",".phone",()=>{jQuery(function(e){e(".phone").mask("+7 (999) 999-9999")})}),$(document).on("click",".ofd-date",()=>{jQuery(function(e){e(".ofd-date").mask("99.99.9999")})}),$(document).on("click",".fn-date",()=>{jQuery(function(e){e(".fn-date").mask("99.99.9999")})}),$(".fn-date").blur(()=>{const e=$(".fn-date").val();moment(e,"DD-MM-YYYY").isValid()?$(".fn-date").removeClass("error"):$(".fn-date").addClass("error")}),$(".ofd-date").blur(()=>{const e=$(".ofd-date").val();moment(e,"DD-MM-YYYY").isValid()?$(".ofd-date").removeClass("error"):$(".ofd-date").addClass("error")}),document.addEventListener("DOMContentLoaded",function(){const e=new l.a;!async function(){!function(e){const t=document.querySelector(".main-select"),n=document.querySelector(".panel-title");e.filter((e,t)=>{n.textContent===e.name?$(".main-select").append($(`<option value = ${t} selected >${e.name}</option>`)):$(".main-select").append($(`<option value = ${t}>${e.name}</option>`))}),$(".main-select").on("change",function(){location.href=`/user/${t.value}`})}(await e.getAll()),function(){$(".btn-plus").click(()=>{$("#modal-create").addClass("active")}),$(".btn-delete").click(()=>{$("#modal-delete").addClass("active")}),$(".btn-close").click(e=>{$("#modal-create").removeClass("active"),$("#modal-delete").removeClass("active"),$("#modalConfirmEdit").removeClass("active")}),$(".btn-clear").click(()=>{$(".modal").removeClass("active"),t=0});let e=$(".modal-create").length,t=0;$(".btn-next").click(()=>{t<e-1&&t++;let n=$(".modal-create")[t],o=$(".modal-create")[t-1];$(o).removeClass("active"),$(n).addClass("active")}),$(".btn-back").click(()=>{let e=$(".modal-create")[t];t--;let n=$(".modal-create")[t];$(e).removeClass("active"),$(n).addClass("active")})}(),$(".btn-create").click(()=>{const e=new l.a;let t={name:"",legalAdress:"",actualAdress:"",contractStatus:"",contact:[],connect:[],fiscal:[],ofd:[],barcodeScanner:[],moneyBox:[],switchboard:[],monoBlock:[],printer:[],libra:[]},n=[],o=[];t.name=$("#createModal-name").val(),t.legalAdress=$("#createModal-legalAdress").val(),t.actualAdress=$("#createModal-actualAdress").val(),t.contractStatus=$("#createModal-contract-modal").val(),$(".table-body-modal-contacts-row").each((e,t)=>{let o=e;n[e]=[],$(t).children("td").children("input").each((e,t)=>{n[o].push(t.value)})}),t.contact=n,$(".table-body-modal-connects-row").each((e,t)=>{let n=e;o[e]=[],$(t).children("td").children(".readble").each((e,t)=>{o[n].push(t.value)})}),$(".column-fn").each((e,n)=>{t.fiscal[e]={fiscalRegistr:{},fiscalDrive:{}},t.fiscal[e].fiscalRegistr.fiscalModel=$(n).children(".column")[0].children[1].value,t.fiscal[e].fiscalRegistr.fiscalSN=$(n).children(".column")[0].children[2].children[0].children[0].children[0].value,t.fiscal[e].fiscalRegistr.fiscalOfd=$(n).children(".column")[0].children[2].children[1].children[0].children[0].value,t.fiscal[e].fiscalDrive.fiscalTime=$(n).children(".column")[1].children[1].children[0].children[0].children[1].value,t.fiscal[e].fiscalDrive.fiscalSN=$(n).children(".column")[1].children[1].children[1].children[0].children[1].value,t.fiscal[e].fiscalDrive.fiscalDate=$(n).children(".column")[1].children[2].children[0].value}),$(".column-ofd").each((e,n)=>{t.ofd[e]={},t.ofd[e].addressOfd=$(n).children(".column")[0].children[1].value,t.ofd[e].ofdLogin=$(n).children(".column")[0].children[2].children[0].children[0].value,t.ofd[e].ofdPassword=$(n).children(".column")[0].children[2].children[1].children[0].value,t.ofd[e].ofdkass=$(n).children(".column")[1].children[1].children[1].children[0].children[1].value,t.ofd[e].ofdTerm=$(n).children(".column")[1].children[1].children[0].children[0].children[1].value,t.ofd[e].ofdTime=$(n).children(".column")[1].children[2].children[0].value}),$(".column-barcodeScanner").each((e,n)=>{t.barcodeScanner[e]={},t.barcodeScanner[e].scannerModel=$(n).children(".column")[0].children[1].value,t.barcodeScanner[e].scannerNumber=$(n).children(".column")[1].children[1].value}),$(".column-moneyBox").each((e,n)=>{t.moneyBox[e]={},t.moneyBox[e].moneyBoxModel=$(n).children(".column")[0].children[1].value,t.moneyBox[e].moneyBoxNumber=$(n).children(".column")[1].children[1].value}),$(".column-switchboard").each((e,n)=>{t.switchboard[e]={},t.switchboard[e].login=$(n).children(".column")[0].children[1].children[1].value,t.switchboard[e].password=$(n).children(".column")[0].children[2].children[1].value,t.switchboard[e].model=$(n).children(".column")[1].children[1].children[1].value,t.switchboard[e].location=$(n).children(".column")[1].children[2].children[1].value,t.switchboard[e].notes=$(n).children(".column")[2].children[0].value}),$(".column-mnbk").each((e,n)=>{t.monoBlock[e]={},t.monoBlock[e].model=$(n).children(".column")[0].children[1].children[0].value,t.monoBlock[e].monoBlockSN=$(n).children(".column")[0].children[2].children[1].value,t.monoBlock[e].hardDrive=$(n).children(".column")[0].children[3].children[0].value,t.monoBlock[e].state=$(n).children(".column")[1].children[1].value,t.monoBlock[e].notes=$(n).children(".column")[1].children[2].value}),$(".column-prnt").each((e,n)=>{t.printer[e]={},t.printer[e].printerModel=$(n).children(".column")[0].children[1].value,t.printer[e].printerNumber=$(n).children(".column")[1].children[1].children[0].children[0].value,t.printer[e].printerConnectionType=$(n).children(".column")[1].children[1].children[1].children[0].value}),$(".column-libra").each((e,n)=>{t.libra[e]={},t.libra[e].libraModel=$(n).children(".column")[0].children[1].value,t.libra[e].libraNumber=$(n).children(".column")[1].children[1].children[0].children[0].value,t.libra[e].libraConnectionType=$(n).children(".column")[1].children[1].children[1].children[0].value}),t.connect=o,$(".fn-date").hasClass("error")||""==$("#createModal-name").val()?($("#modal-attempt").fadeIn("slow"),setTimeout(()=>{$("#modal-attempt").fadeOut("slow")},5e3)):e.createClient(t).then(e=>{e.error?($("#notificationError").fadeIn("slow"),$("#notificationError").fadeOut(1500)):($(".modal").removeClass("active"),$("#notificationCreate").fadeIn("slow"),setTimeout(()=>{location.href=`/user/${e.data}`},2e3))})}),$(".button-delete").click(()=>{const e=new l.a;let t={};t.deleteName=$("#delete-name").val(),e.deleteClient(t).then(()=>{$(".form-select").load("../database",()=>{fullData.filter(({name:e}=arr,t)=>{$(".main-select").append($(`<option value = ${t}>${e}</option>`))})})}),$(".modal").removeClass("active"),$("#notificationDelete").fadeIn("slow"),setTimeout(()=>{location.href="/user/0"},2e3)}),$(".btn-check").click(()=>{let e={name:"",legalAdress:"",actualAdress:"",contractStatus:"",contact:[],connect:[],fiscal:[],ofd:[],barcodeScanner:[],moneyBox:[],switchboard:[],monoBlock:[],printer:[],libra:[]},t=[],n=[];e.name=$("#name")[0].textContent,e.legalAdress=$("#legal-adress")[0].textContent,e.actualAdress=$("#actual-adress")[0].textContent,e.contractStatus=$("#contract")[0].textContent,$("#table-contacts tr").each((e,n)=>{let o=e;t[e]=[],$(n).children("td").each((e,n)=>{t[o].push($(n).html())})}),e.contact=t,$("#table-connect tr").each((e,t)=>{let o=e;n[e]=[],$(t).children("td").each((e,t)=>{n[o].push($(t).html())})}),e.connect=n,$("#table-fiscal tr").each((t,n)=>{e.fiscal[t]={fiscalRegistr:{},fiscalDrive:{}},e.fiscal[t].fiscalRegistr.fiscalOfd=$(n).children("td")[0].textContent,e.fiscal[t].fiscalRegistr.fiscalModel=$(n).children("td")[1].textContent,e.fiscal[t].fiscalRegistr.fiscalSN=$(n).children("td")[2].textContent,e.fiscal[t].fiscalDrive.fiscalTime=$(n).children("td")[3].textContent,e.fiscal[t].fiscalDrive.fiscalSN=$(n).children("td")[4].textContent,e.fiscal[t].fiscalDrive.fiscalDate=$(n).children("td")[5].textContent}),$("#table-ofd tr").each((t,n)=>{e.ofd[t]={},e.ofd[t].addressOfd=$(n).children("td")[0].textContent,e.ofd[t].ofdLogin=$(n).children("td")[1].textContent,e.ofd[t].ofdPassword=$(n).children("td")[2].textContent,e.ofd[t].ofdkass=$(n).children("td")[3].textContent,e.ofd[t].ofdTerm=$(n).children("td")[4].textContent,e.ofd[t].ofdTime=$(n).children("td")[5].textContent}),$("#table-switchboard tr").each((t,n)=>{e.switchboard[t]={},e.switchboard[t].login=$(n).children("td")[0].textContent,e.switchboard[t].password=$(n).children("td")[1].textContent,e.switchboard[t].model=$(n).children("td")[2].textContent,e.switchboard[t].location=$(n).children("td")[4].textContent,e.switchboard[t].notes=$(n).children("td")[4].textContent}),$("#table-monoBlock tr").each((t,n)=>{e.monoBlock[t]={},e.monoBlock[t].model=$(n).children("td")[0].textContent,e.monoBlock[t].monoBlockSN=$(n).children("td")[1].textContent,e.monoBlock[t].hardDrive=$(n).children("td")[2].textContent,e.monoBlock[t].state=$(n).children("td")[3].textContent,e.monoBlock[t].notes=$(n).children("td")[4].textContent}),$("#table-moneyBox tr").each((t,n)=>{e.moneyBox[t]={},e.moneyBox[t].moneyBoxModel=$(n).children("td")[0].textContent,e.moneyBox[t].moneyBoxNumber=$(n).children("td")[1].textContent}),$("#table-barcodeScanner tr").each((t,n)=>{e.barcodeScanner[t]={},e.barcodeScanner[t].scannerModel=$(n).children("td")[0].textContent,e.barcodeScanner[t].scannerNumber=$(n).children("td")[1].textContent}),$("#table-printer tr").each((t,n)=>{e.printer[t]={},e.printer[t].printerModel=$(n).children("td")[0].textContent,e.printer[t].printerNumber=$(n).children("td")[1].textContent,e.printer[t].printerConnectionType=$(n).children("td")[2].textContent}),$("#table-libra tr").each((t,n)=>{e.libra[t]={},e.libra[t].libraModel=$(n).children("td")[0].textContent,e.libra[t].libraNumber=$(n).children("td")[1].textContent,e.libra[t].libraConnectionType=$(n).children("td")[2].textContent}),$("#modalConfirmEdit").addClass("active"),$(".btn-save").on("click",()=>{const t=new l.a;$("#modalConfirmEdit").removeClass("active"),$("#notificationCreate").fadeIn("slow"),t.editClient(e).then(setTimeout(()=>{location.reload()},2e3))})}),$(".panel-body-info").not(":first").hide(),$(".tab-item").click(function(){$(".tab-item").removeClass("active").eq($(this).index()).addClass("active"),$(".panel-body-info").hide().eq($(this).index()).fadeIn()}).eq(0).show(),$(".panel-info-createModal-equiequpmentList").not(":first").hide(),$(".tab-item-createModal-equiequpmentList").click(function(){$(".tab-item-createModal-equiequpmentList").removeClass("active").eq($(this).index()).addClass("active"),$(".panel-info-createModal-equiequpmentList").hide().eq($(this).index()).fadeIn()}).eq(0).show(),$(".panel-info-editModal-equiequpmentList").not(":first").hide(),$(".tab-item-editModal-equiequpmentList").click(function(){$(".tab-item-editModal-equiequpmentList").removeClass("active").eq($(this).index()).addClass("active"),$(".panel-info-editModal-equiequpmentList").hide().eq($(this).index()).fadeIn()}).eq(0).show(),$(".icon-add-span-contact").click(()=>{let e=document.querySelector("#table-body-modal-contacts"),t=document.createElement("tr");t.className="table-body-modal-contacts-row",t.innerHTML='<td><input class="no-border text-center form-input" type="text" placeholder="Ф.И.О"></td>\n                          <td><input class="no-border text-center form-input" type="text" placeholder="Должность"></td>\n                          <td><input class="no-border text-center form-input phone" type="text" placeholder="+7 (___) ___-____"></td>\n                          <td><i class="icon icon-cross icon-cross-modal-contact"></i></td>',e.append(t)}),$(".icon-add-span-connect").click(()=>{let e=document.querySelector("#table-body-modal-connects"),t=document.createElement("tr");t.className="table-body-modal-connects-row",t.innerHTML='<td>\n                            <select class="form-select third-select readble" id="connect-modal">\n                            <option  value="AmmyAdmin">AmmyAdmin</option>\n                            <option value="AnyDesk">AnyDesk</option>\n                            <option value="TeamViewer">TeamViewer</option>\n                            </select>\n                          </td>\n                          <td><input class="no-border text-center form-input readble" type="text" id="input-example-1" placeholder="ID"></td>\n                          <td><input class="no-border text-center form-input readble" type="text" id="input-example-1" placeholder="Наименование"></td>\n                          <td><i class="icon icon-cross icon-cross-modal-connect"></i></td>',e.append(t)}),$(".icon-edit-span-contact").click(()=>{let e=document.querySelector("#table-body-edit-modal-contacts"),t=document.createElement("tr");t.className="table-body-modal-contacts-row",t.innerHTML='<td><input class="no-border text-center form-input" type="text" placeholder="Ф.И.О"></td>\n                          <td><input class="no-border text-center form-input" type="text" placeholder="Должность"></td>\n                          <td><input class="no-border text-center form-input phone" type="text" placeholder="+7 (___) ___-____"></td>\n                          <td><i class="icon icon-cross icon-cross-edit-modal"></i></td>',e.append(t)}),$(".icon-edit-span-connect").click(()=>{let e=document.querySelector("#table-body-edit-modal-connects"),t=document.createElement("tr");t.className="table-body-modal-connects-row",t.innerHTML='<td>\n                            <select class="form-select third-select readble" id="connect-modal">\n                            <option  value="AmmyAdmin">AmmyAdmin</option>\n                            <option value="AnyDesk">AnyDesk</option>\n                            <option value="TeamViewer">TeamViewer</option>\n                            </select>\n                          </td>\n                          <td><input class="no-border text-center form-input readble" type="text" id="input-example-1" placeholder="ID"></td>\n                          <td><input class="no-border text-center form-input readble" type="text" id="input-example-1" placeholder="Наименование"></td>\n                          <td><i class="icon icon-cross icon-cross-edit-modal"></i></td>',e.append(t)}),$(".icon-edit-span-fn").click(()=>{const e=$(".column-fn:first").clone();$(".fieldset-createModal-fn").append(e)}),$(".icon-edit-span-ofd").click(()=>{const e=$(".column-ofd:first").clone();$(".fieldset-createModal-ofd").append(e)}),$(".icon-edit-span-sh").click(()=>{const e=$(".column-barcodeScanner:first").clone();$(".fieldset-createModal-sh").append(e)}),$(".icon-edit-span-moneyBox").click(()=>{const e=$(".column-moneyBox:first").clone();$(".fieldset-createModal-moneyBox").append(e)}),$(".icon-edit-span-com").click(()=>{const e=$(".column-switchboard:first").clone();$(".fieldset-createModal-com").append(e)}),$(".icon-edit-span-mnbk").click(()=>{const e=$(".column-mnbk:first").clone();$(".fieldset-createModal-mnbk").append(e)}),$(".icon-edit-span-prnt").click(()=>{const e=$(".column-prnt:first").clone();$(".fieldset-createModal-prnt").append(e)}),$(".icon-edit-span-vs").click(()=>{const e=$(".column-libra:first").clone();$(".fieldset-createModal-vs").append(e)}),$("#wrapper-createModal-equiequpmentList").on("click",function(e){let t=$(e.target).parent()[0];e.target.className.match("icon-createModal-equipmentList")&&$(t).remove()}),$(".form-legend-fiscal").click(()=>{$(".content-fiscal").slideToggle()}),$(".form-legend-moneybox").click(()=>{$(".content-moneybox").slideToggle()}),$(".form-legend-ofd").click(()=>{$(".content-ofd").slideToggle()}),$(".form-legend-monoblock").click(()=>{$(".content-monoblock").slideToggle()}),$(".form-legend-com").click(()=>{$(".content-com").slideToggle()}),$(".form-legend-barcodeScanner").click(()=>{$(".content-barcodeScanner").slideToggle()}),$(".form-legend-print").click(()=>{$(".content-print").slideToggle()}),$(".form-legend-libra").click(()=>{$(".content-libra").slideToggle()}),c()}()})}]);