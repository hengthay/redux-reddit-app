import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchPosts } from '../features/postReddit/postSlice';

const Aside = () => {
  const dispatch = useDispatch();

  const subreddits = [
    { name: "Home", subreddit: "popular" },
    { name: "NoStupidQuestions", subreddit: "NoStupidQuestions" },
    { name: "pics", subreddit: "pics" },
    { name: "news", subreddit: "news" },
    { name: "sports", subreddit: "sports" },
  ];

  return (
    <aside className="lg:col-span-4 md:mt-12">
      <div className="bg-white p-4 rounded-2xl shadow-md">
        <h3 className="md:text-2xl text-lg font-bold mb-3">Subreddits</h3>
        <ul className="md:space-y-4 space-y-2">
          {subreddits.map((sub) => (
            <li key={sub.subreddit}>
              <button
                onClick={() => dispatch(fetchPosts(sub.subreddit))}
                className="flex items-center gap-x-4 text-slate-800 cursor-pointer hover:text-blue-600"
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