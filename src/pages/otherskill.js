import Image from "next/image";

export default function OtherSkills() {
  return (
    <div className="text-center shadow-2xl p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10 2xl:p-12 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-purple-50 via-pink-50 to-fuchsia-50 dark:from-slate-900 dark:via-purple-950 dark:to-slate-800 w-full h-full transition-all duration-500 hover:shadow-[0_25px_50px_-12px_rgba(168,85,247,0.4)] dark:hover:shadow-[0_25px_50px_-12px_rgba(168,85,247,0.5)] hover:scale-[1.02] hover:-translate-y-2 border border-purple-200/60 dark:border-purple-500/30 dark:shadow-purple-500/30 backdrop-blur-sm relative overflow-hidden group flex flex-col">
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-purple-100/20 to-transparent dark:from-purple-500/5 dark:via-purple-400/10 dark:to-transparent pointer-events-none group-hover:from-white/50 group-hover:via-purple-100/30 transition-all duration-500"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-purple-200/20 via-transparent to-transparent dark:from-purple-400/10 dark:via-transparent pointer-events-none"></div>
      <div className="relative z-10">
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold pb-3 sm:pb-4 md:pb-5 lg:pb-6 xl:pb-8 2xl:pb-10 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-300 dark:to-pink-300 bg-clip-text text-transparent transition-all duration-300 tracking-tight drop-shadow-sm">
          Other
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-2.5 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 flex-1">
        <div className="tooltip-container flex items-center justify-center w-[50px] h-[50px] sm:w-[55px] sm:h-[55px] md:w-[60px] md:h-[60px] lg:w-[65px] lg:h-[65px] xl:w-[70px] xl:h-[70px] transition-all duration-300 hover:scale-125 hover:z-20 cursor-pointer group relative bg-white/80 dark:bg-slate-600/95 dark:border dark:border-slate-500/60 rounded-xl sm:rounded-2xl p-2 sm:p-2.5 shadow-lg hover:shadow-2xl hover:bg-white dark:hover:bg-slate-500/95 dark:hover:border-purple-400/80 dark:hover:shadow-purple-400/50 backdrop-blur-md border border-purple-100/50 dark:border-purple-500/30 hover:border-purple-200 dark:hover:border-purple-400/70 dark:bg-gradient-to-br dark:from-slate-600/95 dark:to-slate-700/95">
          <Image src="/giticon.svg" alt="git" width={50} height={50} className="w-full h-full object-contain group-hover:drop-shadow-2xl transition-all duration-300" />
          <span className="tooltip">Git</span>
        </div>
        <div className="tooltip-container flex items-center justify-center w-[50px] h-[50px] sm:w-[55px] sm:h-[55px] md:w-[60px] md:h-[60px] lg:w-[65px] lg:h-[65px] xl:w-[70px] xl:h-[70px] transition-all duration-300 hover:scale-125 hover:z-20 cursor-pointer group relative bg-white/80 dark:bg-slate-600/95 dark:border dark:border-slate-500/60 rounded-xl sm:rounded-2xl p-2 sm:p-2.5 shadow-lg hover:shadow-2xl hover:bg-white dark:hover:bg-slate-500/95 dark:hover:border-purple-400/80 dark:hover:shadow-purple-400/50 backdrop-blur-md border border-purple-100/50 dark:border-purple-500/30 hover:border-purple-200 dark:hover:border-purple-400/70 dark:bg-gradient-to-br dark:from-slate-600/95 dark:to-slate-700/95">
          <Image src="/github.svg" alt="git-hub" width={50} height={50} className="w-full h-full object-contain group-hover:drop-shadow-2xl transition-all duration-300" />
          <span className="tooltip">GitHub</span>
        </div>
        <div className="tooltip-container flex items-center justify-center w-[50px] h-[50px] sm:w-[55px] sm:h-[55px] md:w-[60px] md:h-[60px] lg:w-[65px] lg:h-[65px] xl:w-[70px] xl:h-[70px] transition-all duration-300 hover:scale-125 hover:z-20 cursor-pointer group relative bg-white/80 dark:bg-slate-600/95 dark:border dark:border-slate-500/60 rounded-xl sm:rounded-2xl p-2 sm:p-2.5 shadow-lg hover:shadow-2xl hover:bg-white dark:hover:bg-slate-500/95 dark:hover:border-purple-400/80 dark:hover:shadow-purple-400/50 backdrop-blur-md border border-purple-100/50 dark:border-purple-500/30 hover:border-purple-200 dark:hover:border-purple-400/70 dark:bg-gradient-to-br dark:from-slate-600/95 dark:to-slate-700/95">
          <Image src="/netlify.svg" alt="netlify" width={50} height={50} className="w-full h-full object-contain group-hover:drop-shadow-2xl transition-all duration-300" />
          <span className="tooltip">Netlify</span>
        </div>
        <div className="tooltip-container flex items-center justify-center w-[50px] h-[50px] sm:w-[55px] sm:h-[55px] md:w-[60px] md:h-[60px] lg:w-[65px] lg:h-[65px] xl:w-[70px] xl:h-[70px] transition-all duration-300 hover:scale-125 hover:z-20 cursor-pointer group relative bg-white/80 dark:bg-slate-600/95 dark:border dark:border-slate-500/60 rounded-xl sm:rounded-2xl p-2 sm:p-2.5 shadow-lg hover:shadow-2xl hover:bg-white dark:hover:bg-slate-500/95 dark:hover:border-purple-400/80 dark:hover:shadow-purple-400/50 backdrop-blur-md border border-purple-100/50 dark:border-purple-500/30 hover:border-purple-200 dark:hover:border-purple-400/70 dark:bg-gradient-to-br dark:from-slate-600/95 dark:to-slate-700/95">
          <Image
            src="/google-cloud.svg"
            alt="google-cloud"
            width={50}
            height={50}
            className="w-full h-full object-contain group-hover:drop-shadow-2xl transition-all duration-300"
          />
          <span className="tooltip">Google Cloud</span>
        </div>
        <div className="tooltip-container flex items-center justify-center w-[50px] h-[50px] sm:w-[55px] sm:h-[55px] md:w-[60px] md:h-[60px] lg:w-[65px] lg:h-[65px] xl:w-[70px] xl:h-[70px] transition-all duration-300 hover:scale-125 hover:z-20 cursor-pointer group relative bg-white/80 dark:bg-slate-600/95 dark:border dark:border-slate-500/60 rounded-xl sm:rounded-2xl p-2 sm:p-2.5 shadow-lg hover:shadow-2xl hover:bg-white dark:hover:bg-slate-500/95 dark:hover:border-purple-400/80 dark:hover:shadow-purple-400/50 backdrop-blur-md border border-purple-100/50 dark:border-purple-500/30 hover:border-purple-200 dark:hover:border-purple-400/70 dark:bg-gradient-to-br dark:from-slate-600/95 dark:to-slate-700/95">
          <Image src="/aws.svg" alt="aws" width={50} height={50} className="w-full h-full object-contain group-hover:drop-shadow-2xl transition-all duration-300" />
          <span className="tooltip">AWS</span>
        </div>
        <div className="tooltip-container flex items-center justify-center w-[50px] h-[50px] sm:w-[55px] sm:h-[55px] md:w-[60px] md:h-[60px] lg:w-[65px] lg:h-[65px] xl:w-[70px] xl:h-[70px] transition-all duration-300 hover:scale-125 hover:z-20 cursor-pointer group relative bg-white/80 dark:bg-slate-600/95 dark:border dark:border-slate-500/60 rounded-xl sm:rounded-2xl p-2 sm:p-2.5 shadow-lg hover:shadow-2xl hover:bg-white dark:hover:bg-slate-500/95 dark:hover:border-purple-400/80 dark:hover:shadow-purple-400/50 backdrop-blur-md border border-purple-100/50 dark:border-purple-500/30 hover:border-purple-200 dark:hover:border-purple-400/70 dark:bg-gradient-to-br dark:from-slate-600/95 dark:to-slate-700/95">
          <Image src="/azure-icon.svg" alt="azure" width={50} height={50} className="w-full h-full object-contain group-hover:drop-shadow-2xl transition-all duration-300" />
          <span className="tooltip">Azure</span>
        </div>
        <div className="tooltip-container flex items-center justify-center w-[50px] h-[50px] sm:w-[55px] sm:h-[55px] md:w-[60px] md:h-[60px] lg:w-[65px] lg:h-[65px] xl:w-[70px] xl:h-[70px] transition-all duration-300 hover:scale-125 hover:z-20 cursor-pointer group relative bg-white/80 dark:bg-slate-600/95 dark:border dark:border-slate-500/60 rounded-xl sm:rounded-2xl p-2 sm:p-2.5 shadow-lg hover:shadow-2xl hover:bg-white dark:hover:bg-slate-500/95 dark:hover:border-purple-400/80 dark:hover:shadow-purple-400/50 backdrop-blur-md border border-purple-100/50 dark:border-purple-500/30 hover:border-purple-200 dark:hover:border-purple-400/70 dark:bg-gradient-to-br dark:from-slate-600/95 dark:to-slate-700/95">
          <Image src="/ibm-cloud.svg" alt="ibm-cloud" width={50} height={50} className="w-full h-full object-contain group-hover:drop-shadow-2xl transition-all duration-300" />
          <span className="tooltip">IBM Cloud</span>
        </div>
        <div className="tooltip-container flex items-center justify-center w-[50px] h-[50px] sm:w-[55px] sm:h-[55px] md:w-[60px] md:h-[60px] lg:w-[65px] lg:h-[65px] xl:w-[70px] xl:h-[70px] transition-all duration-300 hover:scale-125 hover:z-20 cursor-pointer group relative bg-white/80 dark:bg-slate-600/95 dark:border dark:border-slate-500/60 rounded-xl sm:rounded-2xl p-2 sm:p-2.5 shadow-lg hover:shadow-2xl hover:bg-white dark:hover:bg-slate-500/95 dark:hover:border-purple-400/80 dark:hover:shadow-purple-400/50 backdrop-blur-md border border-purple-100/50 dark:border-purple-500/30 hover:border-purple-200 dark:hover:border-purple-400/70 dark:bg-gradient-to-br dark:from-slate-600/95 dark:to-slate-700/95">
          <Image src="/AI.svg" alt="AI" width={50} height={50} className="w-full h-full object-contain group-hover:drop-shadow-2xl transition-all duration-300" />
          <span className="tooltip">AI</span>
        </div>
        <div className="tooltip-container flex items-center justify-center w-[50px] h-[50px] sm:w-[55px] sm:h-[55px] md:w-[60px] md:h-[60px] lg:w-[65px] lg:h-[65px] xl:w-[70px] xl:h-[70px] transition-all duration-300 hover:scale-125 hover:z-20 cursor-pointer group relative bg-white/80 dark:bg-slate-600/95 dark:border dark:border-slate-500/60 rounded-xl sm:rounded-2xl p-2 sm:p-2.5 shadow-lg hover:shadow-2xl hover:bg-white dark:hover:bg-slate-500/95 dark:hover:border-purple-400/80 dark:hover:shadow-purple-400/50 backdrop-blur-md border border-purple-100/50 dark:border-purple-500/30 hover:border-purple-200 dark:hover:border-purple-400/70 dark:bg-gradient-to-br dark:from-slate-600/95 dark:to-slate-700/95">
          <Image src="/vercel.svg" alt="Vercel" width={50} height={50} className="w-full h-full object-contain group-hover:drop-shadow-2xl transition-all duration-300" />
          <span className="tooltip">Vercel</span>
        </div>
        <div className="tooltip-container flex items-center justify-center w-[50px] h-[50px] sm:w-[55px] sm:h-[55px] md:w-[60px] md:h-[60px] lg:w-[65px] lg:h-[65px] xl:w-[70px] xl:h-[70px] transition-all duration-300 hover:scale-125 hover:z-20 cursor-pointer group relative bg-white/80 dark:bg-slate-600/95 dark:border dark:border-slate-500/60 rounded-xl sm:rounded-2xl p-2 sm:p-2.5 shadow-lg hover:shadow-2xl hover:bg-white dark:hover:bg-slate-500/95 dark:hover:border-purple-400/80 dark:hover:shadow-purple-400/50 backdrop-blur-md border border-purple-100/50 dark:border-purple-500/30 hover:border-purple-200 dark:hover:border-purple-400/70 dark:bg-gradient-to-br dark:from-slate-600/95 dark:to-slate-700/95">
          <Image src="/Docker.svg" alt="Docker" width={50} height={50} className="w-full h-full object-contain group-hover:drop-shadow-2xl transition-all duration-300" />
          <span className="tooltip">Docker</span>
        </div>
        <div className="tooltip-container flex items-center justify-center w-[50px] h-[50px] sm:w-[55px] sm:h-[55px] md:w-[60px] md:h-[60px] lg:w-[65px] lg:h-[65px] xl:w-[70px] xl:h-[70px] transition-all duration-300 hover:scale-125 hover:z-20 cursor-pointer group relative bg-white/80 dark:bg-slate-600/95 dark:border dark:border-slate-500/60 rounded-xl sm:rounded-2xl p-2 sm:p-2.5 shadow-lg hover:shadow-2xl hover:bg-white dark:hover:bg-slate-500/95 dark:hover:border-purple-400/80 dark:hover:shadow-purple-400/50 backdrop-blur-md border border-purple-100/50 dark:border-purple-500/30 hover:border-purple-200 dark:hover:border-purple-400/70 dark:bg-gradient-to-br dark:from-slate-600/95 dark:to-slate-700/95">
          <Image src="/Kubernetes.svg" alt="Kubernetes" width={50} height={50} className="w-full h-full object-contain group-hover:drop-shadow-2xl transition-all duration-300" />
          <span className="tooltip">Kubernetes</span>
        </div>
        <div className="tooltip-container flex items-center justify-center w-[50px] h-[50px] sm:w-[55px] sm:h-[55px] md:w-[60px] md:h-[60px] lg:w-[65px] lg:h-[65px] xl:w-[70px] xl:h-[70px] transition-all duration-300 hover:scale-125 hover:z-20 cursor-pointer group relative bg-white/80 dark:bg-slate-600/95 dark:border dark:border-slate-500/60 rounded-xl sm:rounded-2xl p-2 sm:p-2.5 shadow-lg hover:shadow-2xl hover:bg-white dark:hover:bg-slate-500/95 dark:hover:border-purple-400/80 dark:hover:shadow-purple-400/50 backdrop-blur-md border border-purple-100/50 dark:border-purple-500/30 hover:border-purple-200 dark:hover:border-purple-400/70 dark:bg-gradient-to-br dark:from-slate-600/95 dark:to-slate-700/95">
          <Image src="/ubiquiti.svg" alt="Ubiquiti UniFi" width={50} height={50} className="w-full h-full object-contain group-hover:drop-shadow-2xl transition-all duration-300" />
          <span className="tooltip">Ubiquiti UniFi</span>
        </div>
        <div className="tooltip-container flex items-center justify-center w-[50px] h-[50px] sm:w-[55px] sm:h-[55px] md:w-[60px] md:h-[60px] lg:w-[65px] lg:h-[65px] xl:w-[70px] xl:h-[70px] transition-all duration-300 hover:scale-125 hover:z-20 cursor-pointer group relative bg-white/80 dark:bg-slate-600/95 dark:border dark:border-slate-500/60 rounded-xl sm:rounded-2xl p-2 sm:p-2.5 shadow-lg hover:shadow-2xl hover:bg-white dark:hover:bg-slate-500/95 dark:hover:border-purple-400/80 dark:hover:shadow-purple-400/50 backdrop-blur-md border border-purple-100/50 dark:border-purple-500/30 hover:border-purple-200 dark:hover:border-purple-400/70 dark:bg-gradient-to-br dark:from-slate-600/95 dark:to-slate-700/95">
          <Image src="/omada.svg" alt="Omada" width={50} height={50} className="w-full h-full object-contain group-hover:drop-shadow-2xl transition-all duration-300" />
          <span className="tooltip">Omada</span>
        </div>
        <div className="tooltip-container flex items-center justify-center w-[50px] h-[50px] sm:w-[55px] sm:h-[55px] md:w-[60px] md:h-[60px] lg:w-[65px] lg:h-[65px] xl:w-[70px] xl:h-[70px] transition-all duration-300 hover:scale-125 hover:z-20 cursor-pointer group relative bg-white/80 dark:bg-slate-600/95 dark:border dark:border-slate-500/60 rounded-xl sm:rounded-2xl p-2 sm:p-2.5 shadow-lg hover:shadow-2xl hover:bg-white dark:hover:bg-slate-500/95 dark:hover:border-purple-400/80 dark:hover:shadow-purple-400/50 backdrop-blur-md border border-purple-100/50 dark:border-purple-500/30 hover:border-purple-200 dark:hover:border-purple-400/70 dark:bg-gradient-to-br dark:from-slate-600/95 dark:to-slate-700/95">
          <Image src="/akuvox.svg" alt="Akuvox" width={50} height={50} className="w-full h-full object-contain group-hover:drop-shadow-2xl transition-all duration-300" />
          <span className="tooltip">Akuvox</span>
        </div>
        <div className="tooltip-container flex items-center justify-center w-[50px] h-[50px] sm:w-[55px] sm:h-[55px] md:w-[60px] md:h-[60px] lg:w-[65px] lg:h-[65px] xl:w-[70px] xl:h-[70px] transition-all duration-300 hover:scale-125 hover:z-20 cursor-pointer group relative bg-white/80 dark:bg-slate-600/95 dark:border dark:border-slate-500/60 rounded-xl sm:rounded-2xl p-2 sm:p-2.5 shadow-lg hover:shadow-2xl hover:bg-white dark:hover:bg-slate-500/95 dark:hover:border-purple-400/80 dark:hover:shadow-purple-400/50 backdrop-blur-md border border-purple-100/50 dark:border-purple-500/30 hover:border-purple-200 dark:hover:border-purple-400/70 dark:bg-gradient-to-br dark:from-slate-600/95 dark:to-slate-700/95">
          <Image src="/customer-support.svg" alt="Customer Support" width={50} height={50} className="w-full h-full object-contain group-hover:drop-shadow-2xl transition-all duration-300" />
          <span className="tooltip">Customer Support</span>
        </div>
        </div>
      </div>
    </div>
  );
}
