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
    query.includes("opsi1") ||
    query.includes("daftar transportasi") ||
    query.includes("angkot") ||
    query.includes("angkutan") ||
    query.includes("harga") ||
    query.includes("ongkos") ||
    query.includes("harga ongkos") ||
    query.includes("harga ongkos kt") ||
    query.includes("harga ongkos kama") ||
    query.includes("harga ongkos bayu") ||
    query.includes("harga ongkos sibayak") ||
    query.includes("harga ongkos rio") ||
    query.includes("harga ongkos taksima") ||
    query.includes("harga ongkos sigantang") ||
    query.includes("harga ongkos sigantang sira") ||
    query.includes("daftar ongkos") ||
    query.includes("biaya angkot") ||
    query.includes("kt") ||
    query.includes("kama") ||
    query.includes("bayu") ||
    query.includes("sigantang") ||
    query.includes("sigantang sira") ||
    query.includes("takasima") ||
    query.includes("rio") ||
    query.includes("sibayak") ||
    query.includes("pilih angkot") ||
    query.includes("pilih angkutan") ||
    query.includes("pesan") ||
    query.includes("cara pesan") ||
    query.includes("bagaimana cara memesan angkutan") ||
    query.includes("bagaimana cara melakukan pemesanan") ||
    query.includes("karya transport") ||
    query.includes("informasi biaya") ||
    query.includes("informasi biaya angkot") ||
    query.includes("kelliling berastagi") ||
    query.includes("mobil") ||
    query.includes("mobil angkutan") ||
    query.includes("mobil angkot") ||
    query.includes("mobil sigantang") ||
    query.includes("mobil sigantang sira") ||
    query.includes("mobil kt") ||
    query.includes("mobil karya transport") ||
    query.includes("mobil kama") ||
    query.includes("mobil bayu") ||
    query.includes("mobil rio") ||
    query.includes("mobil takasima") ||
    query.includes("mobil sibayak") ||
    query.includes("pilihan transportasi") ||
    query.includes("transportasi terdekat") ||
    query.includes("jadwal angkot") ||
    query.includes("daftar angkutan umum") ||
    query.includes("rute angkutan umum berastagi") ||
    query.includes("informasi angkutan umum berastagi") ||
    query.includes("cara menggunakan angkutan umum di berastagi") ||
    query.includes("akses transportasi di berastagi") ||
    query.includes("akses angkot di berastagi") ||
    query.includes("angkutan umum berastagi terbaru") ||
    query.includes("info angkutan terbaru") ||
    query.includes("info biaya angkot terbaru") ||
    query.includes("info terbaru") ||
    query.includes("cara ke kabanjahe") ||
    query.includes("cara ke pajak buah") ||
    query.includes("cara ke tugu perjuangan") ||
    query.includes("cara ke pajak bawah") ||
    query.includes("cara ke jalan kolam") ||
    query.includes("cara ke smpn2") ||
    query.includes("cara ke smp negeri 2") ||
    query.includes("cara ke lau sidebuk debuk") ||
    query.includes("cara ke sidebuk debuk") ||
    query.includes("cara ke jaranguda") ||
    query.includes("cara ke gunung sibayak") ||
    query.includes("cara ke pintu gunung sibayak") ||
    query.includes("cara ke tempat pemerasan susu sapi") ||
    query.includes("cara ke pemerasan susu sapi") ||
    query.includes("cara ke gundaling") ||
    query.includes("cara ke jalan surya indah") ||
    query.includes("cara ke lingga") ||
    query.includes("cara ke desa lingga") ||
    query.includes("cara ke simpang ujung aji") ||
    query.includes("cara ke ujung aji") ||
    query.includes("cara ke aji julu") ||
    query.includes("cara ke aji jahe") ||
    query.includes("cara ke bukit kubu") ||
    query.includes("cara ke mickey holiday") ||
    query.includes("cara ke miki holiday") ||
    query.includes("cara ke peceren") ||
    query.includes("cara ke taman lumbini") ||
    query.includes("cara ke jalan udara") ||
    query.includes("cara ke lau kawar") ||
    query.includes("cara ke gongsol") ||
    query.includes("cara ke kampung keling") ||
    query.includes("cara ke keling") ||
    query.includes("cara ke tongkoh") ||
    query.includes("ongkos ke kabanjahe") ||
    query.includes("ongkos ke pajak bawah") ||
    query.includes("ongkos ke tugu perjuangan") ||
    query.includes("ongkos ke pajak buah") ||
    query.includes("ongkos ke jalan kolam") ||
    query.includes("ongkos ke smpn2") ||
    query.includes("ongkos ke smp negeri2") ||
    query.includes("ongkos ke lau sidebuk debuk") ||
    query.includes("ongkos ke sidebuk debuk") ||
    query.includes("ongkos ke jaranguda") ||
    query.includes("ongkos ke gunung sibayak") ||
    query.includes("ongkos ke pintu gunung sibayak") ||
    query.includes("ongkos ke pemerasan susu sapi") ||
    query.includes("ongkos ke tempat pemerasan susu sapi") ||
    query.includes("ongkos ke gundaling") ||
    query.includes("ongkos ke jalan surya indah") ||
    query.includes("ongkos ke lingga") ||
    query.includes("ongkos ke desa lingga") ||
    query.includes("ongkos ke simpang ujung aji") ||
    query.includes("ongkos ke ujung aji") ||
    query.includes("ongkos ke aji julu") ||
    query.includes("ongkos ke aji jahe") ||
    query.includes("ongkos ke bukit kubu") ||
    query.includes("ongkos ke mickey holiday") ||
    query.includes("ongkos ke miki") ||
    query.includes("ongkos ke miki holiday") ||
    query.includes("ongkos ke miky holiday") ||
    query.includes("ongkos ke peceren") ||
    query.includes("ongkos ke taman lumbini") ||
    query.includes("ongkos ke jalan udara") ||
    query.includes("ongkos ke lau kawar") ||
    query.includes("ongkos ke gongsol") ||
    query.includes("ongkos ke kampung keling") ||
    query.includes("ongkos ke keling") ||
    query.includes("ongkos ke tongkoh") ||
    query.includes("ongkos ke tongkeh") ||
    query.includes("ongkos ke kabanjahe dari berastagi") ||
    query.includes("ongkos ke kabanjahe dari pajak buah") ||
    query.includes("ongkos ke kabanjahe dari tugu perjuangan") ||
    query.includes("ongkos ke kabanjahe dari lau kawar") ||
    query.includes("ongkos ke kabanjahe dari bukit kubu") ||
    query.includes("ongkos ke kabanjahe dari jalan udara") ||
    query.includes("ongkos ke kabanjahe dari miki holiday") ||
    query.includes("ongkos ke kabanjahe dari peceren") ||
    query.includes("ongkos ke kabanjahe dari taman lumbini") ||
    query.includes("ongkos dari kabanjahe ke berastagi") ||
    query.includes("ongkos dari kabanjahe ke pajak buah") ||
    query.includes("ongkos dari kabanjahe ke tugu perjuangan") ||
    query.includes("ongkos dari kabanjahe ke bukit kubu") ||
    query.includes("ongkos dari kabanjahe ke peceren") ||
    query.includes("ongkos dari kabanjahe ke gundaling") ||
    query.includes("ongkos dari kabanjahe ke jaranguda") ||
    query.includes("ongkos dari kabanjahe ke lingga") ||
    query.includes("ongkos dari kabanjahe ke jalan udara") ||
    query.includes("ongkos dari berastagi ke ") ||
    query.includes("ongkos dari berastagi ke ") ||
    query.includes("ongkos dari berastagi ke ") ||
    query.includes("ongkos dari berastagi ke ") ||
    query.includes("ongkos dari berastagi ke ") ||
    query.includes("ongkos dari berastagi ke ") ||
    query.includes("ongkos dari berastagi ke ") ||
    query.includes("ongkos dari berastagi ke ") ||
    query.includes("ongkos dari berastagi ke ") ||
    query.includes("ongkos dari berastagi ke ") ||
    query.includes("ongkos dari berastagi ke ") ||
    query.includes("ongkos dari berastagi ke ") ||
    query.includes("ongkos dari berastagi ke ") ||
    query.includes("ongkos dari berastagi ke ") ||
    query.includes("ongkos dari berastagi ke ") ||
    query.includes("ongkos dari berastagi ke ") ||
    query.includes("ongkos dari berastagi ke ") ||
    query.includes("ongkos dari berastagi ke ") ||
    query.includes("ongkos dari berastagi ke ") ||
    query.includes("ongkos dari berastagi ke ") ||
    query.includes("ongkos dari berastagi ke ") ||
    query.includes("ongkos dari berastagi ke ") ||
    query.includes("ongkos dari berastagi ke ") ||
    query.includes("ongkos dari berastagi ke ") ||
    query.includes("ongkos dari berastagi ke ") ||
    query.includes("ongkos dari berastagi ke ") ||
    query.includes("ongkos dari berastagi ke ") ||
    query.includes("ongkos dari berastagi ke ") ||
    query.includes("ongkos dari berastagi ke ") ||
    query.includes("ongkos dari berastagi ke ") ||
    query.includes("ongkos dari berastagi ke ") ||
    query.includes("") ||
    query.includes("") ||
    query.includes("") ||
    query.includes("") ||
    query.includes("") ||
    query.includes("") ||
    query.includes("") ||
    query.includes("") ||
    query.includes("") ||
    query.includes("") ||
    query.includes("") ||
    query.includes("") ||
    query.includes("") ||
    query.includes("") ||
    query.includes("") ||
    query.includes("") ||
    query.includes("") ||
    query.includes("") ||
    query.includes("") ||
    query.includes("") ||
    query.includes("") ||
    query.includes("") ||
    query.includes("") ||
    query.includes("") ||
    query.includes("") ||
    query.includes("") ||
    query.includes("") ||
    query.includes("") ||
    query.includes("") ||
    query.includes("") ||
    query.includes("") ||
    query.includes("") ||
    query.includes("") ||
    query.includes("") ||
    query.includes("") ||
    query.includes("") ||
    query.includes("") ||
    query.includes("") ||
    query.includes("") ||
    query.includes("") ||
    query.includes("info ongkos")
  ) {
    var targetElement = document.getElementById("menu");
    targetElement.scrollIntoView({ behavior: "smooth" });
  } else if (
    query.includes("program2") ||
    query.includes("pilihan2") ||
    query.includes("peta") ||
    query.includes("peta angkutan") ||
    query.includes("peta angkot") ||
    query.includes("peta angkot kt") ||
    query.includes("peta angkot karya transport") ||
    query.includes("peta angkot kama") ||
    query.includes("peta angkot bayu") ||
    query.includes("peta angkot takasima") ||
    query.includes("peta angkot rio") ||
    query.includes("peta angkot sibayak") ||
    query.includes("peta angkot sigantang") ||
    query.includes("peta angkot sigantang sira") ||
    query.includes("peta kama") ||
    query.includes("peta kt") ||
    query.includes("peta karya transport") ||
    query.includes("peta bayu") ||
    query.includes("peta sibayak") ||
    query.includes("peta rio") ||
    query.includes("peta sigantang") ||
    query.includes("peta sigantang sira") ||
    query.includes("peta wilayah") ||
    query.includes("peta wilayah berastagi") ||
    query.includes("wilayah berastagi") ||
    query.includes("marka berastagi") ||
    query.includes("tampilan peta") ||
    query.includes("tampilan peta berastagi") ||
    query.includes("tampilan peta angkot berastagi") ||
    query.includes("rute berastagi") ||
    query.includes("rute angkot berastagi") ||
    query.includes("rute angkutan berastagi") ||
    query.includes("rute peta") ||
    query.includes("peta rute") ||
    query.includes("peta rute angkutan berastagi") ||
    query.includes("peta rute kt") ||
    query.includes("peta rute karya transport") ||
    query.includes("peta rute kama") ||
    query.includes("peta rute bayu") ||
    query.includes("peta rute sigantang") ||
    query.includes("peta rute sigantang sira") ||
    query.includes("peta rute sibayak") ||
    query.includes("peta rute takasima") ||
    query.includes("peta rute angkutan kt") ||
    query.includes("peta rute angkutan karya transport") ||
    query.includes("peta rute angkutan kama") ||
    query.includes("peta rute angkutan bayu") ||
    query.includes("peta rute angkutan sigantang") ||
    query.includes("peta rute angkutan sigantang sira") ||
    query.includes("peta rute angkutan sibayak") ||
    query.includes("peta rute angkutan takasima") ||
    query.includes("peta rute angkot kt") ||
    query.includes("peta rute angkot karya transport") ||
    query.includes("peta rute angkot kama") ||
    query.includes("peta rute angkot bayu") ||
    query.includes("peta rute angkot sigantang") ||
    query.includes("peta rute angkot sigantang sira") ||
    query.includes("peta rute angkot sibayak") ||
    query.includes("peta rute angkot takasima") ||
    query.includes("wilayah kt") ||
    query.includes("wilayah kama") ||
    query.includes("wilayah bayu") ||
    query.includes("wilayah takasima") ||
    query.includes("wilayah sigantang") ||
    query.includes("wilayah rio") ||
    query.includes("wilayah sigantang sira") ||
    query.includes("wilayah karya transport") ||
    query.includes("wilayah sibayak") ||
    query.includes("map angkutan umum berastagi") ||
    query.includes("map") ||
    query.includes("opsi2")
  ) {
    var targetElement = document.getElementById("map");
    targetElement.scrollIntoView({ behavior: "smooth" });
  } else if (
    query.includes("program3") ||
    query.includes("berastagi") ||
    query.includes("tentang berastagi") ||
    query.includes("mengenai berastagi") ||
    query.includes("info berastagi") ||
    query.includes("informasi berastagi") ||
    query.includes("informasi tentang berastagi") ||
    query.includes("hal hal di berastagi") ||
    query.includes("kenapa berastagi") ||
    query.includes("mengapa berastagi") ||
    query.includes("bagaimana dengan berastagi") ||
    query.includes("yang perlu diketahui") ||
    query.includes("destinasi wisata") ||
    query.includes("destinasi wisata berastagi") ||
    query.includes("destinasi wisata di berastagi") ||
    query.includes("pilihan tempat wisata di berastagi") ||
    query.includes("wisata apa saja yang ada di berastagi") ||
    query.includes("tempat wisata apa saja di berastagi") ||
    query.includes("keindahan berastagi") ||
    query.includes("cuaca berastagi") ||
    query.includes("udara berastagi") ||
    query.includes("udara di berastagi") ||
    query.includes("suasana berastagi") ||
    query.includes("suasana di berastagi") ||
    query.includes("keadaan berastagi") ||
    query.includes("keadaan di berastagi") ||
    query.includes("yang perlu di hindari") ||
    query.includes("jeruk berastagi") ||
    query.includes("bagaimana cara ke berastagi") ||
    query.includes("apa itu berastagi") ||
    query.includes("apa berastagi") ||
    query.includes("arah ke berastagi") ||
    query.includes("cara ke berastagi") ||
    query.includes("hotel berastagi") ||
    query.includes("bunga di berastagi") ||
    query.includes("info tentang berastagi") ||
    query.includes("") ||
    query.includes("") ||
    query.includes("") ||
    query.includes("") ||
    query.includes("") ||
    query.includes("") ||
    query.includes("") ||
    query.includes("") ||
    query.includes("") ||
    query.includes("") ||
    query.includes("") ||
    query.includes("opsi3")
  ) {
    var targetElement = document.getElementById("about");
    targetElement.scrollIntoView({ behavior: "smooth" });
  } else if (
    query.includes("program4") ||
    query.includes("pilihan4") ||
    query.includes("opsi4")
  ) {
    var targetElement = document.getElementById("map");
    targetElement.scrollIntoView({ behavior: "smooth" });
  } else if (
    query.includes("program5") ||
    query.includes("pilihan5") ||
    query.includes("opsi5")
  ) {
    var targetElement = document.getElementById("map");
    targetElement.scrollIntoView({ behavior: "smooth" });
  } else if (
    query.includes("program6") ||
    query.includes("pilihan6") ||
    query.includes("opsi6")
  ) {
    var targetElement = document.getElementById("about");
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

// // Toggle class active untuk daftar pilihan angkutan
// const truck = document.querySelector(".truck");
// document.querySelector("#truck-button").onclick = (e) => {
//   truck.classList.toggle("active");
//   e.preventDefault();
// };

// KLik diluar element
const GB = document.querySelector("#git-branch");
const SB = document.querySelector("#search-button");
// const T = document.querySelector("#truck-button");

document.addEventListener("click", function (e) {
  if (!GB.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!SB.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }

  // if (!T.contains(e.target) && !truck.contains(e.target)) {
  //   truck.classList.remove("active");
  // }

  if (!IDM.contains(e.target) && !modal.contains(e.target)) {
    modal.classList.remove("active");
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

// klik diluar modal KT
const modal = document.querySelector("#item-detail-modal");
window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};

// // Toggle class active untuk info setiap angkutan
// const modal = document.querySelector(".modal");
// document.querySelector("#item-detail-modal").onclick = (e) => {
//   modal.classList.toggle("active");
//   e.preventDefault();
// };

// // Click diluar element
// const IDM = document.querySelector("#item-detail-modal");
// const IDMK = document.querySelector("#item-detail-modal-kama");

// document.addEventListener("click", function (e) {
//   if (!IDM.contains(e.target) && !modal.contains(e.target)) {
//     modal.classList.remove("active");
//   }
// });

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

// klik diluar modal kama
const modalkama = document.querySelector("#item-detail-modal-kama");
window.onclick = (e) => {
  if (e.target === modalkama) {
    modalkama.style.display = "none";
  }
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

// klik diluar modal bayu
const modalbayu = document.querySelector("#item-detail-modal-bayu");
window.onclick = (e) => {
  if (e.target === modalbayu) {
    modalbayu.style.display = "none";
  }
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

// klik diluar modal sibayak
const modalsibayak = document.querySelector("#item-detail-modal-sibayak");
window.onclick = (e) => {
  if (e.target === modalsibayak) {
    modalsibayak.style.display = "none";
  }
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

// klik diluar modal rio
const modalrio = document.querySelector("#item-detail-modal-rio");
window.onclick = (e) => {
  if (e.target === modalrio) {
    modalrio.style.display = "none";
  }
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

// klik diluar modal takasima
const modaltakasima = document.querySelector("#item-detail-modal-takasima");
window.onclick = (e) => {
  if (e.target === modaltakasima) {
    modaltakasima.style.display = "none";
  }
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

// klik diluar modal sigantang
const modalsigantang = document.querySelector("#item-detail-modal-sigantang");
window.onclick = (e) => {
  if (e.target === modalsigantang) {
    modalsigantang.style.display = "none";
  }
};

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

// Peta Jalur
function showMap(selectedTransportation) {
  var mapImage = document.getElementById("map-image");

  if (selectedTransportation === "KT") {
    mapImage.src = "img/peta/Upload/peta kt.jpg";
  } else if (selectedTransportation === "KAMA") {
    mapImage.src = "img/peta/Upload/peta kama.jpg";
  } else if (selectedTransportation === "TAKASIMA") {
    mapImage.src = "img/peta/Upload/peta takasima.jpg";
  } else if (selectedTransportation === "RIO") {
    mapImage.src = "img/peta/Upload/peta rio.jpg";
  } else if (selectedTransportation === "SIBAYAK") {
    mapImage.src = "img/peta/Upload/peta sibayak.jpg";
  } else if (selectedTransportation === "SIGANTANG") {
    mapImage.src = "img/peta/Upload/peta sigantang.jpg";
  } else if (selectedTransportation === "BAYU") {
    mapImage.src = "img/peta/Upload/peta bayu.jpg";
  }

  setTimeout(function () {
    mapImage.classList.add("show");
  }, 10);

  setTimeout(function () {
    mapImage.classList.remove("show");
  }, false);
}
