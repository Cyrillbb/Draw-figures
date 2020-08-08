export class State {
    constructor() {
        this.figures = [];
        this.acceptedFigures = ['line', 'rectangle', 'triangle', 'circle', 'ellipse'];
    }
    //method for adding figures to the model
    add(input, index) {
        const figureType = this.checkFigure(input, index);
        const figureCoords = this.checkCoords(input, figureType, index);
        const options = this.checkOptions(input, index)
        this.figures.push({
            figureType,
            figureCoords,
            id: this.figures.length,
            options: options ? options : undefined
        });
        console.log(this.figures)
    }
    //method for removing the last added model
    removeLatest() {
        this.figures.pop();
        console.log(this.figures)
    }
    //method for clearing model data
    clearData() {
        this.figures = [];
    }
    // figure type validator
    checkFigure(input, index) {
        const acceptedFigures = ['line', 'rectangle', 'triangle', 'circle', 'ellipse'];
        const figureType = input.split(' ')[0];
        if (acceptedFigures.includes(figureType)) return figureType;
        else throw new SyntaxError(`Wrong figure type at line ${index}, check formatting help for more info`);
    }
    //coordinates validator
    checkCoords(input, type, index) {
        const lineCrdRegExp = /-p (\[\d+, \d+\] |\[\d+, \d+\]){2}/;
        const rectCrdRegExp = /-p (\[\d+, \d+\] |\[\d+, \d+\]){2}/;
        const triCrdRegExp = /-p (\[\d+, \d+\] |\[\d+, \d+\]){3}/;
        const crclCrdRegExp = /-p \[\d+, \d+\] -r \d+/;
        const ellCrdRegExp = /-p \[\d+, \d+\] -r1 \d+ -r2 \d+/;
        const pointsRegExp = /\[\d+, \d+\]/gm;

        switch (true) {
            case (type === 'line' && lineCrdRegExp.test(input) && input.match(pointsRegExp).length === 2): {
                return input.match(pointsRegExp).map(i => JSON.parse(i));
            }
            case (type === 'rectangle' && rectCrdRegExp.test(input) && input.match(pointsRegExp).length === 2): {
                return input.match(pointsRegExp).map(i => JSON.parse(i));
            }
            case (type === 'triangle' && triCrdRegExp.test(input) && input.match(pointsRegExp).length === 3): {
                return input.match(pointsRegExp).map(i => JSON.parse(i));
            }
            case (type === 'circle' && crclCrdRegExp.test(input)): {
                const centerCoordsRegExp = /\[\d+, \d+\]/gm;
                const radRegExp = /-r \d+/gm;
                return {
                    center: input.match(centerCoordsRegExp).map(i => JSON.parse(i))[0],
                    radius: input.match(radRegExp)[0].split(' ')[1]
                }
            }
            case (type === 'ellipse' && ellCrdRegExp.test(input)): {
                const centerCoordsRegExp = /\[\d+, \d+\]/gm;
                const rad1RegExp = /-r1 \d+/gm;
                const rad2RegExp = /-r2 \d+/gm;
                return {
                    center: input.match(centerCoordsRegExp).map(i => JSON.parse(i))[0],
                    radius1: input.match(rad1RegExp)[0].split(' ')[1],
                    radius2: input.match(rad2RegExp)[0].split(' ')[1],
                }
            }
            default: throw new SyntaxError(`Wrong coordinates formatting at line ${index}, check formatting help for more info`);
        }
    }
    // options validator
    checkOptions(input, index) {
        const optRegExp = /-c|-b/gm;
        const colorRegExp = /-c rgb\(\d+, \d+, \d+\)|-c rgba\(\d+, \d+, \d+, 0.\d+\)/;
        const bgColorRegExp = /-b rgb\(\d+, \d+, \d+\)|-b rgba\(\d+, \d+, \d+, 0.\d+\)/;
        const options = input.match(optRegExp).length;

        if (!optRegExp.test(input)) {
            return {
                color: 'black',
                bgColor: 'black'
            }
        }
        else if (options === 1 && (colorRegExp.test(input) || bgColorRegExp.test(input))) {
            return {
                color: input.match(colorRegExp) ? input.match(colorRegExp)[0].slice(3) : 'black',
                bgColor: input.match(bgColorRegExp) ? input.match(bgColorRegExp)[0].slice(3) : 'black',
            }
        }
        else if (options === 2 && colorRegExp.test(input) && bgColorRegExp.test(input)) {
            return {
                color: input.match(colorRegExp)[0].slice(3),
                bgColor:  input.match(bgColorRegExp)[0].slice(3),
            }
        }
        else if (options === 2 && (!colorRegExp.test(input) || !bgColorRegExp.test(input))) {
            throw new SyntaxError(`Wrong option formatting at line ${index}, check formatting help for more info`);
        }
        else {
            throw new SyntaxError(`Wrong option formatting at line ${index}, check formatting help for more info`);
        }
    }
}