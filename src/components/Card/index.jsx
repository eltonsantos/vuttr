import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { useTheme } from 'styled-components';
import { api } from "../../services/api";
import { Container } from './styles';
import Tags from '../Tags';

const Card = () => {
  const theme = useTheme();

  const [tools, setTools] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const notify = () => toast.success("Tool add with success!");

  useEffect(() => {
    try {
      setTimeout(async () => {
        const response = await api.get('/tools');
        console.log(response.data);
        setIsLoading(false);
        setTools(response.data)
      }, 1000);
    } catch (e) {
      console.log(e);
    }
  }, [setTools, setIsLoading]);

  const removeTools = async (id) => {
    try {
      const response = await api.delete(id);
      if (response.status === 201) {
        notify();
        console.log("Tool removed with sucessfuly");
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <ToastContainer />
      { !isLoading ?
        (tools.map(tool => (
          <Container key={tool.id} className="mt-5 border-dashed border-4 rounded-lg">
            <div className="loader"></div>
            <div className="flex align-bottom flex-col leading-none p-2 md:p-4">
              <div className="flex flex-row justify-between items-center">
                <a className="flex items-center no-underline hover:underline text-lg font-semibold" href={tool.link}>
                  {tool.title}
                </a>
                <button onClick={(id) => removeTools(tool.id)} className="font-semibold">Remove</button>
              </div>
            </div>

            <h1 className="text-lg p-4 text-justify">
              {tool.description}
            </h1>

            <Tags key={tool.id} tags={tool.tags} />

          </Container>
        ))
        )
        :
        (
          // Array(10).fill('').map((tool) => <Skeleton key={tool.id} count={5} />)
          <SkeletonTheme color={theme.colors.skltColor} highlightColor={theme.colors.skltHighLightColor}>
            <Skeleton className="mt-3 mx-3" count={40} />
          </SkeletonTheme>
        )
      }
    </>
  );
}

export default Card;