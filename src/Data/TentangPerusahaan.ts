export interface InfoCard {
  label: string;
  value: string;
  description: string;
  icon: "calendar" | "target" | "gear" | "tag";
}

export interface TentangPerusahaanData {
  title: string;
  subtitle: string;
  cards: InfoCard[];
}

export const tentangPerusahaan: TentangPerusahaanData = {
  title: "Tentang Perusahaan Kami",
  subtitle:
    "Informasi singkat mengenai perusahaan, fokus bisnis, brand, dan layanan kami.",
  cards: [
    {
      label: "Berdiri Sejak",
      value: "2024",
      description:
        "Perusahaan didirikan untuk mendukung kebutuhan solusi waterproofing di Indonesia.",
      icon: "calendar",
    },
    {
      label: "Fokus Bisnis",
      value: "Waterproofing",
      description:
        "Berfokus pada material, engineering, dan repair untuk kebutuhan waterproofing.",
      icon: "target",
    },
    {
      label: "Layanan",
      value: "Material · Engineering · Repair",
      description:
        "Mendukung kebutuhan proyek mulai dari penyediaan material hingga solusi waterproofing dan perbaikan.",
      icon: "gear",
    },
    {
      label: "Brand",
      value: "Keshen · Hongyuan",
      description:
        "Menyediakan produk waterproofing dari brand Keshen (科顺) dan Hongyuan (宏源).",
      icon: "tag",
    },
  ],
};