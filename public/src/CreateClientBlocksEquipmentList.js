export default function CreateBlocksEquipmentList() {

    $(".icon-edit-span-fn").click(() => {
        let fieldsetFn = document.querySelector("#fieldset-createModal-equipmentList-fn");
        let div = document.createElement("div");

        div.className = "columns p-relative column-fn";
        div.innerHTML = `<i class="icon icon-cross icon-createModal-equipmentList-fn p-absolute"></i><div class="column col-6"><div class="divider divider-createModal-equipmentList text-center"data-content="Фискальный регистратор"></div><select class="form-select four-select fiscalModel"><option disabled selected>-Выберите модель-</option><option>Model-1</option><option>Model-2</option><option>Model-3</option></select><div class="form-group mt-2"><input class="form-input cool-input__input" type="text" placeholder="Серийный номер" id="fiscalRegistrSN"></div></div><div class="column col-6"><div class="divider divider-createModal-equipmentList text-center"data-content="Фискальный накопитель"></div><div class="columns"><div class="column col-6"><div class="input-group"><span class="input-group-addon">Срок</span><select class="form-select four-select" id="fiscalTime"><option disabled selected>...</option><option>15 мес.</option><option>36 мес.</option></select></div></div><div class="column col-6"><div class="input-group"><span class="input-group-addon">S/N</span><input type="text" class="form-input" placeholder="..." id="fiscalDriveSN"></div></div></div><div class="form-group mt-2"><input class="form-input cool-input__input" type="text" placeholder="Дата установки" id="fiscalDate"></div></div><div class="divider text-center col-12" data-content=""></div>`;
        fieldsetFn.append(div);
    });

    $(".icon-edit-span-sh").click(() => {
        let fieldsetFn = document.querySelector("#fieldset-createModal-equipmentList-sh");
        let div = document.createElement("div");

        div.className = "columns p-relative column-barcodeScanner";
        div.innerHTML = `<i class="icon icon-cross icon-createModal-equipmentList-fn p-absolute"></i><div class="column col-6"><div class="divider divider-createModal-equipmentList text-center" data-content=""></div><select class="form-select four-select"><option disabled selected>-Выберите модель-</option><option>Model-1</option><option>Model-2</option><option>Model-3</option></select></div><div class="column col-6"><div class="divider divider-createModal-equipmentList text-center" data-content=""></div><input class="form-input cool-input__input" type="text" placeholder="Кол-во"></div><div class="divider text-center col-12" data-content=""></div>`;
        fieldsetFn.append(div);
    });

    $(".icon-edit-span-moneyBox").click(() => {
        let fieldsetFn = document.querySelector("#fieldset-createModal-equipmentList-moneyBox");
        let div = document.createElement("div");

        div.className = "columns p-relative column-moneyBox";
        div.innerHTML = `<i class="icon icon-cross icon-createModal-equipmentList-fn p-absolute"></i><div class="column col-6"><div class="divider divider-createModal-equipmentList text-center" data-content=""></div><select class="form-select four-select" name="fout-select"><option disabled selected>-Выберите модель-</option><option>Model-1</option><option>Model-2</option><option>Model-3</option></select></div><div class="column col-6"><div class="divider divider-createModal-equipmentList text-center" data-content=""></div><input class="form-input cool-input__input" type="text" placeholder="Кол-во"></div><div class="divider text-center col-12" data-content=""></div>`;
        fieldsetFn.append(div);
    });

    $(".icon-edit-span-com").click(() => {
        let fieldsetFn = document.querySelector("#fieldset-createModal-equipmentList-com");
        let div = document.createElement("div");

        div.className = "columns p-relative column-switchboard";
        div.innerHTML = `<i class="icon icon-cross icon-createModal-equipmentList-fn p-absolute"></i><div class="column col-6"><div class="divider divider-createModal-equipmentList text-center"data-content="Доступ к управлению"></div><div class="input-group"><span class="input-group-addon">Логин</span><input type="text" class="form-input" placeholder="..."></div><div class="input-group mt-2"><span class="input-group-addon">Пароль</span><input type="text" class="form-input" placeholder="..."></div></div><div class="column col-6"><div class="divider divider-createModal-equipmentList text-center"data-content="Модель и локация"></div><div class="input-group"><span class="input-group-addon">Модель</span><input type="text" class="form-input" placeholder="..."></div><div class="input-group mt-2"><span class="input-group-addon">Располож.</span><input type="text" class="form-input" placeholder="..."></div></div><div class="column col-12"><textarea class="form-input mt-2" placeholder="Заметки" rows="2"></textarea></div></div><div class="divider text-center col-12" data-content=""></div>`;
        fieldsetFn.append(div);
    });

    $(".icon-edit-span-mnbk").click(() => {
        let fieldsetFn = document.querySelector("#fieldset-createModal-equipmentList-mnbk");
        let div = document.createElement("div");

        div.className = "columns p-relative column-mnbk";
        div.innerHTML = `<i class="icon icon-cross icon-createModal-equipmentList-fn p-absolute"></i><div class="column col-6"><div class="divider divider-createModal-equipmentList text-center"data-content="Доступ к управлению"></div><div class="input-group"><span class="input-group-addon">Модель</span><input type="text" class="form-input" placeholder="..."></div><div class="input-group mt-2"><span class="input-group-addon">S/N</span><input type="text" class="form-input" placeholder="..."></div><div class="input-group mt-2"><select class="form-select four-select"><option disabled selected>-- Жесткий диск--</option><option>HDD</option><option>SSD</option></select></div></div><div class="column col-6"><div class="divider divider-createModal-equipmentList text-center"data-content="Модель и локация"></div><select class="form-select four-select"><option disabled selected>-- Состояние --</option><option>Плохое</option><option>Стабильное</option><option>Хоршее</option></select><textarea class="form-input mt-2" placeholder="Заметки" rows="3"></textarea></div></div><div class="divider text-center col-12" data-content=""></div>`;
        fieldsetFn.append(div);
    });

    $(".icon-edit-span-prnt").click(() => {
        let fieldsetFn = document.querySelector("#fieldset-createModal-equipmentList-prnt");
        let div = document.createElement("div");

        div.className = "columns p-relative column-prnt";
        div.innerHTML = `<i class="icon icon-cross icon-createModal-equipmentList-fn p-absolute"></i><div class="column col-6"><div class="divider divider-createModal-equipmentList text-center" data-content=""></div><select class="form-select four-select" name="fout-select"><option disabled selected>-Выберите модель-</option><option>Model-1</option><option>Model-2</option><option>Model-3</option></select></div><div class="column col-6"><div class="divider divider-createModal-equipmentList text-center" data-content=""></div><div class="columns"><div class="column col-6"><input class="form-input cool-input__input" type="text" placeholder="Кол-во"></div><div class="column col-6"><select class="form-select four-select" name="fout-select"><option disabled selected>-Тип подкл.-</div></option><option>Model-1</option><option>Model-2</option><option>Model-3</option></select></div></div></div><div class="divider text-center col-12" data-content=""></div>`;
        fieldsetFn.append(div);
    });

    $(".icon-edit-span-vs").click(() => {
        let fieldsetFn = document.querySelector("#fieldset-createModal-equipmentList-vs");
        let div = document.createElement("div");

        div.className = "columns p-relative column-libra";
         div.innerHTML = `<i class="icon icon-cross icon-createModal-equipmentList-fn p-absolute"></i><div class="column col-6"><div class="divider divider-createModal-equipmentList text-center" data-content=""></div><select class="form-select four-select" name="fout-select"><option disabled selected>-Выберите модель-</option><option>Model-1</option><option>Model-2</option><option>Model-3</option></select></div><div class="column col-6"><div class="divider divider-createModal-equipmentList text-center" data-content=""></div><div class="columns"><div class="column col-6"><input class="form-input cool-input__input" type="text" placeholder="Кол-во"></div><div class="column col-6"><select class="form-select four-select" name="fout-select"><option disabled selected>-Тип подкл.-</option><option>USB</option><option>COM</option><option>Провод</option></select></div></div></div><div class="divider text-center col-12" data-content=""></div>`;
        fieldsetFn.append(div);
    });


    //CreateModal-equipmentList-fne
    $("#wrapper-createModal-equiequpmentList").on('click', function (e) {
        let target = $(e.target).parent()[0];

        if(e.target.className.match("icon-createModal-equipmentList-fn")) { 
            $(target).remove();
        }
    });   
}