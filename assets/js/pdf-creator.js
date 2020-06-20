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

        // style
        this.doc = new jsPDF();
        
        this.doc.addFont('/assets/font/medium.ttf', 'medium', 'normal');
        this.doc.setFont('medium');

    }

    _newLine(lenght=7) {
        this.currentLine += lenght; // 7 is the default height of my lines

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

    addParagraph(text, style='normal', size=12, scape=true, scapeHeight=7) {
        this.doc.setFontType(style);
        this.doc.setFontSize(size);
        this.doc.text(this.startLine, this.currentLine, text);
        if (scape)
            this._newLine(scapeHeight);

        return 'text';
    }

    addSeparator(color=[158, 158, 158]) {
        this.doc.setDrawColor(...color);
        this.doc.line(189, this.currentLine, 20, this.currentLine);
        this._newLine(10);

        return true;
    }

    save() {
        this.doc.save(this.filename);
    }

 }