import React, { useState } from 'react'
import "../Components/CSS/style.css"
import Arrow from "../Components/Assets/Images/arrow.png"
import diamond from "../Components/Assets/Images/diamond.png"
import artsign from "../Components/Assets/Images/art-sign.png"
import { IconNameCgArrowsScrollV } from "react-icons/cg";
import profile from "../Components/Assets/Images/profile.png"
export default function Home() {
    const [darkMode, setDarkMode] = useState(false)
    const handleDrakMode = () => {
        setDarkMode(!darkMode)
    }

    const nav = [
        {
            user_name: "Bala Murugan.",
            nav_list: [
                {
                    id: 0,
                    name: "Home",
                    url_link: "home"
                },
                {
                    id: 1,
                    name: "About",
                    url_link: "about"
                },
                {
                    id: 2,
                    name: "Services",
                    url_link: "services"
                },
                {
                    id: 3,
                    name: "Project",
                    url_link: "project"
                },
            ]
        }
    ]
   
    return (
        <div>
            <section className={` ${darkMode ? 'bg-primary' : "bg-secondary"} z-50 fixed w-full box-shadow`}>
                <div className='container mx-auto'>
                    {nav?.map((v)=>{
                        return(
                            <nav className='py-8 grid grid-cols-2 h-full'>
                            <div className='flex col-span-1 h-full py-3'>
                                <div className='h-[30px] rounded-[50%]  w-[30px] bg-black center text-white'>
                                    B
                                </div>
                                <div className={`${darkMode ? "text-white" : "text-primary"} text-h5 mx-4 pt-1 `}>{v?.user_name}</div>
                            </div>
                            <div className=' col-span-1'>
                                <div className=' grid grid-cols-7'>
                                    {v?.nav_list.map((nav)=>{
                                        return(
                                            <div className={`${darkMode}  center `}>

                                            <div className={`${darkMode ? "text-white" : ""} text-text-color hover:text-black duration-300 cursor-pointer`}>{nav?.name}</div>
                                        </div>
                                        )
                                    })}
                                    {/* <div className={`${darkMode}  center `}>
                                        <div className={`${darkMode ? "text-white" : ""} text-text-color hover:text-black duration-300 cursor-pointer`}>Home</div>
                                    </div>
                                    <div className={`${darkMode}  center `}>
                                        <div className={`${darkMode ? "text-white" : ""} text-text-color hover:text-black duration-300 cursor-pointer`}>About</div>
                                    </div>
                                    <div className={`${darkMode}  center `}>
                                        <div className={`${darkMode ? "text-white" : " hover:text-black"} text-text-color  duration-300 cursor-pointer`}>Services</div>
                                    </div>
                                    <div className={`${darkMode}  center `}>
                                        <div className={`${darkMode ? "text-white" : ""} text-text-color hover:text-black duration-300 cursor-pointer`}>Project</div>
                                    </div> */}
                                    <div className='col-span-2'>
                                        <div className={`${darkMode ? "bg-white" : "bg-primary text-white  "}  center py-4  cursor-pointer  hover:bg-active-color duration-300 mx-4 `}>
                                            Contact
                                        </div>
                                    </div>
                                    <div className={`${darkMode ? "text-white" : ""} center duration-300`}>
                                        <button className={`duration-300`} onClick={() => handleDrakMode()}>Dark</button>
                                    </div>
                                </div>
                            </div>
                        </nav>
                        )
                       
                    })}
                    
                </div>
            </section>

            <section className='pt-[150px] container mx-auto '>
                <div className=' grid grid-cols-2 py-8'>
                    <div className='relative h-full'>
                        <div className='grid grid-cols-3 relative '>
                            <div className={` text-primary text-[54px] pt-16 col-span-2 `}>Bala Murugan</div>
                            <div className='flex justify-end '><img src={Arrow} alt="arrow" className='h-[100px] absolute bottom-0' /></div>
                        </div>
                        <div className='flex   pt-10'>
                            <div className='h-[2px] mt-4 w-[60px] bg-[#222]'>

                            </div>
                            <div className={` text-h2 px-4`}>
                                Frontend Developer, with Knowledge in web development and design, I offer the best projects resulting in quality work.
                            </div>
                            <div className='  grid grid-cols-2'>
                                <div className='absolute bottom-[100px] left-0 bg-primary h-[40px] w-[40px]'>
                                    {/* <IconNameCgArrowsScrollV/> */}

                                </div>
                                <div className='absolute bottom-[70px] right-0'>
                                    <img src={artsign} />
                                </div>

                            </div>
                        </div>

                    </div>

                    <div>
                        <img src={profile} alt="profile" className='mx-auto' />
                    </div>

                </div>
            </section>
        </div>
    )
}
