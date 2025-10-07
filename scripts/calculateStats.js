const fs = require('fs');
const path = require('path');

// Read the current chessData.ts file
const dataPath = path.join(__dirname, '../src/app/data/chessData.ts');
const content = fs.readFileSync(dataPath, 'utf8');

// Extract matches data
const matchesMatch = content.match(/const initialMatches: Match\[\] = \[([\s\S]*?)\];/);
if (!matchesMatch) {
  console.error('Could not find matches data');
  process.exit(1);
}

// Parse matches (simplified parsing)
const matchesText = matchesMatch[1];
const matches = [];
const matchBlocks = matchesText.split(/\},\s*\{/);

matchBlocks.forEach(block => {
  const player1Match = block.match(/player1:\s*"([^"]+)"/);
  const player2Match = block.match(/player2:\s*"([^"]+)"/);
  const resultMatch = block.match(/result:\s*"?([^,"\n]+)"?/);
  const completedMatch = block.match(/completed:\s*(true|false)/);

  if (player1Match && player2Match) {
    matches.push({
      player1: player1Match[1],
      player2: player2Match[1],
      result: resultMatch ? resultMatch[1].trim() : 'null',
      completed: completedMatch ? completedMatch[1] === 'true' : false
    });
  }
});

console.log(`Found ${matches.length} matches`);

// Calculate stats for each player
const playerStats = {};

matches.forEach(match => {
  if (!match.completed || match.result === 'null') return;
  if (match.player1 === 'BYE' || match.player2 === 'BYE') return;

  // Initialize players if needed
  if (!playerStats[match.player1]) {
    playerStats[match.player1] = { wins: 0, draws: 0, losses: 0 };
  }
  if (!playerStats[match.player2]) {
    playerStats[match.player2] = { wins: 0, draws: 0, losses: 0 };
  }

  // Update stats based on result
  if (match.result === 'player1') {
    playerStats[match.player1].wins++;
    playerStats[match.player2].losses++;
  } else if (match.result === 'player2') {
    playerStats[match.player2].wins++;
    playerStats[match.player1].losses++;
  } else if (match.result === 'draw') {
    playerStats[match.player1].draws++;
    playerStats[match.player2].draws++;
  }
});

// Print stats
console.log('\nPlayer Statistics:');
console.log('==================');
Object.keys(playerStats).sort().forEach(player => {
  const stats = playerStats[player];
  const score = stats.wins + stats.draws * 0.5;
  console.log(`${player}: W${stats.wins} D${stats.draws} L${stats.losses} = ${score.toFixed(1)} points`);
});

// Generate updated player stats for copy-paste
console.log('\n\nUpdated stats for chessData.ts:');
console.log('================================\n');
Object.keys(playerStats).sort().forEach(player => {
  const stats = playerStats[player];
  const score = stats.wins + stats.draws * 0.5;
  console.log(`  // ${player}: wins: ${stats.wins}, draws: ${stats.draws}, losses: ${stats.losses}, score: ${score.toFixed(1)}`);
});
