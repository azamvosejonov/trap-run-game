// Level 4 - Now You See Me (Adjusted for playability)
window.levels[3] = {
    platforms: [
        { x: 50, y: 600, width: 100, height: 40, color: '#1abc9c' },
        { x: 1050, y: 200, width: 100, height: 40, color: '#1abc9c' },
        
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
    disappearingPlatforms: [
        // Platforms have longer visible time, shorter hidden time, and staggered timers for better flow
        { x: 250, y: 550, width: 120, height: 30, color: '#16a085', visibleTime: 180, hiddenTime: 70, timer: 0, visible: true },
        { x: 450, y: 480, width: 120, height: 30, color: '#16a085', visibleTime: 180, hiddenTime: 70, timer: 60, visible: true },
        { x: 650, y: 410, width: 120, height: 30, color: '#16a085', visibleTime: 180, hiddenTime: 70, timer: 120, visible: true },
        { x: 850, y: 340, width: 120, height: 30, color: '#16a085', visibleTime: 180, hiddenTime: 70, timer: 180, visible: true }
    ],
    fallingPlatforms: [],
    blinkingSpikes: [],
    movingObstacles: [],
    goal: { x: 1080, y: 140, width: 40, height: 60 }
};
