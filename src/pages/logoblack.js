export default function CompanyLogoBlack() {
  return (
    <picture className="w-16 sm:w-20 md:w-20 lg:w-20 max-w-[120px] transition-transform duration-300 hover:scale-105">
      <source srcSet={require("../../public/logoblack.png")} type="image/png" />
      <img 
        src="/logoblack.png" 
        alt="alfredoyap.com - logo" 
        className="w-full h-auto max-h-12"
        loading="eager"
      />
    </picture>
  );
}
