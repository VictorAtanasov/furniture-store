import React from 'react';
import Input from '../../components/common/Input';
import * as userActions from '../../actions/userActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Login extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }

        this.inputChange = this.inputChange.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    }

    inputChange(ev){
        let name = ev.target.name;
        let value = ev.target.value;
        this.setState({
            [name]: value
        })
    }

    formSubmit(ev){
        ev.preventDefault();
        let data = {
            'email': this.state.email,
            'password': this.state.password
        }
        this.props.loginUser(data)
            .then(() => {
                if(this.props.login.success){
                    this.props.history.push('/');
                }
            });

        this.refs.loginForm.reset();
    }

    errorMsgs(){
        if(this.props.login.errors){
            var arr = [];
            for(var prop in this.props.login.errors){
                arr.push(<li key={prop}>{prop}: {this.props.login.errors[prop]}</li>)
            }
            return arr
        }
    }

    render(){
        return(
            <div>
                <h2>LogIn</h2>
                <form ref='loginForm' onSubmit={this.formSubmit}>
                    <Input
                        type='text'
                        name='email'
                        placeholder='Email'
                        onChange={this.inputChange}
                    />
                    <Input
                        type='password'
                        name='password'
                        placeholder='Password'
                        onChange={this.inputChange}
                    />
                    <input 
                        type='submit'
                        className='btn'
                        value='Submit'
                    />
                </form>
                <div className={!this.props.login.success ? 'errorMsg' : 'hidden'}>
                    <h2>{this.props.login.message}</h2>
                    <ul>{this.errorMsgs()}</ul>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state){
    return{
        login: state.register
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(userActions, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Login)