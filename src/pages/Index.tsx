import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import CapabilitiesSection from "@/components/home/CapabilitiesSection";
import SolutionsSection from "@/components/home/SolutionsSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import ClientsSection from "@/components/home/ClientsSection";
import ProcessSection from "@/components/home/ProcessSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ClientsSection />
      <CapabilitiesSection />
      <SolutionsSection />
      <WhyChooseUsSection />
      <ProcessSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
