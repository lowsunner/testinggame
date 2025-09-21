const classroom = document.getElementById("classroom");
const clever = document.getElementById("clever");
const math = document.getElementById("math");
const abCloak = document.getElementById("ab");

if (classroom && clever && math) {
    classroom.addEventListener("click", () => {
        localStorage.setItem("tabCloak", "classroom");
        setCloak("classroom");
    });

    clever.addEventListener("click", () => {
        localStorage.setItem("tabCloak", "clever");
        setCloak("clever");
    });

    math.addEventListener("click", () => {
        localStorage.setItem("tabCloak", "none");
        setCloak("none");
    });
}
abCloak?.addEventListener("click", () => {
    const newTab = window.open("about:blank", "_blank");

    if (newTab) {
        const iframe = newTab.document.createElement("iframe");
        iframe.src = "/";
        iframe.style.cssText =
            "position:fixed;top:0;left:0;width:100%;height:100%;border:none;margin:0;padding:0;overflow:hidden;z-index:999999;";
        newTab.document.body.appendChild(iframe);
    }

    window.location.assign("https://classroom.google.com/");
});

