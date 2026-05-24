import { Navigation } from "@/components/Navigation";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Architecture } from "@/components/sections/Architecture";
import { Comparison } from "@/components/sections/Comparison";
import { Compliance } from "@/components/sections/Compliance";
import { Context } from "@/components/sections/Context";
import { ExecutiveSummary } from "@/components/sections/ExecutiveSummary";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Impact } from "@/components/sections/Impact";
import { Implementation } from "@/components/sections/Implementation";
import { Innovation } from "@/components/sections/Innovation";
import { Precedents } from "@/components/sections/Precedents";
import { ProblemStatement } from "@/components/sections/ProblemStatement";
import { SequenceFlows } from "@/components/sections/SequenceFlows";
import { Solution } from "@/components/sections/Solution";
import { TechStack } from "@/components/sections/TechStack";
import { TrustStack } from "@/components/sections/TrustStack";

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <Navigation />

      <main>
        <Hero />
        <ExecutiveSummary />
        <ProblemStatement />
        <Solution />
        <Architecture />
        <Context />
        <SequenceFlows />
        <TrustStack />
        <Innovation />
        <Comparison />
        <TechStack />
        <Implementation />
        <Impact />
        <Compliance />
        <Precedents />
      </main>

      <Footer />
    </>
  );
}
