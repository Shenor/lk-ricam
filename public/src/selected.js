export default function selected(data) {
    
    let select = document.querySelector(".main-select"),
        title = document.querySelector(".panel-title"),
        legalAdress = document.querySelector("#legal-adress"),
        actualAdress = document.querySelector("#actual-adress"),
        contractStatus = document.querySelector("#contract"),
        tbodyContact = document.querySelector("#table-body-contacts"),
        tbodyConnect = document.querySelector("#table-body-connect");

    let id, myData, fullData;
        id = 0;
    
        let strData = JSON.stringify(data);
        fullData = JSON.parse(strData);
        myData = fullData[id];
    
        
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

    for (let i = 0; i < fullData.length; i++) {
      $(".main-select").append(
        $(`<option value = ${i}>${fullData[i].name}</option>`)
      );
    }

    $(".main-select").change(() => {
        id = select.value;
        myData = fullData[id];

      $(".panel-title").load("../database", () => {
        title.textContent = fullData[id].name;
      });
      $("#legal-adress").load("../database", () => {
        legalAdress.textContent = fullData[id].legalAdress;
      });
      $("#actual-adress").load("../database", () => {
        actualAdress.textContent = fullData[id].actualAdress;
      });
      $("#contract").load("../database", () => {
        contractStatus.textContent = fullData[id].contractStatus;
      });

      $('#table-body-contacts tr').remove();
      $('#table-body-connect tr').remove();

        //Table Contact
        tableContent("contact", tbodyContact);
        //Table Connect
        tableContent("connect", tbodyConnect);
    });
}