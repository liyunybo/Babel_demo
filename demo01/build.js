const babel = require("@babel/core");

const code = `
const sayHi = () => {
    console.log('hello,Babel');
  };
  
  sayHi();

`;
const optionsObj={}
const res = babel.transform(code,optionsObj);

console.log(res)
