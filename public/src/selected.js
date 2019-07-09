export default function selected(myData, fullData, id) {
  let select = document.querySelector(".main-select"),
      title = document.querySelector(".panel-title"),
      adressLeg= document.querySelector("#legal-adress"),
      adresAct = document.querySelector("#actual-adress"),
      statusContract = document.querySelector("#contract"),
      tbodyContact = document.querySelector("#table-contacts"),
      tbodyConnect = document.querySelector("#table-connect"),
      tbodyEquipFiscal = document.querySelector("#table-fiscal"),
      tbodyEquipSwitchboard = document.querySelector("#table-switchboard"),
      tbodyEquipMnbk = document.querySelector("#table-monoBlock"),
      tbodyEquipMoneyBox = document.querySelector("#table-moneyBox"),
      tbodyEquipPrinter = document.querySelector("#table-printer"),
      tbodyEquipBarcodeScanner = document.querySelector("#table-barcodeScanner"),
      tbodyEquiplibra = document.querySelector("#table-libra");

      console.log(title.textContent);
      fullData
      .filter((arr, idx) => {   
        if (title.textContent === arr.name){
          $(".main-select").append($(`<option value = ${idx} selected >${arr.name}</option>`));
        }  else {
          $(".main-select").append($(`<option value = ${idx}>${arr.name}</option>`));
        }
      });

  function tableContent(tab, table) {
    $(`#${$(table).attr("id")} tr`).remove();
    for (let i = 0; i < myData[tab].length; i++) {
      let row = document.createElement("tr");
      myData[tab][i].forEach(element => {
        let td = document.createElement("td");
        td.innerText = element;
        row.append(td);
      });
      table.appendChild(row);
    }
  }

  //Супер кастыльный код
  function tableContentEquip(tab, table) {
    $(`#${$(table).attr("id")} tr`).remove();
    moment.locale("ru");
    let fT,
      obj = myData[tab];

    obj.forEach(element => {
      let row = document.createElement("tr"); // Перебираем объекты во вкладках для количесва строк

      interage(element); //реккурсивынй обход объекта
      table.append(row);

      function interage(obj) {
        for (let key in obj) {
          //получаем объект перебирем сво-ва
          let elem = obj[key]; //переприваеваем искомый объект да дочерний

          if (typeof elem === "object") {
            //если свойства тоже, объект, то запускаем заново функцию
            interage(elem);
          } else if (key == "fiscalTime") {
            let td = document.createElement("td");
                fT = parseInt(elem);
                td.className = "fTime";
                td.innerText = elem;
                row.append(td);
          } else if (key == "fiscalDate") {
            let fD = elem,
              fEndDate = moment(fD, "DD.MM.YYYY")
                .add(fT, "month")
                .format("DD-MM-YYYY"),
              fleftDate = moment(fEndDate, "DD-MM-YYYY"),
              td = document.createElement("td"),
              td1 = document.createElement("td"),
              td2 = document.createElement("td");
              
              td1.setAttribute("readonly", '');
              td2.setAttribute("readonly", '');

            td.innerText = elem;
            td1.innerText = fEndDate;
            td2.innerText = fleftDate.fromNow();

            row.append(td, td1, td2);
          } else {
            let td = document.createElement("td");
            td.innerText = elem;
            row.append(td);
          }
        }
      }
    });
  }

  $(".main-select").on("change", function() {
    id = select.value;
    myData = fullData[id];

    let {name, legalAdress, actualAdress, contractStatus} = fullData[id];

    title.textContent = name;
    adressLeg.textContent = legalAdress;
    adresAct.textContent = actualAdress;
    statusContract.textContent = contractStatus;

    tableContent("contact", tbodyContact);
    tableContent("connect", tbodyConnect);
    tableContentEquip("fiscal", tbodyEquipFiscal);
    tableContentEquip("switchboard", tbodyEquipSwitchboard);
    tableContentEquip("monoBlock", tbodyEquipMnbk);
    tableContentEquip("moneyBox", tbodyEquipMoneyBox);
    tableContentEquip("printer", tbodyEquipPrinter);
    tableContentEquip("barcodeScanner", tbodyEquipBarcodeScanner);
    tableContentEquip("libra", tbodyEquiplibra);
  });
}
