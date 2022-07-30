const BASE_URL=`https://api.rawg.io/api/games`
const currentDate=new Date().toISOString().slice(0,10);
const currentYear=new Date().getFullYear();

export const GAME_POP_URL=`${BASE_URL}?key=${process.env.REACT_APP_KEY}&dates=${currentYear-1},${currentDate}&ordering=-rating&page_size=10`;
export const GAME_UP_URL=`${BASE_URL}?key=${process.env.REACT_APP_KEY}&dates=${currentDate},${currentYear+1}&ordering=-added&page_size=10`;
export const GAME_NEW_URL=`${BASE_URL}?key=${process.env.REACT_APP_KEY}&dates=${currentYear-1},${currentDate}&ordering=-released&page_size=10`;

export const DETAIL_URL=(gameId)=>(`${BASE_URL}/${gameId}.json?&key=${process.env.REACT_APP_KEY}`);
export const SCREENSHOT_URL=(gameId)=>(`${BASE_URL}/${gameId}/screenshots?&key=${process.env.REACT_APP_KEY}`);