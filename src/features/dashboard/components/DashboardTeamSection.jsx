import React from 'react'

const DashboardTeamSection = () => {
  return (
<section className="grid grid-cols-2  gap-5 mt-10">
    <div className="w-[500px] h-[400px] bg-gray-200 opacity-90 shadow-md rounded-lg px-6 py-5 flex flex-col space-y-3  overflow-y-scroll ">
      <div className="flex justify-between ">
        <h2 className="text-3xl font-bold mb-4">Team Collabration</h2>
        <div className="self-start">
          <button className="border  border-blue-500 py-1 px-2 text-blue-500 rounded-l-lg rounded-r-lg  text-lg">Add  Teams</button>
        </div>
      </div>
      <div className="flex justify-between">
        <div className=" flex gap-4">
          <div className="w-10 h-10 ">
            {/* <img src="../../assets/images/cat-7287671_1280.jpg" alt className="rounded-full ring ring-stone-500" /> */}
          </div>
          <div className="text-start">
            <h1 className="font-bold text-xl">Alexandar Off</h1>
            <p className="text-xs text-stone-500 ">Lorem ipsum, dolor sit amet consectetur </p>
          </div>
        </div>
        <div className="self-center">
          <button className="bg-green-200 border-2  border-green-200  text-xs px-2 py-1  text-green-600">Completed</button>
        </div>
      </div>
      <div className="flex justify-between">
        <div className=" flex gap-4">
          <div className="w-10 h-10 ">
            {/* <img src="../../assets/images/cat-7287671_1280.jpg" alt className="rounded-full ring ring-stone-500" /> */}
          </div>
          <div className="text-start">
            <h1 className="font-bold text-xl">Alexandar Off</h1>
            <p className="text-xs text-stone-500 ">Lorem ipsum, dolor sit amet consectetur </p>
          </div>
        </div>
        <div className="self-center">
          <button className="bg-green-200 border-2  border-green-200  text-xs px-2 py-1  text-green-600">Completed</button>
        </div>
      </div>
      <div className="flex justify-between">
        <div className=" flex gap-4">
          <div className="w-10 h-10 ">
            {/* <img src="../../assets/images/cat-7287671_1280.jpg" alt className="rounded-full ring ring-stone-500" /> */}
          </div>
          <div className="text-start">
            <h1 className="font-bold text-xl">Alexandar Off</h1>
            <p className="text-xs text-stone-500 ">Lorem ipsum, dolor sit amet consectetur </p>
          </div>
        </div>
        <div className="self-center">
          <button className="bg-yellow-200 border  border-yellow-500 rounded-sm  text-xs px-2 py-1  text-yellow-600">pending...</button>
        </div>
      </div>
      <div className="flex justify-between">
        <div className=" flex gap-4">
          <div className="w-10 h-10 ">
            {/* <img src="../../assets/images/cat-7287671_1280.jpg" alt className="rounded-full ring ring-stone-500" /> */}
          </div>
          <div className="text-start">
            <h1 className="font-bold text-xl">Alexandar Off</h1>
            <p className="text-xs text-stone-500 ">Lorem ipsum, dolor sit amet consectetur </p>
          </div>
        </div>
        <div className="self-center">
          <button className="bg-green-200 border-2  border-green-200  text-xs px-2 py-1  text-green-600">Completed</button>
        </div>
      </div>
    </div>
    <div className="w-[500px] h-[400px] bg-gray-200 px-5 py-5 opacity-80 shadow-md rounded-lg ">
      <div className="flex justify-between ">
        <h2 className="text-3xl font-bold mb-4">Team Collabration</h2>
        <div className="self-start">
          <button className="border  border-blue-500 py-1 px-2 text-blue-500 rounded-l-lg rounded-r-lg  text-lg">Add  Teams</button>
        </div>
      </div>
      <div className="flex justify-between">
        <div className=" flex gap-4">
          <div className="w-10 h-10 ">
            {/* <img src="../../assets/images/cat-7287671_1280.jpg" alt className="rounded-full ring ring-stone-500" /> */}
          </div>
          <div className="text-start">
            <h1 className="font-bold text-xl">Alexandar Off</h1>
            <p className="text-xs text-stone-500 ">Lorem ipsum, dolor sit amet consectetur </p>
          </div>
        </div>
        <div className="self-center">
          <button className="bg-green-200 border-2  border-green-200  text-xs px-2 py-1  text-green-600">Completed</button>
        </div>
      </div>
    </div>
  </section>
  )
}

export default DashboardTeamSection