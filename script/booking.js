const API_BASE_URL = "https://web-production-e75ae.up.railway.app";

document.addEventListener("DOMContentLoaded", () => {

  const forms = [
    { id: "bookTestForm", testField: "test_name", successPopup: "successPopup" },
    { id: "ditBookingForm", testField: "test_name", successPopup: "successPopup" },
    { id: "mhBookingForm", testField: "mhTest", successPopup: "successPopup" },
    { id: "bhcBookingForm", testField: "bhcTest", successPopup: "successPopup" },
    { id: "hcBookingForm", testField: "hcTest", successPopup: "successPopup" },
    { id: "wwcBookingForm", testField: "wwcTest", successPopup: "successPopup" },
    { id: "dpBookingForm", testField: "dpTest", successPopup: "successPopup" },
    { id: "ehcBookingForm", testField: "ehcTest", successPopup: "successPopup" },
    { id: "pdBookingForm", testField: "pdDropdown", successPopup: "successPopup" },
    { id: "fbfBookingForm", testField: "fbfTest", successPopup: "successPopup" },
  ];

  forms.forEach(f => {
    const form = document.getElementById(f.id);
    if (!form) return;

    console.log("✅ Booking listener attached:", f.id);

    form.addEventListener("submit", async (e) => {
      e.preventDefault(); // 🔴 CRITICAL
      e.stopPropagation();

      console.log("🚀 SUBMIT FIRED:", f.id);

      const formData = new FormData(form);
      const payload = {};

      // Build payload
      formData.forEach((value, key) => {
        if (key === f.testField || key === "test") {
          payload.test_name = value;
        } else {
          payload[key] = typeof value === "string" ? value.trim() : value;
        }
      });


      // Mobile validation
      if (payload.mobile && (!/^\d{10}$/.test(payload.mobile))) {
        alert("Enter valid 10-digit mobile number");
        return;
      }

      try {
        const res = await fetch(`${API_BASE_URL}/book-test`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        const data = await res.json();

        if (!res.ok || data.status === "error") {
          console.error("Backend error:", data.message);
          alert("❌ Error submitting form. Please try again.");
          return;
        }

        console.log("✅ Booking success:", payload);

        // Reset form
        form.reset();

        // 🔴 SHOW SUCCESS POPUP (FIXED)
        const popup = document.getElementById(f.successPopup);
        if (popup) {
          popup.style.display = "flex";
        } else {
          alert("✅ Booking successful");
        }

        // Close parent modal
        const modal = form.closest(
          ".modal, .mh-modal, .premium-modal-overlay, .popup-overlay"
        );
        if (modal) modal.style.display = "none";

      } catch (err) {
        console.error("Fetch error:", err);
        alert("❌ Error submitting form. Please try again.");
      }
    });
  });

  // ✅ SUCCESS POPUP CLOSE HANDLER
  const closeBtn = document.getElementById("closeSuccessPopup");
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      const popup = document.getElementById("successPopup");
      if (popup) popup.style.display = "none";
    });
  }

});
