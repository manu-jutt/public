function CreateGame() {
    
    let score = 0;

    function increasescore(points) {
        score += points;
        console.log(`+${points}Aura`);
    }

    function decreasescore(points) {
        score -= points;
        console.log(`-${points}Aura`);
    }

    function getscore(){
        return score;
    }

    return{increasescore, decreasescore, getscore};
}

const game = CreateGame();

game.increasescore(10000000);
game.increasescore(100000000);
game.increasescore(11111000020);
game.increasescore(52000000);
game.decreasescore(100000000);
game.decreasescore(1000000);
game.decreasescore(4300000000);

console.log(`You have ${game.getscore()}Aura`);
