export default function editorTD() {
    $('.main-table').on('click', (event) => {
        let target = event.target;
        
        if (target.nodeName == 'TD') {
          console.log(target.clientWidth);
            makeTdEditable(target);
          } 

        function makeTdEditable(td) {

            td.classList.add("edit-td");
            
            const input = document.createElement('input');
            input.style.width = td.clientWidth - 8 + 'px';
            input.style.height = td.clientHeight - 16 + 'px';
            input.style.border = "none";
            input.style.padding = "0";
            input.className = 'text-center form-input edit-input';
            input.value = td.innerHTML;
            td.innerHTML = '';
            td.appendChild(input);
            input.focus();
          }


        function finishTdEdit(td, isOk) {
            if (isOk) {
            td.innerHTML = td.firstChild.value;
            } else {
            td.innerHTML = editingTd.data;
            }
            td.classList.remove('edit-td'); // remove edit class
            editingTd = null;
        }
    });
}