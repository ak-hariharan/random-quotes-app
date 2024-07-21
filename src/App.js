import './App.css';
import React from 'react';
import axios from 'axios';

class App extends React.Component{
  state = {advice: ''}

  componentDidMount(){
    this.fetchAdvice();
  }

  fetchAdvice = () =>{
    axios.get('https://api.adviceslip.com/advice')
      .then((response) =>{
        const {advice} = response.data.slip;
        //in js if you same property and value then
        //we can use only once advice : 'advice' => advice
        this.setState({advice});
      })
      .catch((error) =>{
        console.log(error);
      });
  }

  render() {
    const{advice} = this.state;
    return(
      <div className='app'>
        <div className='card'>
          <h1 className='heading'>{advice}</h1>
          <button className='button' onClick={this.fetchAdvice}>
            <span>GIVE ME ADVICE!</span>
          </button>
        </div>
      </div>
      
    );
  }
}

export default App;
