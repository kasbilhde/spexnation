'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { addToCart } from '../../lib/cartHelper';
import getTotalPrice from "../../lib/getTotalPrice";
import useLenseStore from "../../store/useLenseStore";
import useStepStore from "../../store/useStepStore";
import Loading from "../Loading";
import BackBtn from "./BackBtn";
import CircularProgress from "./CircularProgress";
import SubTotal from "./SubTotal";

export default function Review() {


    const router = useRouter();
    const { step, setStep } = useStepStore();
    const { lens, setLens } = useLenseStore();
    const [isLoading, setisLoading] = useState(false);


    // handle confirm function is here
    function handleConfirm(lens) {

        setisLoading(true);

        console.log(lens);


        // fream item object here
        const freamItem = {
            cartItemId: crypto.randomUUID(),
            productId: lens?.ProductDetails?._id,              // your product's ID
            type: lens?.ProductDetails?.productType,
            name: lens?.ProductDetails?.ProductTitle,
            price: getTotalPrice(lens?.total),
            quantity: 1,
            image: lens?.ProductDetails?.product_Images[lens?.selectedProductIndex]?.img[0],
            description: lens?.ProductDetails?.product_Discription,
            AllLensInfo: lens,
            addedAt: new Date().toISOString(),
        }



        // add to cart here
        addToCart(freamItem);


        // Trigger header update
        window.dispatchEvent(new Event("cartUpdated"));
        setTimeout(() => {
            setisLoading(false);
            router.push('/basket');
        }, 700);
    }


    return (
        <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: .7,
                delay: 0,
                ease: "easeOut"
            }}
            className="w-full p-6 bg-white rounded-lg shadow-sm border border-gray-200">

            {/* Header */}
            <div className="flex items-center justify-between">
                <BackBtn step={step} setStep={setStep} />
                <CircularProgress initialValue={100} />
            </div>

            {/* Header */}
            <h1 className="text-3xl font-semibold text-center text-gray-900">
                Review Your Selections
            </h1>
            <p className="mt-2 text-center text-md text-gray-500/90">
                Free Delivery on glasses orders
            </p>

            {/* Prescription Details */}
            <div className="mt-8 w-full">
                <h2 className="text-lg font-medium text-gray-700/70 mb-3">
                    Prescription Details
                </h2>

                {/* Main Prescription Table */}
                <div className="overflow-x-auto">
                    <table className="w-full border border-gray-300 text-sm text-center">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="border px-3 py-2">Eyes</th>
                                <th className="border px-3 py-2">SPH</th>
                                <th className="border px-3 py-2">CYL</th>
                                <th className="border px-3 py-2">Axis</th>
                                <th className="border px-3 py-2">ADD</th>
                                <th className="border px-3 py-2">{lens.pdType == "1" ? "S-PD" : "D-PD"}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border px-3 py-2 font-medium">
                                    <div className="flex flex-col">
                                        <span className="text-xs text-gray-500">Right Eye</span>
                                        <span>OD</span>
                                    </div>
                                </td>
                                <td className="border px-3 py-2">{lens?.sph?.rightSph}</td>
                                <td className="border px-3 py-2">{lens?.cyl?.rightCyl}</td>
                                <td className="border px-3 py-2">{lens?.axis?.rightAxis}</td>
                                <td className="border px-3 py-2">{lens?.add?.rightAdd}</td>
                                <td className="border px-3 py-2" rowSpan={lens.pdType == "1" ? 2 : 1}>{lens.pdType == "1" ? lens.singlePD : lens.dualPD.rightPD}</td>
                            </tr>
                            <tr>
                                <td className="border px-3 py-2 font-medium">
                                    <div className="flex flex-col">
                                        <span className="text-xs text-gray-500">Left Eye</span>
                                        <span>OS</span>
                                    </div>
                                </td>
                                <td className="border px-3 py-2">{lens?.sph?.leftSph}</td>
                                <td className="border px-3 py-2">{lens?.cyl?.leftCyl}</td>
                                <td className="border px-3 py-2">{lens?.axis?.leftAxis}</td>
                                <td className="border px-3 py-2">{lens?.add?.leftAdd}</td>

                                {
                                    lens.pdType == "2" && (
                                        <td className="border px-3 py-2" rowSpan={lens.pdType == "1" ? 2 : 1}>{lens.pdType == "2" && lens.dualPD.leftPD}</td>
                                    )
                                }

                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Prism Table */}
                {
                    lens?.addPrism && (
                        <div className="overflow-x-auto mt-6">
                            <table className="w-full border border-gray-300 text-sm text-center">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="border px-3 py-2"></th>
                                        <th className="border px-3 py-2">Vertical Prism (Δ)</th>
                                        <th className="border px-3 py-2">Base Direction</th>
                                        <th className="border px-3 py-2">Horizontal Prism (Δ)</th>
                                        <th className="border px-3 py-2">Base Direction</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border px-3 py-2 font-medium">OD</td>
                                        <td className="border px-3 py-2">{lens?.rightPrism?.vertical}</td>
                                        <td className="border px-3 py-2">{lens?.rightPrism?.vBaseDirection}</td>
                                        <td className="border px-3 py-2">{lens?.rightPrism?.horizontal}</td>
                                        <td className="border px-3 py-2">{lens?.rightPrism?.hBaseDirection}</td>
                                    </tr>
                                    <tr>
                                        <td className="border px-3 py-2 font-medium">OS</td>
                                        <td className="border px-3 py-2">{lens?.leftPrism?.vertical}</td>
                                        <td className="border px-3 py-2">{lens?.leftPrism?.vBaseDirection}</td>
                                        <td className="border px-3 py-2">{lens?.leftPrism?.horizontal}</td>
                                        <td className="border px-3 py-2">{lens?.leftPrism?.hBaseDirection}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )
                }


            </div>

            {/* Product Summary */}
            <div className="mt-8 space-y-2 text-sm">

                {
                    lens?.total?.map((item, index) => {
                        return (
                            <div key={index} className="flex justify-between text-md font-medium text-gray-800/90">
                                <span className="flex flex-col items-start">
                                    <span>
                                        <b className="font-extrabold">
                                            {item?.target}:
                                        </b>
                                        {item.name}
                                    </span>
                                    <span className={`${item?.name != "Clear" && item?.target == "Tints" && " flex gap-2 flex-col items-start mt-2"}`}>


                                        {
                                            item?.name == "Sunglasses" && item?.target == "Tints" && (
                                                <span>
                                                    <b className="">Darkness: </b> {lens?.darkness == 'dark' ? "Dark (20%)" : lens?.darkness == 'medium' ? "Medium (50%)" : lens?.darkness == 'light' ? "Light (80% transmission)" : null}
                                                </span>
                                            )
                                        }

                                        {
                                            item?.name != "Clear" && item?.target == "Tints" && (
                                                <span className="flex gap-2 items-start">
                                                    <b className="">Colour: </b>
                                                    <Image src={`/${lens?.color}.png`} alt="emerald" width={1000} height={1000} className={`flex items-center justify-center text-white cursor-pointer w-20 h-20`} />
                                                </span>
                                            )
                                        }


                                    </span>
                                </span>
                                <span>£{item?.price}</span>
                            </div>
                        )
                    })
                }

            </div>

            {/* Divider */}
            <div className="my-6 border-t" />

            {/* Total */}
            <SubTotal />

            {/* <p className="mt-1 text-sm text-gray-500">
                3 interest-free payments of £121.67 with{" "}
                <span className="font-medium">Klarna</span>
            </p> */}

            {/* CTA */}
            <button onClick={() => { handleConfirm(lens) }} className="mt-6 w-full pBg text-white font-semibold py-3 rounded-md transition flex items-center justify-center">

                {
                    isLoading ? <Loading /> : "Confirm & Add to Basket"
                }
            </button>
        </motion.div >
    );
}

