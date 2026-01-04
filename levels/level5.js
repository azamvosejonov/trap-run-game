// Level 5 - Don't Look Down
window.levels[4] = {
    platforms: [
        { x: 50, y: 600, width: 100, height: 40, color: '#7f8c8d' },
        { x: 1050, y: 200, width: 100, height: 40, color: '#7f8c8d' },
        
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
    shootingTraps: [],
    disappearingPlatforms: [],
    fallingPlatforms: [
        { x: 200, y: 550, width: 100, height: 30, color: '#95a5a6', falling: false },
        { x: 350, y: 450, width: 100, height: 30, color: '#95a5a6', falling: false },
        { x: 500, y: 350, width: 100, height: 30, color: '#95a5a6', falling: false },
        { x: 650, y: 250, width: 100, height: 30, color: '#95a5a6', falling: false },
        { x: 800, y: 250, width: 100, height: 30, color: '#95a5a6', falling: false }
    ],
    blinkingSpikes: [
        { x: 900, y: 250, width: 100, height: 30, direction: 'up', visibleTime: 100, hiddenTime: 100, visible: true }
    ],
    movingObstacles: [],
    goal: { x: 1080, y: 140, width: 40, height: 60 }
};
