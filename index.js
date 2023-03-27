const receivesAFunction=(callback)=>{
    callback();
}

var hook=0;function returnsANamedFunction (){
    return ++hook;
}
console.log(hook());

var hoo=0;function returnsAnAnonymousFunction (){
    return ++hoo;
}
console.log(hoo());
