class Form {

    constructor() {
        this.singlePlrButtom = createButton("SinglePlayer");
        this.multiPlrButtom = createButton("MultiPlayer");

        this.howToPlayButton = createButton("How to play?")


        this.Info = createElement('h2');
        this.greetings = createElement('h2');
        this.name = null

        this.waiting=null;
        this.plrwelcome=null;

        this.reset= createButton('Reset');

        
    }


    display() {
        fill("white")

        
        var title = createElement('h1');
        title.html("KNIGHT QUEST");
        title.position(width / 2 + -120, 20);

        var play = createElement('h2');
        play.html("PLAY NOW:");
        play.position(width / 2 + -60, 160);

        let col = color(109, 78, 37);


        this.singlePlrButtom.position(width / 2 + -150, 360);
        this.singlePlrButtom.size(120, 50)
        this.singlePlrButtom.style('background-color', col);

        this.singlePlrButtom.mouseOver(() => {
            this.singlePlrButtom.style('background-color', '#4ec91a');
            this.singlePlrButtom.size(130, 55);
        })

        this.singlePlrButtom.mouseOut(() => {
            this.singlePlrButtom.style('background-color', col);
            this.singlePlrButtom.size(120, 50);
        })




        this.multiPlrButtom.position(width / 2 + 50, 360);
        this.multiPlrButtom.size(120, 50)
        this.multiPlrButtom.style('background-color', col);

        this.multiPlrButtom.mouseOver(() => {
            this.multiPlrButtom.style('background-color', '#4ec91a');
            this.multiPlrButtom.size(130, 55);
        })


        this.multiPlrButtom.mouseOut(() => {
            this.multiPlrButtom.style('background-color', col);
            this.multiPlrButtom.size(120, 50);
        })



        this.howToPlayButton.position(width / 2 + -41, 460);
        this.howToPlayButton.size(110, 25)
        this.howToPlayButton.style('background-color', col);


        this.howToPlayButton.mouseOver(() => {
            this.howToPlayButton.style('background-color', '#4ec91a');
            this.howToPlayButton.size(120, 35);
        })


        this.howToPlayButton.mouseOut(() => {
            this.howToPlayButton.style('background-color', col);
            this.howToPlayButton.size(110, 25);
        })


        this.howToPlayButton.mousePressed(() => {
            click.play()
            background(endbg)
            this.howToPlayButton.hide()
            this.singlePlrButtom.hide()
            this.multiPlrButtom.hide()
            play.hide()
            
//-----------------------
        var singleplrInfo = createElement('h1')
        singleplrInfo.position(width / 2 + -600, 100);
        singleplrInfo.html("SINGLE - PLAYER:");
         
         var SPinfo1 = createElement('h3')
         SPinfo1.position(width / 2 + -600, 150);
         SPinfo1.html("In single player you are the knight.");

         var SPinfo2 = createElement('h3')
         SPinfo2.position(width / 2 + -600, 200);
         SPinfo2.html("You must find the princess to save her from the dragon...");

          var singleplrControls = createElement('h2')
            singleplrControls.position(width / 2 + -600, 250);
            singleplrControls.html("CONTROLS:");

        var ScontrolsInfo1 = createElement('h3')
         ScontrolsInfo1.position(width / 2 + -600, 300);
         ScontrolsInfo1.html("To throw a sword you must press 'E' on your keyboard!");

         var ScontrolsInfo2 = createElement('h3')
         ScontrolsInfo2.position(width / 2 + -600, 350);
         ScontrolsInfo2.html("To jump you must press the 'space' button on your keyboard, obviously...!");

         var singleplrRules = createElement('h2')
         singleplrRules.position(width / 2 + -600, 400);
         singleplrRules.html("RULES:");

         var SRulesInfo1 = createElement('h3')
         SRulesInfo1.position(width / 2 + -600, 450);
         SRulesInfo1.html("You will start off with " + lives + " lives, is there a way to get more lives?");

         var SRulesInfo2 = createElement('h3')
         SRulesInfo2.position(width / 2 + -600, 500);
         SRulesInfo2.html("There will be 6 levels in total, level 6 is where you will meet your doom!");

         var SRulesInfo3 = createElement('h3')
         SRulesInfo3.position(width / 2 + -600, 550);
         SRulesInfo3.html("Each level with get harder and harder! If you lose ALL your lives, GAME OVER!");
//-----------------------------------

var multiplrInfo = createElement('h1')
multiplrInfo.position(width / 2 + 300, 100);
multiplrInfo.html("MULTI - PLAYER:");
 
 var MPinfo1 = createElement('h3')
 MPinfo1.position(width / 2 + 300, 150);
 MPinfo1.html("In multi player you are the knight or the bird.");

 var MPinfo2 = createElement('h3')
 MPinfo2.position(width / 2 + 300, 200);
 MPinfo2.html("You must find the princess to save her from the dragon...");

  var multiplrControls = createElement('h2')
multiplrControls.position(width / 2 + 300, 250);
multiplrControls.html("CONTROLS:");

var McontrolsInfo1 = createElement('h3')
 McontrolsInfo1.position(width / 2 + 300, 300);
 McontrolsInfo1.html("To throw a sword you must press 'E' on your keyboard! (for knight only)");

 var McontrolsInfo2 = createElement('h3')
 McontrolsInfo2.position(width / 2 + 300, 350);
 McontrolsInfo2.html("To jump you must press the 'space' button on your keyboard, obviously...! (for knight only)");

 var McontrolsInfo3 = createElement('h3')
 McontrolsInfo2.position(width / 2 + 300, 400);
 McontrolsInfo2.html("To fly up press the 'UP ARROW' and to fly down press the 'DOWN ARROW' (for bird only)");


 var multiplrRules = createElement('h2')
 multiplrRules.position(width / 2 + 300, 450);
 multiplrRules.html("RULES:");

 var MRulesInfo1 = createElement('h3')
 MRulesInfo1.position(width / 2 + 300, 500);
 MRulesInfo1.html("You will start off with " + lives + " lives, is there a way to get more lives? (In multi - player, only bird can collect more lives)");

 var MRulesInfo2 = createElement('h3')
 MRulesInfo2.position(width / 2 + 300, 550);
 MRulesInfo2.html("There will be 6 levels in total, level 6 is where you will meet your doom!");

 var MRulesInfo3 = createElement('h3')
 MRulesInfo3.position(width / 2 + 300, 600);
 MRulesInfo3.html("Each level with get harder and harder! If you lose ALL your lives, GAME OVER!");
 //----------------------------------------
            var returnButton = createButton(" 🢀 Return 🢀")
            returnButton.position(width / 2 + -280, 50)
            returnButton.size(130, 35)
            returnButton.style('background-color', col);

         

            returnButton.mouseOver(() => {
                returnButton.style('background-color', '#4ec91a');
                returnButton.size(140, 45);
            })


            returnButton.mouseOut(() => {
                returnButton.style('background-color', col);
                returnButton.size(130, 35);
            })

            returnButton.mousePressed(() => {
                background(startbg)
                click.play()

                returnButton.hide();
                singleplrInfo.hide();
                SPinfo1.hide();
                SPinfo2.hide();
                singleplrControls.hide();
                ScontrolsInfo1.hide();
                ScontrolsInfo2.hide();
                singleplrRules.hide();
                SRulesInfo1.hide();
                SRulesInfo2.hide();
                SRulesInfo3.hide();

                multiplrInfo.hide();
                MPinfo1.hide();
                MPinfo2.hide();
                multiplrControls.hide();
                McontrolsInfo1.hide();
                McontrolsInfo2.hide();
                multiplrRules.hide();
                MRulesInfo1.hide();
                MRulesInfo2.hide();
                MRulesInfo3.hide();

                this.singlePlrButtom.show()
                this.multiPlrButtom.show()
                play.show()
                this.howToPlayButton.show()
            })
        })


        this.singlePlrButtom.mousePressed(() => {
            play.hide();
            this.howToPlayButton.hide()

            click.play()

            this.multiPlrButtom.hide();
            this.singlePlrButtom.hide();

            var singlePlrTitle = createElement('h2');
            singlePlrTitle.position(width / 2 + -60, 160);
            singlePlrTitle.html("Getting ready...");

            var singleName = createInput("Input Name");

            singleName.position(width / 2 + -65, 360);
            singleName.size(150, 30)
            singleName.style('background-color', col)

            var singlePlayButton = createButton("PLAY");
            singlePlayButton.position(740, 455);
            singlePlayButton.size(90, 25)


            singlePlayButton.mouseOver(() => {
                singlePlayButton.style('background-color', '#4ec91a');
                singlePlayButton.size(100, 35);
            })

            singlePlayButton.mouseOut(() => {
                singlePlayButton.style('background-color', '#E5E5E5');
                singlePlayButton.size(90, 25);
            })




            singlePlayButton.mousePressed(() => {
                gameState = 1;
                this.name = singleName.value()
                singlePlayButton.hide();
                singleName.hide();
                singlePlrTitle.hide();

                click.play()

                var menuButton = createButton("Return to menu")
                menuButton.position(width / 2 + -51, 15)
                menuButton.size(110, 25)
                menuButton.style('background-color', col);

                voice.play()
                this.greetings.html("Greetings, " + this.name);
                this.greetings.position(width / 2 + -98, 160);


                this.Info.html("Press 'S' to start");
                this.Info.position(width / 2 + -65, 250);

                Dlives = 5

                writeDragonLives(Dlives);
                
            }

            )


        }

        )

        this.multiPlrButtom.mousePressed(() => {
            singleOrMulti = "multi"

            play.hide();
            this.howToPlayButton.hide()

            click.play()

            this.multiPlrButtom.hide();
            this.singlePlrButtom.hide();

            var PlrTitle = createElement('h2');
            PlrTitle.position(width / 2 + -60, 160);
            PlrTitle.html("Getting ready...");

            var plrName = createInput("Input Name");

            plrName.position(width / 2 + -65, 360);
            plrName.size(150, 30)
            plrName.style('background-color', col)

            var PlayButton = createButton("PLAY");
            PlayButton.position(740, 455);
            PlayButton.size(90, 25)


            PlayButton.mouseOver(() => {
                PlayButton.style('background-color', '#4ec91a');
                PlayButton.size(100, 35);
            })

            PlayButton.mouseOut(() => {
                PlayButton.style('background-color', '#E5E5E5');
                PlayButton.size(90, 25);
            })




            PlayButton.mousePressed(() => {
                
                player.name = plrName.value();
                plrCount = plrCount + 1;
                player.index = plrCount;
                player.updatePlayer(plrCount);
                player.updateName(player.name);

                PlayButton.hide();
                plrName.hide();
                PlrTitle.hide();


               
                this.waiting = createElement('h2');
                this.waiting.position(width / 2 + -130, 160);
                this.waiting.html("Waiting for 1 more player...");
                

                this.plrwelcome = createElement('h2');
                this.plrwelcome.position(width / 2 + -90, 260);
                this.plrwelcome.html("Welcome " + player.name);

                

            }

            )


        }

        )

        this.reset.position(width-100,20);

        this.reset.mousePressed(()=>{
            kills=0;
            lives=5;
            level=1;
            Dlives=5;
            player.updatePlayer(0);
            game.updateState(0);

            writekills(kills);
            writeLevels(level);
            writeLives(lives);
            writeDragonLives(Dlives);

            var playerInfoRef = database.ref('players');
            playerInfoRef.remove();
        })


    }

    hide() {
        this.Info.hide()
        this.greetings.hide()

        if(singleOrMulti === "multi"){
        this.waiting.hide();
        this.plrwelcome.hide();
    }
    }


}

