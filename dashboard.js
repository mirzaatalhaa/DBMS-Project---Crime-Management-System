document.getElementById("caseForm").onsubmit = async function (event) {
    event.preventDefault();
    
    const data = {
        title: document.getElementById("title").value,
        description: document.getElementById("description").value,
        crime: document.getElementById("crimeType").value,
        suspect: document.getElementById("suspectName").value,
        location: document.getElementById("location").value,
        date: new Date().toISOString().split('T')[0]
    };

    await fetch("/add_case", { 
        method: "POST", 
        headers: { "Content-Type": "application/json" }, 
        body: JSON.stringify(data) 
    });

    alert("Case added successfully!");
};

async function searchCases() {
    let keyword = document.getElementById("searchBox").value.trim();

    if (!keyword) {
        alert("Please enter a search keyword.");
        return;
    }

    localStorage.setItem("searchKeyword", keyword); // Store keyword for retrieval
    window.location.href = "search.html"; // Redirect to search page
}
