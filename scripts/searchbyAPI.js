document.addEventListener("DOMContentLoaded", function () {
    let wikiContent = document.getElementById("wiki-content");

    if (!wikiContent) {
        console.error("Element with id 'wiki-content' not found.");
        return;
    }

    let searchInput = document.getElementById("search-input");
    let searchButton = document.getElementById("search-btn");
    let resultContainer = document.getElementById("result-container");

    function fetchMediaWikiData(query = "Main Page") {
        fetch(`https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&list=search&srsearch=${query}&srprop=snippet&srlimit=5`)
            .then(response => response.json())
            .then(data => {
                let searchResults = data.query.search;
                let content = "";
                searchResults.forEach(result => {
                    let title = result.title;
                    let description = result.snippet || "No description available.";
                    let pageUrl = `https://en.wikipedia.org/wiki/${encodeURIComponent(title)}`;
                    content += `
                        <div class='card mb-3'>
                            <div class='row g-0'>
                                <div class='col-md-12'>
                                    <div class='card-body'>
                                        <h5 class='card-title'>
                                            <a href='${pageUrl}' target='_blank'>${title}</a>
                                        </h5>
                                        <p class='card-text'>${description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
                });
                resultContainer.innerHTML = content;
            })
            .catch(error => {
                console.error("Error fetching MediaWiki data:", error);
                resultContainer.innerHTML = "<p class='text-danger'>Failed to load data.</p>";
            });
    }

    searchButton.addEventListener("click", function () {
        let query = searchInput.value.trim();
        if (query) {
            resultContainer.innerHTML = "<p>Loading...</p>"; 
            fetchMediaWikiData(query);
        } else {
            alert("Please enter a search term.");
        }
    });
});