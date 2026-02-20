## Sin function
  * You can also use the sin wave to ease animations
  * TODO : make a sine wave (remember, you can use `angleMode(DEGREES)`) 
    ```
    ellipse(frameCount, 200+100*sin(frameCount*5),10);
    ```
  * TODO : use it to gradually change the colour/size in your previous sketches
  ```
  fill(255*sin(frameCount), 255*cos(frameCount),120);
  ellipse(width/2, height/2, 50*sin(frameCount))
  ```
* 

## Map function
  * Re-maps a number from one range to another.
  * For example, calling map(2, 0, 10, 0, 100) returns 20. The first three arguments set the original value to 2 and the original range from 0 to 10. The last two arguments set the target range from 0 to 100. 20's position in the target range [0, 100] is proportional to 2's position in the original range [0, 10].
  * TODO : make a ellipse move in the center even if the mouse is moving all across the canvas

## Noise function (We will cover this next week)
  * Perlin noise is a random sequence generator producing a more naturally ordered, harmonic succession of numbers compared to the standard random() function.
  * [Perlin noise reference](https://p5js.org/reference/p5/noise/)
  * TODO : Make a 1-D perlin noise space to change the size of an ellipse / make a wave
  * TODO : Make a 2-D perlin noise space to get a greyscale screen!

## Button using if else
🔴 💻 **[IN CLASS SKETCH - Make a button using if else](https://editor.p5js.org/itp42/sketches/vNxA3MhBt)**

## Get function in image
* You can use the get function in 2 ways. If you give it ONLY x and y values, it gives you the rgb value for that single pixel.
* If you give it 4 values - x, y, width, height - it will give you the pixel values of that part of the image. Meaning, you can display it as an image!
* Note: You can display a part of the image using the (image)[https://p5js.org/reference/p5/image/] function, but an easier way to do it would be using the (image.get)[https://p5js.org/reference/p5.Image/get/] function

## Sprites
* A spritesheet has various parts of a charecter animation linearly layed out.
* We can use img.get to break them up into smaller images and the store them in an array
* We can then loop through the array and display the images sequentially to create the illusion of movement
* PS - This is going to be very helpful when you are working with games.
  
🔴💻[Example - working with a spritesheet which has one animation](https://editor.p5js.org/itp42/sketches/jrDRcf2XN)

🔴💻[Example - working with a spritesheet which has multiple animations](https://editor.p5js.org/itp42/sketches/oO0Rt5_cJ)

# Assignment
* Plan out your finals. Come in with a project name, and a basic idea. Write your ideas in this document (50-100words)
* Make new assets and make them work with the spritesheets code.
* **Wrap up documentation and assignment backlog**

