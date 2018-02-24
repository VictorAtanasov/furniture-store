import React from 'react';
import * as furnitureActions from '../../actions/furnitureActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FurnitureComments from '../../components/FurnitureComments';

class FurnitureDetails extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            rating: 0,
            comment: ''
        };

        this.inputChange = this.inputChange.bind(this);
        this.submitComment = this.submitComment.bind(this);
        this.addLike = this.addLike.bind(this);
    }

    componentWillMount(){
        if(localStorage.getItem('authToken') != null){
            this.props.getFurnitureDetails(this.props.match.params.id);
            this.props.getComments(this.props.match.params.id);
        } else{
            this.props.history.push('/login')
        }
    }

    inputChange(ev){
        this.setState({
            [ev.target.name]: ev.target.value
        })
    }

    addLike(ev){
        let id = this.props.match.params.id;
        ev.preventDefault();
        if(localStorage.getItem(`liked${id}`) != null){
            this.setState({
                liked: true
            })
        } else {
            this.props.addLike(this.props.match.params.id)
                .then(() => {
                    localStorage.setItem(`liked${id}`, true)
                })
        }
    }

    submitComment(ev){
        ev.preventDefault();
        let data = {
            'rating': this.state.rating,
            'comment': this.state.comment
        };
        this.props.addComment(this.props.match.params.id, data);
        this.refs.commentForm.reset();
    }

    render(){
        let data = this.props.furniture.data;
        if(this.props.furniture.data){
            return(
                <div>
                    <h2>{data.make} {data.model}</h2>
                    <img src={data.image} alt=""/>
                    <p>{data.description}</p>
                    <p>{data.price} bgn</p>
                    <p>likes: {data.likes}</p>
                    <FurnitureComments {...this.props.allComments} />
                    <div>
                        <h4>Add Comment</h4>
                        <form 
                            onSubmit={this.submitComment}
                            ref='commentForm'
                        >
                            <input
                                type='number'
                                min='1'
                                max='5'
                                name='rating'
                                placeholder='Enter Rating between 1 and 5'
                                onChange={this.inputChange}
                            />
                            <textarea
                                name='comment'
                                placeholder='Enter Comment'
                                onChange={this.inputChange}
                            />
                        <input type='submit' value='Submit' />
                        </form>
                    </div>
                    <div>
                        <form 
                            onSubmit={this.addLike} 
                            ref='likeForm'
                        >
                            <input type='submit' value='Like'
                            />
                        </form>
                    </div>
                    <div className={!this.props.comments.success ? 'errorMsg' : 'hidden'}>
                        <p>{this.props.comments.message}</p>
                    </div>
                    <div className={this.props.comments.success ? 'errorMsg' : 'hidden'}>
                        <p>{this.props.comments.message}</p>
                    </div>
                    <div className={this.state.liked ? 'errorMsg' : 'hidden'}>
                        <p>You can Like a product only once!</p>
                    </div>
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
        comments: state.comments,
        allComments: state.getComments
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(furnitureActions, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(FurnitureDetails)