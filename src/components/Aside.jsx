import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchPosts } from '../features/postReddit/postSlice';

const Aside = () => {
  const dispatch = useDispatch();
  const [activeSubreddit, setActiveSubreddit] = useState("popular");

  const subreddits = [
    { name: "Home", subreddit: "popular" },
    { name: "NoStupidQuestions", subreddit: "NoStupidQuestions" },
    { name: "pics", subreddit: "pics" },
    { name: "news", subreddit: "news" },
    { name: "sports", subreddit: "sports" },
  ];

  const handleClick = (subreddit) => {
    setActiveSubreddit(subreddit); 
    dispatch(fetchPosts(subreddit)); 
  };

  return (
    <aside className="lg:col-span-4 md:mt-12">
      <div className="bg-white p-4 rounded-2xl shadow-md">
        <h3 className="md:text-2xl text-lg font-bold mb-3">Subreddits</h3>
        <ul className="md:space-y-4 space-y-2">
          {subreddits.map((sub) => (
            <li 
            key={sub.subreddit}>
              <button
                onClick={() => handleClick(sub.subreddit)}
                className={`flex items-center py-1.5 px-2 md:min-w-[350px] gap-x-4 rounded-md text-slate-800 cursor-pointer hover:text-blue-600 hover:bg-gray-200 transition-all ease-in-out duration-200 ${activeSubreddit === sub.subreddit ? "bg-gray-300 text-blue-500 font-semibold" 
                : "text-slate-800 bg-transparent"}`}
              >
                <img
                  src={`https://api.dicebear.com/7.x/identicon/svg?seed=${sub.subreddit}`}
                  alt={sub.name}
                  className="w-10 h-10 rounded-full border"
                />
                {sub.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Aside