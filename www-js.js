const navBases = document.querySelectorAll(".nav-base");
const btn_bayarSPP = document.querySelector("#btn-bayar-spp");
const btn_bayarBuku = document.querySelector("#btn-bayar-buku");
const btn_tambahBuku = document.querySelector("#btn-tambah-buku");
const btn_bayarBaju = document.querySelector("#btn-bayar-baju");
const btn_tambahBaju = document.querySelector("#btn-tambah-baju");
const btn_bayarKegiatan = document.querySelector("#btn-bayar-kegiatan");
const modal = document.getElementById("modal");
const modalSpp = document.getElementById("modal-spp");
const modalBuku = document.getElementById("modal-buku");
const modalBaju = document.getElementById("modal-baju");
const modalKegiatan = document.getElementById("modal-kegiatan");
const bayarSpp = document.getElementById("modal-spp-plus");
const bayarBuku = document.getElementById("modal-buku-plus");
const bayarBaju = document.getElementById("modal-baju-plus");
const bayarKegiatan = document.getElementById("modal-kegiatan-plus");
const TambahBuku = document.getElementById("modal-buku-edit");
const TambahBaju = document.getElementById("modal-baju-edit");
const topBar = document.querySelector(".top-bar");
const closeModalButtons = modal.querySelectorAll(".close-modal");
const pencarianSpp = document.getElementById("search-spp");
const pencarianBuku = document.getElementById("search-buku");
const pencarianBaju = document.getElementById("search-baju");
const pencarianKegiatan = document.getElementById("search-kegiatan");
const searchSpp = document.getElementById("pencarian-spp");
const searchBuku = document.getElementById("pencarian-buku");
const searchBaju = document.getElementById("pencarian-baju");
const searchKegiatan = document.getElementById("pencarian-kegiatan");
const menu = document.getElementById("menu-bar");
const nav = document.querySelector(".navbar");
const main = document.querySelector(".main");
const card_modals = document.querySelectorAll(".modal-card");
const btnHistory = document.querySelector(".btn-history");
const modalSide = document.getElementById("modal-history");
const riwayatHeader = document.querySelectorAll(".topic-history");
const buttonAll = document.querySelectorAll(".btn.full");
const card_el = document.querySelectorAll(".modal-card");
const namaSiswaSpp = document.getElementById("nama-siswa-spp");
const namaSiswaBuku = document.getElementById("nama-siswa-buku");
const namaSiswaBaju = document.getElementById("nama-siswa-baju");
const namaSiswaKegiatan = document.getElementById("nama-siswa-kegiatan");
const namaPesanBuku = document.getElementById("nama-pesan-buku");
const namaPesanBaju = document.getElementById("nama-pesan-baju");
const dropSelectSPP = document.getElementById("cari-drop-select-spp");
const dropSelectBuku = document.getElementById("cari-drop-select-buku");
const dropSelectBaju = document.getElementById("cari-drop-select-baju");
const dropSelectKegiatan = document.getElementById("cari-drop-select-kegiatan");
const dropPesanBuku = document.getElementById("cari-drop-pesan-buku");
const dropPesanBaju = document.getElementById("cari-drop-pesan-baju");
const allDropSelect = document.querySelectorAll(".drop-select");
const inputBulanSPP = document.getElementById("bulan-spp");
const listNamaSiswa = document.querySelectorAll(".drop-select p");
const allInputs = document.querySelectorAll('input:not([type="date"])');
const sppCheckBox = document.querySelectorAll(
  "#chip-spp input[type='checkbox']"
);
const currencyInputs = document.querySelectorAll("input[data-type='currency']");
const selectiveInput = document.querySelectorAll(
  "input[data-type='selective']"
);
const inputDates = document.querySelectorAll(".tanggal");
const widthVW = window.innerWidth;
const noResultsMessage = document.createElement("p");
const namaDropSiswaSPP = dropSelectSPP.closest(".drop-select");
const namaDropSiswaBuku = dropSelectBuku.closest(".drop-select");
const namaDropPesanBuku = dropPesanBuku.closest(".drop-select");
const namaDropSiswaBaju = dropSelectBaju.closest(".drop-select");
const namaDropPesanBaju = dropPesanBaju.closest(".drop-select");
const namaDropSiswaKegiatan = dropSelectKegiatan.closest(".drop-select");
const parentNama = document.querySelectorAll(".w-label.drop-parent");
const tutupDropSelect = document.querySelectorAll("#back-drop-select");
const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, "0"); // Ingat bahwa bulan dimulai dari 0 (Januari adalah bulan 0)
const day = String(today.getDate()).padStart(2, "0"); // PadStart untuk menambahkan '0' jika hanya satu digit
const formattedDate = `${year}-${month}-${day}`;

 //Splash Screen
  function splashOn() {
    const splashScreen = document.querySelector(".splash-screen");
    setTimeout(() => {
      splashScreen.classList.add("remove");
      setTimeout(() => {
        splashScreen.style.display = "none";
      }, 1000);
    }, 2000);
  }
  splashOn();

document.addEventListener("DOMContentLoaded", () => {
  //Navbar
  // Tambahkan event listener untuk setiap nav-base
  navBases.forEach(function (navBase) {
    navBase.addEventListener("click", () => {
      navBases.forEach((item) => {
        item.classList.remove("active");
      });
      navBase.classList.add("active");
      showContent(navBase.id);
      window.scrollTo({
        top: 0,
        behavior: "instant", // Pilihan "smooth" membuat scroll menjadi halus
      });
    });
  });

  // Fungsi untuk menampilkan konten yang sesuai dengan id
  function showContent(id) {
    const allContents = document.querySelectorAll(".main-page > div");
    allContents.forEach((content) => {
      content.style.display = "none";
      const fabBtnSecondChild = content.querySelectorAll(
        ".btn-fab:nth-child(2)"
      );
      fabBtnSecondChild.forEach((fabBtn) => {
        if (fabBtn) {
          fabBtn.classList.remove("active");
        }
      });
    });

    // Kemudian konten yang sesuai ditampilkan
    const contentElement = document.getElementById("content-" + id);
    if (contentElement) {
      contentElement.style.display = "block";
      setTimeout(() => {
        const fabBtnSecondChild = contentElement.querySelector(
          ".btn-fab:nth-child(2)"
        );
        if (fabBtnSecondChild) {
          fabBtnSecondChild.classList.add("active");
        }
      }, 50);
    }
  }

  menu.addEventListener("click", function () {
    this.classList.toggle("active");
    nav.classList.toggle("active");
    main.classList.toggle("active");
  });

  //Topbar
  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      topBar.classList.add("scroll");
    } else {
      topBar.classList.remove("scroll");
    }
  });

  //Main
  // fungsi mencari nama siswa di dalam page
  function SearchItems(event, start) {
    event.addEventListener("input", function () {
      start.appendChild(noResultsMessage);
      const searchTerm = event.value.toLowerCase();
      let foundSpp = false;
      const listData = start.querySelectorAll(".data-siswa");
      listData.forEach(function (item) {
        const text = item.textContent.toLowerCase();
        if (text.includes(searchTerm)) {
          item.style.display = "grid";
          foundSpp = true;
        } else {
          item.style.display = "none";
        }
      });

      if (foundSpp) {
        noResultsMessage.style.display = "none";
      } else {
        noResultsMessage.style.display = "block";
      }
    });
  }
  SearchItems(pencarianSpp, searchSpp);
  SearchItems(pencarianBuku, searchBuku);
  SearchItems(pencarianBaju, searchBaju);
  SearchItems(pencarianKegiatan, searchKegiatan);

  //Fab Button
  function fabModal(event, target) {
    event.addEventListener("click", () => {
      modal.classList.add("active");
      target.classList.remove("non");
      setTimeout(() => {
        target.classList.add("active");
      }, 50);
      document.body.classList.add("modal-open");
    });
  }

  fabModal(btn_bayarSPP, bayarSpp);
  fabModal(btn_bayarBuku, bayarBuku);
  fabModal(btn_tambahBuku, TambahBuku);
  fabModal(btn_bayarBaju, bayarBaju);
  fabModal(btn_tambahBaju, TambahBaju);
  fabModal(btn_bayarKegiatan, bayarKegiatan);
  fabModal(btnHistory, modalSide);
  
  function tutupModals() {
    modal.classList.remove("active");
    modalSpp.classList.remove("active");
    modalSpp.classList.add("non");
    bayarSpp.classList.remove("active");
    bayarSpp.classList.add("non");
    modalBuku.classList.remove("active");
    modalBuku.classList.add("non");
    bayarBuku.classList.remove("active");
    bayarBuku.classList.add("non");
    TambahBuku.classList.remove("active");
    TambahBuku.classList.add("non");
    modalBaju.classList.remove("active");
    modalBaju.classList.add("non");
    bayarBaju.classList.remove("active");
    bayarBaju.classList.add("non");
    TambahBaju.classList.remove("active");
    TambahBaju.classList.add("non");
    modalKegiatan.classList.remove("active");
    modalKegiatan.classList.add("non");
    bayarKegiatan.classList.remove("active");
    bayarKegiatan.classList.add("non");
    modalSide.classList.remove("active");
    modalSide.classList.add("non");
    allDropSelect.forEach((e) => e.classList.remove("active"));
    document.body.classList.remove("modal-open");
    allInputs.forEach((el) => {
      el.checked = false;
      el.value = "";
    });
  }

  // Event listener untuk menutup modal saat modal di luar area konten diklik
  modal.addEventListener("click", tutupModals);

  // Event listener untuk menutup modal saat tombol close-modal di dalam modalSpp diklik
  closeModalButtons.forEach((close) => {
    close.addEventListener("click", (e) => {
      e.stopPropagation(); // Menghentikan penyebaran event ke atas
      tutupModals();
    });
  });

  // Event listener untuk membuka modalSpp
  function tahanModal(effect) {
    effect.addEventListener("click", (e) => {
      e.stopPropagation(); // Menghentikan penyebaran event ke atas
      // Buka modal
      modal.classList.add("active");
      effect.classList.add("active");
      document.body.classList.add("modal-open");
    });
  }
  tahanModal(modalSpp);
  tahanModal(bayarSpp);
  tahanModal(modalBuku);
  tahanModal(bayarBuku);
  tahanModal(TambahBuku);
  tahanModal(modalBaju);
  tahanModal(bayarBaju);
  tahanModal(TambahBaju);
  tahanModal(modalKegiatan);
  tahanModal(bayarKegiatan);
  tahanModal(modalSide);

  modal.addEventListener("scroll", () => {
    const fiftyVH = window.innerHeight * 0.3;

    card_modals.forEach((card_modal) => {
      if (modal.scrollTop > fiftyVH) {
        card_modal.style.borderRadius = "0";
      } else {
        card_modal.style.borderRadius = "25px 25px 0 0";
      }
    });
  });

  //Modal Side Function
  btnHistory.addEventListener("click", () => {
    modal.classList.add("active");
    modalSide.classList.remove("non");
    setTimeout(() => {
      modalSide.classList.add("active");
    }, 50);
  });
  riwayatHeader.forEach((e) => {
    e.addEventListener("click", () => {
      const isActive = e.classList.contains("active");
      document.querySelectorAll(".topic-history").forEach((otherItem) => {
        otherItem.classList.remove("active");
        otherItem.nextElementSibling.classList.remove("active");
      });
      const content = e.nextElementSibling;
      if (!isActive) {
        e.classList.toggle("active");
        content.classList.toggle("active");
      }
    });
  });

  //Dropdown Function
  // fungsi mengeklik pagination pada topic
  function paginationTopic(element) {
    const topicPage = document.querySelectorAll(`.topic-page.${element}`);
    topicPage.forEach((tp) => {
      tp.addEventListener("click", () => {
        const tpItem = tp.classList.contains(element);
        topicPage.forEach((item) => {
          if (item.classList.contains(element)) {
            item.classList.remove("active");
            console.log(item);
          }
        });
        if (tpItem) {
          tp.classList.add("active");
        }
        showContentPagination(tp.id, element);

        window.scrollTo({
          top: 0,
          behavior: "instant",
        });
      });
    });
  }

  // Fungsi untuk menampilkan konten yang sesuai dengan id
  function showContentPagination(id, el) {
    const allContentPages = document.querySelectorAll(
      ".topic-content > .data-content"
    );

    allContentPages.forEach((content) => {
      if (content.classList.contains(el)) {
        content.style.display = "none";
      }
    });
    const contentPageElement = document.getElementById("content-" + id);
    if (contentPageElement) {
      contentPageElement.style.display = "block";
    }
  }

  // Panggil fungsi untuk 'spp' dan 'keg'
  paginationTopic("spp");
  paginationTopic("keg");
  paginationTopic("buku");
  paginationTopic("baju");

  //Formulir Function

  noResultsMessage.textContent = "Data tidak ditemukan";
  noResultsMessage.style.display = "none";
  noResultsMessage.style.paddingTop = "0.75rem";
  noResultsMessage.classList.add("kosong");
  // Fungsi pencarian data SPP
  function filterItems(searchTerm, semuaData) {
    searchTerm.addEventListener("input", function () {
      const pencarian = searchTerm.value.toLowerCase();
      const namaItems = semuaData.querySelectorAll("p");
      let foundSpp = false;

      // Hapus pesan tanpa hasil jika sudah ada
      if (semuaData.contains(noResultsMessage)) {
        semuaData.removeChild(noResultsMessage);
      }

      namaItems.forEach(function (item) {
        const text = item.textContent.toLowerCase();
        if (text.includes(pencarian)) {
          item.style.display = "block";
          foundSpp = true;
        } else {
          item.style.display = "none";
        }
      });

      // Tambahkan pesan tanpa hasil jika tidak ada yang ditemukan
      if (!foundSpp) {
        semuaData.appendChild(noResultsMessage);
        noResultsMessage.style.display = "block";
      } else {
        noResultsMessage.style.display = "none";
      }
    });
  }
  // Memilih semua elemen dengan kelas .w-label

  const namaDataSiswa = Array.from(parentNama).map((element) => {
    return element.querySelector(".drop-select");
  });
  console.log(namaDataSiswa);

  filterItems(namaSiswaSpp, namaDataSiswa[0]);
  filterItems(dropSelectSPP, namaDropSiswaSPP);
  filterItems(namaSiswaBuku, namaDataSiswa[1]);
  filterItems(dropSelectBuku, namaDropSiswaBuku);
  filterItems(namaPesanBuku, namaDataSiswa[2]);
  filterItems(dropPesanBuku, namaDropPesanBuku);
  filterItems(namaSiswaBaju, namaDataSiswa[3]);
  filterItems(dropSelectBaju, namaDropSiswaBaju);
  filterItems(namaPesanBaju, namaDataSiswa[4]);
  filterItems(dropPesanBaju, namaDropPesanBaju);
  filterItems(namaSiswaKegiatan, namaDataSiswa[5]);
  filterItems(dropSelectKegiatan, namaDropSiswaKegiatan);

  // Fungsi mengeklik nama dan memindahkannya pada dropdown ke input (semuanya)
//   function inputNama(event, target) {
//     target.forEach((e) => {
//         e.addEventListener("click", function handleClick() {
//             event.value = e.textContent;
//             if (widthVW < 1024) {
//                 const formModal = e.closest(".form");
//                 const modalCard = formModal.closest(".modal-card.active");
//                 if (formModal && modalCard) {
//                     modalCard.style.transform = "translateY(35vh)";
//                     formModal.style.transform = "translateX(-1rem)";
//                     e.closest(".drop-select").classList.remove("active");
//                     modal.style.overflow = "";
//                 }
//             } else {
//                 e.closest(".drop-select").classList.remove("active");
//                 modal.style.overflow = "";
//             }
//             sendValue();
//         });
//     });
// }

  // Fungsi tutup dropdown (semuanya)

  tutupDropSelect.forEach((e) => {
    e.addEventListener("click", () => {
      allDropSelect.forEach((even) => {
        const formModal = e.closest(".form");
        const modalCard = formModal.closest(".modal-card.active");
        if (formModal && modalCard) {
          modalCard.style.transform = "translateY(35vh)";
          formModal.style.transform = "translateX(-1rem)";
          even.classList.remove("active");
          modal.style.overflow = "";
        }
      });
    });
  });

  // Fungsi mengaktifkan dropdown jika input focus
  selectiveInput.forEach((input) => {
    input.addEventListener("focus", function () {
      const formContainer = input.closest(".w-label");
      const dropSelect = formContainer.querySelector(".drop-select");
      if (widthVW < 1024) {
        const formModal = input.closest(".form");
        const modalCard = formModal.closest(".modal-card.active");
        if (formModal && modalCard) {
          modalCard.style.transform = "none";
          setTimeout(() => {
            formModal.style.transform = "none";
          }, 300);
          dropSelect.classList.add("active");
          modal.style.overflow = "hidden";
        }
      } else {
        dropSelect.classList.add("active");
        modal.style.overflow = "hidden";
      }
    });
  });

  // fungsi menutup dropSelect dengan klik modal
  card_el.forEach((modalCard) => {
    if (widthVW > 1024) {
      modalCard.addEventListener("click", (event) => {
        const target = event.target;
        const isSelectiveInput = Array.from(selectiveInput).some((input) =>
          input.contains(target)
        );
        const allDropSelect = document.querySelectorAll(".drop-select.active");

        if (!isSelectiveInput) {
          allDropSelect.forEach((ds) => {
            ds.classList.remove("active");
          });
          modal.style.overflow = "";
        }
      });
    }
  });

  // fungsi mengubah format mata uang ke Rp.
  currencyInputs.forEach(function (input) {
    input.addEventListener("input", function () {
      formatCurrency(this);
    });
    input.addEventListener("mousedown", function () {
      input.select();
    });
  });

  // fungsi menformat angka sebelum diubah ke Rp.
  function formatNumber(n) {
    return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  // fungsi menghilangkan tanda titik dan menambahkan Rp. pada angka di input
  function formatCurrency(input) {
    var input_val = input.value;
    var cleaned_value = input_val.replace(/[^\d.]/g, "");
    cleaned_value = cleaned_value.replace(/^\.+/g, "");
    input.value =
      cleaned_value !== "" ? "Rp. " + formatNumber(cleaned_value) : "";
    sendValue();
  }

  // fungsi mengambil data tanggal hari ini

  inputDates.forEach((inputDate) => {
    inputDate.value = formattedDate;
    inputDate.addEventListener("change", (e) => {
      inputDate.blur();
      sendValue();
    });
  });

  // fungsi Update pemilihan data Bulan SPP
  function updateBulanSPP() {
    var selectedData = [];

    sppCheckBox.forEach((cb) => {
      if (cb.checked) {
        var label = cb.nextElementSibling.textContent;
        selectedData.push(label);
      }
    });
    inputBulanSPP.value = selectedData.join(",");
    sendValue();
  }

  // fungsi checkbox untuk pemilihan data Bulan SPP
  sppCheckBox.forEach((checkbox) => {
    checkbox.addEventListener("change", updateBulanSPP);
  });

  // fungsi mengambil bulanSPP, namaSiswaSPP, Nominal (semuanya), Tanggal (semuanya)
  function valueBulanSPP() {
    return inputBulanSPP.value;
  }
  function valueNamaSiswa() {
    return namaSiswaSpp.value;
  }
  function valueNominalSPP() {
    let values = [];
    currencyInputs.forEach((e) => {
      var input_val = e.value;
      var cleaned_value = input_val.replace(/[^\d.]/g, "");
      // Hapus tanda titik dari depan angka jika ada
      cleaned_value = cleaned_value.replace(/^\.+/g, "");
      values.push(cleaned_value);
    });
    return values.join(",");
  }

  function valueTanggalSPP() {
    let values = [];
    inputDates.forEach((e) => {
      let pemisahTanggal = e.value.split("-");
      if (pemisahTanggal.length === 3) {
        let pembagianTanggal =
          pemisahTanggal[2] + "/" + pemisahTanggal[1] + "/" + pemisahTanggal[0];
        values.push(pembagianTanggal);
      } else {
        values.push(e.value);
      }
    });
    return values.join(",");
  }

  // fungsi mengirim data
  function sendValue() {
    console.log("Pembayaran Bulan :" + valueBulanSPP());
    console.log("Nama Siswa :" + valueNamaSiswa());
    console.log("Nominal :" + valueNominalSPP());
    console.log("Tanggal :" + valueTanggalSPP());
  }

  //Alert Function
  const customAlert = document.getElementById("customAlert");

  let alertCount = 0;
  let alertHeight = 60;

  // fungsi Button diklik sesuai dengan pesannya apa
  buttonAll.forEach((button) => {
    button.addEventListener("click", () => {
      if (alertCount < 5) {
        let set = "berhasil";
        if (set === "berhasil") {
          showAlert("Data berhasil disimpan", "berhasil");
        } else if (set === "gagal") {
          showAlert("Terjadi kesalahan data", "gagal");
        } else {
          showAlert("Data berhasil diperbaharui", "berhasil");
        }
        alertCount++;
      }
    });
  });

  // fungsi menampilkan pesan
  function showAlert(message, extra) {
    const tambahanAlert = document.createElement("div");
    tambahanAlert.className = "alert";
    tambahanAlert.classList.add(extra);
    tambahanAlert.textContent = message;
    customAlert.appendChild(tambahanAlert);
    setTimeout(() => {
      tambahanAlert.classList.add("slideIn");
      tambahanAlert.style.top = `${(alertCount - 1) * alertHeight + 10}px`;
    }, 50);
    setTimeout(function () {
      hideAlert(tambahanAlert);
    }, 2000);
  }

  // fungsi menyembunyikan pesan
  function hideAlert(alertElement) {
    const currentTop = window.getComputedStyle(alertElement).top;
    alertElement.classList.add("slideOut");
    if (alertCount > 1) {
      alertElement.style.top = `${parseFloat(currentTop) / 4}px`;
    } else {
      alertElement.style.top = "";
    }
    setTimeout(() => {
      customAlert.removeChild(alertElement);
      alertCount--;
    }, 300);
  }
});
