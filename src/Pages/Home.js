import React, { useEffect, useState } from 'react'
import "../Components/CSS/style.css"
import "../Components/CSS/responsive.css"
import axios from 'axios'
import Arrow from "../Components/Assets/Images/arrow.png"
import diamond from "../Components/Assets/Images/diamond.png"
import artsign from "../Components/Assets/Images/art-sign.png"
import { IconNameCgArrowsScrollV } from "react-icons/cg";
import profile from "../Components/Assets/Images/bala.png"
import { RiCodeSSlashLine, RiArrowRightUpLine, RiHeartLine, RiGithubLine, RiLinkedinLine, RiMailSendLine } from "react-icons/ri";
import about from "../Components/Assets/Images/about-bala.png"
import { PiTelegramLogoLight } from "react-icons/pi";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import './styles.css';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

// import './styles.css';

export default function Home() {
    const [data,setData]=useState({
        name:"",
        email:"",
        subject:"",
        message:""
    })

    const [project,setProject] =useState()

    const [errors,setErrors]=useState({
        name:"",
        email:"",
        subject:"",
        message:""
    })

    const [count,setCount] =useState(false)
    const [fnProject,setfnProject]=useState()

    const [darkMode, setDarkMode] = useState(false)
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [vaild,setvaild]=useState(true)
    const handleDrakMode = () => {
        setDarkMode(!darkMode)
    }

    const handleChange =(e)=>{
        const {name,value} = e.target;
        setData({
            ...data,
            [name]:value,
        })
    }

    if(vaild===true){
        let regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        if(data.name==="" || data.name===undefined){
            errors.name = "Enter the Name"
        }else{
            errors.name= true
        }

        if(data.subject==="" || data.subject===undefined){
            errors.subject = "Enter the Subject"
        }else{
            errors.subject= true
        }

        if (data.email === "" || data.email === undefined) {
            errors.email = "Enter the Email"
        } else if (!regex.test(data.email)) {
            errors.email = "vaild email required"
        } else {
            errors.email = true
        }
    }


    const getProjectData = () => {
        axios.get("http://localhost:4000/api/projectGetAll")
            .then((res) => {
                console.log(res)
                setProject(res.data.data)
                setfnProject(res.data.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    useEffect(()=>{
        getProjectData()
    },[])

    const handleClick= (e)=>{
        e.preventDefault();
        console.log(data)
        console.log(errors)
        if(errors.name===true && errors.email===true && errors.subject===true){

            alert("Submited")
        }
        
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

    const githubClick =(v,i) =>{
        let values = {
            preview_count_flag:true,
            heart_likes_count:false
        }

        console.log(values)
        var element = document.getElementById(`${v?._id}`).style.fill = "#FF0000"
        console.log(document.getElementById(`${v?.title}`))
        axios.put(`http://localhost:4000/api/updateProject/${v._id}`,values)
        .then((res)=>{
            getProjectData()
        })
        .catch((err)=>{
            alert("error")
        })
    }

    const heartClick = (v,i) =>{
        let values = {
            heart_likes_count:true
        }
        var element = document.getElementById(`${v?.title}`).style.fill = "#FF0000"
        console.log(document.getElementById(`${v?.title}`))
                setCount(true)
        axios.put(`http://localhost:4000/api/updateProject/${v._id}`,values)
        .then((res)=>{
            getProjectData()
        })
        .catch((err)=>{
            alert("error")
        })
    }

    return (
        <div>
            <section className={` ${darkMode ? 'bg-primary' : "bg-secondary"} z-50 sm:hidden fixed w-full box-shadow`}>
                <div className='container mx-auto'>
                    {nav?.map((v) => {
                        return (
                            <nav className='py-8 grid grid-cols-2 h-full'>
                                <div className='flex col-span-1 h-full py-3'>
                                    <div className='h-[30px] rounded-[50%]  w-[30px] bg-black center text-white'>
                                        B
                                    </div>
                                    <div className={`${darkMode ? "text-white" : "text-primary"} text-h5 mx-4 pt-1 `}>{v?.user_name}</div>
                                </div>
                                <div className=' col-span-1'>
                                    <div className='flex justify-end'>
                                        {v?.nav_list.map((nav) => {
                                            return (
                                                <div className={`${darkMode}  center `}>

                                                    <div className={`${darkMode ? "text-white" : ""} text-text-color px-10 hover:text-black duration-300 cursor-pointer`}>{nav?.name}</div>
                                                </div>
                                            )
                                        })}

                                        <div className='col-span-2'>
                                            <div className={`${darkMode ? "bg-white" : "bg-primary text-white  "}  center py-4 px-10  cursor-pointer  hover:bg-active-color duration-300 mx-4 `}>
                                                Contact
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        )

                    })}

                </div>
            </section>

            <section className='pt-[150px] container mx-auto '>
                <div className=' grid grid-cols-2 pb-[120px] md:grid-cols-1 lg:grid-cols-2  lgmd:grid-cols-2  sm:grid-cols-1 sm:px-2'>
                    <div className='relative h-full'>
                        <div className='grid  pt-[90px] grid-cols-3 relative '>
                            <div className={`  text-primary sm:text-center text-[54px] pt-16 col-span-2 sm:text-[34px] `}>Bala Murugan</div>
                            <div className='flex justify-end '>
                                <img src={Arrow} alt="arrow" className='h-[100px] absolute bottom-0' />
                            </div>
                        </div>
                        <div className='flex  pt-10'>
                            <div className='h-[2px] mt-4 w-[60px] bg-[#222]'>
                            </div>
                            <div className={` text-h2 px-4 sm:text-h3`}>
                                Frontend Developer, with Knowledge in web development and design, I offer the best projects resulting in quality work.
                            </div>
                            <div className=' lg:visible md:hidden xl:visible visible lgmd:visible mdsm:visible sm:hidden '>Hello</div>
                            <div className='  grid grid-cols-2'>
                                <div className='sm:hidden absolute bottom-[100px] left-0 bg-primary h-[40px] w-[40px]'>
                                </div>
                                <div className='absolute bottom-[70px] right-0 sm:hidden'>
                                    <img src={artsign} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={profile} alt="profile" className='mx-auto mt-10' />
                    </div>
                </div>
            </section>

            <section className=' bg-secondary py-16 sm:px-2 sm:pb-0'>
                <div className='  py-10 container mx-auto sm:pb-0'>
                    <div className=' grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2  lgmd:grid-cols-2 py-8 sm:grid-cols-1'>


                        <div>
                            <img src={about} alt="about" className='mx-auto px-16 sm:px-0' />
                        </div>
                        <div className='relative h-full py-10'>
                            <div className='grid grid-cols-3 relative '>
                                <div className={` text-primary text-[44px] sm:text-[34px] pt-16 sm:pt-10 col-span-2 `}>About me</div>

                            </div>
                            <div className='flex   pt-10'>
                                <div className='h-[2px] mt-4 w-[60px] bg-[#222]'>

                                </div>
                                <div className={` text-h2 text-text-color px-4 sm:text-h4`}>
                                    Passionate about creating Web Pages with UI/UX User Interface. I have a year of experience and many client are happy with the project carried out.
                                </div>

                            </div>
                            <div className='px-10 pt-8 sm:px-4'>
                                <div className='text-primary sm:text-h5'>
                                    My SKill Are : <span className='text-text-color'>HTML, CSS, JavaScript, Jquery, React JS, Redux, Tailwind CSS, Bootstrap, JSON,  API Intergation and Github </span>
                                </div>
                            </div>
                            <button className='mx-10 sm:mx-4  my-10 flex group bg-primary text-white    center py-4  cursor-pointer  hover:bg-active-color duration-300   px-10'><PiTelegramLogoLight className='mx-2 text-h5 ' /> Contact Me</button>

                        </div>


                    </div>

                </div>
            </section>

            <section className='py-8 sm:p-2'>
                <div className=' container mx-auto py-16  sm:pb-0'>
                    <div className={` text-primary text-[44px] sm:text-[34px] text-center sm:pt-8  `}>Working On</div>
                    <div className=' grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 lgmd:grid-cols-3 sm:grid-cols-1 gap-16  pt-16'>
                        <div className=' border-4 py-[100px] px-10 border-[#222]'>
                            <div className=' h-[40px] w-[40px] relative border-2 center border-[#222]'>
                                <RiCodeSSlashLine className=' text-h2' />
                                <div className=' h-[36px] w-[36px] bg-[#ff0000b0] absolute top-[-16px] right-[-8px]'>
                                </div>
                            </div>
                            <div className=' text-h2 py-4'>
                                Web development
                            </div>
                            <p className=' text-text-color sm:text-base'>
                                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                            </p>
                        </div>

                        <div className=' border-4 py-[100px] px-10 border-[#222]'>
                            <div className=' h-[40px] w-[40px] relative border-2 center border-[#222]'>
                                <RiCodeSSlashLine className=' text-h2' />
                                <div className=' h-[36px] w-[36px] bg-[#ff0000b0] absolute top-[-16px] right-[-8px]'>
                                </div>
                            </div>
                            <div className=' text-h2 py-4'>
                                Web development
                            </div>
                            <p className=' text-text-color'>
                                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                            </p>
                        </div>

                        <div className=' border-4 py-[100px] px-10 border-[#222]'>
                            <div className=' h-[40px] w-[40px] relative border-2 center border-[#222]'>
                                <RiCodeSSlashLine className=' text-h2' />
                                <div className=' h-[36px] w-[36px] bg-[#ff0000b0] absolute top-[-16px] right-[-8px]'>
                                </div>
                            </div>
                            <div className=' text-h2 py-4'>
                                Web development
                            </div>
                            <p className=' text-text-color'>
                                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                            </p>
                        </div>
                        <div>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='bg-secondary py-16 sm:p-2 sm:pb-10'>
                <div className=' container mx-auto pt-8 sm:pb-16'>
                    <div className={` text-primary text-[44px] text-center sm:text-[34px]  sm:pt-8 `}>Project </div>

                 
                    <div className=' grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 lgmd:grid-cols-3 sm:grid-cols-1 gap-16 py-10'>
                      
                    {fnProject?.map((v,i)=>{
                        return(
                            <div key={v?._id}>
                                  <div className=' group'>
                            <div className='relative'>
                                <img src="https://images.pexels.com/photos/2312369/pexels-photo-2312369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                                <div className={`  h-[50px] absolute w-[50px] bg-primary group cursor-pointer hover:bg-active-color duration-300 center right-6 bottom-[-20px]`}>
                                    <a href={v?.preview_link} target='_blank'>

                                    <RiArrowRightUpLine className=' text-h2 text-white group-hover:text-white' />
                                    </a>
                                </div>
                            </div>
                            <div>
                                <div className=' flex'>
                                    <div className=' bg-black h-[3px] w-[30px] mt-8'>

                                    </div>
                                    <div className=' pt-5 px-4 leading-[26px]  text-black text-[14px]'>
                                        {v?.tag}
                                    </div>
                                </div>

                                <div className=' pt-2 text-h2 group-hover:text-active-color duration-300'>
                                    {v?.title}
                                </div>
                                <p className=' text-text-color pt-2'>
                                    {v?.des}
                                </p>

                                <div className=' my-4'>
                                    <div className=' flex'>
                                        <RiGithubLine id={v?._id} onClick={()=>githubClick(v,i)} className=' text-h5 mr-4 hover:text-active-color cursor-pointer' />
                                        <RiHeartLine id={v?.title} onClick={()=>heartClick(v,i)} className={`  text-h5 hover:text-active-color cursor-pointer`} />
                                       <span className=' leading-[40px] text-[12px] text-active-color'>{v?.heart_likes}</span> 
                                    </div>

                                </div>

                                <div>

                                </div>


                            </div>
                        </div>
                            </div>
                        )
                    })}
                       
                    </div>
                </div>

            </section>

            <section className='  '>
                <div className=' flex w-[100%] md:block lg:flex sm:block'>
                    <div className=' lg:w-[45%] md:w-[100%] sm:w-[100%] relative py-16 sm:pb-0'>

                        <div className='lg:w-[60%] md:w-[100%] sm:w-[100%] pt-10 right-[-40px] absolute sm:right-0 sm:relative'>
                            <div className=' p-6 border-b-4 border-active-color  bg-secondary '>


                                <div className=' flex justify-end'>

                                    <img src={diamond} className='mx-6' />
                                </div>
                                <div className=' relative'>
                                    <div className={` absolute left-[-60px] sm:relative  sm:left-0 text-primary text-[44px] text-center  `}>Contact Me.</div>

                                    <p className='pt-[100px] px-6 text-text-color'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                                    <p className='pt-6 pb-10 px-6 text-text-color'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>

                                </div>

                            </div>
                            <div className='py-10 flex justify-end px-20 sm:justify-center'>
                                <div className=' mr-4 h-[40px] w-[50px] group hover:bg-active-color duration-300 cursor-pointer bg-secondary center'>
                                    <RiMailSendLine className=' text-text-color group-hover:text-white text-h3 duration-300' />
                                </div>
                                <div className=' mr-4 h-[40px] w-[50px] group hover:bg-active-color duration-300 cursor-pointer bg-secondary center'>
                                    <RiLinkedinLine  className=' text-text-color group-hover:text-white text-h3 duration-300' />
                                </div>

                            </div>
                        </div>





                    </div>


                    <div className=' lg:w-[55%] md:w-[100%] sm:w-[100%] bg-[black]  sm:p-2 py-16'>

                        <div className=' px-[100px] py-16 sm:px-0 sm:pb-0'>
                            <p className=' text-h2 text-white'>Send Me A Message</p>

                            <form>
                                <div className=' grid grid-cols-2 sm:grid-cols-1  pt-8 pb-8'>
                                    <div className=' '>
                                        <input onChange={(e)=>handleChange(e)} name="name" type="text" id="name" placeholder='Name ' className=' placeholder:text-white bg-[black] text-[white]  font-light tracking-wide w-[95%] border-[1px] py-2 px-4 sm:w-[100%] sm:mb-8 border-[white]' />

                                    </div>
                                    <div>
                                        <input onChange={(e)=>handleChange(e)} name="email" type="text" id="email" placeholder='Email ' className=' placeholder:text-white  bg-[black] text-[white]   w-full border-[1px] py-2 px-4  border-[white]' />
                                    </div>


                                </div>
                                <div className=' pb-8'>
                                    <input onChange={(e)=>handleChange(e)} name="subject" type="text" id="subject" placeholder='Subject ' className='placeholder:text-white   bg-[black] text-[white]   w-full border-[1px] py-2 px-4   border-[white]' />

                                </div>

                                <div className=' pb-8'>
                                    <textarea onChange={(e)=>handleChange(e)} name="message" type="text" id="message" placeholder='Message ' className=' placeholder:text-white  h-[120px] bg-[black] text-[white]   w-full border-[1px] py-2 px-4   border-[white]' />

                                </div>

                                <div>

                                </div>
                                <button onClick={(e)=>handleClick(e)} className=' flex group bg-active-color text-white  hover:text-active-color  center py-4  cursor-pointer  hover:bg-white duration-300   px-10'><PiTelegramLogoLight className='mx-2 text-h5 group-hover:text-active-color' /> Contact Me</button>
                            </form>

                        </div>


                    </div>


                </div>

            </section>

            <footer>
                <div className=' bg-[#000] py-16'>
                    <div className=' container mx-auto '>
                        <div className='grid grid-cols-2 sm:grid-cols-1'>
                            <div className='sm:p-2'>
                                <p className=' text-text-color sm:pb-4 '>  balamurugan99711@gmail.com</p>
                            </div>
                            <div className=' flex justify-end sm:p-2 sm:flex-wrap sm:justify-start'>
                                <div className=' text-text-color px-6 sm:w-[48%] sm:px-0 hover:text-white cursor-pointer duration-300 sm:pb-4'>Home</div>
                                <div className=' text-text-color px-6 sm:w-[48%] sm:px-0 hover:text-white cursor-pointer duration-300 sm:pb-4'>About</div>

                                <div className=' text-text-color px-6 sm:w-[48%] sm:px-0 hover:text-white cursor-pointer duration-300 sm:pb-4'>Working on</div>
                                <div className=' text-text-color px-6 sm:w-[48%] sm:px-0 hover:text-white cursor-pointer duration-300 sm:pb-4'>Project</div>
                            </div>

                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
