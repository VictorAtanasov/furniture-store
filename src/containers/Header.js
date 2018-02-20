import React from 'react';
import {Link} from 'react-router-dom';

export default class Header extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <Link to='/'>Home</Link>
                <Link to='/register'>Register</Link>
                <Link to='/login'>Login</Link>
            </div>
        )
    }
}