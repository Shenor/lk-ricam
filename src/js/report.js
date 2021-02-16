import initDateFields from './../../utils/date-helper'

$(document).ready(function() {
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

});


