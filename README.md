# Draw-figures web-app

Web-app for drawing figures based on text description. This app was built with MVC pattern in mind and uses Parcel as a bundler.
To run this app locally, you can clone the repo, then install all needed packages with npm (npm i) and then run it (npm run dev).
Or you can check out this app here: https://cyrillbb.github.io/Draw-figures/.

## Features

Accepted figures: line, rectangle, triangle, circle, ellipse, multiline.

Accepted format:
"figureName -p [xCoordinate, yCoordinate]... -c rgba(0-255, 0-255, 0-255, 0-1) -b rgba(0-255, 0-255, 0-255, 0-1)".

You can use rgb instead of rgba, for example: "rgb(0-255, 0-255, 0-255)".

You can also use hex format to define colors, for example: "#FF0000".

"-c" defines outline color, "-b" defines inner figure color.

You can add -dashed option to make dashed line or outline, example:
"line -p [0, 0] [50, 50] -dashed".

To draw a line you must supply two coordinates (starting and ending points), example:
"line -p [0, 0] [50, 50]".

To draw a rectangle you must supply two coordinates (starting and ending points of diagonal), example:
"rectangle -p [0, 0] [50, 50]".

To draw a triangle you must supply three coordinates (points of triangle), example:
"triangle -p [50, 300] [50, 100] [300, 100]".

To draw a circle you must supply one coordinate (center) and a radius, example:
"circle -p [75, 75] -r 25".

To draw an ellipse you must supply one coordinate (center) and two radiuses, example:
"ellipse -p [75, 75] -r1 50 -r2 25".

To draw a multiline you must supply two or more coordinates, example:
"multiline -p [50, 50] [45, 400], [550, 500]".

To draw multiple figures at once enter instructions in acceptable format line by line
canvas size is 700x600.

Full example: "triangle -p [50, 300] [50, 100] [300, 100] -c rgb(0, 0, 255) -b rgba(255, 0, 0, 0.3)".