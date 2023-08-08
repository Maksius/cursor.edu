const body = document.querySelector('body')
body.querySelector('h1').style.textAlign = `center`;
const container = document.createElement('div');
container.setAttribute('id', 'container');
container.style.cssText = `display: flex; flex-wrap: wrap; width: 250px; height: 250px; margin: 0 auto;`;
body.appendChild(container);

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

function generateBlocks() {
  container.innerHTML = '';
  for (let i = 0; i < 25; i++) {
    const block = document.createElement('div');
    block.style.cssText = `width: 50px; height: 50px;`;
    block.style.background = getRandomColor();
    container.appendChild(block);
  }
};

function generateBlocksInterval() {
	generateBlocks();
	setInterval(generateBlocks, 1000);
}
generateBlocksInterval();