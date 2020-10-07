import React from 'react';
//import ReactDom from'react-dom';
import './App.css';
// import Prathyu from './prathyu.js';
import Cards from './component/card.js';
import {BrowserRouter,Route} from 'react-router-dom';
import Resume from './component/Resume.js';



 // import logo from './logo.svg';
// import './App.css';
// import Header from './header.js';
// import Header1 from './header1.js';
// //import StateCom from './stateCom.js';
 
//function App() {
  //return React.createElement('h2',{style:{color:"red"}},'surya'
      
    // <div class="APP">
    //     <h1>my react app</h1>
    //     <p>prathyusha</p>
    //     <Header></Header>
    //     <Header1></Header1>
    //    {/* <StateCom></StateCom>  */}
    //     <head></head>
    //     <h2>this is second heading</h2>
    //     <h1>prathyusha</h1>
    //     <h3>{4+5}</h3>
    // </div>
    // /*<div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>*/

 // );
//}
// class App extends React.Component{
//   render(){
//       return (
//        // React.createElement('div',{id:'hai'},React.createElement('h2',null,React.createElement('p',null,'venky')))
//         //React.createElement('div',{id:'hai'},React.createElement('h2',null,'venkat'))
//         //React.createElement('div',{style:{background:'yellow'}},React.createElement('h2',null,'venkat'))
//       );
//   }
// } 


// function App()
// {
//   const x=(
//     <div>
//       <p>hai evary one</p>
//       <h4>how r u</h4>
//     </div>
//   );
//   return(ReactDom.render(x,document.getElementById('root')))

 //}

  
//  class App extends React.Component{
//    render(){
//      return(
//        <div>
//          <Prathyu name="prathyu" role="developer"></Prathyu>
//          <Prathyu name="sindhu" role="good learner"></Prathyu>
//        </div>
//      )
//    }
//  }



// class App extends React.Component{
//   render(){
//     return(
//        <div>
//          <Prathyu></Prathyu>
//        </div>
//     );
//   }
// }
class App extends React.Component{
  render(){
    return(
       <div
          className="App">
            <BrowserRouter>
                <Route exact path="/" component={Cards}/>
                <Route exact path="/resume" component={Resume}/>
            </BrowserRouter>
            {/* <Cards/> */}
       </div>
    );
  }
}

 export default App;