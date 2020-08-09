import './helpWindow.css'

export class HelpWindow {
    render() {
        this.app = document.getElementById('root');

        this.window = document.createElement('div');
        this.window.className = 'helpWindow--hidden';

        this.field = document.createElement('div');
        this.field.className = 'helpField';

        this.header = document.createElement('h3');
        this.header.innerText = 'Formatting rules and help'

        this.ul = document.createElement('ul');
        this.rules = ['accepted figures: line, rectangle, triangle, circle, ellipse, multiline',
            'accepted format: \n figureName -p [xCoordinate, yCoordinate]... -c rgba(0-255, 0-255, 0-255, 0-1) -b rgba(0-255, 0-255, 0-255, 0-1)',
            'you can use rgb instead of rgba, for example: rgb(0-255, 0-255, 0-255)',
            'you can also use hex format to define colors, for example: #FF0000',
            '-c defines outline color, -b defines inner figure color',
            'to draw a line you must supply two coordinates (starting and ending points), example: \n line -p [0, 0] [50, 50]',
            'to draw a rectangle you must supply two coordinates (starting and ending points of diagonal), example: \n rectangle -p [0, 0] [50, 50]',
            'to draw a triangle you must supply three coordinates (points of triangle), example: \n triangle -p [50, 300] [50, 100] [300, 100]',
            'to draw a circle you must supply one coordinate (center) and a radius, example: \n circle -p [75, 75] -r 25',
            'to draw an ellipse you must supply one coordinate (center) and two radiuses, example: \n ellipse -p [75, 75] -r1 50 -r2 25',
            'to draw a multiline you must supply two or more coordinates, example: \n multiline -p [50, 50] [400, 400], [600, 600]',
            'to draw multiple figures at once enter instructions in acceptable format line by line',
            'canvas size is 700x600',
            'full example: triangle -p [50, 300] [50, 100] [300, 100] -c rgb(0, 0, 255) -b rgba(255, 0, 0, 0.3)'
        ]

        this.button = document.createElement('button');
        this.button.innerText = 'Ok';

        this.thanks = document.createElement('div');
        this.thanks.innerText = 'Thanks for using this app!'

        this.rules.forEach(rule => {
            const li = document.createElement('li');
            li.innerText = `${rule}`
            this.ul.append(li)
        })
        this.field.append(this.header, this.ul, this.thanks, this.button);
        this.window.append(this.field)
        this.app.append(this.window);

        this.button.addEventListener('click', () => {
            this.window.className = 'helpWindow--hidden'
        })
    }
}