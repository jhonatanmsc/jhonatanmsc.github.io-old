/**
 * miniprojeto pdf creator
 * by: jhonatan
 * 
 * esse projeto tem como intuito facilitar o uso da biblioteca jsPDF
 */

 class PdfCreator {

    constructor(filename) {
        this.filename = filename;
        this.startLine = 20;
        this.currentLine = 20;
        this.endLine = 270;
        this.lineLimit = 83;

        // style
        this.doc = new jsPDF();
        this.doc.addFont('/assets/font/medium.ttf', 'medium', 'normal');
        this.doc.setFont('medium');

    }

    _newLine(length=7) {
        this.currentLine += length; // 7 is the default height of my lines

        return this.currentLine;
    }

    addTitle(text, size=14, style='bold', scape=true, scapeHeight=7) {
        this.doc.setFontType(style);
        this.doc.setFontSize(size);
        this.doc.text(this.startLine, this.currentLine, text);
        if (scape)
            this._newLine(scapeHeight);

        return true;
    }

    addText(text, style='normal', size=12, scape=true, scapeHeight=7) {
        this.doc.setFontType(style);
        this.doc.setFontSize(size);

        let splitedText = text.split(' ');
        let arrayText = [];
        let cont = 0;
        for (let p of splitedText) {
            cont += p.length;
            if (cont < this.lineLimit) {
                arrayText.push(p);
            } else {
                cont = 0;
                this.doc.text(this.startLine, this.currentLine, arrayText.join(' '));
                arrayText = [];
                this._newLine();
            }
        }
        this.doc.text(this.startLine, this.currentLine, arrayText.join(' '));

        if (scape)
            this._newLine(scapeHeight);

        return text;
    }

    addSeparator(color=[158, 158, 158]) {
        this.doc.setDrawColor(...color);
        this.doc.line(189, this.currentLine, 20, this.currentLine);
        this._newLine(10);

        return true;
    }

    addList(textList) {
        for (let text of textList) {
            this.addText(' \u2022 ' + text);
        }
    }

    save() {
        this.doc.save(this.filename);
    }

 }