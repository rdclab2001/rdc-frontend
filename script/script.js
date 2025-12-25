document.addEventListener("DOMContentLoaded", function () {

    /* =================== MOBILE NAV =================== */
    const toggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.wave-nav');

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            const expanded = toggle.getAttribute('aria-expanded') === 'true';
            toggle.setAttribute('aria-expanded', !expanded);
            nav.classList.toggle('nav-open');
        });
    }


    /* =================== TABS =================== */
    const tabBtns = document.querySelectorAll(".tab-btn");
    const tabContents = document.querySelectorAll(".tab-content");

    tabBtns.forEach(btn => {
        btn.addEventListener("click", () => {

            document.querySelector(".tab-btn.active")?.classList.remove("active");
            btn.classList.add("active");

            tabContents.forEach(content => content.classList.remove("active"));
            document.getElementById(btn.dataset.tab).classList.add("active");

        });
    });


    /* =================== KNOW MORE TOGGLE =================== */
    document.querySelectorAll('.toggle-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const list = btn.previousElementSibling;
            if (!list) return;

            list.classList.toggle('expanded');
            btn.textContent = list.classList.contains('expanded')
                ? 'Show Less'
                : 'Know More';
        });
    });


    /* =================== NORMAL BOOK TEST MODAL =================== */
    const modal = document.getElementById("testModal");
    const openModal = document.getElementById("openModal");
    const closeModal = document.getElementById("closeModal");

    if (openModal && modal) {
        openModal.addEventListener("click", () => {
            modal.style.display = "flex";
        });
    }

    if (closeModal && modal) {
        closeModal.addEventListener("click", () => {
            modal.style.display = "none";
        });
    }

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });


    /* =================== MH (MASTER HEALTH) BOOK MODALS =================== */
    const bookNowBtns = document.querySelectorAll('.mh-book-now');
    const closeBtns = document.querySelectorAll('.mh-close-modal');

    function closeMHModal(modal) {
        if (modal) modal.style.display = 'none';
    }

    // Open MH modal
    bookNowBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const modal = btn.closest('section')?.nextElementSibling;
            if (modal && modal.classList.contains('mh-modal')) {
                modal.style.display = 'flex';
            }
        });
    });

    // Close MH modal
    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const modal = btn.closest('.mh-modal');
            closeMHModal(modal);
        });
    });


    /* =================== FAQ =================== */
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        item.querySelector(".faq-question").addEventListener("click", () => {
            item.classList.toggle("active");
        });
    });


    /* =================== DIT BOOKING MODAL =================== */
    const ditModal = document.getElementById("ditbookingModal");
    const openDitBtn = document.getElementById("openDitBookingModal");
    const closeDitBtn = document.getElementById("closeDitBookingModal");

    const ditSuccess = document.getElementById("ditsuccessModal");
    const closeSuccessDit = document.getElementById("closeDitSuccessModal");

    if (openDitBtn && ditModal) {
        openDitBtn.addEventListener("click", () => {
            ditModal.style.display = "flex";
        });
    }

    if (closeDitBtn && ditModal) {
        closeDitBtn.addEventListener("click", () => {
            ditModal.style.display = "none";
        });
    }

    if (closeSuccessDit && ditSuccess) {
        closeSuccessDit.addEventListener("click", () => {
            ditSuccess.style.display = "none";
        });
    }


    /* =================== PREMIUM SCAN POPUP =================== */
    window.openPopup = function (type) {
        const pdModal = document.getElementById("pdModal");
        const dropdown = document.getElementById("pdDropdown");

        if (!pdModal || !dropdown) return;

        pdModal.style.display = "flex";

        let imagingTests = ["Digital X-Ray", "Ultrasound Scan", "2D Echo / ECG", "Color Doppler"];
        let advancedTests = ["Hormone Testing", "Allergy Profile", "Cardiac Screening", "Complete Health Profile"];
        let specializedTests = ["TMT Test", "PFT (Lung Test)", "Vitamin & Thyroid Panel", "Diabetes Profile"];

        dropdown.innerHTML = "";
        let selectedTests = [];

        if (type === "imaging") selectedTests = imagingTests;
        if (type === "advanced") selectedTests = advancedTests;
        if (type === "specialized") selectedTests = specializedTests;

        selectedTests.forEach(test => {
            let opt = document.createElement("option");
            opt.value = test;
            opt.textContent = test;
            dropdown.appendChild(opt);
        });
    }

    const closePd = document.getElementById("closePdModal");
    if (closePd) {
        closePd.addEventListener("click", () => {
            document.getElementById("pdModal").style.display = "none";
        });
    }

});






document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("fbfPopup");
    const mainForm = document.getElementById("fbfMain");
    const labConfirm = document.getElementById("fbfLabConfirm");
    const nivaMessage = document.getElementById("fbfNivaMessage");
    const bookingForm = document.getElementById("fbfBookingForm");



    // ===== Open popup =====
    function openBookingPopup() {
        popup.style.display = "flex";
        showMainForm();
    }

    // ===== Close popup =====
    function closePopup() {
        popup.style.display = "none";
        bookingForm.reset();
    }

    // ===== Show main form panel =====
    function showMainForm() {
        mainForm.style.display = "block";
        labConfirm.style.display = "none";
        nivaMessage.style.display = "none";
    }

    // ===== Show Niva Home Sample panel =====
    function showNivaMessage() {
        mainForm.style.display = "none";
        labConfirm.style.display = "none";
        nivaMessage.style.display = "block";
    }

    // ===== Form validation =====
    function validateForm() {
        const name = document.getElementById("fbfName").value.trim();
        const mobile = document.getElementById("fbfMobile").value.trim();
        const test = document.getElementById("fbfTest").value;

        if (!name || !mobile || !test) {
            alert("Please fill all required fields.");
            return false;
        }

        if (!/^\d{10}$/.test(mobile)) {
            alert("Enter a valid 10-digit mobile number.");
            return false;
        }

        return true;
    }


    // ===== Event listeners =====
    document.querySelector(".btn-home").addEventListener("click", showNivaMessage);
    document.querySelector(".close-popup").addEventListener("click", closePopup);



    // Close popup when clicking outside
    popup.addEventListener("click", (e) => {
        if (e.target === popup) closePopup();
    });



    // ===== Close Lab Confirm with OK button =====
const okBtn = document.getElementById("fbfOkBtn");
if (okBtn) {
    okBtn.addEventListener("click", () => {
        closePopup();
    });
}



    // Make functions global so HTML buttons can access if needed
    window.openBookingPopup = openBookingPopup;
    window.closePopup = closePopup;
    window.showMainForm = showMainForm;
    window.showNivaMessage = showNivaMessage;
});



/* =========================================================
   AUTO POPUP CONTROLLER
   - Index Page  : show after ~13 seconds
   - Services    : show on 50% scroll OR 15 seconds
   - Show once per day
   ========================================================= */

(function () {

    const STORAGE_KEY = "fbfPopupShownDate";


    function shownToday() {
        const today = new Date().toISOString().slice(0, 10);
        return localStorage.getItem(STORAGE_KEY) === today;
    }

    function markShown() {
        const today = new Date().toISOString().slice(0, 10);
        localStorage.setItem(STORAGE_KEY, today);
    }

    function showPopupSafely() {
        const popup = document.getElementById("fbfPopup");
        const main = document.getElementById("fbfMain");
        const lab = document.getElementById("fbfLabConfirm");
        const niva = document.getElementById("fbfNivaMessage");

        if (!popup) return;

        popup.style.display = "flex";

        if (main) main.style.display = "block";
        if (lab) lab.style.display = "none";
        if (niva) niva.style.display = "none";

        markShown();
    }

    document.addEventListener("DOMContentLoaded", () => {

        if (shownToday()) return;

        const path = location.pathname.toLowerCase();
        const isIndex =
            path.endsWith("index.html") ||
            path === "/" ||
            path === "" ||
            path.endsWith("/");

        const isServices = path.includes("services");

        let timer;

        /* ---------- INDEX PAGE: Delay ~13 seconds ---------- */
        if (isIndex) {
            timer = setTimeout(showPopupSafely, 13000);
            return;
        }

        /* ---------- SERVICES PAGE ---------- */
        if (isServices) {
            let triggered = false;

            function triggerPopup() {
                if (triggered) return;
                triggered = true;
                if (timer) clearTimeout(timer);
                showPopupSafely();
            }

            // 15 seconds fallback
            timer = setTimeout(triggerPopup, 15000);

            // Scroll 50%
            window.addEventListener("scroll", () => {
                const scrollPos = window.scrollY + window.innerHeight;
                const docHeight = document.body.scrollHeight;

                if (scrollPos >= docHeight * 0.5) {
                    triggerPopup();
                }
            });
        }

    });

})();



