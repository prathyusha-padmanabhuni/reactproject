import React,{Component} from 'react';

// function Prathyu(props)
// {
//     return (
//         <h2>{props.name} role is:{props.role} </h2>
//     );
// }

 
// class Prathyu extends React.Component{
//     render(){
//         return(
//         <h2>{this.props.name} role is:{this.props.role} </h2>
//         );
//     }
// }


class Prathyu extends Component{
    constructor(){
      super();
      this.state={
        name:"prathyu",
        secondname:"venkat", 
        count:1
    }
      }
      changeState=()=>{
          this.setState({
              name:"hanuman",
              secondname:"kumar",
              count:this.state.count+1
              
          })
      }
    
    render(){
      return(
        <div>
           <h2>{this.state.name}</h2>
           <h1>{this.state.secondname}</h1>
           <h1>{this.state.count}</h1>
            <button onClick={this.changeState}>Click me</button>
             </div>
      );
    }
  }
export default Prathyu;