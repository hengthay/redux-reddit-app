import React from 'react'

const Header = () => {



  return (
      <header className="bg-white shadow-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center">
          <h1 className="text-xl font-bold text-orange-500 text-nowrap">Reddit-App</h1>
          <div className='flex justify-center items-center w-full'>
            <input
              type="text"
              placeholder="Search..."
              className="md:w-1/2 w-[200px] p-2 border border-gray-300 rounded-sm focus:ring-2 focus:ring-blue-400 outline-none bg-gray-200 placeholder:text-black placeholder:text-[15px]"
            />
          </div>
        </div>
      </header>
  )
}

export default Header