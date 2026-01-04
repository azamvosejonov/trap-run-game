// Level 9: The Moving Bridge (Simplified and Playable)
window.levels[8] = {
    "platforms": [
        { "x": 0, "y": 750, "width": 120, "height": 50, "color": "#1abc9c" },
        // A stable platform in the middle
        { "x": 550, "y": 600, "width": 100, "height": 20, "color": "#95a5a6" },
        // The goal platform
        { "x": 1080, "y": 450, "width": 120, "height": 50, "color": "#1abc9c" }
    ],
    "movingPlatforms": [
        // Platform 1: Moving from start to middle
        { "x": 150, "y": 700, "width": 100, "height": 20, "color": "#d35400", "startX": 150, "endX": 450, "speed": 2, "direction": 1 },
        // Platform 2: Moving from middle to goal
        { "x": 700, "y": 550, "width": 100, "height": 20, "color": "#d35400", "startX": 700, "endX": 950, "speed": 2, "direction": 1 }
    ],
    "spikes": [
        // Spikes below to punish falling
        { "x": 200, "y": 780, "width": 800, "height": 20, "direction": "up" }
    ],
    "shootingTraps": [],
    "disappearingPlatforms": [],
    "fallingPlatforms": [],
    "blinkingSpikes": [],
    "movingObstacles": [],
    "goal": { "x": 1105, "y": 390, "width": 50, "height": 60 }
};
