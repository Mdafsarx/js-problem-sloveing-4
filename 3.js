// Check whether a string contains all the vowels a, e, i, o, u

const names='aeiou';
const name=names.split(' ')

for(let i=0;i<name.length;i++){

 let namesWord=name[i]
    if((namesWord==='a')&&(namesWord==='e')&&(namesWord==='i')&&(namesWord==='o')&&(namesWord==='u')){
        console.log('a')
    }
    else{
        console.log('u')
    }
}