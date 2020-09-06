import React from 'react';
import heroku from './heroku-logo.png'
class Navbar extends React.Component{
    render(){
        return (
            <div max-height='10vh'>
               <center><img src={heroku}  width="300" height="100" /></center>

            </div>
        );
    }
}

export default Navbar;