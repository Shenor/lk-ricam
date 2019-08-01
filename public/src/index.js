import DataService from '../service/DataService'
import Edit from './edit';
import Del from './delete';

M.Tabs.init(document.querySelectorAll(".tabs"));
M.Modal.init(document.querySelectorAll(".modal"));
M.FloatingActionButton.init(document.querySelectorAll('.fixed-action-btn'));
M.Collapsible.init(document.querySelectorAll('.collapsible.expandable'), {
  accordion: false
});
M.FormSelect.init(document.querySelector("#contractStatus"));

$("#main-select").on("change", function() {
  location.href = `/user/${$("#main-select").val()}`; 
});

document.addEventListener("DOMContentLoaded", function() {
  const dataService = new DataService(); 

  (async function main() { 
    const mainData = await dataService.getAll(); 
    const candidate = document.querySelector("#name");
    const instance = await M.Chips.init(document.querySelectorAll(".chips"), {
      autocompleteOptions: {
        data: chip(mainData),
        limit: Infinity,
        minLength: 1
      }
    });

    function chip(dataAll) {
      const data = {};
      dataAll
        .map((i) => { 
          data[`${i.name}`] = null;
         }); 
        return data;
    }

    mainData
      .map((arr, idx) => {   
        if (candidate.value === arr.name){
          $("#main-select").append($(`<option value = ${idx} selected >${arr.name}</option>`));
        } else {
          $("#main-select").append($(`<option value = ${idx}>${arr.name}</option>`));
        }
    });

    $('.avatar').click(() => {
      $('#inp_file').click();
    });

    $('#inp_file').on('change', () => {
      console.log($(this));
    });

    Del(dataService, instance);
    
    Edit(dataService);

   })();
});

