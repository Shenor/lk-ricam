import DataService from '../service/DataService'

export default function sendDataEditClient(){ 

  $(".btn-check").click(() => {   
      let body = {
          name: '',
          legalAdress: '',
          actualAdress: '',
          contractStatus: '',
          contact: [],
          connect: [],
          fiscal:[],
          ofd: [],
          barcodeScanner: [],
          moneyBox: [],
          switchboard: [],
          monoBlock: [],
          printer: [],
          libra: []
        },
        bufferContact = [],
        bufferConnect = [];

        body.name = $('#name')[0].textContent;
        body.legalAdress = $('#legal-adress')[0].textContent;
        body.actualAdress = $('#actual-adress')[0].textContent;
        body.contractStatus = $('#contract')[0].textContent;

        $("#table-contacts tr").each((idx, element) => {
            let id = idx;
          bufferContact[idx] = [];
          $(element).children('td').each((idx, element) => {
            bufferContact[id].push($(element).html());
          });
        });

        body.contact = bufferContact;

        $("#table-connect tr").each((idx, element) => {
          let id = idx;
          bufferConnect[idx] = [];
        $(element).children('td').each((idx, element) => {
          bufferConnect[id].push($(element).html());
        });
      });

      body.connect = bufferConnect;
      
      $("#table-fiscal tr").each((idx, element) => {
          body.fiscal[idx] = {
              fiscalRegistr: {},
              fiscalDrive: {}
            };

      body.fiscal[idx].fiscalRegistr.fiscalOfd = $(element).children('td')[0].textContent;
      body.fiscal[idx].fiscalRegistr.fiscalModel = $(element).children('td')[1].textContent;
      body.fiscal[idx].fiscalRegistr.fiscalSN = $(element).children('td')[2].textContent;
      body.fiscal[idx].fiscalDrive.fiscalTime = $(element).children('td')[3].textContent;
      body.fiscal[idx].fiscalDrive.fiscalSN = $(element).children('td')[4].textContent;
      body.fiscal[idx].fiscalDrive.fiscalDate = $(element).children('td')[5].textContent;
      });

      $("#table-ofd tr").each((idx, element) => {
        body.ofd[idx] = {};
        body.ofd[idx].addressOfd = $(element).children('td')[0].textContent;
        body.ofd[idx].ofdLogin = $(element).children('td')[1].textContent;
        body.ofd[idx].ofdPassword = $(element).children('td')[2].textContent;
        body.ofd[idx].ofdkass = $(element).children('td')[3].textContent;
        body.ofd[idx].ofdTerm = $(element).children('td')[4].textContent;
        body.ofd[idx].ofdTime = $(element).children('td')[5].textContent;     
      });

      $("#table-switchboard tr").each((idx, element) => {
          body.switchboard[idx] = {};
          body.switchboard[idx].login = $(element).children('td')[0].textContent;
          body.switchboard[idx].password = $(element).children('td')[1].textContent;
          body.switchboard[idx].model = $(element).children('td')[2].textContent;
          body.switchboard[idx].location = $(element).children('td')[4].textContent;
          body.switchboard[idx].notes = $(element).children('td')[4].textContent;
          
      });

      $("#table-monoBlock tr").each((idx, element) => {
          body.monoBlock[idx] = {};
          body.monoBlock[idx].model = $(element).children('td')[0].textContent;
          body.monoBlock[idx].monoBlockSN = $(element).children('td')[1].textContent;
          body.monoBlock[idx].hardDrive = $(element).children('td')[2].textContent;
          body.monoBlock[idx].state = $(element).children('td')[3].textContent;
          body.monoBlock[idx].notes = $(element).children('td')[4].textContent;  
        });

      $("#table-moneyBox tr").each((idx, element) => {
      body.moneyBox[idx] = {};
      body.moneyBox[idx].moneyBoxModel =  $(element).children('td')[0].textContent;
      body.moneyBox[idx].moneyBoxNumber =  $(element).children('td')[1].textContent;
      });
      
      $("#table-barcodeScanner tr").each((idx, element) => {
          body.barcodeScanner[idx] = {};
          body.barcodeScanner[idx].scannerModel = $(element).children('td')[0].textContent;
          body.barcodeScanner[idx].scannerNumber = $(element).children('td')[1].textContent;
      });

      $("#table-printer tr").each((idx, element) => {
          body.printer[idx] = {};
          body.printer[idx].printerModel = $(element).children('td')[0].textContent;
          body.printer[idx].printerNumber = $(element).children('td')[1].textContent;
          body.printer[idx].printerConnectionType = $(element).children('td')[2].textContent;

      });

      $("#table-libra tr").each((idx, element) => {
          body.libra[idx] = {};
          body.libra[idx].libraModel = $(element).children('td')[0].textContent;
          body.libra[idx].libraNumber = $(element).children('td')[1].textContent;
          body.libra[idx].libraConnectionType = $(element).children('td')[2].textContent;
      });

      $("#modalConfirmEdit").addClass('active');
      
      $(".btn-save").on('click', () => {
        const dataService = new DataService();
          $("#modalConfirmEdit").removeClass('active');
          $("#notificationCreate").fadeIn("slow");
          
          dataService.editClient(body)
            .then(
              setTimeout(() => {
                location.reload() }, 2000)  
            );                            
      });
  });   
}
