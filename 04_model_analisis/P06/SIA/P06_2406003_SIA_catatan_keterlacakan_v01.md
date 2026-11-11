# Catatan Keterlacakan dan Metadata P06 SIA (NIM 2406080)

| Berkas | Tabel skenario sumber | Unsur activity dipakai | Unsur proses baru |
|---|---|---|---|
| P06_2406080_SIA_activity_v01 (.drawio, .png) | SIA-UC08 Input Nilai Mata Kuliah, SIA-UC09 Lihat KHS (Jobsheet P05) | decision, merge, fork, join, 4 swimlane | tidak ada |

## Keterlacakan action ke langkah skenario
(Kolom "Langkah" PERLU dicocokkan dengan nomor baris pada tabel SIA-UC08/UC09 di dokumen P05 Anda.)

| Action | Swimlane | Sumber | Langkah P05 |
|---|---|---|---|
| Memasukkan nilai mata kuliah | Dosen | SIA-UC08 | L__ |
| Menyimpan nilai | Sistem | SIA-UC08 | L__ |
| Nilai sudah lengkap? (decision) | Sistem | SIA-UC08 alternative | L__ |
| Melengkapi nilai mata kuliah yang belum lengkap | Dosen | SIA-UC08 alternative | L__ |
| Memeriksa dan mengesahkan nilai | Admin Akademik | SIA-UC08 | L__ |
| Menyiapkan publikasi hasil studi | Sistem | SIA-UC08/UC09 | L__ |
| Menerbitkan KHS pada portal akademik (paralel) | Sistem | SIA-UC09 | L__ |
| Mengirim pemberitahuan hasil studi kepada mahasiswa (paralel) | Sistem | SIA-UC09 | L__ |
| Melihat KHS | Mahasiswa | SIA-UC09 | L__ |

Versi: v01. Tidak ada perubahan pada berkas P04 dan dokumen P05.
