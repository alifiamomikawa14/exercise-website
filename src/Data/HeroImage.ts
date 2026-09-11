export interface HeroButton {
  text: string;
  href: string;
  variant?: "primary" | "outline";
  external?: boolean;
}

export interface HeroData {
  eyebrow?: string;
  title: string;
  description?: string;
  backgroundImage?: string;
  buttons?: HeroButton[];
}

export const heroHome: HeroData = {
  eyebrow: "SOLUSI MATERIAL KONSTRUKSI",
  title: "Material Terpercaya,<br />Solusi untuk Setiap Proyek",
  description:
    "Menyediakan material konstruksi berkualitas untuk mendukung perlindungan, ketahanan, dan keberhasilan setiap proyek.",
  backgroundImage: "/images/Hero-Image.png",
  buttons: [
    { text: "Lihat Produk", href: "/produk", variant: "primary" },
    {
      text: "Konsultasi dengan Kami",
      href: "https://wa.me/628584781067?text=Halo%2C%20saya%20ingin%20konsultasi%20mengenai%20produk%20material%20konstruksi.",
      variant: "outline",
      external: true,
    },
  ],
};

export const heroAbout: HeroData = {
  eyebrow: "TENTANG KAMI",
  title: "Penyedia Material <br /> Konstruksi Impor untuk <br /> Proyek di Indonesia",
  description:
    "PT Wandao Industri Indonesia menyediakan berbagai bahan bangunan dan material konstruksi impor dari produsen pilihan untuk mendukung kebutuhan proyek dan pembangunan di Indonesia.",
  backgroundImage: "/images/Hero Image - Tentang Kami.png",
  buttons: [
    { text: "Hubungi Kami", href: "/kontak", variant: "primary" },
  ],
};

export const heroProduk: HeroData = {
  eyebrow: "KATALOG LENGKAP",
  title: "Temukan Produk<br />Waterproofing Terbaik",
  description:
    "Berbagai pilihan material waterproofing berkualitas untuk kebutuhan proyek Anda.",
  backgroundImage: "/images/produk/hero-produk.jpg",
  buttons: [],
};