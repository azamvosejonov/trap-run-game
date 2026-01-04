// Game Configuration
const config = {
    width: 1200,
    height: 800,
    gravity: 0.6,
    jumpPower: -15,
    moveSpeed: 6,
    friction: 0.8,
    maxJumpHeight: 300
};

// Canvas Setup
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = config.width;
canvas.height = config.height;

// Responsive canvas
function resizeCanvas() {
    const container = canvas.parentElement;
    const isMobile = window.innerWidth < 768;
    
    if (isMobile) {
        const maxWidth = window.innerWidth - 20;
        const maxHeight = window.innerHeight - 20;
        const aspectRatio = config.width / config.height;
        
        let newWidth = maxWidth;
        let newHeight = newWidth / aspectRatio;
        
        if (newHeight > maxHeight) {
            newHeight = maxHeight;
            newWidth = newHeight * aspectRatio;
        }
        
        canvas.style.width = newWidth + 'px';
        canvas.style.height = newHeight + 'px';
    } else {
        canvas.style.width = config.width + 'px';
        canvas.style.height = config.height + 'px';
    }
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// Game State
let gameState = 'level_select'; // 'level_select', 'playing', 'gameover', 'win'
let currentLevelIndex = 0;
let deaths = 0;
let selectedLevel = 0;
let levelSelectCameraY = 0;
let levelSelectTotalHeight = 0;

// Level Doors for selection screen
const levelDoors = [];
if (window.levels) {
    const levelsPerRow = 5;
    const doorWidth = 80;
    const doorHeight = 120;
    const doorPadding = 40;
    const totalRows = Math.ceil(window.levels.length / levelsPerRow);
    const startX = (config.width - (levelsPerRow * (doorWidth + doorPadding) - doorPadding)) / 2;
    const startY = 200; // Start Y position for the doors grid
    levelSelectTotalHeight = totalRows * (doorHeight + doorPadding);

    for (let i = 0; i < window.levels.length; i++) {
        const row = Math.floor(i / levelsPerRow);
        const col = i % levelsPerRow;
        levelDoors.push({
            x: startX + col * (doorWidth + doorPadding),
            y: startY + row * (doorHeight + doorPadding),
            width: doorWidth,
            height: doorHeight,
            levelIndex: i
        });
    }
}


// Yandex Games SDK Integration & Progress System
let yandexStorage = null;
let isYandexGames = false;

// STORAGE KEY CHANGED TO FORCE RESET
const STORAGE_KEY = 'levelDevilProgress_v2'; 

// Default progress: Only Level 1 is unlocked
let levelProgress = {
    completed: [],
    unlocked: [1] 
};

// Initialize SDK and Load Progress
if (typeof window !== 'undefined' && window.YaGames) {
    isYandexGames = true;
    YaGames.init().then(ysdk => {
        console.log('Yandex Games SDK initialized');
        ysdk.features.LoadingAPI?.ready();
        yandexStorage = ysdk.getPlayer();
        loadProgress();
    }).catch(err => {
        console.error('Yandex Games SDK initialization error:', err);
        loadProgress();
    });
} else {
    loadProgress();
}

async function loadProgress() {
    // Try to load from Yandex
    if (isYandexGames && yandexStorage) {
        try {
            const data = await yandexStorage.getData();
            if (data && data[STORAGE_KEY]) {
                levelProgress = data[STORAGE_KEY];
                console.log("Progress loaded from Yandex:", levelProgress);
                return;
            }
        } catch (err) {
            console.error("Yandex load error", err);
        }
    }
    
    // Fallback to LocalStorage
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
        try {
            levelProgress = JSON.parse(saved);
            console.log("Progress loaded from LocalStorage:", levelProgress);
        } catch (e) {
            console.error("Error parsing save data", e);
            // If error, reset to default
            levelProgress = { completed: [], unlocked: [1] };
        }
    } else {
        console.log("No save data found, starting fresh.");
        // Ensure default is set
        levelProgress = { completed: [], unlocked: [1] };
    }
}

async function saveProgress() {
    // Logic: If we beat level 1 (index 0), we unlock level 2.
    const completedLevelNum = currentLevelIndex + 1;
    const nextLevelNum = currentLevelIndex + 2;

    // Add to completed list if not already there
    if (!levelProgress.completed.includes(completedLevelNum)) {
        levelProgress.completed.push(completedLevelNum);
    }

    // Unlock next level if it exists and isn't already unlocked
    if (nextLevelNum <= window.levels.length) {
        if (!levelProgress.unlocked.includes(nextLevelNum)) {
            levelProgress.unlocked.push(nextLevelNum);
        }
    }
    
    // Save to storage
    if (isYandexGames && yandexStorage) {
        try {
            let data = {};
            data[STORAGE_KEY] = levelProgress;
            await yandexStorage.setData(data);
        } catch (err) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(levelProgress));
        }
    } else {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(levelProgress));
    }
}

// Input
const keys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false,
    KeyW: false,
    KeyS: false,
    KeyA: false,
    KeyD: false,
    Space: false
};

window.addEventListener('keydown', (e) => {
    if (gameState === 'playing') {
        if (keys.hasOwnProperty(e.code) || e.code === 'Space') keys[e.code] = true;
    } else if (gameState === 'level_select') {
        const levelsPerRow = 5;
        if (e.code === 'ArrowLeft') {
            selectedLevel = Math.max(0, selectedLevel - 1);
        } else if (e.code === 'ArrowRight') {
            selectedLevel = Math.min(window.levels.length - 1, selectedLevel + 1);
        } else if (e.code === 'ArrowUp') {
            selectedLevel = Math.max(0, selectedLevel - levelsPerRow);
        } else if (e.code === 'ArrowDown') {
            selectedLevel = Math.min(window.levels.length - 1, selectedLevel + levelsPerRow);
        } else if (e.code === 'Space' || e.code === 'Enter') {
            // Check if the selected level is unlocked
            const levelNum = selectedLevel + 1;
            if (levelProgress.unlocked.includes(levelNum)) {
                startGame(selectedLevel);
            }
        }
    }

    if (e.code === 'Space') {
        if (gameState === 'gameover') {
            resetLevel();
        } else if (gameState === 'win') {
            gameState = 'level_select';
        }
    }
});


window.addEventListener('keyup', (e) => {
    if (keys.hasOwnProperty(e.code) || e.code === 'Space') keys[e.code] = false;
});

canvas.addEventListener('click', (e) => {
    if (gameState !== 'level_select') return;

    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const mouseX = (e.clientX - rect.left) * scaleX;
    const mouseY = (e.clientY - rect.top) * scaleY;

    for (const door of levelDoors) {
        const doorY = door.y - levelSelectCameraY;
        if (mouseX > door.x && mouseX < door.x + door.width &&
            mouseY > doorY && mouseY < doorY + door.height) {
            
            const levelNum = door.levelIndex + 1;
            // Only start if unlocked
            if (levelProgress.unlocked.includes(levelNum)) {
                startGame(door.levelIndex);
            }
        }
    }
});

canvas.addEventListener('wheel', (e) => {
    if (gameState !== 'level_select') return;
    e.preventDefault();
    levelSelectCameraY += e.deltaY * 0.5;
    const maxScroll = levelSelectTotalHeight - config.height + 300;
    levelSelectCameraY = Math.max(0, Math.min(maxScroll, levelSelectCameraY));
});


// Player
const player = {
    x: 50,
    y: 600,
    width: 30,
    height: 30,
    vx: 0,
    vy: 0,
    onGround: false,
    color: '#e74c3c',
    dead: false,
    facingRight: true
};

// Level Objects
let platforms = [], movingPlatforms = [], spikes = [], shootingTraps = [], disappearingPlatforms = [], fallingPlatforms = [], blinkingSpikes = [], movingObstacles = [], projectiles = [], goal = null, particles = [];

// Game Flow
function startGame(levelIndex) {
    // Double check if unlocked
    if (!levelProgress.unlocked.includes(levelIndex + 1)) {
        return;
    }

    gameState = 'playing';
    currentLevelIndex = levelIndex;
    deaths = 0;
    document.getElementById('gameOverlay').style.display = 'none';
    loadLevel(currentLevelIndex);
}

function loadLevel(index) {
    if (index >= window.levels.length) {
        gameState = 'win';
        document.getElementById('overlayTitle').innerText = 'YOU WIN!';
        document.getElementById('overlayText').innerText = `All levels completed!`;
        document.getElementById('restartBtn').innerText = 'Level Select';
        document.getElementById('restartBtn').style.display = 'block';
        document.getElementById('gameOverlay').style.display = 'flex';
        return;
    }

    const levelData = window.levels[index];
    if (!levelData) {
        console.error(`Level ${index + 1} data not found!`);
        gameState = 'level_select';
        return;
    }

    platforms = JSON.parse(JSON.stringify(levelData.platforms || []));
    movingPlatforms = JSON.parse(JSON.stringify(levelData.movingPlatforms || []));
    spikes = JSON.parse(JSON.stringify(levelData.spikes || []));
    shootingTraps = JSON.parse(JSON.stringify(levelData.shootingTraps || []));
    disappearingPlatforms = JSON.parse(JSON.stringify(levelData.disappearingPlatforms || []));
    fallingPlatforms = JSON.parse(JSON.stringify(levelData.fallingPlatforms || []));
    blinkingSpikes = JSON.parse(JSON.stringify(levelData.blinkingSpikes || []));
    movingObstacles = JSON.parse(JSON.stringify(levelData.movingObstacles || []));
    goal = JSON.parse(JSON.stringify(levelData.goal));
    
    projectiles = [];
    particles = [];
    
    player.x = 50;
    player.y = 650;
    if (platforms.length > 0) {
        player.x = platforms[0].x + 10;
        player.y = platforms[0].y - player.height - 10;
    }
    
    player.vx = 0;
    player.vy = 0;
    player.dead = false;
    
    document.getElementById('level').innerText = index + 1;
    document.getElementById('deaths').innerText = deaths;
}

function resetLevel() {
    gameState = 'playing';
    document.getElementById('gameOverlay').style.display = 'none';
    loadLevel(currentLevelIndex);
}

function playerDeath() {
    if (player.dead) return;
    player.dead = true;
    deaths++;
    document.getElementById('deaths').innerText = deaths;
    
    for (let i = 0; i < 30; i++) {
        particles.push({
            x: player.x + player.width/2,
            y: player.y + player.height/2,
            vx: (Math.random() - 0.5) * 15,
            vy: (Math.random() - 0.5) * 15,
            life: 40 + Math.random() * 20,
            color: player.color,
            size: Math.random() * 6 + 2
        });
    }
    
    setTimeout(() => {
        resetLevel();
    }, 600);
}

// Update Functions
function updatePlaying() {
    if (player.dead) return;

    // Player Movement
    if (keys.ArrowLeft || keys.KeyA) {
        player.vx -= 1;
        player.facingRight = false;
    }
    if (keys.ArrowRight || keys.KeyD) {
        player.vx += 1;
        player.facingRight = true;
    }
    
    player.vx *= config.friction;
    player.x += player.vx;
    
    // Jump
    if ((keys.Space || keys.ArrowUp || keys.KeyW) && player.onGround) {
        player.vy = config.jumpPower;
        player.onGround = false;
        for(let i=0; i<5; i++) particles.push({ x: player.x + player.width/2, y: player.y + player.height, vx: (Math.random() - 0.5) * 4, vy: Math.random() * 2, life: 20, color: '#fff', size: 3 });
    }
    
    player.vy += config.gravity;
    player.y += player.vy;
    
    // Collision Detection
    player.onGround = false;
    
    platforms.forEach(p => resolvePlatformCollision(p));
    movingPlatforms.forEach(p => {
        if (p.vertical) {
            p.y += p.speed * p.direction;
            if (p.y >= p.endY || p.y <= p.startY) p.direction *= -1;
        } else {
            p.x += p.speed * p.direction;
            if (p.x >= p.endX || p.x <= p.startX) p.direction *= -1;
        }
        if (resolvePlatformCollision(p)) {
            if (!p.vertical) {
                player.x += p.speed * p.direction;
            }
        }
    });
    disappearingPlatforms.forEach(p => {
        p.timer = (p.timer || 0) + 1;
        if (p.visible) {
            if (p.timer > p.visibleTime) { p.visible = false; p.timer = 0; }
            resolvePlatformCollision(p);
        } else {
            if (p.timer > p.hiddenTime) { p.visible = true; p.timer = 0; }
        }
    });
    fallingPlatforms.forEach(p => {
        if (p.falling) { p.fallSpeed = (p.fallSpeed || 0) + 0.5; p.y += p.fallSpeed; }
        if (resolvePlatformCollision(p)) p.falling = true;
    });
    
    spikes.forEach(s => { if (checkCollision(player, s)) playerDeath(); });
    blinkingSpikes.forEach(s => {
        s.timer = (s.timer || 0) + 1;
        if (s.visible) {
            if (s.timer > s.visibleTime) { s.visible = false; s.timer = 0; }
            if (checkCollision(player, s)) playerDeath();
        } else {
            if (s.timer > s.hiddenTime) { s.visible = true; s.timer = 0; }
        }
    });
    movingObstacles.forEach(o => {
        o.x += o.speed * o.direction;
        if (o.x >= o.endX || o.x <= o.startX) o.direction *= -1;
        if (checkCollision(player, o)) playerDeath();
    });
    
    shootingTraps.forEach(t => {
        t.timer = (t.timer || 0) + 1;
        if (t.timer > t.shootInterval) {
            t.timer = 0;
            let vx = 0, vy = 0;
            if (t.direction === 'left') vx = -5; else if (t.direction === 'right') vx = 5; else if (t.direction === 'up') vy = -5; else if (t.direction === 'down') vy = 5;
            projectiles.push({ x: t.x + t.width/2 - 5, y: t.y + t.height/2 - 5, vx, vy, width: 10, height: 10, color: t.color });
        }
    });

    for (let i = projectiles.length - 1; i >= 0; i--) {
        let p = projectiles[i];
        p.x += p.vx; p.y += p.vy;
        if (checkCollision(player, p)) playerDeath();
        if (p.x < 0 || p.x > config.width || p.y < 0 || p.y > config.height) projectiles.splice(i, 1);
    }
    
    if (goal && checkCollision(player, goal)) {
        for(let i=0; i<20; i++) particles.push({ x: goal.x + goal.width/2, y: goal.y + goal.height/2, vx: (Math.random() - 0.5) * 10, vy: (Math.random() - 0.5) * 10, life: 50, color: '#fdcb6e', size: 5 });
        
        // SAVE PROGRESS HERE
        saveProgress();
        
        setTimeout(() => { gameState = 'level_select'; }, 500);
    }
    
    if (player.y > config.height) playerDeath();
    if (player.x < 0) player.x = 0;
    if (player.x + player.width > config.width) player.x = config.width - player.width;
    
    for (let i = particles.length - 1; i >= 0; i--) {
        let p = particles[i];
        p.x += p.vx; p.y += p.vy; p.life--; p.size *= 0.95;
        if (p.life <= 0 || p.size < 0.5) particles.splice(i, 1);
    }
}

function resolvePlatformCollision(p) {
    if (player.x < p.x + p.width && player.x + player.width > p.x && player.y < p.y + p.height && player.y + player.height > p.y) {
        const dx = (player.x + player.width/2) - (p.x + p.width/2);
        const dy = (player.y + player.height/2) - (p.y + p.height/2);
        const width = (player.width + p.width) / 2;
        const height = (player.height + p.height) / 2;
        const crossWidth = width * dy;
        const crossHeight = height * dx;
        
        if (Math.abs(dx) <= width && Math.abs(dy) <= height) {
            if (crossWidth > crossHeight) {
                if (crossWidth > -crossHeight) { player.y = p.y + p.height; player.vy = 0; }
                else { player.x = p.x - player.width; player.vx = 0; }
            } else {
                if (crossWidth > -crossHeight) { player.x = p.x + p.width; player.vx = 0; }
                else { player.y = p.y - player.height; player.vy = 0; player.onGround = true; return true; }
            }
        }
    }
    return false;
}

function checkCollision(r1, r2) {
    return (r1.x < r2.x + r2.width && r1.x + r1.width > r2.x && r1.y < r2.y + r2.height && r1.y + r1.height > r2.y);
}

// Draw Functions
function drawPlaying() {
    platforms.forEach(p => drawPlatform(p));
    movingPlatforms.forEach(p => drawPlatform(p, true));
    disappearingPlatforms.forEach(p => { if (p.visible) { ctx.globalAlpha = 0.8; drawPlatform(p); ctx.globalAlpha = 1.0; } });
    fallingPlatforms.forEach(p => drawPlatform(p));
    spikes.forEach(s => drawSpike(s));
    blinkingSpikes.forEach(s => { if (s.visible) drawSpike(s); });
    movingObstacles.forEach(o => drawObstacle(o));
    shootingTraps.forEach(t => drawTrap(t));
    projectiles.forEach(p => { ctx.fillStyle = p.color || '#fff'; ctx.beginPath(); ctx.arc(p.x + p.width/2, p.y + p.height/2, p.width/2, 0, Math.PI * 2); ctx.fill(); });
    if (goal) drawGoal(goal);
    if (!player.dead) drawPlayer(player.x, player.y, player.width, player.height, player.color, player.dead);
    particles.forEach(p => { ctx.fillStyle = p.color; ctx.globalAlpha = p.life / 30; ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2); ctx.fill(); ctx.globalAlpha = 1.0; });
}

function drawLevelSelect() {
    ctx.save();
    ctx.translate(0, -levelSelectCameraY);

    for (const door of levelDoors) {
        const levelNum = door.levelIndex + 1;
        const isUnlocked = levelProgress.unlocked.includes(levelNum);
        const isCompleted = levelProgress.completed.includes(levelNum);

        if (isUnlocked) {
            // Draw Wood Door (Unlocked)
            drawGoal({ x: door.x, y: door.y, width: door.width, height: door.height });
            
            ctx.fillStyle = 'white';
            ctx.font = '30px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(levelNum, door.x + door.width / 2, door.y + door.height / 2);

            if (isCompleted) {
                ctx.fillStyle = '#2ecc71';
                ctx.font = '20px Arial';
                ctx.fillText('✔', door.x + door.width / 2, door.y + door.height - 20);
            }
        } else {
            // Draw Metal Door (Locked)
            ctx.fillStyle = '#7f8c8d'; // Grey metal
            ctx.fillRect(door.x, door.y, door.width, door.height);
            
            // Rivets
            ctx.fillStyle = '#95a5a6';
            ctx.beginPath(); ctx.arc(door.x + 10, door.y + 10, 3, 0, Math.PI*2); ctx.fill();
            ctx.beginPath(); ctx.arc(door.x + door.width - 10, door.y + 10, 3, 0, Math.PI*2); ctx.fill();
            ctx.beginPath(); ctx.arc(door.x + 10, door.y + door.height - 10, 3, 0, Math.PI*2); ctx.fill();
            ctx.beginPath(); ctx.arc(door.x + door.width - 10, door.y + door.height - 10, 3, 0, Math.PI*2); ctx.fill();
            
            // Lock Icon
            ctx.fillStyle = '#c0392b'; // Red lock background
            ctx.beginPath();
            ctx.arc(door.x + door.width/2, door.y + door.height/2, 20, 0, Math.PI*2);
            ctx.fill();
            
            ctx.fillStyle = 'white';
            ctx.font = '30px Arial';
            ctx.textAlign = 'center';
            ctx.fillText('🔒', door.x + door.width / 2, door.y + door.height / 2 + 10);
        }

        if (door.levelIndex === selectedLevel) {
            ctx.strokeStyle = '#f1c40f';
            ctx.lineWidth = 4;
            ctx.strokeRect(door.x - 2, door.y - 2, door.width + 4, door.height + 4);
        }
    }
    ctx.restore();

    // Draw Title and Scroll Indicators
    ctx.fillStyle = 'rgba(44, 62, 80, 0.8)';
    ctx.fillRect(0, 0, config.width, 180);
    
    ctx.fillStyle = 'white';
    ctx.font = '60px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Select a Level', config.width / 2, 100);

    const maxScroll = levelSelectTotalHeight - config.height + 300;
    if (levelSelectCameraY > 0) {
        ctx.fillStyle = 'white';
        ctx.font = '30px Arial';
        ctx.fillText('▲', config.width / 2, 150);
    }
    if (levelSelectCameraY < maxScroll) {
        ctx.fillStyle = 'white';
        ctx.font = '30px Arial';
        ctx.fillText('▼', config.width / 2, config.height - 30);
    }
}

function drawBackground() {
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, '#2c3e50');
    gradient.addColorStop(1, '#34495e');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
    ctx.lineWidth = 2;
    const tileSize = 40;
    for (let x = 0; x < canvas.width; x += tileSize) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke(); }
    for (let y = 0; y < canvas.height; y += tileSize) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke(); }
}

function drawPlatform(p, isMoving = false) {
    ctx.fillStyle = p.color || '#95a5a6';
    ctx.beginPath(); ctx.roundRect(p.x, p.y, p.width, p.height, 4); ctx.fill();
    ctx.fillStyle = 'rgba(0,0,0,0.2)'; ctx.beginPath(); ctx.moveTo(p.x, p.y + p.height); ctx.lineTo(p.x + p.width, p.y + p.height); ctx.lineTo(p.x + p.width, p.y); ctx.lineTo(p.x + p.width - 4, p.y + 4); ctx.lineTo(p.x + p.width - 4, p.y + p.height - 4); ctx.lineTo(p.x + 4, p.y + p.height - 4); ctx.fill();
    ctx.fillStyle = 'rgba(255,255,255,0.1)'; ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(p.x + p.width, p.y); ctx.lineTo(p.x + p.width - 4, p.y + 4); ctx.lineTo(p.x + 4, p.y + 4); ctx.lineTo(p.x + 4, p.y + p.height - 4); ctx.lineTo(p.x, p.y + p.height); ctx.fill();
    if (isMoving) { ctx.fillStyle = 'rgba(0,0,0,0.3)'; ctx.beginPath(); ctx.arc(p.x + p.width/2, p.y + p.height/2, 6, 0, Math.PI * 2); ctx.fill(); ctx.strokeStyle = 'rgba(255,255,255,0.2)'; ctx.lineWidth = 2; ctx.stroke(); }
}

function drawSpike(s) {
    ctx.fillStyle = '#c0392b';
    const spikeCount = Math.floor(s.width / 20); const spikeWidth = s.width / spikeCount;
    ctx.beginPath();
    for(let i=0; i<spikeCount; i++) {
        const sx = s.x + i * spikeWidth;
        if (s.direction === 'down') { ctx.moveTo(sx, s.y); ctx.lineTo(sx + spikeWidth, s.y); ctx.lineTo(sx + spikeWidth/2, s.y + s.height); }
        else { ctx.moveTo(sx, s.y + s.height); ctx.lineTo(sx + spikeWidth, s.y + s.height); ctx.lineTo(sx + spikeWidth/2, s.y); }
    }
    ctx.fill();
    const gradient = ctx.createLinearGradient(s.x, s.y, s.x, s.y + s.height); gradient.addColorStop(0, 'rgba(255,255,255,0.3)'); gradient.addColorStop(1, 'rgba(0,0,0,0.1)'); ctx.fillStyle = gradient; ctx.fill();
}

function drawObstacle(o) {
    ctx.fillStyle = o.color || '#e74c3c'; ctx.beginPath(); ctx.roundRect(o.x, o.y, o.width, o.height, 8); ctx.fill();
    ctx.fillStyle = 'rgba(0,0,0,0.6)'; ctx.beginPath(); ctx.arc(o.x + o.width*0.3, o.y + o.height*0.4, 4, 0, Math.PI*2); ctx.arc(o.x + o.width*0.7, o.y + o.height*0.4, 4, 0, Math.PI*2); ctx.fill();
    ctx.beginPath(); ctx.moveTo(o.x + o.width*0.2, o.y + o.height*0.3); ctx.lineTo(o.x + o.width*0.4, o.y + o.height*0.5); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(o.x + o.width*0.8, o.y + o.height*0.3); ctx.lineTo(o.x + o.width*0.6, o.y + o.height*0.5); ctx.stroke();
}

function drawTrap(t) {
    ctx.fillStyle = t.color || '#d35400'; ctx.fillRect(t.x, t.y, t.width, t.height);
    ctx.fillStyle = '#2c3e50'; ctx.beginPath(); ctx.arc(t.x + t.width/2, t.y + t.height/2, 10, 0, Math.PI*2); ctx.fill();
}

function drawGoal(g) {
    ctx.fillStyle = '#5d4037'; ctx.fillRect(g.x, g.y, g.width, g.height);
    ctx.fillStyle = '#795548'; ctx.fillRect(g.x + 4, g.y + 4, g.width - 8, g.height - 4);
    ctx.fillStyle = '#ffd700'; ctx.beginPath(); ctx.arc(g.x + g.width - 10, g.y + g.height/2, 3, 0, Math.PI*2); ctx.fill();
    ctx.fillStyle = 'rgba(0,0,0,0.1)'; ctx.fillRect(g.x + 8, g.y + 8, g.width - 16, g.height/2 - 12); ctx.fillRect(g.x + 8, g.y + g.height/2 + 4, g.width - 16, g.height/2 - 8);
    ctx.shadowColor = '#ffd700'; ctx.shadowBlur = 10; ctx.strokeStyle = 'rgba(255, 215, 0, 0.5)'; ctx.lineWidth = 2; ctx.strokeRect(g.x, g.y, g.width, g.height);
    ctx.shadowBlur = 0;
}

function drawPlayer(x, y, width, height, color, isDead) {
    ctx.save();
    ctx.fillStyle = 'rgba(0,0,0,0.3)'; ctx.beginPath(); ctx.ellipse(x + width/2, y + height - 2, width/2, 4, 0, 0, Math.PI*2); ctx.fill();
    ctx.fillStyle = isDead ? '#555' : color; ctx.beginPath(); ctx.roundRect(x, y, width, height, 8); ctx.fill();
    ctx.fillStyle = 'rgba(255,255,255,0.1)'; ctx.beginPath(); ctx.roundRect(x, y, width/2, height, 8); ctx.fill();
    ctx.fillStyle = 'white'; const eyeY = y + height/3; const eyeSize = 6;
    if (isDead) {
        ctx.strokeStyle = 'white'; ctx.lineWidth = 3;
        ctx.beginPath(); ctx.moveTo(x + 5, eyeY - 3); ctx.lineTo(x + 11, eyeY + 3); ctx.moveTo(x + 11, eyeY - 3); ctx.lineTo(x + 5, eyeY + 3); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(x + width - 11, eyeY - 3); ctx.lineTo(x + width - 5, eyeY + 3); ctx.moveTo(x + width - 5, eyeY - 3); ctx.lineTo(x + width - 11, eyeY + 3); ctx.stroke();
    } else {
        ctx.beginPath(); ctx.arc(x + 8, eyeY, eyeSize, 0, Math.PI*2); ctx.arc(x + width - 8, eyeY, eyeSize, 0, Math.PI*2); ctx.fill();
        ctx.fillStyle = 'black'; let lookX = 0; if (player.vx > 0.5) lookX = 2; if (player.vx < -0.5) lookX = -2;
        ctx.beginPath(); ctx.arc(x + 8 + lookX, eyeY, 2, 0, Math.PI*2); ctx.arc(x + width - 8 + lookX, eyeY, 2, 0, Math.PI*2); ctx.fill();
    }
    ctx.strokeStyle = 'black'; ctx.lineWidth = 2; ctx.beginPath();
    if (isDead) { ctx.arc(x + width/2, y + height/2 + 8, 4, Math.PI, 0); }
    else { ctx.arc(x + width/2, y + height/2 + 5, 4, 0, Math.PI); }
    ctx.stroke();
    ctx.restore();
}

function updateLevelSelect() {
    // Scroll with keyboard
    if (keys.ArrowUp) {
        levelSelectCameraY -= 15;
    }
    if (keys.ArrowDown) {
        levelSelectCameraY += 15;
    }

    const maxScroll = levelSelectTotalHeight - config.height + 300;
    levelSelectCameraY = Math.max(0, Math.min(maxScroll, levelSelectCameraY));

    // Auto-scroll to selected level if it's off-screen
    const selectedDoor = levelDoors[selectedLevel];
    if (selectedDoor) {
        const doorTop = selectedDoor.y;
        const doorBottom = selectedDoor.y + selectedDoor.height;
        if (doorTop < levelSelectCameraY + 180) { // 180 is header height
            levelSelectCameraY = doorTop - 180;
        }
        if (doorBottom > levelSelectCameraY + config.height) {
            levelSelectCameraY = doorBottom - config.height;
        }
    }
}


// Main Loop
function gameLoop() {
    // Update logic based on gameState
    if (gameState === 'playing') {
        updatePlaying();
    } else if (gameState === 'level_select') {
        updateLevelSelect();
    }

    // Drawing logic
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBackground();

    if (gameState === 'level_select') {
        drawLevelSelect();
    } else if (gameState === 'playing' || gameState === 'gameover' || gameState === 'win') {
        drawPlaying();
    }
    
    requestAnimationFrame(gameLoop);
}

// Start Loop
gameLoop();

// Restart Button
document.getElementById('restartBtn').addEventListener('click', () => {
    gameState = 'level_select';
    document.getElementById('gameOverlay').style.display = 'none';
});
