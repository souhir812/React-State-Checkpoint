import React, { Component } from 'react';
import './App.css';
import Profil from './component/Profil';



class App extends Component {
constructor(props){
  super(props);
  const BackgroundImagePage = () => {
    return <div className="bg" />;
  };
  
  this.state ={
    show : false,
    curDT : new Date().toLocaleString(),
  
  }
}
toggleClick=()=> this.setState({ show: !(this.state.show)});
componentDidMount(){
  setInterval(() => {this.setState({curDT : new Date().toString()})},1000)
}

  render() {
    return (
      <div className='App bg'>
      <p className='ptime'>Current Date And Time : {this.state.curDT}</p>
      <div className ={this.state.show ? "showw":"none"}>
      <Profil/>
      </div>
      <div >
      <button onClick= {this.toggleClick} className='btn'> {this.state.show ? "Hide":"Show"} Profil  </button>
        </div>
      </div>
    )
  }
}

export default App