export default function editorTD() {
  $(".main-table").on("click", event => {
    let target = event.target;

    if (target.parentNode.tagName == "TR") {
      $("tr:not(:first)").removeClass("selected");
      $(target.parentNode).addClass("selected");
    }
  });

  $(".main-table").on("dblclick", ev => {
    let target = ev.target;
    const attr = $(target).attr("data");
    const typeAttr = ["fiscal", "fiscalDate", "mnbk", "barcodeScanner", "moneyBox", "drive", "state", "prnt", "typeCon", "libra", "ofdTerm"];

    if (typeof attr != typeof undefined && attr == "readonly") {
      return false;
    } else if (typeof attr != typeof undefined && attr == "tel") {
      makeTdEditable(target);
    } else if (typeof attr != typeof undefined && typeAttr.includes(attr)) {

      const select = document.createElement("select");

      target.classList.add("edit-td");
      select.innerHTML = makeSelectEditable(attr);
      target.innerHTML = "";
      target.appendChild(select);
      select.focus();

      $(select).blur(() => {
        target.textContent = target.firstChild.value;
        target.classList.remove("edit-td");
      });
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

  function makeTdEditable(td) {
    td.classList.add("edit-td");

    const input = document.createElement("input");
    input.style.width = td.clientWidth - 8 + "px";
    input.style.height = td.clientHeight - 16 + "px";
    input.style.border = "none";
    input.style.padding = "0";
    input.className = `text-center form-input edit-input selected`;
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
                    <select>
                      <option>ATOL 22ПТК</option>
                      <option>ATOL 20Ф</option>
                      <option>ATOL 11Ф</option>
                      <option>ATOL 30Ф</option>
                      <option>ATOL 55Ф</option>
                      <option>ATOL 77Ф</option>
                      <option>ATOL SIGMA-7</option>
                      <option>ATOL SIGMA-8</option>
                      <option>ATOL SIGMA-10</option>
                      <option>Evotor</option>
                      <option>Spark-115Ф</option>
                      <option>Shtrih</option>
                    </select>
                  `)
      .set("mnbk", `
                    <select>
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
                    <select>
                      <option>Honeywell 1450G</option>
                      <option>Honeywell(Беспров.)</option>
                      <option>ATOL</option>
                      <option>DataLogic</option>
                    </select>
                    `)
      .set("moneyBox", `
                    <select>
                      <option>Большой</option>
                      <option>Средний</option>
                      <option>Малый</option>
                    </select>
                    `)
      .set("fiscalDate", `
                    <select id="fiscalTime">
                    <option disabled selected>...</option>
                    <option value="15">15 мес.</option>
                    <option value="36">36 мес.</option>
                    </select>
                    `)
      .set("drive", `
                    <select">
                    <option>HDD</option>
                    <option>SSD</option>
                    </select>
                    `)
      .set("state", `
                    <select>
                    <option>Плохое</option>
                    <option>Стабильное</option>
                    <option>Хоршее</option>
                    </select>
                    `)
      .set("prnt", `
                    <select name="fout-select">
                    <option>ATOL RP226</option>
                    <option>SPARK PP</option>
                    <option>Sam4s</option>
                    </select>
                    `)
      .set("typeCon", `
                    <select>
                    <option>USB</option>
                    <option>COM</option>
                    <option>Ethernet</option>
                    </select>
                    `)
      .set("libra", `
                    <select>
                    <option disabled selected>-Выберите модель-</option>
                    <option>Strih Print</option>
                    <option>Strih Print-mini</option>
                    <option>Cas</option>
                    <option>ATOL Marta</option>
                    </select>
                        `)
      .set("ofdTerm", `
                    <select>
                    <option disabled selected>...</option>
                    <option value="12">12 мес.</option>
                    <option value="36">36 мес.</option>
                    </select>
                    `);
    return selectData.get(type);
  }
}
