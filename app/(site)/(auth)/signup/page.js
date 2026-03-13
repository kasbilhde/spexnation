"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { TiTick } from "react-icons/ti";
import Loading from "../../../../components/Loading";



export default function SignInPage() {

    const router = useRouter();
    const [loading, setloading] = useState(false);
    const [confirm, setconfirm] = useState(false);
    const [isNewsletter, setisNewsletter] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        role: "user"
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!confirm) {
            toast.error("Please Accept Terms and Conditions");
            return;
        }

        const data = {
            name: formData.name,
            email: formData.email,
            password: formData.password,
            role: formData.role,
            isNewsletter: isNewsletter
        };


        setloading(true);

        // Make API call to add the product
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const res = await response.json();

        if (res.success) {
            toast.success(res.message);
            setFormData({
                name: "",
                email: "",
                password: "",
                role: "user"
            });
            router.push('/signin');
        } else {
            toast.error(res.message);
        }

        setloading(false);

    };

    return (
        <section className="h-fit bg-gray-50 flex items-center justify-center px-4 py-4 md:py-8 lg:py-14">
            <div className="max-w-xl w-full bg-white shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-1 select-none">


                {/* Right Form Section */}
                <div className="p-6 md:p-8 lg:p-10">
                    <h3 className="text-2xl font-light text-gray-800 mb-6">
                        New Account
                    </h3>

                    <form onSubmit={handleSubmit} className="space-y-5">

                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1">
                                Full Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
                                placeholder="john"
                            />
                        </div>



                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
                                placeholder="john@example.com"
                            />
                        </div>


                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
                                placeholder="**********"
                            />
                        </div>




                        <div className="mt-6 flex items-center gap-2 border-t pt-4" >

                            <div className="w-fit">
                                <div onClick={(e) => { setconfirm(!confirm) }} className={`flex items-center justify-center text-white cursor-pointer w-6 h-6 ${confirm ? "bg-yellow-600" : "bg-transparent border border-gray-300"}`}>
                                    {
                                        confirm && <TiTick className="text-2xl" />
                                    }
                                </div>
                            </div>

                            <p className="font-medium text-sm text-gray-600/70">
                                I agree to the Spexnation <a className="text-yellow-600 underline" href="/termsandconditions">Terms & Conditions</a> and <a className="text-yellow-600 underline" href="/privacypolicy"> Privacy Policy</a>
                            </p>
                        </div>



                        <div className="flex items-center gap-2" >

                            <div className="w-fit">
                                <div onClick={(e) => { setisNewsletter(!isNewsletter) }} className={`flex items-center justify-center text-white cursor-pointer w-6 h-6 ${isNewsletter ? "bg-yellow-600" : "bg-transparent border border-gray-300"}`}>
                                    {
                                        isNewsletter && <TiTick className="text-2xl" />
                                    }
                                </div>
                            </div>

                            <p className="font-medium text-sm text-gray-600/70">
                                Email me Spexnation deals, discount codes and exclusive offers
                            </p>
                        </div>




                        <button
                            type="submit"
                            className="w-full pBg text-white font-medium py-3 rounded-lg flex items-center justify-center transition duration-300"
                        >


                            {
                                loading ? (
                                    <Loading />
                                ) : (
                                    <span>Sign Up</span>
                                )
                            }
                        </button>
                    </form>

                    <div className="pt-3">
                        <span className="">Already have an account? <Link href="/signin" className="text-yellow-600">Sign In</Link></span>
                    </div>

                </div>
            </div>
            <Toaster />
        </section >
    );
}
