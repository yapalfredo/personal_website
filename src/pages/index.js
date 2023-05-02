import Head from 'next/head';
import { Inter } from 'next/font/google';
import { CgDarkMode } from 'react-icons/Cg';
import SocialIcons from './socials';
import FrontEndSkills from './frontendskill';
import BackEndSkills from './backendskill';
import OtherSkills from './otherskill';
import { useState } from 'react';
import CompanyLogoBlack from './logoblack';
import CompanyLogoWhite from './logowhite';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Alfredo Yap | alfredoyap.com | Portfolio</title>
        <meta name="description" content="alfredo yap | personal website |" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="bg-white px-10 dark:bg-sky-900">
        <section className="min-h-max">
          <nav className="py-10 mb-12 flex justify-between items-center ">
            {!darkMode ? <CompanyLogoBlack /> : <CompanyLogoWhite />}

            <ul className="flex items-center content-center center">
              <li>
                {!darkMode ? (
                  <CgDarkMode
                    onClick={() => setDarkMode(!darkMode)}
                    className="cursor-pointer text-2xl"
                  />
                ) : (
                  <CgDarkMode
                    className="cursor-pointer text-2xl text-white"
                    onClick={() => setDarkMode(!darkMode)}
                  />
                )}
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1kXE9nz1Wk-Lh2FmqVDc2AEVAH4CF3qPH/view?usp=share_link"
                  target="_blank"
                  className="dark:bg-gradient-to-tr  dark:from-slate-500 dark:to-sky-500 text-white px-4 py-2 rounded-md ml-8 bg-gradient-to-tr from-gray-600 to-gray-200 "
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-sky-600 font-bold dark:text-sky-300">
              Alfredo Yap
            </h2>
            <h3 className="text-2xl py-2 dark:text-white">
              Software Developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200">
              As a software developer with a strong focus on React and React
              Native, he brings a fresh perspective and enthusiasm to every
              project. Alongside his technical skills, he has a growing interest
              in the exciting world of Blockchain and Web3. He is constantly
              seeking opportunities to learn and expand his knowledge in this
              field. His commitment to quality and professionalism is matched
              only by his humility and willingness to learn from others. He is
              eager to continue growing and developing his skills as a
              developer, and is excited to contribute to projects that make a
              real impact.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-200">
            <SocialIcons url="https://github.com/yapalfredo/" icon="git" />
            <SocialIcons
              url="https://www.linkedin.com/in/yapalfredo/"
              icon="linkedin"
            />
            <SocialIcons url="mailto:al@alfredoyap.com" icon="email" />
          </div>
          <div className="mx-auto bg-gradient-to-b from-slate-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
            <picture style={{ objectFit: 'cover' }}>
              <source
                srcSet={require('../../public/avatar.webp')}
                type="image/webp"
              />
              <img src="/avatar.webp" alt="alfred-avatar" />
            </picture>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-4xl text-center font-semibold pt-10 dark:text-white">
              Skills
            </h3>
          </div>
          <div className="lg:flex gap-10">
            <FrontEndSkills />
            <BackEndSkills />
            <OtherSkills />
          </div>
        </section>

        <section className="mt-20">
          <div className="flex-row text-center text-lg dark:text-white">
            <div className="hover:scale-105 hover:drop-shadow-lg hover:text-sky-600 dark:hover:text-sky-300">
              <a href="mailto:al@alfredoyap.com">al@alfredoyap.com </a>
            </div>
            <div className="hover:scale-105 hover:drop-shadow-lg hover:text-sky-600 dark:hover:text-sky-300">
              <a href="tel:+17162222609">716-222-2609</a>
            </div>
          </div>
          <div className="mt-5">
            <p className="text-center text-base text-gray-600 dark:text-gray-300">
              Copyright © Alfredo Yap {new Date().getFullYear()}.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

// text-center text-lg dark:text-white
