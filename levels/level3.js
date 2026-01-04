// Level 3 - The Gauntlet
window.levels[2] = {
    platforms: [
        { x: 50, y: 600, width: 100, height: 40, color: '#9b59b6' },
        { x: 300, y: 500, width: 80, height: 30, color: '#9b59b6' },
        { x: 550, y: 400, width: 80, height: 30, color: '#9b59b6' },
        { x: 800, y: 300, width: 80, height: 30, color: '#9b59b6' },
        { x: 1050, y: 200, width: 100, height: 40, color: '#9b59b6' },
        
        // Borders
        { x: 0, y: 0, width: 1200, height: 20, color: '#2c3e50' },
        { x: 0, y: 780, width: 1200, height: 20, color: '#2c3e50' },
        { x: 0, y: 0, width: 20, height: 800, color: '#2c3e50' },
        { x: 1180, y: 0, width: 20, height: 800, color: '#2c3e50' }
    ],
    movingPlatforms: [],
    spikes: [
        { x: 0, y: 750, width: 1200, height: 30, direction: 'up' }
    ],
    shootingTraps: [
        { x: 1150, y: 450, width: 40, height: 40, color: '#8e44ad', shootInterval: 120, direction: 'left' },
        { x: 1150, y: 350, width: 40, height: 40, color: '#8e44ad', shootInterval: 120, direction: 'left' }
    ],
    disappearingPlatforms: [],
    fallingPlatforms: [],
    blinkingSpikes: [],
    movingObstacles: [
        { x: 420, y: 200, width: 40, height: 40, color: '#c0392b', startX: 420, endX: 420, startY: 200, endY: 600, speed: 6, direction: 1 }
    ],
    goal: { x: 1080, y: 140, width: 40, height: 60 }
};
