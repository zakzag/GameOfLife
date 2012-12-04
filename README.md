GameOfLife
==========

Conway's game of life in JavaScript 

Description from the web (http://www.math.com/students/wonders/life/life.html):

What is the Game of Life? (by Paul Callahan)
The Game of Life (or simply Life) is not a game in the conventional sense. There are no players, and no winning or losing. Once the "pieces" are placed in the starting position, the rules determine everything that happens later. Nevertheless, Life is full of surprises! In most cases, it is impossible to look at a starting position (or pattern) and see what will happen in the future. The only way to find out is to follow the rules of the game.	
Play Life Now!


Rules of the Game of Life
Life is played on a grid of square cells--like a chess board but extending infinitely in every direction. A cell can be live or dead. A live cell is shown by putting a marker on its square. A dead cell is shown by leaving the square empty. Each cell in the grid has a neighborhood consisting of the eight cells in every direction including diagonals.

To apply one step of the rules, we count the number of live neighbors for each cell. What happens next depends on this number. 

+ A dead cell with exactly three live neighbors becomes a live cell (birth).
+ A live cell with two or three live neighbors stays alive (survival).
+ In all other cases, a cell dies or remains dead (overcrowding or loneliness).

In this implementation you will find a lot more than a simple Game of Life implementation. I am planning to implement an advanced editor, which with
you can edit the playground.

Features:
- Run simulation
- Run simulation step-by-step
- Clear playground
- Fill with randomly placed squares

Map Editor:
- Save/Load current state
- Select any rectangle area
- cut selected
- copy selected
- paste selected
- delete selected
- library for different shapes (add/remove shapes /insert shapes into map)
