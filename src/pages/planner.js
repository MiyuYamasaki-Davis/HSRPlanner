import React, { useState } from 'react'
import FullDropdown from '@/components/FullDropdown';

const planner = () => {
    return (
        <>
            {/* <nav className='w-full px-32 flex justify-between'></nav> */}
            <table style={{width:'100%'}} className='w-full flex-row justify-between items-center object-center text-center text-lg text-bold border p-4 bg-light text-dark'>
                <thead>
                    <tr>
                        <th><FullDropdown/></th>
                        <th><FullDropdown/></th>
                        <th><FullDropdown/></th>
                        <th><FullDropdown/></th>
                    </tr>
                </thead>
            </table>
        </>
    );
};

export default planner