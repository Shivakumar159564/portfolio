function changeBackground() {
    const input = document.getElementById("bgUpload");

    if (input.files && input.files[0]) {
        const reader = new FileReader();

        reader.onload = function(e) {
            document.body.style.backgroundImage =
                `url('${e.target.result}')`;
        };

        reader.readAsDataURL(input.files[0]);
    } else {
        alert("Please select an image first.");
    }
}