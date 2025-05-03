let weight = 68;
let height = 1.7;

function calculateBMI(weight, height) {
  return weight / (height * height);
}
  
let bmi = calculateBMI(weight, height);

console.log(bmi);