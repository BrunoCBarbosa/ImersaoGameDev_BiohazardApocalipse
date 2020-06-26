function restart(){
    isDead = false
    score.score = 0;
    soundGameOver.stop();
    soundCity.loop();
    boy.y  = height - boy.charHeight - boy.charY;
    enemies[currentEnemy].charX = -10*enemies[currentEnemy].charHeight
    loop();
}