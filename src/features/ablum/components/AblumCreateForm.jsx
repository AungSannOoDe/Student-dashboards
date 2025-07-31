import React from 'react'

const AblumCreateForm = () => {
  return (
    <form action="">
        <div className="grid  grid-cols-3 gap-10 grid-rows-3 gap-y-15">
        <div className="space-y-2">
                <label htmlFor="" className='block'>photo 1</label>
                <input type="file" className='block border border-stone-200 py-1 px-3' />
            </div>
            <div className="space-y-2">
                <label htmlFor="" className='block'>photo 2</label>
                <input type="file" className='block border border-stone-200 py-1 px-3' />
            </div>
            <div className="space-y-2 col-start-1">
                <label htmlFor="" className='block'>photo 3</label>
                <input type="file" className='block border border-stone-200 py-1 px-3' />
            </div>
            <div className="space-y-2 ">
                <label htmlFor="" className='block'>photo 4</label>
                <input type="file" className='block border border-stone-200 py-1 px-3' />
            </div>
            <div className="col-start-1 col-span-2  w-[105%]">
            <button className=' mt-10 bg-blue-600 w-full py-2 hover:opacity-90  duration-300  disabled:opacity-75  active:scale-95 text-white  '>Create Ablum</button>
            </div>
            
        </div>


    </form>
  )
}

export default AblumCreateForm