'use client';

import namer from "color-namer";
import { Trash } from "lucide-react";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Loading from "../../../../../components/Loading";
import clearFileInput from "../../../../../lib/clearFileInput";
import fileToBase64 from "../../../../../lib/fileToBase64";
import getTookn from "../../../../../lib/getTookn";



const AccessoriesPage = () => {


    const [isLoading, setIsLoading] = useState(false);
    const [token, settoken] = useState(null);
    const [ColourCode, setColourCode] = useState('#FF0000');
    const [ColourName, setColourName] = useState('Red');
    const [allAccessories, setallAccessories] = useState([]);
    const [img, setimg] = useState('');
    const [rowID, setrowID] = useState('');


    const fetchAccessories = async () => {
        setIsLoading(true);
        try {
            // Make API call to get all the product
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/allbanner`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            const res = await response.json();
            setallAccessories(res?.data);
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching products:', error);
            setIsLoading(false);
        }
    };


    useEffect(() => {
        const tkn = getTookn();
        settoken(tkn);
        fetchAccessories();
    }, [])



    // handle add product form submission is here
    const handleAccessories = async (e) => {


        e.preventDefault();


        if (!ColourName || !ColourCode) {
            toast.error('Please fill in all the required fields.');
            return;
        }


        console.log({
            "Color Name": ColourName,
            "Color Code": ColourCode,

        });


        return;


        setIsLoading(true);




        // Make API call to add the product
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/addcolour`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "authorization": `Bearer ${token}`,
            },
            body: JSON.stringify({ Route: Route, img: img, productType: "banner" }),
        });

        const res = await response.json();

        setIsLoading(false);

        console.log(res);

        if (res.success) {
            toast.success(res.message);
            setRoute('');
            handleRemovedImage(e);
            fetchAccessories();
        } else {
            toast.error(res.message);
        }


    }



    // handle delect coupon function is here
    const handleDeleteAccessories = async (e, id) => {

        e.preventDefault();


        setIsLoading(true);

        try {
            // Make API call to get all the product
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/deletebanner/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    "authorization": `Bearer ${token}`,
                }
            });

            const res = await response.json();
            fetchAccessories();
            toast.success(res.message);
        } catch (error) {
            console.error('Error fetching Accessories:', error);
        }

        setIsLoading(false);

    }






    // handle prescription file changes is here
    async function handleImageChange(e) {

        const file = e.target.files[0];
        const base64 = await fileToBase64(file);
        setimg(base64);

    }



    // handle remove function is here
    function handleRemovedImage(e) {
        e.preventDefault();
        clearFileInput(fileInputRef);
        setimg('');
    }




    // handle color change function is here
    function handleColorChange(e) {
        e.preventDefault();
        setColourCode(e.target.value);
        const colorName = namer(e.target.value).ntc[0].name;
        setColourName(colorName);
    }



    console.log(allAccessories);




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
            <h1 className="text-xl font-medium text-gray-600">Colour</h1>

            <div className="mt-4  flex items-center justify-between gap-4">

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

                <div className="w-full flex justify-end">
                    <button onClick={(e) => { handleAccessories(e) }} className="mt-4 bg-yellow-700 flex items-center  justify-center text-white px-4 py-2 hover:bg-yellow-800">
                        {
                            isLoading ? <Loading /> : 'Add Colour'
                        }
                    </button>
                </div>

            </div >




            <div className="mt-8">
                <div className="">
                    <div className="flex items-center justify-between">
                        <h1 className="text-xl font-medium text-gray-600">All Colours List : {allAccessories?.length}</h1>
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
                                {allAccessories?.map((row, index) => (
                                    <tr key={index} className="hover:bg-gray-50">

                                        <td className="p-2 border text-center text-gray-500">
                                            {index + 1}
                                        </td>

                                        <td className="p-2 border text-center text-gray-500 flex justify-center items-center">
                                            <div style={{ backgroundColor: "red" }} className="w-10 h-10" />
                                        </td>


                                        <td className="p-2 border text-center text-gray-500">
                                            Red
                                        </td>
                                        <td className="p-2 border text-center text-gray-500">
                                            #FFF000
                                        </td>
                                        <td className="p-2 border-b text-center text-gray-500">



                                            <button onClick={(e) => handleDeleteAccessories(e, row?._id)} className="bg-red-400 cursor-pointer text-white px-1 py-1">
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

            <Toaster />
        </div >
    );
};

export default AccessoriesPage;