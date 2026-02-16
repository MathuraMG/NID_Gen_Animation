# Day 1 - 16th Feb 2026

## Class Plan
- Class introduction
  - Class schedule and syllabus
  - Discussions and assignments expectations
  - Class Communication
  - Final Project - create a 2 min generative interactive animation. We'll talk more about this on Friday!
- Computational Media
  - Computation as a design material
  - How have computers changed the creation of art
- Intro to p5.js
  - [p5.editor](https://editor.p5js.org/)
  - The canvas, shapes, and colours
- Setup github and VS Code
  - [Github](http://github.com/) and [Github Desktop](https://github.com/apps/desktop)


# What is this class about?
* Why are we even in this class?
* Examples! (check Examples.md for full list)
* p5 editor + what is p5 
* First p5 sketch 
* VSCode
* Github Desktop

## Exploring p5.js
* Canvas, coordinates, setup and draw
   * In p5, the origin of the canvas is in the top left. the "x" value increases from left to right, and the "y" value increases top to down.
   * the code inside the `setup` function runs ONCE in the beginning, and the code inside the `draw` function runs forever until the sketch stops or we explicity make it stop 
   * All the code inside `setup` and `draw` should be present inside the `{` and `}`
   * Remember, the code inside the funcitons run one after the other, meaning if you were to call the `background` function in the end of draw, you would not see any of the other shapes you have as the background would cover them all

* Simple shapes in p5 - shapes we covered in class :
   * `ellipse(x,y,width,height)`  x and y refer to the center of the ellipse
   * `rect(x,y,width,height)` here, by default, x and y refer to the top left point of the rect
   * `line(x1,y1,x2,y2)`
   * `triangle(x1,y1,x2,y2,x3,y3)`
   * `arc(x,y,width,height,startAngle,endAngle)` there are more arguments that you can give to this function that will determine if the arc is a sector or a segment. Check out the reference to see all the possibilities! Also, the angles are to be given in radians by default.

* Colours in p5 - NOTE: for now, we will be sticking to using RGB colours
  * Colours can be denoted in hex values, or RGB. For the first few classes, we will stick to RGB. RGB refers to Red, Blue, and Green. They usually take values from 0 to 255. All colours can be denoted as a combination of these three. For instance red is (255,0,0). Green in (0,255,0). Teal would be (0,128,128)
  * If the RGB values are the same (i.e the colour is on the greyscale), you can denote it with just a single number. 0 is black, 128 is grey and 255 is hite
  * 'fill(r,g,b)` will fill the shapes following the instructions
  * `noFill()` will make the fill transparent
  * 'stroke(r,g,b)` will colour the outline of the shapes following the instructions
  * `noStroke()` will make the outline transparent

🔴 **[Always keep the p5 reference handy](https://p5js.org/reference/)**

* Keeping code clean
  * Always format your code! This means indenting your code, not haveing extra spaces etc. 
  * End of instructions must have semicolons. As we discussed, the code will run without them as well, but it is best practice to keep them in so that ot's easy for you when you work wiith other languages.

* What other code is there in your p5 code?
  * While p5 itself is in Javascript, it lives along with an HTML and CSS code. The CSS is just for styling - let's ignore that for now.
  * The HTML file is important - it's what makes this page available on the web.
  * The HTML file invokes the JS files and ensures that the javascript features (interactive features) are made available to the page
  * After this workshop, we will move OUT of the web editor environment. When we do that, it's important that we take all these files, and not just the js file we have been working on.

## In-Class Workshop
Create a self portrait using these shapes. Remember, a self portrait is an expression of the artist. So, feel free to play with shapes/colours, and do what the medium allows you to do! 

## Editor
* While it's great to work on online editors, it's important to work on other editors. We are going to be using VSCode as our editor. 
* Download [VSCode](https://code.visualstudio.com/) and open it up.
* Let's download our code from p5.js and move it over to the editor.

# Assignment
* Test out arcs
* Email me your Github accounts
* Read [https://intro.nyuadim.com/wp-content/uploads/2020/08/theArtOfInteractiveDesign.pdf]
* Make a composition using one single shape to convey an emotion
* Love, Joy, Sadness/Compassion, Anger, Courage, Fear, Disgust, Wonder, and Peace
