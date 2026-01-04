// Level 19: The Conveyor Belt (Reworked Again)
window.levels[18] = {
    "platforms": [
        // Start
        { "x": 0, "y": 750, "width": 120, "height": 50, "color": "#1abc9c" },
        // Goal
        { "x": 1080, "y": 750, "width": 120, "height": 50, "color": "#1abc9c" }
    ],
    "movingPlatforms": [
        // A series of platforms moving left, forcing the player to keep moving right
        { "x": 200, "y": 700, "width": 100, "height": 20, "color": "#d35400", "startX": 150, "endX": 350, "speed": -2, "direction": 1 },
        { "x": 400, "y": 700, "width": 100, "height": 20, "color": "#d35400", "startX": 350, "endX": 550, "speed": -2, "direction": 1 },
        { "x": 600, "y": 700, "width": 100, "height": 20, "color": "#d35400", "startX": 550, "endX": 750, "speed": -2, "direction": 1 },
        { "x": 800, "y": 700, "width": 100, "height": 20, "color": "#d35400", "startX": 750, "endX": 950, "speed": -2, "direction": 1 }
    ],
    "spikes": [
        { "x": 0, "y": 780, "width": 1200, "height": 20, "direction": "up" }
    ],
    "shootingTraps": [],
    "disappearingPlatforms": [],
    "fallingPlatforms": [],
    "blinkingSpikes": [],
    "movingObstacles": [
        // Stationary obstacles on the "conveyor belt" path
        { "x": 300, "y": 650, "width": 30, "height": 30, "color": "#c0392b", "startX": 300, "endX": 300, "speed": 0, "direction": 1 },
        { "x": 500, "y": 650, "width": 30, "height": 30, "color": "#c0392b", "startX": 500, "endX": 500, "speed": 0, "direction": 1 },
        { "x": 700, "y": 650, "width": 30, "height": 30, "color": "#c0392b", "startX": 700, "endX": 700, "speed": 0, "direction": 1 },
        { "x": 900, "y": 650, "width": 30, "height": 30, "color": "#c0392b", "startX": 900, "endX": 900, "speed": 0, "direction": 1 }
    ],
    "goal": { "x": 1105, "y": 690, "width": 50, "height": 60 }
};
