export class State {
    constructor() {
        this.figures = [];
        this.acceptedFigures = ['line', 'rectangle', 'triangle', 'circle', 'ellipse'];
    }
    add(input) {
        const figureType = this.checkFigure(input);
        const figureCoords = this.checkCoords(input, figureType);
        const options = this.checkOptions(input)
        this.figures.push({
            figureType,
            figureCoords,
            id: this.figures.length,
            options: options ? options : undefined
        });
        console.log(this.figures)
    }

    removeLatest() {
        this.figures.pop();
        console.log(this.figures)
    }

    clearData() {
        this.figures = [];
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
                const pointsRegExp = /\[\d+, \d+\]/gm;
                return input.match(pointsRegExp).map(i => JSON.parse(i));
            }
            case (type === 'rectangle' && rectCrdRegExp.test(input)): {
                const pointsRegExp = /\[\d+, \d+\]/gm;
                return input.match(pointsRegExp).map(i => JSON.parse(i));
            }
            case (type === 'triangle' && triCrdRegExp.test(input)): {
                const pointsRegExp = /\[\d+, \d+\]/gm;
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
            default: throw new SyntaxError('Wrong coordinates formatting, check formatting help for more info');
        }
    }

    checkOptions(input) {
        const optRegExp = /-c|-b/;
        const colorRegExp = /-c rgb\(\d+, \d+, \d+\)|-c rgba\(\d+, \d+, \d+, 0.\d+\)/;
        const bgColorRegExp = /-b rgb\(\d+, \d+, \d+\)|-b rgba\(\d+, \d+, \d+, 0.\d+\)/;
        if (optRegExp.test(input) && colorRegExp.test(input) || bgColorRegExp.test(input)) {            
            return {
                color: input.match(colorRegExp) ? input.match(colorRegExp)[0].slice(3) : 'black',
                bgColor: input.match(bgColorRegExp) ? input.match(bgColorRegExp)[0].slice(3) : 'black',
            }
        }
        else if(!optRegExp.test(input)) {
            return {
                color: 'black',
                bgColor: 'black'
            }
        }
        else {
            throw new SyntaxError('Wrong option formatting, check formatting help for more info')
        }
    }
}

//rgb\(\d+, \d+, \d+\)|rgba\(\d+, \d+, \d+, 0.\d+\)