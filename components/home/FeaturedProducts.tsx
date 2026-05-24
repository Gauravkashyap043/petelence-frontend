"use client";

export default function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: "Intelligent Marble Knife",
      price: "$132.93",
      image: "/assets/home/b864c257c5e547b7253db8423a01aa9abcd763bc.png",
      discount: "35% OFF",
    },
    {
      id: 2,
      name: "Intelligent Marble Knife",
      price: "$132.93",
      image: "/assets/home/6e34515863fd697cfad58413f8aed3f7cd4dba33.png",
      discount: "30% OFF",
    },
    {
      id: 3,
      name: "Intelligent Marble Knife",
      price: "$132.93",
      image: "/assets/home/4f1fff75ec15ef25279505ae40351a3f55e95fe5.png",
      discount: "15% OFF",
    },
    {
      id: 4,
      name: "Intelligent Marble Knife",
      price: "$132.93",
      image: "/assets/home/0e77bcc6a3cc3a632c8f5618ba1fcb7e92d9f6c9.png",
      discount: "35% OFF",
    },
  ];

  return (
    <section className="w-full py-10">

      {/* Common Container */}
      <div className="max-w-[1450px] mx-auto px-5 md:px-6 lg:px-10 py-4">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl md:text-[32px] font-semibold text-black">
            Featured Product
          </h2>

          <button className="flex items-center gap-2 text-green-600 font-medium hover:gap-3 transition-all">
            View all →
          </button>
        </div>

        {/* PRODUCTS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-sm p-4 relative hover:shadow-md transition"
            >

              {/* DISCOUNT */}
              <div className="absolute top-0 right-3 bg-orange-500 text-white text-xs px-2 py-1 rounded-b-md font-semibold">
                {item.discount}
              </div>

              {/* IMAGE */}
              <div className="flex justify-center items-center h-[250px] mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full object-contain"
                />
              </div>

              {/* TITLE */}
              <h3 className="text-[16px] text-gray-700 text-center mb-2">
                {item.name}
              </h3>

              {/* PRICE */}
              <p className="text-center text-[20px] font-semibold text-[#474747] mb-3">
                {item.price}
              </p>

              {/* BUTTON */}
              <div className="flex justify-center">
                <button className="border border-[#94694C] text-[#94694C] px-4 py-1 rounded-full text-[14px] font-semibold hover:bg-[#94694C] hover:text-white transition">
                  Add to cart
                </button>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}