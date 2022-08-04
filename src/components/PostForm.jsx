import React, { useState } from 'react';
import MyButton from './UI/buttons/MyButton';
import MyInput from './UI/inputs/MyInput';

const PostForm = ({create}) => {
  const [post, setPost] = useState({ title: '', body: '' })

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post, id: Date.now()
    }
    create(newPost)
    setPost({title: '', body: ''})
  }

  return (
    <form>
      <MyInput
        value={post.title}
        type='text'
        placeholder="Post title"
        onChange={e => setPost({ ...post, title: e.target.value })}
      />
      <MyInput
        value={post.body}
        type="text"
        placeholder="Post description"
        onChange={e => setPost({ ...post, body: e.target.value })}
      />
      <MyButton onClick={addNewPost}>Make a post</MyButton>
    </form>
  )
}

export default PostForm