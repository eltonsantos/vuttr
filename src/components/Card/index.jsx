import { useEffect, useState } from 'react';

import api from "../../services/api";

import { Container } from './styles';

import Tags from '../Tags';

const Card = () => {

  const [tools, setTools] = useState([]);

  useEffect(() => {

    setTimeout(async () => {
      const response = await api.get('/tools');
      console.log(response.data);
      setTools(response.data)
    }, 2000);
    
  }, [setTools]);

  return (
    <>
      { tools.map(tool => (
        <Container key={tool.id} className="mt-5 border-dashed border-4 rounded-lg">
          <div className="flex align-bottom flex-col leading-none p-2 md:p-4">
            <div className="flex flex-row justify-between items-center">
              <a className="flex items-center no-underline hover:underline text-lg font-semibold" href={tool.link}>
                { tool.title }
                </a>
              <button className="font-semibold">Remove</button>
            </div>
          </div>

          <h1 className="text-lg p-4 text-justify">
            { tool.description }
          </h1> 

          <Tags tags={tool.tags} />

        </Container>
      )) }
    </>
  );
}

export default Card;