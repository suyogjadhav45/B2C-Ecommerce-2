import React, { useState } from "react";
import { motion } from "framer-motion";
import { VscPreview } from "react-icons/vsc";
import { GrAddCircle } from "react-icons/gr";
import { MdDeliveryDining } from "react-icons/md";
import MyNavitem from "./MyNavitem";
import { Link, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "./SideBar.css";

const SideBar = ({ children }) => {
  const navigate = useNavigate();

  // return components
  return (
    <>
      <div className="bg-white scrolling text-black">
        <div className="main-container">
          <motion.div
            animate={{
              width: "280px",
              height:"h-screen",
            }}
            className={`sidebar `}
          >
            <div className="top_section">
              <h2 className="py-8 px-6 w-full border-2 border-blue-500 font-bold rounded-sm text-center bg-tailtertiary3 text-black flex">
                ADMIN DASHBOARD
              </h2>
            </div>

            {/* Home and Logout button */}
            <div>
              <div className="flex justify-center px-2 text-black font-bold">
                <button
                  className=" bg-tailtertiary py-2 hover:bg-tailtertiary3 w-full rounded-sm"
                  onClick={() => navigate("/dashboard/home")}
                >
                  HOME
                </button>
                <button
                  className="ml-2 py-2 bg-tailtertiary hover:bg-red-600 w-full rounded-sm"
                  onClick={() => navigate("/")}
                >
                  LOGOUT
                </button>
              </div>
            </div>

            {/* routes */}
            <section className="routes">

              {/* Add Product Menu */}
              <h2 className="border-2 border-black justify-center flex mx-1 py-2 bg-tailtertiary justify-center">
                Product Menu
              </h2>

              {/* Category */}
              <div className="dropdown">
                <button
                  className="btnclass btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Category
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <Link class="dropdown-item" href="#">
                      <MyNavitem
                        path="/dashboard/addcategory"
                        routename="Add Category"
                        icon={<GrAddCircle />}
                      />
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" href="#">
                      <MyNavitem
                        path="/dashboard/editcategory"
                        routename="Edit Category"
                        icon={<GrAddCircle />}
                      />
                    </Link>
                  </li>
                </ul>
              </div>

                {/* Subcategory */}
              <div className="dropdown">
                <button
                  className="btnclass btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Sub-Category
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <Link class="dropdown-item" href="#">
                      <MyNavitem
                        path="/dashboard/addsubcategory"
                        routename="Add SubCategory"
                        icon={<GrAddCircle />}
                      />
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" href="#">
                      <MyNavitem
                        path="/dashboard/editsubcategory"
                        routename="Edit SubCategory"
                        icon={<GrAddCircle />}
                      />
                    </Link>
                  </li>
                </ul>
              </div>


                {/* Brand */}
              <div className="dropdown">
                <button
                  className="btnclass btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Brand
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <Link class="dropdown-item" href="#">
                      <MyNavitem
                        path="/dashboard/addbrand"
                        routename="Add Brand"
                        icon={<GrAddCircle />}
                      />
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" href="#">
                      <MyNavitem
                        path="/dashboard/editbrand"
                        routename="Edit Brand"
                        icon={<GrAddCircle />}
                      />
                    </Link>
                  </li>
                </ul>
              </div>



              {/* UOM */}
              <div className="dropdown">
                <button
                  className="btnclass btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  UOM
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <Link class="dropdown-item" href="#">
                      <MyNavitem
                        path="/dashboard/AddUom"
                        routename="Add UOM"
                        icon={<GrAddCircle />}
                      />
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" href="#">
                      <MyNavitem
                        path="/dashboard/EditUom"
                        routename="Edit UOM"
                        icon={<GrAddCircle />}
                      />
                    </Link>
                  </li>
                </ul>
              </div>


              {/* Product */}
              <div className="dropdown">
                <button
                  className="btnclass btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Product
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <Link class="dropdown-item" href="#">
                      <MyNavitem
                        path="/dashboard/addproduct"
                        routename="Add Product"
                        icon={<GrAddCircle />}
                      />
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" href="#">
                      <MyNavitem
                        path="/dashboard/editproduct"
                        routename="Edit Product"
                        icon={<GrAddCircle />}
                      />
                    </Link>
                  </li>
                </ul>
              </div>

              <MyNavitem
                path="/dashboard/viewproducts"
                routename="View Products"
                icon={<VscPreview />}
              />


               {/* ADD ROLE MENU */}
              <h2 className="border-2 border-black justify-center flex  mx-1 py-2 bg-tailtertiary justify-center">
                Add Role Menu
              </h2>

              {/* Delivery Agent */}
              <div className="dropdown">
                <button
                  className="btnclass btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Delivery Agent
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <Link class="dropdown-item" href="#">
                      <MyNavitem
                        path="/dashboard/adddeliveryagent"
                        routename="Add Delivery Agent"
                        icon={<GrAddCircle />}
                      />
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" href="#">
                      <MyNavitem
                        path="/dashboard/editdeliveryagent"
                        routename="Edit Delivery Agent"
                        icon={<GrAddCircle />}
                      />
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Inventory Manager */}
              <div className="dropdown">
                <button
                  className="btnclass btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Inventory Manager
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <Link class="dropdown-item" href="#">
                      <MyNavitem
                        path="/dashboard/addinventorymanager"
                        routename="Add Inventory Manager"
                        icon={<GrAddCircle />}
                      />
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" href="#">
                      <MyNavitem
                        path="/dashboard/editinventorymanager"
                        routename="Edit Inventory Manager"
                        icon={<GrAddCircle />}
                      />
                    </Link>
                  </li>
                </ul>
              </div>
              

              {/* Vendor */}
              <div className="dropdown">
                <button
                  className="btnclass btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Vendor
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <Link class="dropdown-item" href="#">
                      <MyNavitem
                        path="/dashboard/addvendor"
                        routename="Add Vendor"
                        icon={<GrAddCircle />}
                      />
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" href="#">
                      <MyNavitem
                        path="/dashboard/editvendor"
                        routename="Edit Vendor"
                        icon={<GrAddCircle />}
                      />
                    </Link>
                  </li>
                </ul>
              </div>


              {/* Finance Manager */}
              <div className="dropdown">
                <button
                  className="btnclass btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Finance Manager
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <Link class="dropdown-item" href="#">
                      <MyNavitem
                        path="/dashboard/addfinancemanager"
                        routename="Add Finance Manager"
                        icon={<GrAddCircle />}
                      />
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" href="#">
                      <MyNavitem
                        path="/dashboard/editfinancemanager"
                        routename="Edit Finance Manager"
                        icon={<GrAddCircle />}
                      />
                    </Link>
                  </li>
                </ul>
              </div>


            {/* Customer */}
            <div className="dropdown">
                <button
                  className="btnclass btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Customer
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <Link class="dropdown-item" href="#">
                      <MyNavitem
                        path="/dashboard/addcustomer"
                        routename="Add Customer"
                        icon={<GrAddCircle />}
                      />
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" href="#">
                      <MyNavitem
                        path="/dashboard/editcustomer"
                        routename="Edit Customer"
                        icon={<GrAddCircle />}
                      />
                    </Link>
                  </li>
                </ul>
              </div>

              
              

              <h2 className="border-2 border-black justify-center flex  mx-1 py-2 bg-tailtertiary justify-center">
                View Menu
              </h2>
              <MyNavitem
                path="/dashboard/viewdeliveryagents"
                routename="View Delivery Agents"
                icon={<VscPreview />}
              />
              <MyNavitem
                path="/dashboard/viewinventorymanagers"
                routename="View Inventory Managers"
                icon={<VscPreview />}
              />
              <MyNavitem
                path="/dashboard/viewvendors"
                routename="View Vendors"
                icon={<VscPreview />}
              />
              <MyNavitem
                path="/dashboard/viewfinancemanagers"
                routename="View Finance Managers"
                icon={<VscPreview />}
              />
              <MyNavitem
                path="/dashboard/viewcustomers"
                routename="View Customers"
                icon={<VscPreview />}
              />
            </section>
          </motion.div>

          <main>{children}</main>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default SideBar;