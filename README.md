# Task Tracker CLI

Aplikasi **Task Tracker** adalah alat sederhana yang membantu kamu melacak dan mengelola tugas harian kamu melalui Command Line Interface (CLI). Dengan aplikasi ini, kamu dapat menambahkan, memperbarui, menghapus, dan menandai tugas dengan mudah, serta mendapatkan daftar tugas berdasarkan statusnya.

## Fitur Utama

- **Tambahkan Tugas**: Simpan tugas baru dengan deskripsi singkat.
- node task-cli.js add "Buy groceries"
- **Perbarui Tugas**: Ubah deskripsi tugas yang sudah ada.
- node task-cli.js update 1 "Buy groceries and cook dinner"
- **Hapus Tugas**: Hapus tugas yang tidak diperlukan.
- node task-cli.js delete 1
- **Tandai Tugas**: Tandai tugas sebagai sedang berlangsung atau selesai.
- node task-cli.js mark-done 1
- node task-cli.js mark-in-progress 1
- **Daftar Tugas**: Dapatkan daftar semua tugas atau tugas berdasarkan status (todo, in-progress, done).
- node task-cli.js list done
- node task-cli.js list todo
- node task-cli.js list in-progress

