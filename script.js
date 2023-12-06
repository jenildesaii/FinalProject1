document.addEventListener('DOMContentLoaded', function () {
    // This function runs when the DOM is fully loaded

    // Example: Adding a click event to a button
    const submitButton = document.getElementById('submit-feedback-button');

    if (submitButton) {
        submitButton.addEventListener('click', function () {
            console.log('Feedback submitted!');
        });
    }
});
