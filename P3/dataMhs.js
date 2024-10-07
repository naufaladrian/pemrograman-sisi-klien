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

const listMhs = dataMahasiswa;
console.log(listMhs);

const mahasiswa = dataMahasiswa[2];
console.log(mahasiswa);

console.log(mahasiswa.nama);

// ini namanya destructuring object
const { id, nama, tanggalLahir, fakultas, programStudi, organisasi, aktif } =
  mahasiswa;
console.log(id, nama, fakultas, programStudi);

//ini kalau pakai spread operator
const { ...sisanya } = mahasiswa;
console.log(sisanya);

const tambahanOrganisasi = ["doscom", "dncc", ...organisasi];
console.table(tambahanOrganisasi);

// cuma misah tanggal, bulan, tahun pakai split
console.log(tanggalLahir.split("-")[2]);
console.log(tanggalLahir.split("-")[1]);
console.log(tanggalLahir.split("-")[0]);

// ini namanya ternary operator
const statusAktif = aktif ? "Aktif" : "Tidak Aktif";
const statusOrganisasi = organisasi.length > 0 && "Tidak ada organisasi";

console.log(
  `Atas Nama ${nama}, dari fakultas ${fakultas}, prodi ${programStudi}, statusnya ${statusAktif} ${statusOrganisasi}`
);

// mengubah field organisasi
const mahasiswaBaru = { ...mahasiswa, organisasi: ["test"] };
console.log(mahasiswaBaru);

// filter
const mahasiswaAktif = dataMahasiswa.filter((mhs) => mhs.aktif);
console.log(mahasiswaAktif);

const listMhsTerbaru = {
  id: 4,
  nama: "Budiiiiiiii",
  tanggalLahir: "2004-03-17",
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
};

const tambahMhs = [...dataMahasiswa, listMhsTerbaru];
console.log(tambahMhs);

const sortedBySemester = dataMahasiswa
  .slice()
  .sort((a, b) => a.semester - b.semester);
console.log(sortedBySemester);
