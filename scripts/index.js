console.log(`There are ${characters.length} characters in the array.`);

// How many characters names start with "A"?
let namesA = characters.filter(val => {
    return val.name[0] === "A";
})
console.log("Character names that start with letter A");
console.log(namesA);


// How many characters names start with "Z"?
let namesZ = characters.filter(val => {
    return val.name[0] === "Z";
})
console.log("Character names that start with letter Z");
console.log(namesZ);


// How many characters are dead?
let deadCharacters = characters.filter(val => {
    return val.died != "";
})
console.log("Characters that are dead");
console.log(deadCharacters);



// Who has the most titles?
let mostTitles = characters.sort(function(a, b) {
    return a.titles - b.titles;
});
console.log(mostTitles[0]);
console.log(mostTitles[1]);


// How many are Valyrian?
let cultureValyrian = characters.filter(val => {
    return val.culture === "Valyrian";
})
console.log("Valyrian peoples");
console.log(cultureValyrian);


// What actor plays "Hot Pie" (and don't use IMDB)?
let actorHotPie = characters.filter(val => {
    return val.name === "Hot Pie";
})
console.log("Actor who plays Hot Pie");
console.log(actorHotPie);



// How many characters are *not* in the tv show?
let notInShow = characters.filter(val => {
    return val.tvSeries[0] === "";
})
console.log("Characters not in the Show");
console.log(notInShow);



// Produce a list characters with the last name "Targaryen"
let lastNameTargaryen = characters.filter(val => {
    let check = val.name.split(' ');
    return check[1] === "Targaryen";
})
console.log("Characters with the last name Targaryen");
console.log(lastNameTargaryen);



// Create a histogram of the houses (it's the "allegiances" key)#
let histogram = characters.filter(val => {
    return ;
})
console.log("Histogram of the houses");
console.log(histogram);