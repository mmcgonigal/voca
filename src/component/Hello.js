'use strict'
import "./World";
import  "./Hello.module.css";

//
// const Hello = function(){
//     <p>hello</p>
// };
//
// export default Hello;

export default function Hello(){
 return (
     <div>
       <h1 style = {
           {
               color: "#f00",
               borderRight: " 12px solid #000",
               marginBottom: "50px",
               opacity: 0.5
           }
       }>Hello</h1>
         <div className="styles.box ">Hello</div>
     </div>
);

}

