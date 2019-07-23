import DataService from '../service/DataService';

export default function sendDataDeleteClient() {

  $('.button-delete').click(() => {
      const dataService = new DataService();

      let delBody = {};
      delBody.deleteName = $('#delete-name').val();

      dataService.deleteClient(delBody).then(() => {
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
        location.href = '/user/0'}, 2000);
    });
}