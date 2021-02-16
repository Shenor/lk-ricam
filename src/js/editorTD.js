  $(".main-table").on("click", event => {
    let target = event.target;

    if (target.parentNode.tagName == "TR") {
      $("tr:not(:first)").removeClass("selected");
      $(target.parentNode).addClass("selected");
    }
  });

  $(document).on("focus", ".phone", function() { 
    $(this).mask("+7 (999) 999-99-99",{placeholder:"_"});
  });

  $(document).on("focus", ".date", function() { 
    $(this).mask("99.99.9999",{placeholder:"_"});
  });

  $(".main-table").on("dblclick", ev => {
    if(ev.target.tagName.toLowerCase() == 'tr'){ return false; }
    let target = ev.target;
    const attr = $(target).attr("data");
    const typeAttr = ["fiscal", "fiscalDate", "ofd", "mnbk", "barcodeScanner", "moneyBox", "drive", "state", "prnt", "typeCon", "libra", "ofdTerm", "prog"];

    if (typeof attr != typeof undefined && attr == "readonly") {
      return false;
    } else if (typeof attr != typeof undefined && attr == "tel") {
      makeTdEditable(target, "phone");
    } else if (typeof attr != typeof undefined && typeAttr.includes(attr)) {

      const select = document.createElement("select");

      target.classList.add("edit-td");
      select.innerHTML = makeSelectEditable(attr);
      select.style = "display:block";
      target.innerHTML = "";
      target.appendChild(select);
      select.focus();

      $(select).blur(() => {
        target.textContent = target.firstChild.value;
        target.classList.remove("edit-td");
      });
    } else if(typeof attr != typeof undefined && attr == "date") {
      makeTdEditable(target, "date");
    } else {
      makeTdEditable(target);
    }
  });

  $(".btn-main-delete").on("click", () => {
    let lengthTbody = $(".main-table")
      .find(".selected")
      .closest("tbody")
      .children("tr").length;
    if (lengthTbody == 1) {
      $(".main-table")
        .find(".selected")
        .children("td")
        .each((id, td) => {
          td.textContent = "...";
        });
    } else {
      $(".main-table")
        .find(".selected")
        .remove();
    }
  });

  $(".btn-main-add").on("click", () => {
    const content = $(".main-table")
      .find(".selected")
      .clone();
    $(".main-table")
      .find(".selected")
      .after(content);
    $("tr:not(:first)").removeClass("selected");
  });

  function makeTdEditable(td, classes="") {
    td.classList.add("edit-td");

    const input = document.createElement("input");
    input.style.width = 200 + "px";
    input.style.height = 30 + "px";
    input.style.border = "none";
    input.style.padding = "0";
    input.style.margin = "0";
    input.className = `center-align edit-input ${classes}`;
    input.value = td.textContent;
    td.innerHTML = "";
    td.appendChild(input);
    input.focus();

    $(input).blur(() => {
      td.textContent = td.firstChild.value;
      td.classList.remove("edit-td");
    });
  }

  function makeSelectEditable(type) {

    const selectData = new Map()
      .set("fiscal", `
                    <select class="browser-default">
                      <option>ATOL 22ПТК</option>
                      <option>ATOL 20Ф</option>
                      <option>ATOL 11Ф</option>
                      <option>ATOL 30Ф</option>
                      <option>ATOL 55Ф</option>
                      <option>ATOL 77Ф</option>
                      <option>ATOL 90Ф</option>
                      <option>ATOL SIGMA-7</option>
                      <option>ATOL SIGMA-8</option>
                      <option>ATOL SIGMA-10</option>
                      <option>Evotor</option>
                      <option>Spark-115Ф</option>
                      <option>Shtrih</option>
                    </select>
                  `)
        .set("ofd", `
                    <select class="browser-default">
                      <option disabled selected>-Выберите адрес-</option>
                      <option>Платформа ОФД</option>
                      <option>1 ОФД</option>
                      <option>Яндекс ОФД</option>
                      <option>Эвотор ОФД</option>
                      <option>Контур ОФД</option>
                      <option>Тандер ОФД</option>
                      <option>ofd.ru</option>
                    </select>
                  `)
      .set("mnbk", `
                    <select class="browser-default">
                      <option>POSBANK APEXA G</option>
                      <option>ATOL VIVA</option>
                      <option>ATOL VIVA 2</option>
                      <option>ATOL VIVA Turbo</option>
                      <option>ATOL VIVA Turbo 2</option>
                      <option>ATOL VIVA Jazz</option>
                      <option>ATOL OPTIMA</option>
                      <option>POSIFLEX</option>
                    </select>
                    `)
      .set("barcodeScanner", `
                    <select class="browser-default">
                      <option>Honeywell 1450G</option>
                      <option>Honeywell(Беспров.)</option>
                      <option>ATOL</option>
                      <option>DataLogic</option>
                    </select>
                    `)
      .set("moneyBox", `
                    <select class="browser-default">
                      <option>Большой</option>
                      <option>Средний</option>
                      <option>Малый</option>
                    </select>
                    `)
      .set("fiscalDate", `
                    <select class="browser-default" id="fiscalTime">
                    <option disabled selected>...</option>
                    <option value="15">15 мес.</option>
                    <option value="36">36 мес.</option>
                    </select>
                    `)
      .set("drive", `
                    <select class="browser-default">
                    <option>HDD</option>
                    <option>SSD</option>
                    </select>
                    `)
      .set("state", `
                    <select class="browser-default">
                    <option>Плохое</option>
                    <option>Стабильное</option>
                    <option>Хоршее</option>
                    </select>
                    `)
      .set("prnt", `
                    <select class="browser-default" name="fout-select">
                    <option>ATOL RP226</option>
                    <option>SPARK PP</option>
                    <option>Sam4s</option>
		    <option>Zebra ZD410</option>
                    </select>
                    `)
      .set("typeCon", `
                    <select class="browser-default">
                    <option>USB</option>
                    <option>COM</option>
                    <option>Ethernet</option>
                    </select>
                    `)
      .set("libra", `
                    <select class="browser-default">
                    <option disabled selected>-Выберите модель-</option>
                    <option>Strih Print</option>
                    <option>Strih Print-mini</option>
                    <option>Cas</option>
                    <option>ATOL Marta</option>
                    </select>
                        `)
      .set("ofdTerm", `
                    <select class="browser-default">
                    <option disabled selected>...</option>
                    <option value="12">12 мес.</option>
                    <option value="15">15 мес.</option>
                    <option value="36">36 мес.</option>
                    </select>
                    `)
      .set("prog", `
                    <select class="browser-default">
                    <option disabled selected>-Выберите программу-</option>
                    <option value="AmmyAdmin">AmmyAdmin</option>
                    <option value="AnyDesk">AnyDesk</option>
                    <option value="TeamViewer">TeamViewer</option>
                    <option value="RDP">RDP</option>
                    </select>
      `);
    return selectData.get(type);
  }
