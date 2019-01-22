//Math Practice
//Math Practice - 1
console.log('Draw one card: ' + Math.ceil(Math.random() * 13))

//Math Practice - 2
const cards = [];
for (var i = 0; i < 3; i++) {
  cards.push(Math.ceil(Math.random() * 13));
}
console.log('Max of 3 cards: ' + Math.max(...cards));

//Math Practice - 3
const pizza13radius = 6.5;
const pizza17radius = 8.5;
const pizza13cost = 16.99;
const pizza17cost = 19.99;

const pizza13surfaceArea = Math.PI * pizza13radius * pizza13radius;
const pizza17surfaceArea = Math.PI * pizza17radius * pizza17radius;

console.log('Surface area of 13" pizza: ' + pizza13surfaceArea);
console.log('Surface area of 17" pizza: ' + pizza17surfaceArea);

//Math Practice - 4
console.log('Cost per square inch 13": ' + (pizza13cost / pizza13surfaceArea));
console.log('Cost per square inch 17": ' + (pizza17cost / pizza17surfaceArea));

//Address Line
//1
const firstName = 'Michael';
const lastName = 'Munsey';
const streetAddress = '2710 81st Ave CT E';
const city = 'Edgewood';
const state = 'WA';
const zipCode = '98371';
console.log(`\n${firstName} ${lastName}\n${streetAddress}\n${city}, ${state}  ${zipCode}`);

//2
const inputAddress = 'Michael Munsey\n2710 81st Ave CT E\nEdge wood, New Mexico 98371';
const lines = inputAddress.split('\n');
const firstName2 = lines[0].split(' ')[0];
const lastName2 = lines[0].split(' ')[1];
const streetAddress2 = lines[1];
const city2 = lines[2].split(',')[0];
const leftover = lines[2].split(',')[1].split(' ');
const zipCode2 = leftover.pop();
const state2 =  leftover.join(' ').trim();

console.log();
console.log('firstName: ' + firstName2);
console.log('lastName: ' + lastName2);
console.log('streetAddress: ' + streetAddress2);
console.log('city: ' + city2);
console.log('state: ' + state2);
console.log('zipCode: ' + zipCode2);

//Find the middle date
const startDate = new Date(2019, 0, 1);
const endDate = new Date(2019, 3, 1);
console.log('\nMiddle Date: ' + new Date((startDate.getTime() + endDate.getTime())/2));
