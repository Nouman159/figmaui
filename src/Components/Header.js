import React, { useState } from 'react'
import Draggable from 'react-draggable';
import { RefreshCcw, Settings, Mail, ChevronLeft, ChevronRight, Clock8 } from 'lucide-react';

import Profile from './Profile'
import Img from './account.PNG'

const profiles = [
  {
    name: "Ben",
    time: "2h 30m",
    img: Img
  },
  {
    name: "Johnson",
    time: "2h 30m",
    img: Img
  },
  {
    name: "Robinson",
    time: "2h 30m",
    img: Img
  },
  {
    name: "Asmee",
    time: "2h 30m",
    img: Img
  },
  {
    name: "Jenny Simpson",
    time: "2h 30m",
    img: Img
  },
]

const Header = () => {

  const [positions, setPositions] = useState(profiles.map(() => ({ x: 0, y: 0 })));

  const handleDrag = (e, ui, index) => {
    const newPositions = [...positions];
    newPositions[index] = { x: ui.x, y: ui.y };
    setPositions(newPositions);
    console.log(positions)
  };

  const handleStop = (e, ui, index) => {
    const newPositions = [...positions];
    newPositions[index] = { x: ui.x, y: ui.y };
    setPositions(newPositions);
  };

  return (
    <div className='m-10'>


      <div className='mb-10 flex flex-row'>
        <div className='flex flex-row'>
          <div className='mr-4 py-2 px-3 rounded-md bg-[#c5ece1]'>
            <RefreshCcw />
          </div>
          <div className='mr-4 py-2 px-3 rounded-md bg-[#c5ece1]'>
            <Settings />
          </div>
          <div className='mr-4 py-2 px-3 rounded-md bg-[#c5ece1]'>
            <Mail />
          </div>
          <div className='py-2 px-10 mr-32 rounded-md bg-[#dddfde]'>
            All Business Section
          </div>
        </div>


        <div className='flex flex-row'>
          <div className='mr-4 py-2 px-3 rounded-md bg-[#c5ece1]'>
            <ChevronLeft />
          </div>
          <div className='py-2 px-10 mr-3 rounded-md bg-[#c5ece1]'>
            Thursday Feb 15 2024
          </div>
          <div className='mr-4 py-2 px-3 rounded-md bg-[#c5ece1]'>
            <ChevronRight />
          </div>
          <div className='py-2 px-10 mr-3 rounded-md bg-[#c5ece1]'>
            Today
          </div>
        </div>

      </div>


      {/* TimeLine */}

      <div className='flex flex-row'>

        <div className='h-10 w-52 flex items-center bg-[#f7f5f5]'>
          <div className='mx-auto'>8 AM</div>
        </div>
        <div className='grid grid-cols-7 h-10 bg-[#f7f5f5]'>
          <div className='flex items-center justify-center  w-36'> 8 AM</div>
          <div className='flex items-center  justify-center w-36'> 8 AM</div>
          <div className='flex items-center justify-center w-36'> 8 AM</div>
          <div className='flex items-center justify-center w-36'> 8 AM</div>
          <div className='flex items-center justify-center w-36'> 8 AM</div>
          <div className='flex items-center justify-center w-36'> 8 AM</div>
          <div className='flex items-center justify-center w-36'> 8 AM</div>
        </div>
      </div>


      {/* Table */}
      {profiles.map((item, index) => (
        <div className='flex flex-row'>

          <div className='w-52 h-20 flex items-center'>
            <Profile item={item} />
          </div>

          {/* <div className='relative h-20'> */}

          <div className='grid grid-cols-7 h-20 relative'>

            <Draggable
              axis="x"
              onDrag={handleDrag}
              onStop={handleStop}
            >
              <div className='z-10 flex top-7 absolute bg-[#8fc6e6] p-1 border-l-4 border-indigo-500 px-3'>
                <div className='mr-2'>
                  <Clock8 />
                </div>
                Derek Johnson - 1024 Oakland Drive
              </div>
            </Draggable>


            <div className='flex border border-gray-300 items-center justify-center w-36 h-20'>  </div>
            <div className='flex border border-gray-300 items-center justify-center w-36 h-20'>  </div>
            <div className='flex border border-gray-300 items-center justify-center w-36 h-20'>  </div>
            <div className='flex border border-gray-300 items-center justify-center w-36 h-20'>  </div>
            <div className='flex border border-gray-300 items-center justify-center w-36 h-20'>  </div>
            <div className='flex border border-gray-300 items-center justify-center w-36 h-20'>  </div>
            <div className='flex border border-gray-300 items-center justify-center w-36 h-20'>  </div>
          </div>
        </div>
        // {/* </div> */ }
      ))}

    </div>
  )
}
export default Header