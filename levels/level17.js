// Level 17: The Two Paths (Reworked)
window.levels[16] = {
    "platforms": [
        // Start and Goal
        { "x": 0, "y": 750, "width": 120, "height": 50, "color": "#1abc9c" },
        { "x": 1080, "y": 400, "width": 120, "height": 50, "color": "#1abc9c" },

        // Upper Path - stable platforms
        { "x": 300, "y": 550, "width": 80, "height": 20, "color": "#95a5a6" },
        { "x": 700, "y": 550, "width": 80, "height": 20, "color": "#95a5a6" },

        // Lower Path - stable platforms
        { "x": 250, "y": 720, "width": 80, "height": 20, "color": "#bdc3c7" },
        { "x": 850, "y": 720, "width": 80, "height": 20, "color": "#bdc3c7" }
    ],
    "movingPlatforms": [
        // Upper Path - moving platform
        { "x": 500, "y": 550, "width": 80, "height": 20, "color": "#d35400", "startX": 450, "endX": 650, "speed": 2, "direction": 1 }
    ],
    "spikes": [
        // Spikes for the lower path
        { "x": 350, "y": 780, "width": 450, "height": 20, "direction": "up" }
    ],
    "shootingTraps": [
        // Trap for the lower path
        { "x": 800, "y": 680, "width": 40, "height": 40, "color": "#c0392b", "shootInterval": 150, "timer": 0, "direction": "left" }
    ],
    "disappearingPlatforms": [
        // Upper Path - disappearing platform
        { "x": 900, "y": 450, "width": 80, "height": 20, "color": "#16a085", "visibleTime": 120, "hiddenTime": 100, "timer": 0, "visible": true }
    ],
    "fallingPlatforms": [
        // Lower Path - falling platforms
        { "x": 400, "y": 720, "width": 80, "height": 20, "color": "#f1c40f", "falling": false, "fallSpeed": 0 },
        { "x": 550, "y": 720, "width": 80, "height": 20, "color": "#f1c40f", "falling": false, "fallSpeed": 0 },
        { "x": 700, "y": 720, "width": 80, "height": 20, "color": "#f1c40f", "falling": false, "fallSpeed": 0 }
    ],
    "blinkingSpikes": [],
    "movingObstacles": [],
    "goal": { "x": 1105, "y": 340, "width": 50, "height": 60 }
};
