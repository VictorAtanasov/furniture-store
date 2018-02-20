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
        //console.log(this.state.name, this.state.password, this.state.name);
        let data = {
            'name': this.state.name,
            'password': this.state.password,
            'email': this.state.email
        }
        this.props.registerUser(data)
    }

    render(){
        return(
            <div>
                <h2>
                    Register
                </h2>
                <form onSubmit={this.submitForm}>
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