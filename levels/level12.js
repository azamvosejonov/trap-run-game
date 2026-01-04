// Level 12: The Ascent (Completely Reworked)
window.levels[11] = {
    "platforms": [
        // Start and End
        { "x": 0, "y": 750, "width": 120, "height": 50, "color": "#1abc9c" },
        { "x": 1080, "y": 150, "width": 120, "height": 50, "color": "#1abc9c" },
        
        // Resting platforms between challenges
        { "x": 400, "y": 600, "width": 100, "height": 20, "color": "#95a5a6" },
        { "x": 800, "y": 400, "width": 100, "height": 20, "color": "#95a5a6" }
    ],
    "movingPlatforms": [
        // Vertical lift to the second resting platform
        { "x": 600, "y": 550, "width": 80, "height": 20, "color": "#d35400", "startY": 450, "endY": 550, "speed": 1.5, "direction": 1, "vertical": true }
    ],
    "spikes": [
        { "x": 0, "y": 780, "width": 1200, "height": 20, "direction": "up" }
    ],
    "shootingTraps": [],
    "disappearingPlatforms": [],
    "fallingPlatforms": [
        // First set of falling platforms
        { "x": 200, "y": 700, "width": 80, "height": 20, "color": "#f1c40f", "falling": false, "fallSpeed": 0 },
        { "x": 300, "y": 650, "width": 80, "height": 20, "color": "#f1c40f", "falling": false, "fallSpeed": 0 },
        // Second set after the lift
        { "x": 900, "y": 350, "width": 80, "height": 20, "color": "#f1c40f", "falling": false, "fallSpeed": 0 },
        { "x": 1000, "y": 300, "width": 80, "height": 20, "color": "#f1c40f", "falling": false, "fallSpeed": 0 }
    ],
    "blinkingSpikes": [],
    "movingObstacles": [],
    "goal": { "x": 1105, "y": 90, "width": 50, "height": 60 }
};
