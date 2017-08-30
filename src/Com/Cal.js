import React from 'react';

class Cal extends React.Component{
    constructor(){
        super();
        this.state={name1:"", name2:''};
      }
      setage1(e){
        const age1 =e.target.value;
        this.setState({name1: age1})
      }
      setage2(e){
        const age2 =e.target.value;
        this.setState({name2: age2})
      }
    render(){
        
        return(
            <div>
                <h1> Ponit 1 = {this.state.name1}</h1>
                <input onChange={this.setage1.bind(this)} />
                <h1> Ponit 2 = {this.state.name2}</h1>
                <input onChange={this.setage2.bind(this)} />
                <h1> Ponit TO ={this.state.name1+this.state.name2}</h1>
            </div>
        )
    }
}
export default Cal;