import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import toast, { Toaster } from "react-hot-toast";
import { addToCart } from '../lib/cartHelper';
import defaultIMage from "../public/defaultImage.png";
import Loading from "./Loading";



const AccessoriesMainBox = ({ product }) => {

    const [isLoading, setisLoading] = useState(false);
    const [activeIndex, setactiveIndex] = useState(0);




    // handle view function is here
    const handleaddtoBasket = (e, item) => {

        e.preventDefault();
        setisLoading(true);



        // accessory item object here
        const accessoryItem = {
            cartItemId: crypto.randomUUID(),
            productId: item?._id,              // your product's ID
            type: item?.productType,
            name: item?.name,
            price: item?.price,
            quantity: 1,
            image: item?.img,
            description: item?.description,
            addedAt: new Date().toISOString(),
        }


        setTimeout(() => {

            // add to cart here
            addToCart(accessoryItem);

            toast.success("Added in Basket");

            // Trigger header update
            window.dispatchEvent(new Event("cartUpdated"));

            setisLoading(false);
        }, 700);
    }






    return (
        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6 h-fit lg:h-[400px]">
            <div className="bg-white w-full border border-gray-200 p-4 h-fit lg:h-full">
                <Image src={product?.img[activeIndex] || defaultIMage} width={1000} height={1000} alt={product?.name} className="w-full h-full object-contain" />
            </div>
            <div className="bg-white w-full border border-gray-200 p-4 h-fit lg:h-full">
                <h3 className="text-2xl font-medium text-gray-600">{product.name}</h3>
                <p className="text-left text-md font-light text-gray-900/80 mb-2 line-clamp-2 pt-2">
                    {product?.shortDes}
                </p>
                <h4 className="pt-4 pb-6 text-2xl font-light text-gray-700/90">£{product.price}</h4>




                <div className="mb-6 w-full border border-gray-200 p-2 h-fit flex items-center gap-2">
                    {
                        product?.img.map((item, index) => (
                            <div key={index} className={`w-[80px] h-[60px] border-2 border-gray-200 cursor-pointer ${activeIndex == index ? "border-yellow-500" : ""}`}>
                                <Image key={index} src={item} width={1000} height={1000} alt={product?.name} className="w-full h-full object-contain" onClick={() => { setactiveIndex(index) }} />
                            </div>
                        ))
                    }
                </div>


                <button
                    onClick={(e) => { handleaddtoBasket(e, product) }}
                    className="pBg text-white font-light px-6 py-3 transition flex items-center justify-center gap-2 w-full"
                >

                    {
                        isLoading ? (
                            <Loading />
                        ) : (
                            <>
                                Add to Basket < ArrowRight className="" size={18} />
                            </>
                        )
                    }
                </button>



            </div>
            <Toaster />
        </div>
    )
}

export default AccessoriesMainBox;