'use strict'
import World from "./World";
import "./Hello.css";
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
               borderRight: " 2px solid #000",
               marginBottom: "30px",
               opacity: 1
           }
       }>Hello</h1>
         <div className="box">Hello</div>
     </div>
);

}

