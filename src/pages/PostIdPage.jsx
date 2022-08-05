import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import { useFetching } from '../hooks/useFetching';

const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({})
  const [fetchPostById, isLoading, error] = useFetching(async () => {
    const response = await PostService.getById(params.id);
    setPost(response.data)
  })

  useEffect(() => {
    fetchPostById(params.id)
  }, [params.id])

  return (
    <div>
      <h1>You opened page {params.id}</h1>
      {isLoading
        ? <h1>nothing</h1>
        : <div>{post.id}. {post.title}</div>
      }

    </div>
  )
}

export default PostIdPage