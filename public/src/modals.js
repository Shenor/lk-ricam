
export default function modals() {

    $(".btn-plus").click(() => {
        $("#modal-create").addClass("active");
      });
    
      $(".btn-delete").click(() => {
        $("#modal-delete").addClass("active");
      });
        
      //Next
        let modalCount = $(".modal-create").length;
        let modalId = 0;

      $(".btn-next").click(() => {
        modalId < modalCount - 1 ? modalId++ : false;
        let nextModal = $(".modal-create")[modalId];
        let previousModal  = $(".modal-create")[modalId - 1];
        $(previousModal).removeClass("active");
        $(nextModal).addClass("active");
      });

      //Back
      $(".btn-back").click(() => {
        let Modal = $(".modal-create")[modalId];
        modalId--;
        let backModal = $(".modal-create")[modalId];
        
        $(Modal).removeClass("active");
        $(backModal).addClass("active");
      });


        // modale close
      $(".btn-close").click((e) => {
        $("#modal-create").removeClass("active");
        $("#modal-delete").removeClass("active");
      });
    
      $(".btn-clear").click(() => {
        $(".modal").removeClass("active");
        modalId = 0;
      });
}

