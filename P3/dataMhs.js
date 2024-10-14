const dataMahasiswa = [
  {
    id: 1,
    nama: "Budi Santoso",
    tanggalLahir: "2000-01-15",
    fakultas: "Fakultas Teknik",
    programStudi: "Teknik Informatika",
    semester: 6,
    nilai: {
      algoritma: 85,
      basisData: 88,
      pemrogramanWeb: 90,
    },
    aktif: true,
    organisasi: ["Himpunan Mahasiswa Teknik", "Komunitas Pemrograman"],
  },
  {
    id: 2,
    nama: "Siti Aminah",
    tanggalLahir: "1999-05-10",
    fakultas: "Fakultas Ekonomi",
    programStudi: "Manajemen",
    semester: 4,
    nilai: {
      manajemenKeuangan: 78,
      akuntansi: 82,
      pemasaran: 75,
    },
    aktif: true,
    organisasi: ["Koperasi Mahasiswa"],
  },
  {
    id: 3,
    nama: "Rudi Hartono",
    tanggalLahir: "1998-12-01",
    fakultas: "Fakultas Teknik",
    programStudi: "Teknik Sipil",
    semester: 8,
    nilai: {
      mekanikaTanah: 85,
      strukturBangunan: 89,
    },
    aktif: false,
    organisasi: ["Himpunan Mahasiswa Teknik Sipil"],
  },
];

/**
 * @author M Naufal Adrian Pratama Putra (NIM: A11.2022.14188)
 * @description Tugas Praktikum 3 ES6
 */

// menyimpan dan menampilkan data mahasiswa pertama
const mahasiswa1 = dataMahasiswa[0];
// console.log(mahasiswa1);

// 1. Destructuring seluruh field
const {
  id,
  nama,
  tanggalLahir,
  fakultas,
  programStudi,
  semester,
  nilai,
  aktif,
  organisasi,
} = mahasiswa1;
console.log(nama, fakultas, programStudi, nilai);

// 2. Destructuring field nilai
const { algoritma, basisData, pemrogramanWeb } = nilai;
console.log(algoritma, basisData, pemrogramanWeb);

// 3. Destructuring field organisasi
const [organisasi1, organisasi2] = organisasi;
console.log(organisasi1, organisasi2);

// 4. Spread operator untuk field organisasi
const [...organisasiLain] = organisasi;
console.log(organisasiLain);

// 5. Update pada field fakultas dan field semester
const updateMahasiswa1 = {
  ...mahasiswa1,
  fakultas: "Fakultas Ilmu Komputer",
  semester: 14,
};
console.log(updateMahasiswa1);

//  6. Split pada field tanggal lahir dan tampilkan tahun saja
const tahunLahir = tanggalLahir.split("-")[0];
console.log(tahunLahir);

// 7. Conditional (Ternary) operator '?'
const statusAktif = aktif ? "Aktif" : "Tidak Aktif";
console.log(statusAktif);

// 8. Map tampilkan semua nama mahasiswa
const namaMahasiswa = dataMahasiswa.map((mahasiswa) => mahasiswa.nama);
console.log(namaMahasiswa);

// 9. Filtering tampilkan semua mahasiswa yang aktif dan dari Fakultas Ilmu Komputer
const mahasiswaAktifFIK = dataMahasiswa.filter(
  (mahasiswa) =>
    mahasiswa.aktif && mahasiswa.fakultas === "Fakultas Ilmu Komputer"
);
console.log(mahasiswaAktifFIK);

// 10. Totalkan nilai seluruh mahasiswa
const totalNilai = dataMahasiswa.reduce((total, mahasiswa) => {
  const tot = Object.values(mahasiswa.nilai).reduce(
    (totalNilai, nilai) => totalNilai + nilai
  );
  return total + tot;
}, 0);
console.log(totalNilai); // 672

// 11. Sort seluruh mahasiswa berdasarkan semester
const sortSemester = dataMahasiswa.sort((a, b) => a.semester - b.semester);
console.log(sortSemester);

// 12. Menambahkan Mahasiswa Baru
const mahasiswaBaru = {
  id: 4,
  nama: "M Naufal Adrian Pratama Putra",
  tanggalLahir: "2004-09-06",
  fakultas: "Fakultas Ilmu Komputer",
  programStudi: "Teknik Informatika",
  semester: 5,
  nilai: {
    algoritma: 78,
    basisData: 85,
    pemrogramanWeb: 90,
  },
  aktif: true,
  organisasi: ["Dinus Open Source Community"],
};
const dataMahasiswaSetelahTambah = [...dataMahasiswa, mahasiswaBaru];
console.log(dataMahasiswaSetelahTambah);

// 13. Delete dan Update pada salah satu Mahasiswa
// Update
const updateMahasiswa = dataMahasiswa.map((mahasiswa) => {
  // Update mahasiswa dengan id 3
  if (mahasiswa.id === 3) {
    return {
      ...mahasiswa,
      fakultas: "Fakultas Sastra Komputer",
      semester: 11,
    };
  }
  // Mahasiswa lainnya tidak diupdate
  return mahasiswa;
});
console.log(updateMahasiswa);

// Delete
const deleteMahasiswa = dataMahasiswa.filter((mahasiswa) => mahasiswa.id !== 2);
console.log(deleteMahasiswa);
