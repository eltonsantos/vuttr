const Middle = () => {
  return (
    <div className="flex justify-between">

      <div className="my-1 ml-3">
        <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-600" type="text" placeholder="Buscar..." />
      </div>

      <button className="bg-green-600 mx-auto lg:mx-4 hover:bg-green-700 text-white font-extrabold focus:outline-none rounded my-1 mr-3 md:my-1 py-2 px-8 shadow-lg w-48">
          Add Tool
      </button>

    </div>
  );
}

export default Middle;