import modals from './modals';
    import tabs from './tabs';
    import selected from './selected';
    import sendDataCreateClient from './sendDataCreateClient';
    import sendDataDeleteClient from './sendDataDeleteClient';
    import sendDataEditClient from './sendDataEditClient';
    import createClientModal from './createClientModal';
    import CreateClientBlocksEquipmentList from './CreateClientBlocksEquipmentList'
    import toggleEquipmentList from './toggleEquipmentList';
    import editorTD from './editorTD';

window.addEventListener("DOMContentLoaded", function() {

  //Ajax request get data
    //Выподняется только после успешного выполнения ajax запроса, иначе рендер происходит раньше получения данных.
    $.ajax({
      type: "POST",
      url: "http://192.168.1.25:3000/database", //192.168.1.25
      crossDomian: true,
      data: "LOLOLOLO"
    }).done((data) => {
      // console.log(data);

    let id = 0, myData, fullData;
        fullData = JSON.parse(JSON.stringify(data));
  
    myData = fullData[id];  

    //Selected
    selected(data, myData, fullData, id);

    //Modal
    modals();

    //Create new Client
    sendDataCreateClient();

    //DeleteClient
    sendDataDeleteClient();

    //EditClient
    sendDataEditClient();

    //Tabs
    tabs();

    //
    createClientModal();

    //
    CreateClientBlocksEquipmentList();

    //
    toggleEquipmentList();
    
    //
    // editablePage(fullData);
    
    editorTD();
    });
  });