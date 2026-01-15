// makeInterface.js

function makeInterface()
{
    let mainDiv = ce('div');
    ba(mainDiv);

    //-//

    mainDiv.append(makeTitleOfApp());

    //-//

    let mainTitle = ce('h1');
    mainTitle.textContent = "Motion Tracking";
    mainDiv.append(mainTitle);

    //-//

    // X Axis Display
    let xLabel = ce('div');
    xLabel.textContent = "X - Side Tilt";
    xLabel.className = 'axisLabel';
    mainDiv.append(xLabel);

    let xOut = ce('div');
    xOut.id = 'xOut';
    xOut.className = 'valueBox';
    xOut.textContent = '0.00';
    mainDiv.append(xOut);

    //-//

    // Y Axis Display
    let yLabel = ce('div');
    yLabel.textContent = "Y - Front Tilt";
    yLabel.className = 'axisLabel';
    mainDiv.append(yLabel);

    let yOut = ce('div');
    yOut.id = 'yOut';
    yOut.className = 'valueBox';
    yOut.textContent = '0.00';
    mainDiv.append(yOut);

    //-//

    // Z Axis Display
    let zLabel = ce('div');
    zLabel.textContent = "Z - Gravity";
    zLabel.className = 'axisLabel';
    mainDiv.append(zLabel);

    let zOut = ce('div');
    zOut.id = 'zOut';
    zOut.className = 'valueBox';
    zOut.textContent = '0.00';
    mainDiv.append(zOut);

    //-//

    // activation button
    let startBtn = ce('button');
    startBtn.id = "startBtn";
    startBtn.textContent = "Initialize Sensors";
    startBtn.onclick = function()
    {
        requestMotionPermission();
    };
    mainDiv.append(startBtn);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

