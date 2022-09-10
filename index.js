const labels = document.querySelectorAll('label')

labels.forEach(function(label) {
	label.innerHTML = label.innerText.split('').map((letter, index) => `<span style='transition-delay: ${index*0.05}s;'>${letter}</span>`).join('')
})