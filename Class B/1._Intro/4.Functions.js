

function doActionWithSomeone(anyFunctionReference, name){
    anyFunctionReference(name)

}

const running = (name) => console.log(`${name} is running`);

//Anders is running .. skal printes

doActionWithSomeone(running,"Anders") //Med callback

console.log(doActionWithSomeone(running,"undefined fordi det er en void metode"));
// passing + any action of your choosing
// bonus task, implement one of them as a one liner

const passing = (name) => console.log(`${name} is passing lel`);

doActionWithSomeone( name => (console.log(`${name} is eating`)), 'lala');

const chicken = {
    sound: "glog"
}

console.log(chicken.sound); // dot notation and shows IntelliSense, (IntelliSense er forslagene når man skriver metode/objektDOT)
console.log(chicken["sound"]); // square bracket notation