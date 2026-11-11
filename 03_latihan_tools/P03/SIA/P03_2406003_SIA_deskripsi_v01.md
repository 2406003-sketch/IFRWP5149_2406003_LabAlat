### a. Deskripsi Use Case: Ajukan KRS

| Elemen                | SIA-UC03 — Ajukan KRS                                                            |
|-----------------------|----------------------------------------------------------------------------------|
| Tujuan                | Menghasilkan pengajuan KRS yang tersimpan                                        |
| Aktor utama           | Mahasiswa                                                                        |
| Sumber kebutuhan      | SIA-R03 dan SIA-R04                                                              |
| Pemicu                | Mahasiswa memilih fungsi pengajuan KRS                                           |
| Prasyarat             | Mahasiswa telah terautentikasi; data mata kuliah, prasyarat, dan jadwal tersedia |
| Pascakondisi berhasil | Pengajuan KRS tersimpan dengan status Menunggu Persetujuan Dosen Wali            |
| Pascakondisi gagal    | Pengajuan KRS tidak berhasil tersimpan (validasi gagal)                          |
| Include               | SIA-UC04 — Validasi KRS                                                          |
| Extension point       | Konfirmasi penyimpanan / bukti pengajuan tersedia                                |
| Extend                | SIA-UC05 jika [mahasiswa memilih mengunduh bukti]                                |

---

### b. Deskripsi Use Case: Validasi KRS

| Elemen                | SIA-UC04 — Validasi KRS                                                         |
|-----------------------|---------------------------------------------------------------------------------|
| Tujuan                | Memeriksa kelengkapan, prasyarat mata kuliah, dan benturan jadwal pengajuan KRS |
| Aktor utama           | Sistem                                                                          |
| Sumber kebutuhan      | SIA-R04                                                                         |
| Pemicu                | Dipanggil oleh SIA-UC03 (Ajukan KRS) saat mahasiswa mengajukan KRS              |
| Prasyarat             | Data KRS yang diajukan serta data prasyarat dan jadwal tersedia                 |
| Pascakondisi berhasil | Pengajuan KRS dinyatakan valid dan siap disimpan                                |
| Pascakondisi gagal    | Pengajuan KRS dinyatakan tidak valid, pesan kesalahan ditampilkan,              |
|                       | dan pengajuan tidak tersimpan                                                   |
| Include               | Tidak ada                                                                       |
| Extension point       | Tidak ada                                                                       |
| Extend                | Tidak ada                                                                       |

---

### c. Deskripsi Use Case: Unduh Bukti Pengajuan KRS

| Elemen                | SIA-UC05 — Unduh bukti pengajuan KRS                             |
|-----------------------|------------------------------------------------------------------|
| Tujuan                | Menghasilkan/mengunduh berkas bukti pengajuan KRS                |
| Aktor utama           | Mahasiswa                                                        |
| Sumber kebutuhan      | SIA-R05                                                          |
| Pemicu                | Mahasiswa memilih opsi unduh bukti pada konfirmasi pengajuan KRS |
| Prasyarat             | Pengajuan KRS telah berhasil tersimpan                           |
| Pascakondisi berhasil | Berkas bukti pengajuan KRS berhasil diunduh oleh mahasiswa       |
| Pascakondisi gagal    | Berkas bukti pengajuan KRS gagal diunduh                         |
| Include               | Tidak ada                                                        |
| Extension point       | Tidak ada                                                        |
| Extend                | Tidak ada                                                        |

---

### d. Deskripsi Use Case: Proses Keputusan KRS

| Elemen                | SIA-UC06 — Proses keputusan KRS                                              |
|-----------------------|------------------------------------------------------------------------------|
| Tujuan                | Memproses persetujuan atau penolakan KRS beserta catatan keputusan           |
| Aktor utama           | Dosen wali                                                                   |
| Sumber kebutuhan      | SIA-R06                                                                      |
| Pemicu                | Dosen wali memilih pengajuan KRS mahasiswa yang menggantung                  |
| Prasyarat             | Dosen wali telah terautentikasi; data pengajuan KRS                          |
|                       | berstatus Menunggu Persetujuan tersedia                                      |
| Pascakondisi berhasil | Status KRS diperbarui (Disetujui atau Ditolak) beserta                       |
|                       | catatan keputusan yang tersimpan                                             |
| Pascakondisi gagal    | Keputusan dan catatan tidak tersimpan; status KRS tetap Menunggu Persetujuan |
| Include               | Tidak ada                                                                    |
| Extension point       | Tidak ada                                                                    |
| Extend                | Tidak ada                                                                    |
