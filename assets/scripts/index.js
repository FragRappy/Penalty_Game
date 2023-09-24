// Tableau des différentes position de tirs et arret
const positionBallon = [
    'upLeft',
    'left',
    'downLeft',
    'up',
    'center',
    'down',
    'upRight',
    'right',
    'downRight'
];

//Var stat partie

const stat = {
    goalPlay: 0,
    goalCom: 0,
    addGoalPlayer: function() {
        stat.goalPlay +=1;
    },
    addGoalComputer: function() {
        stat.goalCom +=1;
    },
    updateQuantityPlayer: function() {
        document.getElementById('quantityPlay').textContent = stat.goalPlay;
    },
    updateQuantityComputer: function() {
        document.getElementById('quantityCom').textContent = stat.goalCom;
    },
}

stat.updateQuantityComputer();
stat.updateQuantityPlayer();

//Joueur
let positionPlay;
let randomPlay = Math.floor(Math.random()*(positionBallon.length));
// console.log(`valeur du random pour le joueur': ${randomPlay}`);

//Ordinateur
let positionCom;
let randomCom;

//fonction pour la position du goal 
function goalPosition(position){
    if (positionPlay === positionBallon[randomCom]){
            stat.addGoalComputer();
            stat.updateQuantityComputer();
        console.log(`Belle arret du goal biglou il a sauté en: ${positionBallon[randomCom]} `);
    }
    else {
            stat.addGoalPlayer();
            stat.updateQuantityPlayer();
        console.log('Goooooaaaaaallllll !!!!');
    }
};


//Recuperation valeur du bouton cliquer par le joueur
document.querySelectorAll('.btn').forEach(function(button) {
    button.addEventListener('click', function() {
        positionPlay = button.value;
        randomCom = Math.floor(Math.random()*(positionBallon.length))
        console.log(`le joueur choisi : ${positionPlay}`)
        console.log(`le goal choisi : ${positionBallon[randomCom]} `)
        // Ici on a accès à la valeur du bouton cliqué
        goalPosition(positionPlay);
    });
});


