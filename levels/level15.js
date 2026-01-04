// Level 15: The Descent (Complex and Playable)
window.levels[14] = {
    "platforms": [
        // Starting platform at the top
        { "x": 50, "y": 150, "width": 120, "height": 50, "color": "#1abc9c" },
        // The final safe platform at the bottom
        { "x": 1050, "y": 750, "width": 150, "height": 50, "color": "#1abc9c" }
    ],
    "movingPlatforms": [],
    "spikes": [
        // The entire floor is a spike pit, except for the goal area
        { "x": 0, "y": 780, "width": 1000, "height": 20, "direction": "up" }
    ],
    "shootingTraps": [],
    "disappearingPlatforms": [],
    "fallingPlatforms": [
        // A "staircase" of falling platforms leading down
        { "x": 250, "y": 250, "width": 80, "height": 20, "color": "#f1c40f", "falling": false, "fallSpeed": 0 },
        { "x": 400, "y": 350, "width": 80, "height": 20, "color": "#f1c40f", "falling": false, "fallSpeed": 0 },
        { "x": 550, "y": 450, "width": 80, "height": 20, "color": "#f1c40f", "falling": false, "fallSpeed": 0 },
        { "x": 700, "y": 550, "width": 80, "height": 20, "color": "#f1c40f", "falling": false, "fallSpeed": 0 },
        { "x": 850, "y": 650, "width": 80, "height": 20, "color": "#f1c40f", "falling": false, "fallSpeed": 0 }
    ],
    "blinkingSpikes": [],
    "movingObstacles": [],
    "goal": { "x": 1100, "y": 690, "width": 50, "height": 60 }
};
