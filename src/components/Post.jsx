import React, { useEffect, useState } from 'react'
import { fetchPosts, selectPosts, selectPostsError, selectPostsStatus } from '../features/postReddit/postSlice';
import { useDispatch, useSelector } from 'react-redux';

const Post = () => {
  
  const {items: posts} = useSelector(selectPosts);
  const status = useSelector(selectPostsStatus);
  const error = useSelector(selectPostsError);
  const dispatch = useDispatch();

  useEffect(() => {
    if(status === "idle") {
      dispatch(fetchPosts());
    }
  }, [status, dispatch])

  console.log(posts);


  return (
    <div>Post</div>
  )
}

export default Post