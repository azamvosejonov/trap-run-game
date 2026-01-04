// Level 11: The Wrong Goal
window.levels[10] = {
    "platforms": [
        { "x": 0, "y": 750, "width": 120, "height": 50, "color": "#1abc9c" },
        // Path to the fake goal
        { "x": 200, "y": 700, "width": 100, "height": 20, "color": "#95a5a6" },
        { "x": 400, "y": 650, "width": 100, "height": 20, "color": "#95a5a6" },
        // The real goal platform, hidden below
        { "x": 800, "y": 750, "width": 100, "height": 40, "color": "#2ecc71" }
    ],
    "movingPlatforms": [
        { "x": 600, "y": 600, "width": 100, "height": 20, "color": "#d35400", "startX": 550, "endX": 750, "speed": 2, "direction": 1 }
    ],
    "spikes": [
        // Trap under the fake goal
        { "x": 900, "y": 780, "width": 200, "height": 20, "direction": "up" }
    ],
    "shootingTraps": [],
    "disappearingPlatforms": [],
    "fallingPlatforms": [
        // The platform before the fake goal is a trap
        { "x": 950, "y": 550, "width": 100, "height": 20, "color": "#f1c40f", "falling": false, "fallSpeed": 0 }
    ],
    "blinkingSpikes": [],
    "movingObstacles": [],
    // A fake goal to mislead the player
    "fakeGoal": { "x": 1100, "y": 490, "width": 50, "height": 60 },
    "goal": { "x": 825, "y": 690, "width": 50, "height": 60 }
};
