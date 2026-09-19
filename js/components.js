async function loadComponent(elementId, file) {
    const element = document.getElementById(elementId);

    if (!element) return;

    try {
        const response = await fetch(file);

        if (!response.ok) {
            throw new Error(`Could not load ${file}: ${response.status}`);
        }

        element.innerHTML = await response.text();

    } catch (error) {
        console.error(error);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    loadComponent("site-header", "components/header.html");
    loadComponent("site-footer", "components/footer.html");
});