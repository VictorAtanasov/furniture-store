import React from 'react';
import Input from '../../components/common/Input';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../../actions/userActions';

class Register extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: '',
            name: ''
        }

        this.inputChange = this.inputChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    inputChange(ev){
        let name = ev.target.name;
        let value = ev.target.value;
        this.setState({
            [name]: value
        });
    }

    submitForm(ev){
        ev.preventDefault();
        let data = {
            'name': this.state.name,
            'password': this.state.password,
            'email': this.state.email
        }
        this.props.registerUser(data)
            .then(() => {
                if(this.props.register.success){
                    this.props.history.push('/login')
                }
            })
        this.refs.signupForm.reset();
    }

    errorMsgs(){
        if(this.props.register.errors){
            var arr = [];
            for(var prop in this.props.register.errors){
                arr.push(<li key={prop}>{prop}: {this.props.register.errors[prop]}</li>)
            }
            return arr
        }
    }

    render(){
        return(
            <div>
                <h2>
                    Register
                </h2>
                <form ref='signupForm' onSubmit={this.submitForm}>
                    <Input
                        type='text'
                        placeholder='Email'
                        name='email'
                        onChange={this.inputChange}
                    />
                    <Input
                        type='text'
                        placeholder='Name'
                        name='name'
                        onChange={this.inputChange}
                    />
                    <Input
                        type='password'
                        placeholder='Password'
                        name='password'
                        onChange={this.inputChange}
                    />
                    <input
                        type='submit'
                        value='Register'
                        className='btn'
                    />
                </form>
                <div className={!this.props.register.success ? 'errorMsg' : 'hidden'}>
                    <h2>{this.props.register.message}</h2>
                    <ul>{this.errorMsgs()}</ul>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state){
    return{
        register: state.register
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(userActions, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Register)