import { Container } from './styles';

const Card = () => {
  return (
    <Container className="mt-5 border-dashed border-4 rounded-lg">

      <div className="flex align-bottom flex-col leading-none p-2 md:p-4">
        <div className="flex flex-row justify-between items-center">
          <a className="flex items-center no-underline hover:underline text-lg font-semibold" href="https://github.com/">
            John Doe
            </a>
          <button className="font-semibold">Remove</button>
        </div>
      </div>

      <h1 className="text-lg p-4 text-justify">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </h1>

      <div className="col-span-3 row-span-1">
        <ul className="flex flex-row pl-2">
          <li className="py-1">
            <div className="transition duration-300 ease-in-out rounded-2xl mr-1 px-2 py-1">
              <a className="" href="https://github.com/">#hogehoge</a>
            </div>
          </li>
          <li className="py-1">
            <div className="transition duration-300 ease-in-out rounded-2xl mr-1 px-2 py-1">
              <a className="" href="https://github.com/">#fugafuga</a>
            </div>
          </li>
          <li className="py-1">
            <div className="transition duration-300 ease-in-out rounded-2xl mr-1 px-2 py-1">
              <a className="" href="https://github.com/">#foofoo</a>
            </div>
          </li>
        </ul>
      </div>
    </Container>
  );
}

export default Card;