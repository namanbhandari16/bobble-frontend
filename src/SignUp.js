import React from 'react';
import {Redirect} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import './SignUp.css'
import axios from 'axios'
class SignUp extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            first_name:'',
            last_name:'',
            pic:''
        };
        this.facebookSDK = this.facebookSDK.bind(this);
        this.checkLoginState = this.checkLoginState.bind(this);
      }
      resetForm() {
        this.setState({
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        })
    }

    onSubmithandler = (event) => {
        event.preventDefault();
        const { firstName, lastName, email, password } = this.state;

        let templateParams = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password
        }

        //Posting data on API

        fetch("https://reqres.in/api/register", { //Using fetch method
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(templateParams)

        }).then(result => result.json()).then(result => {
            //Checking if the result has thrown an error or not
            if (!result.error) {
                alert(`Welcome, ${templateParams.first_name}! Your Id is ${result.id} and tokenNo is ${result.token}`)
            } else {
                alert(result.error);
            }
        });
        //reseting the form after user clicks signup
        this.resetForm()

    }

    //When the user types in the form, the changes will be displayed by changing
    //the state 
    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    facebookSDK(){
       window.fbAsyncInit = function() {
            //console.log(this.FB);
            window.FB.init({
                appId      : '337520837439623',
                cookie     : true,
                xfbml      : true,
                version    : 'v8.0'
              });    
            console.log(this.FB); 
            //FB.AppEvents.logPageView();                 
          };
          (function(d, s, id){
             var js, fjs = d.getElementsByTagName(s)[0];
             if (d.getElementById(id)) {return;}
             js = d.createElement(s); js.id = id;
             js.src = "https://connect.facebook.net/en_US/sdk.js";
             fjs.parentNode.insertBefore(js, fjs);
           }(document, 'script', 'facebook-jssdk'));
    }

    componentDidMount(){
        this.facebookSDK();
    }
    
    async checkLoginState(){
        window.FB.getLoginStatus(function(response) {
          console.log(response);
        //   if (response.status === 'connected') {
        //     console.log(response)
        //   } else{
          window.FB.login(function(res){
            console.log(res)
            window.FB.api('/me', {locale: 'en_US', fields: 'id,first_name,last_name,picture'},
    function (res) {
        console.log(res);
        var user={
            first_name:res.first_name,
            last_name:res.last_name,
            pic:res.picture.data.url
        };
        alert("User Logged in.\n Details in console.\nName: "+user.first_name+" "+user.last_name)
        
    })}
        );
    });
  
    }
    /*
    handleSubmit(e){
        e.preventDefault()
        console.log(this.state)
        axios.post('https://reqres.in/api/users',this.state)
        .then(response=>{
          console.log(response)
          
           this.setState({ 
            fname:response.data.fname,
            lname:response.data.lname,
            email:response.data.email,
            password: response.data.password,
            status:response.status,
            loggedInStatus:'logged in',
            });
            
            console.log(this.state)
            this.props.history.push("/dashboard")
            
        })
        .catch(error=>{
          console.log(error)
        })
    }*/

    render(){
        return(
            <div>
                {/* <button onClick={this.checkLoginState} style={{backgroundColor:'#5890FF', color:'white', border:'none', padding:'10px', margin:'100px'}}>Sign Up with Facebook</button> */}

                <div class="wrapper">
                <div className="SignupBox">
                    {/* <form onSubmit={this.handleSubmit} className="form" method="post"> */}
                    
                        <h5 class="title"> SIGN UP </h5>

                        <h1 class="heading"> Create your account</h1>
                        <div class="subtitle"> <small> Lorem ipsum dolor sit amet, consectetur adipiscing elit  </small></div>

                        <div class="signupbuttons">
                            

                            <button class="loginBtn loginBtn--facebook" onClick={this.checkLoginState}>
                                Sign up with Facebook
                    </button>
                    
                        </div>
                        <center>OR</center>
                        <form className="form" onSubmit={this.onSubmithandler}>
                        <div class="form-inputs">


                            <input
                                class="firstName"
                                type="text"
                                name="firstname"
                                placeholder="First Name"
                                value={this.state.firstname}
                                onChange={this.handleChange}
                            />

                            <input
                                class="lastName"
                                type="text"
                                name="lastname"
                                placeholder="Last Name"
                                value={this.state.lastname}
                                onChange={this.handleChange}
                            />

                            <input
                                class="email"
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                value={this.state.email}
                                onChange={this.handleChange}
                            />

                            <input
                                class="password"
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={this.state.password}
                                onChange={this.handleChange}
                            />
                        </div>

                        <div className="signUp">
                            <small> By clicking Sign Up, you agree to our <a href=""> Terms of Use </a> and our <a href=""> Privacy Policy</a>.</small>
                            <button onClick={this.handleSubmit}>SIGN UP</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        );
    }
}

export default SignUp;