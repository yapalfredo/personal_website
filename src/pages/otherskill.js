import gitlogo from "../../public/giticon.svg";
import githublogo from "../../public/github.svg";
import googlecloudlogo from "../../public/google-cloud.svg";
import awslogo from "../../public/aws.svg";
import azurelogo from "../../public/azure-icon.svg";
import netlifylogo from "../../public/netlify.svg";
import ibmcloudlogo from "../../public/ibm-cloud.svg";
import Image from "next/image";

export default function OtherSkills() {
  return (
    <div className="text-center shadow-xl p-10 rounded-xl my-10    dark:bg-gradient-to-tl    dark:from-sky-700 dark:to-slate-400    flex-1">
      <h3 className="text-2xl font-medium  pb-10 dark:text-white font-">
        Other
      </h3>
      <div className="flex flex-wrap content-center justify-evenly">
        <Image src={gitlogo} alt="git" width={60} height={60} />
        <Image src={githublogo} alt="git-hub" width={60} height={60} />
        <Image src={netlifylogo} alt="netlify" width={60} height={60} />
        <Image
          src={googlecloudlogo}
          alt="google-cloud"
          width={60}
          height={60}
        />
        <Image src={awslogo} alt="aws" width={60} height={60} />
        <Image src={azurelogo} alt="azure" width={60} height={60} />
        <Image src={ibmcloudlogo} alt="ibm-cloud" width={60} height={60} />
      </div>
    </div>
  );
}
