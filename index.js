const receivesAFunction=(callback)=>{
    callback();
}

var hook=0;function returnsANamedFunction (){
    ++hook;
    return returnsANamedFunction
}
console.log(hook());

function returnsAnAnonymousFunction (){
   const hoo=' ';
  
   return returnsAnAnonymousFunction
}
console.log(hoo());
