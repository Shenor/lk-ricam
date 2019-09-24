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
    
    makeAllSortable(); //Сортировка

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
      .sort((a, b) => a.name > b.name ? 1 : -1)
      .map((arr) => {   
        if (candidate.value === arr.name){
          $("#main-select").append($(`<option value = ${arr._id} selected >${arr.name}</option>`));
        } else {
          $("#main-select").append($(`<option value = ${arr._id}>${arr.name}</option>`));
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

//-------------Сортировка------------//

   function sortTable(table, col, reverse) {
    var tb = table.tBodies[0], // use `<tbody>` to ignore `<thead>` and `<tfoot>` rows
        tr = Array.prototype.slice.call(tb.rows, 0), // put rows into array
        i;
    reverse = -((+reverse) || -1);
    tr = tr.sort(function (a, b) { // sort rows
        return reverse // `-1 *` if want opposite order
            * (a.cells[col].textContent.trim() // using `.textContent.trim()` for test
                .localeCompare(b.cells[col].textContent.trim())
               );
    });
    for(i = 0; i < tr.length; ++i) tb.appendChild(tr[i]); // append each row in order
  }
  
  function makeSortable(table) {
    var th = table.tHead, i;
    th && (th = th.rows[0]) && (th = th.cells);
    if (th) i = th.length;
    else return; // if no `<thead>` then do nothing
    while (--i >= 0) (function (i) {
        var dir = 1;
        th[i].addEventListener('click', function () {sortTable(table, i, (dir = 1 - dir))});
    }(i));
  }
  
  function makeAllSortable(parent) {
    parent = parent || document.body;
    var t = parent.getElementsByTagName('table'), i = t.length;
    while (--i >= 0) makeSortable(t[i]);
  }
});

