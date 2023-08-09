import { useEffect, useState } from "react";
import Button from '../Fields/Button'

import { RiErrorWarningLine, RiCloseFill } from "react-icons/ri";
import { VscWarning } from "react-icons/vsc";
import { BiMessageCheck } from "react-icons/bi";
import { FiInfo } from "react-icons/fi";
export default function PopUp(props) {
const {state, handleClick,name} =props
console.log(props)
  return (
    <div>

        {state ? <div>
            <div>
        <div className="justify-center bg-modal items-center scale-up-hor-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none sm:w-[100%] sm:px-3 " >
          <div className="popup-box">
            <div className={`${props.width === "sm" ? "w-[30%] " : "w-[30%]"}  ${props.width === "md" ? "w-[50%] " : ""} ${props.width === "lg" ? "w-[70%] " : ""} box   relative`}>
              <div className={`  ${props.type == "info" ? "bg-[#3988d7]" : ""} ${props.type == "success" ? "bg-[#559b24]" : ""} ${props.type == "warning" ? "bg-[#c47c16]" : ""}
              
              ${props.type == "error" ? " bg-[#db484f]   " : ""}  bg-[#3988d7] py-2 px-4 heading  text-h4 flex justify-start `}>
                {props.type == "error" ? <RiErrorWarningLine className="text-white  text-[26px] mt-1" /> : null}
                {props.type == "warning" ? <VscWarning className="text-white  text-[26px] mt-1" /> : null}
                {props.type == "success" ? <BiMessageCheck className="text-white  text-[26px] mt-1.5" /> : null}
                {props.type == "info" ? <FiInfo className="text-white  text-[26px] mt-1" /> : null}
                {props.type === undefined || props.type === null ? <FiInfo className="text-white  text-[26px] mt-1" /> : null }
                <p className="text-white mx-3 text-h3 tracking-wide heading title pt-[1px]"> {props.title ?? props.type}</p>
              </div>

              {props.actionbar ? null :<div onClick={handleClick} className="absolute top-4 right-4 group rounded-md">
                <div className={`  ${props.type == "success" ? " hover:bg-[#559b24]" : ""} ${props.type == "warning" ? " hover:bg-[#c47c16]" : ""} ${props.type == "error" ? " hover:bg-[#e33b44]" : ""} ${props.type == "info" ? "hover:bg-[#3988d7] " : ""} h-[20px] w-[20px] cursor-pointer duration-300  bg-[#fff] flex justify-center items-center  rounded-sm hover:bg-[#3988d7] `}>
                  <RiCloseFill className="text-text-color group-hover:text-white" />
                </div>
              </div> }
              

              <div className={` ${props.width === "sm" ? "h-[30vh] overflow-auto " : ""} ${props.width === "md" ? "h-[50vh] overflow-auto " : ""} ${props.width === "lg" ? "h-[60vh] overflow-auto" : ""}  `}>
                <div>

                <p className="w-[80%]  mx-auto text-text-color pt-6 text-center text-base pb-6"> An error has occured while creating an report.</p>
                {props.actionbar ? <div className="flex justify-end px-4 pb-2">
                <button    onClick={handleClick} className="bg-primary py-2 mx-2 px-8 text-base hover:bg-loginbg text-white rounded-md">
                    Cancel
                  </button>
                  <button className="bg-primary py-2 px-8 text-base hover:bg-loginbg text-white rounded-md">
                  Save
                  </button>
               
                  </div>:null}
                {/* {props.actionbar ? <p>Hello</p>:<p>World</p>} */}
                <div></div>
                </div>
                

              </div>


              {/* <p className={` ${props.type == "info" ? "text-[#3988d7]" : ""} ${props.type == "success" ? "text-[#5bbd31]" : ""} ${props.type == "warning" ? "text-[#c47c16]" : ""}  ${props.type == "error" ? "text-[#db484f]" : ""} text-center pt-4 text-h3 tracking-wide heading title`}>
                {props.title ?? props.type}
              </p> */}


              {/* <div className="flex justify-center items-center pb-2">
                <button onClick={props.handleEvent} className={` ${props.type == "info" ? "bg-[#3988d7] text-base hover:bg-[#2671bd]" : ""}  ${props.type == "success" ? "bg-[#5bbd31] text-base hover:bg-[#1e8c00]" : ""} ${props.type == "warning" ? "bg-[#c47c16] hover:bg-[#e18f19]" : ""} ${props.type == "error" ? "bg-[#db484f] text-base hover:bg-[#e33b44] " : ""}   duration-300 px-10 py-2 text-white rounded-md`}>
                  close
                </button>
              </div> */}

              {props.children}
              {/* <div className="py-2 bg-gray-bg">
              </div> */}
              {/* <p className="">true   <button onClick={props.handleEvent}>Toggle</button></p> */}
            </div>
          </div>
        </div>
      </div> 
        </div> : null}
        
    </div>
  )
}
