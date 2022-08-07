import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGames, clearSearching  } from '../features/gameSlice';
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
            // && Object.keys(popular).length===0 
            //위 코드 살려야 함 삭제하면 안됨
            ? <Load /> : (
                <div>
                    <h2>Upcoming releases</h2>
                    <div className="games">
                        {upComing.map(item=>
                            <Game 
                                name={item.name}
                                released={item.released}
                                id={item.id} 
                                image={item.background_image}
                                key={item.id}
                            />
                        )} 
                    </div>
                    <h2>Popular</h2>
                    {/* <div className="games">
                        {popular.map(item=>
                            <Game 
                                name={item.name}
                                id={item.id} 
                                image={item.background_image}
                                key={item.id}
                                released={item.released && (item.released.split("-"))[0]}
                            />
                        )} 
                    </div> */}
                </div>
            ))
            }
        </section>
        )
    };

export default Home;