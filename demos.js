function f(p) {
    console.log("Inside f()");
    return (`Param was ${p}.`);
    console.log("This should be unreachable.");
}

console.log(f(22));
