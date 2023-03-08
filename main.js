console.log("Exercices arrow functions");

console.log("1. ARROW FUNCTIONS");
// 1. Funciones flecha
// ●	Convierte la siguiente función en una función flecha:
// function saludar() {
//   return "Hola";
// }

const greet = () => "Hola";
console.log(greet());




// ●	Convierte la siguiente función en una función flecha en línea:
// function division(a,b) {
//   return a / b;

const divide = (a,b) => a / b;
console.log(divide(10,2));



// }
// ●	Convierte la siguiente función en una función flecha:
// function miNombre(nombre) {
//   return `Mi nombre es ${nombre}`;

const myName = theName => `My name is ${theName}`;
console.log(myName("Bond, James Bond"));


// }
// ●	Convierte las siguientes funciones en funciones flecha:
// function test2() {
//   console.log("Función test 2 ejecutada.");
// }
// function test1(callback) {
//   callback();
// }	

const test2 = () => console.log("Function test 2 executed.")
const test1 = callback => callback();
test1(test2);


console.log("FOREACH");
// 2. Foreach
// ●	Utiliza la siguiente array para resolver los próximos ejercicios: 
      
let gente = [
        {
          nombre: "Jamiro",
          edad: 45,
        },
        {
          nombre: "Juan",
          edad: 35,
        },
        {
          nombre: "Paco",
          edad: 34,
        },
        {
          nombre: "Pepe",
          edad: 14,
        },
        {
          nombre: "Pilar",
          edad: 24,
        },
        {
          nombre: "Laura",
          edad: 24,
        },
        {
          nombre: "Jenny",
          edad: 10,
        },
      ];
    

// ●	Crea un array con la gente mayor de 25 años y muéstralo por consola.
// ●	Crea un array con la gente que empieza por J. 


const twentyFivePlus = [];
gente.forEach(person => {
    if(person.edad > 25) twentyFivePlus.push(person);
}
);
console.log(twentyFivePlus);


const startsWithJ = [];
gente.forEach(person => {
    if(person.nombre[0] === "J") startsWithJ.push(person);
}
);
console.log(startsWithJ);



console.log("MAP");
// 3. Map
// ●	Utilizando el array de antes crea un array con la gente mayor de 25 años y muéstralo por consola.
// ●	Crea un array con la gente que empieza por J. 

const mapping = gente.map(person => {
    if (person.edad > 25) return person;
});
console.log(mapping);


const mapping2 = gente.map(person => {
    if (person.nombre[0] === "J") return person;
});
console.log(mapping2);


// ●	Dado el siguiente array, crear otro que sea el resultado de elevar cada número a si mismo:
// const numbers = [ 4, 5, 6, 7, 8, 9, 10];
// Resultado esperado
// [256, 3125, 46656, 823543, 16777216, 387420489, 10000000000]

const numbers = [ 4, 5, 6, 7, 8, 9, 10];

const power = numbers.map(number => Math.pow(number, number));

console.log(power);



console.log("FILTER");
// 4. Filter

// / ●	Crea un segundo array que devuelva los impares
//  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const oddNos = numbers2.filter(number => number % 2 === 1);

console.log(oddNos);

    // ●	Dado el siguiente array, genera un segundo array que filtre los platos veganos y saque una sentencia como la del ejemplo:
        //   [
    //       'Que rico Tempeh me voy a comer!',
    //       'Que rica Tofu burguer me voy a comer!'
    //      ]

 const foodList = [
        {
          name: 'Tempeh',
          isVeggie: true
        },
        {
          name: 'Cheesbacon burguer',
          isVeggie: false
        },
        {
          name: 'Tofu burger',
          isVeggie: true
        },
        {
          name: 'Entrecot',
          isVeggie: false
        }
      ];


    const veggieHeaven = foodList.filter(dish => dish.isVeggie === true).map(dish => `I'm going to eat delicious ${dish.name}!`);
    console.log(veggieHeaven);
    



    console.log("REDUCE");

// 5. Reduce
// ●	Dado el siguiente array, obtén la multiplicación de todos los elementos del array:
// const numeros = [39, 2, 4, 25, 62];
// // Salida--> 483600

const numeros = [39, 2, 4, 25, 62];

const multiplied = numeros.reduce((acc, number) => acc * number);
console.log(multiplied);





console.log("EXTRAS");

// Extras
// ●	Map
// ○	Dado el siguiente array, crear un segundo array que forme frases como en el ejemplo accediendo a las propiedades del objeto proporcionado:

const staff = [
  {
    name: "Pepe",
    role: "The Boss",
    hobbies: ["leer", "ver pelis"],
  },
  {
    name: "Ana",
    role: "becaria",
    hobbies: ["nadar", "bailar"],
  },
  {
    name: "Luis",
    role: "programador",
    hobbies: ["dormir", "comprar"],
  },
  {
    name: "Carlos",
    role: "secretario",
    hobbies: ["futbol", "queso"],
  },
];

const declarations = staff.map(person => `${person.name} es ${person.role} y le gusta ${person.hobbies[0]} y ${person.hobbies[1]} `);
console.log(declarations);


// // Resultado esperado
// /*
//     [
//       'Pepe es TheBoss y le gusta leer y ver pelis',
//       'Ana es becaria y le gusta nadar y bailar',
//       'Luis es programador y le gusta dormir y comprar',
//       'Ana es becaria y le gusta nadar y bailar',
//       'Carlos es secretario y le gusta fútbol y queso'
//     ]
//  */


// ●	Dado el siguiente array, generar un segundo array que consiga generar de salida el resultado esperado:
// const foodList = ["Pizza", "Ramen", "Paella", "Entrecot"];
// //Resultado esperado
// /* [
//     'Como soy de Italia, amo comer Pizza',
//     'Como soy de Japón, amo comer Ramen',
//     'Como soy de Valencia, amo comer Paella',
//     'Aunque no como carne, el Entrecot es sabroso'
//    ]
// */

const foodList2 = ["Pizza", "Ramen", "Paella", "Entrecot"];

const stereotypes = foodList2.map(food => {
     if (food === "Pizza") {
        return `Como soy de Italia, amo comer ${food}`
     } else if (food === "Ramen") {
        return `Como soy de Japón, amo comer ${food}`
     } else if (food === "Paella") {
        return `Como soy de Valencia, amo comer ${food}`
     } else {
        return `Aunque no como carne, el ${food} es sabroso`
     }
})

console.log(stereotypes); 




// ●	Filter
// ○	Dado el siguiente array, devolver un array con los nombres de los elementos que valgan más de 300 euros
   /*
        [
          'TV Samsung,',
          'Viaje a Cancún'
        ]
      */


const inventory = [
        {
          name: 'Mobile phone',
          price: 199
        },
        {
          name: 'TV Samsung',
          price: 459
        },
        {
          name: 'Viaje a cancún',
          price: 600
        },
        {
          name: 'Mascarilla',
          price: 1
        }
      ];
   

const expensiveItems = inventory.filter(item => item.price > 300).map(item => item.name);

console.log(expensiveItems);






// ●	Reduce
// ○	Concatena todos los elementos del array con reduce para que devuelva una sola frase
// const sentenceElements = [
//     'Me',
//     'llamo',
//     /* Tu nombre aquí! */,
//     'y',
//     'quiero',
//     'sentir',
//     'la',
//     'fuerza',
//     'con',
//     'javascript'
//     ];
   
// // Resultado--> 'Me llamo XX y quiero sentir la fuerza con javascript'

const sentenceElements = [
    'Me',
    'llamo',
    'HTML BUTTON',
    'y',
    'quiero',
    'sentir',
    'la',
    'fuerza',
    'con',
    'javascript'
    ];


const sentence = sentenceElements.reduce((acc, word) => acc + " " + word);
console.log(sentence);