let changeLevel = () => {
    let link = document.getElementById("search-link")
    let e = document.getElementById('fad-dropdown')
    let levelSearch = e.value
    link.href = "/school-list?level=" + levelSearch
}