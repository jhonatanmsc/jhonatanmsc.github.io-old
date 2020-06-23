// imported pdfCreator

function createPDF(e) {

    var quotes = document.querySelector('.posts');

    let file = new PdfCreator('cv-jhonatan');

    file.addTitle(quotes.querySelector('#author').innerHTML, 22);

    file.addSeparator();

    file.addText('50 Oito St, Timon, MA');
    file.addText('65631-374, Brazil');
    file.addText('Phone: +55 86 98896-9872, 98825-2523');
    file.addText('e-mail: jhonmscosta@gmail.com');

    file.addSeparator();
    
    file.addText(`  I always try to acquire new skills that will improve my performance and code quality adding more value to the team project. Being challenged and keeping myself constantly learning are my motivators.`);

    file.addSeparator();

    file.addTitle('Experience');

    file.addList([
            'PHP Developer (intern) — Expandr 08/2019 - 12/2019',
            'Software consultant (remote) — Retake 04/2019 - 05/2019',
            'Python Developer (intern) — INFOG2 09/2018 - 11/2018'
        ]);

    file.addSeparator();

    file.addTitle('Education');

    file.addList([
            'Analysis and Development in information Systems (undergrad) — IFPI 03/2017 - 12/2019',
            'Web development technician (certificate)  — IFPI 06/2014 - 12/2015'
        ]);

    file.addSeparator();

    file.addTitle('Interests');

    file.addText('Bootstrap, Django, DRF, docker, PHP, Zend Framework 3, Doctrine');
    file.addText('Postgres, Mysql, MongoDB, Linux.');

    file.addText('English (Good notions with written English - translation. Basic oral communication)',
        'normal', 12, true, 14);

    file.addTitle(quotes.querySelector('#author').innerHTML, 22, 'bold');

    file.save();
}
