import Header from "@/components/home/Header";
import FooterCTA from "@/components/home/FooterCTA";

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <FooterCTA />
    </>
  );
}
