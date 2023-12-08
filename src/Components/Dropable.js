import React from 'react';
import { useDroppable } from '@dnd-kit/core';

export function Droppable(props) {
    const { isOver, setNodeRef } = useDroppable({
        id: `droppable-${props.index}`,
    });
    console.log(`Droppable ${props.index} isOver:`, isOver);

    const style = {
        color: isOver ? 'green' : undefined,
        border: '1px solid gray',
        // height: '100%',
        // width: '100%',
    };


    // Droppable Component
    return (
        <div
            index={props.index}
            ref={setNodeRef}
            style={{ position: 'relative', ...style }}
            className='flex border relativ border-gray-300 items-center justify-center w-36 h-20'>
            {props.children}
        </div>
    );

}

export default Droppable