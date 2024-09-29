document.getElementById("letter").addEventListener("click", function() {
    const letter = document.getElementById("letter");
    const message = document.getElementById("message");

    letter.classList.toggle("zoom");
    message.classList.toggle("show");
});
