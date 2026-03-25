'use client'

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import AccessoriesMainBox from '../../../../components/AccessoriesMainBox'
import AccessoriesTabs from '../../../../components/AccessoriesTabs'
import Container from '../../../../components/Container'
import ProductBreadcrumb from '../../../../components/ProductBreadcrumb'
import SingleProductSkalaton from "../../../../components/skalaton/SingleProductSkalaton"


const SingleAccessoriesPage = () => {


    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [singleAccessories, setsingleAccessories] = useState([]);
    const [activeIndex, setactiveIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(0);


    const fetchAccessories = async (id) => {
        try {
            // Make API call to get all the product
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/singleaccessories/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            const res = await response.json();
            setsingleAccessories(res?.data);
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        } catch (error) {
            console.error('Error fetching Accessories:', error);
            setLoading(false);
        }
    };


    useEffect(() => {
        fetchAccessories(id);
        window.scrollTo(0, 0);
    }, [id])


    const breadcrumbs = [
        { label: 'Home', href: '/' },
        { label: 'Accessories', href: '/accessories' },
        { label: singleAccessories?.name, href: `/accessories/${singleAccessories?._id}` },
    ]


    if (loading) {
        return <SingleProductSkalaton />
    }



    return (
        <main className="min-h-screen bg-gray-50">

            <Container>
                <ProductBreadcrumb breadcrumbs={breadcrumbs} />
                <div>
                    <AccessoriesMainBox product={singleAccessories} />
                    <AccessoriesTabs product={singleAccessories} />
                </div>
            </Container>

        </main>
    )
}

export default SingleAccessoriesPage;