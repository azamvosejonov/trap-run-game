// Level 6: Timing is Everything
window.levels[5] = {
    "platforms": [
        { "x": 0, "y": 750, "width": 120, "height": 50, "color": "#1abc9c" },
        { "x": 250, "y": 700, "width": 80, "height": 20, "color": "#95a5a6" },
        // Platform after the moving platform and spike
        { "x": 600, "y": 650, "width": 80, "height": 20, "color": "#95a5a6" },
        { "x": 800, "y": 550, "width": 100, "height": 20, "color": "#95a5a6" },
        { "x": 1000, "y": 450, "width": 200, "height": 40, "color": "#1abc9c" }
    ],
    "movingPlatforms": [
        // Player needs to jump on this and then over the spike
        { "x": 350, "y": 700, "width": 150, "height": 20, "color": "#d35400", "startX": 350, "endX": 500, "speed": 2, "direction": 1 }
    ],
    "spikes": [
        // Spike placed right after the start of the moving platform's path
        { "x": 350, "y": 680, "width": 50, "height": 20, "direction": "up" }
    ],
    "shootingTraps": [],
    "disappearingPlatforms": [],
    "fallingPlatforms": [],
    "blinkingSpikes": [],
    "movingObstacles": [],
    "goal": { "x": 1075, "y": 390, "width": 50, "height": 60 }
};
