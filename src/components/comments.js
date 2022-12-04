import React, { useContext, useState } from 'react';
import CommentsContext  from '../context/comment';
import useComments from '../hooks/use-comments';
// import { createPortal } from 'react-dom';

// class Comments extends React.Component{
//     constructor(props){
//         super(props);

//         this.state ={
//             currentComment:'',
//             comments:[]
//         };
//     this.onChange = this.onChange.bind(this);
//     }

//     onChange(event){
//         this.setState({ currentComment:event.target.value });
//     }

//     onSubmit = event =>
//     {
//         event.preventDefault();
//         this.setState({
//             comments:[...this.state.comments,this.state.currentComment],
//             currentComment:''
//         });
       
//     };
//     render(){
//         return(
//             <div>
//         <form onSubmit={this.onSubmit} >
//             <label>
//                 Comment
//                 <textarea onChange={this.onChange}
//                 value={this.state.currentComment}
//                  style={{ display:'block'}} name="comment"/>
//             </label>
//              <button type="submit">Add Comment</button>
//         </form>
//         <ul>
//             {
//                 this.state.comments.map(comment => (
//             <li key={comment}>
//                 <p>{comment}</p>
//             </li>
//                 ))
//             }
            
//         </ul>
//     </div>
//         );
//     }
//}

const Comments = () => 
    {
      // const { comment, comments, onChange, onSubmit} = useComments();
      const { comment, comments, onChange, onSubmit} = useContext(CommentsContext); 
   
    return(
       
                <div>
                <form onSubmit={onSubmit}>
                    <label>
                        Comment
                        <textarea
                        onChange={onChange}
                        value={comment}
                        style={{ display:'block'}}
                        name="comment"/>
                    </label>
                    <button type="submit">Add Comment</button>
                </form>
                <ul>
                    {comments.map(cmt=>(
                        <li>
                            <p>{cmt}</p>
                        </li>
                    ))}
                    <li>
                        <p>This is a comment!</p>
                    </li>
                </ul>
                </div>
 
    );
       
};

export default Comments;