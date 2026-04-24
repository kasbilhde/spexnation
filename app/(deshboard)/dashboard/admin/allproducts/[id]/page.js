'use client'

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { GoPlusCircle } from "react-icons/go";
import { IoIosArrowBack } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import Loading from "../../../../../../components/Loading";
import convertUrlsToBase64 from "../../../../../../lib/convertUrlsToBase64";
import fileToBase64 from "../../../../../../lib/fileToBase64";
import getTookn from "../../../../../../lib/getTookn";



const productTypes = [
    "Frame",
    "Prescription Sunglasses",
    "Non-Prescription Sunglasses"
]




export default function ProductSinglePage() {
    const [isModalOpen, setIsModalOpen] = useState(false);




    const { id } = useParams();
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [singleProducts, setsingleProducts] = useState([]);
    const [token, settoken] = useState(null);



    const [productType, setProductType] = useState('');
    const [brand, setbrand] = useState('');
    const [title, settitle] = useState('');
    const [shortdes, setshortdes] = useState('');
    const [price, setprice] = useState('');
    const [gender, setgender] = useState('');
    const [description, setdescription] = useState('');
    const [weight, setweight] = useState('');
    const [meterial, setmeterial] = useState('');
    const [fType, setfType] = useState('');
    const [fShape, setfShape] = useState('');
    const [lensWidth, setlensWidth] = useState('');
    const [lensHeight, setlensHeight] = useState('');
    const [BridgeWidth, setBridgeWidth] = useState('');
    const [ArmLength, setArmLength] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [allImageArray, setallImageArray] = useState([]);
    const [gellary, setgellery] = useState([]);
    const [allbrandList, setallbrandList] = useState([]);
    const [allColorList, setallColorList] = useState([]);




    const gellaryImageUpder = async (res) => {



        const galleryData = [];


        for (const item of res) {
            const color = item?.color;
            const img = item?.img || [];

            // Wait for all images to convert
            const updateImageBase = await convertUrlsToBase64(img);

            galleryData.push({
                color,
                img: updateImageBase
            });

            // Update state after images are ready
            //setgellery(prev => [...prev, { color, img: updateImageBase }]);
        }

        setgellery(galleryData);

    }





    const fetchProducts = async (id) => {
        try {
            // Make API call to get all the product
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/singleProduct/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            const res = await response.json();

            setsingleProducts(res?.data);
            setProductType(res?.data?.frameType);
            settitle(res?.data?.ProductTitle);
            setbrand(res?.data?.brand);
            setshortdes(res?.data?.shortdes);
            setprice(res?.data?.product_price);
            setgender(res?.data?.gender);
            setweight(res?.data?.weight);
            setmeterial(res?.data?.meterial);
            setfType(res?.data?.fType);
            setfShape(res?.data?.fShape);
            setlensWidth(res?.data?.lensWidth);
            setlensHeight(res?.data?.lensHeight);
            setBridgeWidth(res?.data?.BridgeWidth);
            setArmLength(res?.data?.ArmLength);
            setgellery([]);
            gellaryImageUpder(res?.data?.product_Images);
            setdescription(res?.data?.product_Discription);
            setallImageArray([]);
            res?.data?.product_Images?.map((imgs, i) =>
                imgs?.img?.map((img, ind) => (
                    setallImageArray(prev => [...prev, img])
                ))
            )
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        } catch (error) {
            console.error('Error fetching products:', error);
            setLoading(false);
        }
    };




    const fetchSettingsData = async () => {
        setLoading(true);
        try {
            // Make API call to get all the product
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/settings`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            const res = await response.json();
            setallbrandList(res?.data?.brands);
            setallColorList(res?.data?.colours);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching products:', error);
            setLoading(false);
        }
    };





    useEffect(() => {
        const tken = getTookn();
        settoken(tken);
        fetchProducts(id);
        fetchSettingsData();
    }, [id])




    // hanlde delete proeuct function is here
    async function hanldeDeleteProduct(e, id) {
        e.preventDefault();

        const confirm = window.confirm("Are you sure you want to delete this product?");
        if (!confirm) {
            return;
        }


        setLoading(true);

        try {
            // Make API call to get all the product
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/deleteProduct/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    "authorization": `Bearer ${token}`,
                }
            });

            const res = await response.json();
            toast.success(res.message);
            router.push('/dashboard/admin/allproducts');
        } catch (error) {
            console.error('Error Deleting products:', error);
        }

        setLoading(false);


    }





    const handlePruductDataUpdate = async (e, id) => {

        e.preventDefault();

        const confirm = window.confirm("Are you sure you want to update this product?");
        if (!confirm) {
            return;
        }


        const updatedData = {
            ProductTitle: title,
            brand: brand,
            shortdes: shortdes,
            product_price: price,
            gender: gender,
            weight: weight,
            meterial: meterial,
            fType: fType,
            fShape: fShape,
            lensWidth: lensWidth,
            lensHeight: lensHeight,
            BridgeWidth: BridgeWidth,
            ArmLength: ArmLength,
            product_Discription: description,
            product_Images: gellary
        };


        setLoading(true);

        try {
            // Make API call to get all the product
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/updateProduct/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    "authorization": `Bearer ${token}`,
                },
                body: JSON.stringify(updatedData)
            });

            const res = await response.json();
            toast.success(res.message);
            setIsModalOpen(false);
            fetchProducts(id);
        } catch (error) {
            console.error('Error Deleting products:', error);
        }

        setLoading(false);




    }






    // finding coresponding brand list is here
    const corespondingBrands = allbrandList?.filter((item) => {
        return item?.forProduct === productType;
    });






    // handle gallery image
    const handleGallery = async (e) => {

        const currentImageLength = gellary.length;


        if (currentImageLength === 5) {
            toast.error("You can add only 5 images");
            return;
        }


        const files = e.target.files;

        const base64Images = [];


        for (const file of files) {
            const base64 = await fileToBase64(file);
            base64Images.push(base64);
        }

        setgellery(prev => [
            ...prev,
            {
                img: base64Images, // multiple base64 images
                color: []
            }
        ]);
    }



    // handle single image added
    const handlesingelImageAddedGallery = async (e, index) => {


        e.preventDefault();

        const currentImageLength = gellary[index]?.img?.length;


        if (currentImageLength === 5) {
            toast.error("You can add only 5 images");
            return;
        }


        const files = e.target.files;

        const base64Images = [];


        for (const file of files) {
            const base64 = await fileToBase64(file);
            base64Images.push(base64);
        }


        //find the targeted list and then update
        const updatedData = gellary?.map((item, i) => {
            if (i == index) {
                const color = item?.color;
                const img = item?.img;
                const updateImageBase = [...img, ...base64Images];

                if (updateImageBase.length > 5) {
                    toast.error("You can add only 5 images");
                    return {
                        color: color,
                        img: [...img]
                    };
                }

                return {
                    color: color,
                    img: updateImageBase
                };

            }
            return item;
        })

        setgellery(updatedData);

    }


    // remove gallery image
    const handleRemoveGallery = (index) => {
        setgellery(prev => prev.filter((_, i) => i !== index));
    }





    const handleRemoveSingleGallery = (indx, index) => {


        setgellery(prev => prev.map((item, i) => {


            if (i === index) {

                const updateImages = item.img.filter((_, si) => si !== indx);
                if (updateImages?.length == 0) {
                    handleRemoveGallery(index);
                    return {
                        ...item,
                        img: updateImages
                    };
                } else {
                    return {
                        ...item,
                        img: updateImages
                    };
                }
            }
            return item;
        }));
    }



    function handleColorSelect(e, index) {

        e.preventDefault();

        const selectedColor = JSON.parse(e.target.value);

        setgellery(prev =>
            prev.map((item, i) => {
                if (i === index) {
                    return {
                        ...item,
                        color: [selectedColor] // single select
                    };
                }
                return item;
            })
        );



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



    return (
        <div className="min-h-screen bg-gray-100">
            <div className="border border-gray-200 bg-white grid grid-cols-1 lg:grid-cols-2 gap-5 p-5">
                {/* IMAGE SECTION */}
                <div className="order-last">
                    <Image
                        height={1000}
                        width={1000}
                        alt="product Image big"
                        src={allImageArray[selectedIndex]}
                        className="w-full h-[300px] md:h-[400px] object-contain border border-gray-200"
                    />

                    <div className="flex gap-3 mt-4 overflow-x-auto">
                        {
                            allImageArray?.map((item, index) => {
                                return (
                                    <Image
                                        width={1000}
                                        height={1000}
                                        onClick={() => setSelectedIndex(index)}
                                        key={`${index}`}
                                        src={item}
                                        className={`w-20 h-20 rounded-lg object-contain border border-gray-200 cursor-pointer ${index === selectedIndex ? "border-2 border-yellow-500" : ""}`}
                                        alt={`product-image`}
                                    />
                                )
                            })
                        }
                    </div>


                    <div className="mt-7 flex items-center gap-2 justify-start">

                        <div className="flex items-center justify-end">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="bg-yellow-700 text-white px-6 py-3 hover:opacity-80 transition w-full md:w-fit"
                            >
                                Update Product
                            </button>
                        </div>

                        <div className="flex items-center justify-end">
                            <button
                                onClick={(e) => hanldeDeleteProduct(e, singleProducts?._id)}
                                className="bg-red-500 text-white px-6 py-3 hover:opacity-80 transition w-full md:w-fit"
                            >
                                Delete Product
                            </button>
                        </div>
                    </div>

                </div>

                {/* DETAILS */}
                <div className="space-y-4 border border-gray-200 p-5 order-first">
                    <div className="flex items-center gap-3">
                        <button onClick={() => { router.back() }} className=" bg-gray-200 px-1 py-1 flex items-center gap-1">
                            <IoIosArrowBack />
                            Back
                        </button>
                        <h1 className="text-2xl md:text-3xl font-bold">{singleProducts.ProductTitle}</h1>
                    </div>
                    <p className="text-gray-500">{singleProducts.shortdes}</p>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                        <Info label="Frame Type" value={singleProducts.frameType} />
                        <Info label="Brand" value={singleProducts.brand} />
                        <Info label="Price" value={`${singleProducts.product_price}`} />
                        <Info label="Gender" value={singleProducts.gender} />
                        <Info label="Weight" value={singleProducts.weight} />

                        <div className="bg-gray-50 p-3">
                            <p className="text-gray-400">Color</p>
                            <div className="font-medium flex gap-2 flex-wrap">
                                {singleProducts.product_Images?.map((cl, index) => {
                                    return (
                                        <div key={index} style={{ backgroundColor: cl.color[0]?.value }} className="h-6 w-6"></div>
                                    )
                                })}
                            </div>
                        </div>

                        <Info label="Material" value={singleProducts.meterial} />
                        <Info label="Frame Type" value={singleProducts.fType} />
                        <Info label="Frame Shape" value={singleProducts.fShape} />
                        <Info label="Lens Width (mm)" value={singleProducts.lensWidth} />
                        <Info label="Lens Height (mm)" value={singleProducts.lensHeight} />
                        <Info label="Bridge Width (mm)" value={singleProducts.BridgeWidth} />
                        <Info label="Arm Length (mm)" value={singleProducts.ArmLength} />
                    </div>

                    <div>
                        <h3 className="font-semibold">Description</h3>
                        <p className="text-gray-600 text-sm">{singleProducts.product_Discription}</p>
                    </div>

                </div>
            </div>

            {/* MODAL */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white w-full max-w-2xl p-6 space-y-4 max-h-[90vh] overflow-y-auto">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-bold">Update Product</h2>
                            <button onClick={() => setIsModalOpen(false)}>✕</button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">






                            <div>
                                <label className="text-gray-400 flex items-start gap-2">
                                    Product Type <span className="text-xs text-red-600">Required</span>
                                </label>
                                <select value={productType} onChange={(e) => { setProductType(e.target.value); setbrand(''); }} className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600">
                                    <option className="text-gray-400 checked:text-gray-400" value="">Select Product Type</option>

                                    {
                                        productTypes.map((item, i) => (
                                            <option className="capitalize" key={i} value={item}>{item}</option>
                                        ))
                                    }

                                </select>
                            </div>




                            <div>
                                <label className="text-gray-400 flex items-start gap-2">
                                    Brand
                                </label>
                                <select disabled={!productType} value={brand} onChange={(e) => setbrand(e.target.value)} className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600">
                                    <option className="text-gray-400 checked:text-gray-400" value="">Select Brand</option>

                                    {
                                        corespondingBrands.map((item, i) => (
                                            <option key={i} value={item?.brandName}>{item?.brandName}</option>
                                        ))
                                    }

                                </select>


                            </div>



                            <div>
                                <label className="text-gray-400 flex items-start gap-2">
                                    Title
                                </label>
                                <input type="text" value={title} onChange={(e) => settitle(e.target.value)} className="border p-2 w-full"
                                />
                            </div>


                            <div>
                                <label className="text-gray-400 flex items-start gap-2">
                                    Short Description
                                </label>
                                <input type="text" value={shortdes} onChange={(e) => setshortdes(e.target.value)} className="border p-2 w-full"
                                />
                            </div>

                            <div>
                                <label className="text-gray-400 flex items-start gap-2">
                                    Product Price
                                </label>
                                <input type="number" value={price} onChange={(e) => setprice(e.target.value)} className="border p-2 w-full"
                                />
                            </div>

                            <div>
                                <label className="text-gray-400 flex items-start gap-2">
                                    Gender
                                </label>
                                <select value={gender} onChange={(e) => setgender(e.target.value)} className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-yellow-600">
                                    <option className="text-gray-400 checked:text-gray-400" value="">Select Gender</option>
                                    <option className="text-gray-400 checked:text-gray-400" value="Mens">Mens</option>
                                    <option className="text-gray-400 checked:text-gray-400" value="Womens">Womens</option>
                                </select>
                            </div>



                            <div>
                                <label className="text-gray-400 flex items-start gap-2">
                                    Weight
                                </label>
                                <input type="text" value={weight} onChange={(e) => setweight(e.target.value)} className="border p-2 w-full"
                                />
                            </div>


                            <div>
                                <label className="text-gray-400 flex items-start gap-2">
                                    Material
                                </label>
                                <select value={meterial} onChange={(e) => setmeterial(e.target.value)} className="w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-600 p-3">
                                    <option className="text-gray-400 checked:text-gray-400" value="">Select Material</option>
                                    <option className="text-gray-400 checked:text-gray-400" value="Stainless Steel">Stainless Steel</option>
                                    <option className="text-gray-400 checked:text-gray-400" value="Metal">Metal
                                    </option>
                                    <option className="text-gray-400 checked:text-gray-400" value="Plastic">Plastic</option>
                                    <option className="text-gray-400 checked:text-gray-400" value="Titanium">Titanium</option>
                                </select>
                            </div>


                            <div>
                                <label className="text-gray-400 flex items-start gap-2">
                                    Frame Type
                                </label>
                                <select value={fType} onChange={(e) => setfType(e.target.value)} className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-yellow-600">
                                    <option className="text-gray-400 checked:text-gray-400" value="">Select Frame Type</option>
                                    <option className="text-gray-400 checked:text-gray-400" value="Full Rim">Full Rim</option>
                                    <option className="text-gray-400 checked:text-gray-400" value="Semi Rimless">Semi Rimless
                                    </option>
                                    <option className="text-gray-400 checked:text-gray-400" value="Rimless">Rimless</option>
                                </select>
                            </div>



                            <div>
                                <label className="text-gray-400 flex items-start gap-2">
                                    Frame Shape
                                </label>
                                <select value={fShape} onChange={(e) => setfShape(e.target.value)} className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-yellow-600">
                                    <option className="text-gray-400 checked:text-gray-400" value="">Select Frame Shape</option>
                                    <option className="text-gray-400 checked:text-gray-400" value="Butterfly">Butterfly</option>
                                    <option className="text-gray-400 checked:text-gray-400" value="Cat Eye">Cat Eye
                                    </option>
                                    <option className="text-gray-400 checked:text-gray-400" value="Irregular">Irregular</option>
                                    <option className="text-gray-400 checked:text-gray-400" value="Oval">Oval</option>
                                    <option className="text-gray-400 checked:text-gray-400" value="Phantos">Phantos</option>
                                    <option className="text-gray-400 checked:text-gray-400" value="Pilot">Pilot</option>
                                    <option className="text-gray-400 checked:text-gray-400" value="Pillow">Pillow</option>
                                    <option className="text-gray-400 checked:text-gray-400" value="Rectangle">Rectangle</option>
                                    <option className="text-gray-400 checked:text-gray-400" value="Round">Round</option>
                                    <option className="text-gray-400 checked:text-gray-400" value="Square">Square</option>
                                </select>
                            </div>



                            <div>
                                <label className="text-gray-400 flex items-start gap-2">
                                    Lens Width (mm)
                                </label>
                                <input type="text" value={lensWidth} onChange={(e) => setlensWidth(e.target.value)} className="border p-2 w-full"
                                />
                            </div>


                            <div>
                                <label className="text-gray-400 flex items-start gap-2">
                                    Lens Height (mm)
                                </label>
                                <input type="text" value={lensHeight} onChange={(e) => setlensHeight(e.target.value)} className="border p-2 w-full"
                                />
                            </div>

                            <div>
                                <label className="text-gray-400 flex items-start gap-2">
                                    Bridge Width (mm)
                                </label>
                                <input type="text" value={BridgeWidth} onChange={(e) => setBridgeWidth(e.target.value)} className="border p-2 w-full"
                                />
                            </div>

                            <div>
                                <label className="text-gray-400 flex items-start gap-2">
                                    Arm Length (mm)
                                </label>
                                <input type="text" value={ArmLength} onChange={(e) => setArmLength(e.target.value)} className="border p-2 w-full"
                                />
                            </div>

                        </div>

                        <textarea
                            onChange={(e) => setdescription(e.target.value)}
                            value={description}
                            placeholder="Description"
                            className="w-full border p-3 min-h-[120px]"
                        />


                        <div className="pb-3">
                            <div>
                                <label className="text-gray-400 flex items-start gap-2">
                                    Product Images
                                </label>
                                <div className="flex flex-col flex-wrap gap-2">
                                    {
                                        gellary?.map((item, index) => (
                                            <div key={index} className="flex flex-col items-center gap-2 border border-gray-200 p-1 relative ">
                                                <div className="w-full bg-gray-100">

                                                    <div className="w-full flex items-center gap-1 flex-wrap">
                                                        {
                                                            item?.img?.map((im, indx) => {
                                                                return (
                                                                    <div key={indx} className="relative">
                                                                        <Image src={im} alt="" className="h-[60px] w-[60px] object-cover border border-gray-100" width={60} height={60} />

                                                                        <button
                                                                            onClick={() => handleRemoveSingleGallery(indx, index)}
                                                                            className="absolute top-0 right-0 bg-red-600 text-white text-[8px] rounded-full translate-x-1/2 -translate-y-1/2 p-0.5 z-50">
                                                                            <RxCross2 />
                                                                        </button>
                                                                    </div>
                                                                )
                                                            })
                                                        }

                                                        <div>
                                                            <div className="h-[60px] w-[60px] bg-gray-50 border border-dashed border-gray-300 ml-5">
                                                                <input onChange={(e) => { handlesingelImageAddedGallery(e, index) }} accept=".png,.jpg,.jpeg,.webp" id={`file${index}`} type="file" multiple className="hidden" />
                                                                <label htmlFor={`file${index}`}>
                                                                    <div className="flex items-center gap-2 justify-center flex-col cursor-pointer w-full h-full">
                                                                        <GoPlusCircle className="text-5xl text-gray-300" />
                                                                    </div>
                                                                </label>
                                                            </div>
                                                        </div>

                                                    </div>


                                                </div>
                                                <div className="w-full">


                                                    <select value={JSON.stringify(item?.color[0])} onChange={(e) => handleColorSelect(e, index)} className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600">
                                                        <option className="text-gray-400 checked:text-gray-400" value="">Select Product Color</option>
                                                        {
                                                            allColorList?.map((cl, idx) => (
                                                                <option key={idx} className="text-gray-900 checked:text-gray-400" style={{ backgroundColor: cl?.value }} value={JSON.stringify(cl)}>{cl?.name}</option>
                                                            ))
                                                        }
                                                    </select>


                                                </div>


                                                <button
                                                    onClick={() => handleRemoveGallery(index)}
                                                    className="absolute top-0 right-0 bg-red-600 text-white text-xs p-0.5">
                                                    <RxCross2 />
                                                </button>
                                            </div>
                                        ))
                                    }

                                    <div className="h-[60px] w-[60px] bg-gray-100 border border-dashed border-gray-300">
                                        <input onChange={(e) => { handleGallery(e) }} id="mfile2" type="file" accept=".png,.jpg,.jpeg,.webp" multiple className="hidden" />
                                        <label htmlFor="mfile2">
                                            <div className="flex items-center gap-2 justify-center flex-col cursor-pointer w-full h-full">
                                                <GoPlusCircle className="text-5xl text-gray-300" />
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button onClick={(e) => { handlePruductDataUpdate(e, singleProducts._id) }} className="bg-yellow-700 text-white w-full py-3">
                            Save Changes
                        </button>
                    </div>
                </div>
            )}
            <Toaster />
        </div>
    );
}

function Info({ label, value }) {
    return (
        <div className="bg-gray-50 p-3">
            <p className="text-gray-400">{label}</p>
            <p className="font-medium">{value}</p>
        </div>
    );
}
