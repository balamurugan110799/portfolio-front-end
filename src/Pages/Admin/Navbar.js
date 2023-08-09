import React, { useEffect, useState } from 'react'
import Minlayout from '../../Components/Layout/Min-layout'
import InputBox from '../../Components/Fields/InputBox'
import axios from 'axios'
import { RiEditBoxLine , RiDeleteBin5Line} from "react-icons/ri";

function Navbar() {
    const [getData, setGetData] = useState()
    const handleChnage = (e) => {

    }

    useEffect(() => {

        const getAllData = () => {
            axios.get("http://localhost:4040/api/getAllNav")
                .then((res) => {
                    console.log(res.data)
                    setGetData(res.data.nav_data)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
        getAllData()
    }, [])
    return (
        <div>
            <Minlayout>
                <div className='p-2'>
                    <div className=' grid  grid-cols-12'>
                        <div className=' col-span-4'>
                            <InputBox type={"text"}
                                className="w-[80%]"
                                label="Nav Name"
                                placeholder={"Enter the Nav"}
                                handleChange={(e) => handleChnage(e)}
                            />
                        </div>
                        <div className=' col-span-4'>
                            <InputBox type={"text"}
                                className="w-[80%]"
                                label="Nav Name"
                                placeholder={"Enter the Nav"}
                                handleChange={(e) => handleChnage(e)}
                            />
                        </div>
                        

                    </div>

                    <table className='w-[100%]'>
                        <tr className='py-2 bg-[#e3e3e3]'>
                            <th className="myPoppinsFont text-sm tracking-wider text-dash-text-color py-2 "> ID</th>
                            <th className="myPoppinsFont text-sm tracking-wider text-dash-text-color py-2 "> Nav Name</th>
                            <th className="myPoppinsFont text-sm tracking-wider text-dash-text-color py-2"> URL</th>
                            <th className="myPoppinsFont text-sm tracking-wider text-dash-text-color py-2 "> Edit</th>
                            <th className="myPoppinsFont text-sm tracking-wider text-dash-text-color py-2 "> Delete</th>
                        </tr>
                        <tbody>
                         
                                {getData?.map((v,i)=>{
                                    console.log(v)
                                    return(
                                        <tr className=''>
                                        <td className='myPoppinsFont text-center text-base text-text-color py-1'>
                                            {i}
                                        </td>
                                        <td className='myPoppinsFont text-center text-base text-text-color py-1'>
                                            {v?.nav_name}
                                        </td>
                                        <td className='myPoppinsFont text-center text-base text-text-color py-1'>
                                            {v?.url}
                                        </td>
                                        <td className='myPoppinsFont text-center text-base text-text-color py-1'>
                                        <RiEditBoxLine className='mx-auto text-dashboard'/>
                                        </td>
                                        <td className='myPoppinsFont   text-base py-1'>
                                        <RiDeleteBin5Line className='mx-auto text-[#ff593d] text-base'/>
                                        </td>
                                        </tr>
                                    )
                                 
                                })}
                         
                        </tbody>

                    </table>
                </div>
            </Minlayout>
        </div>
    )
}

export default Navbar
