console.log("hello");
console.log("Try programiz.pro");

//variable ...


//container/box - means esle kura store garna milo...
greetings = "namaste";
name = "tede";
age = ""
console.log("greeting");
console.log("name");


//reserved keywords
//const="hello"
//for="ram"
//if="sanchai"

fullname = "shyam bahadur";

eutaofficekoaddress = "balaju";

euta_office_ko_address = "sukedahra";// snake case
eutaOFFICEkoADDRESS = "ramechaap resturent"//camel case
console.log(eutaofficekoaddress);
console.log(euta_office_ko_address);
console.log(eutaOFFICEkoADDRESS);

//variable ma kk kura rakhna milxa teslai chai data types bhanxa...
productprice = 100;


issingle = false;
/*
dataTypes
1.sring;
2.number
integer
float/double
3.boolean
true
false
*/
//*varible banaune practice

//const
//let
//var sakbar use naagareko ramro

var laptopKoBrand = "asus";
console.log("laptop ko brand", laptopKoBrand)

const PI = 3.14;
console.log("pi ko value", PI)

console.log("schoolDetails");
let room = {
    color: "blue",
    doorCount: 1,
    dimenson: {
        length: {
            value: 10,
            unit: "Meter",
        },
        width: {
            value: 30,
            unit: "feet"
        },
    },
};


let courses = {
    class: "web design and development",
    classDuration: 3,
    classTypes: [" html", "css", "javascrpit", "react"],
    html: "informtion related to the user choice while creating webpage",
    css: "decoration for the site the user is creating for attractiveness",
    java: " main work for the interreact of the webpage which helps the worldwide user to surf in the wepage through the internet",
    react: "replace th error which cannot be handeled by the java script or the better version of javascript with high performance of smoothness and timesaving",

};
// class ko duration 3 xa rw class types ma html,css,java rw react padhiraxau
console.log(courses.class + " ko duration" + courses.classDuration + "rw class types" + courses.classTypes + "ma" + courses.html + courses.css + courses.java + "rw" + courses.react + "padhiraxau");


let game = {
    freeFire: "10-minute survival shooter game",
    timeDuration: 20,
    battelRoyalTypes: ["Br-ranked", "cs-ranked", "guild war", "lone wolf"],
    brRanked: "20minutes survival game play to increse your score",
    csRanked: "10min survival game certain specified map win and increase your points",
    guildWar: "play with your guild member to earn some point to score the top board in region",
    loneWolf: "play to increse your honor score",
     
     
};
//free fire ko duration 20 xarw battel royal ko types haru xan jaas madhye br ranked , cs ranked , guild war, lone wolf pardaxa


console.log( game.freeFire + "ko duration " + game.timeDuration + " xarw battel royal ko types " + game.battelRoyalTypes + " haru xan jass madhye " + game.brRanked + game.csRanked + game.guildWar + game.lonewolf);


let colors={
color:"white",
hexValue:"#00000",
};
console.log(`${colors.color} colors ko hexvalue `);

let person={
    name:"xyz",
};
person.age=12
console.log(person);

let persons=["hari","shyam"];
persons[2]="ram";
console.log(persons);

let student=["yan","bishesh"];
  age={
    yan:17,
    bisehsh:17,
  };
  hobbies={

  }
  let student1={
    age:17,
    name:"yan magar (tede)",
    hobbies:["calisthenics","battel royal",],
  };
  // yan name gareko student ko age 17 xa rw tesko hobbies chai yehi ho.
 
  console.log(`${student1.name} name gareko student ko age ${student1.age} xa rw tesko hobbies chai ${student1.hobbies[1]} ho. `);
