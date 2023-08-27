let tmkoc = [{name:'Tarrak',
              age: 42,
              char: 'Shailesh Lodha',
              height: "5'9"},
              {name:'Jethala',
              age: 45,
              char: 'Dilip Joshi',
              height: "5'5",},
              {name:'Babita',
              age: 35,
              char: 'Munmun Dutta',
              height: "5'8"},
              {name:'Tapu',
              age: 17,
              char: 'Bhavya Gandhi',
              height: "5'7"},
              {name:'Champak',
              age: 43,
              char: 'Amit Bhatt',
              height: "5'9"},
              {name:'Bhide',
              age: 46,
              char: 'Mandar Chandwadkar',
              height: "5'8"},
              {name:'Daya Ben',
              age: 41,
              char: 'Disha Vakani',
              height: "5'3"}
              ];

// Display the name of all characters
const displayName = tmkoc.map(ch => ch.name);
console.log(displayName);

// Get an array of objects with just name and height properties
const heightAndAge =  tmkoc.map(hna => {
    return (hna.name +" "+ hna.age +" "+ hna.height);
});
console.log(heightAndAge);

// Get the total age of all characters
let tt=0;
for(element of tmkoc){
        tt += element.age;
    }
console.log("Total age of all tmkoc characters is "+ tt);

// Get characters with age greater than 42   
const ageGreaterThan = tmkoc.filter((age) => {
    return age.age>42;
    }
);
console.log(ageGreaterThan);

//sort by name
const sortByName = tmkoc.sort((name1,name2) =>{
    if(name1.name>name2.name){
        return -1;
     }
        if(name1.name<name2.name){
        return 1;
     }
    return 0;
});
console.log(sortByName);