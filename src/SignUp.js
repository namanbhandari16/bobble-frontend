import React from 'react';

class SignUp extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        };
        this.facebookSDK = this.facebookSDK.bind(this);
        //this.getFbUserData = this.getFbUserData.bind(this);
        this.checkLoginState = this.checkLoginState.bind(this);
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
    getData(){
        /*window.FB.api('/me', {locale: 'en_US', fields: 'id,first_name,last_name,pic'},
    function (res) {
        // this.setState(){
        //     id:res.
        // }
        console.log(res);
        
    })*/
    console.log('hello')
    }
    
    async checkLoginState(){
    //const res = await window.FB.getLoginStatus();

        // .then(
        //     function(response){
        //         console.log(response)
        //         if(response.status === 'connected')
        //             this.getData();
        //     }
        // )
        //  const response = await window.FB.getLoginStatus();
        //  console.log(response);
        window.FB.getLoginStatus(function(response) {
          console.log(response);
          if (response.status === 'connected') {
            console.log(response)
          } else{
          window.FB.login(function(response){
            console.log(response)
            }, {scope: 'name,email,picture'});
            
          }
        });
    }
    

    render(){
        console.log(this.FB);
        return(
            <div>
                <button onClick={this.checkLoginState} style={{backgroundColor:'#5890FF', color:'white', border:'none', padding:'10px', margin:'100px'}}>Sign Up with Facebook</button>
            </div>
        );
    }
}

export default SignUp;