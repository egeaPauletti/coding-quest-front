import { FaGithub, FaLinkedin, FaUserCircle } from "react-icons/fa";
import LogoCQ from "../../../components/LogoCQ";

export default function Developers() {
  return (
    <section id="developers" className="h-screen w-screen flex flex-col justify-center items-center px-20 my-30">
      <div><h2 className="w-full text-primary text-3xl font-semibold text-center">Nossos Desenvolvedores</h2></div>
      <div className="w-full h-max flex justify-center items-center">
        <div className="flex flex-col items-start gap-10 flex-2">
          <div className="w-max h-max flex flex-row items-center text-start gap-5 relative left-20">
            <div className="flex justify-center items-center bg-primary size-30 rounded-lg text-7xl text-white/60">
              <FaUserCircle />
            </div>
            <div className="w-max h-max flex flex-col gap-2.5">
              <h3 className="text-lg text-primary font-semibold">Desenvolvedor</h3>
              <figure className="flex text-xl text-primary gap-2.5">
                <FaGithub />
                <span className="text-sm text-white">github.com/desenvolvedor</span>
              </figure>
              <figure className="flex text-xl text-primary gap-2.5">
                <FaLinkedin />
                <span className="text-sm text-white">linkedin.com/desenvolvedor</span>
              </figure>
            </div>
          </div>
          <div className="w-max h-max flex flex-rowitems-center text-start gap-5">
            <div className="flex justify-center items-center bg-primary size-30 rounded-lg text-7xl text-white/60">
              <FaUserCircle />
            </div>
            <div className="w-max h-max flex flex-col gap-2.5">
              <h3 className="text-lg text-primary font-semibold">Desenvolvedor</h3>
              <figure className="flex text-xl text-primary gap-2.5">
                <FaGithub />
                <span className="text-sm text-white">github.com/desenvolvedor</span>
              </figure>
              <figure className="flex text-xl text-primary gap-2.5">
                <FaLinkedin />
                <span className="text-sm text-white">linkedin.com/desenvolvedor</span>
              </figure>
            </div>
          </div>
          <div className="w-max h-max flex flex-row items-center text-start gap-5 relative left-20">
            <div className="flex justify-center items-center bg-primary size-30 rounded-lg text-7xl text-white/60">
              <FaUserCircle />
            </div>
            <div className="w-max h-max flex flex-col gap-2.5">
              <h3 className="text-lg text-primary font-semibold">Desenvolvedor</h3>
              <figure className="flex text-xl text-primary gap-2.5">
                <FaGithub />
                <span className="text-sm text-white">github.com/desenvolvedor</span>
              </figure>
              <figure className="flex text-xl text-primary gap-2.5">
                <FaLinkedin />
                <span className="text-sm text-white">linkedin.com/desenvolvedor</span>
              </figure>
            </div>
          </div>
        </div>

        <figure className="flex justify-center flex-1"><LogoCQ size={250} /></figure>

        <div className="flex flex-col items-end gap-10 flex-2">
          <div className="w-max h-max flex flex-row-reverse items-center text-end gap-5 relative -left-20">
            <div className="flex justify-center items-center bg-primary size-30 rounded-lg text-7xl text-white/60">
              <FaUserCircle />
            </div>
            <div className="w-max h-max flex flex-col gap-2.5">
              <h3 className="text-lg text-primary font-semibold">Desenvolvedor</h3>
              <figure className="flex text-xl flex-row-reverse text-primary gap-2.5">
                <FaGithub />
                <span className="text-sm text-white">github.com/desenvolvedor</span>
              </figure>
              <figure className="flex text-xl flex-row-reverse text-primary gap-2.5">
                <FaLinkedin />
                <span className="text-sm text-white">linkedin.com/desenvolvedor</span>
              </figure>
            </div>
          </div>
          <div className="w-max h-max flex flex-row-reverse items-center text-end gap-5">
            <div className="flex justify-center items-center bg-primary size-30 rounded-lg text-7xl text-white/60">
              <FaUserCircle />
            </div>
            <div className="w-max h-max flex flex-col gap-2.5">
              <h3 className="text-lg text-primary font-semibold">Desenvolvedor</h3>
              <figure className="flex flex-row-reverse text-xl text-primary gap-2.5">
                <FaGithub />
                <span className="text-sm text-white">github.com/desenvolvedor</span>
              </figure>
              <figure className="flex flex-row-reverse text-xl text-primary gap-2.5">
                <FaLinkedin />
                <span className="text-sm text-white">linkedin.com/desenvolvedor</span>
              </figure>
            </div>
          </div>
          <div className="w-max h-max flex flex-row-reverse items-center text-end gap-5 relative -left-20">
            <div className="flex justify-center items-center bg-primary size-30 rounded-lg text-7xl text-white/60">
              <FaUserCircle />
            </div>
            <div className="w-max h-max flex flex-col gap-2.5">
              <h3 className="text-lg text-primary font-semibold">Desenvolvedor</h3>
              <figure className="flex text-xl flex-row-reverse text-primary gap-2.5">
                <FaGithub />
                <span className="text-sm text-white">github.com/desenvolvedor</span>
              </figure>
              <figure className="flex text-xl flex-row-reverse text-primary gap-2.5">
                <FaLinkedin />
                <span className="text-sm text-white">linkedin.com/desenvolvedor</span>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}