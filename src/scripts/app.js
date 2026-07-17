// Micro-interactions for buttons
document.querySelectorAll(".action-card").forEach((button) => {
  button.addEventListener("touchstart", () => button.classList.add("opacity-90"));
  button.addEventListener("touchend", () => button.classList.remove("opacity-90"));
});
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */




/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
// Read User Details
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
let userData = {};

async function readUserInfo() {
  try {
    const response = await fetch("../../data/user-info.json");
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    
    userData = await response.json();
  } catch (err) {
    console.error("Failed to load user info:", err);
    userData = {};
  }
}
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */




/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
// Load Owner Details
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
const ownerNameEle     = document.getElementById("ownerName");
const ownerAddressEle  = document.getElementById("ownerAddress");
const ownerWhatsappEle = document.getElementById("ownerWhatsapp");
const ownerTelEle      = document.getElementById("ownerTel");

function loadOwnerInfo() {
  const ownerInfo     = userData.ownerInfo     || {};
  const ownerName     = ownerInfo.name         || "";
  const ownerAddress  = ownerInfo.address      || "";
  const ownerTel      = ownerInfo.tel          || "";
  const ownerWhatsapp = ownerInfo.whatsappLink || "";

  if (ownerNameEle) ownerNameEle.innerHTML = ownerName;
  if (ownerAddressEle) ownerAddressEle.innerHTML = ownerAddress;
  if (ownerTelEle) ownerTelEle.setAttribute("href", ownerTel);
  if (ownerWhatsappEle) {
    ownerWhatsappEle.setAttribute("href", ownerWhatsapp);
    ownerWhatsappEle.setAttribute("target", "_blank");
  }
}
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */




/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
// Load Car Details
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
const vehicleNoElement = document.getElementById("vehicleNumber");

function loadCarInfo() {
  const vehicleInfo = userData.carInfo || {};
  const regNo = vehicleInfo.registrationNo || "";
  if (vehicleNoElement) {
    vehicleNoElement.innerHTML = `Plate: ${regNo}`;
  }
}
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */




/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
// Load Car Details
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
const carImageEle = document.getElementById("carImage");

function loadCarImage() {
  const carImageLink = userData.carInfo && userData.carInfo.carImageLink || "";
  if (carImageEle) carImageEle.setAttribute("src", carImageLink);
}
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */




/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
// Family Contact Drop-down
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
const toggle   = document.getElementById("familyDropdownToggle");
const dropdown = document.getElementById("familyDropdown");
const chevron  = document.getElementById("familyDropdownChevron");

toggle?.addEventListener("click", () => {
  const isHidden = dropdown.classList.contains("hidden");
  dropdown.classList.toggle("hidden", !isHidden);
  toggle.setAttribute("aria-expanded", String(isHidden));

  // rotate chevron
  chevron.style.transform = isHidden ? "rotate(90deg)" : "rotate(0deg)";
});
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */




/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
// Set family contacts
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
function loadFamilyContacts() {
  const contacts = userData.familyContacts || [];
  if (!dropdown) return;
  dropdown.innerHTML = "";

  for (const c of contacts) {
    const a = document.createElement("a");
    a.className = "block p-5 bg-surface-container-low hover:bg-surface-container-low transition-colors border-t border-outline-variant first:border-t-0";
    a.href = `tel:${c.tel || ""}`;

    a.innerHTML = `
      <div class="flex items-center justify-between px-4 gap-3">
        <span class=" text-body-md font-medium text-on-surface">${c.name || ""}</span>
        <span class="material-symbols-outlined text-outline" aria-hidden="true">phone_forwarded</span>
      </div>
    `;

    dropdown.appendChild(a);
  }
}
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */




/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
// Fire in order
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
async function initializeApp() {
  await readUserInfo();
  loadOwnerInfo();
  loadCarInfo();
  loadCarImage();
  loadFamilyContacts();
}

initializeApp();
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
