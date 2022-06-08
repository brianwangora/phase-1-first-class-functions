const chai = ("chai");
const spies = ("chai-spies");
chai.use(spies);

function receivesAFunction (callback) {
    callback()
    const spy = () => chai.spy()
    return spy
}
receivesAFunction(spy)

function returnsANamedFunction () {
    const named = () => {}
    return named
}

function returnsAnAnonymousFunction () {
  return  (function (){

    });  
}