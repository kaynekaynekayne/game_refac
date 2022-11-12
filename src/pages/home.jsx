import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGames } from '../features/gameSlice';
import Game from '../components/game';
import Load from "../components/load";

const Home = (props) => {

    const dispatch=useDispatch();
    const {popular, searching, loading}=useSelector(state=>state.games);

    useEffect(()=>{
        dispatch(fetchGames());
    },[dispatch]);

    return(
        <section className="home">
            {loading ? <Load /> : 
                searching.length ? 
                <div>
                    <h2>검색 결과</h2>
                    <div className="games">
                        {typeof(searching)==="string" ? 
                            <h4>{searching}</h4>
                        :
                        searching.map(game=>(
                            <Game 
                                name={game.name} 
                                released={game.released && (game.released.split("-"))[0]} 
                                id={game.id}
                                image={game.background_image}
                                key={game.id}
                            />
                        ))}
                    </div>
                </div>
            :
                <div>
                    <h2>인기 게임</h2>
                    <div className="games">
                        {popular.map(game=>
                            <Game 
                                name={game.name}
                                id={game.id} 
                                image={game.background_image}
                                rating={game.rating}
                                ratingTop={game.rating_top}
                                key={game.id}
                            />    
                        )}
                    </div>
                </div>
            }
        </section>
        )
    };

export default Home;