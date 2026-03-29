import Section from './Section';
import FilterProperty from './FilterProperty';

const Hero = () => {
  return (
    <div>
      <Section
        className="pt-42 -mt-21"
        crosses
        crossesOffset="lg:translate-y-[5.75rem]"
        id="hero">
        <div className="container relative">
          <div
            className="relative flex flex-col items-center justify-center z-1 max-w-5xl mx-auto text-center
          mb-12 md:mb-14 lg:mb-16">
            <h2>Lebih dari Sekadar Tempat Tinggal, Ini Adalah Warisan Anda di Masa Depan.</h2>
            <span className="block font-manrope font-medium line-clamp- mt-4 text-center max-w-2xl mx-auto text-[16px] tracking-wide leading-5">
              Jangan biarkan inflasi menggerus aset Anda. Amankan investasi Anda pada properti mewah dengan nilai intrinsik yang tak lekang oleh waktu.
            </span>
          </div>
          <FilterProperty/>
        </div>
      </Section>
    </div>
  );
};

export default Hero;
