export default function selected(data) {
  const select = document.querySelector(".main-select"),
        title = document.querySelector(".panel-title");

  data
  .filter((arr, idx) => {   
    if (title.textContent === arr.name){
      $(".main-select").append($(`<option value = ${idx} selected >${arr.name}</option>`));
    }  else {
      $(".main-select").append($(`<option value = ${idx}>${arr.name}</option>`));
    }
  });

  $(".main-select").on("change", function() {
    location.href = `/user/${select.value}`;  
  });
}
