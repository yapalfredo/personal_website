import cpluspluslogo from "../../public/cplusplus.svg";
import csharplogo from "../../public/csharp.svg";
import dotnetlogo from "../../public/dotnet.svg";
import pythonlogo from "../../public/python.svg";
import javalogo from "../../public/java.svg";
import nodejslogo from "../../public/nodejs.svg";
import expresslogo from "../../public/express.svg";
import mongodblogo from "../../public/mongodb.svg";
import firebaselogo from "../../public/firebase.svg";
import mysqllogo from "../../public/mysql.svg";
import Image from "next/image";

export default function BackEndSkills() {
  return (
    <div className="text-center shadow-xl p-10 rounded-xl my-10   dark:bg-gradient-to-tl  dark:from-sky-700 dark:to-slate-400   flex-1">
      <h3 className="text-2xl font-medium  pb-10 dark:text-white">Backend</h3>
      <div className="flex flex-wrap content-center justify-evenly ">
        <Image
          src={mongodblogo}
          alt="mongo-db"
          width={60}
          height={60}
          className="p-3"
        />
        <Image src={expresslogo} alt="express" width={60} height={60} />
        <Image src={nodejslogo} alt="node-js" width={60} height={60} />
        <Image src={firebaselogo} alt="firebase" width={60} height={60} />
        <Image src={mysqllogo} alt="mysql" width={60} height={60} />
        <Image src={cpluspluslogo} alt="c-plus-plus" width={60} height={60} />
        <Image src={csharplogo} alt="c-sharp" width={60} height={60} />
        <Image src={dotnetlogo} alt="c-sharp" width={60} height={60} />
        <Image src={javalogo} alt="java" width={60} height={60} />
        <Image src={pythonlogo} alt="python" width={60} height={60} />
      </div>
    </div>
  );
}
