import React from 'react'
import Button from './Button'

export default function ActionPopUp(props) {
    const { state } = props
    return (
        <div >

            {state ? <div className='slide-fwd-center'>

                <div className="justify-center bg-modal items-center scale-up-hor-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none sm:w-[100%] sm:px-3 " >
                    <div className="popup-box">
                        <div className={`${props.width === "sm" ? "w-[30%] " : "w-[30%]"}  ${props.width === "md" ? "w-[50%] " : ""} ${props.width === "lg" ? "w-[70%] " : ""} box   relative`}>
                            <div className={`  bg-dashboard py-2 px-4 heading  text-h4 flex justify-start `}>
                                <p className='text-white myPoppinsFont text-[18px] tracking-wide heading title pt-[1px]'>{props.title}</p>
                            </div>
                            <div className='p-4'>
                            {props.children}
                            </div>
                        </div>
                    </div>
                </div>
            </div> :null}
        </div>
    )
}
