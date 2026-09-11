export interface KeuntunganItem {
  number: string;
  title: string;
  description: string;
  icon: "diamond" | "shield" | "chat" | "growth";
}

export interface KeuntunganData {
  eyebrow: string;
  title: string;
  items: KeuntunganItem[];
}

export const keuntungan: KeuntunganData = {
  eyebrow: "Keuntungan Memilih Kami",
  title: "Solusi Waterproofing Terpercaya",
  items: [
    {
      number: "01",
      title: "Kualitas",
      description:
        "Mengutamakan kualitas produk untuk memenuhi kebutuhan dan harapan pelanggan.",
      icon: "diamond",
    },
    {
      number: "02",
      title: "Standar",
      description:
        "Berkomitmen pada pemenuhan standar dan ketentuan yang berlaku di industri.",
      icon: "shield",
    },
    {
      number: "03",
      title: "Pelayanan",
      description:
        "Responsif dan siap memberikan informasi serta dukungan yang jelas kepada pelanggan.",
      icon: "chat",
    },
    {
      number: "04",
      title: "Pertumbuhan",
      description:
        "Responsif dan siap memberikan informasi serta dukungan yang jelas kepada pelanggan.",
      icon: "growth",
    },
  ],
};