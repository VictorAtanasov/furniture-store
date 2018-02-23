import React from 'react';
import * as furnitureActions from '../../actions/furnitureActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class FurnitureDetails extends React.Component{
    constructor(props){
        super(props);
    }

    componentWillMount(){
        this.props.getFurnitureDetails(this.props.match.params.id)
            .then(() => {
                console.log(42)
            })
    }

    render(){
        return(
            <div>
                Details
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


export default connect(mapStateToProps, mapDispatchToProps)(FurnitureDetails)