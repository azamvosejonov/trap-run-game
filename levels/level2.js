// Level 2 - Moving Targets
window.levels[1] = {
    platforms: [
        { x: 50, y: 600, width: 100, height: 40, color: '#e67e22' },
        { x: 1050, y: 300, width: 100, height: 40, color: '#e67e22' },
        
        // Borders
        { x: 0, y: 0, width: 1200, height: 20, color: '#2c3e50' },
        { x: 0, y: 780, width: 1200, height: 20, color: '#2c3e50' },
        { x: 0, y: 0, width: 20, height: 800, color: '#2c3e50' },
        { x: 1180, y: 0, width: 20, height: 800, color: '#2c3e50' }
    ],
    movingPlatforms: [
        { x: 200, y: 550, width: 100, height: 20, color: '#d35400', startX: 200, endX: 400, speed: 3, direction: 1 },
        { x: 500, y: 450, width: 100, height: 20, color: '#d35400', startX: 500, endX: 700, speed: 4, direction: 1 },
        { x: 800, y: 350, width: 100, height: 20, color: '#d35400', startX: 800, endX: 1000, speed: 5, direction: 1 }
    ],
    spikes: [
        { x: 200, y: 750, width: 800, height: 30, direction: 'up' }
    ],
    shootingTraps: [],
    disappearingPlatforms: [],
    fallingPlatforms: [],
    blinkingSpikes: [],
    movingObstacles: [],
    goal: { x: 1080, y: 240, width: 40, height: 60 }
};
