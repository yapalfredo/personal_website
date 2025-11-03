import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";

export default function SocialIcons(props) {
  const { darkMode, mounted } = props;
  
  const renderIcon = (icon) => {
    switch (icon) {
      case "git":
        return <AiFillGithub />;
      case "linkedin":
        return <AiFillLinkedin />;
      case "email":
        return <AiFillMail />;
      default:
        return;
    }
  };

  const getIconClasses = (icon) => {
    const animationDelay = icon === "git" ? "animation-delay-300" : icon === "linkedin" ? "animation-delay-400" : "animation-delay-500";
    const mountedClass = mounted ? 'animate-fade-in-up opacity-100' : 'opacity-0';
    const baseClasses = `transition-all duration-300 rounded-full p-2 sm:p-3 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 ${animationDelay} ${mountedClass}`;
    
    if (darkMode) {
      // Dark mode styles
      return `${baseClasses} text-slate-300 hover:text-white ${
        icon === "git" 
          ? "hover:bg-gradient-to-tr hover:from-gray-800 hover:via-gray-700 hover:to-gray-800 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] focus:ring-slate-400" 
          : icon === "linkedin" 
          ? "hover:bg-gradient-to-tr hover:from-blue-600 hover:via-blue-500 hover:to-blue-600 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] focus:ring-blue-400"
          : "hover:bg-gradient-to-tr hover:from-sky-600 hover:via-sky-500 hover:to-sky-600 hover:shadow-[0_0_20px_rgba(14,165,233,0.4)] focus:ring-sky-400"
      }`;
    } else {
      // Light mode styles
      return `${baseClasses} text-gray-600 hover:text-white ${
        icon === "git" 
          ? "hover:bg-gradient-to-tr hover:from-gray-700 hover:via-gray-600 hover:to-gray-700 hover:shadow-[0_0_20px_rgba(0,0,0,0.2)] focus:ring-gray-500" 
          : icon === "linkedin" 
          ? "hover:bg-gradient-to-tr hover:from-blue-600 hover:via-blue-500 hover:to-blue-600 hover:shadow-[0_0_20px_rgba(37,99,235,0.3)] focus:ring-blue-500"
          : "hover:bg-gradient-to-tr hover:from-sky-600 hover:via-sky-500 hover:to-sky-600 hover:shadow-[0_0_20px_rgba(14,165,233,0.3)] focus:ring-sky-500"
      }`;
    }
  };

  return (
    <a
      href={props.url}
      target="_blank"
      rel="noopener noreferrer"
      className={getIconClasses(props.icon)}
      aria-label={props.icon === 'git' ? 'GitHub' : props.icon === 'linkedin' ? 'LinkedIn' : 'Email'}
    >
      {renderIcon(props.icon)}
    </a>
  );
}
