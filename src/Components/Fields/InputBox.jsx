import React from 'react'

function InputBox(props) {
    return (
        <div className={`${props.divclass} myPoppinsFont text-tiny`}>
            <label className={`  myPoppinsFont text-dash-text-color h-[40px]  font-semibold text-tiny `}>{props.label}</label>
            <div>
                <input type={props.type}
                    placeholder={props.placeholder}
                    name={props.name}
                    id={props.id}
                    value={props.value}
                    className={` ${props.className}
                myPoppinsFont border text-tiny mt-1 border-[#ccc] p-2`}

                    onChange={props.handleChange}
                />
            </div>

        </div>
    )
}

export default InputBox
