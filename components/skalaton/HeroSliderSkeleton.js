
function HeroSliderSkeleton() {

    return (
        <section className="relative w-full overflow-hidden">
            <div className="w-full aspect-[16/5] animate-shimmer rounded-lg bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-[length:700px_100%]" />

            {/* Pagination dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
                <div className="w-8 h-3 rounded-full bg-white/40" />
                <div className="w-3 h-3 rounded-full bg-white/20" />
                <div className="w-3 h-3 rounded-full bg-white/20" />
            </div>
        </section>
    );
}

export default HeroSliderSkeleton;