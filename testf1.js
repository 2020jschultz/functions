//Declaration of main function
function main(){
  let x = 5;
  console.log(`For the next few examples let x = ${x}`);
  console.log(`1. double the number = ${double(x)}`);
  console.log(`2. adding one to the number = ${plusplus(x)}`);
  console.log(`3. the opposite reciprocal of ${x} is ${oppRecip(x)}`);
  console.log(`4. the pythagorean theorem does 5 = ${pythagorean(3,4)}?`);
  console.log(`5. the circle with radius ${x} has area = ${circleArea(x)}`);
  console.log(`6. the volume of a ${x}, ${2*x}, ${3*x} box has volume = ${boxVolume(x,2*x,3*x)}`);
  console.log(`7. ${thisIsMadness("SPARTA")}`);
  console.log(`8. ${yo("dude")}`);
  console.log(`9. ${beefDay()}`);
  console.log(`10. first test: true == ${xor(true,false)} == ${xor(false,true)}`);
  console.log(`10. second test: false == ${xor(true,true)} == ${xor(false,false)}`);

}

//execution of main function
main();
