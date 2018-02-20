import React from 'react';
import Input from '../../components/common/Input';

export default class Login extends React.Component{
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
        console.log(this.state.email, this.state.password)
    }

    render(){
        return(
            <div>
                <h2>LogIn</h2>
                <form onSubmit={this.formSubmit}>
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
            </div>
        )
    }
}