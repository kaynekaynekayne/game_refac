import { fetchGames } from "./features/gameSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
function App() {
  const dispatch=useDispatch();
  const data=useSelector(state=>state.games)
  useEffect(()=>{
    dispatch(fetchGames())
  },[])
  return (
      <div>      
        <h2>{data.loading && <div>loading...</div>}</h2>
        <h2>{!data.loading && (
          data.popular.map(pop=>(<div>{pop.name}</div>))
        )}</h2>
      </div>
  );
}

export default App;
