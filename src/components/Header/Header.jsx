import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import React, { useState } from 'react'

function Header() {
    const [isOpen,setIsOpen] = useState(false)
    return (
        <div className="header">
            <div className='z-10 relative flex justify-around items-center py-4 shadow-xl max-sm:justify-between max-sm:px-4'>

                <div className="w-1/12 logo max-sm:w-1/4 max-sm:flex">
                    <div className='lg:hidden'>
                        <button onClick={() => setIsOpen(!isOpen)}>
                            <LunchDiningIcon />
                        </button>
                    </div>
                    <img className='w-full max-sm:px-2' src="https://compar.edu.az/staticfiles/defaults/img/compar%20logo1%402x.png" alt="" />
                </div>
                <div className="w-5/12 search-area border-2 border-blue-700  flex justify-between rounded-md max-sm:hidden">
                    <input className='w-full h-10 outline-0 rounded-l-lg w-7/12' type="text" />
                    <FormControl className='w-3/12 outline-0'>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={10}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    <button className='w-2/12 bg-indigo-700	text-white'>Search</button>
                </div>
                <div className="w-1/6 icons flex justify-around">
                    <div>
                        <PersonIcon fontSize='medium' className='text-slate-600 ' />
                    </div>
                    <div className='max-sm:hidden'>
                        <MessageIcon fontSize='medium' className='text-slate-600' />
                    </div>
                    <div className='max-sm:hidden'>
                        <HeartBrokenIcon fontSize='medium' className='text-slate-600' />
                    </div>
                    <div>
                        <ShoppingCartIcon fontSize='medium' className='text-slate-600' />
                    </div>
                </div>
            </div>
            <div className='bg-gray-800'>
                <div className=''>
                    <ul className={`flex text-white max-sm:flex-col max-sm:px-4 max-sm:relative ${isOpen ? 'max-sm:block': 'max-sm:hidden'}`}>
                        <li>item 1</li>
                        <li>item 2</li>
                        <li>item 3</li>
                        <li>item 4</li>
                        <li>item 5</li>
                    </ul>
                </div>
                <ul></ul>
                <ul></ul>
            </div>
        </div>
    )
}

export default Header