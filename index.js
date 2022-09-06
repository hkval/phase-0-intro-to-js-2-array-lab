// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
//test one
function destructivelyAppendCat(name){
    cats.push(name)
};
//test two
function destructivelyPrependCat(name){
    cats.unshift(name)
};
//test three
function destructivelyRemoveLastCat(){
    cats.pop()
};
//test four
function destructivelyRemoveFirstCat(){
    cats.shift()
};
//test five
function appendCat(name){
    return [...cats, name]
};
//test six
function prependCat(name){
    return [name, ...cats]
};
//test seven
function removeLastCat(){
    return cats.slice(0, cats.length - 1)
};
//test eight
function removeFirstCat(){
    return cats.slice(1)
};