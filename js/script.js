// Toggle class active untuk menu track
const navbarNav = document.querySelector(".navbar-nav");
// Ketika git-branch (logo jalur) di klik
document.querySelector("#git-branch").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Toggle class active untuk search form :
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// Data Search Form
function search() {
  var query = document.getElementById("search-box").value.toLowerCase();

  // Membuat ketikan pencarian untuk search form
  if (
    query.includes("program1") ||
    query.includes("pilihan1") ||
    query.includes("peta")
  ) {
    var targetElement = document.getElementById("map");
    targetElement.scrollIntoView({ behavior: "smooth" });
  } else if (
    query.includes("program2") ||
    query.includes("pilihan2") ||
    query.includes("tentang")
  ) {
    var targetElement = document.getElementById("about");
    targetElement.scrollIntoView({ behavior: "smooth" });
  } else if (query.includes("program3") || query.includes("daftar")) {
    var targetElement = document.getElementById("menu");
    targetElement.scrollIntoView({ behavior: "smooth" });
  } else {
    alert("Pencarian tidak ditemukan.");
  }
}

function handleKeyPress(event) {
  if (event.keyCode === 13) {
    // Kode 13 ="Enter"
    search();
  }
}

// KLik diluar element
const GB = document.querySelector("#git-branch");
const SB = document.querySelector("#search-button");

document.addEventListener("click", function (e) {
  if (!GB.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!SB.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});

// Modal Box KT
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButton = document.querySelector(".item-detail-button");

itemDetailButton.onclick = (e) => {
  itemDetailModal.style.display = "flex";
  e.preventDefault();
};

// click close button for modal KT
document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};

// Modal Box Kama
const itemDetailModalKama = document.querySelector("#item-detail-modal-kama");
const itemDetailButtonKama = document.querySelector(".item-detail-button-kama");

itemDetailButtonKama.onclick = (e) => {
  itemDetailModalKama.style.display = "flex";
  e.preventDefault();
};

// click close button for modal kama
document.querySelector(".modalkama .close-icon").onclick = (e) => {
  itemDetailModalKama.style.display = "none";
  e.preventDefault();
};

// Modal Box Bayu
const itemDetailModalBayu = document.querySelector("#item-detail-modal-bayu");
const itemDetailButtonBayu = document.querySelector(".item-detail-button-bayu");

itemDetailButtonBayu.onclick = (e) => {
  itemDetailModalBayu.style.display = "flex";
  e.preventDefault();
};

// click close button for modal bayu
document.querySelector(".modalbayu .close-icon").onclick = (e) => {
  itemDetailModalBayu.style.display = "none";
  e.preventDefault();
};

// Modal Box Sibayak
const itemDetailModalSibayak = document.querySelector(
  "#item-detail-modal-sibayak"
);
const itemDetailButtonSibayak = document.querySelector(
  ".item-detail-button-sibayak"
);

itemDetailButtonSibayak.onclick = (e) => {
  itemDetailModalSibayak.style.display = "flex";
  e.preventDefault();
};

// click close button for modal sibayak
document.querySelector(".modalsibayak .close-icon").onclick = (e) => {
  itemDetailModalSibayak.style.display = "none";
  e.preventDefault();
};

// Modal Box Rio
const itemDetailModalRio = document.querySelector("#item-detail-modal-rio");
const itemDetailButtonRio = document.querySelector(".item-detail-button-rio");

itemDetailButtonRio.onclick = (e) => {
  itemDetailModalRio.style.display = "flex";
  e.preventDefault();
};

// click close button for modal rio
document.querySelector(".modalrio .close-icon").onclick = (e) => {
  itemDetailModalRio.style.display = "none";
  e.preventDefault();
};

// Modal Box Takasima
const itemDetailModalTakasima = document.querySelector(
  "#item-detail-modal-takasima"
);
const itemDetailButtonTakasima = document.querySelector(
  ".item-detail-button-takasima"
);

itemDetailButtonTakasima.onclick = (e) => {
  itemDetailModalTakasima.style.display = "flex";
  e.preventDefault();
};

// click close button for modal takasima
document.querySelector(".modaltakasima .close-icon").onclick = (e) => {
  itemDetailModalTakasima.style.display = "none";
  e.preventDefault();
};

// Modal Box Sigantang
const itemDetailModalSigantang = document.querySelector(
  "#item-detail-modal-sigantang"
);
const itemDetailButtonSigantang = document.querySelector(
  ".item-detail-button-sigantang"
);

itemDetailButtonSigantang.onclick = (e) => {
  itemDetailModalSigantang.style.display = "flex";
  e.preventDefault();
};

// click close button for modal sigantang
document.querySelector(".modalsigantang .close-icon").onclick = (e) => {
  itemDetailModalSigantang.style.display = "none";
  e.preventDefault();
};

// Function to handle click outside modal
function handleClickOutsideModal(event, modal) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}

// klik diluar modal KT
window.addEventListener("click", (e) => {
  handleClickOutsideModal(e, itemDetailModal);
});

// klik diluar modal kama
window.addEventListener("click", (e) => {
  handleClickOutsideModal(e, itemDetailModalKama);
});

// klik diluar modal bayu
window.addEventListener("click", (e) => {
  handleClickOutsideModal(e, itemDetailModalBayu);
});

// klik diluar modal sibayak
window.addEventListener("click", (e) => {
  handleClickOutsideModal(e, itemDetailModalSibayak);
});

// klik diluar modal rio
window.addEventListener("click", (e) => {
  handleClickOutsideModal(e, itemDetailModalRio);
});

// klik diluar modal takasima
window.addEventListener("click", (e) => {
  handleClickOutsideModal(e, itemDetailModalTakasima);
});

// klik diluar modal sigantang
window.addEventListener("click", (e) => {
  handleClickOutsideModal(e, itemDetailModalSigantang);
});

// Combo Box
// Data

const comboBox1 = document.getElementById("combo-box-1");
const comboBox2 = document.getElementById("combo-box-2");
const comboBox3 = document.getElementById("combo-box-3");
const comboBox4 = document.getElementById("combo-box-4");
const result = document.getElementById("result");

// Daftar biaya
const biaya = {
  KT: {
    kabanjahe: {
      akabanjahe: 3000,
      apajakbawah: 6000,
      aperjuangan: 6000,
      apajakbuah: 6000,
      ajalankolam: 6000,
      asmp: 6000,
      asidebuk: 12000,
      aujungaji: 5000,
    },
    pajakbawah: {
      akabanjahe: 6000,
      apajakbawah: 3000,
      aperjuangan: 3000,
      apajakbuah: 3000,
      ajalankolam: 3000,
      asmp: 3000,
      asidebaujungaji: 3000,
      uk: 6000,
      aujungaji: 3000,
    },
    perjuangan: {
      akabanjahe: 6000,
      apajakbawah: 3000,
      aperjuangan: 3000,
      apajakbuah: 3000,
      ajalankolam: 3000,
      asmp: 3000,
      asidebuk: 6000,
      aujungaji: 3000,
    },
    pajakbuah: {
      akabanjahe: 6000,
      apajakbawah: 3000,
      aperjuangan: 3000,
      apajakbuah: 3000,
      ajalankolam: 3000,
      asmp: 3000,
      asidebuk: 6000,
      aujungaji: 3000,
    },
    jalankolam: {
      akabanjahe: 7000,
      apajakbawah: 3000,
      aperjuangan: 3000,
      apajakbuah: 3000,
      ajalankolam: 3000,
      asmp: 3000,
      aujungaji: 4000,
    },
    smp: {
      akabanjahe: 7000,
      apajakbawah: 3000,
      apajakbuah: 3000,
      ajalankolam: 3000,
      asmp: 3000,
      aujungaji: 4000,
    },
    sidebuk: {
      akabanjahe: 12000,
      apajakbawah: 7000,
      aperjuangan: 7000,
      apajakbuah: 7000,
      asidebuk: 3000,
      aujungaji: 7000,
    },
  },
  KAMA: {
    kabanjahe: {
      akabanjahe: 3000,
      apajakbawah: 6000,
      aperjuangan: 6000,
      apajakbuah: 6000,
      agunungsibayak: 15000,
      ajaranguda: 7000,
      asususapi: 10000,
      agundaling: 15000,
      aujungaji: 5000,
    },
    jaranguda: {
      akabanjahe: 7000,
      apajakbawah: 3000,
      aperjuangan: 3000,
      apajakbuah: 3000,
      agunungsibayak: 3000,
      ajaranguda: 3000,
      asususapi: 3000,
      agundaling: 5000,
      aujungaji: 4000,
    },
    pajakbawah: {
      akabanjahe: 6000,
      apajakbawah: 3000,
      aperjuangan: 3000,
      apajakbuah: 3000,
      agunungsibayak: 5000,
      ajaranguda: 3000,
      asususapi: 5000,
      aujungaji: 3000,
    },
    perjuangan: {
      akabanjahe: 6000,
      apajakbawah: 3000,
      aperjuangan: 3000,
      apajakbuah: 3000,
      agunungsibayak: 5000,
      ajaranguda: 3000,
      asususapi: 5000,
      agundaling: 3000,
      aujungaji: 3000,
    },
    pajakbuah: {
      akabanjahe: 6000,
      apajakbawah: 3000,
      aperjuangan: 3000,
      apajakbuah: 3000,
      agunungsibayak: 5000,
      ajaranguda: 3000,
      asususapi: 5000,
      agundaling: 3000,
      aujungaji: 3000,
    },
    gunungsibayak: {
      akabanjahe: 15000,
      apajakbawah: 5000,
      aperjuangan: 5000,
      apajakbuah: 5000,
      agunungsibayak: 3000,
      ajaranguda: 3000,
      asususapi: 5000,
      agundaling: 8000,
      aujungaji: 5000,
    },
    sususapi: {
      akabanjahe: 10000,
      apajakbawah: 5000,
      aperjuangan: 5000,
      apajakbuah: 5000,
      agunungsibayak: 5000,
      ajaranguda: 3000,
      asususapi: 3000,
      agundaling: 8000,
      aujungaji: 7000,
    },
    gundaling: {
      akabanjahe: 15000,
      apajakbawah: 3000,
      aperjuangan: 3000,
      apajakbuah: 3000,
      agunungsibayak: 8000,
      ajaranguda: 5000,
      asususapi: 8000,
      agundaling: 3000,
      aujungaji: 5000,
    },
  },
  BAYU: {
    kabanjahe: {
      akabanjahe: 3000,
      apajakbawah: 6000,
      aperjuangan: 6000,
      apajakbuah: 6000,
      asuryaindah: 7000,
      alingga: 4000,
      ajulu: 5000,
      aujungaji: 5000,
    },
    pajakbuah: {
      akabanjahe: 6000,
      apajakbawah: 3000,
      aperjuangan: 3000,
      apajakbuah: 3000,
      asuryaindah: 3000,
      alingga: 8000,
      ajulu: 10000,
      aujungaji: 3000,
    },
    perjuangan: {
      akabanjahe: 6000,
      apajakbawah: 6000,
      aperjuangan: 3000,
      apajakbuah: 3000,
      asuryaindah: 3000,
      alingga: 8000,
      ajulu: 10000,
      aujungaji: 3000,
    },
    pajakbuah: {
      akabanjahe: 6000,
      apajakbawah: 3000,
      aperjuangan: 3000,
      apajakbuah: 3000,
      asuryaindah: 3000,
      alingga: 8000,
      ajulu: 10000,
      aujungaji: 3000,
    },
    suryaindah: {
      akabanjahe: 7000,
      apajakbawah: 3000,
      aperjuangan: 3000,
      apajakbuah: 3000,
      asuryaindah: 3000,
      alingga: 8000,
      ajulu: 10000,
      aujungaji: 4000,
    },
    lingga: {
      akabanjahe: 4000,
      apajakbawah: 8000,
      aperjuangan: 8000,
      apajakbuah: 8000,
      asuryaindah: 8000,
      alingga: 3000,
      ajulu: 3000,
      aujungaji: 7000,
    },
    linggajulu: {
      akabanjahe: 5000,
      apajakbawah: 10000,
      aperjuangan: 10000,
      apajakbuah: 10000,
      asuryaindah: 10000,
      alingga: 3000,
      ajulu: 3000,
      aujungaji: 9000,
    },
  },
  SIBAYAK: {
    pajakbawah: {
      apajakbawah: 3000,
      aujungaji: 3000,
      aajijulu: 4000,
      aajijahe: 5000,
      abukit: 7000,
      akubu: 7000,
    },
    ujungaji: {
      apajakbawah: 3000,
      aujungaji: 3000,
      aajijulu: 3000,
      aajijahe: 3000,
      abukit: 9000,
      akubu: 9000,
    },
    ajijulu: {
      apajakbawah: 4000,
      aujungaji: 3000,
      aajijulu: 3000,
      aajijahe: 3000,
      abukit: 11000,
      akubu: 11000,
    },
    ajijahe: {
      apajakbawah: 5000,
      aujungaji: 3000,
      aajijulu: 3000,
      aajijahe: 3000,
      abukit: 12000,
      akubu: 12000,
    },
    bukit: {
      apajakbawah: 7000,
      aujungaji: 9000,
      aajijulu: 11000,
      aajijahe: 12000,
      abukit: 3000,
      akubu: 3000,
    },
    kubu: {
      apajakbawah: 7000,
      aujungaji: 9000,
      aajijulu: 11000,
      aajijahe: 12000,
      abukit: 3000,
      akubu: 3000,
    },
  },
  RIO: {
    kabanjahe: {
      akabanjahe: 3000,
      audara: 7000,
      akawar: 13000,
      anaman: 10000,
      asukandebi: 10000,
    },
    udara: {
      akabanjahe: 7000,
      audara: 3000,
      akawar: 15000,
      anaman: 6000,
      asukandebi: 6000,
    },
    kawar: {
      akabanjahe: 13000,
      audara: 15000,
      akawar: 3000,
      anaman: 3000,
      asukandebi: 3000,
    },
    naman: {
      akabanjahe: 10000,
      audara: 6000,
      akawar: 3000,
      anaman: 3000,
      asukandebi: 3000,
    },
    sukandebi: {
      akabanjahe: 10000,
      audara: 6000,
      akawar: 3000,
      anaman: 3000,
      asukandebi: 3000,
    },
  },
  TAKASIMA: {
    pajakbawah: {
      apajakbawah: 3000,
      aperjuangan: 3000,
      apajakbuah: 3000,
      agundaling: 5000,
      agongsol: 3000,
      akeling: 3000,
      asimpangempat: 7000,
      anaman: 10000,
      akawar: 13000,
    },
    perjuangan: {
      apajakbawah: 3000,
      aperjuangan: 3000,
      apajakbuah: 3000,
      agundaling: 5000,
      agongsol: 3000,
      akeling: 3000,
      asimpangempat: 7000,
      anaman: 10000,
      akawar: 13000,
    },
    pajakbuah: {
      apajakbawah: 3000,
      aperjuangan: 3000,
      apajakbuah: 3000,
      agundaling: 5000,
      agongsol: 3000,
      akeling: 3000,
      asimpangempat: 7000,
      anaman: 10000,
      akawar: 13000,
    },
    gundaling: {
      apajakbawah: 5000,
      aperjuangan: 3000,
      apajakbuah: 3000,
      agundaling: 3000,
      agongsol: 5000,
      akeling: 5000,
      asimpangempat: 9000,
      anaman: 12000,
      akawar: 15000,
    },
    gongsol: {
      apajakbawah: 3000,
      aperjuangan: 3000,
      apajakbuah: 3000,
      agundaling: 5000,
      agongsol: 3000,
      akeling: 3000,
      asimpangempat: 9000,
      anaman: 12000,
      akawar: 15000,
    },
    keling: {
      apajakbawah: 3000,
      aperjuangan: 3000,
      apajakbuah: 3000,
      agundaling: 8000,
      agongsol: 3000,
      akeling: 3000,
      asimpangempat: 9000,
      anaman: 12000,
      akawar: 15000,
    },
    simpangempat: {
      apajakbawah: 7000,
      aperjuangan: 7000,
      apajakbuah: 7000,
      agundaling: 9000,
      agongsol: 9000,
      akeling: 9000,
      asimpangempat: 3000,
      anaman: 13000,
      akawar: 16000,
    },
    naman: {
      apajakbawah: 10000,
      aperjuangan: 10000,
      apajakbuah: 10000,
      agundaling: 15000,
      agongsol: 12000,
      akeling: 12000,
      asimpangempat: 13000,
      anaman: 3000,
      akawar: 3000,
    },
    kawar: {
      apajakbawah: 13000,
      aperjuangan: 13000,
      apajakbuah: 13000,
      agundaling: 15000,
      agongsol: 15000,
      akeling: 15000,
      asimpangempat: 16000,
      anaman: 3000,
      akawar: 3000,
    },
  },
  SIGANTANG: {
    kabanjahe: {
      akabanjahe: 3000,
      apajakbawah: 6000,
      aperjuangan: 6000,
      abukitkubu: 6000,
      aholiday: 7000,
      apeceren: 7000,
      atongkoh: 9000,
      alumbini: 10000,
      abasam: 12000,
      aujungaji: 5000,
    },
    pajakbawah: {
      akabanjahe: 6000,
      apajakbawah: 3000,
      aperjuangan: 3000,
      abukitkubu: 3000,
      aholiday: 3000,
      apeceren: 3000,
      atongkoh: 4000,
      alumbini: 6000,
      abasam: 8000,
      aujungaji: 3000,
    },
    perjuangan: {
      akabanjahe: 6000,
      apajakbawah: 3000,
      aperjuangan: 3000,
      abukitkubu: 3000,
      aholiday: 3000,
      apeceren: 3000,
      atongkoh: 4000,
      alumbini: 6000,
      abasam: 8000,
      aujungaji: 3000,
    },
    bukitkubu: {
      akabanjahe: 7000,
      apajakbawah: 3000,
      aperjuangan: 3000,
      abukitkubu: 3000,
      aholiday: 3000,
      apeceren: 3000,
      atongkoh: 3000,
      alumbini: 5000,
      abasam: 6000,
      aujungaji: 4000,
    },
    holiday: {
      akabanjahe: 8000,
      apajakbawah: 3000,
      aperjuangan: 3000,
      abukitkubu: 3000,
      aholiday: 3000,
      apeceren: 3000,
      atongkoh: 3000,
      alumbini: 4000,
      abasam: 5000,
      aujungaji: 4000,
    },
    peceren: {
      akabanjahe: 8000,
      apajakbawah: 3000,
      aperjuangan: 3000,
      abukitkubu: 3000,
      aholiday: 3000,
      apeceren: 3000,
      atongkoh: 3000,
      alumbini: 4000,
      abasam: 5000,
      aujungaji: 4000,
    },
    tongkoh: {
      akabanjahe: 10000,
      apajakbawah: 4000,
      aperjuangan: 4000,
      abukitkubu: 3000,
      aholiday: 3000,
      apeceren: 3000,
      atongkoh: 3000,
      alumbini: 4000,
      abasam: 3000,
      aujungaji: 5000,
    },
    lumbini: {
      akabanjahe: 12000,
      apajakbawah: 6000,
      aperjuangan: 6000,
      abukitkubu: 5000,
      aholiday: 4000,
      apeceren: 4000,
      atongkoh: 4000,
      alumbini: 3000,
      abasam: 3000,
      aujungaji: 5000,
    },
    basam: {
      akabanjahe: 14000,
      apajakbawah: 8000,
      aperjuangan: 8000,
      abukitkubu: 7000,
      aholiday: 6000,
      apeceren: 6000,
      atongkoh: 3000,
      alumbini: 3000,
      abasam: 3000,
      aujungaji: 10000,
    },
  },
};

// mengupdate opsi pada elemen dropdown 4 berdasarkan pilihan pada elemen dropdown 1,2,3
function updateComboBox4() {
  const selectedValue1 = comboBox1.value;
  const selectedValue2 = comboBox2.value;
  const selectedValue3 = comboBox3.value;

  // Hapus semua opsi pada elemen dropdown keempat
  comboBox4.options.length = 0;

  // Kalok nilai yang diperlukan tersedia, akan menambah opsi biaya yang sesuai ke drop ke 4
  if (
    selectedValue1 in biaya &&
    selectedValue2 in biaya[selectedValue1] &&
    selectedValue3 in biaya[selectedValue1][selectedValue2]
  ) {
    const biayaValue = biaya[selectedValue1][selectedValue2][selectedValue3];
    comboBox4.add(new Option(`Rp ${biayaValue.toLocaleString()}`, biayaValue));
  } else {
    comboBox4.add(new Option("Jalur Salah", ""));
  }
}

// Fungsi untuk mengupdate combo box pertama berdasarkan pilihan pada combo box kedua dan ketiga
function updateComboBox1() {
  const selectedValue2 = comboBox2.value;
  const selectedValue3 = comboBox3.value;

  // Cari merek angkot yang sesuai dengan pilihan di combo box kedua dan ketiga
  for (const merek in biaya) {
    if (
      selectedValue2 in biaya[merek] &&
      selectedValue3 in biaya[merek][selectedValue2]
    ) {
      comboBox1.value = merek;
      break;
    }
  }

  // Update combo box keempat
  updateComboBox4();
}

// event listener  elemen dropdown 1, 2,3 untuk mengupdate opsi pada elemen dropdown 4
comboBox1.addEventListener("change", updateComboBox4);
comboBox2.addEventListener("change", updateComboBox1);
comboBox3.addEventListener("change", updateComboBox1);

// // Peta Jalur
// function showMap(selectedTransportation) {
//   var mapImage = document.getElementById("map-image");

//   if (selectedTransportation === "KT") {
//     mapImage.src = "img/peta/Upload/peta kt.jpg";
//   } else if (selectedTransportation === "KAMA") {
//     mapImage.src = "img/peta/Upload/peta kama.jpg";
//   } else if (selectedTransportation === "TAKASIMA") {
//     mapImage.src = "img/peta/Upload/peta takasima.jpg";
//   } else if (selectedTransportation === "RIO") {
//     mapImage.src = "img/peta/Upload/peta rio.jpg";
//   } else if (selectedTransportation === "SIBAYAK") {
//     mapImage.src = "img/peta/Upload/peta sibayak.jpg";
//   } else if (selectedTransportation === "SIGANTANG") {
//     mapImage.src = "img/peta/Upload/peta sigantang.jpg";
//   } else if (selectedTransportation === "BAYU") {
//     mapImage.src = "img/peta/Upload/peta bayu.jpg";
//   }

//   setTimeout(function () {
//     mapImage.classList.add("show");
//   }, 10);

//   setTimeout(function () {
//     mapImage.classList.remove("show");
//   }, false);
// }

// // Leaflet Routing Machine

// Inisialisasi peta
var mymap = L.map("mymap").setView([3.189, 98.5089], 13);

// Tambahkan tile layer untuk peta dasar
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors",
}).addTo(mymap);

// Simpan objek routing control ke dalam variabel global
var routingControl = null;

// Fungsi untuk menghapus rute
function hapusRute() {
  if (routingControl !== null) {
    mymap.removeControl(routingControl);
    routingControl = null;
  }
}

// Tambahkan geocoder control
var geocoder = L.Control.geocoder({
  defaultMarkGeocode: false,
})
  .on("markgeocode", function (e) {
    // Hapus rute sebelumnya jika ada
    hapusRute();

    var latlng = e.geocode.center;
    routingControl = L.Routing.control({
      waypoints: [
        L.latLng(3.1902, 98.5087), // Koordinat Berastagi
        latlng,
      ],
      routeWhileDragging: true,
      routeLine: function (route, options) {
        var line = L.Routing.line(route, {
          addWaypoints: false,
          extendToWaypoints: false,
          routeLine: function (routeLine) {
            return L.polyline(routeLine.getLatLngs(), { color: "blue" });
          },
        });
        return line;
      },
      createMarker: function (i, waypoint, n) {
        // Buat marker untuk setiap destinasi dengan warna yang berbeda-beda
        var colors = ["red", "blue", "green", "yellow", "orange"];
        var color = colors[i % colors.length];
        return L.marker(waypoint.latLng, {
          draggable: true,
          icon: L.icon({
            iconUrl:
              "https://raw.githubusercontent.com/BerastagiTrack/ikon/main/car-solid-" +
              color +
              ".png",
            iconSize: [70, 60],
            iconAnchor: [32, 41],
          }),
        }).bindPopup("Destinasi #" + (i + 1));
      },
      collapsible: true,
    }).addTo(mymap);

    // Menambahkan warna background ke deskripsi rute
    var routeContainer = document.querySelector(".leaflet-routing-container");
    if (routeContainer) {
      routeContainer.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
      routeContainer.style.padding = "2px";
    }
  })
  .addTo(mymap);

// Tambahkan tombol "Hapus Rute"
var hapusRuteButton = L.Control.extend({
  options: {
    position: "topright",
  },

  onAdd: function () {
    var container = L.DomUtil.create("div", "leaflet-bar leaflet-control");

    var link = L.DomUtil.create("a", "leaflet-control-custom");
    link.href = "#map";
    link.title = "Hapus Rute";
    link.innerHTML = "X";
    L.DomEvent.on(link, "click", function (e) {
      hapusRute();
      L.DomEvent.stopPropagation(e);
    });

    container.appendChild(link);

    return container;
  },
});

mymap.addControl(new hapusRuteButton());
