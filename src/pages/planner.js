import React, { useState } from 'react'
import FullDropdown from '@/components/FullDropdown';

const planner = () => {
    return (
        <>
            <nav className='w-full px-32 flex justify-between'>
                <FullDropdown/>
                <FullDropdown/>
                <FullDropdown/>
                <FullDropdown/>
            </nav>
        </>
    );
};

export default planner