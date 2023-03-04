export default function CompanyLogoWhite() {
  return (
    <picture style={{ width: "40%", height: "auto" }}>
      <source srcSet={require("../../public/logowhite.png")} type="image/png" />
      <img src="/logowhite.png" alt="alfredoyap.com - logo" />
    </picture>
  );
}
