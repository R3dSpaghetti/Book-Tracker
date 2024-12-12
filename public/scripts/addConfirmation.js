document.getElementById('submitBtn').addEventListener('click', function() {
    // Copy the data from the main form to the modal's hidden inputs
    document.getElementById('modalBookName').value = document.getElementById('bookName').value;
    document.getElementById('modalBookCategory').value = document.getElementById('bookCategory').value;
    document.getElementById('modalBookPrice').value = document.getElementById('bookPrice').value;
    document.getElementById('modalBookQuantity').value = document.getElementById('bookQuantityField').value;
    document.getElementById('modalBookDescription').value = document.getElementById('bookDescriptionField').value;
});