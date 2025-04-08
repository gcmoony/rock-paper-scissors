# Rock, Paper, Scissors

A simple browser game made in React.

## What does it do?

It is the game [Rock, Paper, Scissors](https://en.wikipedia.org/wiki/Rock_paper_scissors) made in React. It uses state to manage
the player and computer score, their round choices (rock, paper, or scissors),
and the game state. This was a nice project to help me learn a little more about
the complications of managing state.

What I've learned from this project is that handling state in React can be
tricky. I drafted up an idea of how the game would flow:
<img src="./game logic map.png" alt="Game logic flow chart">

Since React state updates are asynchronous, I also had to combine interesting
conditionals with useEffect, to ensure the updates occur once the state of
variables have been set.

### What I'd like to do in the future

- Implement sockets to connect with other players
- Make the UI a little more appealing

## Demo

Here's a demo of the game in action:
<img src="rock-paper-scissors-demo.gif" alt="Project preview">
