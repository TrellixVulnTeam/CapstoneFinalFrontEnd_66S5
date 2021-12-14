import React, {Component} from 'react';


class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            username:'',            
            password:''
        }
    }
    
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault();             
        this.props.loginUserCall(this.state)
    }

    render(){
        return ( 
            <div className="login">
                    <input type="text" name="username" placeholder="Enter UserName" value= {this.state.username} onChange= {this.handleChange}/>
                    <input type="password" name="password" placeholder="Enter Password" value= {this.state.password} onChange= {this.handleChange}/>
                    <button type="submit" onClick={this.handleSubmit} >Login</button>
            </div>

        );
    }
}
 
export default Login;