import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGames } from '../features/gameSlice';
import Game from '../components/game';
import Load from "../components/load";

const Home = (props) => {

    const dispatch=useDispatch();
    const {popular, upComing, searching}=useSelector(state=>state.games);

    useEffect(()=>{
        dispatch(fetchGames());
    },[dispatch]);

    return(
        <section className="home">
            {searching.length ?         
                <div>
                    <h2>Results</h2>
                    <div className="games">
                        {searching.map(game=>(
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
            (Object.keys(upComing).length===0 
            && Object.keys(popular).length===0 
            ? <Load /> : (
                <div>
                    <h2>곧 출시되는 게임</h2>
                    <div className="games">
                        {upComing.map(game=>
                            <Game 
                                name={game.name}
                                released={game.released}
                                id={game.id} 
                                image={game.background_image}
                                key={game.id}
                            />
                        )} 
                    </div>
                    <h2>인기 게임</h2>
                    <div className="games">
                        {popular.map(game=>
                            <Game 
                                name={game.name}
                                released={game.released}
                                id={game.id} 
                                image={game.background_image}
                                key={game.id}
                            />    
                        )}
                    </div>
                </div>
            ))
            }
        </section>
        )
    };

export default Home;