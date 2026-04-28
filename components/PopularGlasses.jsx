'use client'

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import BestSellingProductSkalaton from "./skalaton/BestSellingProductSkalaton";



export default function PopularGlasses() {


  const [loading, setLoading] = useState(true);
  const [allProducts, setAllProducts] = useState([]);
  const [loadmore, setloadmore] = useState(true);


  const fetchProducts = async () => {
    try {
      // Make API call to get all the product
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/bestsellingproduct`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      const res = await response.json();
      setAllProducts(res?.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching products:', error);
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchProducts();
  }, [])



  const BestsellingProduct = loadmore ? allProducts : allProducts?.slice(0, 8);

  return (
    <section className="bg-gray-100 min-h-[600px]">
      <section className="px-4 md:px-6 py-6 pt-12">
        <h2 className="text-2xl sm:text-5xl font-light text-gray-900 text-center mb-12 text-gray-900">Best-Selling Glasses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6">


          {
            loading ? (

              Array.from({ length: 8 }).map((_, i) => (
                <BestSellingProductSkalaton key={i} />
              ))


            ) : (
              BestsellingProduct.map((item, index) => (
                <motion.div
                  initial={{ opacity: 0, x: -45 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1 * index,
                    ease: "easeOut"
                  }}
                  key={index} className="text-center">
                  <ProductCard item={item} />
                </motion.div>
              ))
            )
          }

        </div>
        <div className="flex items-center justify-center w-full mt-8">
          <button onClick={() => setloadmore(!loadmore)} className="text-white text-sm bg-yellow-700 px-2 cursor-pointer py-1 rounded-md flex items-center gap-1">{loadmore ? "Load Less" : "Load More"}</button>
        </div>
      </section>
    </section >
  )
}
