document.getElementById("letter-container").addEventListener("click", function() {
    const letter = document.getElementById("letter");
    const message = document.getElementById("message");

    // Toggle the zoom effect and the message visibility
    letter.classList.toggle("zoom");
    message.classList.toggle("show");
});
