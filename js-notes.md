# Javascript Notes

## Some functions / uses

- parseFloat(), parseInt()
- +prompt("numbers only")
- typeof(variableName)
- is NaN()

## Best Practices

Internal javascript: `<script>` tags can be inserted in head and body.

External js: Normally you place the javascript code into a **external file** and load the file at the **end of the body**.

    <script src="myScript.js"></script>

To write strings, single quotes are mostly used. Double quotes can be used, but should be avoided.

### let vs. var

- var is function-scoped. Every variable declared inside the function is only accessible inside the function.
- let is block-scoped (block is anything surrounded by {}). Every variable declared inside a {} block is only accessible inside that block. const as well.

Best practice: use let over var. Use const for variables which do not change.

### Controlling loop executions

The break statement jumps out of a loop and continues executing the code after the loop.

The return keyword will also break the loop as it immediately returns some value from a loop inside a function.

The continue statement breaks only one iteration in the loop and continues with the next iteration.

## Function declarations

    function f(){
        // code
    }

    const kf = function() {
        // code
        <!-- kf function can only be called after the declaration -->
        // kf function can only be called after the declaration
    }

## Security Note

- `innerHTML` executes code, potentially `<script>` that may include malicious code if entered by the user.
- `textContent` only includes text, and therefore will not render any HTML.

## Recommend tutorials on debugging

- [Setting up JavaScript Debugging in Visual Studio Code](https://medium.com/young-coder/setting-up-javascript-debugging-in-visual-studio-code-6c5005529987)
- [Boost your JavaScript Debugging Skills With These Console Tricks](https://betterprogramming.pub/boost-your-javascript-debugging-skills-with-these-console-tricks-ab984c70298a)
- [Debugging JavaScript - Chrome DevTools 101](https://www.youtube.com/watch?v=H0XScE08hy8)
- [Chrome Dev Tools: JavaScript Debugging Reference](https://developer.chrome.com/docs/devtools/javascript/reference/)

### Console cheatsheet

- clear(): clears the console
- alert(): writes output in a popup
- prompt(): asks for input in a popup
- console.log() and console.table()
- possible to update values directly in the console using JS commands.

    prompt("Returns a string");
    +prompt("Returns a number (or NaN)");

- Number(): converts a string to a number
- The arrow key up shows you a history of your console entries
- Shift + Enter creates a new line without executing it

## Resources

### Debugging in Visual Studio Code

See <https://code.visualstudio.com/docs/editor/debugging>

Extension to provide a js playground: <https://marketplace.visualstudio.com/items?itemName=WallabyJs.quokka-vscode>

Browser dev tools also include a debugger.

### Online Resources

- <https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics>

- <https://www.w3schools.com/js/js_intro.asp>

- <https://www.joshwcomeau.com/operator-lookup/>

- <https://javascript.info/>

- <https://www.guru99.com/using-variables-in-javascript.html>

- <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_Types>

### js versions

The current version is ES2021 (12th edition), but the browsers lag behind. ES5 (2009) is the one all modern browsers understand.
Browsers implement specific features of newer ES versions all the time. Use [Caniuse](https://caniuse.com) or these [comparism tables](https://kangax.github.io/compat-table/es6/) to check for support.

### js reserved words

<https://www.w3schools.com/js/js_reserved.asp>

## js Exercises

- <https://www.w3schools.com/js/exercise_js.asp>

- <https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/>

- <https://exercism.org/>

## Javascript Unit Testing

- [An Introduction to Jasmine Unit Testing](https://www.freecodecamp.org/news/jasmine-unit-testing-tutorial-4e757c2cbf42/)
- [Jasmine: Behavior-Driven JavaScript](https://jasmine.github.io/tutorials/your_first_suite)
- [Unit Testing in JavaScript: A Tutorial](https://www.browserstack.com/guide/unit-testing-in-javascript)
