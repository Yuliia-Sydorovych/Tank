var example = document.getElementById("example"),
    ctx = example.getContext('2d'),
    cellSize = 32,
			
map = [
[0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0],
[2, 2, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0],
[2, 2, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[2, 2, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 3, 3, 3, 3, 3, 0, 0, 3, 3],
[1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 3, 3, 3, 3, 3, 0, 0, 3, 3],
[1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 0, 0, 3, 3, 3, 3, 3, 3, 0, 0, 1, 1, 1, 1, 1],
[0, 0, 0, 1, 1, 0, 0, 3, 3, 3, 3, 0, 0, 3, 3, 3, 3, 3, 3, 0, 0, 1, 1, 1, 1, 1],
[1, 1, 1, 0, 0, 0, 0, 3, 3, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[1, 1, 1, 0, 0, 0, 0, 3, 3, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0],
[3, 3, 3, 3, 3, 0, 0, 3, 3, 0, 0, 2, 2, 0, 0, 1, 1, 0, 0, 0, 2, 0, 0, 0, 0, 0],
[3, 3, 3, 3, 3, 0, 0, 3, 3, 0, 0, 2, 2, 0, 0, 1, 1, 0, 0, 0, 2, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1],
[0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1],
[0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3],
[1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3]
];

example.width = 15 * cellSize;
example.height = 15 * cellSize;

ctx.fillStyle = '#ccc';

ctx.fillRect(0, 0, example.width, example.height);

ctx.fillStyle = '#000';

ctx.fillRect(cellSize, cellSize, 13 * cellSize, 13 * cellSize)


for (var j = 0; j < 26; j++)
for (var i = 0; i < 26; i++)
{
    switch (map[j][i])
    {
        case 1:
            DrawBrick(i * cellSize / 2 + cellSize, j * cellSize / 2 + cellSize);
            break;
        case 2:
            DrawHardBrick(i * cellSize / 2 + cellSize, j * cellSize / 2 + cellSize);
            break;
        case 3:
            DrawBlueBrick(i * cellSize / 2 + cellSize, j * cellSize / 2 + cellSize);
            break;
    }
}

function DrawBrick(x, y)
{
    
    ctx.fillStyle = '#b4471b';
    ctx.fillRect(x, y, cellSize / 2, cellSize / 2);

    ctx.fillStyle = '#74341f';
    ctx.fillRect(x, y, cellSize / 2, cellSize / 16);
    ctx.fillRect(x, y + cellSize / 4, cellSize / 2, cellSize / 16);
    ctx.fillRect(x + cellSize / 4, y, cellSize / 16, cellSize / 4);
    ctx.fillRect(x + cellSize / 16, y + cellSize / 4, cellSize / 16, cellSize / 4);

    ctx.fillStyle = '#3e0d06';
    ctx.fillRect(x, y + cellSize / 4 - cellSize / 16, cellSize / 2, cellSize / 16);
    ctx.fillRect(x, y + cellSize / 2 - cellSize / 16, cellSize / 2, cellSize / 16);
    ctx.fillRect(x + cellSize / 4 - cellSize / 16, y, cellSize / 16, cellSize / 4);
    ctx.fillRect(x, y + cellSize / 4 - cellSize / 16, cellSize / 16, cellSize / 4);
}


function DrawHardBrick(x, y)
{
    
    ctx.fillStyle = '#cccccc';
    ctx.fillRect(x, y, cellSize / 2, cellSize / 2);

    ctx.fillStyle = '#909090';
    ctx.beginPath();
    ctx.moveTo(x, y + cellSize / 2);
    ctx.lineTo(x + cellSize / 2, y + cellSize / 2);
    ctx.lineTo(x + cellSize / 2, y);
    ctx.fill();
    
    ctx.fillStyle = '#eeeeee';
    ctx.fillRect(x + cellSize / 8, y + cellSize / 8, cellSize / 4, cellSize / 4);
}

function DrawBlueBrick(x, y)
{
    
    ctx.fillStyle = '#050571';
    ctx.fillRect(x, y, cellSize / 2, cellSize / 2);

    ctx.fillStyle = '#2424A4';
    ctx.beginPath();
    ctx.moveTo(x, y + cellSize / 2);
    ctx.lineTo(x + cellSize / 2, y + cellSize / 2);
    ctx.lineTo(x + cellSize / 2, y);
    ctx.fill();
    
    ctx.fillStyle = '#000027';
    ctx.fillRect(x + cellSize / 8, y + cellSize / 8, cellSize / 4, cellSize / 4);
}