document.addEventListener('DOMContentLoaded', () => {
    const confirmSaveButton = document.getElementById('confirmSaveButton');
    const saveModal = new bootstrap.Modal(document.getElementById('deleteModal'));

    // Open modal on save
    confirmSaveButton.addEventListener('click', () => {
        const form = document.querySelector('form');
        form.submit();
    });
});

document.getElementById('confirmSaveButton').addEventListener('click', function() {
    // Trigger the form submission
    document.querySelector('form[action="/<%= book._id %>?_method=PUT"]').submit();
});
