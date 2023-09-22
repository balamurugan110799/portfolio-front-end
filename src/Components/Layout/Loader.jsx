import React from 'react'

export default function Loader(props) {
    const {loaderState}=props
  return (
    <>
     {loaderState?   <div className='loader-background'>
      <span class="loader"></span>
    </div> :null}
  
    </>
   
  )
}
