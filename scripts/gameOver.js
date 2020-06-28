function restart(){
    isDead = false
    score.score = 0;
    life.lifes = 3
    soundGameOver.stop();
    soundCity.loop();
    boy.y  = height - boy.charHeight - boy.charY;
    // enemies[enemyIndex].charX = -10*enemies[enemyIndex].charHeight
     // coin.charX = -10*coin.charHeight
    loop();
}