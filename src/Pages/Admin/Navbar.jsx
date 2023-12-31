import React, { useEffect, useState } from 'react'
import Minlayout from '../../Components/Layout/Min-layout'
import InputBox from '../../Components/Fields/InputBox'
import axios from 'axios'
import { RiEditBoxLine, RiDeleteBin5Line } from "react-icons/ri";
import PopUp from '../../Components/Layout/PopUp';
import Button from '../../Components/Fields/Button';
import ActionBar from '../../Components/Layout/ActionBar';
import ActionPopUp from '../../Components/Fields/ActionPopUp';

function Navbar() {
    const [getData, setGetData] = useState()
    const [data, setData] = useState({
        nav_name: "",
        url: ""
    })
    const [popUpState, setPopUpState] = useState(false)
    const [popup, setPopUp] = useState({
        type: "",
        message: ""
    })
    const [action, setAction] = useState("")

    const [updateValue, setUpdateValue] = useState({
        nav_name: "",
        url: ""
    })
    const [defaultVal, setDefaultVal] = useState(true)

    const [editPopUp, setEditPopUp] = useState(false)
    const [message, setMessage] = useState("")


    const [dataVal, setDataVal] = useState(false)

    const [toggle, setToggle] = useState(false)
    const [errors, setErrors] = useState({
        nav_name: "",
        url: ""
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        })
    }

    if (defaultVal === true) {
        if (data.nav_name === "" || data.nav_name === undefined) {
            errors.nav_name = "Enter the Nav Name"
        } else {
            errors.nav_name = true
        }
        if (data.url === "" || data.url === undefined) {
            errors.url = "Enter the  URL"
        } else {
            errors.url = true
        }
    }
    const handleSubmit = () => {
        console.log(errors.nav_name)
        setDataVal(true)
        if (errors.nav_name === true && errors.url === true) {
            AddNavData()
        }
    }

    const popUpHandler = () => {
        setPopUpState(!popUpState)
    }



    const AddNavData = () => {
        axios.post("http://localhost:4040/api/addNav", data)
            .then((res) => {
                setToggle(false)
                getAllData()
                console.log(res.status, "201")
                if (res.status === 201) {
                    alert("201")
                    setPopUpState(true)
                    setPopUp({
                        type: "success",
                        message: "Nav Added SuccessFully..."
                    })
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const DeleteNav = (v) => {
        axios.delete(`http://localhost:4040/api/removeNav/${v._id}`, v)
            .then((res) => {
                setToggle(false)
                getAllData()
                console.log(res.status, "201")
                if (res.status === 200) {
                    alert("201")
                    setPopUpState(true)
                    setPopUp({
                        type: "success",
                        message: "Nav Added SuccessFully..."
                    })
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const updateDataNavData = () => {
        axios.put(`http://localhost:4040/api/updateNav/${data._id}`, data)
            .then((res) => {
                setToggle(false)
                getAllData()
                console.log(res.status, "201")
                if (res.status === 200) {
                    alert("201")
                    setPopUpState(true)
                    setPopUp({
                        type: "success",
                        message: "Nav Added SuccessFully."
                    })
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const getAllData = () => {
        axios.get("http://localhost:4040/api/getAllNav")
            .then((res) => {

                setGetData(res.data.nav_data)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    useEffect(() => {
        getAllData()
    }, [])

    const Edit = (v, i) => {
        setToggle(!toggle)
        setAction("Edit")
        // data.nav_name = v.nav_name
        // data.url = v.url
        setData(v)
        setEditPopUp(true)
    }



    useEffect(() => {

    }, [])

    const updatePop = () => {
        updateDataNavData()
    }

    const toggleHandler = () => {
        setAction("Add")
        setData({})
        setToggle(!toggle)
        setDataVal(false)
    }

    return (
        <div>

            <Minlayout>
                <PopUp
                    state={popUpState}
                    type={popup.type}
                    message={popup.message}
                    handleClick={popUpHandler}
                />

                <ActionPopUp
                    state={toggle}
                    title={action}
                >
                    
                    <InputBox
                        label="Nav Name"
                        placeholder="Enter the Nav name"
                        className="w-full"
                        type="text"
                        name="nav_name"
                        value={data.nav_name}
                        id="nav_name"
                        handleChange={(e) => handleChange(e)}
                    />
                    {dataVal ? <span className='text-error text-sm'> {errors.nav_name}</span> : null}
                    <InputBox
                        divclass="pt-2"
                        label="Nav Name"
                        name="url"
                        id="url"
                        value={data.url}
                        placeholder="Enter the Nav ID"
                        className="w-full "
                        handleChange={(e) => handleChange(e)}
                    />
                    {dataVal ? <span className='text-error text-sm'> {errors.url}</span> : null}
              
                    {action === "Add" ? <div className="flex justify-end px-4 pt-3 ">
                        <Button name="Cancel" className="mx-2" onClick={() => toggleHandler()} />
                        <Button name="Add" onClick={handleSubmit} />
                    </div> : <div className="flex justify-end px-4 pt-3 ">
                        <Button name="Cancel" className="mx-2" onClick={() => toggleHandler()} />
                        <Button name="Update" onClick={updatePop} />
                    </div>}

                </ActionPopUp>
                <ActionBar
                    button_name="Add"
                    event={() => toggleHandler()}
                >
                </ActionBar>


                <div className='p-2'>

                    <table className='w-[100%]'>
                        <tr className='py-2 bg-[#e3e3e3]'>
                            <th className="myPoppinsFont text-sm tracking-wider text-dash-text-color py-2 "> ID</th>
                            <th className="myPoppinsFont text-sm tracking-wider text-dash-text-color py-2 "> Nav Name</th>
                            <th className="myPoppinsFont text-sm tracking-wider text-dash-text-color py-2"> URL</th>
                            <th className="myPoppinsFont text-sm tracking-wider text-dash-text-color py-2 "> Edit</th>
                            <th className="myPoppinsFont text-sm tracking-wider text-dash-text-color py-2 "> Delete</th>
                        </tr>
                        <tbody>

                            {getData?.map((v, i) => {
                                return (
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
                                            <RiEditBoxLine className='mx-auto text-dashboard' onClick={() => Edit(v, i)} />
                                        </td>
                                        <td className='myPoppinsFont   text-base py-1'>
                                            <RiDeleteBin5Line onClick={() => DeleteNav(v, i)} className='mx-auto text-[#ff593d] text-base' />
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
