export default function toggleEquipmentList () {

    $(".form-legend-fiscal").click(() => {
        $(".content-fiscal").slideToggle();
      });

    $(".form-legend-moneybox").click(() => {
        $(".content-moneybox").slideToggle();
      });

    $(".form-legend-monoblock").click(() => {
        $(".content-monoblock").slideToggle();
      });
      $(".form-legend-com").click(() => {
        $(".content-com").slideToggle();
      });

    $(".form-legend-barcodeScanner").click(() => {
        $(".content-barcodeScanner").slideToggle();
      });

    $(".form-legend-print").click(() => {
        $(".content-print").slideToggle();
      });

    $(".form-legend-libra").click(() => {
        $(".content-libra").slideToggle();
      });

}