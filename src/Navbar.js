import React from 'react';
import heroku from './heroku-logo.png'
class Navbar extends React.Component{
    render(){
        return (
            <div>
               <center><img src={heroku}  width="400" height="100" /></center>
            </div>
        );
    }
}

export default Navbar;