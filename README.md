# OngkiReact

Aplikasi ini dibuat dengan bantuan package React dan API dari RajaOngkir untuk membantu pengguna dalam memeriksa tarif pengiriman barang ke berbagai daerah di Indonesia.

## Fitur Utama

1. **Pencarian Ongkos Kirim**:
   Memungkinkan pengguna untuk memasukkan detail pengiriman termasuk asal, tujuan, dan berat barang. Pengguna juga bisa memilih kurir yang diinginkan untuk melihat tarif pengiriman.
2. **Autentikasi**:
   Pengguna diharuskan memiliki akun terlebih dahulu dengan akun Google untuk bisa menggunakan fitur pencarian Ongkir

## Teknologi

1. **React**:
   Library utama yang digunakan untuk membangun Frontend
2. **Tailwind CSS**
   Package yang digunakan untuk styling tampilan web agar lebih responsif
3. **Typescript**
   Menambahkan tipe statis pada JavaScript untuk meningkatkan kualitas kode dan mengurangi bug.
4. **Axios**:
   Digunakan untuk melakukan permintaan HTTP ke API Ongkir, memastikan komunikasi yang lancar antara aplikasi dan API.
5. **@tanstack/react-query**:
   Server state management untuk fetching data yang selalu up to date agar meningkatkan User Experience
6. **shadcn/ui**:
   Komponen yang telah siap digunakan dan lebih ringan untuk digunakan.

# Instalasi dan Penggunaan

1. **Clone repositori**:

   ```sh
   git clone https://github.com/fajarhidayad/ongkir-react.git
   ```

2. **Install dependensi dengan `pnpm` atau `npm`**:

   Untuk menginstal semua dependensi yang ada di `package.json`:

   ```sh
   // menggunakan pnpm
   pnpm install

   // menggunakan npm
   npm install
   ```

3. **Jalankan**:

   ```sh
   // menggunakan pnpm
   pnpm dev

   // menggunakan npm
   npm run dev
   ```

4. **Buka di browser**:

   Akses aplikasi di `http://localhost:5173`
