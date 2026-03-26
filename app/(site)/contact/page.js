"use client";

import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Loading from "../../../components/Loading";

export default function ContactPage() {

    const [loading, setloading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        oid: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setloading(true);


        try {
            // Make API call to add the product
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const res = await response.json();

            if (res.success) {
                toast.success(res.message);
                setFormData({ name: "", email: "", oid: "", message: "" });
            } else {
                toast.error(res.message);
            }
        } catch (error) {
            console.error('Error adding product:', error);
            toast.error(res.message);
        }







        setloading(false);
    };

    return (
        <section className="h-fit bg-gray-50 flex items-center justify-center px-4 py-4 md:py-8 lg:py-14">
            <div className="max-w-6xl w-full bg-white shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">

                {/* Left Info Section */}
                <div className="bg-gradient-to-br from-yellow-600 to-yellow-900 text-white p-10 flex flex-col justify-center">
                    <h2 className="text-4xl font-light mb-4">Contact Us</h2>
                    <p className="text-indigo-100 font-light mb-3">
                        If you have any questions about your order, lenses, or frames, our team will be happy to
                        help
                    </p>
                    <p className="text-indigo-100 font-light mb-8">
                        If your enquiry relates to an order, please include your order number in your message so
                        we can assist you more quickly.
                    </p>
                    <div className="space-y-4 text-md">
                        <p> You can contact us at:</p>
                        <h2 className="text-xl">contact@spexnation.co.uk</h2>
                    </div>
                </div>

                {/* Right Form Section */}
                <div className="p-10">
                    <h3 className="text-4xl font-light text-gray-800 mb-2">
                        Contact Form
                    </h3>
                    <p className="pb-6">You can also contact us using the form below</p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1">
                                Your Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
                                placeholder="John Doe"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1">
                                Email Address
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
                                Order Number (optional)
                            </label>
                            <input
                                type="text"
                                name="oid"
                                value={formData.oid}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
                                placeholder="OID-9087"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1">
                                Message
                            </label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="4"
                                required
                                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
                                placeholder="Write your message..."
                            ></textarea>
                        </div>
                        <p className="text-sm text-gray-600">Once submitted, our team will review your enquiry and respond as soon as possible.</p>

                        <button
                            type="submit"
                            className="w-full pBg text-white font-medium py-3 rounded-lg transition duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-yellow-600"
                        >



                            {
                                loading ? (
                                    <Loading />
                                ) : (
                                    <span>Send Message</span>
                                )
                            }
                        </button>
                    </form>
                </div>
            </div>
            <Toaster />
        </section>
    );
}
