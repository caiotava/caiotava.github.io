document.querySelectorAll(".project-block").forEach((block) => {
    const previewContainer = block.querySelector(".preview-container");
    console.log(previewContainer);

    block.querySelectorAll("[data-type]").forEach((item) => {
        item.addEventListener("click", () => {
            const type = item.dataset.type;
            previewContainer.innerHTML = "";

            if (type === "image") {
                const img = document.createElement("img");
                img.src = item.src;
                img.className = "rounded-lg shadow-lg w-full max-h-[400px] object-contain transition-all duration-300";
                previewContainer.appendChild(img);
            }

            if (type === "video") {
                const videoId = item.dataset.id;
                const iframe = document.createElement("iframe");
                iframe.src = `https://www.youtube.com/embed/${videoId}`;
                iframe.className = "rounded-lg shadow-lg w-full";
                iframe.allow = "fullscreen";
                iframe.width = 560;
                iframe.height = 315;
                previewContainer.appendChild(iframe);
            }
        });
    });
});