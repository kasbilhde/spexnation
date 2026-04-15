'use client';

import namer from "color-namer";
import { Trash, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Loading from "../../../../../components/Loading";
import getTookn from "../../../../../lib/getTookn";



const AccessoriesPage = () => {


    const [isLoading, setIsLoading] = useState(false);
    const [currentTab, setCurrentTab] = useState('brand');
    const [token, settoken] = useState(null);
    const [ColourCode, setColourCode] = useState('#BABABA');
    const [ColourName, setColourName] = useState('Silver');
    const [forproduct, setforproduct] = useState('normal');
    const [brandName, setbrandName] = useState('');
    const [allSettings, setallSettings] = useState([]);
    const [img, setimg] = useState('');
    const [rowID, setrowID] = useState('');


    const fetchSettingsData = async () => {
        setIsLoading(true);
        try {
            // Make API call to get all the product
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/settings`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            const res = await response.json();
            setallSettings(res?.data);
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching products:', error);
            setIsLoading(false);
        }
    };


    useEffect(() => {
        const tkn = getTookn();
        settoken(tkn);
        fetchSettingsData();
    }, [])



    // handle add colour form submission is here
    const handleAddColour = async (e) => {


        e.preventDefault();


        if (!ColourName || !ColourCode) {
            toast.error('Please fill in all the required fields.');
            return;
        }


        setIsLoading(true);

        const formData = {
            name: ColourName,
            value: ColourCode,
        }


        // Make API call to add the product
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/settings/addcolour`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "authorization": `Bearer ${token}`,
            },
            body: JSON.stringify(formData),
        });

        const res = await response.json();

        setIsLoading(false);


        if (res.success) {
            toast.success(res.message);
            setColourName('Silver');
            setColourCode('#BABABA');
            fetchSettingsData();
        } else {
            toast.error(res.message);
        }


    }




    // handle add brand form submission is here
    const handleAddBrand = async (e) => {


        e.preventDefault();


        if (!brandName || !forproduct) {
            toast.error('Please fill in all the required fields.');
            return;
        }


        const formData = {
            brandName: brandName,
            forProduct: forproduct
        };


        setIsLoading(true);




        // Make API call to add the product
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/settings/addbrand`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "authorization": `Bearer ${token}`,
            },
            body: JSON.stringify(formData),
        });

        const res = await response.json();

        setIsLoading(false);


        if (res.success) {
            toast.success(res.message);
            setbrandName('');
            setforproduct('');
            fetchSettingsData();
        } else {
            toast.error(res.message);
        }


    }





    // handle delect colour function is here
    const handleDeleteColour = async (e, id) => {

        e.preventDefault();


        setIsLoading(true);

        try {
            // Make API call to get all the product
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/settings/deletecolour/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    "authorization": `Bearer ${token}`,
                }
            });

            const res = await response.json();
            fetchSettingsData();
            toast.success(res.message);
        } catch (error) {
            console.error('Error fetching Accessories:', error);
        }

        setIsLoading(false);

    }




    // handle delect brand function is here
    const handleDeleteBrand = async (e, id) => {

        e.preventDefault();


        setIsLoading(true);

        try {
            // Make API call to get all the product
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/settings/deletebrand/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    "authorization": `Bearer ${token}`,
                }
            });

            const res = await response.json();
            fetchSettingsData();
            toast.success(res.message);
        } catch (error) {
            console.error('Error fetching Accessories:', error);
        }

        setIsLoading(false);

    }



    // handle color change function is here
    function handleColorChange(e) {
        e.preventDefault();
        setColourCode(e.target.value);
        const colorName = namer(e.target.value).ntc[0].name;
        setColourName(colorName);
    }



    const brandsForNormalGlasses = allSettings["brands"]?.filter(brand => brand.forProduct === "Frame");
    const brandsForPrescriptionSunglasses = allSettings["brands"]?.filter(brand => brand.forProduct === "Prescription Sunglasses");
    const brandsForNonPrescriptionSunglasses = allSettings["brands"]?.filter(brand => brand.forProduct === "Non-Prescription Sunglasses");



    if (isLoading) {
        return (
            <div className="h-screen flex justify-center items-center">
                <div className="bg-yellow-700 px-5 py-2 w-fit">
                    <Loading />
                </div>
            </div>
        )
    }


    return (
        <div className=" bg-white py-4 px-5  border border-gray-200">

            <div className="flex items-center justify-between">

                <div className="flex items-center gap-4">
                    <h1 className="text-xl font-medium text-gray-600 text-nowrap">{currentTab === 'colour' ? 'Add Colour' : 'Add Brand'}</h1>

                    <div className="flex items-center gap-1">
                        <button onClick={() => setCurrentTab('colour')} className={`text-gray-100 cursor-pointer text-sm px-1 cursor-pointer ${currentTab === 'colour' ? 'pBg' : 'bg-gray-400'}`}>Colour</button>
                        <button onClick={() => setCurrentTab('brand')} className={`text-gray-100 cursor-pointer text-sm  px-1 cursor-pointer ${currentTab === 'brand' ? 'pBg' : 'bg-gray-400'}`}>Brand</button>
                    </div>
                </div>


                <div className="w-full flex justify-end">
                    <button onClick={(e) => { currentTab === 'colour' ? handleAddColour(e) : handleAddBrand(e) }} className="bg-yellow-700 flex items-center  justify-center text-white px-4 py-2 hover:bg-yellow-800">
                        {
                            isLoading ? <Loading /> : currentTab === 'colour' ? 'Add Colour' : 'Add Brand'
                        }
                    </button>
                </div>

            </div>





            {
                currentTab === 'brand' && (
                    <div className="mt-4  flex items-center flex-col justify-between gap-4">

                        <div className="w-full flex gap-4">
                            <div className="mb-3 w-full">
                                <label className="text-gray-400 flex items-start gap-1">
                                    For Product <span className="text-md text-red-600">*</span>
                                </label>
                                <select value={forproduct} onChange={(e) => setforproduct(e.target.value)} className="w-full focus:outline-none border border-gray-200 px-3 py-1.5 cursor-pointer">
                                    <option value="">Select Product Type</option>
                                    <option value="Frame">For Normal Glasses</option>
                                    <option value="Prescription Sunglasses">For Prescription Sunglasses</option>
                                    <option value="Non-Prescription Sunglasses">For Non Prescription Sunglasses</option>
                                </select>
                            </div>
                            <div className="mb-3 w-full">
                                <label className="text-gray-400 flex items-start gap-1">
                                    Brand Name <span className="text-md text-red-600">*</span>
                                </label>
                                <input value={brandName} onChange={(e) => setbrandName(e.target.value)} type="text" className={`w-full focus:outline-none border border-gray-200 px-3 py-1 cursor-pointer`} />
                            </div>
                        </div>
                    </div >
                )
            }


            {
                currentTab === 'colour' && (
                    <div className="mt-4  flex items-center flex-col justify-between gap-4">

                        <div className="w-full flex gap-4">
                            <div className="mb-3 w-full">
                                <label className="text-gray-400 flex items-start gap-1">
                                    Colour Code <span className="text-md text-red-600">*</span>
                                </label>
                                <input style={{ backgroundColor: ColourCode }} value={ColourCode} onChange={(e) => handleColorChange(e)} type="color" className={`w-full focus:outline-none cursor-pointer h-9`} />
                            </div>
                            <div className="mb-3 w-full">
                                <label className="text-gray-400 flex items-start gap-1">
                                    Colour Name <span className="text-md text-red-600">*</span>
                                </label>
                                <input value={ColourName} onChange={(e) => setColourName(e.target.value)} type="text" className={`w-full focus:outline-none border border-gray-200 px-3 py-1 cursor-pointer`} />
                            </div>
                        </div>
                    </div >
                )
            }




            {
                currentTab === 'colour' && (
                    <div className="mt-8">
                        <div className="">
                            <div className="flex items-center justify-between">
                                <h1 className="text-xl font-medium text-gray-600">All Colours List : {allSettings["colours"]?.length}</h1>
                            </div>
                            <div className="mt-6 overflow-x-auto">
                                <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
                                    <thead className="bg-gray-100">
                                        <tr className="text-center">
                                            <th className="p-3 border">Sl</th>
                                            <th className="p-3 border">Colour Name</th>
                                            <th className="p-3 border">Colour Name</th>
                                            <th className="p-3 border">Colour Code</th>
                                            <th className="p-3 border">Action</th>
                                        </tr>
                                    </thead>

                                    <tbody className="text-center">
                                        {allSettings["colours"]?.map((row, index) => (
                                            <tr key={index} className="hover:bg-gray-50">

                                                <td className="p-2 border text-center text-gray-500">
                                                    {index + 1}
                                                </td>

                                                <td className="p-2 border text-center text-gray-500 flex justify-center items-center">
                                                    <div style={{ backgroundColor: row?.value }} className="w-10 h-10" />
                                                </td>


                                                <td className="p-2 border text-center text-gray-500">
                                                    {
                                                        row?.name
                                                    }
                                                </td>
                                                <td className="p-2 border text-center text-gray-500">
                                                    {
                                                        row?.value
                                                    }
                                                </td>
                                                <td className="p-2 border-b text-center text-gray-500">



                                                    <button onClick={(e) => handleDeleteColour(e, row?._id)} className="bg-red-400 cursor-pointer text-white px-1 py-1">
                                                        <Trash size={17} />
                                                    </button>



                                                </td>

                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                        </div >
                    </div>
                )
            }


            {
                currentTab === 'brand' && (

                    <div className="mt-8">
                        <div className="">
                            <div className="flex items-center justify-between">
                                <h1 className="text-xl font-medium text-gray-600">All Brands List: {allSettings["brands"]?.length}</h1>
                            </div>
                            <div className="mt-6 overflow-x-auto">
                                <div className="w-full grid grid-cols-12 gap-4">
                                    <div className="bg-gray-100 p-4 col-span-12 md:col-span-4">
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-lg font-medium text-gray-600">For Normal Glasses</h3>
                                            <span className="text-sm text-gray-500">Total: {brandsForNormalGlasses?.length}</span>
                                        </div>
                                        <div className="mt-4">
                                            <ul>
                                                {
                                                    brandsForNormalGlasses?.map((brand, index) => (
                                                        <li key={index} className="flex items-center justify-between mb-2">
                                                            <span>{brand?.brandName}</span>
                                                            <button onClick={(e) => handleDeleteBrand(e, brand?._id)} className="bg-red-400 cursor-pointer text-white px-1 py-1 cursor-pointer">
                                                                <Trash2 size={14} />
                                                            </button>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="bg-gray-100 p-4 col-span-12 md:col-span-4">
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-lg font-medium text-gray-600">For Prescription Sunglasses</h3>
                                            <span className="text-sm text-gray-500">Total: {brandsForPrescriptionSunglasses?.length}</span>
                                        </div>
                                        <div className="mt-4">
                                            <ul>
                                                {
                                                    brandsForPrescriptionSunglasses?.map((brand, index) => (
                                                        <li key={index} className="flex items-center justify-between mb-2">
                                                            <span>{brand?.brandName}</span>
                                                            <button onClick={(e) => handleDeleteBrand(e, brand?._id)} className="bg-red-400 cursor-pointer text-white px-1 py-1 cursor-pointer">
                                                                <Trash2 size={14} />
                                                            </button>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </div>


                                    <div className="bg-gray-100 p-4 col-span-12 md:col-span-4">
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-lg font-medium text-gray-600">For Non Prescription Sunglasses</h3>
                                            <span className="text-sm text-gray-500">Total: {brandsForNonPrescriptionSunglasses?.length}</span>
                                        </div>
                                        <div className="mt-4">
                                            <ul>
                                                {
                                                    brandsForNonPrescriptionSunglasses?.map((brand, index) => (
                                                        <li key={index} className="flex items-center justify-between mb-2">
                                                            <span>{brand?.brandName}</span>
                                                            <button onClick={(e) => handleDeleteBrand(e, brand?._id)} className="bg-red-400 cursor-pointer text-white px-1 py-1 cursor-pointer">
                                                                <Trash2 size={14} />
                                                            </button>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div >
                    </div>

                )
            }










            <Toaster />
        </div >
    );
};

export default AccessoriesPage;