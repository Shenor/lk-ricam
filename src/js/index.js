import Choices from 'choices.js'
import DataService from './DataService'
import Edit from './edit';
import Del from './delete';
import initDateFields from './../../utils/date-helper'

M.Tabs.init(document.querySelectorAll(".tabs"));
M.Modal.init(document.querySelectorAll(".modal"));
M.FloatingActionButton.init(document.querySelectorAll('.fixed-action-btn'));
M.Collapsible.init(document.querySelectorAll('.collapsible.expandable'), {accordion: false});
M.FormSelect.init(document.querySelectorAll(".select-inp"));

document.addEventListener("DOMContentLoaded", async () => {
  const dataService = new DataService(window.location.origin); 

    const mainData = await dataService.getAll(); 
    const candidate = document.querySelector("#name");

    if (document.querySelector("#main-select")) {
      new Choices(document.querySelector("#main-select"), {
        choices: mainData.map(item => ({
          id: item._id,
          value: item._id,
          label: item.name,
          selected: candidate.value == item.name ? true : false
        })),
        shouldSortItems: true,
        itemSelectText: ''
      });

      $("#main-select").on("change", function () {
        location.href = `/users/${$("#main-select").val()}`;
      });
    }

    $('#add-legal-adress').click(event => {
      const content = `<div class="input-field col s12">
                        <i class="material-icons prefix">store</i>
                        <input placeholder="Юридический адрес(OOO/ИП)" type="text" class="legal-adress-field validate left-align">
                      </div>`
      $(event.target)
        .closest('.icon-add-adress-wrapper')
        .before(content);
    });

    $('#add-actual-adress').click(event => {
      const content = `<div class="input-field col s12">
                        <i class="material-icons prefix">location_city</i>
                        <textarea  class="materialize-textarea actual-adress-field"
                            placeholder="Фактический адрес"></textarea>
                      </div>`
      $(event.target)
        .closest('.icon-add-adress-wrapper')
        .before(content);
    });

    $('.avatar').click(() => {
      $('#inp_file').click();
    });

    Del(dataService);
    
    Edit(dataService);

    //** Fill end-date term-date fileds  */
      initDateFields({
        selector: '#table-fiscal tr, #table-ofd tr',
        numColTerm: 'td:eq(4)',
        outColEndDate: 'td:eq(6)',
        numColStartDate: 'td:eq(5)',
        outColRelativeDate: 'td:eq(7)'
      });
});

