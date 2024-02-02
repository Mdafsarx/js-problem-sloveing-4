// // Capitalize Every first Letter of each word in a String

const names='hi my name is a afsar mahmud';
const names2=[];
names3=''
let nameWord=names.split(' ');

for(let i=0;i<nameWord.length;i++){

const word=nameWord[i];

const wordSplit=word.split('');
const fristLatter=wordSplit.shift('');
wordSplit.unshift(fristLatter.toUpperCase())
names2.push(wordSplit.join(''))


}

const nameJoin=names2.join(' ')
names3+=nameJoin

console.log(names3)
