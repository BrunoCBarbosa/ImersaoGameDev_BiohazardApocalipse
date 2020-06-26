function restart(){
    isDead = false
    score.score = 0;
    boy.y  = height - boy.charHeight - boy.charY;
    enemies[currentEnemy].charX = -10*enemies[currentEnemy].charHeight
    loop();
}