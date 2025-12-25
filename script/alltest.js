document.addEventListener('DOMContentLoaded', () => {

    // ================= Open "Book Your Test" Modal =================
    document.querySelectorAll('.viewall-book').forEach(btn => {
        btn.addEventListener('click', () => {
            const modal = document.getElementById('vatBookForm');
            if(modal) modal.style.display = 'flex';
        });
    });

    // ================= Close Modal =================
    document.querySelectorAll('.vat-close-modal').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.vat-modal').forEach(m => {
                m.style.display = 'none';
            });
        });
    });

    // ================= Handle Form Submission =================
    const vatForm = document.getElementById('vatBookingForm');
    const vatSuccess = document.getElementById('vatConfirmBox');

    vatForm?.addEventListener('submit', function(e){
        e.preventDefault();

        // Close form modal
        document.getElementById('vatBookForm').style.display = 'none';

        // Update success message dynamically
        const selectedTest = document.getElementById('vatTest').value;
        const successMsg = vatSuccess.querySelector('p');
        if(successMsg) successMsg.textContent = `Your booking for "${selectedTest}" has been received.`;

        // Show success popup
        vatSuccess.style.display = 'flex';

        // Reset form
        vatForm.reset();
    });

});
document.querySelectorAll('.mhc-toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const list = btn.previousElementSibling;

        if (list.classList.contains('collapsed')) {
            list.classList.remove('collapsed');
            list.classList.add('expanded');
            btn.textContent = "Hide";
        } else {
            list.classList.remove('expanded');
            list.classList.add('collapsed');
            btn.textContent = "See all";
        }
    });
});
