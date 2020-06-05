let numbers = [10,11,12,13,14,15];

let es6_way = numbers.filter(num => num%2 == 0);
console.log(es6_way);

let naieve_way = numbers.filter(function f(num){
return num%2!=0;
})
console.log(naieve_way)

function test(param) {
    for(let i =2;i*i<=param;i++)
    {if(param%2==0) return false;}
    
    return true;
}
let old_way = numbers.filter(test) 
console.log(old_way);


let es6_map = numbers.map(x =>x+1);
console.log(es6_map);


let trad_map_one =[]; 
numbers.forEach(function(num)
{
    trad_map_one.push(num)
})
console.log(trad_map_one)

let arr2 = numbers.map(function(num){
return num*2

})
console.log(arr2)



/* var personnel = [

    {
      id: 5,
      name: "Luke Skywalker",
      pilotingScore: 98,
      shootingScore: 56,
      isForceUser: true,
    },
    {
      id: 82,
      name: "Sabine Wren",
      pilotingScore: 73,
      shootingScore: 99,
      isForceUser: false,
    },
    {
      id: 22,
      name: "Zeb Orellios",
      pilotingScore: 20,
      shootingScore: 59,
      isForceUser: false,
    },
    {
      id: 15,
      name: "Ezra Bridger",
      pilotingScore: 43,
      shootingScore: 67,
      isForceUser: true,
    },
    {
      id: 11,
      name: "Caleb Dume",
      pilotingScore: 71,
      shootingScore: 85,
      isForceUser: true,
    },
  ];
  var jediPersonnel = personnel.filter(function (person) {
    return person.id;
  });
  console.log(jediPersonnel) */


  function firstname(name)
  { return name.split(" ")}

  function trans(elem) {
    return elem%2==0?elem+1:elem-1;
}
function abc(elem){
    //slkdflkds
}

function prime(param) {
    for(let i =2;i*i<=param;i++)
    {if(param%2==0) return false;}
    
    return true;
}
 function mymap(arr,cb){
    let arr2 = [];
    for(let i=0;i<arr.length;i++){
        
        arr2.push(cb(arr[i]));
    }
    return arr2;
 }
 let myarr= mymap([1,2,3,4,5,6],trans);
 console.log(myarr)

 //Array.prototype.


 