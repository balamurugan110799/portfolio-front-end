import React, { useEffect, useState } from 'react'
import Minlayout from '../../Components/Layout/Min-layout'
import axios from 'axios'
import Loader from '../../Components/Layout/Loader';

export default function DashBoard() {
  const [project,setProject] =useState()
  const [loader,setLoader] =useState(false)

  const getProjectData = () => {
    setLoader(true)
    axios.get("http://localhost:4000/api/projectGetAll")
        .then((res) => {
            // console.log(res)
            setProject(res.data)
            setLoader(false)
        })
        .catch((err) => {
            console.log(err)
        })
}

console.log(project)
  useEffect(()=>{
    getProjectData()
  },[])
 
  return (
    <div className=' overflow-hidden'>
      <Minlayout>

          <div className=' grid grid-cols-6 gap-6 py-6'>
            <div className=' bg-[#eb4235] group hover:bg-[#ea5c50] duration-300 p-4 rounded-[10px]'>
              <div className='text-h4 text-[#fff]'>
               Heart Count
              </div>
              <div className=' py-1'>
              <div className='flex'>
                <div className='text-white text-[46px] text-left'>
                {project?.totalHeart}
                </div>
           
              </div>
              </div>
            </div>
            <div className=' bg-[#34a852] hover:bg-[#55b76e] duration-300 p-4 rounded-[10px]'>
              <div className='text-h4 text-[#fff]'>
               Github View
              </div>
              <div className=' py-1'>
              <div className='text-white text-[46px] text-left '>
              {project?.gitCount}
              </div>
              </div>
            </div>

          </div>
          <Loader loaderState={loader}/>
        
         
      </Minlayout>

    </div>
  )
}
