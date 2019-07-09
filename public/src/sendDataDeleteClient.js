import Client from './../models/client';

export default function sendDataDeleteClient() {
  $('.button-delete').click(() => {
      const client = new Client();

      let delBody = {};
      delBody.deleteName = $('#delete-name').val();

     client.deleteClient(delBody).then(() => {
        $(".form-select").load("../database", () => {
          fullData
            .filter(({name} = arr, idx) => {
              $(".main-select").append($(`<option value = ${idx}>${name}</option>`));
            });
        });
      });
      $(".modal").removeClass("active");
      $("#notificationDelete").fadeIn("slow");
      setTimeout(() => {
        location.reload()}, 3000);
    });
}