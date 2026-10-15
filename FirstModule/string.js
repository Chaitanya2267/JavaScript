const name = "csw"
const repoCount = 5
console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('csw')
console.log(gameName[0]);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,1); console.log(newString);
const anotherString = gameName.slice(-1,2); console.log(anotherString);
// methods:
// trim()
// replace(obj)
// includes('str')
// slipt()