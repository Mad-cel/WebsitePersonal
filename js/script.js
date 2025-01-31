
document.addEventListener("DOMContentLoaded", function () {
    console.log("Welcome to Haoran's Portfolio!");
    function loadComponent(selector, file) {
        fetch(file)
            .then(response => response.text())
            .then(data => {
                document.querySelector(selector).innerHTML = data;
            })
            .catch(error => console.error(`Error loading ${file}:`, error));
    }

    // Load Navbar and Footer
    loadComponent("header", "../components/nav.html");
    loadComponent("footer", "../components/footer.html");
});