import { Search, Button } from './styles';

const Middle = () => {
  return (
    <div className="flex justify-between">

      <div className="my-1 ml-3">
        <Search className="border-2 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none focus:ring-2" type="text" placeholder="Buscar..." />
      </div>

      <Button className="mx-auto lg:mx-4 font-extrabold focus:outline-none rounded my-1 mr-3 md:my-1 py-2 px-8 shadow-lg w-48">
          Add Tool
      </Button>

    </div>
  );
}

export default Middle;