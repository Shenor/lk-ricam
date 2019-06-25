export default function selected(data, myData, fullData, id) {
        
  let select = document.querySelector(".main-select"),
      title = document.querySelector(".panel-title"),
      legalAdress = document.querySelector("#legal-adress"),
      actualAdress = document.querySelector("#actual-adress"),
      contractStatus = document.querySelector("#contract"),
      tbodyContact = document.querySelector("#table-body-contacts"),
      tbodyConnect = document.querySelector("#table-body-connect"),
      tbodyEquipFiscal = document.querySelector("#table-fiscal"),
      tbodyEquipSwitchboard = document.querySelector("#table-switchboard"),
      tbodyEquipMnbk = document.querySelector("#table-monoBlock"),
      tbodyEquipMoneyBox = document.querySelector("#table-moneyBox"),
      tbodyEquipPrinter = document.querySelector("#table-printer"),
      tbodyEquipBarcodeScanner = document.querySelector("#table-barcodeScanner"),
      tbodyEquiplibra = document.querySelector("#table-libra");

    function tableContent(tab, table) {
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
      let obj = myData[tab];

      obj.forEach(element => {
        // Перебираем объекты во вкладках для количесва ячеек
        let row = document.createElement("tr");
        interage(element); //реккурсивынй обход объекта
        table.append(row);

        function interage(obj) {
          for (let key in obj) {
            //получаем объект перебирем сво-ва
            let elem = obj[key]; //переприваеваем искомый объект да дочерний
            if (typeof elem === "object") {
              //если свойства тоже, объект, то запускаем заново функцию
              interage(elem);
            } else {
              let td = document.createElement("td");
              td.innerText = elem;
              row.append(td);
            }
          }
        }
      });
    }

    fullData.forEach((elem, idx) => {
      $(".main-select").append(
        $(`<option value = ${idx}>${elem.name}</option>`)
      );
    });


    $(".main-select").change(() => {
        id = select.value;
        myData = fullData[id];

        title.textContent = fullData[id].name;
        legalAdress.textContent = fullData[id].legalAdress;
        actualAdress.textContent = fullData[id].actualAdress;
        contractStatus.textContent = fullData[id].contractStatus;
 
      $('#table-body-contacts tr').remove();
      $('#table-body-connect tr').remove();
      $('#table-fiscal tr').remove();
      $('#table-switchboard tr').remove();
      $('#table-monoBlock tr').remove();
      $('#table-moneyBox tr').remove();
      $('#table-printer tr').remove();
      $('#table-barcodeScanner tr').remove();
      $('#table-libra tr').remove();


        //Table Contact
        tableContent("contact", tbodyContact);
        //Table Connect
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
