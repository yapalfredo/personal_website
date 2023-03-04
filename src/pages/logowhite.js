export default function CompanyLogoWhite() {
  return (
    <picture className="w-40">
      <source srcSet={require("../../public/logowhite.png")} type="image/png" />
      <img src="/logowhite.png" alt="alfredoyap.com - logo" />
    </picture>
  );
}
