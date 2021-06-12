const Tags = ({ tags }) => {

  return (
    <div className="col-span-3 row-span-1">
      <ul className="flex flex-row pl-2 overflow-x-hidden">
        { tags && tags.map((tag, index) => {
          return(
            <li key={index} className="py-1">
              <div className="transition duration-300 ease-in-out rounded-2xl mr-1 px-2 py-1">
                { tag }
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default Tags;