import React from 'react'

function InputBox(props) {
    return (
        <div className={`${props.divclass} myPoppinsFont text-tiny`}>
            <label className={`  myPoppinsFont text-dash-text-color font-semibold text-tiny `}>{props.label}</label>
            <div>
                <input type={props.type}
                    placeholder={props.placeholder}
                    name={props.name}
                    id={props.id}
                    className={` ${props.className}

                myPoppinsFont border text-tiny border-[#ccc] p-2`}

                    onChange={props.handleChange}
                />
            </div>

        </div>
    )
}

export default InputBox
