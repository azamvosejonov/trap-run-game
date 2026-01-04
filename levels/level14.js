// Level 14: Choose Your Path
window.levels[13] = {
    "platforms": [
        // Start
        { "x": 0, "y": 750, "width": 120, "height": 50, "color": "#1abc9c" },
        // Goal platform
        { "x": 1080, "y": 400, "width": 120, "height": 50, "color": "#1abc9c" },
        // Upper path static platforms
        { "x": 300, "y": 550, "width": 80, "height": 20, "color": "#95a5a6" },
        { "x": 700, "y": 550, "width": 80, "height": 20, "color": "#95a5a6" }
    ],
    "movingPlatforms": [
        // Upper path moving platforms
        { "x": 150, "y": 650, "width": 80, "height": 20, "color": "#d35400", "startX": 150, "endX": 250, "speed": 2, "direction": 1 },
        { "x": 500, "y": 550, "width": 80, "height": 20, "color": "#d35400", "startX": 400, "endX": 600, "speed": 2, "direction": 1 },
        { "x": 900, "y": 450, "width": 80, "height": 20, "color": "#d35400", "startX": 800, "endX": 1000, "speed": 2, "direction": 1 }
    ],
    "spikes": [
        // Spikes guarding the lower path
        { "x": 200, "y": 780, "width": 800, "height": 20, "direction": "up" }
    ],
    "shootingTraps": [],
    "disappearingPlatforms": [],
    "fallingPlatforms": [
        // Lower path: fast but risky
        { "x": 250, "y": 720, "width": 80, "height": 20, "color": "#f1c40f", "falling": false, "fallSpeed": 0 },
        { "x": 450, "y": 720, "width": 80, "height": 20, "color": "#f1c40f", "falling": false, "fallSpeed": 0 },
        { "x": 650, "y": 720, "width": 80, "height": 20, "color": "#f1c40f", "falling": false, "fallSpeed": 0 },
        { "x": 850, "y": 720, "width": 80, "height": 20, "color": "#f1c40f", "falling": false, "fallSpeed": 0 }
    ],
    "blinkingSpikes": [],
    "movingObstacles": [],
    "goal": { "x": 1105, "y": 340, "width": 50, "height": 60 }
};
