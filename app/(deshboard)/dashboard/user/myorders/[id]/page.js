'use client'

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { IoIosArrowBack } from "react-icons/io";
import ProductSapraratorDetailes from "../../../../../../components/Deshboard/ProductSapraratorDetailes";
import StatusBadge from "../../../../../../components/Deshboard/StatusBadge";
import Loading from "../../../../../../components/Loading";
import getTookn from "../../../../../../lib/getTookn";

const OrderPage = () => {


    const { id } = useParams();
    const router = useRouter();
    const [token, settoken] = useState(null);
    const [loading, setLoading] = useState(false);
    const [getSingleOrders, setgetSingleOrders] = useState([]);
    const [updateStatus, setupdateStatus] = useState(false);
    const [showStripeId, setshowStripeId] = useState(false);



    const fetchOrders = async (tokens, id) => {
        setLoading(true);
        try {
            // Make API call to get all the product
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/singleorder/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    "authorization": `Bearer ${tokens}`,
                }
            });

            const res = await response.json();
            setgetSingleOrders(res?.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching orders:', error);
            setLoading(false);
        }
    };


    useEffect(() => {
        const tokens = getTookn();
        settoken(tokens);
        fetchOrders(tokens, id);
    }, [id])



    // update status function is here
    async function handleUpdateStatus(e, orderID, updateStatus) {

        e.preventDefault();

        if (!updateStatus) {
            toast.error("Please select status");
            return;
        }


        setLoading(true);


        try {
            // Make API call to get all the product
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/updateorder/${orderID}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    "authorization": `Bearer ${token}`,
                },
                body: JSON.stringify({ id, deliveryStatus: updateStatus })
            });

            const res = await response.json();
            fetchOrders(token, id);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching orders:', error);
            setLoading(false);
        }

    }






    // handle re order funtion is here
    const handleReorder = async (e, row, tk) => {

        e.preventDefault();

        setLoading(true);

        try {
            // Make API call to get all the product
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/reorders`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "authorization": `Bearer ${tk}`,
                },
                body: JSON.stringify(row)
            });

            const res = await response.json();
            if (res?.success) {
                router.push(res?.url);
                setLoading(false);
            } else {
                toast.error(res?.message);
                setLoading(false);
            }

        } catch (error) {
            console.error('Error while reorder:', error);
            setLoading(false);
        }

    }







    // handle re payment funtion is here
    const handlePaymentAgain = async (e, row, tk) => {

        e.preventDefault();

        setLoading(true);

        try {
            // Make API call to get all the product
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/repayment`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "authorization": `Bearer ${tk}`,
                },
                body: JSON.stringify(row)
            });

            const res = await response.json();
            if (res?.success) {
                router.push(res?.url);
                setLoading(false);
            } else {
                toast.error(res?.message);
                setLoading(false);
            }

        } catch (error) {
            console.error('Error while reorder:', error);
            setLoading(false);
        }

    }











    if (loading) {
        return (
            <div className="h-screen flex justify-center items-center">
                <div className="bg-yellow-700 px-5 py-2 w-fit">
                    <Loading />
                </div>
            </div>
        )
    }


    console.log(getSingleOrders);


    return (
        <div className=" bg-white py-5 px-5  border border-gray-200">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <button onClick={() => { router.back() }} className=" bg-gray-200 px-1 py-1 flex items-center gap-1">
                        <IoIosArrowBack />
                        Back
                    </button>
                    <h1 className="hidden md:block text-xl font-medium text-gray-600">
                        Single Order - {getSingleOrders?.orderId}
                    </h1>
                </div>
                <div className="flex items-center gap-4">

                    <button onClick={(e) => { handleReorder(e, getSingleOrders, token) }} className={` bg-gray-200 px-2 py-1 text-white bg-green-700 flex items-center gap-1 `}>
                        Reorder
                    </button>

                    {
                        getSingleOrders?.paymentStatus === "paid" ? (
                            <Link href={getSingleOrders?.pdf || "#"} target="_blank" className={` bg-gray-200 px-2 py-1 text-white bg-yellow-700 flex items-center gap-1 `}>
                                PDF File
                            </Link>
                        ) : (

                            <button onClick={(e) => { handlePaymentAgain(e, getSingleOrders, token) }} className={` bg-gray-200 px-2 py-1 text-white bg-blue-700 flex items-center gap-1 `}>
                                Payment Again
                            </button>

                        )
                    }





                </div>
            </div>
            <div className="mt-6 ">
                <div className="border border-gray-100 px-3 py-2 pb-3">
                    <h2 className="text-gray-500">Order Infomations:</h2>
                    <div className="border border-gray-100 px-3 py-2 mt-2 h-fit">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-2">
                            <div className="border border-gray-100 bg-gray-100 px-3 py-2">
                                <label className="text-gray-800">
                                    Order ID:
                                </label>
                                <span className="text-gray-500 pl-2">{getSingleOrders?.orderId}</span>
                            </div>
                            <div className="border border-gray-100 bg-gray-100 px-3 py-2">
                                <label className="text-gray-800">
                                    Full Name:
                                </label>
                                <span className="text-gray-500 pl-2">{getSingleOrders?.fullname}</span>
                            </div>
                            <div className="border border-gray-100 bg-gray-100 px-3 py-2">
                                <label className="text-gray-800">
                                    Email:
                                </label>
                                <span className="text-gray-500 pl-2">{getSingleOrders?.email}</span>
                            </div>
                            <div className="border border-gray-100 bg-gray-100 px-3 py-2">
                                <label className="text-gray-800">
                                    Payment Status:
                                </label>
                                <span className="text-gray-500 pl-2">
                                    <StatusBadge type={"payment"} value={getSingleOrders?.paymentStatus} />
                                </span>
                            </div>
                            <div className="border border-gray-100 bg-gray-100 px-3 py-2">
                                <label className="text-gray-800">
                                    Delivery Status:
                                </label>
                                <span className="text-gray-500 pl-2">
                                    <StatusBadge type={"Delivery"} value={getSingleOrders?.deliveryStatus} />
                                </span>
                            </div>

                            <div className="border border-gray-100 bg-gray-100 px-3 py-2">
                                <label className="text-gray-800">
                                    Total Items:
                                </label>
                                <span className="text-gray-500 pl-2">{getSingleOrders?.totalItems}</span>
                            </div>

                            <div className="border border-gray-100 bg-gray-100 px-3 py-2">
                                <label className="text-gray-800">
                                    Coupon Applied:
                                </label>
                                <span className="text-gray-500 pl-2">{getSingleOrders?.iscoupon ? "Yes" : "No"}</span>
                            </div>
                            <div className="border border-gray-100 bg-gray-100 px-3 py-2">
                                <label className="text-gray-800">
                                    Coupon Discount Percentage:
                                </label>
                                <span className="text-gray-500 pl-2">{`${getSingleOrders?.coupondiscountPercentage ? getSingleOrders?.coupondiscountPercentage + "%" : "N/A"}`}</span>
                            </div>
                            <div className="border border-gray-100 bg-gray-100 px-3 py-2">
                                <label className="text-gray-800">
                                    Coupon Discount Amount:
                                </label>
                                <span className="text-gray-500 pl-2">{`${getSingleOrders?.discountPrice ? "£" + getSingleOrders?.discountPrice : "N/A"}`}</span>
                            </div>

                            <div className="border border-gray-100 bg-gray-100 px-3 py-2">
                                <label className="text-gray-800">
                                    Sub Total:
                                </label>
                                <span className="text-gray-500 pl-2">{"£" + getSingleOrders?.subtotal}</span>
                            </div>
                            <div className="border border-gray-100 bg-gray-100 px-3 py-2">
                                <label className="text-gray-800">
                                    Total:
                                </label>
                                <span className="text-gray-500 pl-2">{"£" + getSingleOrders?.PaymentTotal}</span>
                            </div>


                            <div className="border border-gray-100 bg-gray-100 px-3 py-2">
                                <label className="text-gray-800">
                                    Address Line 1:
                                </label>
                                <span className="text-gray-500 pl-2">{getSingleOrders?.address1}</span>
                            </div>
                            <div className="border border-gray-100 bg-gray-100 px-3 py-2">
                                <label className="text-gray-800">
                                    Address Line 2:
                                </label>
                                <span className="text-gray-500 pl-2">{getSingleOrders?.address2}</span>
                            </div>
                            <div className="border border-gray-100 bg-gray-100 px-3 py-2">
                                <label className="text-gray-800">
                                    City:
                                </label>
                                <span className="text-gray-500 pl-2">{getSingleOrders?.city}</span>
                            </div>


                            <div className="border border-gray-100 bg-gray-100 px-3 py-2">
                                <label className="text-gray-800">
                                    State/Province/Region:
                                </label>
                                <span className="text-gray-500 pl-2">{getSingleOrders?.state}</span>
                            </div>
                            <div className="border border-gray-100 bg-gray-100 px-3 py-2">
                                <label className="text-gray-800">
                                    ZIP / Postal Code:
                                </label>
                                <span className="text-gray-500 pl-2">{getSingleOrders?.zipcode}</span>
                            </div>
                            <div className="border border-gray-100 bg-gray-100 px-3 py-2">
                                <label className="text-gray-800">
                                    Country:
                                </label>
                                <span className="text-gray-500 pl-2">{getSingleOrders?.country}</span>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="border border-gray-100 px-3 py-2 pb-3 mt-4">
                    <h2 className="text-gray-500">Products Infomations:</h2>
                    <div>
                        {
                            getSingleOrders?.items?.map((single, index) => {
                                return (
                                    <ProductSapraratorDetailes single={single} key={index} index={index} />
                                )
                            })
                        }
                    </div>
                </div>

            </div>
            <Toaster />
        </div >
    );
};

export default OrderPage;