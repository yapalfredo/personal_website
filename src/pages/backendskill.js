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
import apilogo from "../../public/api.svg";
import soliditylogo from "../../public/Solidity.svg";
import Image from "next/image";

export default function BackEndSkills() {
  return (
    <div className="text-center shadow-2xl p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10 2xl:p-12 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50 dark:from-slate-900 dark:via-emerald-950 dark:to-slate-800 w-full h-full transition-all duration-500 hover:shadow-[0_25px_50px_-12px_rgba(16,185,129,0.4)] dark:hover:shadow-[0_25px_50px_-12px_rgba(16,185,129,0.5)] hover:scale-[1.02] hover:-translate-y-2 border border-emerald-200/60 dark:border-emerald-500/30 dark:shadow-emerald-500/30 backdrop-blur-sm relative overflow-hidden group flex flex-col">
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-emerald-100/20 to-transparent dark:from-emerald-500/5 dark:via-emerald-400/10 dark:to-transparent pointer-events-none group-hover:from-white/50 group-hover:via-emerald-100/30 transition-all duration-500"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-200/20 via-transparent to-transparent dark:from-emerald-400/10 dark:via-transparent pointer-events-none"></div>
      <div className="relative z-10">
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold pb-3 sm:pb-4 md:pb-5 lg:pb-6 xl:pb-8 2xl:pb-10 bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-300 dark:to-teal-300 bg-clip-text text-transparent transition-all duration-300 tracking-tight drop-shadow-sm">
          Backend
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-2.5 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 flex-1">
        <div className="tooltip-container flex items-center justify-center w-[50px] h-[50px] sm:w-[55px] sm:h-[55px] md:w-[60px] md:h-[60px] lg:w-[65px] lg:h-[65px] xl:w-[70px] xl:h-[70px] transition-all duration-300 hover:scale-125 hover:z-20 cursor-pointer group relative bg-white/80 dark:bg-slate-600/95 dark:border dark:border-slate-500/60 rounded-xl sm:rounded-2xl p-2 sm:p-2.5 shadow-lg hover:shadow-2xl hover:bg-white dark:hover:bg-slate-500/95 dark:hover:border-emerald-400/80 dark:hover:shadow-emerald-400/50 backdrop-blur-md border border-emerald-100/50 dark:border-emerald-500/30 hover:border-emerald-200 dark:hover:border-emerald-400/70 dark:bg-gradient-to-br dark:from-slate-600/95 dark:to-slate-700/95">
          <Image
            src={mongodblogo}
            alt="mongo-db"
            width={50}
            height={50}
            className="w-full h-full object-contain p-1 sm:p-2 md:p-3 group-hover:drop-shadow-2xl transition-all duration-300"
          />
          <span className="tooltip">MongoDB</span>
        </div>
        <div className="tooltip-container flex items-center justify-center w-[50px] h-[50px] sm:w-[55px] sm:h-[55px] md:w-[60px] md:h-[60px] lg:w-[65px] lg:h-[65px] xl:w-[70px] xl:h-[70px] transition-all duration-300 hover:scale-125 hover:z-20 cursor-pointer group relative bg-white/80 dark:bg-slate-600/95 dark:border dark:border-slate-500/60 rounded-xl sm:rounded-2xl p-2 sm:p-2.5 shadow-lg hover:shadow-2xl hover:bg-white dark:hover:bg-slate-500/95 dark:hover:border-emerald-400/80 dark:hover:shadow-emerald-400/50 backdrop-blur-md border border-emerald-100/50 dark:border-emerald-500/30 hover:border-emerald-200 dark:hover:border-emerald-400/70 dark:bg-gradient-to-br dark:from-slate-600/95 dark:to-slate-700/95">
          <Image src={expresslogo} alt="express" width={50} height={50} className="w-full h-full object-contain group-hover:drop-shadow-2xl transition-all duration-300" />
          <span className="tooltip">Express.js</span>
        </div>
        <div className="tooltip-container flex items-center justify-center w-[50px] h-[50px] sm:w-[55px] sm:h-[55px] md:w-[60px] md:h-[60px] lg:w-[65px] lg:h-[65px] xl:w-[70px] xl:h-[70px] transition-all duration-300 hover:scale-125 hover:z-20 cursor-pointer group relative bg-white/80 dark:bg-slate-600/95 dark:border dark:border-slate-500/60 rounded-xl sm:rounded-2xl p-2 sm:p-2.5 shadow-lg hover:shadow-2xl hover:bg-white dark:hover:bg-slate-500/95 dark:hover:border-emerald-400/80 dark:hover:shadow-emerald-400/50 backdrop-blur-md border border-emerald-100/50 dark:border-emerald-500/30 hover:border-emerald-200 dark:hover:border-emerald-400/70 dark:bg-gradient-to-br dark:from-slate-600/95 dark:to-slate-700/95">
          <Image src={nodejslogo} alt="node-js" width={50} height={50} className="w-full h-full object-contain group-hover:drop-shadow-2xl transition-all duration-300" />
          <span className="tooltip">Node.js</span>
        </div>
        <div className="tooltip-container flex items-center justify-center w-[50px] h-[50px] sm:w-[55px] sm:h-[55px] md:w-[60px] md:h-[60px] lg:w-[65px] lg:h-[65px] xl:w-[70px] xl:h-[70px] transition-all duration-300 hover:scale-125 hover:z-20 cursor-pointer group relative bg-white/80 dark:bg-slate-600/95 dark:border dark:border-slate-500/60 rounded-xl sm:rounded-2xl p-2 sm:p-2.5 shadow-lg hover:shadow-2xl hover:bg-white dark:hover:bg-slate-500/95 dark:hover:border-emerald-400/80 dark:hover:shadow-emerald-400/50 backdrop-blur-md border border-emerald-100/50 dark:border-emerald-500/30 hover:border-emerald-200 dark:hover:border-emerald-400/70 dark:bg-gradient-to-br dark:from-slate-600/95 dark:to-slate-700/95">
          <Image src={firebaselogo} alt="firebase" width={50} height={50} className="w-full h-full object-contain group-hover:drop-shadow-2xl transition-all duration-300" />
          <span className="tooltip">Firebase</span>
        </div>
        <div className="tooltip-container flex items-center justify-center w-[50px] h-[50px] sm:w-[55px] sm:h-[55px] md:w-[60px] md:h-[60px] lg:w-[65px] lg:h-[65px] xl:w-[70px] xl:h-[70px] transition-all duration-300 hover:scale-125 hover:z-20 cursor-pointer group relative bg-white/80 dark:bg-slate-600/95 dark:border dark:border-slate-500/60 rounded-xl sm:rounded-2xl p-2 sm:p-2.5 shadow-lg hover:shadow-2xl hover:bg-white dark:hover:bg-slate-500/95 dark:hover:border-emerald-400/80 dark:hover:shadow-emerald-400/50 backdrop-blur-md border border-emerald-100/50 dark:border-emerald-500/30 hover:border-emerald-200 dark:hover:border-emerald-400/70 dark:bg-gradient-to-br dark:from-slate-600/95 dark:to-slate-700/95">
          <Image src={mysqllogo} alt="mysql" width={50} height={50} className="w-full h-full object-contain group-hover:drop-shadow-2xl transition-all duration-300" />
          <span className="tooltip">MySQL</span>
        </div>
        <div className="tooltip-container flex items-center justify-center w-[50px] h-[50px] sm:w-[55px] sm:h-[55px] md:w-[60px] md:h-[60px] lg:w-[65px] lg:h-[65px] xl:w-[70px] xl:h-[70px] transition-all duration-300 hover:scale-125 hover:z-20 cursor-pointer group relative bg-white/80 dark:bg-slate-600/95 dark:border dark:border-slate-500/60 rounded-xl sm:rounded-2xl p-2 sm:p-2.5 shadow-lg hover:shadow-2xl hover:bg-white dark:hover:bg-slate-500/95 dark:hover:border-emerald-400/80 dark:hover:shadow-emerald-400/50 backdrop-blur-md border border-emerald-100/50 dark:border-emerald-500/30 hover:border-emerald-200 dark:hover:border-emerald-400/70 dark:bg-gradient-to-br dark:from-slate-600/95 dark:to-slate-700/95">
          <Image src={cpluspluslogo} alt="c-plus-plus" width={50} height={50} className="w-full h-full object-contain group-hover:drop-shadow-2xl transition-all duration-300" />
          <span className="tooltip">C++</span>
        </div>
        <div className="tooltip-container flex items-center justify-center w-[50px] h-[50px] sm:w-[55px] sm:h-[55px] md:w-[60px] md:h-[60px] lg:w-[65px] lg:h-[65px] xl:w-[70px] xl:h-[70px] transition-all duration-300 hover:scale-125 hover:z-20 cursor-pointer group relative bg-white/80 dark:bg-slate-600/95 dark:border dark:border-slate-500/60 rounded-xl sm:rounded-2xl p-2 sm:p-2.5 shadow-lg hover:shadow-2xl hover:bg-white dark:hover:bg-slate-500/95 dark:hover:border-emerald-400/80 dark:hover:shadow-emerald-400/50 backdrop-blur-md border border-emerald-100/50 dark:border-emerald-500/30 hover:border-emerald-200 dark:hover:border-emerald-400/70 dark:bg-gradient-to-br dark:from-slate-600/95 dark:to-slate-700/95">
          <Image src={csharplogo} alt="c-sharp" width={50} height={50} className="w-full h-full object-contain group-hover:drop-shadow-2xl transition-all duration-300" />
          <span className="tooltip">C#</span>
        </div>
        <div className="tooltip-container flex items-center justify-center w-[50px] h-[50px] sm:w-[55px] sm:h-[55px] md:w-[60px] md:h-[60px] lg:w-[65px] lg:h-[65px] xl:w-[70px] xl:h-[70px] transition-all duration-300 hover:scale-125 hover:z-20 cursor-pointer group relative bg-white/80 dark:bg-slate-600/95 dark:border dark:border-slate-500/60 rounded-xl sm:rounded-2xl p-2 sm:p-2.5 shadow-lg hover:shadow-2xl hover:bg-white dark:hover:bg-slate-500/95 dark:hover:border-emerald-400/80 dark:hover:shadow-emerald-400/50 backdrop-blur-md border border-emerald-100/50 dark:border-emerald-500/30 hover:border-emerald-200 dark:hover:border-emerald-400/70 dark:bg-gradient-to-br dark:from-slate-600/95 dark:to-slate-700/95">
          <Image src={dotnetlogo} alt="dotnet" width={50} height={50} className="w-full h-full object-contain group-hover:drop-shadow-2xl transition-all duration-300" />
          <span className="tooltip">.NET</span>
        </div>
        <div className="tooltip-container flex items-center justify-center w-[50px] h-[50px] sm:w-[55px] sm:h-[55px] md:w-[60px] md:h-[60px] lg:w-[65px] lg:h-[65px] xl:w-[70px] xl:h-[70px] transition-all duration-300 hover:scale-125 hover:z-20 cursor-pointer group relative bg-white/80 dark:bg-slate-600/95 dark:border dark:border-slate-500/60 rounded-xl sm:rounded-2xl p-2 sm:p-2.5 shadow-lg hover:shadow-2xl hover:bg-white dark:hover:bg-slate-500/95 dark:hover:border-emerald-400/80 dark:hover:shadow-emerald-400/50 backdrop-blur-md border border-emerald-100/50 dark:border-emerald-500/30 hover:border-emerald-200 dark:hover:border-emerald-400/70 dark:bg-gradient-to-br dark:from-slate-600/95 dark:to-slate-700/95">
          <Image src={javalogo} alt="java" width={50} height={50} className="w-full h-full object-contain group-hover:drop-shadow-2xl transition-all duration-300" />
          <span className="tooltip">Java</span>
        </div>
        <div className="tooltip-container flex items-center justify-center w-[50px] h-[50px] sm:w-[55px] sm:h-[55px] md:w-[60px] md:h-[60px] lg:w-[65px] lg:h-[65px] xl:w-[70px] xl:h-[70px] transition-all duration-300 hover:scale-125 hover:z-20 cursor-pointer group relative bg-white/80 dark:bg-slate-600/95 dark:border dark:border-slate-500/60 rounded-xl sm:rounded-2xl p-2 sm:p-2.5 shadow-lg hover:shadow-2xl hover:bg-white dark:hover:bg-slate-500/95 dark:hover:border-emerald-400/80 dark:hover:shadow-emerald-400/50 backdrop-blur-md border border-emerald-100/50 dark:border-emerald-500/30 hover:border-emerald-200 dark:hover:border-emerald-400/70 dark:bg-gradient-to-br dark:from-slate-600/95 dark:to-slate-700/95">
          <Image src={pythonlogo} alt="python" width={50} height={50} className="w-full h-full object-contain group-hover:drop-shadow-2xl transition-all duration-300" />
          <span className="tooltip">Python</span>
        </div>
        <div className="tooltip-container flex items-center justify-center w-[50px] h-[50px] sm:w-[55px] sm:h-[55px] md:w-[60px] md:h-[60px] lg:w-[65px] lg:h-[65px] xl:w-[70px] xl:h-[70px] transition-all duration-300 hover:scale-125 hover:z-20 cursor-pointer group relative bg-white/80 dark:bg-slate-600/95 dark:border dark:border-slate-500/60 rounded-xl sm:rounded-2xl p-2 sm:p-2.5 shadow-lg hover:shadow-2xl hover:bg-white dark:hover:bg-slate-500/95 dark:hover:border-emerald-400/80 dark:hover:shadow-emerald-400/50 backdrop-blur-md border border-emerald-100/50 dark:border-emerald-500/30 hover:border-emerald-200 dark:hover:border-emerald-400/70 dark:bg-gradient-to-br dark:from-slate-600/95 dark:to-slate-700/95">
          <Image src={apilogo} alt="API" width={50} height={50} className="w-full h-full object-contain group-hover:drop-shadow-2xl transition-all duration-300" />
          <span className="tooltip">API Development</span>
        </div>
        <div className="tooltip-container flex items-center justify-center w-[50px] h-[50px] sm:w-[55px] sm:h-[55px] md:w-[60px] md:h-[60px] lg:w-[65px] lg:h-[65px] xl:w-[70px] xl:h-[70px] transition-all duration-300 hover:scale-125 hover:z-20 cursor-pointer group relative bg-white/80 dark:bg-slate-600/95 dark:border dark:border-slate-500/60 rounded-xl sm:rounded-2xl p-2 sm:p-2.5 shadow-lg hover:shadow-2xl hover:bg-white dark:hover:bg-slate-500/95 dark:hover:border-emerald-400/80 dark:hover:shadow-emerald-400/50 backdrop-blur-md border border-emerald-100/50 dark:border-emerald-500/30 hover:border-emerald-200 dark:hover:border-emerald-400/70 dark:bg-gradient-to-br dark:from-slate-600/95 dark:to-slate-700/95">
          <Image src={soliditylogo} alt="Solidity" width={50} height={50} className="w-full h-full object-contain group-hover:drop-shadow-2xl transition-all duration-300" />
          <span className="tooltip">Solidity</span>
        </div>
        </div>
      </div>
    </div>
  );
}
