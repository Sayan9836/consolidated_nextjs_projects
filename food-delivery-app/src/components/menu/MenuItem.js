export default function MenuItem() {
  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
      {/* <Image src={"/pizza.png"} width={200} height={200} /> */}
      <div className="text-center">
        <img src="/pizza.png" alt="pizza" />
      </div>
      <h4 className="font-semibold text-xl my-3">Pepperoni Pizza</h4>
      <p className="text-gray-500 text-sm mb-2">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque dolores
        soluta perspiciatis molestias provident autem. Architecto
      </p>
      <button className="bg-primary text-white px-6 py-2 rounded-full">
        Order now
      </button>
    </div>
  );
}
