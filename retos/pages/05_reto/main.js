function loadblock() {
    const select = document.getElementById("block");
    const value = select.value;

    const container = document.getElementById("blockLoad");

    // Limpiar contenido anterior
    container.innerHTML = "";

    if (value === "0") return;

    // Cargar HTML
    fetch(`pages/05_reto/pages/block${value}/block${value}.html`)
        .then(response => {
            if (!response.ok) {
                throw new Error("No se pudo cargar el bloque.");
            }
            return response.text();
        })
        .then(html => {
            container.innerHTML = html;

            // Cargar JS dinámicamente
            const script = document.createElement("script");
            script.src = `pages/05_reto/pages/block${value}/block${value}.js`;
            script.type = "text/javascript";
            document.body.append(script);
        })
        .catch(error => {
            container.innerHTML = `<p>Error: ${error.message}</p>`;
        });
}