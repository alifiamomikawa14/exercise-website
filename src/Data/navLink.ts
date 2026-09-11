export const navItems = {
  id: [
    { name: "Beranda", href: "/" },
    { name: "Tentang", href: "/tentang-kami" },
    {
      name: "Produk",
      href: "/produk",
      dropdown: true,
      children: [
        { name: "Waterproofing Membrane", href: "/produk/membrane" },
        { name: "Waterproofing Coating", href: "/produk/coating" },
        { name: "Waterproofing Cement", href: "/produk/cement" },
        { name: "Roof Waterproofing", href: "/produk/roofing" },
        { name: "Repair & Grouting", href: "/produk/repair-grouting" },
        { name: "Sealant & Adhesive", href: "/produk/sealant-adhesive" },
      ],
    },
    { name: "Layanan", href: "/layanan" },
    { name: "Proyek", href: "/proyek" },
    { name: "Kontak", href: "/kontak" },
  ],

  en: [
    { name: "Home", href: "/en" },
    { name: "About Us", href: "/en/about-us" },
    {
      name: "Products",
      href: "/en/products",
      dropdown: true,
      children: [
        { name: "Waterproofing Membrane", href: "/en/products/membrane" },
        { name: "Waterproofing Coating", href: "/en/products/coating" },
        { name: "Waterproofing Cement", href: "/en/products/cement" },
        { name: "Roof Waterproofing", href: "/en/products/roofing" },
        { name: "Repair & Grouting", href: "/en/products/repair-grouting" },
        { name: "Sealant & Adhesive", href: "/en/products/sealant-adhesive" },
      ],
    },
    { name: "Services", href: "/en/services" },
    { name: "Projects", href: "/en/projects" },
    { name: "Contact", href: "/en/contact" },
  ],

  zh: [
    { name: "首页", href: "/zh" },
    { name: "关于我们", href: "/zh/about-us" },
    {
      name: "产品",
      href: "/zh/products",
      dropdown: true,
      children: [
        { name: "防水卷材", href: "/zh/products/membrane" },
        { name: "防水涂料", href: "/zh/products/coating" },
        { name: "防水水泥", href: "/zh/products/cement" },
        { name: "屋顶防水", href: "/zh/products/roofing" },
        { name: "修补与灌浆", href: "/zh/products/repair-grouting" },
        { name: "密封胶与粘合剂", href: "/zh/products/sealant-adhesive" },
      ],
    },
    { name: "服务", href: "/zh/services" },
    { name: "项目", href: "/zh/projects" },
    { name: "联系我们", href: "/zh/contact" },
  ],
};