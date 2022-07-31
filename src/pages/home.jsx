import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGames } from '../features/gameSlice';
import Game from '../components/game';
import Detail from "../components/detail";
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {useParams} from 'react-router-dom';

const Home = (props) => {

    const dispatch=useDispatch();
    const {popular, upComing, newGames, loading}=useSelector(state=>state.games);
    
    const {id}=useParams();

    useEffect(()=>{
        dispatch(fetchGames())
    },[dispatch]);

    return(
        <Section>
            {loading ? <LoadingSection><div></div></LoadingSection> : (
                <>
                {id && <Detail />} 
                    <h2>Upcoming games</h2>
                    <Games>
                        {upComing.map(item=>
                            <Game 
                                name={item.name}
                                released={item.released}
                                id={item.id} 
                                image={item.background_image}
                                key={item.id}
                            />
                        )} 
                    </Games>
                    <h2>Popular games</h2>
                    {/* <Games>
                        {popular.map(item=>
                            <Game 
                                name={item.name}
                                released={item.released}
                                id={item.id} 
                                image={item.background_image}
                                key={item.id}
                            />
                        )} 
                    </Games>
                    <h2>Latest games</h2>
                    <Games>
                        {newGames.map(item=>
                            <Game 
                                name={item.name}
                                released={item.released}
                                id={item.id} 
                                image={item.background_image}
                                key={item.id}
                            />
                        )} 
                    </Games> */}
                </>
            )}
        </Section>
    )
};

const Section=styled(motion.div)`
    padding:1.3rem ;
    overflow-x:hidden;
    h2{
        padding:2.5rem 0;
    }
`;

const Games=styled(motion.div)`
    display:grid;
    grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));
    grid-column-gap:1.3rem;
    grid-row-gap:4rem;
`

const LoadingSection=styled.div`
    width:100%;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;

    div{
        width:5rem;
        height:5rem;
        border-radius:50%;
        border:10px solid rgb(50, 185, 135);
        border-top:10px solid whitesmoke;
        animation:spin 2s linear infinite;
    }

    @keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform:rotate(360deg);
    }
}
`;
export default Home;