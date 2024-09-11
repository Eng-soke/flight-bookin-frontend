
import { useState, useEffect } from "react"
import axios from "axios"
import SideNave from "./SideNave"
function Report() {

    const [getReport, setGetReport] = useState([])


    const getAllReports = () => {
        axios.get("https://backendflightbookin1.onrender.com/report/get").then((response) => {
            setGetReport(response.data)
        }).catch((error) => console.log(error))
    }
    useEffect(() => {
        getAllReports()
    }, [])

    return <div className=" ">
        <SideNave />
        <div className="sm:ml-[25%] ml-5 pt-10">

            <div className="grid sm:grid-cols-2 gap-5">

                {
                    getReport.map((report) => {
                        return <div className="">
                            <div className="flex gap-2">
                                <div>
                                    <p className="font-bold pl-2">Name</p>
                                    <div className="bg-white shadow-md border-2 border-sky-500 sm:w-[200px] w-[150px] h-[30px] rounded hover:bg-sky-500 hover:text-white  m-2 "> {report.name} </div>
                                </div>
                                <div>

                                    <p className="font-bold pl-2">Email</p>
                                    <div className="bg-white shadow-md border-2 border-sky-500 sm:w-[200px] w-[157px] h-[30px] rounded hover:bg-sky-500 hover:text-white  m-2 "> {report.email} </div>
                                    </div>
                           
                            </div>
                            <p className="font-bold pl-2">Report or message</p>
                            <div className="bg-white shadow-md border-2 border-sky-500 sm:w-[425px] w-[330px] h-[220px] rounded hover:bg-sky-500 hover:text-white p-2 m-2 "> {report.description} </div>
                        </div>
                    })
                }

            </div>
        </div>




    </div>
}
export default Report