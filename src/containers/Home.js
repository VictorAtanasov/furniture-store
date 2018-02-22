import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as furnitureActions from '../actions/furnitureActions';

class Home extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            users: 0,
            furniture: 0
        }
    }

    componentWillMount(){
        this.props.furnitureStats()
            .then(() => {
                if(this.props.furniture.success){
                    console.log(this.props.furniture.users)
                    this.setState({
                        users: this.props.furniture.users,
                        furniture: this.props.furniture.furniture
                    })
                }
            })
    }

    render(){
        return(
            <div>
                <div>
                    <h2>
                        Statistics:
                    </h2>
                    <p>
                        users: {this.state.users}
                    </p>
                    <p>
                        furniture: {this.state.furniture}
                    </p>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state){
    return{
        furniture: state.furniture
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(furnitureActions, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Home)