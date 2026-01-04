// Level 20: The Grand Finale (Challenging but Clear)
window.levels[19] = {
    "platforms": [
        // Start Area (Bottom Left)
        { "x": 0, "y": 750, "width": 150, "height": 50, "color": "#1abc9c" },
        
        // Safe Zone (Bottom Right)
        { "x": 1050, "y": 600, "width": 150, "height": 20, "color": "#95a5a6" },
        
        // Safe Zone (Top Right)
        { "x": 1050, "y": 250, "width": 150, "height": 20, "color": "#95a5a6" },
        
        // Goal Area (Top Left)
        { "x": 0, "y": 150, "width": 150, "height": 50, "color": "#1abc9c" }
    ],
    "movingPlatforms": [
        // The Long Ride Right (Bottom)
        { "x": 200, "y": 700, "width": 120, "height": 20, "color": "#d35400", "startX": 180, "endX": 1000, "speed": 3, "direction": 1 },
        
        // The Long Ride Left (Top)
        { "x": 900, "y": 200, "width": 120, "height": 20, "color": "#d35400", "startX": 150, "endX": 1000, "speed": 3, "direction": -1 }
    ],
    "spikes": [
        // Floor spikes
        { "x": 150, "y": 780, "width": 1050, "height": 20, "direction": "up" }
    ],
    "shootingTraps": [],
    "disappearingPlatforms": [
        // The Climb Up (Right Side) - Generous timing
        { "x": 1050, "y": 520, "width": 100, "height": 20, "color": "#16a085", "visibleTime": 150, "hiddenTime": 100, "timer": 0, "visible": true },
        { "x": 1050, "y": 430, "width": 100, "height": 20, "color": "#16a085", "visibleTime": 150, "hiddenTime": 100, "timer": 50, "visible": true },
        { "x": 1050, "y": 340, "width": 100, "height": 20, "color": "#16a085", "visibleTime": 150, "hiddenTime": 100, "timer": 100, "visible": true }
    ],
    "fallingPlatforms": [],
    "blinkingSpikes": [],
    "movingObstacles": [],
    "goal": { "x": 50, "y": 90, "width": 50, "height": 60 }
};
