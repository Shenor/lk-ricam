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
    const attr = $(target).attr("readonly");

    if (typeof attr != typeof undefined && attr == "readonly") {
      return false;
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
      console.log("Нексколько");
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
    input.className = "text-center form-input edit-input selected";
    input.value = td.textContent;
    td.innerHTML = "";
    td.appendChild(input);
    input.focus();

    $(input).blur(() => {
      td.textContent = td.firstChild.value;
      td.classList.remove("edit-td");
    });
  }
}
