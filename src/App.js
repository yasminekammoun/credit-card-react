import React from 'react';
import './App.css';
import Data from './component/Data';

class App extends React.Component{
  constructor(props){
  super(props)
  this.state={
    num:"",
    nom:"" ,
    date:"",
  }
  }
handlechange=e=>{
this.setState({[e.target.name]: e.target.value})
}
clearValue=number=>{
  return number.replace(/\D/g,'')
}
pureNoun=noun => {
  return noun.replace(/\d/g,'')
}
 
render(){
  return (<div className="app" >
    <Data num= {this.clearValue(this.state.num)} nom={this.pureNoun(this.state.nom)} date={this.clearValue(this.state.date)}/>
    <div className="formula">
      <input type="text"  pattern="/\d+/g" onChange={this.handlechange} name='num' placeholder="type number" 
         maxLength="16" value={this.state.num.replace(/^[a-zA-Z]$/, '')}/>
      <input type="text" onChange={this.handlechange} value={this.state.nom.replace(/^[1-9]$/, '')}  maxLength="25" name='nom' placeholder="type name"/>
      <input type="text" onChange={this.handlechange}   value={this.state.date.replace(/^[a-zA-Z]$/, '')}
      name='date' placeholder="type date" maxLength="4"/>
    </div>
  </div>

  );}
}

export default App;