export interface SektorItem {
  title: string;
  description: string;
  image: string;
  icon: "building" | "factory" | "house" | "infrastructure";
}

export interface SolusiSektorData {
  title: string;
  description: string;
  items: SektorItem[];
}

export const solusiSektor: SolusiSektorData = {
  title: "Solusi untuk Berbagai Sektor Konstruksi",
  description:
    "Material konstruksi kami digunakan pada berbagai jenis proyek untuk mendukung ketahanan dan kualitas bangunan.",
  items: [
    {
      title: "Bangunan Komersil",
      description:
        "Perlindungan waterproofing untuk gedung perkantoran, pusat perbelanjaan, hotel, dan bangunan komersial lainnya.",
      image: "/images/Komersil.png",
      icon: "building",
    },
    {
      title: "Industri",
      description:
        "Solusi waterproofing yang dirancang untuk pabrik, gudang, fasilitas produksi, dan kawasan industri.",
      image: "/images/Industri.png",
      icon: "factory",
    },
    {
      title: "Hunian",
      description:
        "Mendukung ketahanan rumah tinggal, apartemen, dan kawasan residensial terhadap kebocoran dan kelembapan.",
      image: "/images/Hunian.png",
      icon: "house",
    },
    {
      title: "Infrastruktur",
      description:
        "Aplikasi waterproofing untuk proyek infrastruktur seperti jembatan, terowongan, fasilitas publik, dan utilitas.",
      image: "/images/Infrastruktur.png",
      icon: "infrastructure",
    },
  ],
};