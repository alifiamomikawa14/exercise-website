export interface CtaButton {
  text: string;
  href: string;
  external?: boolean;
}

export interface CtaProfileData {
  eyebrow: string;
  title: string;
  description: string;
  backgroundImage: string;
  button?: CtaButton;
}

export const ctaProfile: CtaProfileData = {
  eyebrow: "SIAP MEMBANGUN BERSAMA?",
  title: "Temukan Material yang Tepat untuk Kebutuhan Proyek Anda",
  description:
    "Temukan solusi material konstruksi yang sesuai dengan kebutuhan proyek Anda, mulai dari membran waterproofing hingga cat pelapis.",
  backgroundImage: "/images/bg-cta-profile.png",
  button: {
    text: "Lihat Produk",
    href: "/produk",
  },
};