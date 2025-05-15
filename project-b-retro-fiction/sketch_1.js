//this sketch is used to show the exhibition.
//tring to add the correct information
let furnitureManager;
let furnitureImage0, furnitureImage1, furnitureImage2, furnitureImage3, furnitureImage4, furnitureImage5, furnitureImage6, furnitureImage7, furnitureImage8, furnitureImage9, furnitureImage10, furnitureImage11;
let infoImage1, infoImage2, infoImage3, infoImage4, infoImage5, infoImage6, infoImage7, infoImage8, infoImage9, infoImage10, infoImage11;
let infoImage1_c, infoImage2_c, infoImage3_c, infoImage4_c, infoImage5_c, infoImage6_c, infoImage7_c, infoImage8_c, infoImage9_c, infoImage10_c, infoImage11_c;
let furnitureImage_climber, furnitureImage_light, furnitureImage_microwave, furnitureImage_shelf;
let sound_mouse, sound_cat, sound_tv, sound_phone, sound_dryer, sound_table, sound_light, sound_plant;

function preload() {
  furnitureImage0 = loadImage("assets/room.png");
  furnitureImage1 = loadImage("assets/cat.png");
  furnitureImage2 = loadImage("assets/climber.png");
  furnitureImage3 = loadImage("assets/dryer.png");
  furnitureImage4 = loadImage("assets/tv.png");
  furnitureImage5 = loadImage("assets/microwave.png");
  furnitureImage6 = loadImage("assets/sofa.png");
  furnitureImage7 = loadImage("assets/plant.png");
  furnitureImage8 = loadImage("assets/shelf.png");
  furnitureImage9 = loadImage("assets/phone.png");
  furnitureImage10 = loadImage("assets/table.png");
  furnitureImage11 = loadImage("assets/light.png");

  infoImage1 = loadImage("assets/info_cat.png");
  infoImage2 = loadImage("assets/info_climber.png");
  infoImage3 = loadImage("assets/info_dryer.png");
  infoImage4 = loadImage("assets/info_tv.png");
  infoImage5 = loadImage("assets/info_microwave.png");
  infoImage6 = loadImage("assets/info_sofa.png");
  infoImage7 = loadImage("assets/info_plant.png");
  infoImage8 = loadImage("assets/info_shelf.png");
  infoImage9 = loadImage("assets/info_phone.png");
  infoImage10 = loadImage("assets/info_table.png");
  infoImage11 = loadImage("assets/info_light.png");

  infoImage1_c = loadImage("assets/info_cat_c.png");
  infoImage2_c = loadImage("assets/info_climber_c.png");
  infoImage3_c = loadImage("assets/info_dryer_c.png");
  infoImage4_c = loadImage("assets/info_tv_c.png");
  infoImage5_c = loadImage("assets/info_microwave_c.png");
  infoImage6_c = loadImage("assets/info_sofa_c.png");
  infoImage7_c = loadImage("assets/info_plant_c.png");
  infoImage8_c = loadImage("assets/info_shelf_c.png");
  infoImage9_c = loadImage("assets/info_phone_c.png");
  infoImage10_c = loadImage("assets/info_table_c.png");
  infoImage11_c = loadImage("assets/info_light_c.png");

  furnitureImage_climber = loadImage("assets/climber_1.png");
  furnitureImage_light = loadImage("assets/light_1.png");
  furnitureImage_microwave = loadImage("assets/microwave_1.png");
  furnitureImage_shelf = loadImage("assets/shelf_1.png");

  sound_mouse = loadSound("assets/beat.mp3");
  sound_cat = loadSound("assets/cat.wav")
  sound_tv = loadSound("assets/tv.wav");
  sound_phone = loadSound("assets/languages.mp3");
  sound_dryer = loadSound("assets/dryer.mp3");
  sound_table = loadSound("assets/table.wav");
  sound_light = loadSound("assets/light.wav");
  sound_plant = loadSound("assets/plant.wav");
}

function setup() {
  let canvas = createCanvas(1200, 750);
  canvas.parent("p5-canvas-container");

  furnitureManager = new FurnitureManager();
  furnitureManager.updateFurniture(width / 2, height / 2, furnitureImage1, infoImage1, infoImage1_c, 473, 52, 105, 60, 0, 23, 360, 30);
  furnitureManager.updateFurniture(width / 2, height / 2, furnitureImage2, infoImage2, infoImage2_c, 427.5, 187.5, 180, 195, 0, 67.5, 360, 105);
  furnitureManager.updateFurniture(width / 2, height / 2, furnitureImage3, infoImage3, infoImage3_c, 232.5, 142.5, 60, 75, -15, 7.5, 135, 21);
  furnitureManager.updateFurniture(width / 2, height / 2, furnitureImage4, infoImage4, infoImage4_c, 15, -60, 270, 180, 0, -9, 360, 93);
  furnitureManager.updateFurniture(width / 2, height / 2, furnitureImage5, infoImage5, infoImage5_c, -435, -112.5, 127.5, 75, 0, -60, 360, 90);
  furnitureManager.updateFurniture(width / 2, height / 2, furnitureImage6, infoImage6, infoImage6_c, 60, 172.5, 165, 195, 0, -48, 360, 60);
  furnitureManager.updateFurniture(width / 2, height / 2, furnitureImage7, infoImage7, infoImage7_c, -270, 135, 90, 300, 0, -60, 360, 45);
  furnitureManager.updateFurniture(width / 2, height / 2, furnitureImage8, infoImage8, infoImage8_c, -427.5, 105, 150, 345, 0, 30, 360, 60);
  furnitureManager.updateFurniture(width / 2, height / 2, furnitureImage9, infoImage9, infoImage9_c, -75, 165, 75, 75, 0, -69, 360, 22.5);
  furnitureManager.updateFurniture(width / 2, height / 2, furnitureImage10, infoImage10, infoImage10_c, 225, 232.5, 97.5, 90, 0, -45, 360, 30);
  furnitureManager.updateFurniture(width / 2, height / 2, furnitureImage11, infoImage11, infoImage11_c, 0, -330, 240, 75, 0, 15, 360, 54);
}

function draw() {
  image(furnitureImage0, width / 2, height / 2, width, height);
  furnitureManager.display();

  if (furnitureManager.popup) {
    furnitureManager.popup.display();
  }

  if (furnitureManager.selected == 1) { //climber
    image(furnitureImage_climber, width / 2 - 20, height / 2, width, height);
  } else if (furnitureManager.selected == 4) { //microwave
    image(furnitureImage_microwave, width / 2 - 20, height / 2, width, height);
  } else if (furnitureManager.selected == 7) { //bookshelf
    image(furnitureImage_shelf, width / 2 - 20, height / 2, width, height);
  }
}

function mousePressed() {
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    sound_mouse.play();
  }
  if (furnitureManager.popup) {
    furnitureManager.popup.checkClick(mouseX, mouseY);
  } else {
    furnitureManager.checkInfoClicked(mouseX, mouseY);
  }
}

class Furniture {
  constructor(startX, startY, furnitureImage, infoImage, infoImage_c, hitboxOffsetX, hitboxOffsetY, hitboxW, hitboxH, smallerHitboxX, smallerHitboxY, smallerHitboxW, smallerHitboxH) {
    this.x = startX;
    this.y = startY;
    this.furnitureImage = furnitureImage;
    this.infoImage = infoImage;
    this.infoImage_c = infoImage_c;

    this.hitboxOffsetX = hitboxOffsetX;
    this.hitboxOffsetY = hitboxOffsetY;
    this.hitboxW = hitboxW;
    this.hitboxH = hitboxH;

    this.smallerHitboxX = smallerHitboxX;
    this.smallerHitboxY = smallerHitboxY;
    this.smallerHitboxW = smallerHitboxW;
    this.smallerHitboxH = smallerHitboxH;
  }

  display() {
    imageMode(CENTER);
    image(this.furnitureImage, this.x - 20, this.y, width, height);
  }
}

class Popup {
  constructor(furniture) {
    this.f = furniture;
  }

  display() {
    push();
    translate(width / 2, height / 2);
    noStroke();
    rectMode(CENTER);
    fill(10, 10, 25, 100);
    rect(0, 0, width, height);

    imageMode(CENTER);
    image(this.f.infoImage, 0, 0, 450, 540);

    let mx = mouseX - width / 2;
    let my = mouseY - height / 2;

    if (
      mx > this.f.smallerHitboxX - this.f.smallerHitboxW / 2 &&
      mx < this.f.smallerHitboxX + this.f.smallerHitboxW / 2 &&
      my > this.f.smallerHitboxY - this.f.smallerHitboxH / 2 &&
      my < this.f.smallerHitboxY + this.f.smallerHitboxH / 2
    ) {
      image(this.f.infoImage_c, 0, 0, 450, 540);
    }

    pop();
  }


  checkClick(x, y) {
    if (
      x < width / 2 - 150 ||
      x > width / 2 + 150 ||
      y < height / 2 - 180 ||
      y > height / 2 + 180
    ) {
      furnitureManager.popup = null;
    }
  }
}

class FurnitureManager {
  constructor() {
    this.furniture = [];
    this.popup = null;
    this.selected = -1;
  }

  updateFurniture(startX, startY, furnitureImage, infoImage, infoImage_c, hitboxOffsetX, hitboxOffsetY, hitboxW, hitboxH, smallerHitboxX, smallerHitboxY, smallerHitboxW, smallerHitboxH) {
    let f = new Furniture(startX, startY, furnitureImage, infoImage, infoImage_c, hitboxOffsetX, hitboxOffsetY, hitboxW, hitboxH, smallerHitboxX, smallerHitboxY, smallerHitboxW, smallerHitboxH);
    this.furniture.push(f);
  }

  display() {
    for (let f of this.furniture) {
      f.display();
    }
  }
  checkInfoClicked(x, y) {
    for (let i = 0; i < this.furniture.length; i++) {
      let f = this.furniture[i]
      if (
        x > f.x + f.hitboxOffsetX - f.hitboxW / 2 &&
        x < f.x + f.hitboxOffsetX + f.hitboxW / 2 &&
        y > f.y + f.hitboxOffsetY - f.hitboxH / 2 &&
        y < f.y + f.hitboxOffsetY + f.hitboxH / 2
      ) {
        this.popup = new Popup(f);
        this.selected = i;
        console.log("Selected: " + i);
        this.triggerEffect(i);
        return;
      }
    }
  }
  triggerEffect(selection) {
    if (selection == 0) { //cat
      sound_cat.play();
    } else if (selection == 2) { //dryer
      sound_dryer.play();
    } else if (selection == 3) { // tv
      sound_tv.play();
    } else if (selection == 5) { //sofa

    } else if (selection == 6) { //plant
      sound_plant.play();
    } else if (selection == 8) { //phone
      sound_phone.play();
    } else if (selection == 9) { //table
      sound_table.play();
    } else if (selection == 10) { //light
      sound_light.play();
    }
  }
}