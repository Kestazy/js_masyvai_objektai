let prekes = ["duona", "kamuolys", "bulka", "telefonas", "duona", "saldytuvas", "mikrobangine", "obuoliai", "bulka", "langai", "telefonas", "duona"];

// savybe - property
console.log(prekes.length);

// gauta nauja preke
prekes.push("drakonas");
console.log(prekes);

// metodas - funkcija - map()
// atspauzdinti visa prekiu sarasa
prekes.map((preke, index)=>{
    console.log('///////////');
    console.log(`${index + 1} prekes pavadinimas: ${preke}`);
});

// filter eina per visa masyva nesustodamas ir atrenka atitikusius salyga
let isrusiuotosPrekes = prekes.filter(preke => preke === "duona");
console.log(isrusiuotosPrekes);

// sort(fn) rykiavimas alfabete
prekes.sort();
console.log(prekes);

// sukurti masyva unikalios prekes

const kitaPrekiuGrupe = [];
// preke = parametras
prekes.map((preke)=>{
    if (kitaPrekiuGrupe.indexOf(preke) === -1) {
        kitaPrekiuGrupe.push(preke);
    }
});

console.log(kitaPrekiuGrupe);

// dvieju dimensiju metodas
const klasiokai = [
    ["jolita", "zp20/1", 1, "kunciene@gmail"],
    ["Linas", "zp21/1", 2, "linas@gmail"],
    ["Kostas", "zp20/1", 10, "kostas@gmail"],
    ["Andrius", "zp20/2", 6, "andrius@gmail"]
]

console.log(klasiokai[2][3]);

