import { CareersHero } from '../../components/careers/CareersHero';
import { WhyWorkWithUs } from '../../components/careers/WhyWorkWithUs';
import { Benefits } from '../../components/careers/Benefits';
import { OpenPositions } from '../../components/careers/OpenPositions';
import { CultureGallery } from '../../components/careers/CultureGallery';
import { HiringProcess } from '../../components/careers/HiringProcess';
import { EmployeeTestimonials } from '../../components/careers/EmployeeTestimonials';
import { CareersCTA } from '../../components/careers/CareersCTA';

export default function Careers() {
  return (
    <div className="flex flex-col w-full bg-[#0f172a]">
      <CareersHero />
      <WhyWorkWithUs />
      <Benefits />
      <OpenPositions />
      <CultureGallery />
      <HiringProcess />
      <EmployeeTestimonials />
      <CareersCTA />
    </div>
  );
}
