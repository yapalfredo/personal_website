export default function CompanyLogoBlack() {
  return (
    <picture className="w-40">
      <source srcSet={require("../../public/logoblack.png")} type="image/png" />
      <img src="/logoblack.png" alt="alfredoyap.com - logo" />
    </picture>
  );
}
