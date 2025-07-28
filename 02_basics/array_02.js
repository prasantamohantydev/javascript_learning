const marvel_hero=["thor","ironman","Spiderman"];
const dc_heros=["superman","flash","batman"];

// marvel_hero.push(dc_heros);
// console.log(marvel_hero);
// console.log(marvel_hero[3][1]);

const all_hero=marvel_hero.concat(dc_heros);
console.log(all_hero);

const all_new_hero=[...marvel_hero,...dc_heros]
console.log(all_new_hero);

const arr=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
console.log(arr.flat(Infinity))


console.log(Array.isArray("prasanta"));

console.log(Array.from("prasanta"));


let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));