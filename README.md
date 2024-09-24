Proyek ini akan memungkinkan pengguna untuk mengelola tugas mereka melalui baris perintah, 
menyimpan data dalam file JSON, dan mengikuti semua persyaratan yang telah ditetapkan.

Menambahkan Tugas:
node task-cli.js add "Buy groceries"

Memperbarui Tugas:
node task-cli.js update 1 "Buy groceries and cook dinner"

Menghapus Tugas:
node task-cli.js delete 1

Menandai Tugas Sebagai Sedang Berlangsung:
node task-cli.js mark-in-progress 1


Menandai Tugas Sebagai Selesai:
node task-cli.js mark-done 1

Mendapatkan Daftar Semua Tugas:
node task-cli.js list

Mendapatkan Daftar Tugas Berdasarkan Status:
node task-cli.js list done
node task-cli.js list todo
node task-cli.js list in-progress

Testing
