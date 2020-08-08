//üstüste çakışmayan daireler aka circle-packing

var cember = [];
var minR = 3;
var maxR = 50;
var showDaire = true;


function setup() {
  createCanvas(400, 400);
  noFill();
  noCursor();
  ellipseMode(RADIUS);
}

function draw() {
  background(225);
  
//her dairenin konumunu belirlemek için variable,   
  var posX = random(maxR, width - maxR);
  var posY = random(maxR, height - maxR);
  
//çakışmadan en büyük dairenin yaratılması
  var kesişim = false; //kesişim değişkeni 
  for (var newR = maxR; newR >= minR; newR--) {
    for (var i = 0; i < cember.length; i++) {
      var d = dist(posX, posY, cember[i].x, cember[i].y);
      kesişim = d < cember[i].r + newR; //mesafe dairelerin yarı çapları ve yeni yarıçap toplamından küçük olduğunda daireler kesişiyor
      
//if-else ile olmadı. sanırım her seferinde kesişimi doğrulaması için if statementı sonlandırması geekiyor, burayı buluşmada soracağım   
    if (kesişim==true) {
        break;
      }
    }
    if (kesişim==false) {
      cember.push(new Daire(posX, posY, newR));
      break;
    }
  }
  //Daire üretmek için for döngüsü
  for (var i = 0; i < cember.length; i++) {
    if (showDaire==true) cember[i].draw();
  }
   
}
  
//çember objesi
function Daire(x, y, r) {
  this.x = x;
  this.y = y;
  this.r = r;

//daire parametreleri, x-y koordinatı ve yarıçap  
  
  this.draw = function() {
    stroke(0);
    strokeWeight(1);
    ellipse(this.x, this.y, this.r);
  }
}