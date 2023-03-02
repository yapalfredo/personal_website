import reactlogo from "../../public/react.svg";

import tailwindlogo from "../../public/tailwind.svg";
import styledcomponentslogo from "../../public/styledcomponents.svg";
import html5logo from "../../public/html5.svg";
import materialuilogo from "../../public/materialui.svg";
import wordpresslogo from "../../public/wordpress.svg";
import nextjslogo from "../../public/nextjsicon.svg";
import javascriptlogo from "../../public/javascript.svg";
import css3logo from "../../public/css3.svg";
import Image from "next/image";

export default function FrontEndSkills() {
  return (
    <div className="text-center shadow-xl p-10 rounded-xl my-10   dark:bg-gradient-to-tl   dark:from-sky-700 dark:to-slate-400   flex-1">
      <h3 className="text-2xl font-medium  pb-10 dark:text-white">Frontend</h3>
      <div className="flex flex-wrap content-center justify-evenly">
        <Image src={html5logo} alt="html5" width={60} height={60} />
        <Image src={javascriptlogo} alt="javascript" width={60} height={60} />
        <Image src={css3logo} alt="css3" width={60} height={60} />
        <Image src={reactlogo} alt="react" width={60} height={60} />

        <Image src={nextjslogo} alt="next-js" width={60} height={60} />
        <Image
          src={styledcomponentslogo}
          alt="styled-components"
          width={60}
          height={60}
        />
        <Image src={tailwindlogo} alt="tailwindcss" width={60} height={60} />
        <Image src={materialuilogo} alt="material-ui" width={60} height={60} />
        <Image src={wordpresslogo} alt="wordpress" width={60} height={60} />
      </div>
    </div>
  );
}
