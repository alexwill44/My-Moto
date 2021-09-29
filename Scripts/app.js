console.log('My Moto JS Loaded');


$('.test').append($('<div class="container"> put a bike on it </div>'));

const game = {
    oil: 10,
    gas: 10,
    tires: 10,
    mileage: 0,
    name:'default',
    button: $('#start'),
    level: 1,


timerOne: null,
timerTWo: null,
timerThree: null,
timerFour: null,

    startTimer(){
    game.timerOne = setInterval(game.consumeOil, 20000);
    game.timerTwo = setInterval(game.consumeGas, 10000);
    game.timerThree = setInterval(game.consumeTires, 50000);
    game.timerFour = setInterval(game.addMiles, .1);
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
    addMiles(){
            game.mileage++;
            $('#mileage').text(`${game.mileage} miles`);
            game.levelUp();
            game.levelThree();
        }, 
        
    levelUp() { 
            if (game.mileage === 20000){ 
                console.log('lv 2')
                $('#lvTwoButton').toggle();
                $('#lvTwo').html(`<section>
                <button id='levelUpBtn' type="button" class="nes-btn is-primary" onclick="document.getElementById('dialog-rounded').showModal();">
                Open rounded dialog
                </button>
                <dialog class="nes-dialog is-rounded" id="dialog-rounded">
                <form method="dialog">
                <p class="title">You've rode ${game.mileage} miles!. It's time for a new Bike</p>
                <img src="https://preview.redd.it/vq9avsoubyd41.png?auto=webp&s=ecfd5383d54cc43c15f07e2943ac87f7e54ac9f0" alt= "new bike">
                <menu class="dialog-menu">
                <button id="panigale"  class="nes-btn is-primary">Ducati Panigale</button>
                </menu>
                </form>
                </dialog>
                </section>`);
                {$('#panigale').on('click', game.updater)};
            }}, 

    levelThree() {               
                if ( game.mileage === 40000){ 
                    $('#lvThreeButton').toggle();
                    $('#lvThree').html(`<section>
                    <button id='levelUpBtn' type="button" class="nes-btn is-primary" onclick="document.getElementById('dialog-rounded').showModal();">
                    Open rounded dialog
                    </button>
                    <dialog class="nes-dialog is-rounded" id="dialog-rounded">
                    <form method="dialog">
                    <p class="title">After${game.mileage} miles!. You're a pro its time to step it up...</p>
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/dda0b858585189.5a01e8bc74617.jpg" alt= new bike">
                    <menu class="dialog-menu">
                    <button id="kenda"  class="nes-btn is-primary">Kaneda’s bike</button>
                    </menu>
                    </form>
                    </dialog>
                    </section>`);
                    {$('#kenda').on('click', game.updaterTwo);     
                }
               }
            },
               
    winner() {               
                if ( game.mileage === 60000){ 
                    $('#winner').html(`<section>
                    <button id='win' type="button" class="nes-btn is-primary" onclick="document.getElementById('dialog-rounded').showModal();">
                    Open rounded dialog
                    </button>
                    <dialog class="nes-dialog is-rounded" id="dialog-rounded">
                    <form method="dialog">
                    <p class="title">You made it ${game.mileage} miles!. You're the best to ever put the rubber to the road!</p>
                    <menu class="dialog-menu">
                    <button id="cutscene"  class="nes-btn is-primary">You Win</button>
                    </menu>
                    </form>
                    </dialog>
                    </section>`);
                    {$('#cutscene').on('click', game.win);    
                }
               }
            },        
        updater() { 
                   $('.moto').attr('src','https://media3.giphy.com/media/3NeTe82nxraqaBHBGq/giphy.gif?cid=ecf05e47wuksq92zgah9cpcdv1tq7zctcb7r87yfrnhzf4sd&rid=giphy.gif&ct=g');
                   $('#lvTwo').toggle();
                   $(`#motorcycle`).text('Motorcyle: Ducati Panigale');
               },
        updaterTwo() { 
                    $('.moto').attr('src','https://media0.giphy.com/media/3o6ZtgUzqKnWCedxAc/giphy.gif?cid=ecf05e47ea0ik1j5nll1k7qoeti1bod7tnzgf0eosxl4txej&rid=giphy.gif&ct=g');
                    $('#lvThree').toggle();
                    $(`#motorcycle`).text('Motorcyle: Kaneda’s Bike');
                },     
        win() { 
                    $('.moto').attr('src','https://media2.giphy.com/media/4asRcRX9jEH5e/giphy.gif?cid=ecf05e47hyqszy7fecac8xwdzlndzm67xcv3vkrq5yaymedi&rid=giphy.gif&ct=g');
                    $(`.statusbar`).html(`<div id="banner"><i class="nes-icon trophy is-large"></i><span>${game.name}<span><i class="nes-icon trophy is-large"></i></div>`);
                
                },                   
    };
        
   
            

const changeOil = function changeOil(){
   return game.oil++;
};
const oilChange = $('#oilChange').on('click', changeOil);

const addGas = function addGas(){
    return game.gas++;
};
const refuel = $('#refuel').on('click', addGas);

const freshTires = function  freshTires(){
    return game.tires++;
;}
const newTires = $('#new-tires').on('click', freshTires);

const startGame = game.button.on('click', game.startTimer);