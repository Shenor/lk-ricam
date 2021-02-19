import initDateFields from './../../utils/date-helper'

$("#tableFN_wrapper, #tableOFD_wrapper").ready(function () {
  $("#tableFN, #tableOFD").DataTable({
    columns: [
      null,
      { orderable: false },
      null,
      { orderable: false },
      { orderable: false },
      { orderable: false },
      null,
      { orderable: false },
      { orderable: false }
    ]
  })

  initDateFields({
    selector: '#tableOFD #table-contacts tr, #tableFN #table-contacts tr',
    numColTerm: 'td:eq(5)',
    numColStartDate: 'td:eq(6)'
  });

  $('#tableFN_wrapper, #tableOFD_wrapper').click((e) => {
    const targetClass = e.target.className.trim();
    if (!targetClass.includes('paginate_button')) return;
      initDateFields({
        selector: '#tableOFD #table-contacts tr, #tableFN #table-contacts tr',
        numColTerm: 'td:eq(5)',
        numColStartDate: 'td:eq(6)'
      });
    console.log("Success")
  })

});


