"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaMinus } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import Loading from "../../../components/Loading";
import ProductBreadcrumb from "../../../components/ProductBreadcrumb";
import { getCart, removeFromCart, updateQuantity } from '../../../lib/cartHelper';
import getTookn from "../../../lib/getTookn";
import getTotalPrice from "../../../lib/getTotalPrice";
import verifyJWT from "../../../lib/verifyJWT";
import defaultImage from "../../../public/defaultImage.png";
import useLenseStore from "../../../store/useLenseStore";
import useStepStore from "../../../store/useStepStore";


const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Shop', href: '/shop' },
    { label: 'Basket ', href: '/basket' }
]


export default function CartPage() {


    const { setStep } = useStepStore();
    const { setLens } = useLenseStore();
    const [isLoading, setIsLoading] = useState(false);
    const [cart, setCart] = useState([]);
    const [isLogedIn, setIsLogedIn] = useState(false);
    const router = useRouter();



    useEffect(() => {


        setStep(0);

        setLens({
            ProductDetails: {},
            LenseBrand: "",
            LenseName: "",
            LenColor: {},
            selectedProductIndex: 0,
            LenseUseCase: "",
            LenseThickness: "",
            pdType: "1",
            singlePD: "0",
            dualPD: {
                leftPD: "0",
                rightPD: "0",
            },
            sph: {
                leftSph: "0",
                rightSph: "0",
            },
            cyl: {
                leftCyl: "0",
                rightCyl: "0",
            },
            axis: {
                leftAxis: "0",
                rightAxis: "0",
            },
            add: {
                leftAdd: "0",
                rightAdd: "0",
            },

            addPrism: false,
            leftPrism: {
                vertical: "0",
                vBaseDirection: "N/A",
                horizontal: "0",
                hBaseDirection: "N/A",
            },
            rightPrism: {
                vertical: "0",
                vBaseDirection: "N/A",
                horizontal: "0",
                hBaseDirection: "N/A",
            },

            ProtectiveCoatings: [],
            Transition: "",
            color: "gray",
            darkness: "light",
            prescriptionImage: '',
            quantity: 1,
            total: []
        });



        const loadUser = async () => {
            try {
                const token = getTookn();
                if (!token) return;

                const decoded = await verifyJWT(token);

                if (decoded) {
                    setIsLogedIn(true);
                }

            } catch (err) {
                console.error("User load failed:", err);
                setIsLogedIn(false);
            }
        };

        loadUser();

        const crt = getCart();
        setCart(crt);


        // listen for localStorage change
        const handleStorageChange = () => {
            const crt = getCart();
            setCart(crt);
        };

        window.addEventListener("cartUpdateds", handleStorageChange);

        // Trigger header update
        window.dispatchEvent(new Event("cartUpdated"));
        window.scrollTo(0, 0);

        return () => {
            window.addEventListener("cartUpdateds", handleStorageChange);
        };

    }, []);




    // handleincrement function is here
    function handleIncrement(e, item) {
        e.preventDefault();
        const cartID = item?.cartItemId;
        const updateQ = item?.quantity + 1;
        updateQuantity(cartID, updateQ);
        window.dispatchEvent(new Event("cartUpdateds"));
    }




    // handleincrement function is here
    function handleDecrement(e, item) {
        e.preventDefault();
        const cartID = item?.cartItemId;
        const updateQ = item?.quantity > 1 ? item?.quantity - 1 : 1;
        updateQuantity(cartID, updateQ);
        window.dispatchEvent(new Event("cartUpdateds"));
    }




    // remove Items function is here
    function removeItems(e, item) {
        e.preventDefault();
        const cartID = item?.cartItemId;
        removeFromCart(cartID);
        window.dispatchEvent(new Event("cartUpdateds"));
        window.dispatchEvent(new Event("cartUpdated"));
    }




    // hanlde procced to checkout function is here
    function handleProccedToCheckout(e) {

        e.preventDefault();


        console.log(cart);

        if (!cart?.items?.length) {
            toast.error("Please Add Product First");
            return;
        }

        if (!isLogedIn) {
            toast.error("You Must Login First to Checkout");
            return;
        }




        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            router?.push('/basket/checkout');
        }, 700);

    }




    const TotalCalculation = (quantity) => {
        let priceTotal = 0;
        cart?.items?.forEach((item) => {
            const thisQuantity = item.quantity;
            const thisGetTotal = getTotalPrice(item.total);
            priceTotal += thisGetTotal * thisQuantity;
        });

        return priceTotal;
    };


    console.log(cart);


    return (
        <section className="h-fit bg-gray-50 pt-3 pb-10">

            <div className="max-w-7xl mx-auto px-4">
                <ProductBreadcrumb breadcrumbs={breadcrumbs} />
            </div>

            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-5 ">

                {/* CART ITEMS */}
                <div className="lg:col-span-2 space-y-5 bg-white border border-gray-200">
                    <h1 className="text-2xl font-light text-gray-800 bg-white border-b p-3">
                        Your Basket ({cart?.items?.length})
                    </h1>

                    {cart?.items?.map((item, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 m-3 md:m-6 border p-3 md:p-6 flex flex-col md:flex-row gap-6"
                        >
                            {/* IMAGE */}
                            <div className="w-20 md:w-40 shrink-0">
                                <Image
                                    src={item?.image ? (item?.type === "Frame" ? item?.image : item?.image[0]) : defaultImage}
                                    alt={item?.name}
                                    width={160}
                                    height={100}
                                    className="object-contain border border-gray-200 h-full w-full bg-white"
                                />
                            </div>

                            {/* DETAILS */}
                            <div className="flex-1">
                                <div className="flex justify-between">
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800">
                                            {item?.name} {`(£${item?.price})`}
                                        </h3>
                                        <p className="text-sm text-gray-600">{item?.description}</p>
                                    </div>
                                    <button onClick={(e) => { removeItems(e, item) }} className="h-7 w-7 flex items-center justify-center text-gray-400 bg-white border border-gray-100 hover:scale-110 transform duration-200">
                                        <RxCross2 className="text-2xl" />
                                    </button>
                                </div>

                                <div className="mt-2 flex justify-between w-full">

                                    <div className="mt-3 space-y-1 text-sm text-gray-600">
                                        <p><b>Product Type : </b> {item?.type}</p>

                                        {
                                            item?.type === "Frame" && (

                                                <>




                                                    {
                                                        item?.AllLensInfo?.ProductDetails?.frameType === "Frame" && (
                                                            <div className="flex flex-col items-start gap-2">
                                                                <div className="flex items-center gap-2">
                                                                    <b>Frame Colour :</b>
                                                                    <span>{item?.AllLensInfo?.LenColor?.[0]?.name}</span>
                                                                    <div
                                                                        style={{ backgroundColor: item?.AllLensInfo?.LenColor?.[0]?.value }}
                                                                        className="h-5 w-5"
                                                                    />
                                                                </div>
                                                                <div className="flex items-center gap-2">
                                                                    <b>Brand :</b>
                                                                    <span>{item?.AllLensInfo?.LenseBrand}</span>
                                                                </div>
                                                            </div>
                                                        )
                                                    }


                                                    {
                                                        item?.AllLensInfo?.ProductDetails?.frameType === "Prescription Sunglasses" && (
                                                            <div className="flex flex-col items-start gap-2">
                                                                <div className="flex items-center gap-2">
                                                                    <b>Frame Colour :</b>
                                                                    <span>{item?.AllLensInfo?.LenColor?.[0]?.name}</span>
                                                                    <div
                                                                        style={{ backgroundColor: item?.AllLensInfo?.LenColor?.[0]?.value }}
                                                                        className="h-5 w-5"
                                                                    />
                                                                </div>
                                                                <div className="flex items-center gap-2">
                                                                    <b>Brand :</b>
                                                                    <span>{item?.AllLensInfo?.LenseBrand}</span>
                                                                </div>

                                                                <div className="flex items-center gap-2">
                                                                    <b>Sunglassess Type :</b>
                                                                    <span>{item?.AllLensInfo?.ProductDetails?.frameType}</span>
                                                                </div>

                                                            </div>
                                                        )
                                                    }



                                                    {
                                                        item?.AllLensInfo?.frameType === "Non-Prescription Sunglasses" && (
                                                            <div className="flex flex-col items-start gap-2">
                                                                <div className="flex items-center gap-2">
                                                                    <b>Brand Sunglassess :</b>
                                                                    <span>{item?.AllLensInfo?.brand}</span>


                                                                </div>
                                                                <div className="flex items-center gap-2">
                                                                    <b>Sunglassess Type :</b>
                                                                    <span>{item?.AllLensInfo?.frameType}</span>
                                                                </div>
                                                            </div>
                                                        )
                                                    }
                                                </>
                                            )
                                        }

                                    </div>

                                    <div className="mt-4 space-y-2 text-sm">
                                        <div className="flex items-center gap-1">
                                            <div onClick={(e) => handleDecrement(e, item)} className="w-8 h-8 bg-gray-200 flex items-center justify-center cursor-pointer">
                                                <FaMinus />
                                            </div>
                                            <div className="w-8 h-8 bg-gray-200 flex items-center justify-center select-none">
                                                {item?.quantity}
                                            </div>
                                            <div onClick={(e) => handleIncrement(e, item)} className="w-8 h-8 bg-gray-200 flex items-center justify-center cursor-pointer">
                                                <FiPlus />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                    <div className="w-full px-6 pb-6 pt-0 flex items-center justify-end">
                        <Link href="/shop" className="text-gray-600 text-md underline text-yellow-600">Continue Shopping</Link>
                    </div>
                </div>

                {/* SUMMARY */}
                <div className="bg-white border p-6 h-full sticky top-28">

                    <div className="flex flex-col justify-between h-full">
                        <div className="">
                            <h2 className="text-xl font-light mb-4">Summary</h2>

                            <p className="text-sm text-teal-600 mb-4">
                                Enjoy free shipping
                            </p>

                            <div className="text-sm h-full flex flex-col gap-4">
                                <div className="flex justify-between h-fit border-b border-gray-100 pb-3">
                                    <span>Items:</span>
                                    <span>{cart?.totalItems}</span>
                                </div>

                                <div className="h-fit">
                                    <div className="flex flex-col gap-4 pb-4">
                                        {
                                            cart?.items?.map((item, index) => (
                                                <div key={index} className="flex justify-between">
                                                    <span className="flex items-center gap-2">
                                                        <span>{index + 1}</span>
                                                        <span>{item?.name}</span>
                                                        <span className="flex items-center text-gray-400">
                                                            <span>(£{item?.price}</span>
                                                            <span className="rotate-90">
                                                                <RxCross2 />
                                                            </span>
                                                            <span>{item?.quantity})</span>
                                                        </span>
                                                    </span>
                                                    <span>
                                                        {item?.price * item?.quantity}
                                                    </span>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-3">
                            <div className="flex justify-between border-t border-gray-200 py-4">
                                <span>Subtotal</span>
                                <span>£{cart?.subtotal}</span>
                            </div>
                            <hr />
                            <div className="flex justify-between font-semibold text-lg mt-4">
                                <span>Total</span>
                                <span>£{cart?.subtotal}</span>
                            </div>

                            <button onClick={(e) => { handleProccedToCheckout(e) }} className="w-full mt-6 bg-yellow-700 text-white py-3 rounded-lg font-light transition flex items-center justify-center">
                                {
                                    isLoading ? (
                                        <div className="py-0.5">
                                            <Loading />
                                        </div>
                                    ) : (
                                        <span className="text-lg">Proceed to checkout</span>
                                    )
                                }
                            </button>

                        </div>
                    </div>

                </div>
            </div>
            <Toaster position="top-center" />
        </section >
    );
}
