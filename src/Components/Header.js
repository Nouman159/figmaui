
import React, { useEffect, useState } from 'react'
import { DndContext } from '@dnd-kit/core';
import { Clock8 } from 'lucide-react'
import { RefreshCcw, Settings, Mail, ChevronLeft, ChevronRight } from 'lucide-react';

import Profile from './Profile'
import Img from './account.PNG'
import Draggable from './Draggable';
import Droppable from './Dropable';

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
  const [parent, setParent] = useState(null);

  const handleDragEnd = (event) => {
    const { over } = event;
    setParent(over ? over.id : null);
  };
  return (
    <DndContext onDragEnd={handleDragEnd}>

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
            <div className='flex items-center justify-center  w-36'> 5 AM</div>
            <div className='flex items-center  justify-center w-36'> 6 AM</div>
            <div className='flex items-center justify-center w-36'> 7 AM</div>
            <div className='flex items-center justify-center w-36'>8 AM</div>
            <div className='flex items-center justify-center w-36'> 9 AM</div>
            <div className='flex items-center justify-center w-36'> 10 AM</div>
            <div className='flex items-center justify-center w-36'>11 AM</div>
          </div>
        </div>


        {/* Table */}
        {profiles.map((item, index) => (
          <div key={index} className='flex flex-row'>
            <div className='w-52 h-20 flex items-center'>
              <Profile item={item} index={index} />
            </div>

            <div className='grid grid-cols-7 h-20 relative'>

              {(parent === null) && (index == 0) ? <Draggable index={index} /> : ""}
              <Droppable key={`${index}` + '1'} index={`${index}` + '1'}>
                {parent === 'droppable-' + index + '1' ? <Draggable /> : ''}

              </Droppable>

              <Droppable key={`${index}` + '2'} index={`${index}` + '2'}>
                {parent === 'droppable-' + index + '2' ? <Draggable /> : ''}
              </Droppable>

              <Droppable key={`${index}` + '3'} index={`${index}` + '3'}>
                {parent === 'droppable-' + index + '3' ? <Draggable /> : ''}
              </Droppable>

              <Droppable key={`${index}` + '4'} index={`${index}` + '4'}>
                {parent === 'droppable-' + index + '4' ? <Draggable /> : ''}
              </Droppable>

              <Droppable key={`${index}` + '5'} index={`${index}` + '5'}>
                {parent === 'droppable-' + index + '5' ? <Draggable /> : ''}
              </Droppable>

              <Droppable key={`${index}` + '6'} index={`${index}` + '6'}>
                {parent === 'droppable-' + index + '6' ? <Draggable /> : ''}
              </Droppable>
              <Droppable key={`${index}` + '7'} index={`${index}` + '7'}>
                {parent === 'droppable-' + index + '7' ? <Draggable /> : ''}
              </Droppable>

            </div>
          </div>
        ))}
      </div>
    </DndContext>
  )
}
export default Header