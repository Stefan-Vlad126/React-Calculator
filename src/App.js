import React from"react";
import Calculator from"./Components/Calculator";
class App extends React.Component{
  constructor(){
    super();
    this.state = {


    };

  }
  
  // This renders the Calculator module
  render(){
    return(
      <div>
        <Calculator />
      </div>
    )
  }
}

export default App;
