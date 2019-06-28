export default function createClientModal(){
    $(".icon-edit-span-contact").click(() => {
        let table = document.querySelector('#table-body-modal-contacts');
        let row = document.createElement("tr"); 
        row.className = "table-body-modal-contacts-row"
        row.innerHTML =  `<td><input class="no-border text-center form-input" type="text" placeholder="Ф.И.О"></td>
                          <td><input class="no-border text-center form-input" type="text" placeholder="Должность"></td>
                          <td><input class="no-border text-center form-input phone" type="text" placeholder="+7 (___) ___-____"></td>
                          <td><i class="icon icon-cross icon-cross-modal-contact"></i></td>`;
        table.append(row);
    });   

    $(".icon-edit-span-connect").click(() => {
        let table = document.querySelector('#table-body-modal-connects');
        let row = document.createElement("tr"); 
        row.className = "table-body-modal-connects-row"
        row.innerHTML =  `<td>
                            <select class="form-select third-select readble" id="connect-modal">
                            <option  value="AmmyAdmin">AmmyAdmin</option>
                            <option value="AnyDesk">AnyDesk</option>
                            <option value="TeamViewer">TeamViewer</option>
                            </select>
                          </td>
                          <td><input class="no-border text-center form-input readble" type="text" id="input-example-1" placeholder="ID"></td>
                          <td><input class="no-border text-center form-input readble" type="text" id="input-example-1" placeholder="Наименование"></td>
                          <td><i class="icon icon-cross icon-cross-modal-connect"></i></td>`;
        table.append(row);
    }); 
}

//Table
$("#table-body-modal-contacts").on('click', function (e) {
    let target = $(e.target).parent()[0];

    if(e.target.className.match("icon-cross-modal-contact")) { 
        $(target).parent()[0].remove();
    }
});

$("#table-body-modal-connects").on('click', function (e) {
    let target = $(e.target).parent()[0];

    if(e.target.className.match("icon-cross-modal-connect")) { 
        $(target).parent()[0].remove();
    }
});
//End table

//Placeholder
$('.cool-input__input').on("input", function(){
    if ($(this).val() == '') {
        $(this).removeClass('cool-input__input_filled');
    } else {
        $(this).addClass('cool-input__input_filled');
    }
});
//End Placeholder

//Input Mask
$(document).on('click', '.phone', () => {
    jQuery(function($){    
        $(".phone").mask("+7 (999) 999-9999");
     });
});

$(document).on('click', '.fn-date', () => {
    jQuery(function($){    
        $(".fn-date").mask("99.99.9999");
     });
});

$(".fn-date").blur(() => {
    const dateEntered = $('.fn-date').val();
    if (!moment(dateEntered,'DD-MM-YYYY').isValid()) {
        $(".fn-date").addClass("error");
    } else {
        $(".fn-date").removeClass("error");
    }
});


