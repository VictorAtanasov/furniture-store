import React from 'react';
import {Link} from 'react-router-dom';

export default class Header extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            user: this.props.user
        }

        this.onLogOut = this.onLogOut.bind(this);
    }

    onLogOut(){
        this.props.logOut();
        this.setState({
            user: null
        })
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            user: nextProps.user
        })
    }

    render(){
        return(
            <div className='header'>
                <Link to='/'>Home</Link>
                <Link to='/register'>Register</Link>
                <Link to='/login'>Login</Link>
                <Link to='/' onClick={this.onLogOut}>LogOut</Link>
                <div className={this.state.user != null ? 'block' : 'hidden'}>
                    <p>Hello, {this.state.user}</p>
                </div>
            </div>
        )
    }
}
