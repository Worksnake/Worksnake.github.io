$.ajax({
    url: 'https://api.github.com/repos/Worksnake/worksnake-releases/releases/latest',
    headers: {
        'accept': 'application/vnd.github.v3+json'
    }
}).then(latest => {
    { //win32
        const installer = latest.assets.filter(asset => asset.name.endsWith('.exe'))[0]
        const url = installer.browser_download_url
        document.querySelector('i#win32').setAttribute('href', url)
        document.querySelector('span#win32').innerHTML = `Download ${latest.tag_name} for Windows`
    }

    { //osx
        const installer = latest.assets.filter(asset => asset.name.endsWith('.dmg'))[0]
        const url = installer.browser_download_url
        document.querySelector('i#osx').setAttribute('href', url)
        document.querySelector('span#osx').innerHTML = `Download ${latest.tag_name} for osx`
    }

    { //linux
        const installer = latest.assets.filter(asset => asset.name.endsWith('.AppImage'))[0]
        const url = installer.browser_download_url
        document.querySelector('i#linux').setAttribute('href', url)
        document.querySelector('span#linux').innerHTML = `Download ${latest.tag_name} for Linux`
    }

    link()
})