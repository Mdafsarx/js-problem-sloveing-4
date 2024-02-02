// Count how many times a string has the letter a or A

const fullName='afsar MAmud RahAt';

let y=0;
for(let i=0;i<fullName.length;i++){

    if(fullName[i].includes('a')||(fullName[i].includes("A"))){
y++

    }
}console.log(y)