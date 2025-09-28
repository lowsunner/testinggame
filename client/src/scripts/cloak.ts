
function setCloak(type: string) {
    let title = "The Math Hub";
    let favicon = "img/mathhub.png";

    if (type === "classroom") {
        title = "Home";
        favicon = "/img/classroomfavicon.ico";
    } else if (type === "clever") {
        title = "Clever | Portal";
        favicon = "/img/clever.jpg";
    } else if (type === "none") {
        title = "The Math Hub";
        favicon = "/img/mathhub.png";
    }

    document.title = title;

    const oldIcon = document.querySelector("link[rel='icon']");
    if (oldIcon) oldIcon.remove();

    const link = document.createElement("link");
    link.rel = "icon";
    link.href = favicon;
    document.head.appendChild(link);
}


const savedCloak = localStorage.getItem("tabCloak");
if (savedCloak) {
    setCloak(savedCloak);
} else {
    setCloak("none");
}
