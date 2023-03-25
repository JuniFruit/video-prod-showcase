export const posCircle = (
	container: Element,
	angle = 0,
	radius = 100,
	contW = 200,
	contH = 200
) => {
	let items = container.childNodes
	let step = (2 * Math.PI) / items.length

	items.forEach(item => {
		const currEl = item as HTMLElement
		const { width, height } = currEl.getBoundingClientRect()
		const x = Math.round(contW / 2 + radius * Math.cos(angle) - width / 2)
		const y = Math.round(contH / 2 + radius * Math.sin(angle) - height / 2)

		currEl.style.left = `${x}px`
		currEl.style.top = `${y}px`
		angle += step
	})
}
