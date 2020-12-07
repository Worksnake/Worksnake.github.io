document.querySelectorAll('div.button[href]').forEach(el => {
    el.addEventListener('click', () => {
        window.location.href = el.getAttribute('href')
    })
})

document.querySelectorAll('*.href[href]').forEach(el => {
    el.addEventListener('click', () => {
        window.location.href = el.getAttribute('href')
    })
})