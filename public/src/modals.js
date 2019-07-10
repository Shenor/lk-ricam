
export default function modals() {
  $(".btn-plus").click(() => {
    $("#modal-create").addClass("active");
  });

  $(".btn-delete").click(() => {
    $("#modal-delete").addClass("active");
  });

  // Modale close
  $(".btn-close").click((e) => {
    $("#modal-create").removeClass("active");
    $("#modal-delete").removeClass("active");
    $("#modalConfirmEdit").removeClass("active");
  });

  $(".btn-clear").click(() => {
    $(".modal").removeClass("active");
    modalCreateId = 0;
  });

   //------NextCreate--------//
   let modalCreateCount = $(".modal-create").length;
   let modalCreateId = 0;

 $(".btn-next").click(() => {
  modalCreateId < modalCreateCount - 1 ?  modalCreateId++ : false;
   let nextModal = $(".modal-create")[modalCreateId];
   let previousModal  = $(".modal-create")[modalCreateId - 1];
   $(previousModal).removeClass("active");
   $(nextModal).addClass("active");
 });
//-----------------------//
//------BackCreate------//
 $(".btn-back").click(() => {
   let Modal = $(".modal-create")[modalCreateId];
   modalCreateId --;
   let backModal = $(".modal-create")[modalCreateId];
   
   $(Modal).removeClass("active");
   $(backModal).addClass("active");
 });

//........................///
}
