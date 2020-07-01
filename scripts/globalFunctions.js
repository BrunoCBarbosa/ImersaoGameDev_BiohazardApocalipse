//functions Sound
function playFx(fxName){
    return fxName.play();
}

function playBackgroundSound(backgroundName){
    backgroundName.stop();
}

function stopAnySound(soundName){
    return soundName.stop();
}