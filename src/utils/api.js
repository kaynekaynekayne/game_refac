const BASE_URL=`https://api.rawg.io/api/`
const currentDate=new Date().toISOString().slice(0,10);
const currentYear=new Date().getFullYear();

const populars=`&dates=${currentYear-1},${currentDate}&ordering=-rating&page_size=10`;
const upcomings=`&dates=${currentDate},${currentYear+1}&ordering=-added&page_size=10`;
const news=`&dates=${currentYear-1},${currentDate}&ordering=-released&page_size=10`;

export const GAME_POP_URL=()=>`${BASE_URL}games?key=${process.env.REACT_APP_KEY}${populars}`;
export const GAME_UP_URL=()=>`${BASE_URL}games?key=${process.env.REACT_APP_KEY}${upcomings}`;
export const GAME_NEW_URL=()=>`${BASE_URL}games?key=${process.env.REACT_APP_KEY}${news}`;

export const DETAIL_URL=(game_id)=>(`${BASE_URL}games/${game_id}.json?&key=${process.env.REACT_APP_KEY}`);
export const SCREENSHOT_URL=(game_id)=>(`${BASE_URL}games/${game_id}/screenshots?&key=${process.env.REACT_APP_KEY}`);

export const SEARCH_URL=(game_name)=>`${BASE_URL}games?key=${process.env.REACT_APP_KEY}&search=${game_name}&page_size=9`

export const GENRE_URL=()=>`${BASE_URL}genres?key=${process.env.REACT_APP_KEY}&page_size=10`;
export const GENRE_GAMES_URL=(genre_id)=>`${BASE_URL}games?key=${process.env.REACT_APP_KEY}&genres=${genre_id}&ordering=-rating&page_size=10`