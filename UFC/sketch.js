// Load CSV file with data
let data;
let dataPool;

// Global variables - for use outside of setup
let screenWidth, screenHeight;

//Colors - not used
let Colors;

//Anchor Points
let startX;
let methodCatX;
let methodDexX;

let decision;
let disqualified;
let knockout;
let submission;
let technicalKnockout;

let accident;
let choke;
let decision2;
let elbow;
let illegal;
let kick;
let lock;
let other;
let punch;
let stoppage;
let striking;

//Slider
let slider;

// Preload the csv file to retrieve data
function preload() {
  data = loadTable(
    'data/UFC-fights.csv',
    'csv',
    'header');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // how many rows?
  console.log(data.getRowCount());
  // what are the columns?
  // console.log(data.columns);
  dataPool = data.getRowCount();
  screenWidth = windowWidth;
  screenHeight = windowHeight;

  //Checkpoints
  startX = displayWidth / 20;
  methodCatX = displayWidth / 9 * 3;
  methodDexX = displayWidth - displayWidth / 9 * 6;

  //Slider
  slider = createSlider(0, 100, 100);
  slider.position(startX, windowHeight - 90);
  slider.style('width', '200px');

  //New Anchor Points
  //Start row
  let startIncr = windowHeight / 7;
  let startAdjust = 100;
  decision = {
    x: startX,
    y: startIncr * 2 - startAdjust
  };

  knockout = {
    x: startX,
    y: startIncr * 3 - startAdjust
  };

  technicalKnockout = {
    x: startX,
    y: startIncr * 4 - startAdjust
  };

  submission = {
    x: startX,
    y: startIncr * 5 - startAdjust
  };

  disqualified = {
    x: startX,
    y: startIncr * 6 - startAdjust
  };

  //Second row
  let categoryIncr = windowHeight / 13;
  let categoryAdjust = 80;

  accident = {
    x: methodCatX,
    y: categoryIncr * 2 - categoryAdjust
  };

  choke = {
    x: methodCatX,
    y: categoryIncr * 3 - categoryAdjust
  };

  decision2 = {
    x: methodCatX,
    y: categoryIncr * 4 - categoryAdjust
  };

  elbow = {
    x: methodCatX,
    y: categoryIncr * 5 - categoryAdjust
  };

  illegal = {
    x: methodCatX,
    y: categoryIncr * 6 - categoryAdjust
  };

  kick = {
    x: methodCatX,
    y: categoryIncr * 7 - categoryAdjust
  };

  lock = {
    x: methodCatX,
    y: categoryIncr * 8 - categoryAdjust
  };

  other = {
    x: methodCatX,
    y: categoryIncr * 9 - categoryAdjust
  };

  punch = {
    x: methodCatX,
    y: categoryIncr * 10 - categoryAdjust
  };

  stoppage = {
    x: methodCatX,
    y: categoryIncr * 11 - categoryAdjust
  };

  striking = {
    x: methodCatX,
    y: categoryIncr * 12 - categoryAdjust
  };


}

function draw() {
  background(21);
  drawAnchorPoints();
  drawVertex();
  noLoop();
}

function drawAnchorPoints() {
  // New
  strokeWeight(10);
  stroke(21);
  point(decision.x, decision.y);
  point(knockout.x, knockout.y);
  point(technicalKnockout.x, technicalKnockout.y);
  point(submission.x, submission.y);
  point(disqualified.x, disqualified.y);
  point(accident.x, accident.y);
  point(choke.x, choke.y);
  point(decision2.x, decision2.y);
  point(elbow.x, elbow.y);
  point(illegal.x, illegal.y);
  point(kick.x, kick.y);
  point(lock.x, lock.y);
  point(other.x, other.y);
  point(punch.x, punch.y);
  point(stoppage.x, stoppage.y);
  point(striking.x, striking.y);
  strokeWeight(1);

}

function drawVertex() {
  for (let i = 0; i < data.getRowCount(); i++) {
    /*  Stroke Color */
    let timeString;
    let timeValue;
    let strokeColor;
    let saturation;
    let brightness;
    let opacity;

    //Get TimeValues
    timeString = data.getString(i, 'time');
    timeValue = parseInt(timeString.replace(":", ""));

    roundString = data.getString(i, 'round');
    roundValue = parseInt(roundString);

    let val = slider.value();
    opacity = val * 0.01;
    console.log("Round: " + roundString);

    colorMode(HSB);

    if (roundValue == 1) {
      strokeColor = 180;
      saturation = 100;
      brightness = 100;
    }
    if (roundValue == 2) {
      strokeColor = 129;
      saturation = 100;
      brightness = 100;
    }
    if (roundValue == 3) {
      strokeColor = 39;
      saturation = 81;
      brightness = 98;
    }
    if (roundValue == 4) {
      strokeColor = 59;
      saturation = 100;
      brightness = 100;
    }
    if (roundValue == 5) {
      strokeColor = 0;
      saturation = 99;
      brightness = 82;
    } 

    stroke(strokeColor, saturation, brightness, opacity);


    /*******       Assigning pathways        *********/
    let yBegin;
    let methodCatY;
    let methodDexY;

    //Begin - Method
    let methodIncr = (screenHeight / 5) - 50;
    if (data.getString(i, 'method') == "KO") {
      yBegin = knockout.y;
    }
    if (data.getString(i, 'method') == "TKO") {
      yBegin = technicalKnockout.y;
    }
    if (data.getString(i, 'method') == "Submission") {
      yBegin = submission.y;
    }
    if (data.getString(i, 'method') == "Decision") {
      yBegin = decision.y;
    }
    if (data.getString(i, 'method') == "DQ") {
      yBegin = disqualified.y;
    }
    if (data.getString(i, 'method') == "NC") {
      yBegin = disqualified.y;
    }

    //Checkpoint 2 - Method category
    if (data.getString(i, 'method_cat') == "Punch") {
      methodCatY = punch.y;
    }
    if (data.getString(i, 'method_cat') == "Other") {
      methodCatY = other.y;
    }
    if (data.getString(i, 'method_cat') == "Accident") {
      methodCatY = accident.y;
    }
    if (data.getString(i, 'method_cat') == "Decision") {
      methodCatY = decision2.y;
    }
    if (data.getString(i, 'method_cat') == "Elbow") {
      methodCatY = elbow.y;
    }
    if (data.getString(i, 'method_cat') == "Illegal") {
      methodCatY = illegal.y;
    }
    if (data.getString(i, 'method_cat') == "Choke") {
      methodCatY = choke.y;
    }
    if (data.getString(i, 'method_cat') == "Kick") {
      methodCatY = kick.y;
    }
    if (data.getString(i, 'method_cat') == "Lock") {
      methodCatY = lock.y;
    }
    if (data.getString(i, 'method_cat') == "Stoppage") {
      methodCatY = stoppage.y;
    }
    if (data.getString(i, 'method_cat') == "Injury") {
      methodCatY = other.y;
    }
    if (data.getString(i, 'method_cat') == "Striking") {
      methodCatY = striking.y;
    }
    if (data.getString(i, 'method_cat') == "Knee") {
      methodCatY = striking.y;
    }

    let incr = screenHeight / dataPool;
    methodDexY = incr * i;
    // screenHeight / timeValue * 6 +
    // methodDexY =  (roundValue * 50) + timeValue - 50;

    //Draw lines
    strokeWeight(0.1);
    noFill();
    beginShape();

    //Begin
    curveVertex(startX, yBegin);
    curveVertex(startX, yBegin);

    // Method Category
    curveVertex(methodCatX, methodCatY);

    //Method description > random
    curveVertex((screenWidth / 6) * 5 - 20, methodDexY);
    curveVertex((screenWidth / 6) * 5, methodDexY);
    endShape();
    strokeWeight(1);
  }

}