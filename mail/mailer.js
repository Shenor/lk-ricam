// const Client = require("../database").client;
// const keys = require('../keys');
// const mail = require('./templateFn');

// const oneDay = 860000;
// moment.locale("ru");

// (() => {

//   setInterval(async () => {
//     const timeNow = moment();
//     const client = await Client.find({
//       fiscal: { $exists: true, $ne: [] }
//     }).select("name legalAdress fiscal");

//     client.forEach(async item => {
//       await item.get("fiscal").forEach(fiscal => {
//         const {
//           fiscalDrive: { fiscalTime, fiscalDate }
//         } = fiscal;

//         if (isValidate(fiscalTime, fiscalDate)) {
//           const fEndDate = moment(fiscalDate, "DD.MM.YYYY")
//             .add(fiscalTime, "month")
//             .format("DD-MM-YYYY");
//           const fLeftDate = moment(moment(fEndDate, "DD-MM-YYYY").format()); // Приводим дату к формату и переводим в UNIX формат;
//           const leftDays = fLeftDate.diff(timeNow, "days"); //Получаем количество оставшихся дней

//           if (leftDays < 14) {
//             const msg = mail(item._id, item.name, item.legalAdress, leftDays);
//              // sgMail.send(msg);
//           }
//         }
//       });
//     });
//   }, oneDay*10);

// })();

// function isValidate(fiscalTime, fiscalDate) {
//   if (
//     fiscalTime !== " " &&
//     fiscalTime !== "..." &&
//     fiscalDate !== " " &&
//     fiscalDate !== "..."
//   )
//     return true;
// }