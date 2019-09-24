const express = require('express');
const router = express.Router();
const moment = require('moment');

const Client = require('./../database');
const auth = require('../middleware/shildRoutes');

router.get('/:id', auth, async (req, res) => {
    try {
        const doc = await Client.findById(req.params.id);
        setDate(doc);
        console.log(doc);
        res.render('index', {
            doc
        });
        console.log(doc);
    } catch (error) {
        console.log(error);
        res.status(404).render('404', {
            layout: 'error',
            title: "Страница не найдена"
        });
    }
});

global.setDate = (doc) => {
    doc.fiscal.forEach((element, idx) => {
        moment.locale('ru');
        const { fiscalDrive: {fiscalTime, fiscalDate} } = element;
        if(fiscalTime && fiscalDate){
            const fEndDate = moment(fiscalDate, "DD.MM.YYYY").add(fiscalTime, "month").format("DD-MM-YYYY");
            const fLeftDate = moment(fEndDate, "DD-MM-YYYY").fromNow();
            doc.fiscal[idx].date = [];
            doc.fiscal[idx].date.fEndDate = fEndDate;
            doc.fiscal[idx].date.fLeftDate = fLeftDate;
        } else {
            return false;
        }
    });

    doc.ofd.forEach((element, idx) => {
        moment.locale('ru');
        const { ofdTerm, ofdTime } = element;
        const ofdEndDate = moment(ofdTime, "DD.MM.YYYY").add(ofdTerm, "month").format("DD-MM-YYYY");
        const ofdLeftDate = moment(ofdEndDate, "DD-MM-YYYY").fromNow();
        doc.ofd[idx].date = [];
        doc.ofd[idx].date.ofdEndDate = ofdEndDate;
        doc.ofd[idx].date.ofdLeftDate = ofdLeftDate;
    });

    return doc;
}

module.exports = router;

