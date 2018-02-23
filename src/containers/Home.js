import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as furnitureActions from '../actions/furnitureActions';
import Statistics from '../components/Statistics';
import FurnitureCard from '../components/FurnitureCard';

class Home extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            users: '',
            furniture: ''
        }

        this.changePage = this.changePage.bind(this);
    }

    getFurniture(){
        
        let furnitures = this.props.furniture.data;
        if(this.props.furniture.success){
            let arr = [];
            Object.keys(furnitures).forEach((i) => {
                arr.push(
                    <FurnitureCard 
                        data={furnitures[i]} 
                        key={i}    
                    />
                )
            });
            return arr;
        }
    }

    pagination(){
        let pages = Math.ceil(this.props.stats.furniture / 10);
        let arr = [];
        for(let i = 1; i <= pages; i += 1){
            arr.push(
                <span
                    className='page-number'
                    key={i}
                    id={i}
                    onClick={this.changePage}
                >
                    {i}
                </span>
            )
        }
        return arr
    }

    changePage(ev){
        this.props.getAllFurniture(ev.target.id)
    }

    componentWillMount(){
        this.props.furnitureStats()
            .then(() => {
                if(this.props.stats.success){
                    this.setState({
                        users: this.props.stats.users,
                        furniture: this.props.stats.furniture
                    })
                }
            });
        
        this.props.getAllFurniture(1);
    }

    render(){
        return(
            <div>
                <Statistics
                    users={this.state.users}
                    furniture={this.state.furniture}
                />
                <div className='furnitures'>
                    <h2>
                        Furnitures
                    </h2>
                    {this.getFurniture()}
                </div>
                <div className='pagination'>
                    {this.pagination()}
                </div>
            </div>
        )
    }
}


function mapStateToProps(state){
    return{
        stats: state.stats,
        furniture: state.furniture
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(furnitureActions, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Home)