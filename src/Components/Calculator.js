import React from"react"
import Calculate from"./calculation"

let number1 = "";
let ok = "";
let operator ="";
let number2 = "";
class Calculator extends React.Component{
    constructor(){
        super();
        // nr is the first number nr2 is the second number op is the operator(- + etc) finish is the result verify is for the conditional rendering
        this.state = {
            nr: "",
            nr2: "",
            op: "",
            finish: "",
            verify: false 
        };
        this.handleCalculate = this.handleCalculate.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

handleCalculate(event){
    //this is how the first and second number get a value
    const {name, value} = event.target;

    if(name === "one" || name ==="two" ||  name ==="three" || name ==="four" || name ==="five" || name ==="six" || name ==="seven" || name ==="eight" || name ==="nine" || name ==="zero"){
        if(operator === ""){
        number1 = number1 + value;
        this.setState({nr: number1});
        }
        if(number1 !== "" && operator !== ""){
            number2 = number2 + value;
            this.setState({nr2: number2});
        }
    }
    // this is how the function Calculate knows when to add,subtract,divide etc the number
    if(name === "+" || name === "-" || name ==="*" || name === "/"){
        operator = name;
        this.setState({op: operator});
    }
    //This is the result of the operation
    if(number1 !== "" && operator !=="" && number2 !== ""){
    let result = Calculate(`${number1}${operator}${number2}`);
    ok = result;
    this.setState({finish: ok});
    // if the user pressed = then the number1 becomes the result and the rest of the variables reset
    if(name === "equal"){
    number1 = result;
    this.setState({nr: number1})
    number2 = "";
    this.setState({nr2: number2});
    operator = "";
    this.setState({op: operator});
    result = "";
    ok = "";
    this.setState({finish: ok});
    this.setState({verify: false});
    }
    }
//this is for the rendering of the result
if(number2 !== ""){
    this.setState({verify: true});
}
    
}
//The reset of the values
handleDelete(){
    number1 = "";
    this.setState({nr: ""});
    number2 = "";
    this.setState({nr2: ""});
    operator = "";
    this.setState({op: ""});
    ok = "";
    this.setState({finish: ""})
    this.setState({verify: false});
}




//Renders the UI 
    render(){
        let resultext = this.state.verify ? ` =  ${this.state.finish}` : " ";
        return(
            <div className="body">
                <div className="display">
                <p>{this.state.nr}</p>
                <p>{this.state.op}</p>
                <p>{this.state.nr2}</p>
                  <span className="result"><p>{resultext}</p></span>
                </div>

<div className="buttons-calculator">
  <span className="delete"><button onClick={this.handleDelete}><span className="delete-name">Delete</span></button></span>
  <span className="flexone"><button onClick={this.handleCalculate} name="one" value={"1"}>1</button>
  <button onClick={this.handleCalculate} name="two" value={"2"}>2</button>
  <button onClick={this.handleCalculate} name="three" value={"3"}>3</button>
  <button onClick={this.handleCalculate} name="four" value={"4"}>4</button></span>
  <span className="flextwo"><button onClick={this.handleCalculate} name="five" value={"5"}>5</button>
  <button onClick={this.handleCalculate} name="six" value={"6"}>6</button>
  <button onClick={this.handleCalculate} name="seven" value={"7"}>7</button>
  <button onClick={this.handleCalculate} name="eight" value={"8"}>8</button></span>
  <span className="flexthree"><button onClick={this.handleCalculate} name="nine" value={"9"}>9</button>
  <button onClick={this.handleCalculate} name="zero" value={"0"}>0</button>
  <button onClick={this.handleCalculate} name="-">-</button>
  <button onClick={this.handleCalculate} name="+">+</button></span>
  <span className="flexfour"><button onClick={this.handleCalculate} name="*">*</button>
  <button onClick={this.handleCalculate} name="/">/</button>
  <button onClick={this.handleCalculate} name="equal">=</button></span>
</div>
            </div>
        );
    };
};

export default Calculator;