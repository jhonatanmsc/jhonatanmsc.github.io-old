function createPDF(e) {

    let startLine = 20;
    let currentLine = 20;
    let endLine = 270;

    var config = {              
        'fileName':'cv-jhonatan'
    };                     

    var quotes = document.querySelector('.posts');

    

    var doc = new jsPDF()
    doc.addFont('/assets/font/medium.ttf');
    doc.setFont('medium');

    doc.addImage(document.querySelector('#profile-to-pdf'), startLine, currentLine, 40, 40);

    doc.setFontType('bold');
    doc.setFontSize(22);
    doc.text(65, 60, quotes.querySelector('#author').innerHTML);

    doc.setDrawColor(158, 158, 158);
    doc.line(189, 65, startLine, 65);
    currentLine += 55;

    doc.setFontType('normal');
    doc.setFontSize(12);
    doc.text(startLine, currentLine, "50 Oito St, Timon, MA");
    currentLine += 7;
    doc.text(startLine, currentLine, "65631-374, Brazil");
    currentLine += 7;
    doc.text(startLine, currentLine, "Phone: +55 86 98896-9872, 98825-2523");
    currentLine += 7;
    doc.text(startLine, currentLine, "e-mail: jhonmscosta@gmail.com");
    currentLine += 7;

    doc.setDrawColor(158, 158, 158);
    doc.line(189, currentLine, 20, currentLine);
    currentLine += 10;
    
    doc.setFontSize(12);
    doc.text(startLine, currentLine, 'I always try to acquire new skills that will improve my performance and code quality');
    currentLine += 7;
    doc.text(startLine, currentLine, 'adding more value to the team project. Being challenged and keeping myself constantly');
    currentLine += 7;
    doc.text(startLine, currentLine, 'learning are my motivators.');
    currentLine += 7;

    doc.setDrawColor(158, 158, 158);
    doc.line(189, currentLine, 20, currentLine);
    currentLine += 10;

    doc.setFontType('bold');
    doc.setFontSize(14);
    doc.text(startLine, currentLine, 'Experience');
    currentLine += 10;

    doc.setFontType('normal');
    doc.setFontSize(12);
    doc.text(startLine, currentLine, 'PHP Developer (intern) — Expandr 08/2019 - 12/2019');
    currentLine += 7;
    doc.text(startLine, currentLine, 'Software consultant (remote) — Retake 04/2019 - 05/2019');
    currentLine += 7;
    doc.text(startLine, currentLine, 'Python Developer (intern) — INFOG2 09/2018 - 11/2018');
    currentLine += 7;

    doc.setDrawColor(158, 158, 158);
    doc.line(189, currentLine, 20, currentLine);
    currentLine += 10;

    doc.setFontType('bold');
    doc.setFontSize(14);
    doc.text(startLine, currentLine, 'Education');
    currentLine += 10;

    doc.setFontType('normal');
    doc.setFontSize(12);
    doc.text(startLine, currentLine, 'Analysis and Development in information Systems (undergrad) — IFPI 03/2017 - 12/2019');
    currentLine += 7;
    doc.text(startLine, currentLine, 'Web development technician (certificate)  — IFPI 06/2014 - 12/2015');
    currentLine += 7;

    doc.setDrawColor(158, 158, 158);
    doc.line(189, currentLine, 20, currentLine);
    currentLine += 10;

    doc.setFontType('bold');
    doc.setFontSize(14);
    doc.text(startLine, currentLine, 'Interests');
    currentLine += 10;

    doc.setFontType('normal');
    doc.setFontSize(12);
    doc.text(startLine, currentLine, 'Bootstrap, Django, DRF, docker, PHP, Zend Framework 3, Doctrine');
    currentLine += 7;
    doc.text(startLine, currentLine, 'Postgres, Mysql, MongoDB, Linux.');
    currentLine += 7;
    doc.text(startLine, currentLine, 'English (Good notions with written English - translation. Basic oral communication)');
    currentLine += 7;

    doc.setFontType('bold');
    doc.setFontSize(22);
    doc.text(50, endLine, quotes.querySelector('#author').innerHTML);

    doc.save(config.fileName);
}
