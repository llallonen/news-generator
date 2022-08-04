import { default as React, useEffect, useState } from "react";
import PostService from "../API/PostService";
import PostFilter from "../components/PostFilter";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import MyButton from "../components/UI/buttons/MyButton";
import MyLoader from "../components/UI/loader/MyLoader";
import MyModal from "../components/UI/modals/MyModal";
import MyPagination from "../components/UI/pagination/MyPagination";
import getPagesCount from "../components/utils/pages";
import { useFetching } from "../hooks/useFetching";
import { usePosts } from "../hooks/usePosts";
import "../styles/App.css";

function Posts() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
  const selectedSortedPosts = usePosts(posts, filter.sort, filter.query);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPagesCount(totalCount, limit));
  })

  useEffect(() => {
    console.log('start')
    fetchPosts(limit, page)
  }, [page])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const changePage = (page) => {
    setPage(page)
  }

  return (
    <div className="App">
      <button onClick={fetchPosts}>Update</button>
      <MyButton style={{ marginTop: '30px' }} onClick={() => setModal(true)}>
        Make a new user
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: '15px 0' }} />
      <PostFilter
        filter={filter}
        setFilter={setFilter} />
      <div className="err-message">
        {postError &&
          <h2>An error {postError} has occurred</h2>
        }
        {isPostsLoading
          ? <MyLoader />
          : <div style={{ marginTop: '20px' }}>
            <PostList remove={removePost} posts={selectedSortedPosts} title='Posts list 1' />
          </div>
        }
        <MyPagination
          page={page}
          changePage={changePage}
          totalPages={totalPages} />

      </div>
    </div >
  );
}

export default Posts