const BASE_URL=`https://api.rawg.io/api/`
const currentDate=new Date().toISOString().slice(0,10);
const currentYear=new Date().getFullYear();

const popDates=`&dates=${currentYear-1},${currentDate}`;
const upDates=`&dates=${currentDate},${currentYear+1}`;

export const GAME_POP_URL=()=>`${BASE_URL}games?key=${process.env.REACT_APP_KEY}${popDates}`;
export const GAME_UP_URL=()=>`${BASE_URL}games?key=${process.env.REACT_APP_KEY}${upDates}`;

export const DETAIL_URL=(game_id)=>(`${BASE_URL}games/${game_id}.json?&key=${process.env.REACT_APP_KEY}`);
export const SCREENSHOT_URL=(game_id)=>(`${BASE_URL}games/${game_id}/screenshots?&key=${process.env.REACT_APP_KEY}`);
export const STORE_URL=(game_id)=>(`${BASE_URL}games/${game_id}/stores?key=${process.env.REACT_APP_KEY}`)

export const SEARCH_URL=(game_name)=>`${BASE_URL}games?key=${process.env.REACT_APP_KEY}&search=${game_name}&page_size=9`

export const GENRE_URL=()=>`${BASE_URL}genres?key=${process.env.REACT_APP_KEY}&page_size=10`;
export const GENRE_GAMES_URL=(genre_id)=>`${BASE_URL}games?key=${process.env.REACT_APP_KEY}&genres=${genre_id}`