# odin-Calculator
This is an implementation of the Calculator project in a browser environment, created as part of my [Odin Project](https://www.theodinproject.com/) assignment for the foundation phase. This was a very challenging project to implement, but also very fullfilling to have a working calculator that I coded.

For this project I was inspired by the [HP 32S II calculator](https://www.calculator.org/calculators/Hewlett-Packard_HP_32S_II.html), which was a gift from my engineering mentor many moons ago. It is one of the best calculators I have ever owned.

[Click this link](https://thuvack.github.io/Dumis-OdinProjects/7-OdinCalculator/) to view this implementation on github pages.

## Some important lessons

- Plan your calculator layout before implementing CSS. Changing later will lead to some unnecessary grief.
- Use CSS grid for complicated placements of buttons or screen display.
- Take advantage of event bubbling to avoid too many event listeners.
- Revise your knowledge of PEMDAS/BODMAS and consistentyly apply. Be careful of [Unary functions](https://qr.ae/pvAgsb) as they need to be handled correctly within the PEMDAS/BODMAS hierarchy.
- Before creating a function, check that it is not already impelemented n Javascript. A lot of functions already exist!!
- Learn about the RPN notation, infix format, postfix format and the shunting algorithm! These are the most efficient algorithms for computer calculations.
- Be careful of Math.pow() function. It sometimes gives weird results.
- Separate your display stack to your calculation stack, in order to handle error better. 

## Licensing

- [CC-BY-SA licence](https://creativecommons.org/licenses/by-sa/4.0/)
