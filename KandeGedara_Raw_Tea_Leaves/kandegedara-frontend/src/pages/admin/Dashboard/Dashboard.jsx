import React, {useEffect, useState} from 'react';
import './../../../styles/itemManagement.css';
import Axios from "axios";


function Dashboard() {
    const [sellingTeaLeavesDetails, setSellingTeaLeavesDetails] = useState([]);
    const [ID, setID] = useState("");
    const [itemName, setItemName] = useState("");
    const [salesRef, setSalesRef] = useState("");
    const [vehicleID, setVehicleID] = useState("");
    const [foctoryName, setFoctoryName] = useState("");
    const [foctoryAddress, setFoctoryAddress] = useState("");
    const [buyerName, setBuyerName] = useState("");
    const [leavesWeight, SetLeavesWeight] = useState("");
    const [price, setPrice] = useState("");
    const [date, setDate] = useState("");

    useEffect(() => {
        getAllSellingTeaLeavesDetails();
    }, [])

    const getAllSellingTeaLeavesDetails = () => {
        Axios.get('http://localhost:8000/sellingTeaLeaves/all').then((response) => {
            setSellingTeaLeavesDetails(response.data.data)
        })
    }
    const displaysellingTeaLeavesDetails = () => {
        return sellingTeaLeavesDetails.map((sellingTeaLeaves) => {
            return (<tr itemScope="row" id={sellingTeaLeaves._id} key={sellingTeaLeaves._id}>
                <td>
                    {sellingTeaLeaves.ID}
                </td>
                <td>
                    {sellingTeaLeaves.itemName}
                </td>
                <td> {sellingTeaLeaves.salesRef}</td>
                <td>{sellingTeaLeaves.vehicleID}</td>

                <td>  {sellingTeaLeaves.foctoryName}</td>
                <td>  {sellingTeaLeaves.foctoryAddress}</td>
                <td>  {sellingTeaLeaves.buyerName}</td>
                <td> {sellingTeaLeaves.leavesWeight}</td>
                <td>  {sellingTeaLeaves.price}</td>
                <td> {sellingTeaLeaves.date}</td>
            </tr>)
        })
    }


    return (

        <div className="main_container">
            <div className="item fw-bold">
                <h5 className="pageName">Dashboard</h5>
            </div>
            <div className="item">
                <div className="row mt-5 px-3">
                    <div className="col-6">
                        <h5 className="mb-0 fw-bold mt-2">All Slod Tea Leaves in the system</h5>
                        <h6>These are the sold tea leaves stock in the systems.</h6>
                    </div>
                    <div className="table-responsive">
                        <table className="table table-striped custom-table" id="assignItemTable">
                            <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Item Name</th>
                                <th scope="col">Sales Ref Name</th>
                                <th scope="col">Factory Name</th>
                                <th scope="col">Factory Address</th>
                                <th scope="col">Buyer Name</th>
                                <th scope="col">Leaves Weight</th>
                                <th scope="col">Price</th>
                                <th scope="col">Date</th>
                                <th scope="col"/>
                            </tr>
                            </thead>
                            <tbody>
                            {displaysellingTeaLeavesDetails()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Dashboard;

