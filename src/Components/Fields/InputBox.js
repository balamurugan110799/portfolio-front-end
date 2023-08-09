import React from 'react'

function InputBox(props) {
    return (
        <div>
            <label className={`  myPoppinsFont text-dash-text-color font-semibold `}>{props.label}</label>
            <div>
            <input type={props.type}
                placeholder={props.placeholder}
                className={` ${props.className}
                
                myPoppinsFont border border-[#ccc] p-2`}
               
                onChange={props.handleChange}
            />
            </div>
          
        </div>
    )
}

export default InputBox
