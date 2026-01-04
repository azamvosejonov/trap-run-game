// Level 18: The Blinking Staircase (Reworked)
window.levels[17] = {
    "platforms": [
        // Start
        { "x": 0, "y": 750, "width": 120, "height": 50, "color": "#1abc9c" },
        // Safe resting spots
        { "x": 400, "y": 600, "width": 80, "height": 20, "color": "#95a5a6" },
        { "x": 800, "y": 450, "width": 80, "height": 20, "color": "#95a5a6" },
        // Goal
        { "x": 1080, "y": 300, "width": 120, "height": 50, "color": "#1abc9c" }
    ],
    "movingPlatforms": [],
    "spikes": [
        { "x": 0, "y": 780, "width": 1200, "height": 20, "direction": "up" }
    ],
    "shootingTraps": [],
    "disappearingPlatforms": [
        // Steps that appear and disappear
        { "x": 200, "y": 700, "width": 80, "height": 20, "color": "#16a085", "visibleTime": 100, "hiddenTime": 100, "timer": 0, "visible": true },
        { "x": 300, "y": 650, "width": 80, "height": 20, "color": "#16a085", "visibleTime": 100, "hiddenTime": 100, "timer": 50, "visible": true },
        
        { "x": 500, "y": 550, "width": 80, "height": 20, "color": "#16a085", "visibleTime": 100, "hiddenTime": 100, "timer": 0, "visible": true },
        { "x": 600, "y": 500, "width": 80, "height": 20, "color": "#16a085", "visibleTime": 100, "hiddenTime": 100, "timer": 50, "visible": true },
        { "x": 700, "y": 450, "width": 80, "height": 20, "color": "#16a085", "visibleTime": 100, "hiddenTime": 100, "timer": 100, "visible": true },

        { "x": 900, "y": 400, "width": 80, "height": 20, "color": "#16a085", "visibleTime": 100, "hiddenTime": 100, "timer": 0, "visible": true },
        { "x": 1000, "y": 350, "width": 80, "height": 20, "color": "#16a085", "visibleTime": 100, "hiddenTime": 100, "timer": 50, "visible": true }
    ],
    "fallingPlatforms": [],
    "blinkingSpikes": [
        // Spikes on the safe spots to keep the player moving (optional, removed for fairness)
    ],
    "movingObstacles": [],
    "goal": { "x": 1105, "y": 240, "width": 50, "height": 60 }
};
