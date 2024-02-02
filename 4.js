// If a given string has either x, replace x by y. if the given string has X, replace it by Y.

const name='aaaa';
let xy='';

for(let i=0;i<name.length;i++){

    if(name[i]==='x'){
xy=xy+"y"
    }
else if(name[i]==='X'){
    xy=xy+'Y';
}
else{
    xy=xy+name[i]
}
}console.log(xy)