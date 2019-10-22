import React from 'react';
import './App.css';
import RandomSimpsons from './Components/RandomSimpsons'
import axios from 'axios';

const simpsonList =       
 {
  quote : "By chilling my loins I increase the chances of impregnating my wife.",
  character : "Apu Nahasapeemapetilon",
  image : "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629",
  characterDirection : "Left"
  }


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      perso : simpsonList
    };
    this.getSimpson = this.getSimpson.bind(this);
  };


getSimpson() {
  axios.get('https://quests.wilders.dev/simpsons-quotes/quotes')
  .then(response => response.data)
  .then(data =>{
    console.log(data);
    this.setState({
      perso : data[0],
    });
  });
}


  render(){
  return (
    <div className="App">
      <RandomSimpsons perso = {this.state.perso}/>
      <button type="button" onClick={this.getSimpson}>Get another Simpson</button>
    </div>
  );
  }
}

export default App;
