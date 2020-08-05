export class State {
    constructor() {
        this.state = [];
        this.acceptedFigures = ['line', 'rectangle', 'triangle', 'circle', 'ellipse'];
    }
    add(input) {
        try {
            this.figureType = this.checkFigure(input);
            this.figureCoords = this.checkCoords(input, this.figureType);
        }
        catch (err) {
            console.log(err)
        }
    }

    checkFigure(input) {
        const acceptedFigures = ['line', 'rectangle', 'triangle', 'circle', 'ellipse'];

        const figureType = input.split(' ')[0];

        if (acceptedFigures.includes(figureType)) return figureType;

        else throw new SyntaxError('Wrong figure type, check formatting help for more info');
    }

    checkCoords(input, type) {
        const lineCrdRegExp = /-p \[\d+, \d+\] \[\d+, \d+\]/gm;
        const rectCrdRegExp = /-p \[\d+, \d+\] \[\d+, \d+\]/gm;
        const triCrdRegExp = /-p \[\d+, \d+\] \[\d+, \d+\] \[\d+, \d+\]/gm;
        const crclCrdRegExp = /-p \[\d+, \d+\] -r \d+/gm;
        const ellCrdRegExp = /-p \[\d+, \d+\] -r1 \d+ -r2 \d+/gm;

        switch (true) {
            case (type === 'line' && lineCrdRegExp.test(input)): {
                return input.match(lineCrdRegExp);
            }
            case (type === 'rectangle' && rectCrdRegExp.test(input)): {
                return input.match(rectCrdRegExp);
            }
            case (type === 'triangle' && triCrdRegExp.test(input)): {
                return input.match(triCrdRegExp);
            }
            case (type === 'circle' && crclCrdRegExp.test(input)): {
                return input.match(crclCrdRegExp);
            }
            case (type === 'ellipse' && ellCrdRegExp.test(input)): {
                return input.match(ellCrdRegExp);
            }
            default: throw new SyntaxError('Wrong coordinates formatting, check formatting help for more info');
        }
    }

    checkOptions(input) {
        const colorRegExp = /-b ((rgb)a\((\d{1,3}?,\s?){3}(1|0?\.\d+)\)|(rgb)\(\d{1,3}%?(,\s?\d{1,3}%?){2}\))/;
        const bgColorRegExop = /-c ((rgb)a\((\d{1,3}?,\s?){3}(1|0?\.\d+)\)|(rgb)\(\d{1,3}%?(,\s?\d{1,3}%?){2}\))/
    }

};

//((rgb)a\((\d{1,3}?,\s?){3}(1|0?\.\d+)\)|(rgb)\(\d{1,3}%?(,\s?\d{1,3}%?){2}\))