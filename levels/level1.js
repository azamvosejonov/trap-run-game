// Level 1 - Welcome to Hell (Tutorial)
window.levels[0] = {
    platforms: [
        { x: 50, y: 600, width: 150, height: 40, color: '#3498db' }, // Start
        { x: 300, y: 550, width: 100, height: 40, color: '#3498db' },
        { x: 500, y: 500, width: 100, height: 40, color: '#3498db' },
        { x: 700, y: 450, width: 100, height: 40, color: '#3498db' },
        { x: 950, y: 400, width: 150, height: 40, color: '#3498db' }, // Goal area
        
        // Borders
        { x: 0, y: 0, width: 1200, height: 20, color: '#2c3e50' },
        { x: 0, y: 780, width: 1200, height: 20, color: '#2c3e50' },
        { x: 0, y: 0, width: 20, height: 800, color: '#2c3e50' },
        { x: 1180, y: 0, width: 20, height: 800, color: '#2c3e50' }
    ],
    movingPlatforms: [],
    spikes: [
        // A simple spike pit to jump over
        { x: 400, y: 750, width: 100, height: 30, direction: 'up' }
    ],
    shootingTraps: [],
    disappearingPlatforms: [],
    fallingPlatforms: [
        // The platform before the goal falls!
        { x: 820, y: 425, width: 80, height: 20, color: '#3498db', falling: false }
    ],
    blinkingSpikes: [],
    movingObstacles: [],
    goal: { x: 1000, y: 340, width: 40, height: 60 }
};
