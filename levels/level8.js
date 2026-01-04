// Level 8: The Balanced Bridge (Challenging but Fair)
window.levels[7] = {
    "platforms": [
        { "x": 0, "y": 750, "width": 120, "height": 50, "color": "#1abc9c" },
        // A safe, stable platform in the middle to rest
        { "x": 550, "y": 700, "width": 80, "height": 20, "color": "#95a5a6" },
        // The final goal platform
        { "x": 1080, "y": 750, "width": 120, "height": 50, "color": "#1abc9c" }
    ],
    "movingPlatforms": [],
    "spikes": [
        { "x": 130, "y": 780, "width": 940, "height": 20, "direction": "up" }
    ],
    "shootingTraps": [],
    "disappearingPlatforms": [
        // First half of the bridge
        { "x": 180, "y": 700, "width": 90, "height": 20, "color": "#16a085", "visibleTime": 180, "hiddenTime": 100, "timer": 0, "visible": true },
        { "x": 300, "y": 700, "width": 90, "height": 20, "color": "#16a085", "visibleTime": 180, "hiddenTime": 100, "timer": 40, "visible": true },
        { "x": 420, "y": 700, "width": 90, "height": 20, "color": "#16a085", "visibleTime": 180, "hiddenTime": 100, "timer": 80, "visible": true },
        
        // Second half of the bridge
        { "x": 680, "y": 700, "width": 90, "height": 20, "color": "#16a085", "visibleTime": 180, "hiddenTime": 100, "timer": 0, "visible": true },
        { "x": 800, "y": 700, "width": 90, "height": 20, "color": "#16a085", "visibleTime": 180, "hiddenTime": 100, "timer": 40, "visible": true },
        { "x": 920, "y": 700, "width": 90, "height": 20, "color": "#16a085", "visibleTime": 180, "hiddenTime": 100, "timer": 80, "visible": true }
    ],
    "fallingPlatforms": [],
    "blinkingSpikes": [],
    "movingObstacles": [],
    "goal": { "x": 1105, "y": 690, "width": 50, "height": 60 }
};
