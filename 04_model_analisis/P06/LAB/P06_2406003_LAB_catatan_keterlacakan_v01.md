# Catatan Keterlacakan dan Metadata P06 LAB (NIM 2406080)

Metadata tambahan (di luar template P1): tabel skenario sumber, unsur activity dipakai, unsur proses baru.

| Berkas (slug) | Tabel skenario sumber | Unsur dipakai | Unsur proses baru |
|---|---|---|---|
| peminjaman | LAB-UC03 (+LAB-UC04, LAB-UC05) | decision, merge | tidak ada |
| pengembalian | LAB-UC11 (+LAB-UC12) | fork, join, decision, merge | Periksa kelengkapan aksesori peralatan |
| lihat_ketersediaan | LAB-UC01 | decision, merge | tidak ada |
| kelola_data | LAB-UC02, 08, 09, 10 | decision (4), merge | tidak ada |
| cetak_bukti | LAB-UC05 | decision, merge | tidak ada |
| keputusan | LAB-UC06 | decision (2), merge | tidak ada |
| laporan | LAB-UC07 | decision, merge | tidak ada |

## Keterlacakan action ke langkah skenario

**lihat_ketersediaan (UC01)**: Membuka fungsi = L1; Menampilkan daftar = L2; Menampilkan pesan tidak ada peralatan = L4 (alt dari L2).

**kelola_data (UC02/08/09/10)**: Membuka fungsi = UC02 L1; Menampilkan daftar = UC02 L2; Memilih bentuk = UC02 L3; Menampilkan formulir baru = UC08 L2; Mengisi data baru = UC08 L3; Memilih data diubah = UC09 L1; Menampilkan data saat ini = UC09 L2; Mengubah data = UC09 L3; Pesan tidak ditemukan = UC09 L8; Memilih data dihapus = UC10 L1; Memeriksa tidak dipinjam/aktif = UC10 L2; Mengonfirmasi penghapusan = UC10 L3; Menolak penghapusan = UC10 L6; Memeriksa kelengkapan = UC02 L6; Menyimpan perubahan = UC02 L7; Simpan + konfirmasi = UC02 L8; Menolak penyimpanan = UC02 L10.

**peminjaman (UC03)**: tabel UC03 kosong di file P05, jadi diturunkan dari Gambar 6.1 dan Langkah 2 sampai 4 jobsheet. Periksa Ketersediaan = UC04 L2; Cetak Bukti Pengajuan = UC05.

**cetak_bukti (UC05)**: decision = L1/L5; Menampilkan bukti = L2; Mengonfirmasi pencetakan = L3; Mencetak bukti = L4; Menutup konfirmasi = L6.

**keputusan (UC06)**: Membuka daftar = L1; Menampilkan daftar = L2; Memilih dan menetapkan = L3/L5; Ubah status Disetujui = L4; Ubah status Ditolak = L6; Pesan tidak dapat diproses = L8 (alt dari L2).

**pengembalian (UC11/UC12)**: Menyerahkan peralatan = awal alur (Langkah 5 jobsheet); Catat Pengembalian = UC11; Periksa Kondisi = UC12; Perbarui status / Menutup transaksi = UC11 L8; Catat kerusakan = UC11 L13-L14. Aksesori = UNSUR PROSES BARU (jobsheet Tahap 5).

**laporan (UC07)**: Membuka fungsi = L1; Daftar periode = L2; Memilih periode = L3; Menampilkan laporan = L4; Pesan tidak ada data = L6.

## Temuan pada file P05 (tidak diubah, sesuai aturan; perbaiki di P05 bila dosen mengizinkan)
1. Tabel LAB-UC03 masih kosong (template). Activity Peminjaman memakai jobsheet sebagai sumber.
2. LAB-UC11: langkah 5-6 ("Tidak ada data peminjaman pada periode...") salah tempel dari UC07; langkah 5 s.d. 10 bernomor tidak konsisten.
3. LAB-UC07: baris Aktor tertulis Petugas Laboratorium, padahal deskripsi dan jobsheet: Kepala Laboratorium.
4. LAB-UC02 langkah 10 terpotong ("Sistem menolak penyimpanan dan").
5. LAB-UC05 langkah 5 teks rusak; LAB-UC08 alternative ganda; LAB-UC12 ejaan "Alternatif".
