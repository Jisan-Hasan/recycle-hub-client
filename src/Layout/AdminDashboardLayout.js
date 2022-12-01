import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';

const AdminDashboardLayout = () => {
    return (
        <div className="container mx-auto">
            <Navbar />
            <div className="drawer drawer-mobile md:mt-14">
                <input
                    id="dashboard-drawer"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="drawer-content">
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label
                        htmlFor="dashboard-drawer"
                        className="drawer-overlay"
                    ></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li>
                            <Link to="/adminDashboard/allSeller">
                                All Seller
                            </Link>
                        </li>
                        <li>
                            <Link to="/adminDashboard/allBuyer">
                                All Buyer
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboardLayout;