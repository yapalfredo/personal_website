export default function CompanyLogoBlack() {
  return (
    <picture style={{ width: "40%", height: "auto" }}>
      <source srcSet={require("../../public/logoblack.png")} type="image/png" />
      <img src="/logoblack.png" alt="alfredoyap.com - logo" />
    </picture>
  );
}
