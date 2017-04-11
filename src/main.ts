<<<<<<< HEAD
import { sayHello } from "./greet";

function showHello(divName: string , name:string){
     const elt = document.getElementById(divName);

     elt.innerText = sayHello(name);

}

showHello("greeting", "Typescript");
||||||| merged common ancestors
=======
function hello(compiler: string){
    console.log('Hello from $(compiler)');

}
hello("Typescript");
>>>>>>> a0e0ebc0092a267d55713836f5432f2d2fe50c2e
