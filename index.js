
const rightGlass = document.getElementById('right-glass')
const leftGlass = document.getElementById('left-glass')

const rightColor = () => '#'+Math.floor(Math.random()*16777215).toString(16)
const leftColor = () => '#'+Math.floor(Math.random()*16777215).toString(16)


function run(){
	rightGlass.style.cssText = `fill:${rightColor()}`
	leftGlass.style.cssText = `fill:${leftColor()}`
}
setInterval(run,1000)

