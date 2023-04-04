const person = {
    female: {
        Name: "Marie",
        Lastname: "Curie",
        Inventions: {
            first: "Theory of Radioactivity",
            second: "Radium",
            third: "Polonium"
        }
    },
    male: {
        Name: "Thomas",
        Surname: "Edison",
        Inventions: {
            first: "Electronic lightbulb",
            second: "Motion picture camera"
        }
    }
}

// console.log(person.male.Inventions.second);
// console.log(person.female.Name);
console.log(person.female.Inventions.third);

const groups = ["JS21", "JS22", "JS23"];

console.log(typeof(person));
console.log(typeof(groups));
console.log(Array.isArray(person));

//parasyti for cikla, isprintinti grupes

// for( let i=0; i< groups.length; i++){
//     console.log(i + " " +groups[i]);
// }

// for of - masyvams
for(let item of groups){
    console.log(item);
}

// for in ciklas
for(let item in person){
    //console.log(item); // "propertis, savybe"
    //console.log(person[item]); // "objekto reiksme"
    for(let nextItem in person[item]){
        //console.log(nextItem); // "propertys"
        //console.log(nextItem + " " +person[item][nextItem]); // "reiksme"
        if(typeof person[item][nextItem] === "object"){
            console.log(nextItem + ":");
            // console.log(typeof(person[item][nextItem]));
            //sukime papildoma tiksla
            for(let next in person[item][nextItem]){
                console.log(next + " " + person[item][nextItem][next])
            }
        } else {
            console.log(nextItem + " " + person[item][nextItem])
        }
    }
}