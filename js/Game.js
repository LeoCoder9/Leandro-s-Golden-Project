class Game {
    constructor() {

    }



    start() {
 
            background(startbg);
            form = new Form();
            form.display();

            player = new Player();
            player.getPlayers();

            intromusic.loop();

            bg = createSprite(100, 100, width, height);
            bg.addImage("BG1", bgIm);

            bg.addImage("finish", startbg);
            bg.scale = 2.5;

            knight = createSprite(200, 100, 5, 5);
            knight.addAnimation("KnightIdle", knightIdle);
            knight.addAnimation("knightRun", knightRun);
            knight.scale = 0.2;


            bird = createSprite(200, 50, 15, 15);
            bird.visible = false
            bird.addAnimation("BirdFly", birdAnimation);
            bird.scale = 0.3

            dragon = createSprite(width, height / 2);
            dragon.addAnimation("flying", dragonIm);
            dragon.scale = 2;
            dragon.visible = false;

            floor = createSprite(750, height +370, width, height);
            floor.shapeColor = color(109, 217, 65);
            knight.collide(floor);


            mountain = createSprite(width / 2 + 600, height / 2 + 300, 400, 500)
            mountain.shapeColor = color(109, 217, 65);
            mountain.visible = false

            cage = createSprite(width / 2 + 600, height / 2 - 8, 20, 20)
            cage.addImage("cage", cageIm)
            cage.scale = 0.15
            cage.visible = false

            princess = createSprite(width / 2 + 600, height / 2 - 8, 20, 20)
            princess.scale = 0.8
            princess.visible = false
            princess.addAnimation("worried", princessIm)

                     
            box1 = createSprite(width / 2 - 100, height / 2, 20, 510)

            box2 = createSprite(width / 2 + 250, height / 2 + 150, 1130, 20)
            box3 = createSprite(width / 2 + 250, height / 2 - 270, 1130, 20)

            box4 = createSprite(width / 2 + 500, height / 2, 20, 510)
        
            box1.visible = false
            box2.visible = false
            box3.visible = false
            box4.visible = false

            story = createSprite(width / 2 + 500, height / 2, 150, 150)
            story.addImage(storyIm)
            story.scale = 1.2       

    }




    play() {
        background("white");

        gameState = 1;
        

        var players=[];

        Player.getPlrInfo();

        if (allPlayers != undefined) {
            var index = 0;
            for (var i in allPlayers) {
                players[index]=allPlayers[i].name;
                index+=1;                
            }
           
        }

        if (singleOrMulti === "multi") {
            form.waiting.hide();

            bird.visible = true

            bird.collide(floor)

           if(player.name===players[1]){

  
            if (keyDown(UP_ARROW)) {
                bird.y = bird.y - 8
                writebirdPosition(bird.x,bird.y);
            }
            if (keyDown(DOWN_ARROW)) {
                bird.y = bird.y + 8
                writebirdPosition(bird.x,bird.y);
            }
        }
           
       }

        knight.velocityY = knight.velocityY + 12
        knight.collide(floor)
        //knight.bounceOff(edges);

        if (bg.x < 0) {
            bg.x = width / 2
        }

        if(singleOrMulti === "single" || (singleOrMulti === "multi" && player.name===players[0])){
        if (keyDown("space") && knight.y > width/2 - 200) {           
            knight.velocityY = -70
            writeKnightPosition(knight.x, knight.y);
        }

        ThrowSwords()

    }

        console.log(knight)

        princess.depth = cage.depth;
        cage.depth = cage.depth + 10;



        if ((keyWentDown("S") || singleOrMulti === "multi") && keyS === false) {
          
            intromusic.stop()
            bg.velocityX = -10
            knight.changeAnimation("knightRun", knightRun);

            form.hide()
            keyS = true

            playmusic.loop()
            story.destroy()
            voice.stop()



        }

   

        if (keyS === true) {

            Monster1()
            Monster2()
            hearts()


        }

        if (kills >= 3) {
            level = 2
            Monster3()
        }

        if (kills >= 6) {
            level = 3
            obstacles()
        }
        if (kills >= 12) {
            level = 4
            Monster5()
        }

        if (kills >= 25) {
            level = 5
            Monster4()


        }
        if (kills >= 45) {
            level = 6
        }

        if (level === 6) {

        
               
           dragon.bounceOff(box1)
           dragon.bounceOff(box2)
           dragon.bounceOff(box3)
           dragon.bounceOff(box4)


            playmusic.stop()

            if(Dlives === 1 && canGainlives === true){
                canGainlives = false
                Dlives = 15
                dragon.scale = 2.5;
                rage.play();
                dragonRoar.play();
                dragon.velocityX = -6
                dragon.velocityY = 3
                writeDragonLives(Dlives);
            }
           


            fireballs()

            dragon.bounceOff(edges)

         

            monsters.destroyEach()


            if (played === false) {
                played = true;

                dragonRoar.play();



                BossMusic.loop();

                dragon.setCollider("rectangle", 0, 0, 100, 100);
                dragon.x = width / 2 + 350;
                dragon.y = height / 2 - 100;

                dragon.visible = true;
                dragon.velocityX = -5;
                dragon.velocityY = 2;

                mountain.depth = dragon.depth;
                princess.depth = dragon.depth;
                cage.depth = dragon.depth;
                dragon.depth = dragon.depth + 1;


                princess.visible = true;
                mountain.visible = true;
                cage.visible = true;



            }

            bg.velocityX = 0
            knight.changeAnimation("KnightIdle", knightIdle);


            if (swordGroup.isTouching(dragon)) {
                Dlives = Dlives - 1
                swordGroup.destroyEach()
                dragonHurt.play()
            }


            if (Dlives === 0) {

                BossMusic.stop()
                if (played2 === false) {
                    played2 = true
                    intromusic.loop()
                }

                dragon.destroy();

                whoosh.stop()
                fireGroup.destroyEach();
                swordGroup.destroyEach();
                heartGroup.destroyEach()

                


 

                princess.x = knight.x + 100;
                princess.y = knight.y;

                time = time+1
                console.log(time);

                if (time >= 50 ) {
                    background("black");
                    cage.destroy();

                    knight.destroy();
                    floor.destroy();
                    princess.destroy();
                    mountain.destroy();
                    bird.destroy()

           

                   

                    bg.destroy();
                    


                    if (time >= 100) {
                        background(startbg);

                        finishStory = createSprite(width / 2 + 500, height / 2, 150, 150);
                        finishStory.addImage(fsImage);
                        finishStory.scale = 1;


                       

                    }
                }



            }
        
        

        }



        for (var i = 0; i < monsters.length; i++) {
            if (monsters.get(i).isTouching(knight)|| monsters.get(i).isTouching(bird)) {
                monsters.get(i).destroy();
                lives = lives - 1;
                hurt.play();
                hit.play();
            }
        }

        for (var i = 0; i < fireGroup.length; i++) {
            if (fireGroup.get(i).isTouching(knight) || fireGroup.get(i).isTouching(bird)) {
                fireGroup.get(i).destroy();
                lives = lives - 1;
                hurt.play();
                hit.play();
            }
        }


        for (var i = 0; i < monsters.length; i++) {
            if (monsters.get(i).isTouching(swordGroup)) {
                monsters.get(i).destroy();
                kills = kills + 1;
                //ghostHurt.play()
                hit.play();
                for (var i = 0; i < swordGroup.length; i++) {
                    swordGroup.get(i).destroy();;
                }
            }
        }

        if(singleOrMulti === "multi"){
                for (var i = 0; i < heartGroup.length; i++) {
                    if (heartGroup.get(i).isTouching(bird)) {
                        heartGroup.get(i).destroy()
                        lives = lives + 1
                        collectSound.play()
                    }
                }
        }
        if(singleOrMulti === "single"){
            for (var i = 0; i < heartGroup.length; i++) {
                if (heartGroup.get(i).isTouching(knight)) {
                    heartGroup.get(i).destroy()
                    lives = lives + 1
                    collectSound.play()
                }
            }
    }
      
        function Monster1() {
            if (frameCount % 100 === 0) {
                var hyena = createSprite(width, height - 78, 30, 30);
                hyena.velocityX = -23;
                hyena.addAnimation("HyenaRun", hyenaIm);
                hyena.scale = 1.5;
                hyena.lifetime = 150;
                hyena.setCollider("rectangle", 0, 0, 20, 20);
                monsters.add(hyena);
            }

        }

        function Monster2() {
            if (frameCount % Math.round(random(100, 200)) === 0) {
                var vulture = createSprite(width, Math.round(random(250, 600)), 30, 30);
                vulture.velocityX = -28;
                vulture.addAnimation("VultureRun", vultureIm);
                vulture.scale = 1.2;
                vulture.lifetime = 150;
                vulture.setCollider("rectangle", 0, 0, 20, 20);
                monsters.add(vulture);
            }

        }
        function Monster3() {
            if (frameCount % Math.round(random(100, 200)) === 0) {
                var deceased = createSprite(width, height - 78, 30, 30);
                deceased.velocityX = -18;
                deceased.addAnimation("DeceasedRun", deceasedIm);
                deceased.scale = 1.5;
                deceased.lifetime = 170;
                deceased.setCollider("rectangle", 0, 0, 20, 20);
                monsters.add(deceased);
            }

        }
        function Monster4() {
            if (frameCount % Math.round(random(100, 210)) === 0) {
                var scorpio = createSprite(width, height - 65, 30, 30);
                scorpio.velocityX = -18;
                scorpio.addAnimation("ScorpioRun", scorpioIm);
                scorpio.scale = 1.5;
                scorpio.lifetime = 170;
                monsters.add(scorpio);
            }

        }
        function Monster5() {
            if (frameCount % Math.round(random(110, 210)) === 0) {
                var mummy = createSprite(width, height - 78, 30, 30);
                mummy.velocityX = -16;
                mummy.addAnimation("MummyRun", mummyIm);
                mummy.scale = 1.5;
                mummy.lifetime = 170;
                mummy.setCollider("rectangle", 0, 0, 20, 20);
                monsters.add(mummy);
            }

        }


        function ThrowSwords() {
            if (keyWentDown("e")) {
                var throwSword = createSprite(knight.x + 100, knight.y, 10, 10);

                throwSword.addImage("sword", swordImage);
                throwSword.velocityX = 25;
                throwSword.scale = 0.035;
                swordswoosh.play();

                swordGroup.add(throwSword);
                throwSword.lifetime = 50;


            }

        }


        function fireballs() {
            if (frameCount % Math.round(random(50, 160)) === 0) {

                var fire = createSprite(dragon.x - 150, dragon.y + 20, 20, 20);

                fire.setSpeedAndDirection(-10, -18, fire.getDirection() + 1);

                whoosh.play()

                fire.shapeColor = "red";
                fire.addImage("ball", fireballImage);
                fire.scale = 0.07;
                fire.velocityX = -15;
                fire.lifetime = 80;
                fire.angle = knight.angle;

                fireGroup.add(fire);


            }

        }

        function obstacles() {

            if (frameCount % 150 === 0) {
                var ob = createSprite(width, height - 43, 30, 30);

                var rand = Math.round(random(1, 3));
                switch (rand) {
                    case 1: ob.addImage(obs1);
                        ob.scale = 0.15
                        break;
                    case 2: ob.addImage(obs2);
                        ob.scale = 0.15
                        break;
                    case 3: ob.addImage(obs3);
                        ob.scale = 0.21
                        break;

                    default: break;
                }

                ob.velocityX = -16;
                ob.lifetime = 140;
                ob.setCollider("rectangle", 0, 0, 30, 30);
                monsters.add(ob);
            }

        }


        function hearts() {
            if (frameCount % 900 === 0) {
                var heart = createSprite(width, Math.round(random(350, 500)), 30, 30);
                heart.velocityX = -13;
                heart.addImage("Heart", heartImage);
                heart.scale = 0.1;
                heart.lifetime = 150;
                heart.setCollider("rectangle", 0, 0, 20, 20);
                heartGroup.add(heart);
            }

        }

        drawSprites();

        textSize(20);
        fill("white");
        if (lives >= 1 && Dlives != 0) {
            textAlign(CENTER);
            if(singleOrMulti === "single"){
                //text(player.name, knight.x - 10, knight.y - 80);
            }
            else{
                text(players[0], knight.x - 10, knight.y - 80);
                text(players[1], bird.x - 10, bird.y - 80);
            }
           

        }
       

        if (level >= 1 && Dlives != 0) {
            textSize(30);
            fill("red");
            stroke(25);
            text("Lives: " + lives, 100, 70);
            text("Kills: " + kills, 1200, 70);
            text("Level: " + level, 780, 120);
        }


        if (level === 6 && Dlives != 0) {
            fill("black");
            text("DRAGON LIVES: " + Dlives, dragon.x - 100, dragon.y - 150);

        }
  

        

        if(Dlives === 0){
            fill("black");
            textSize(35)
            stroke(50)
            text("WELL DONE! YOU SLAYED THE DRAGON!!", 400, height / 2 - 250);
        }

        if (time >= 100) {
            fill("black");
            textSize(35)
            stroke(50)
            text("STATS:", 500, height / 2 - 100);
            text("KILLS: " + kills, 520, height / 2 - 50);
            text("LIVES: " + lives, 520, height / 2);

            text("Thanks for playing!" , 520, height / 2 + 330);


            if(lives >= 5){
                text("YOU SAVED YOUR PRINCESS WITH 5 LIVES OR MORE!", 150, height / 2 + 150);
                text("YOU SHOULD BE PROUD!", 150, height / 2 + 220);
            }
            

        }

        
    



        if (lives < 1) {
            game.end();
        }



    }
    end() {
        if(singleOrMulti === "multi")
        form.plrwelcome.hide();

        monsters.destroyEach();
        bg.velocityX = 0;
        bg.destroy();
        monsters.destroyEach();
           keyS = false

        background(endbg);

        on = false
        

        whoosh.stop();
        dragon.destroy();
        fireGroup.destroyEach();
        heartGroup.destroyEach();
        swordGroup.destroyEach();

        fill("brown");
        stroke(100);
        textSize(30);
        text("Kills: " + kills, 732, 500);
        text("Press 'R' to retry", 670, 600);
        text("Oh No.. ", 730, 120);
        textSize(130);
        text("GAME OVER!", 375, 350);

        if (keyDown("R")) {
            kills = 0;
            level = 1;
            lives = 5;
            Dlives=5;
            background(startbg);
            monsters.destroyEach();

           

            gameState = 0;
            game.start();
            playmusic.stop();
            BossMusic.stop();

          
           //keyS = false;

            //singleOrMulti = "single";

           
            player.updatePlayer(0);
            game.updateState(0);

            writekills(kills);
            writeLevels(level);
            writeLives(lives);
            writeDragonLives(Dlives);

            var playerInfoRef = database.ref('players');
            playerInfoRef.remove();

        }

    }

    getState() {
        var gameref = database.ref('gameState')
        gameref.on("value", function (data) { gs = data.val() })
    }

    updateState(state) {
        database.ref('/').update({ gameState: state })
    }


}
