import React from 'react'
import { ChevronRight } from 'lucide-react';

const Profile = ({ item }) => {
    console.log(item.img);
    return (
        <div key={item.index} className='flex items-center h-20 w-52 border border-gray-300'>
            <img src={item.img} className='w-10 h-10 ml-2 rounded-full' />
            <div className='flex flex-col ml-2'>
                <div className='w-8'>
                    {item.name}
                </div>
                <div>
                    {item.time}
                </div>
            </div>
            <div className='w-6 h-6 ml-10 bg-[#932199] rounded-full'></div>
            <div className='ml-2'>
                <ChevronRight />
            </div>
        </div>
    )
}

export default Profile