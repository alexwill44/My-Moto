console.log('My Moto JS Loaded');




const game = {

  // === Variables ===
    oil: 10,
    gas: 10,
    tires: 10,
    mileage: 0,
    name: ($('#name_field')[0].value),
    button: $('#start'),
    level: 1, 


timerOne: null,
timerTWo: null,
timerThree: null,
timerFour: null,

// ===  Methods ===

    startTimer(){
    game.timerOne = setInterval(game.consumeOil, 2000 * game.level);
    game.timerTwo = setInterval(game.consumeGas, 10000 * game.level);
    game.timerThree = setInterval(game.consumeTires, 5000 * game.level);
    game.timerFour = setInterval(game.addMiles, .02);
    game.getName();
    $('#screen').html('<img  id="gamma" src="https://64.media.tumblr.com/159694d8fb55895d39cb6d7bb61ce294/7862d47e225b9b88-ed/s400x600/e828e513b090920934479537dd31481f650e1339.gifv" alt="your bike here" class="row2 moto">');
    $('#rider').text(`${game.name}`);
},
    stopTimer(){
    clearInterval(game.timerOne);
    clearInterval(game.timerTwo);
    clearInterval(game.timerThree);
    clearInterval(game.timerFour);   
},
    consumeOil(){
        game.oil--;
        $('#oil').attr('value', game.oil--);
        if(game.oil >= 0){
            $('#dialog-dark-rounded').hide();
            }
            else {
                $(`.moto`).attr('src', 'https://media4.giphy.com/media/PhNdG288og3SSLokOz/giphy.gif?cid=ecf05e47sjejfvrhj6kq829den7xsn3og6kbedicgpkbgykl&rid=giphy.gif&ct=g');
            $('#game-over').html(`<p>Clunk!!!
                You ran your Motorcycle out of oil and blew it up!
                The race is over for you.</p>`);
            $('#dialog-dark-rounded').show();
            game.stopTimer();
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
        $('#game-over').html('<p>You ran out of gas.... everyone is laughing at you!</p>');
        $('#dialog-dark-rounded').show();
        game.stopTimer();
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
                $('#game-over').html('<p>You Failed to take care of your tires and they BLEW OUT... Your done racing`</p>');
                $('#dialog-dark-rounded').show();
                    game.stopTimer();
                        }
             },
    addMiles(){
            game.mileage++;
            $('#mileage').text(`${game.mileage}`);
            game.levelUp();
            game.levelThree();
            game.winner();
        }, 
        
    levelUp() { 
            if (game.mileage === 20000){ 
                game.stopTimer();
                console.log('lv 2')
                $('#lvTwoButton').toggle();
                $('#lvTwo').html(`<section>
                <button id='levelUpBtn' type="button" class="nes-btn is-primary" onclick="document.getElementById('dialog-rounded').showModal();">
                Get A New Bike!
                </button>
                <dialog class="nes-dialog is-rounded" id="dialog-rounded">
                <form method="dialog">
                <p class="title">You've rode ${game.mileage} miles!. It's time for a new Bike</p>
                <img id="ducati" src="https://preview.redd.it/vq9avsoubyd41.png?auto=webp&s=ecfd5383d54cc43c15f07e2943ac87f7e54ac9f0" alt= "new bike">
                <menu class="dialog-menu">
                <button id="panigale"  class="nes-btn is-primary">Ducati Panigale</button>
                </menu>
                </form>
                </dialog>
                </section>`);
                {$('#panigale').on('click', game.updater)};
            }
        }, 
    levelThree() {               
                if ( game.mileage === 40000){ 
                    game.stopTimer();
                    $('#lvThreeButton').toggle();
                    $('#lvThree').html(`<section>
                    <button id='levelUpBtn' type="button" class="nes-btn is-primary" onclick="document.getElementById('dialog-rounded').showModal();">
                    Your Too Fast for A Ducati!
                    </button>
                    <dialog class="nes-dialog is-rounded" id="dialog-rounded">
                    <form method="dialog">
                    <p class="title">After ${game.mileage} miles!. You're a pro its time to step it up...</p>
                    <img id = 'kendaBike' src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/dda0b858585189.5a01e8bc74617.jpg" alt= new bike">
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
                    game.stopTimer();
                    $('#winner').html(`<section>
                    <button id='win' type="button" class="nes-btn is-primary" onclick="document.getElementById('dialog-rounded').showModal();">
                    YOU WIN!
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
       
    // === Sub Methods ===

         updater() { 
                   $('.moto').attr('src','https://thumbs.gfycat.com/DecentMammothHedgehog-max-1mb.gif');
                   $('#lvTwo').toggle();
                   $(`#motorcycle`).text('Panigale');
                   game.level = .5;
                   game.startTimer();
               },
        updaterTwo() { 
                    $('.moto').attr('src','https://media0.giphy.com/media/3o6ZtgUzqKnWCedxAc/giphy.gif?cid=ecf05e47ea0ik1j5nll1k7qoeti1bod7tnzgf0eosxl4txej&rid=giphy.gif&ct=g');
                    $('#lvThree').toggle();
                    $(`#motorcycle`).text('Super K');
                    game.level = .25;
                    game.startTimer();
                },     
        win() { 
                    $('.moto').attr('src','https://media2.giphy.com/media/4asRcRX9jEH5e/giphy.gif?cid=ecf05e47hyqszy7fecac8xwdzlndzm67xcv3vkrq5yaymedi&rid=giphy.gif&ct=g');
                    $(`.statusbar`).html(`<div id="banner"><i class="nes-icon trophy is-large"></i><span>${game.name}<span><i class="nes-icon trophy is-large"></i></div>`);
                    $('#winner').toggle();
                
                },                   
        getName(){
                   return game.name = ($('#name_field')[0].value);
                },
    };
   
// Event Listeners 

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

const $gameRestart = $('.restart').click(function(){
    location.reload();
});

