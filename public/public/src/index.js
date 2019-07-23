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
  import DataService from '../service/DataService'

document.addEventListener("DOMContentLoaded", function() {
    const dataService = new DataService(); 

    (async function main() {

    const data = await dataService.getAll();

    // Selected
    selected(data);    

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
    
    editorTD();

  })();
  });