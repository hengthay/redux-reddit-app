import React, { useEffect } from "react";
import {
  fetchPosts,
  selectPosts,
  selectPostsError,
  selectPostsStatus,
} from "../features/postReddit/postSlice.js";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header.jsx";
import Aside from "./Aside.jsx";

const Post = () => {
  const posts = useSelector(selectPosts);
  const status = useSelector(selectPostsStatus);
  const error = useSelector(selectPostsError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (status === "loading") {
    return <div>
      <Header />
      <div className="mt-10 space-y-3 text-center leading-relaxed">
        <h3 className="text-slate-600 md:text-xl font-semibold">Loading...</h3>
      </div>
    </div>
  }
  if (status === "failed") {
    return <div>
      <Header />
      <div className="mt-10 space-y-3 text-center leading-relaxed">
        <h3 className="text-slate-600 md:text-xl font-semibold">{error}</h3>
        <button 
          onClick={() => dispatch(fetchPosts())}     className="bg-blue-400 px-6 py-2 rounded-md text-white font-semibold cursor-pointer">
          Try again
        </button>
      </div>
    </div>
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <Header />

      {/* Main Layout */}
      <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Feed */}
        <main className="lg:col-span-8">
          <h2 className="text-2xl font-bold mb-4">Popular Posts</h2>
          <div className="space-y-6">
            {posts.map((post) => (
              <div
                key={post.data.id}
                className="bg-white shadow-md rounded-2xl p-4 flex flex-col sm:flex-row gap-4 hover:shadow-lg transition"
              >
                {/* Thumbnail */}
                {post.data.thumbnail &&
                post.data.thumbnail !== "self" &&
                post.data.thumbnail !== "default" ? (
                  <img
                    src={post.data.thumbnail}
                    alt="thumbnail"
                    className="w-full sm:w-40 sm:h-32 object-cover rounded-md"
                  />
                ) : (
                  <div className="w-full sm:w-40 sm:h-32 bg-gray-200 rounded-md flex items-center justify-center text-gray-500 text-2xl">
                    📄
                  </div>
                )}

                {/* Post Content */}
                <div className="flex-1">
                  <a
                    href={`https://www.reddit.com${post.data.permalink}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-lg font-semibold text-blue-600 hover:underline"
                  >
                    {post.data.title}
                  </a>
                  <p className="text-sm text-gray-500 mt-1">
                    Posted by <span className="font-medium">u/{post.data.author}</span> in{" "}
                    <span className="font-medium">{post.data.subreddit}</span>
                  </p>

                  {/* Stats */}
                  <div className="flex items-center gap-4 text-gray-600 text-sm mt-2">
                    <span>👍 {post.data.ups}</span>
                    <span>💬 {post.data.numComments}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>

        <Aside />
      </div>
    </div>
  );
};

export default Post;
