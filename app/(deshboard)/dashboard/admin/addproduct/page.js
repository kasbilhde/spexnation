'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { GoPlusCircle } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";
import Loading from "../../../../../components/Loading";
import fileToBase64 from "../../../../../lib/fileToBase64";
import getTookn from "../../../../../lib/getTookn";


const productTypes = [
    "Frame",
    "Prescription Sunglasses",
    "Non-Prescription Sunglasses"
]


const brands = [
    "Ambri",
    "Colt",
    "Cube",
    "Elite",
    "Ferucci",
    "Joia",
    "MB",
    "NHi",
    "Sightique",
    "SUNGLASSES",
    "Synergy",
    "Visage",
    "Others"
];



const AddproductPage = () => {

    const router = useRouter();

    const [isLoading, setIsLoading] = useState(false);
    const [token, setToken] = useState(null);

    const [productType, setProductType] = useState('');
    const [brand, setbrand] = useState('');
    const [title, settitle] = useState('');
    const [shortdes, setshortdes] = useState('');
    const [price, setprice] = useState('');
    const [gender, setgender] = useState('');
    const [description, setdescription] = useState('');
    const [color, setcolor] = useState([]);
    const [weight, setweight] = useState('');
    const [meterial, setmeterial] = useState('');
    const [fType, setfType] = useState('');
    const [fShape, setfShape] = useState('');
    const [lensWidth, setlensWidth] = useState('');
    const [lensHeight, setlensHeight] = useState('');
    const [BridgeWidth, setBridgeWidth] = useState('');
    const [ArmLength, setArmLength] = useState('');
    const [gellary, setgellery] = useState([]);



    const [allBrandsList, setallBrandsList] = useState([]);
    const [allcolorsList, setallcolorsList] = useState([]);

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
            setallBrandsList(res?.data?.brands);
            setallcolorsList(res?.data?.colours);
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching products:', error);
            setIsLoading(false);
        }
    };




    useEffect(() => {
        const tkn = getTookn();
        setToken(tkn);

        fetchSettingsData();

    }, [])




    const corespondingBrands = allBrandsList?.filter((item) => {
        return item?.forProduct === productType;
    });




    // handle add product form submission is here
    const handleAddProduct = async (e) => {
        e.preventDefault();



        if (!productType || !brand || !title || !shortdes || !price || !fType || !description || gellary.length < 1) {

            toast.error('Please fill in all the required fields.');
            return;
        }

        setIsLoading(true);

        const data = {
            frameType: productType,
            brand: brand,
            ProductTitle: title,
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
            product_Images: gellary,
            product_Discription: description,
            productType: "Frame"
        }


        // Make API call to add the product
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/createProduct`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "authorization": `Bearer ${token}`,
            },
            body: JSON.stringify(data),
        });

        const res = await response.json();

        if (res.success) {
            toast.success(res.message);
            setProductType('');
            setbrand('');
            settitle('');
            setshortdes('');
            setprice('');
            setgender('');
            setweight('');
            setmeterial('');
            setfType('');
            setfShape('');
            setlensWidth('');
            setlensHeight('');
            setBridgeWidth('');
            setArmLength('');
            setdescription('');
            setgellery([]);
            router.push('/dashboard/admin/allproducts');
        } else {
            toast.error(res.message);
        }

        setIsLoading(false);
    }


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




    return (
        <div className="bg-white py-4 px-5  border border-gray-200">
            <h1 className="text-xl font-medium text-gray-600">Add Product</h1>


            <div className="grid grid-cols-7 gap-3 mt-5">

                <div className="col-span-7 md:col-span-5">
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
                                Brand <span className="text-xs text-red-600">Required</span>
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
                                Title <span className="text-xs text-red-600">Required</span>
                            </label>
                            <input value={title} onChange={(e) => settitle(e.target.value)} type="text" className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600" />
                        </div>


                        <div>
                            <label className="text-gray-400 flex items-start gap-2">
                                Short Description <span className="text-xs text-red-600">Required</span>
                            </label>
                            <input value={shortdes} onChange={(e) => setshortdes(e.target.value)} type="text" className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600" />
                        </div>


                        <div>
                            <label className="text-gray-400 flex items-start gap-2">
                                Price <span className="text-xs text-red-600">Required</span>
                            </label>
                            <input value={price} onChange={(e) => setprice(e.target.value)} type="number" className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600" />
                        </div>


                        <div>
                            <label className="text-gray-400 flex items-start gap-2">
                                Gender
                            </label>
                            <select value={gender} onChange={(e) => setgender(e.target.value)} className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600">
                                <option className="text-gray-400 checked:text-gray-400" value="">Select Gender</option>
                                <option className="text-gray-400 checked:text-gray-400" value="Mens">Mens</option>
                                <option className="text-gray-400 checked:text-gray-400" value="Womens">Womens</option>
                                {/* <option className="text-gray-400 checked:text-gray-400" value="Unisex">Unisex</option> */}
                            </select>
                        </div>


                        <div>
                            <label className="text-gray-400 flex items-start gap-2">
                                Weight
                            </label>
                            <input value={weight} onChange={(e) => setweight(e.target.value)} type="text" className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600" />
                        </div>



                        <div>
                            <label className="text-gray-400 flex items-start gap-2">
                                Material
                            </label>
                            <select value={meterial} onChange={(e) => setmeterial(e.target.value)} className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600">
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
                                Frame Type <span className="text-xs text-red-600">Required</span>
                            </label>
                            <select value={fType} onChange={(e) => setfType(e.target.value)} className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600">
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
                            <select value={fShape} onChange={(e) => setfShape(e.target.value)} className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600">
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
                                {"Lens Width (mm)"}
                            </label>
                            <input value={lensWidth} onChange={(e) => setlensWidth(e.target.value)} type="text" className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600" />
                        </div>


                        <div>
                            <label className="text-gray-400 flex items-start gap-2">
                                {"Lens Height (mm)"}
                            </label>
                            <input value={lensHeight} onChange={(e) => setlensHeight(e.target.value)} type="text" className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600" />
                        </div>


                        <div>
                            <label className="text-gray-400 flex items-start gap-2">
                                {"Bridge Width (mm)"}
                            </label>
                            <input value={BridgeWidth} onChange={(e) => setBridgeWidth(e.target.value)} type="text" className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600" />
                        </div>


                        <div>
                            <label className="text-gray-400 flex items-start gap-2">
                                {"Arm Length (mm)"}
                            </label>
                            <input value={ArmLength} onChange={(e) => setArmLength(e.target.value)} type="v" className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600" />
                        </div>



                    </div>

                    <div className="mt-4  grid grid-cols-1">
                        <label className="text-gray-400 flex items-start gap-2">
                            Discription <span className="text-xs text-red-600">Required</span>
                        </label>
                        <textarea value={description} onChange={(e) => setdescription(e.target.value)} className="w-full h-[200px] border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600"></textarea>
                    </div>

                </div>

                <div className="col-span-7 md:col-span-2 flex flex-col gap-4 border border-gray-300 bg-gray-100 p-4 mt-6">

                    <label className="text-gray-400 flex items-start gap-2">
                        Product Images <span className="text-xs text-red-600">Required</span>
                    </label>
                    <div className="h-full bg-white border border-gray-300 overflow-y-scroll p-3">

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


                                            <select onChange={(e) => handleColorSelect(e, index)} className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600">
                                                <option className="text-gray-400 checked:text-gray-400" value="">Select Product Color</option>
                                                {
                                                    allcolorsList?.map((cl, idx) => (
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
                                <input onChange={(e) => { handleGallery(e) }} accept=".png,.jpg,.jpeg,.webp" id="nfile2" type="file" multiple className="hidden" />
                                <label htmlFor="nfile2">
                                    <div className="flex items-center gap-2 justify-center flex-col cursor-pointer w-full h-full">
                                        <GoPlusCircle className="text-5xl text-gray-300" />
                                    </div>
                                </label>
                            </div>
                        </div>

                    </div>

                </div>


            </div>





            <div className="flex justify-end">
                <button disabled={isLoading} onClick={(e) => { handleAddProduct(e) }} className="mt-4 bg-yellow-700 flex items-center  justify-center text-white px-4 py-2 hover:bg-yellow-800">
                    {
                        isLoading ? <Loading /> : 'Add Product'
                    }
                </button>
            </div>

            <Toaster position="top-center" />
        </div>
    );
};

export default AddproductPage;