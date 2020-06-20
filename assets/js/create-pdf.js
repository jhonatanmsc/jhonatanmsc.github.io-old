// import pdfCreator

function createPDF(e) {

    var quotes = document.querySelector('.posts');

    let file = new PdfCreator('cv-jhonatan');

    file.addTitle(quotes.querySelector('#author').innerHTML, 22);

    file.addSeparator();

    file.addParagraph('50 Oito St, Timon, MA');
    file.addParagraph('65631-374, Brazil');
    file.addParagraph('Phone: +55 86 98896-9872, 98825-2523');
    file.addParagraph('e-mail: jhonmscosta@gmail.com');

    file.addSeparator();
    
    file.addParagraph('I always try to acquire new skills that will improve my performance and code quality');
    file.addParagraph('adding more value to the team project. Being challenged and keeping myself constantly');
    file.addParagraph('learning are my motivators.');

    file.addSeparator();

    file.addTitle('Experience');

    file.addParagraph('PHP Developer (intern) — Expandr 08/2019 - 12/2019');
    file.addParagraph('Software consultant (remote) — Retake 04/2019 - 05/2019');
    file.addParagraph('Python Developer (intern) — INFOG2 09/2018 - 11/2018');

    file.addSeparator();

    file.addTitle('Education');

    file.addParagraph('Analysis and Development in information Systems (undergrad) — IFPI 03/2017 - 12/2019');
    file.addParagraph('Web development technician (certificate)  — IFPI 06/2014 - 12/2015');

    file.addSeparator();

    file.addTitle('Interests');

    file.addParagraph('Bootstrap, Django, DRF, docker, PHP, Zend Framework 3, Doctrine');
    file.addParagraph('Postgres, Mysql, MongoDB, Linux.');

    file.addParagraph('English (Good notions with written English - translation. Basic oral communication)',
        'normal', 12, true, 14);

    file.addTitle(quotes.querySelector('#author').innerHTML, 22, 'bold');

    file.save();
}
