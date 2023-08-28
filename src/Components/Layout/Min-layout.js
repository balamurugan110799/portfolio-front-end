import React from 'react'
import { Link } from 'react-router-dom'

export default function Minlayout(props) {
    return (
        <div>

            <div className=' grid grid-cols-12 '>
                <div className=' col-span-2 bg-dashboard '>
                    <div className=' text-white px-6 py-4 '>Portfolio
                    </div>
                </div>
                <div className=' col-span-10 bg-dashboard'>

                </div>
            </div>

            <div className=' grid grid-cols-12'>
                <div className=' col-span-2'>
                    <ul className='px-4'>
                        <li className='py-2 text-text-color'>
                            <Link to="/dashboard" className='myPoppinsFont'>
                                Dashboard
                            </Link>
                        </li>
                        <li className='py-2 text-text-color'>
                            <Link to="/project" className='myPoppinsFont'>
                                Project
                            </Link>
                        </li>

                    </ul>

                </div>
                <div className=' col-span-10 '>
                    {props.children}
                </div>
            </div>
        </div>
    )
}
