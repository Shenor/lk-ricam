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
  import Client from './../models/client'

window.addEventListener("DOMContentLoaded", function() {

    const url = "http://192.168.1.25:3000";
    const client = new Client();  

    client.getAll().then((data) => {
   
    let id = 1, myData, fullData;
        fullData = JSON.parse(JSON.stringify(data));
    
    myData = fullData[id];  

    // Selected
    selected(myData, fullData, id);

    //Modal
    modals();

    //Create new Client
    sendDataCreateClient(url);

    //DeleteClient
    sendDataDeleteClient();

    //EditClient
    sendDataEditClient(url);

    //Tabs
    tabs();

    //
    createClientModal();

    //
    CreateClientBlocksEquipmentList();

    //
    toggleEquipmentList();
    
    editorTD();
    });
  });