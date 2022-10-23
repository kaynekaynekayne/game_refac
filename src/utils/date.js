export const currentDate=new Date().toISOString().slice(0,10);
export const currentYear=new Date().getFullYear();
export const fromLastYear=`${currentYear-1},${currentDate}`;
export const fromThisYear=`${currentDate},${currentYear+1}`;