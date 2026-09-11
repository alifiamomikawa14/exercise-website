export interface BidangUsahaItem {
  number: string;
  title: string;
  description: string;
  image: string;
}

export interface BidangUsahaData {
  title: string;
  subtitle: string;
  items: BidangUsahaItem[];
}

export const bidangUsaha: BidangUsahaData = {
  title: "Bidang Usaha Kami",
  subtitle: "Solusi Waterproofing untuk Setiap Kebutuhan Bangunan",
  items: [
    {
      number: "01",
      title: "Material Waterproofing",
      description:
        "Material waterproofing berkualitas untuk memberikan perlindungan optimal terhadap air dan kelembapan.",
      image: "/images/Material Waterproofing.png",
    },
    {
      number: "02",
      title: "Waterproof Engineering",
      description:
        "Solusi engineering waterproofing yang dirancang sesuai kebutuhan dan karakteristik setiap proyek.",
      image: "/images/Waterproof Engineering.png",
    },
    {
      number: "03",
      title: "Waterproof Repair",
      description:
        "Layanan perbaikan waterproofing untuk mengatasi kebocoran, kerusakan, dan menjaga kembali fungsi perlindungan bangunan.",
      image: "/images/Waterproof Repair.png",
    },
  ],
};