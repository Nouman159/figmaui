import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import { Clock8 } from 'lucide-react'
import { CSS } from '@dnd-kit/utilities';

function Draggable(props) {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: `draggable-${props.index}`,
    });
    const style = {
        transform: CSS.Translate.toString(transform),
    }

    // Draggable Component
    return (
        <div
            ref={setNodeRef}
            style={style}
            key={props.index}
            {...listeners} {...attributes}
            className='z-10 flex flex-row top-7 absolute bg-[#69b3dd] overflow-x-visible p-1 px-3 border-l-4 border-indigo-500'>
            <div className='mr-2'>
                <Clock8 />
            </div>
            Derek Johnson
            {/* - 1024 Oakland Drive */}
        </div>
    );

}
export default Draggable
