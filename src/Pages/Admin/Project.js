import React, { useEffect, useState } from 'react'
import Minlayout from '../../Components/Layout/Min-layout'
import axios from 'axios'
import { RiEditBoxLine, RiDeleteBin5Line } from "react-icons/ri";
import ActionPopUp from '../../Components/Fields/ActionPopUp';
import PopUp from '../../Components/Layout/PopUp';
import ActionBar from '../../Components/Layout/ActionBar';
import InputBox from '../../Components/Fields/InputBox';

export default function Project() {
    const [data, setData] = useState()
    const [popUpState, setPopUpState] = useState(false)
    const [action, setAction] = useState("")
    const [vaild, setVaild] = useState(true)
    const [vaildSubmit, setVaildSubmit] = useState(false)

    const [values, setValues] = useState({
        tag: "",
        title: "",
        des: "",
        preview_link: "",
        githab_links: "",
    })

    const [errors, setErrors] = useState({
        tag: "",
        title: "",
        des: "",
        preview_link: "",
        githab_links: "",
    })
    const [options, setOptions] = useState(["challenge", "personal", "work"])

    const getProjectData = () => {
        axios.get("http://localhost:4000/api/projectGetAll")
            .then((res) => {
                console.log(res)
                setData(res.data.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
        console.log(values)
    }

    if (vaild === true) {
        if (values.tag === "" || values.tag === undefined) {
            errors.tag = "tag is required"
        } else {
            errors.tag = true
        }

        if (values.title === "" || values.title === undefined) {
            errors.title = "title is required"
        } else {
            errors.title = true
        }

        if (values.des === "" || values.des === undefined) {
            errors.des = "des is required"
        } else {
            errors.des = true
        }

        if (values.preview_link === "" || values.preview_link === undefined) {
            errors.preview_link = "preview link is required"
        } else {
            errors.preview_link = true
        }

        if (values.githab_links === "" || values.githab_links === undefined) {
            errors.githab_links = "preview link is required"
        } else {
            errors.githab_links = true
        }
    }
    const editProject = (v, i) => {
        setValues(v)

        setPopUpState(true)
        setAction("Update")
    }

    const submitHandlerUpdate = () => {
        axios.put(`http://localhost:4000/api/updateProject/${values._id}`, values)
            .then((res) => {
                alert("Submited")
                getProjectData()
                setPopUpState(false)
                setValues({
                    tag: "",
                    title: "",
                    des: "",
                    preview_link: "",
                    githab_links: "",
                })

                setErrors({
                    tag: "",
                    title: "",
                    des: "",
                    preview_link: "",
                    githab_links: "",
                })
            })
            .catch((err) => {
                alert("error")
            })
    }

    const submitHandler = () => {
        console.log(values)

        setVaildSubmit(true)
        if (errors.tag === true && errors.githab_links === true && errors.preview_link === true && errors.des === true && errors.title === true && errors.tag === true) {
            axios.post("http://localhost:4000/api/AddProject", values)
                .then((res) => {
                    getProjectData()
                    setPopUpState(false)
                    setValues({
                        tag: "",
                        title: "",
                        des: "",
                        preview_link: "",
                        githab_links: "",
                    })

                    setErrors({
                        tag: "",
                        title: "",
                        des: "",
                        preview_link: "",
                        githab_links: "",
                    })
                })
                .catch((err) => {
                    alert("error")
                })

        }
    }
    const deleteProject = (v, i) => {
        axios.delete(`http://localhost:4000/api/deleteProject/${v._id}`)
            .then((res) => {
                alert("Submited")
                getProjectData()
                setPopUpState(false)
                setValues({
                    tag: "",
                    title: "",
                    des: "",
                    preview_link: "",
                    githab_links: "",
                })

                setErrors({
                    tag: "",
                    title: "",
                    des: "",
                    preview_link: "",
                    githab_links: "",
                })
            })
            .catch((err) => {
                alert("error")
            })
    }
    const popUpHandler = () => {
        setPopUpState(!popUpState)
    }
    const toggleHandler = () => {
        setValues({
            tag: "",
            title: "",
            des: "",
            preview_link: "",
            githab_links: "",
        })
        setAction("Add")
        setPopUpState(true)
    }

    useEffect(() => {
        getProjectData()
    }, [])

    return (
        <div>
            <Minlayout>
                <PopUp
                    state={popUpState}
                    handleClick={popUpHandler}
                    width={"lg"}
                    // actionbar="fa"
                    title={action}
                // type={popup.type}
                // message={popup.message}
                // handleClick={popUpHandler}
                >
                    <div className='px-4 py-4'>
                        <div className=' grid grid-cols-2 gap-4'>
                            <div>
                            <label class="  myPoppinsFont text-dash-text-color font-semibold text-tiny ">Tag</label>
                                <select
                                    className="w-full mt-[2px]  myPoppinsFont h-[40px] border text-tiny border-[#ccc] p-2"
                                    value={values.tag}
                                    name="tag"
                                    onChange={(e) => handleChange(e)}
                                    id="tag"
                                >
                                    {options?.map((v, i) => {
                                        return (
                                            <option 
                                           name="tag"  value={v}>{v}</option>
                                        )
                                    })}
                                </select>

                                {vaildSubmit ? <span className=' text-[#cc3c3c] texy-[12px]'>{errors.tag}</span> : null}
                            </div>
                            <div>
                                <InputBox
                                    label="Title"
                                    placeholder="Enter the Title"
                                    className="w-full"
                                    type="text"
                                    name="title"
                                    value={values.title}
                                    id="title"
                                    handleChange={(e) => handleChange(e)}
                                />
                                {vaildSubmit ? <span className=' text-[#cc3c3c] texy-[12px]'>{errors.title}</span> : null}
                            </div>
                            <div className='col-span-2'>
                                <InputBox
                                    label="Description"
                                    placeholder="Enter the description"
                                    className="w-full"
                                    type="text"
                                    name="des"
                                    value={values.des}
                                    id="des"
                                    handleChange={(e) => handleChange(e)}
                                />
                                {vaildSubmit ? <span className=' text-[#cc3c3c] texy-[12px]'>{errors.des}</span> : null}

                            </div>
                            <div className=' col-span-2'>
                                <InputBox
                                    label="Preview Link"
                                    placeholder="Enter the Preview Link"
                                    className="w-full"
                                    type="text"
                                    name="preview_link"
                                    value={values.preview_link}
                                    id="preview_link"
                                    handleChange={(e) => handleChange(e)}
                                />
                                {vaildSubmit ? <span className=' text-[#cc3c3c] texy-[12px]'>{errors.preview_link}</span> : null}
                            </div>
                            <div className=' col-span-2'>
                                <InputBox
                                    label=" Githab Links"
                                    placeholder="Enter the Githab Links"
                                    className="w-full"
                                    type="text"
                                    name="githab_links"
                                    value={values.githab_links}
                                    id="githab_links"
                                    handleChange={(e) => handleChange(e)}
                                />
                                {vaildSubmit ? <span className=' text-[#cc3c3c] texy-[12px]'>{errors.githab_links}</span> : null}

                            </div>

                        </div>
                        <div className=' flex justify-end pt-4'>
                            <button onClick={popUpHandler} className="bg-dashboard cursor-pointer py-1  text-tiny hover:bg-dashboard-hover px-8 text-white">
                                Cancel
                            </button>

                            {action === "Add" ? <button onClick={(e) => submitHandler(e)} className="bg-dashboard cursor-pointer mx-2 text-tiny py-1 hover:bg-dashboard-hover px-8 text-white">
                                Save
                            </button> : <button onClick={(e) => submitHandlerUpdate(e)} className="bg-dashboard cursor-pointer mx-2 text-tiny py-1 hover:bg-dashboard-hover px-8 text-white">
                                Update
                            </button>}

                        </div>

                    </div>




                </PopUp>

                <ActionBar
                    button_name="Add"
                    event={() => toggleHandler()}
                >
                </ActionBar>


                <table className='w-full'>
                    <tr className='py-2 bg-[#e3e3e3]'>
                        <td className="myPoppinsFont text-sm tracking-wider text-dash-text-color py-2 px-2 ">
                            Index
                        </td>
                        <td className="myPoppinsFont text-sm tracking-wider text-dash-text-color py-2 px-2 ">
                            Tag
                        </td>
                        <td className="myPoppinsFont text-sm tracking-wider text-dash-text-color py-2 px-2 ">
                            title
                        </td>
                        <td className="myPoppinsFont text-sm tracking-wider text-dash-text-color py-2 px-2 ">
                            des
                        </td>
                        <td className="myPoppinsFont text-sm tracking-wider text-dash-text-color py-2 px-2 ">
                            preview_link
                        </td>
                        <td className="myPoppinsFont text-sm tracking-wider text-dash-text-color py-2 px-2 ">
                            heart_likes
                        </td>
                        <td className="myPoppinsFont text-sm tracking-wider text-dash-text-color py-2 px-2 ">
                            gitdab_links
                        </td>
                        <td className="myPoppinsFont text-sm tracking-wider text-dash-text-color py-2 px-2 ">
                            gitlab_count
                        </td>
                        <td className="myPoppinsFont text-sm tracking-wider text-dash-text-color py-2 px-2 "> Edit</td>
                        <td className="myPoppinsFont text-sm tracking-wider text-dash-text-color py-2 px-2 "> Delete</td>
                    </tr>
                    <tbody>
                        {data?.map((v, i) => {

                            return (
                                <tr key={v._id}>
                                    <td className='myPoppinsFont text-left text-base text-text-color py-1'>{i}</td>
                                    <td className='myPoppinsFont text-left text-base text-text-color py-1'>{v?.tag}</td>
                                    <td className='myPoppinsFont text-left text-base text-text-color py-1'>{v?.title}</td>
                                    <td className='myPoppinsFont text-left text-base text-text-color py-1'>{v?.des}</td>
                                    <td className='myPoppinsFont text-left text-base text-text-color py-1'>{v?.preview_link}</td>
                                    <td className='myPoppinsFont text-left text-base text-text-color py-1'>{v?.heart_likes}</td>
                                    <td className='myPoppinsFont text-left text-base text-text-color py-1'>{v?.githab_links}</td>
                                    <td className='myPoppinsFont text-left text-base text-text-color py-1'>{v?.gitlab_count}</td>

                                    <td className='myPoppinsFont text-left text-base text-text-color py-1'>
                                        <RiEditBoxLine className='mx-auto cursor-pointer text-dashboard' onClick={() => editProject(v, i)} />
                                    </td>
                                    <td className='myPoppinsFont cursor-pointer  text-base py-1'>
                                        <RiDeleteBin5Line onClick={() => deleteProject(v, i)} className='mx-auto text-[#ff593d] text-base' />
                                    </td>
                                </tr>

                            )
                        })}
                        <tr>

                        </tr>
                    </tbody>
                </table>

            </Minlayout>
        </div>
    )
}
