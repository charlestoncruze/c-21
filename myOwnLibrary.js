function bounceOff(c,k){

    if (c.x - k.x < k.width/2 + c.width/2
      && k.x - c.x < k.width/2 + c.width/2) {
    c.velocityX = c.velocityX * (-1);
    k.velocityX = k.velocityX * (-1);
  }
  if (c.y - k.y < k.height/2 + c.height/2
    && k.y - c.y < k.height/2 + c.height/2){
    c.velocityY = c.velocityY * (-1);
    k.velocityY = k.velocityY * (-1);
  }
  
  }