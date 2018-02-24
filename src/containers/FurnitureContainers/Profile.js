import React from 'react';
import * as furnitureActions from '../../actions/furnitureActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FurnitureCard from '../../components/FurnitureCard';

class Profile extends React.Component{
    constructor(props){
        super(props);

        this.renderFurniture = this.renderFurniture.bind(this);
        this.delete = this.delete.bind(this);
    }

    delete(ev){
        this.props.deleteFurniture(ev.target.id)
    }

    renderFurniture(){
        var data = this.props.furniture.data;
        if(data[0]){
            let arr = [];
            for(let i in data){
                arr.push(
                    <div className='profile-furniture-wrapper' key={i}>
                        <FurnitureCard
                            data={data[i]}
                        />
                        <div 
                            id={data[i].id}
                            onClick={this.delete}
                            className='delete-btn'
                        >
                            Delete
                        </div>
                    </div>
                )
            }
            return arr
        } else {
            return(
                <div>
                    No Furnitures to display
                </div>
            )
        }
    }

    componentWillMount(){
        this.props.profile();
    }

    render(){
        let data = this.props.furniture.data;
        if(data){
            return(
                <div>
                    <h2>
                        Furnitures you added
                    </h2>
                    {this.renderFurniture()}
                </div>
            )
        } else{
            return(<div></div>)
        }
    }
}


function mapStateToProps(state){
    return{
        furniture: state.furniture,
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(furnitureActions, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Profile)