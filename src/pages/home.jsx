import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGames, clearSearching  } from '../features/gameSlice';
import Game from '../components/game';
import styled from 'styled-components';
import Load from "../components/load";

const Home = (props) => {

    const dispatch=useDispatch();
    const {popular, upComing, searching}=useSelector(state=>state.games);

    useEffect(()=>{
        dispatch(fetchGames());
    },[dispatch]);

    return(
        <HomeSection>
            {searching.length ?         
                <div>
                    <h2>Results</h2>
                    <Games>
                        {searching.map(game=>(
                            <Game 
                                name={game.name} 
                                released={game.released && (game.released.split("-"))[0]} 
                                id={game.id}
                                image={game.background_image}
                                key={game.id}
                            />
                        ))}
                    </Games>
                </div>
            :
            (Object.keys(upComing).length===0 
            // && Object.keys(popular).length===0 
            //위 코드 살려야 함 삭제하면 안됨
            ? <Load /> : (
                <div>
                    <h2>Upcoming releases</h2>
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
                    <h2>Popular</h2>
                    {/* <Games>
                        {popular.map(item=>
                            <Game 
                                name={item.name}
                                id={item.id} 
                                image={item.background_image}
                                key={item.id}
                                released={item.released && (item.released.split("-"))[0]}
                            />
                        )} 
                    </Games> */}
                </div>
            ))
            }
        </HomeSection>
        )
    };

const HomeSection=styled.div`
    overflow-x:hidden;
    padding:0.8rem 2rem;

`;

const Games=styled.div`
    display:grid;
    grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));
    grid-column-gap:1.3rem;
    grid-row-gap:4rem;
`

export default Home;