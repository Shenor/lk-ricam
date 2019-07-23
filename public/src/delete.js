export default function del(dataService, instance) {
  $("#delete").click(async () => {
    const body = [];
    await instance[0].chipsData.map(c => {
      body.push(c.tag);
    });
    dataService
      .deleteClient(body)
      .then(
        M.toast({
          html: `${body} были удалены!`,
          completeCallback: () => {
            window.location = "/user/0";
          }
        })
      )
      .catch(err => console.log(err));
  });
}
