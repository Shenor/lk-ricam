export default function edit(dataService) {
  $("#save").click(async () => {
    let body = {
      id: document.querySelector("#id").value,
      name: document.querySelector("#name").value,
      legalAdress: document.querySelector("#legalAdress").value,
      actualAdress: document.querySelector("#actualAdress").value,
      contractStatus: $("#contractStatus").val(),
      contact: [],
      connect: [],
      fiscal: [],
      ofd: [],
      barcodeScanner: [],
      moneyBox: [],
      switchboard: [],
      monoBlock: [],
      printer: [],
      libra: []
    };

    $("#table-contacts tr").each((idx, element) => {
      let id = idx;
      body.contact[idx] = [];
      $(element)
        .children("td")
        .each((idx, element) => {
          body.contact[id].push($(element).html());
        });
    });

    $("#table-connect tr").each((idx, element) => {
      let id = idx;
      body.connect[idx] = [];
      $(element)
        .children("td")
        .each((idx, element) => {
          body.connect[id].push($(element).html());
        });
    });

    $("#table-fiscal tr").each((idx, element) => {
      body.fiscal[idx] = {
        fiscalRegistr: {},
        fiscalDrive: {}
      };

      body.fiscal[idx].fiscalRegistr.fiscalOfd = $(element).children(
        "td"
      )[0].textContent;
      body.fiscal[idx].fiscalRegistr.fiscalModel = $(element).children(
        "td"
      )[1].textContent;
      body.fiscal[idx].fiscalRegistr.fiscalSN = $(element).children(
        "td"
      )[2].textContent;
      body.fiscal[idx].fiscalDrive.fiscalTime = $(element).children(
        "td"
      )[3].textContent;
      body.fiscal[idx].fiscalDrive.fiscalSN = $(element).children(
        "td"
      )[4].textContent;
      body.fiscal[idx].fiscalDrive.fiscalDate = $(element).children(
        "td"
      )[5].textContent;
    });

    $("#table-ofd tr").each((idx, element) => {
      body.ofd[idx] = {};
      body.ofd[idx].addressOfd = $(element).children("td")[0].textContent;
      body.ofd[idx].ofdLogin = $(element).children("td")[1].textContent;
      body.ofd[idx].ofdPassword = $(element).children("td")[2].textContent;
      body.ofd[idx].ofdkass = $(element).children("td")[3].textContent;
      body.ofd[idx].ofdTerm = $(element).children("td")[4].textContent;
      body.ofd[idx].ofdTime = $(element).children("td")[5].textContent;
    });

    $("#table-switchboard tr").each((idx, element) => {
      body.switchboard[idx] = {};
      body.switchboard[idx].login = $(element).children("td")[0].textContent;
      body.switchboard[idx].password = $(element).children("td")[1].textContent;
      body.switchboard[idx].model = $(element).children("td")[2].textContent;
      body.switchboard[idx].location = $(element).children("td")[4].textContent;
      body.switchboard[idx].notes = $(element).children("td")[4].textContent;
    });

    $("#table-monoBlock tr").each((idx, element) => {
      body.monoBlock[idx] = {};
      body.monoBlock[idx].model = $(element).children("td")[0].textContent;
      body.monoBlock[idx].monoBlockSN = $(element).children(
        "td"
      )[1].textContent;
      body.monoBlock[idx].hardDrive = $(element).children("td")[2].textContent;
      body.monoBlock[idx].state = $(element).children("td")[3].textContent;
      body.monoBlock[idx].notes = $(element).children("td")[4].textContent;
    });

    $("#table-moneyBox tr").each((idx, element) => {
      body.moneyBox[idx] = {};
      body.moneyBox[idx].moneyBoxModel = $(element).children(
        "td"
      )[0].textContent;
      body.moneyBox[idx].moneyBoxNumber = $(element).children(
        "td"
      )[1].textContent;
    });

    $("#table-barcodeScanner tr").each((idx, element) => {
      body.barcodeScanner[idx] = {};
      body.barcodeScanner[idx].scannerModel = $(element).children(
        "td"
      )[0].textContent;
      body.barcodeScanner[idx].scannerNumber = $(element).children(
        "td"
      )[1].textContent;
    });

    $("#table-printer tr").each((idx, element) => {
      body.printer[idx] = {};
      body.printer[idx].printerModel = $(element).children("td")[0].textContent;
      body.printer[idx].printerNumber = $(element).children(
        "td"
      )[1].textContent;
      body.printer[idx].printerConnectionType = $(element).children(
        "td"
      )[2].textContent;
    });

    $("#table-libra tr").each((idx, element) => {
      body.libra[idx] = {};
      body.libra[idx].libraModel = $(element).children("td")[0].textContent;
      body.libra[idx].libraNumber = $(element).children("td")[1].textContent;
      body.libra[idx].libraConnectionType = $(element).children(
        "td"
      )[2].textContent;
    });

    dataService.editClient(body).then(data => {
      const { idx } = data;
      M.toast({
        html: `Данные успешно сохранены!`,
        completeCallback: () => {
          location.href = `/user/${idx}`;
        }
      });
    });
  });
}
