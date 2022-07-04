
var GameBoardModule = (function () {
    let Gameboard = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
    //The following function loops over array and then sets the value as the inner html of the appropriate button i.e it renders the board
    let renderboard = function () {
        for (let i = 0; i < 9; i++) {
            let currentarray = GameBoardModule.Gameboard[i];
            let currentbutton = document.getElementById(['box-' + (i + 1)]);
            currentbutton.innerHTML = currentarray;
            console.log('renderboard function was run');
        }
        console.log('The following are the values of the gameboard array when the renderboard function ran-> & as such the innerhtml should match this' + GameBoardModule.Gameboard);
        checkwinplayerx();
        checkwinplayero();
    }
    let checkwinplayerx = function () {

        if (GameBoardModule.Gameboard[0] === 'x' &&
            GameBoardModule.Gameboard[1] === 'x' &&
            GameBoardModule.Gameboard[2] === 'x') {
            alert('player two (x) wins');

        }
        else if (GameBoardModule.Gameboard[3] === 'x' &&
            GameBoardModule.Gameboard[4] === 'x' &&
            GameBoardModule.Gameboard[5] === 'x') {
            alert('player two (x) wins');

        }
        else if (GameBoardModule.Gameboard[6] === 'x' &&
            GameBoardModule.Gameboard[7] === 'x' &&
            GameBoardModule.Gameboard[8] === 'x') {
            alert('player two (x) wins');

        }
        else if (GameBoardModule.Gameboard[0] === 'x' &&
            GameBoardModule.Gameboard[3] === 'x' &&
            GameBoardModule.Gameboard[6] === 'x') {
            alert('player two (x) wins');

        }
        else if (GameBoardModule.Gameboard[1] === 'x' &&
            GameBoardModule.Gameboard[4] === 'x' &&
            GameBoardModule.Gameboard[7] === 'x') {
            alert('player two (x) wins');

        }
        else if (GameBoardModule.Gameboard[2] === 'x' &&
            GameBoardModule.Gameboard[5] === 'x' &&
            GameBoardModule.Gameboard[8] === 'x') {
            alert('player two (x) wins');

        }
        else if (GameBoardModule.Gameboard[0] === 'x' &&
            GameBoardModule.Gameboard[4] === 'x' &&
            GameBoardModule.Gameboard[8] === 'x') {
            alert('player two (x) wins');

        }
        else if (GameBoardModule.Gameboard[2] === 'x' &&
            GameBoardModule.Gameboard[4] === 'x' &&
            GameBoardModule.Gameboard[6] === 'x') {
            alert('player two (x) wins');

        }
        //The following checks for a tie game
        else if (GameBoardModule.Gameboard[0] != ' ' &&
            GameBoardModule.Gameboard[1] != ' ' &&
            GameBoardModule.Gameboard[2] != ' ' &&
            GameBoardModule.Gameboard[3] != ' ' &&
            GameBoardModule.Gameboard[4] != ' ' && GameBoardModule.Gameboard[5] != ' ' && GameBoardModule.Gameboard[6] != ' ' && GameBoardModule.Gameboard[7] != ' ' && GameBoardModule.Gameboard[1] != ' ') {
            alert('Tie Game');
        }
        else {
            // keep
        }


    }
    let checkwinplayero = function () {
        if (GameBoardModule.Gameboard[0] === 'o' &&
            GameBoardModule.Gameboard[1] === 'o' &&
            GameBoardModule.Gameboard[2] === 'o') {
            alert('player one wins');

        }
        else if (GameBoardModule.Gameboard[3] === 'o' &&
            GameBoardModule.Gameboard[4] === 'o' &&
            GameBoardModule.Gameboard[5] === 'o') {
            alert('player one wins');

        }
        else if (GameBoardModule.Gameboard[6] === 'o' &&
            GameBoardModule.Gameboard[7] === 'o' &&
            GameBoardModule.Gameboard[8] === 'o') {
            alert('player one wins');

        }
        else if (GameBoardModule.Gameboard[0] === 'o' &&
            GameBoardModule.Gameboard[3] === 'o' &&
            GameBoardModule.Gameboard[6] === 'o') {
            alert('player one wins');

        }
        else if (GameBoardModule.Gameboard[1] === 'o' &&
            GameBoardModule.Gameboard[4] === 'o' &&
            GameBoardModule.Gameboard[7] === 'o') {
            alert('player one wins');

        }
        else if (GameBoardModule.Gameboard[2] === 'o' &&
            GameBoardModule.Gameboard[5] === 'o' &&
            GameBoardModule.Gameboard[8] === 'o') {
            alert('player one wins');

        }
        else if (GameBoardModule.Gameboard[0] === 'o' &&
            GameBoardModule.Gameboard[4] === 'o' &&
            GameBoardModule.Gameboard[8] === 'o') {
            alert('player one wins');

        }
        else if (GameBoardModule.Gameboard[2] === 'o' &&
            GameBoardModule.Gameboard[4] === 'o' &&
            GameBoardModule.Gameboard[6] === 'o') {
            alert('player one wins');

        }
        else {
            // keep
        }
    }

    let resetboard = function () {
        GameBoardModule.Gameboard = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
        console.log(GameBoardModule.Gameboard);
        console.log('resetboardfunction was run');
        console.log('The following are the values of the gameboard array when the RESETboard function ran->' + GameBoardModule.Gameboard);

        for (let i = 0; i < 9; i++) {
            let currentbutton = document.getElementById(['box-' + (i + 1)]);
            currentbutton.innerHTML = '';
            console.log('This is when the resteboard was called and should show the inner htmls of the buttons being back to' + currentbutton.innerHTML + GameBoardModule.Gameboard)

        }

        return GameBoardModule.Gameboard
    }

    let resetButton = document.getElementById("button-reset");
    resetButton.addEventListener('click', resetboard);


    return {
        Gameboard, renderboard, checkwinplayerx, checkwinplayero, resetboard
    }
}());

// i did not even use the playernumber or symbol so basically ignore that

const personFactory = (playernumber, symbol) => {
    roundnumber = 0;
    console.log('This the round number before it is added by 1->' + roundnumber);
    //If it is the 1st round this function will be for player one and say. If the square is empty
    let InnerTextChanger = function InnerTextChanger(event) {
        //if even its player one turn so add o to the array if it the square is empty.
        if (roundnumber % 2 == 0) {
            console.log(roundnumber + '=roundnumber and it should be even');
            //The following get its id and then use that number as index & then rerender the board.
            let originalidofsquare = event.target.id;
            originalidofsquare = originalidofsquare.replace(/\D/g, '');
            let arrayvalue = Number(originalidofsquare - 1);
            let i = arrayvalue;

            console.log("Inner Text changer function has run and the following is the id of the the box that triggered the event->" + originalidofsquare);
            console.log("Inner Text changer function has run and the following is the arrayvalue of the corresponding array number of the box that triggered the event->" + arrayvalue);
            //This if clause checks if the square is full by seeing if the corresponding array is empty and if it is it can be filled.
            console.log(GameBoardModule.Gameboard[i] + i);
            if (GameBoardModule.Gameboard[i] === ' ') {
                GameBoardModule.Gameboard[i] = 'o';
                console.log('Now that it confirmed the box is empty it should show and o here  ->' + GameBoardModule.Gameboard[i]);
                GameBoardModule.renderboard();

                roundnumber++;
                console.log('This is the round number when an "o" is added and the value is increased by 1->' + roundnumber);

                console.log(GameBoardModule.Gameboard);


            }
            else {
                alert('square filled already');
                console.log("The round number should have stayed the same as before since it was a full square" + roundnumber)
            }
        }
        else {
            console.log(roundnumber + '=roundnumber & it should be odd');
            let originalidofsquare = event.target.id;
            originalidofsquare = originalidofsquare.replace(/\D/g, '');
            let arrayvalue = Number(originalidofsquare - 1);
            let i = arrayvalue;

            console.log("Inner Text changer function has run and the following is the id of the the box that triggered the event->" + originalidofsquare);
            console.log("Inner Text changer function has run and the following is the arrayvalue of the corresponding array number of the box that triggered the event->" + arrayvalue);
            console.log(GameBoardModule.Gameboard[i] + i);
            if (GameBoardModule.Gameboard[i] === ' ') {
                GameBoardModule.Gameboard[i] = 'x';
                GameBoardModule.renderboard();
                roundnumber++;
                console.log('This is the round number when an x is added and the value is increased by 1->' + roundnumber);
                console.log(GameBoardModule.Gameboard);


            }
            else {
                alert('square filled already');
                console.log('The round should have stayed the same as before since it was a full');
            }

        }

        return roundnumber;
    }

    //selects all buttons
    let ticTacButton = document.querySelectorAll('*[id^="box-"]');
    //document.querySelectorAll('button');
    //add event listener to all buttons 
    for (const tictacindividualbutton of ticTacButton) {
        tictacindividualbutton.addEventListener('click', InnerTextChanger);
    }
    return { playernumber, symbol, InnerTextChanger, roundnumber };
}

const playerone = personFactory('playerone', 'X');




//Logic:
// starts at the event thing & when clicked it goes &decides o/x based on round number being even or odd. After if it is even it goes o. After the thing that triggered the event gives its id which is used to get the index of the array that matches it.

// if the box is empty the array value is changed and then the renderboard function is run. This will then check if there is a winner & if their isnt then game just countinues.

//If the box is full (based on if the gameboard array of the box that called it is ' ') then it says square fill and shows roundnumber.
