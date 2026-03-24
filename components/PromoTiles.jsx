'use client'

import { ArrowRight } from 'lucide-react';
import Link from "next/link";

export default function PromoTiles() {
  return (
    <section className="px-4 md:px-6 py-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {/* Buy 2 Get 1 Tile */}
        <div className="forMan">
          <div className="relative h-64 md:h-96 flex flex-col justify-end p-6">
            <div className="text-white">
              <Link href={'/mens'} className="">
                <span className="flex items-center gap-2">
                  <span className="text-xl">For Men</span>
                  <ArrowRight size={17} />
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Premium Lenses Tile */}
        <div className="forwoman">
          <div className="relative h-64 md:h-96 flex flex-col justify-end p-6">
            <div className="text-white">
              <Link className="" href={'/womens'} className="">
                <span className="flex items-center gap-2">
                  <span className="text-xl">For Women</span>
                  <ArrowRight size={17} />
                </span>
              </Link>
            </div>
          </div>
        </div>




        {/* Premium Lenses Tile */}
        <div className="foraccessories">
          <div className="relative h-64 md:h-96 flex flex-col justify-end p-6">
            <div className="text-white">
              <Link href={'/accessories'} className="">
                <span className="flex items-center gap-2">
                  <span className="text-xl">For Accessories</span>
                  <ArrowRight size={17} />
                </span>
              </Link>
            </div>
          </div>
        </div>


      </div>


      {/* Buttons */}
      {/* <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
        <button className="border-2 border-yellow-500 text-yellow-600 px-6 py-3 rounded font-bold hover:bg-yellow-50 transition">
          SHOP FRAMES
        </button>
        <button className="border-2 border-yellow-500 text-yellow-600 px-6 py-3 rounded font-bold hover:bg-yellow-50 transition">
          SHOP SUNGLASSES
        </button>
      </div> */}
    </section>
  )
}
