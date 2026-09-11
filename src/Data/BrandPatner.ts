export interface FeatureItem {
  label: string;
  icon: "shield" | "gear" | "support";
}

export interface BrandCard {
  logoImage: string;
  logoBg?: string;
  name: string;
  description: string;
}

export interface BrandPartnerData {
  eyebrow: string;
  title: string;
  description: string;
  backgroundImage: string;
  features: FeatureItem[];
  brands: BrandCard[];
}

export const brandPartner: BrandPartnerData = {
  eyebrow: "Brand Partner Kami",
  title: "Merek Waterproofing Terpercaya",
  description:
    "PT Wandao Industri Indonesia menghadirkan produk dari brand waterproofing terpercaya, Keshen dan Hongyuan, yang dikenal akan kualitas, inovasi, dan performanya dalam mendukung berbagai kebutuhan proyek konstruksi. Melalui kemitraan ini, kami berkomitmen menyediakan solusi material yang andal dengan dukungan teknis yang profesional.",
  backgroundImage: "/images/brand/gedung-kota.jpg",
  features: [
    { label: "Kualitas Tepercaya", icon: "shield" },
    { label: "Inovasi Berkelanjutan", icon: "gear" },
    { label: "Dukungan Teknis Profesional", icon: "support" },
  ],
  brands: [
    {
      logoImage: "/images/Keshun-Logo.png",
      logoBg: "#FFFFFF",
      name: "Keshen",
      description:
        "Produsen material waterproofing terkemuka yang menyediakan solusi perlindungan bangunan untuk sektor komersial, industri, residensial, dan infrastruktur.",
    },
    {
      logoImage: "/images/Hongyuan-Logo.png",
      logoBg: "#C50009",
      name: "Hongyuan",
      description:
        "Produsen material waterproofing dengan pengalaman luas dalam pengembangan sistem perlindungan bangunan yang berkualitas, tahan lama, dan sesuai kebutuhan proyek modern.",
    },
  ],
};