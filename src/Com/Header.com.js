import React from 'react';

class Header extends React.Component{
    render(){
        console.log(this.props);
        return(
            <div>
                <h1> Test H1 ={this.props.title}</h1>
            </div>
        )
    }
}
export default Header;