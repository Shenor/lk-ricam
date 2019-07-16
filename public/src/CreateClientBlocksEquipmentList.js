export default function CreateBlocksEquipmentList() {
  $(".icon-edit-span-fn").click(() => {
   const content = $('.column-fn:first').clone();
   $('.fieldset-createModal-fn').append(content);
  });

  $(".icon-edit-span-ofd").click(() => {
    const content = $('.column-ofd:first').clone();
    $('.fieldset-createModal-ofd').append(content);
   });
  
  $(".icon-edit-span-sh").click(() => {
    const content  = $('.column-barcodeScanner:first').clone();
    $('.fieldset-createModal-sh').append(content);
  });

  $(".icon-edit-span-moneyBox").click(() => {
    const content  = $('.column-moneyBox:first').clone();
    $('.fieldset-createModal-moneyBox').append(content);
  });

  $(".icon-edit-span-com").click(() => {
    const content  = $('.column-switchboard:first').clone();
    $('.fieldset-createModal-com').append(content);
  });

  $(".icon-edit-span-mnbk").click(() => {
    const content  = $('.column-mnbk:first').clone();
    $('.fieldset-createModal-mnbk').append(content);
  });

  $(".icon-edit-span-prnt").click(() => {
    const content  = $('.column-prnt:first').clone();
    $('.fieldset-createModal-prnt').append(content);
  });

  $(".icon-edit-span-vs").click(() => {
    const content  = $('.column-libra:first').clone();
    $('.fieldset-createModal-vs').append(content);
  });

  //CreateModal-EquipmentList-Delete function
  $("#wrapper-createModal-equiequpmentList").on("click", function(e) {
    let target = $(e.target).parent()[0];

    if (e.target.className.match("icon-createModal-equipmentList")) {
      $(target).remove();
    }
  });
}
