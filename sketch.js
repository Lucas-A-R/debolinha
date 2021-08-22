var g , fy, py, px, contpulo
g = 0.3
fy = 0
py = 20
px = 150
contpulo = 0
var ppiso, pchao, largchao, 
ppiso = 135
pchao = 250
largchao = 325
var xen, yen, fyen , contpuloen
xen = 450
yen = 20
fyen = 0
contpuloen = 0
var acen , ven
acen = 0
ven = 0
var estado , estadoen
estado= ""
estadoen = ""
var ponto, poten
ponto = 0
ponten = 0
var xbol, ybol, estadobola , velbol, acbol, fybol = 0
xbol = 300
ybol = 250
velbol = 0
acbol = 0
estadobola ="SOLTA"
var bkg , plyr1, plyr2, bol, chao, agua

function setup() {
  createCanvas(600, 400);
  bkg = loadImage('background jooj.jpg')
  plyr1 = loadImage('player1.png')
  plyr2 = loadImage('player2.png')
  chao = loadImage('chao2.png')
  agua = loadImage('Agua.png')
}

function draw() 
{
  image(bkg, 0, 0, 600, 400);
  // jogador 1
  //estado = "PARADO" 
  
  if(keyIsDown(LEFT_ARROW))
  {
    estado ="RUN_ESQUERDA"
    px = px-5
  }
  if(keyIsDown(RIGHT_ARROW))
  {
    estado = "RUN_DIREITA"
    px = px+5
  }
  fy = fy + g
  //pulo do jogador
  if(py===pchao&&keyIsDown(UP_ARROW))
  {
    estado += "PULANDO"
    fy -= 9
    contpulo += 1
  }
  if (contpulo ===1)
  {
    if(keyIsDown(DOWN_ARROW))
    {
      fy = 0
      fy -= 6
      contpulo += 1
    }
  }
  if (py <-10)
  {
    fy >= 0
  }
  
  py = py + fy
  if(py>=430)
  {
     py = 200
     px = 150
     fy = 0
  }
  //colisao jogador 1 com o chao
  if( py >= pchao && px>=ppiso && px <= ppiso+largchao){
      fy = 0
      py = pchao
    contpulo = 0
  }
  if(py > pchao+70)
  {
    fy = g
    if(keyIsDown(38))
    {
      fy= fy - 9
    }
  }
  if (py > pchao+10 && px<=ppiso)
  {
    if(estado=== "RUN_DIREITA" && px>ppiso-15)
    {
      px = px - 5
    }
  }
  if (py > pchao +10 && px>= ppiso + largchao)
    {
      if(estado === "RUN_ESQUERDA" && px<= ppiso + largchao+ 15)
      {
        px = px +5
      }
    }
 
 // if (py > pchao && px>=ppiso+largchao && estado=== "RUN_ESQUERDA")
 {
  //  px = px + 15
  }

  image(plyr1, px-30, py-30, 60, 60)
  print
  var disten = int(dist(px, py, xen, yen))
  fill (100, 100, 0)
  //jogador 2
  //estadoen = "PARADO"
  if(disten<=30)
  {
    if(keyIsDown(ENTER)&& estadobola!== "SEGURANDO")
    {
        fill(250, 0, 0)
        if(px<xen)
        {
          xen = xen + 30
        if(estadobola === "SEGURANDOEN")
        {
          estadobola = "SOLTA"
        }
        }
      if (px>xen)
      {
        xen = xen -30
        if(estadobola === "SEGURANDOEN")
           {
        estadobola = "SOLTA"
           }
      }
        }
  }
  if (disten <= 30)
  {
     if(keyIsDown(69) && estadobola !== "SEGURANDOEN")
      {  
        if (xen< px)
        {
          px = px + 30
          if (estadobola === "SEGURANDO")
          {
            estadobola = "SOLTA"
          }
        }
        if (xen > px)
        {
          px = px - 30
          if (estadobola === "SEGURANDO")
          {
            estadobola = "SOLTA"
          }
        }
      }
  }
  // movimentação jogador 2
  fyen = fyen + g
 yen = yen + fyen
  if(keyIsDown(65))
     {
     xen = xen -5
       estadoen = "RUN_ESQUERDA"
     }
  if(keyIsDown(68))
  {
    xen = xen +5
    estadoen = "RUN_DIREITA"
  }
  
  
  if (yen >= pchao&&xen>=ppiso&&xen<=ppiso+largchao)
  {
    fyen = 0
      yen = pchao
    contpuloen = 0
  }
  if(yen===pchao&&keyIsDown(87))
  {
    fyen -= 9
    estadoen = estadoen+"PULANDO"
    contpuloen += 1
  }
  if(contpuloen ===1)
  {
    if(keyIsDown(83))
    {
      fyen = 0
      fyen -= 6
      contpuloen += 1
    }
  }
  if (yen <-10)
  {
    fyen >= 0
  }

  print(estadobola)
if(yen>=430)
  {
     yen = 50
     xen = 450
    fyen = 0
  }
  if(yen > pchao+70)
  {
    contpuloen = 1
    fyen = g
    if(keyIsDown(87))
    {
      fyen= fyen - 9
    }
  }
  if (yen > pchao+10 && xen<=ppiso)
  {
    if(estadoen=== "RUN_DIREITA" && xen>ppiso-15)
    {
      xen = xen - 5
    }
  }
  if (yen > pchao+10  && xen>= ppiso + largchao)
    {
      if(estadoen === "RUN_ESQUERDA" && xen<= ppiso +largchao+15)
      {
        xen = xen +5
      }
    }
  image(plyr2, xen-30, yen-30, 60, 60)
  
  var disbol = dist(px, py, xbol, ybol)  
  var disbolenem = dist(xen, yen, xbol, ybol)
  
  //segurar a bola jogador 1
  if (disbol<=30&& estadobola!=="SEGURANDOEN")
  {
    if(keyIsDown(45) && estadobola != "DISPARADO")
    {
       ybol = py
       estadobola = "SEGURANDO"
      if(estado==="RUN_DIREITA"||estado==="RUN_DIREITAPULANDO"||estado==="PARADO"||estado==="PARADOPULANDO")
      {
        xbol = px+5
      }
      else if(estado==="RUN_ESQUERDA"||estado=="RUN_ESQUERDAPULANDO"||estado==="PARADO"||estado==="PARADOPULANDO")
      {
        xbol = px-5
      }
    }else if(estadobola != "DISPARADO"){
      estadobola = "SOLTA"
    }
   
    if (keyIsDown(34)&& estadobola!== "DISPARADOEN")
    {
      estadobola= "DISPARADO"
    }
  }
  if(estadobola === "DISPARADO"){
    if(px< xbol)
    {  
    xbol = xbol + 10
    }
    if(px>xbol)
    {
      xbol = xbol -10
    }
    }
  if (disbolenem <= 30 && estadobola!=="SEGURANDO")
  {
   if (keyIsDown(16) && estadobola != "DISPARADOEN")
       {
         ybol = yen
         estadobola="SEGURANDOEN"
         if(estadoen==="RUN_DIREITA"||estadoen==="RUN_DIREITAPULANDO"||estadoen==="PARADO"||estadoen==="PARADOPULANDO")
      {
        xbol = xen+5
      }
     else if(estadoen==="RUN_ESQUERDA"||estadoen=="RUN_ESQUERDAPULANDO"||estadoen==="PARADO"||estadoen==="PARADOPULANDO")
      {
        xbol = xen-5
      }
         
       }
    else if(estadobola !== "DISPARADOEN")
    {
      estadobola = "SOLTA"
    } 
    
  if(keyIsDown(32))
  {
    estadobola = "DISPARADOEN"
  }
  }
  if(estadobola === "DISPARADOEN"){
    if(xen< xbol)
    {  
    xbol = xbol + 10
    }
    if(xen>xbol)
    {
      xbol = xbol -10
    }
    }
if(estadobola === "DISPARADO" || estadobola==="DIPARADOEN")
{
  if(xbol<0)
  {
    xbol = xbol +10
  }
  if(xbol> 600)
  {
    xbol = xbol - 10
  }
}
  if(estadobola === "SOLTA" || estadobola === "DISPARADO" || estadobola === "DISPARADOEN"){
    if(ybol > pchao +70)
    {
      fybol = g
    }
    else
    {  
    fybol = fybol + g
    }
    ybol = ybol + fybol
    if (ybol > pchao+10 && xbol<=ppiso+15)
  {
    if((estadobola=== "DISPARADO"||estadobola=== "DISPARADOEN") && xbol>ppiso+5)
    {
      xbol = ppiso -2
      estadobola = "SOLTA"
    }
  }
  if (ybol > pchao+10  && xbol>= ppiso + largchao-15)
    {
      if((estadobola=== "DISPARADO"||estadobola=== "DISPARADOEN")&& xbol< ppiso +largchao-5)
      {
        xbol = ppiso+ largchao + 2
        estadobola = "SOLTA"
      }
    }

    if (ybol >= pchao&& ybol <= pchao+ 15 && xbol >= ppiso +5 && xbol<= ppiso+ largchao- 5)
    {
      fybol =0
      ybol = pchao +7
      estadobola = "SOLTA"
    }
    if (ybol >= 430)
    {
      if(xbol >= 300)
      {
      ponto = ponto+1
      }
      if(xbol <= 300)
      {
        ponten = ponten+1
      }
        xbol = 300
      ybol = 50
      fybol = 0
      estadobola = "SOLTA"  
      
    }
    if(estadobola=== "DISPARADO" || estadobola === "DISPARADOEN")
    {
      if(xbol<0)
      {
        xbol += 5
        estadobola = "SOLTA"
      }
      if(xbol>600)
      {
        xbol-= 5
        estadobola = "SOLTA"
      }
    }
    
  }
  
  
   
  fill (250, 250, 250)
  ellipse(xbol, ybol, 15,15)
  // chao
  fill( 100, 250, 50)
  image(chao,ppiso, pchao+15,largchao, 155)
  //rect(300-15, pchao+30, 30, 200)
  
  fill(0, 0, 230)
  image(agua, 0 , pchao+70, 600, 170)
  fill("YELLOW")
  textSize(15)
  text('pontos: '+ponto, 150, 50)
  fill("GREEN")
  text('pontos: '+ponten, 350, 50)
 if(ponto===3)
 {
   ponto = 0
   ponten = 0
   alert ("Jogador 1 venceu")
 }
  if (ponten ===3)
  {
    ponto = 0
    ponten = 0
    alert("Jogador 2 venceu")
  }
}