import React from 'react'

export default function Button(props) {
    const {className ,onClick ,name} = props
  return (
    <div>
        <button className={` ${className} bg-dashboard cursor-pointer  text-tiny hover:bg-dashboard-hover px-8 text-white py-1 rounded-sm`} onClick={onClick} >
            {name}
        </button>
    </div>
  )
}
