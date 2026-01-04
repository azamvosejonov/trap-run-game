// Level 16: The Patrolled Hallway
window.levels[15] = {
    "platforms": [
        // Start
        { "x": 0, "y": 750, "width": 150, "height": 50, "color": "#1abc9c" },
        // First patrolled platform
        { "x": 200, "y": 750, "width": 300, "height": 50, "color": "#95a5a6" },
        // Second patrolled platform
        { "x": 600, "y": 750, "width": 300, "height": 50, "color": "#95a5a6" },
        // Goal platform
        { "x": 1000, "y": 650, "width": 150, "height": 50, "color": "#1abc9c" }
    ],
    "movingPlatforms": [],
    "spikes": [
        { "x": 150, "y": 780, "width": 50, "height": 20, "direction": "up" },
        { "x": 500, "y": 780, "width": 100, "height": 20, "direction": "up" },
        { "x": 900, "y": 780, "width": 100, "height": 20, "direction": "up" }
    ],
    "shootingTraps": [],
    "disappearingPlatforms": [],
    "fallingPlatforms": [],
    "blinkingSpikes": [],
    "movingObstacles": [
        // Enemy 1: Medium speed
        { "x": 250, "y": 710, "width": 40, "height": 40, "color": "#c0392b", "startX": 200, "endX": 460, "speed": 4, "direction": 1 },
        // Enemy 2: Fast speed
        { "x": 650, "y": 710, "width": 40, "height": 40, "color": "#c0392b", "startX": 600, "endX": 860, "speed": 6, "direction": 1 }
    ],
    "goal": { "x": 1050, "y": 590, "width": 50, "height": 60 }
};
