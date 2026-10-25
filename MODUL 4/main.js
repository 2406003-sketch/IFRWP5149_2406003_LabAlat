
document.addEventListener("DOMContentLoaded", function () {
    // DATA AWAL PROYEK
    let projects = [
        {
            id: 1,
            title: "Sistem Inventaris Keuangan",
            category: "Web App",
            budget: 2500000,
            completed: true
        },
        {
            id: 2,
            title: "Sistem Kasir Digital POS",
            category: "Desktop App",
            budget: 5000000,
            completed: true
        },
        {
            id: 3,
            title: "Landing Page Profil Perusahaan",
            category: "Web App",
            budget: 1500000,
            completed: false
        },
        {
            id: 4,
            title: "Aplikasi Presensi GPS Mobile",
            category: "Mobile App",
            budget: 4500000,
            completed: false
        }
    ];

    let selectedCategory = "Semua";
    let searchKeyword = "";

    // MENGAMBIL ELEMEN HTML
    const form = document.getElementById("project-form");
    const titleInput = document.getElementById("project-title");
    const categoryInput = document.getElementById("project-category");
    const budgetInput = document.getElementById("project-budget");
    const completedInput = document.getElementById("project-completed");
    const searchInput = document.getElementById("search-project");
    const projectList = document.getElementById("project-list");
    const formMessage = document.getElementById("form-message");

    // MEMASTIKAN ELEMEN HTML TERSEDIA
    if (
        !form || !titleInput || !categoryInput || !budgetInput ||
        !completedInput || !searchInput || !projectList
    ) {
        console.error(
            "Ada elemen HTML yang tidak ditemukan. Periksa ID di index.html."
        );
        return;
    }

    // FORMAT ANGKA MENJADI RUPIAH
    function formatRupiah(angka) {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            maximumFractionDigits: 0
        }).format(angka);
    }

    // MENGAMANKAN TEKS DARI INPUT PENGGUNA
    function escapeHTML(teks) {
        return String(teks).replace(/[&<>"']/g, function (karakter) {
            const pengganti = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;"
            };

            return pengganti[karakter];
        });
    }

    // MEMPERBARUI KARTU STATISTIK
    function updateStats() {
        const totalProyek = projects.length;

        const totalAnggaran = projects.reduce(function (total, proyek) {
            return total + proyek.budget;
        }, 0);

        const proyekSelesai = projects.filter(function (proyek) {
            return proyek.completed;
        }).length;

        document.getElementById("stat-total-projects").textContent =
            totalProyek;

        document.getElementById("stat-total-budget").textContent =
            formatRupiah(totalAnggaran);

        document.getElementById("stat-completed-projects").textContent =
            proyekSelesai;
    }

    // MENAMPILKAN KARTU PROYEK
    function renderProjects() {
        const hasil = projects.filter(function (proyek) {
            const cocokJudul = proyek.title
                .toLowerCase()
                .includes(searchKeyword.toLowerCase());

            const cocokKategori =
                selectedCategory === "Semua" ||
                proyek.category === selectedCategory;

            return cocokJudul && cocokKategori;
        });

        if (hasil.length === 0) {
            projectList.innerHTML =
                '<p class="empty-message">Proyek tidak ditemukan.</p>';
            return;
        }

        projectList.innerHTML = hasil.map(function (proyek) {
            const statusClass = proyek.completed
                ? "badge-success"
                : "badge-pending";

            const statusText = proyek.completed
                ? "Selesai"
                : "Dalam Pengerjaan";

            const tombolStatus = proyek.completed
                ? "Ubah Status"
                : "Tandai Selesai";

            return `
                <article class="project-card">
                    <div class="project-info">
                        <span class="project-category">
                            ${escapeHTML(proyek.category)}
                        </span>

                        <h3>${escapeHTML(proyek.title)}</h3>

                        <p class="project-budget">
                            ${formatRupiah(proyek.budget)}
                        </p>

                        <span class="badge ${statusClass}">
                            ${statusText}
                        </span>
                    </div>

                    <div class="project-actions">
                        <button
                            type="button"
                            class="btn btn-toggle"
                            data-action="toggle"
                            data-id="${proyek.id}">
                            ${tombolStatus}
                        </button>

                        <button
                            type="button"
                            class="btn btn-delete"
                            data-action="delete"
                            data-id="${proyek.id}">
                            Hapus Proyek
                        </button>
                    </div>
                </article>
            `;
        }).join("");
    }

    // PESAN FORMULIR
    function tampilkanPesan(teks, tipe) {
        if (!formMessage) return;

        formMessage.textContent = teks;
        formMessage.className =
            tipe === "error" ? "error-message" : "success-message";
    }

    // MENAMBAHKAN PROYEK BARU
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const judul = titleInput.value.trim();
        const kategori = categoryInput.value;
        const anggaranTeks = budgetInput.value.trim();
        const anggaran = Number(anggaranTeks);
        const selesai = completedInput.checked;

        if (judul === "") {
            tampilkanPesan("Judul proyek tidak boleh kosong.", "error");
            titleInput.focus();
            return;
        }

        if (
            anggaranTeks === "" ||
            !Number.isFinite(anggaran) ||
            !Number.isInteger(anggaran) ||
            anggaran <= 0
        ) {
            tampilkanPesan(
                "Anggaran harus berupa angka bulat lebih besar dari 0.",
                "error"
            );
            budgetInput.focus();
            return;
        }

        const proyekBaru = {
            id: Date.now(),
            title: judul,
            category: kategori,
            budget: anggaran,
            completed: selesai
        };

        projects.push(proyekBaru);

        form.reset();

        // Tampilkan proyek yang baru ditambahkan.
        selectedCategory = "Semua";
        searchKeyword = "";
        searchInput.value = "";

        document.querySelectorAll(".btn-filter").forEach(function (tombol) {
            tombol.classList.toggle(
                "active",
                tombol.dataset.category === "Semua"
            );
        });

        updateStats();
        renderProjects();

        tampilkanPesan("Proyek berhasil ditambahkan!", "success");
    });

    // PENCARIAN LANGSUNG
    searchInput.addEventListener("input", function () {
        searchKeyword = this.value;
        renderProjects();
    });

    // FILTER KATEGORI
    document.querySelectorAll(".btn-filter").forEach(function (tombol) {
        tombol.addEventListener("click", function () {
            selectedCategory = this.dataset.category;

            document.querySelectorAll(".btn-filter").forEach(function (btn) {
                btn.classList.toggle("active", btn === tombol);
            });

            renderProjects();
        });
    });

    // AKSI UBAH STATUS DAN HAPUS PROYEK
    projectList.addEventListener("click", function (event) {
        const tombol = event.target.closest("button[data-action]");

        if (!tombol) return;

        const id = Number(tombol.dataset.id);
        const aksi = tombol.dataset.action;

        if (aksi === "toggle") {
            const proyek = projects.find(function (item) {
                return item.id === id;
            });

            if (!proyek) return;

            proyek.completed = !proyek.completed;

            tampilkanPesan(
                "Status proyek berhasil diperbarui.",
                "success"
            );
        }

        if (aksi === "delete") {
            const yakin = confirm(
                "Apakah kamu yakin ingin menghapus proyek ini?"
            );

            if (!yakin) return;

            projects = projects.filter(function (item) {
                return item.id !== id;
            });

            tampilkanPesan("Proyek berhasil dihapus.", "success");
        }

        updateStats();
        renderProjects();
    });

    // TAMPILAN AWAL SAAT HALAMAN DIBUKA
    updateStats();
    renderProjects();
});
