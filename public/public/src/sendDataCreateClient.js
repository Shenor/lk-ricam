import DataService from '../service/DataService';

export default function sendDataCreateClient() {
    $(".btn-create").click(() => {
      const dataService = new DataService();
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
  
      body.name = $('#createModal-name').val();
      body.legalAdress = $('#createModal-legalAdress').val();
      body.actualAdress = $('#createModal-actualAdress').val();
      body.contractStatus = $('#createModal-contract-modal').val();
  
      //Table contact
      
      $(".table-body-modal-contacts-row").each((idx, element) => {
        let id = idx;
        bufferContact[idx] = [];
        $(element).children('td').children('input').each((idx, element) => {
          bufferContact[id].push(element.value);
        });
      });

      body.contact = bufferContact;
      
      //Table connect
      $(".table-body-modal-connects-row").each((idx, element) => {
        let id = idx;
        bufferConnect[idx] = [];
        $(element).children('td').children('.readble').each((idx, element) => {
          bufferConnect[id].push(element.value);
        });
      });

      //FiscalRegistr
      $(".column-fn").each((idx, element) => {
        body.fiscal[idx] = {
          fiscalRegistr: {},
          fiscalDrive: {}
        };
        body.fiscal[idx].fiscalRegistr.fiscalModel = $(element).children(".column")[0].children[1].value;
        body.fiscal[idx].fiscalRegistr.fiscalSN = $(element).children(".column")[0].children[2].children[0].children[0].children[0].value;
        body.fiscal[idx].fiscalRegistr.fiscalOfd = $(element).children(".column")[0].children[2].children[1].children[0].children[0].value;
        body.fiscal[idx].fiscalDrive.fiscalTime = $(element).children(".column")[1].children[1].children[0].children[0].children[1].value;
        body.fiscal[idx].fiscalDrive.fiscalSN = $(element).children(".column")[1].children[1].children[1].children[0].children[1].value;
        body.fiscal[idx].fiscalDrive.fiscalDate = $(element).children(".column")[1].children[2].children[0].value;     
      });
      //OFD
      $(".column-ofd").each((idx, element) => {
        body.ofd[idx] = {};
        body.ofd[idx].addressOfd = $(element).children(".column")[0].children[1].value;
        body.ofd[idx].ofdLogin = $(element).children(".column")[0].children[2].children[0].children[0].value;
        body.ofd[idx].ofdPassword = $(element).children(".column")[0].children[2].children[1].children[0].value;
        body.ofd[idx].ofdkass = $(element).children(".column")[1].children[1].children[1].children[0].children[1].value;
        body.ofd[idx].ofdTerm = $(element).children(".column")[1].children[1].children[0].children[0].children[1].value;
        body.ofd[idx].ofdTime = $(element).children(".column")[1].children[2].children[0].value;
      });

      //Barcode Scanner
      $(".column-barcodeScanner").each((idx, element) => {
        body.barcodeScanner[idx] = {};
        body.barcodeScanner[idx].scannerModel = $(element).children(".column")[0].children[1].value;
        body.barcodeScanner[idx].scannerNumber = $(element).children(".column")[1].children[1].value;
      });

      //MoneyBox
      $(".column-moneyBox").each((idx, element) => {
        body.moneyBox[idx] = {};
        body.moneyBox[idx].moneyBoxModel = $(element).children(".column")[0].children[1].value;
        body.moneyBox[idx].moneyBoxNumber = $(element).children(".column")[1].children[1].value;
      });

      //Switchboard
      $(".column-switchboard").each((idx, element) => {
        body.switchboard[idx] = {};
        body.switchboard[idx].login = $(element).children(".column")[0].children[1].children[1].value;
        body.switchboard[idx].password = $(element).children(".column")[0].children[2].children[1].value;
        body.switchboard[idx].model = $(element).children(".column")[1].children[1].children[1].value;
        body.switchboard[idx].location = $(element).children(".column")[1].children[2].children[1].value;
        body.switchboard[idx].notes = $(element).children(".column")[2].children[0].value;
      });

      //Monoblock
      $(".column-mnbk").each((idx, element) => {
        body.monoBlock[idx] = {};
        body.monoBlock[idx].model = $(element).children(".column")[0].children[1].children[0].value;
        body.monoBlock[idx].monoBlockSN = $(element).children(".column")[0].children[2].children[1].value;
        body.monoBlock[idx].hardDrive = $(element).children(".column")[0].children[3].children[0].value;
        body.monoBlock[idx].state = $(element).children(".column")[1].children[1].value;
        body.monoBlock[idx].notes = $(element).children(".column")[1].children[2].value;  
      });

      //Printer
      $(".column-prnt").each((idx, element) => {
        body.printer[idx] = {};
        body.printer[idx].printerModel = $(element).children(".column")[0].children[1].value;
        body.printer[idx].printerNumber = $(element).children(".column")[1].children[1].children[0].children[0].value;
        body.printer[idx].printerConnectionType = $(element).children(".column")[1].children[1].children[1].children[0].value;
      });
      
      //Libra
      $(".column-libra").each((idx, element) => {
        body.libra[idx] = {};
        body.libra[idx].libraModel = $(element).children(".column")[0].children[1].value;
        body.libra[idx].libraNumber = $(element).children(".column")[1].children[1].children[0].children[0].value;
        body.libra[idx].libraConnectionType = $(element).children(".column")[1].children[1].children[1].children[0].value;
      });

      body.connect = bufferConnect;
      if($(".fn-date").hasClass("error") || $('#createModal-name').val() == ''){
        $("#modal-attempt").fadeIn("slow");;
        setTimeout(() => {
          $("#modal-attempt").fadeOut("slow");}, 5000);
      } else {
        dataService.createClient(body)
          .then((res) => {
            if(res.error){
              $("#notificationError").fadeIn("slow");
              $("#notificationError").fadeOut(1500);
            } else {
              $(".modal").removeClass("active");
              $("#notificationCreate").fadeIn("slow");
              setTimeout(() => {location.href=`/user/${res.data}`}, 2000);
            }
        });   
      }       
  });
}