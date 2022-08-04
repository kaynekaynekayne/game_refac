import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGames, clearSearching  } from '../features/gameSlice';
import Game from '../components/game';
import styled from 'styled-components';

const Home = (props) => {

    const dispatch=useDispatch();
    const {popular, upComing, newGames, searching}=useSelector(state=>state.games);

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
                                    released={game.released} 
                                    id={game.id}
                                    image={game.background_image}
                                    key={game.id}
                                />
                            ))}
                        </Games>
                    </div>
                :
                (
                    <div>
                        <h2>Upcoming</h2>
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
                                    released={item.released}
                                    id={item.id} 
                                    image={item.background_image}
                                    key={item.id}
                                />
                            )} 
                        </Games>
                        */}
                    </div>
                )}
        </HomeSection>
    )
};

const HomeSection=styled.div`
    overflow-x:hidden;
    padding:5rem 2rem;

`;

const Games=styled.div`
    display:grid;
    grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));
    grid-column-gap:1.3rem;
    grid-row-gap:4rem;
`

export default Home;