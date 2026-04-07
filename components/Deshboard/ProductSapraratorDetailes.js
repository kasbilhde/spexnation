import Image from "next/image";
import Link from "next/link";

const ProductSapraratorDetailes = ({ single, index }) => {

    // console.log("single", single);

    return (
        <div className="border border-blue-300 bg-yellow-50 px-3 py-2 mt-5 h-fit">
            <div className="flex items-center justify-between bg-yellow-200 px-3 py-2">
                <h2 className="text-gray-500">Product {index + 1}:</h2>
                <div className={single?.type === "Accessories" ? "hidden" : "block"}>
                    <Link target="_blank" href={single?.AllLensInfo?.prescriptionImage || "#"} rel="noreferrer" className="bg-yellow-700/70 curosr-pointer text-white px-1 rounded font-light text-sm w-fit">Prescription</Link>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-2">
                <div className="border border-gray-100 bg-gray-100 px-3 py-2">
                    <label className="text-gray-800">
                        Product Type:
                    </label>
                    <span className={`text-gray-500 px-0.5 py-0 rounded ml-2 ${single?.type === "Accessories" ? "bg-purple-300/50 border-2 border-purple-300" : "bg-green-300/50 border-2 border-green-300"}`}>{single?.type}</span>
                </div>
                <div className="border border-gray-100 bg-gray-100 px-3 py-2">
                    <label className="text-gray-800">
                        Product Name:
                    </label>
                    <span className="text-gray-500 pl-2">{single?.name}</span>
                </div>

                <div className="border border-gray-100 bg-gray-100 px-3 py-2">
                    <label className="text-gray-800">
                        Product Price:
                    </label>
                    <span className="text-gray-500 pl-2">£{single?.price}</span>
                </div>

                <div className="border border-gray-100 bg-gray-100 px-3 py-2">
                    <label className="text-gray-800">
                        Product Quantity:
                    </label>
                    <span className="text-gray-500 pl-2">{single?.quantity}</span>
                </div>

                <div className="border border-gray-100 bg-gray-100 px-3 py-2">
                    <label className="text-gray-800">
                        Product Total Price:
                    </label>
                    <span className="text-gray-500 pl-2">£{single?.quantity * single?.price}</span>
                </div>



                {
                    single?.type === "Frame" && (
                        <>


                            {
                                single?.AllLensInfo?.ProductDetails?.sunglassesType === "Prescription Sunglasses" || single?.AllLensInfo?.ProductDetails?.sunglassesType === "" && (
                                    <>
                                        <div className="border border-gray-100 bg-gray-100 px-3 py-2 flex items-center">
                                            <label className="text-gray-800">
                                                Product Colour:
                                            </label>
                                            <span className="text-gray-500 pl-2 flex items-center">
                                                <div style={{ backgroundColor: single?.AllLensInfo?.LenColor[0]?.value }} className={`h-5 w-8 inline-block mr-2`} />
                                                {single?.AllLensInfo?.LenColor[0]?.name}
                                            </span>
                                        </div>


                                        <div className="border border-gray-100 bg-gray-100 px-3 py-2 flex items-center">
                                            <label className="text-gray-800">
                                                Lens Brand:
                                            </label>
                                            <span className="text-gray-500 pl-2 flex items-center">
                                                {single?.AllLensInfo?.LenseBrand}
                                            </span>
                                        </div>


                                        <div className="border border-gray-100 bg-gray-100 px-3 py-2 flex items-center">
                                            <label className="text-gray-800">
                                                Lens Name:
                                            </label>
                                            <span className="text-gray-500 pl-2 flex items-center">
                                                {single?.AllLensInfo?.LenseName}
                                            </span>
                                        </div>


                                        <div className="border border-gray-100 bg-gray-100 px-3 py-2 flex items-center">
                                            <label className="text-gray-800">
                                                Lens Thickness:
                                            </label>
                                            <span className="text-gray-500 pl-2 flex items-center">
                                                {single?.AllLensInfo?.LenseThickness}
                                            </span>
                                        </div>


                                        <div className="border border-gray-100 bg-gray-100 px-3 py-2 flex items-center">
                                            <label className="text-gray-800">
                                                Glasses Use:
                                            </label>
                                            <span className="text-gray-500 pl-2 flex items-center capitalize">
                                                {single?.AllLensInfo?.LenseUseCase == "noprescription" ? "No Prescription" : single?.AllLensInfo?.LenseUseCase == "computerorintermediate" ? "Computer/Intermediate" : single?.AllLensInfo?.LenseUseCase}
                                            </span>
                                        </div>
                                    </>
                                )
                            }


                            {
                                single?.AllLensInfo?.sunglassesType === "Non-Prescription Sunglasses" && (
                                    <>
                                        <div className="border border-gray-100 bg-gray-100 px-3 py-2 flex items-center">
                                            <label className="text-gray-800">
                                                Product Brand:
                                            </label>
                                            <span className="text-gray-500 pl-2 flex items-center">
                                                {single?.AllLensInfo?.brand}
                                            </span>
                                        </div>
                                        <div className="border border-gray-100 bg-gray-100 px-3 py-2 flex items-center">
                                            <label className="text-gray-800">
                                                Sunglassess Type:
                                            </label>
                                            <span className="text-gray-500 pl-2 flex items-center">
                                                {single?.AllLensInfo?.sunglassesType}
                                            </span>
                                        </div>
                                    </>
                                )
                            }



                        </>
                    )
                }



            </div>

            <div className="border border-gray-100 bg-gray-100 px-3 py-2">
                <label className="text-gray-800">
                    Product Image:
                </label>
                <div className={`w-[150px] h-auto`}>
                    <Image src={single?.type === "Frame" ? single?.image : single?.image[0]} alt="placeholder" width={1000} height={1000} />
                </div>
            </div>
            {
                single?.type === "Frame" && (

                    <>

                        {
                            single?.AllLensInfo?.ProductDetails?.sunglassesType === "Prescription Sunglasses" || single?.AllLensInfo?.ProductDetails?.sunglassesType === "" && (


                                <div className="mt-6">

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
                                                        <th className="border px-3 py-2">{single?.AllLensInfo?.pdType == "1" ? "S-PD" : "D-PD"}</th>
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
                                                        <td className="border px-3 py-2">{single?.AllLensInfo?.sph?.rightSph}</td>
                                                        <td className="border px-3 py-2">{single?.AllLensInfo?.cyl?.rightCyl}</td>
                                                        <td className="border px-3 py-2">{single?.AllLensInfo?.axis?.rightAxis}</td>
                                                        <td className="border px-3 py-2">{single?.AllLensInfo?.add?.rightAdd}</td>
                                                        <td className="border px-3 py-2" rowSpan={single?.AllLensInfo.pdType == "1" ? 2 : 1}>{single?.AllLensInfo.pdType == "1" ? single?.AllLensInfo.singlePD : single?.AllLensInfo.dualPD.rightPD}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="border px-3 py-2 font-medium">
                                                            <div className="flex flex-col">
                                                                <span className="text-xs text-gray-500">Left Eye</span>
                                                                <span>OS</span>
                                                            </div>
                                                        </td>
                                                        <td className="border px-3 py-2">{single?.AllLensInfo?.sph?.leftSph}</td>
                                                        <td className="border px-3 py-2">{single?.AllLensInfo?.cyl?.leftCyl}</td>
                                                        <td className="border px-3 py-2">{single?.AllLensInfo?.axis?.leftAxis}</td>
                                                        <td className="border px-3 py-2">{single?.AllLensInfo?.add?.leftAdd}</td>

                                                        {
                                                            single?.AllLensInfo.pdType == "2" && (
                                                                <td className="border px-3 py-2" rowSpan={single?.AllLensInfo.pdType == "1" ? 2 : 1}>{single?.AllLensInfo.pdType == "2" && single?.AllLensInfo.dualPD.leftPD}</td>
                                                            )
                                                        }

                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                        {/* Prism Table */}
                                        {
                                            single?.AllLensInfo?.addPrism && (
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
                                                                <td className="border px-3 py-2">{single?.AllLensInfo?.rightPrism?.vertical}</td>
                                                                <td className="border px-3 py-2">{single?.AllLensInfo?.rightPrism?.vBaseDirection}</td>
                                                                <td className="border px-3 py-2">{single?.AllLensInfo?.rightPrism?.horizontal}</td>
                                                                <td className="border px-3 py-2">{single?.AllLensInfo?.rightPrism?.hBaseDirection}</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="border px-3 py-2 font-medium">OS</td>
                                                                <td className="border px-3 py-2">{single?.AllLensInfo?.leftPrism?.vertical}</td>
                                                                <td className="border px-3 py-2">{single?.AllLensInfo?.leftPrism?.vBaseDirection}</td>
                                                                <td className="border px-3 py-2">{single?.AllLensInfo?.leftPrism?.horizontal}</td>
                                                                <td className="border px-3 py-2">{single?.AllLensInfo?.leftPrism?.hBaseDirection}</td>
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
                                            single?.AllLensInfo?.total?.map((item, index) => {
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
                                                                            <b className="">Darkness: </b> {single?.AllLensInfo?.darkness == 'dark' ? "Dark (20%)" : single?.AllLensInfo?.darkness == 'medium' ? "Medium (50%)" : single?.AllLensInfo?.darkness == 'light' ? "Light (80% transmission)" : null}
                                                                        </span>
                                                                    )
                                                                }

                                                                {
                                                                    item?.name != "Clear" && item?.target == "Tints" && (
                                                                        <span className="flex gap-2 items-start">
                                                                            <b className="">Colour: </b>
                                                                            <Image src={`/${single?.AllLensInfo?.color}.png`} alt="emerald" width={1000} height={1000} className={`flex items-center justify-center text-white cursor-pointer w-20 h-20`} />
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

                                </div>

                            )


                        }


                    </>


                )
            }
        </div>
    )
}

export default ProductSapraratorDetailes;