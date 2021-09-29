console.log('My Moto JS Loaded');


$('.test').append($('<div class="container"> put a bike on it </div>'));

const game = {
    oil: 10,
    gas: 10,
    tires: 10,
    name:'',
    button: '',

timerOne: null,
timerTWo: null,
timerThree: null,

startTimer(){
    game.timerOne = setInterval(game.consumeOil, 2000);
    game.timerTwo = setInterval(game.consumeGas, 1000);
    game.timerThree = setInterval(game.consumeTires, 10000);
},

    consumeOil(){
        game.oil--;
        $('#oil').attr('value', game.oil--);
        console.log(game.oil);
        if(game.oil >= 0){
            $('#dialog-dark-rounded').hide();
            }
            else {
            $(`.moto`).attr('src', 'https://cdn3.vectorstock.com/i/1000x1000/33/12/engine-pixel-art-motor-8-bits-vector-27163312.jpg');
            $('#dialog-dark-rounded').show();
                }
            },
        
    consumeGas(){
        game.gas--;
        $('#gas').attr('value', game.gas--);
        console.log(game.gas);
        if(game.gas >= 0){
        $('#dialog-dark-rounded').hide();
        }
        else {
        $(`.moto`).attr('src', 'https://thumbs.dreamstime.com/b/videogame-pixelated-fuel-can-isolated-symbol-vector-illustration-graphic-design-videogame-pixelated-fuel-can-isolated-symbol-blue-153593022.jpg').show();
            }
        },
        consumeTires(){
            game.tires--;
                $('#tires').attr('value', game.tires--);
                console.log(game.tires);
                if(game.tires >= 0){
                    $('#dialog-dark-rounded').hide();
                    }
                    else {
                    $(`.moto`).attr('src', 'http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/f01e83b37b89fa3.png');
                    $('#dialog-dark-rounded').show();
                        }
                    },
}
                
            
    

const changeOil = function changeOil(){
   return game.oil++;
};
const oc = $('#oilChange').on('click', changeOil);