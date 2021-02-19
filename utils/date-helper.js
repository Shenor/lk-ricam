import { DateTime } from 'luxon';
const dateNow = DateTime.local();

export default ({selector, numColTerm, numColStartDate, outColEndDate = 'td:eq(7)', outColRelativeDate = 'td:eq(8)'}) => {
    $(selector).each((idx, row) => {
        const cellTerm = $(row).find(numColTerm).html();
        if (cellTerm == '...' || cellTerm.trim() == '') return;
        const cellStartDate = $(row).find(numColStartDate).html();
        const endDate = DateTime.fromFormat(cellStartDate, 'dd.MM.yyyy').plus({months: +cellTerm});
        const relativeDate = endDate.toRelative({locale: 'ru'});

        $(row).find(outColEndDate).html(endDate.toFormat('dd.MM.yyyy'))

        endDate >= dateNow 
        ? $(row).find(outColRelativeDate).html(relativeDate)
        : $(row).find(outColRelativeDate).html('Истекла')
    })
}
