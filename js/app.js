

(()=>{
console.log("hello")
const version = 8.2
let nom = "Javascript"
console.log(version)
const x = null
let phone =20.00
const lang =["html","css","js", true]
console.table(lang)
const user = {
    nom :"Jake",
    prenom : "Griffin",
    age : 30,
    ville : "NY",
    pays : "USA"
    
    }

    console.log(user)
 console.table(user)
console.log(`${user.nom} : ${user.prenom}`)
console.log(lang.length) 
/*for(let i=0; i < lang.length i++){
     console.log(lang[i])
}*/
/*let i=0;
while(i < lang.length){console.log(`index ${i} : $(lang{i})  `)


*/
lang.forEach(element =>{
    console.log(Object.values(user))
    


})


//operateurs= +-*/ <> % ? ??*/
let age = 19
let annee = 2024
console.log(age% 2)
console.log(`vous etes nés en ${annee - age}`)


let prix = 55 //ht 55 * 5.5 / 100
let taxe = 5.5 //ttc

console.log(`totale ${prix * taxe /100}` )
const product=[
    {name: "car", price: 6000},
    {name: "Bike", price: 150},
    {name: "phone", price: 700},
    {name: "Watch", price: 200},
    {name: "pen", price: 8},
    {name: "bag", price: 50},
];
console.log(`${product.name}`)



}






 
)()