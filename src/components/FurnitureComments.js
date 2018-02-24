import React from 'react';

const FurnitureComments = (props) => {
    
    function renderComments(){
        if(props.data){
            if(props.data[0]){
                let arr = [];
                for(let i in props.data){
                    arr.push(
                        <div key={i}>
                            <span>Comment from {props.data[i].user}</span>
                            <ul>
                                <li>Comment: {props.data[i].comment}</li>
                                <li>Rating: {props.data[i].rating}</li>
                            </ul>
                        </div>
                    )
                }
                return arr
            } else {
                return(
                    <div>
                        This product don't have any comments
                    </div>
                )
            }
        }
        //console.log(props.data.lenght)
    }

    return (
        <div>
            <h2>
                Comments
            </h2>
            <div>
                {renderComments()}
            </div>
        </div>
    )
}

export default FurnitureComments;