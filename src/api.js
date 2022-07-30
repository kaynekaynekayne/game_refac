const BASE_URL=`https://api.rawg.io/api/games?key=${process.env.REACT_APP_KEY}`
const currentDate=new Date().toISOString().slice(0,10);
const currentYear=new Date().getFullYear();

export const GAME_POP_URL=`${BASE_URL}&dates=${currentYear-1},${currentDate}&ordering=-rating&page_size=10`;
export const GAME_UP_URL=`${BASE_URL}&dates=${currentDate},${currentYear+1}&ordering=-added&page_size=10`;
export const GAME_NEW_URL=`${BASE_URL}&dates=${currentYear-1},${currentDate}&ordering=-released&page_size=10`;
