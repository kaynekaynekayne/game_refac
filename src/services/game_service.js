class GameService{
    constructor(key){
        this.key=key;
        this.requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
    }
    
    popularGames(){
        fetch(`https://api.rawg.io/api/games?key=${this.key}&dates=${new Date().getFullYear()-1},${new Date().toISOString().slice(0,10)}&ordering=-rating&page_size=10`, 
            this.requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }
}

export default GameService;