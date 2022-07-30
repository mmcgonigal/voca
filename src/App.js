import './App.css';
import Hello from  "./component/Hello";
import  "./component/Welcome"
import  "./App.module.css"

function App() {
   //  const name="mina";
   // const 네이버 = {
   //     name : "네이버",
   //     url : "https://naver.com"
   // }
  return (
    <div className="App">
      <Hello />
      <div className="box" >App</div>
      {/*<h1 style={{*/}
      {/*  color:"#f0f",*/}
      {/*  backgroundColor:"green",*/}
      {/*}}>*/}
      {/*  Welcome! hello {name},*/}
      {/*  <p>{2+3+4}</p>*/}
      {/*</h1>*/}
      {/*  <a href={naver.url} target="_blank">{naver.name}</a>*/}
    </div>
  );
}

export default App;
