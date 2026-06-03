import { Package, ShieldCheck, ThumbsUp, Truck } from "lucide-react";

const Shippinginfo = () => {
  return (
    <section className="w-full bg-gray-100 py-2">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-white transition duration-300">
            <Truck size={40} className="text-[#734060] mb-3" />

            <span className="text-sm md:text-base font-medium">
              Free Express Shipping
            </span>
          </div>

          <div className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-white transition duration-300">
            <Package size={40} className="text-[#734060] mb-3" />

            <span className="text-sm md:text-base font-medium">
              Easy Return & Exchange
            </span>
          </div>

          <div className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-white transition duration-300">
            <ShieldCheck size={40} className="text-[#734060] mb-3" />

            <span className="text-sm md:text-base font-medium">
              Secure Payment
            </span>
          </div>

          <div className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-white transition duration-300">
            <ThumbsUp size={40} className="text-[#734060] mb-3" />

            <span className="text-sm md:text-base font-medium">
              Assured Quality
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shippinginfo;
