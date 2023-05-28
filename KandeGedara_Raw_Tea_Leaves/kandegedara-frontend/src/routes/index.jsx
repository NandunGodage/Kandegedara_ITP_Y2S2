import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AdminLayout from "../layouts/admin-layout";
import SSSTGManagement from "../pages/admin/SSTG/SSTGManagement"
import Dashboard from '../pages/admin/VehicleManagement/vehicleMain';
import VehicleManagement from '../pages/admin/VehicleManagement/VehicleManagement';
import EmployeeReg from '../pages/admin/Employee/EmployeeReg';
import EmployeeAttendance from '../pages/admin/Employee/EmployeeAttendance';
import EmpReport from '../pages/admin/Employee/EmpReport';
import ItemManagement from "../pages/admin/ItemManagement/ItemManagement";
import Transaction from "../pages/admin/Transaction/Transaction";
import MainDashboard from "../pages/admin/Dashboard/Dashboard";
import PurchaseTeaLeaves from "../pages/admin/PurchaseTeaLeaves/PurchaseTeaLeaves";
import SellingTeaLeaves from "../pages/admin/SellTeaLeaves/SellingTeaLeaves";


function RouteComponent() {
    return (
        <div>
            <Router>
                <AdminLayout class="wrapper">
                    <Routes>
                        <Route path="admin/" element={<MainDashboard/>}/>
                        <Route path="admin/item" element={<ItemManagement/>}/>
                        <Route path="admin/vehicle" element={<Dashboard/>}/>
                        <Route path="admin/vehicleAdd" element={<VehicleManagement/>}/>
                        <Route path="admin/transaction" element={<Transaction/>}/>
                        <Route path="admin/sstg" element={<SSSTGManagement/>}/>
                        <Route path="admin/register" element={<EmployeeReg/>}/>
                        <Route path="admin/attendance" element={<EmployeeAttendance/>}/>
                        <Route path="admin/attendance/generateReport" element={<EmpReport/>}/>
                        <Route path="admin/purchaseTeaLeaves" element={<PurchaseTeaLeaves/>}/>
                        <Route path="admin/sellTeaLeaves" element={<SellingTeaLeaves/>}/>
                    </Routes>
                </AdminLayout>
            </Router>
        </div>

    )
}

export default RouteComponent;