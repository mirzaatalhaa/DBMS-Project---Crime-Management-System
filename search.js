async function loadSimilarCases() {
    let response = await fetch(`/search?keyword=knife`);
    let cases = await response.json();
    let results = document.getElementById("results");
    results.innerHTML = "";

    cases.forEach(caseData => {
        let li = document.createElement("li");
        li.className = "list-group-item";
        li.textContent = `${caseData.case_title} - ${caseData.description}`;
        results.appendChild(li);
    });
}

window.onload = loadSimilarCases;