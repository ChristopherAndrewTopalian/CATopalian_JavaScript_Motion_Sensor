// makeInterface.js

function makeInterface()
{
    let mainTitle = ce('h1');
    mainTitle.textContent = "Motion Tracking";
    ba(mainTitle);

    //-//

    // X Axis Display
    let xLabel = ce('div');
    xLabel.textContent = "X - Side Tilt";
    xLabel.className = 'axis-label';
    ba(xLabel);

    let xOut = ce('div');
    xOut.id = 'xOut';
    xOut.className = 'value-box';
    xOut.textContent = '0.00';
    ba(xOut);

    //-//

    // Y Axis Display
    let yLabel = ce('div');
    yLabel.textContent = "Y - Front Tilt";
    yLabel.className = 'axis-label';
    ba(yLabel);

    let yOut = ce('div');
    yOut.id = 'yOut';
    yOut.className = 'value-box';
    yOut.textContent = '0.00';
    ba(yOut);

    //-//

    // Z Axis Display
    let zLabel = ce('div');
    zLabel.textContent = "Z - Gravity";
    zLabel.className = 'axis-label';
    ba(zLabel);

    let zOut = ce('div');
    zOut.id = 'zOut';
    zOut.className = 'value-box';
    zOut.textContent = '0.00';
    ba(zOut);

    //-//

    // activation button
    let startBtn = ce('button');
    startBtn.id = "startBtn";
    startBtn.textContent = "Initialize Sensors";
    startBtn.onclick = function()
    {
        requestMotionPermission();
    };
    ba(startBtn);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

