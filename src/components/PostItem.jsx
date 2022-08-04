import React from 'react';
import MyButton from './UI/buttons/MyButton';

const PostItem = (props) => {
  return (
    <div className="post">
      <div className="post__content">
        <strong>{props.post.id}. {props.post.title}</strong>
        <div>{props.post.body}</div>
      </div>
      <div>
        <div className='post__btns'>
          <MyButton onClick={() => props.remove(props.post)} className="btn">
            Open
          </MyButton>
          <MyButton onClick={() => props.remove(props.post)} className="btn">
            Delete
          </MyButton>
        </div>

      </div>
    </div>
  )
}

export default PostItem