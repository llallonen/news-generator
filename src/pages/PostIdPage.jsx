import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import MyLoader from '../components/UI/loader/MyLoader';
import MyModal from '../components/UI/modals/MyModal';
import { useFetching } from '../hooks/useFetching';

const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [fetchPostById, isLoading, error] = useFetching(async () => {
    const response = await PostService.getById(params.id);
    setPost(response.data)
  })

  const [fetchComments, isCommLoading, commError] = useFetching(async () => {
    const response = await PostService.getCommentsByPostId(params.id);
    setComments(response.data)
  })

  useEffect(() => {
    fetchPostById(params.id)
    fetchComments(params.id)
  }, [params.id])

  return (
    <div>
      <h1>You opened page {params.id}</h1>
      {isLoading
        ? <MyLoader />
        : <div>{post.id}. {post.title}</div>
      }
      <h1>Comments</h1>
      {isCommLoading
        ? <MyLoader />
        : <div>{comments.map(comm =>
          <div key={comm.id}>
            <h5>{comm.email}</h5>
            <div>{comm.body}</div>
          </div>
        )}</div>
      }
    </div>
  )
}

export default PostIdPage