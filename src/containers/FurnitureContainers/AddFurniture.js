import React from 'react';
import * as furnitureActions from '../../actions/furnitureActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Input from '../../components/common/Input';

class AddFurniture extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            make: '',
            model: '',
            description: '',
            price: 0,
            year: 0,
            image: '',
            material: ''
        }

        this.submitForm = this.submitForm.bind(this);
        this.inputChange = this.inputChange.bind(this);
    }

    inputChange(ev){
        let name = ev.target.name;
        let value = ev.target.value;
        this.setState({
            [name]: value
        })
    }

    submitForm(ev){
        ev.preventDefault();
        let data = {...this.state};
        this.props.addFurniture(data);
        this.refs.addFurnitureForm.reset();
        this.setState({
            make: '',
            model: '',
            description: '',
            price: 0,
            year: 0,
            image: '',
            material: ''
        })
    }

    errorMsgs(){
        if(this.props.furniture.errors){
            var arr = [];
            for(var prop in this.props.furniture.errors){
                arr.push(<li key={prop}>{prop}: {this.props.furniture.errors[prop]}</li>)
            }
            return arr
        }
    }

    render(){
        return(
            <div>
                <h2>Add Furniture</h2>
                <form ref="addFurnitureForm" onSubmit={this.submitForm}>
                    <Input
                        type='text'
                        placeholder='Make'
                        name='make'
                        onChange={this.inputChange}
                    />
                    <Input
                        type='text'
                        placeholder='Model'
                        name='model'
                        onChange={this.inputChange}
                    />
                    <Input
                        type='text'
                        placeholder='Description'
                        name='description'
                        onChange={this.inputChange}
                    />
                    <Input
                        type='text'
                        placeholder='Price'
                        name='price'
                        onChange={this.inputChange}
                    />
                    <Input
                        type='text'
                        placeholder='Year'
                        name='year'
                        onChange={this.inputChange}
                    />
                    <Input
                        type='text'
                        placeholder='Image'
                        name='image'
                        onChange={this.inputChange}
                    />
                    <Input
                        type='text'
                        placeholder='Material'
                        name='material'
                        onChange={this.inputChange}
                    />
                    <input 
                        type='submit' 
                        value='Submit' 
                        onSubmit={this.submitForm} 
                    />
                </form>
                {/* <div className={this.props.furniture.success ? 'errorMsg' : 'hidden'}>
                    <h2>The furniture is added successfuly</h2>
                </div> */}
                <div className={this.props.furniture.message ? 'errorMsg' : 'hidden'}>
                    <h2>{this.props.furniture.message}</h2>
                    <ul>{this.errorMsgs()}</ul>
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


export default connect(mapStateToProps, mapDispatchToProps)(AddFurniture)