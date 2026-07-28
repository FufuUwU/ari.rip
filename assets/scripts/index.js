var typed = new Typed('.intro', {
strings: [
    "build things on the internet",
    "break Linux installations",
    "occasionally remember to commit my code",
    "make the internet slightly weirder",
    "overengineer simple problems",
    "make things I think are cool",
    "pretend I know what I'm doing"
],        
typeSpeed: 50,
backSpeed: 25,
backDelay: 2000,
loop: true
});

const isMacFirefox =
    navigator.userAgent.includes("Macintosh") &&
    navigator.userAgent.includes("Firefox/");

if (!isMacFirefox) {
    VanillaTilt.init(document.querySelectorAll(".project"), {
        max: 5,
        speed: 400,
        glare: true,
        "max-glare": 0.2
    });
}