const searchInput = document.getElementById("searchInput");
const searchResult = document.getElementById("searchResult")


//*************************
const PORT = "YORE SERVER PORT NUMBER!";
const url = `http://localhost:${PORT}/artists/getAllArtists`
//*************************
let timerId;
const handleSearch = async (input) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
        if (input !== '') {
            fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ "startName": input })
            })
                .then(response => response.json())
                .then(data => {
                    searchResult.innerHTML = ''
                    if (data && data.length > 0) {
                        data.sort((a, b) => {
                            let aStart = a.DisplayName.toLowerCase().startsWith(input.toLowerCase());
                            let bStart = b.DisplayName.toLowerCase().startsWith(input.toLowerCase());
                            if (aStart === bStart) {
                                return a.DisplayName.localeCompare(b.DisplayName, undefined, { sensitivity: 'base', ignorePunctuation: true, numeric: true });
                            } else if (aStart) {
                                return -1;
                            } else {
                                return 1;
                            }
                        });
                        data.forEach(element => {
                            let devContent = `
                        <a class="resultRow">${element.DisplayName}</a></br>
                    `
                            searchResult.innerHTML += devContent;
                        });
                    }
                });
        } else {
            searchResult.innerHTML = ''
        }
    },500)
}

searchInput.addEventListener('input', () => handleSearch(searchInput.value))
