import { AboutHero } from '../../components/about/AboutHero';
import { MissionVision } from '../../components/about/MissionVision';
import { WhyChooseUs } from '../../components/about/WhyChooseUs';
import { CoreValues } from '../../components/about/CoreValues';
import { TeamCulture } from '../../components/about/TeamCulture';
import { CompanyTimeline } from '../../components/about/CompanyTimeline';
import { AboutCTA } from '../../components/about/AboutCTA';

export default function About() {
  return (
    <div className="flex flex-col w-full bg-[#0f172a]">
      <AboutHero />
      <MissionVision />
      <WhyChooseUs />
      <CoreValues />
      <TeamCulture />
      <CompanyTimeline />
      <AboutCTA />
    </div>
  );
}
