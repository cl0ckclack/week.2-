import React from 'react';

class Cal extends React.Component{
    render(){
        console.log(this.props);
        return(
            <div>
                <h1> Ponit 1 ={this.props.title}</h1>
                <h1> Ponit 2 ={this.props.title}</h1>
                <h1> Ponit TO ={this.props.title}</h1>
            </div>
        )
    }
}
export default Cal;