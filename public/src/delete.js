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
          displayLength: 2300,
          completeCallback: () => {
            window.location = "/";
          }
        })
      )
      .catch(err => console.log(err));
  });
}
