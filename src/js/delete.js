export default function del(dataService) {
  $("#delete").click(async (e) => {
    dataService
      .deleteClient($(e.target).attr("data-user-id"))
      .then(
        M.toast({
          html: `Клиент был успешно удален!`,
          displayLength: 2300,
          completeCallback: () => {
            window.location = "/";
          }
        })
      ) 
      .catch(err => console.log(err));
  });
}
