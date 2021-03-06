//single player variables:
var form, game, player;

var gameState = 0;

var knight, knightRun, knightIdle;


var bg, bgIm, bgIm2, bgIm3, bgIm4;

var floor;

var keyS = false;

var on = false;

var monsters;
var fireGroup;
var heartGroup;

var startbg, endbg;

var voice, story, storyIm, finishStory, fsImage;

var dragonRoar, dragonHurt, fireballImage, cageIm, princessIm;

var mountain, cage, princess;
var played = false;
var played2 = false;
var created = false;

var click;

var time = 0;

var Dlives = 5;
var canGainlives = true

var delay = false;
var edges;

var heartImage;

var box1, box2, box3, box4;


// monster variables:
var hyenaIm;
var vultureIm;
var deceasedIm;
var scorpioIm;
var mummyIm;

var dragon, dragonIm;


var obs1, obs2, obs3;

var swordImage, swordswoosh, swordGroup;

var lives = 5;
var kills = 0;
var level = 1;

var hurt, hit;
var intromusic, playmusic, BossMusic, EndMusic;
var whoosh, collectSound;

var rage;

//--------------------------------------------------multi - player variables:

var database;
var gs = 0;
var plrCount = 0;

var singleOrMulti = "single";

var allPlayers;

var bird, birdAnimation;
var plrIdentification = "knight";


var kpos,fpos,gpos;
//var players = [];


//loading all the images, animations, sounds:
function preload() {

  click = loadSound("sounds/click.wav");

  cageIm = loadImage("images/cage.png");

  princessIm = loadAnimation("images/Princess/princess1.png", "images/Princess/princess2.png", "images/Princess/princess3.png", "images/Princess/princess4.png", "images/Princess/princess5.png",)

  knightRun = loadAnimation("images/Knight/Run (1).png", "images/Knight/Run (2).png", "images/Knight/Run (3).png", "images/Knight/Run (4).png",
    "images/Knight/Run (5).png", "images/Knight/Run (6).png", "images/Knight/Run (7).png", "images/Knight/Run (8).png", "images/Knight/Run (9).png",
    "images/Knight/Run (10).png");

  knightIdle = loadAnimation("images/Knight/Idle (1).png", "images/Knight/Idle (2).png", "images/Knight/Idle (3).png", "images/Knight/Idle (4).png",
    "images/Knight/Idle (5).png", "images/Knight/Idle (6).png", "images/Knight/Idle (7).png", "images/Knight/Idle (8).png", "images/Knight/Idle (9).png",
    "images/Knight/Idle (10).png");

  birdAnimation = loadAnimation("images/Bird/bird1.png","images/Bird/bird2.png", "images/Bird/bird3.png","images/Bird/bird4.png","images/Bird/bird5.png","images/Bird/bird6.png","images/Bird/bird7.png","images/Bird/bird9.png")

  bgIm = loadImage("images/bg9.png");


  fireballImage = loadImage("images/fireball-im.png");

  hurt = loadSound("sounds/hurtSound.wav");
  hit = loadSound("sounds/hit.mp3");

  collectSound = loadSound("sounds/collect.mp3");

  dragonRoar = loadSound("sounds/roar.mp3");

  voice = loadSound("sounds/Voice.mp3");
  storyIm = loadImage("images/story.png");
  fsImage = loadImage("images/finishText.png");

  intromusic = loadSound("sounds/BackgroundMusic.mp3");
  playmusic = loadSound("sounds/playingMusic.mp3");
  BossMusic = loadSound("sounds/DragonBattleMusic.mp3");
  // EndMusic   = loadSound("sounds/endingMusic.mp3");

  startbg = loadImage("images/backgroundStart.jpg");
  endbg = loadImage("images/GameOverBackground.jpg");

  swordImage = loadImage("images/Sword2.png");
  swordswoosh = loadSound("sounds/swordSwoosh.wav");

  obs1 = loadImage("images/obstacle.png");
  obs2 = loadImage("images/obstacle2.png");
  obs3 = loadImage("images/obstacle3.png");


   whoosh = loadSound("sounds/whoosh.wav");

  dragonHurt = loadSound("sounds/DragonHurt.wav");

  dragonIm = loadAnimation("images/Dragon/dragonFly1.png", "images/Dragon/dragonFly2.png", "images/Dragon/dragonFly3.png", "images/Dragon/dragonFly4.png",)

  // monster images
  hyenaIm = loadAnimation("images/Hyena/hyenaWalk1.png", "images/Hyena/hyenaWalk2.png", "images/Hyena/hyenaWalk3.png", "images/Hyena/hyenaWalk4.png", "images/Hyena/hyenaWalk5.png", "images/Hyena/hyenaWalk6.png");
  vultureIm = loadAnimation("images/Vulture/vultureWalk1.png", "images/Vulture/vultureWalk2.png", "images/Vulture/vultureWalk3.png", "images/Vulture/vultureWalk4.png");
  deceasedIm = loadAnimation("images/Deceased/deceasedWalk1.png", "images/Deceased/deceasedWalk2.png", "images/Deceased/deceasedWalk3.png", "images/Deceased/deceasedWalk4.png", "images/Deceased/deceasedWalk5.png", "images/Deceased/deceasedWalk6.png",);
  scorpioIm = loadAnimation("images/Scorpio/scorpioWalk1.png", "images/Scorpio/scorpioWalk2.png", "images/Scorpio/scorpioWalk3.png", "images/Scorpio/scorpioWalk4.png",);
  mummyIm = loadAnimation("images/Mummy/mummyWalk1.png", "images/Mummy/mummyWalk2.png", "images/Mummy/mummyWalk3.png", "images/Mummy/mummyWalk4.png", "images/Mummy/mummyWalk5.png", "images/Mummy/mummyWalk5.png", "images/Mummy/mummyWalk6.png",);


  heartImage = loadImage("images/heart.png");

  rage = loadSound("sounds/dragonRage.wav");



}
//setup:
function setup() {
  createCanvas(windowWidth, windowHeight);
  edges = createEdgeSprites();

  database = firebase.database();
//making groups:
  monsters = new Group();
  swordGroup = new Group();
  fireGroup = new Group();
  heartGroup = new Group();

  game = new Game();
  game.getState();
  game.start();

  var knightPosition = database.ref('knight/position');
  knightPosition.on("value", getKnightPosition);

  var birdPosition = database.ref('bird/position');
  birdPosition.on("value", getbirdPosition);

  killsRef = database.ref('kills');
  killsRef.on("value", getKills);

  levelRef = database.ref('level');
  levelRef.on("value", getLevels);

  livesRef = database.ref('lives');
  livesRef.on("value", getLives);

  dragonlivesRef = database.ref('dragonlives');
  dragonlivesRef.on("value", getDragonLives);

}
//draw
function draw() {

//if its single player and its gameState 1 (play) then it will start
  if (gameState === 1 && singleOrMulti === "single") {
    game.play();
  }
//if its multi player and its gameState 1 (play) then it will start and use lots of functions
  if (plrCount === 2 && singleOrMulti === "multi") {
    game.play();
    game.updateState(1);
    writeKnightPosition(knight.x, knight.y);
    writebirdPosition(bird.x,bird.y);
    writekills(kills);
    writeLevels(level);
    writeLives(lives);
    writeDragonLives(Dlives);
  }


}

function getKnightPosition(data) {
  kpos = data.val();
  knight.x = kpos.x;
  knight.y = kpos.y;
}

function writeKnightPosition(x, y) {
  database.ref('knight/position').set({
    'x': x, 'y': y
  })
}

function getbirdPosition(data) {
  fpos = data.val();
  bird.x = fpos.x;
  bird.y = fpos.y;
}

function writebirdPosition(x, y) {
  database.ref('bird/position').set({
    'x': x, 'y': y

  })
}


function getKills(data) {
  kills = data.val();
}

function writekills(kills) {
 database.ref('/').update({ kills: kills });
}


function getLevels(data) {
  level = data.val();
}

function writeLevels(level) {
 database.ref('/').update({ level: level });
}

function getLives(data) {
  lives = data.val();
}

function writeLives(lives) {
 database.ref('/').update({ lives: lives });
}

function getDragonLives(data) {
  Dlives = data.val();
}

function writeDragonLives(Dlives) {
 database.ref('/').update({ dragonlives: Dlives });
}