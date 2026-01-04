// Level 10: The Gauntlet (Challenging but Fair)
window.levels[9] = {
    "platforms": [
        { "x": 0, "y": 750, "width": 120, "height": 50, "color": "#1abc9c" },
        { "x": 250, "y": 700, "width": 100, "height": 20, "color": "#95a5a6" },
        { "x": 500, "y": 650, "width": 100, "height": 20, "color": "#95a5a6" },
        { "x": 750, "y": 600, "width": 100, "height": 20, "color": "#95a5a6" },
        { "x": 1000, "y": 550, "width": 200, "height": 40, "color": "#1abc9c" }
    ],
    "movingPlatforms": [
        { "x": 350, "y": 600, "width": 100, "height": 20, "color": "#d35400", "startX": 350, "endX": 450, "speed": 2, "direction": 1 }
    ],
    "spikes": [
        { "x": 600, "y": 780, "width": 200, "height": 20, "direction": "up" }
    ],
    "shootingTraps": [
        { "x": 900, "y": 500, "width": 40, "height": 40, "color": "#c0392b", "shootInterval": 100, "timer": 0, "direction": "left" }
    ],
    "disappearingPlatforms": [],
    "fallingPlatforms": [],
    "blinkingSpikes": [],
    "movingObstacles": [],
    "goal": { "x": 1075, "y": 490, "width": 50, "height": 60 }
};
