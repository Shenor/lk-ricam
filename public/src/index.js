import modals from './modals';
    import tabs from './tabs';
    import selected from './selected';
    import sendDataCreateClient from './sendDataCreateClient';
    import sendDataDeleteClient from './sendDataDeleteClient';
    import createClientModal from './createClientModal';
    import CreateClientBlocksEquipmentList from './CreateClientBlocksEquipmentList'

window.addEventListener("DOMContentLoaded", function() {

  //Ajax request get data
  $.ajax({
    type: "POST",
    url: "http://localhost:3000/database", //192.168.1.25
    crossDomian: true,
    data: "LOLOLOLO"
  }).done((data) => {
    //Выподняется только после успешного выполнения ajax запроса, иначе рендер происходит раньше получения данных.
   
    //Modal
     modals();

    //Create new Client
    sendDataCreateClient();

    //DeleteClient
    sendDataDeleteClient();

    //Selected
    selected(data);

    //Tabs
    tabs();

    //
    createClientModal();

    //
    CreateClientBlocksEquipmentList();
  });
});