import { atom, useAtom } from "jotai";
import { useEffect } from "react";

const pictures = [
  "colombia1",
  "colombia2",
  "colombia3",
  "colombia4",
  "colombia5",
  "colombia6",
  "colombia7",
  "colombia8",
  "colombia9",
  "colombia10",
  "colombia11",
  "colombia12",
  "colombia13",
  "colombia14",
  "colombia15",
  "DSC02069",
];

export const pageAtom = atom(0);
export const pages = [
  {
    front: "colombia16",
    back: pictures[0],
  },
];
for (let i = 1; i < pictures.length - 1; i += 2) {
  pages.push({
    front: pictures[i % pictures.length],
    back: pictures[(i + 1) % pictures.length],
  });
}

pages.push({
  front: pictures[pictures.length - 1],
  back: "colombia16",
});

export const UI = () => {
  const [page, setPage] = useAtom(pageAtom);

  useEffect(() => {
    const audio = new Audio("/audios/page-flip-01a.mp3");
    audio.play();
  }, [page]);

  return (
    <>
      <main className=" pointer-events-none select-none z-10 fixed  inset-0  flex justify-between flex-col">
        <a
          className="pointer-events-auto mt-10 ml-10"
          href="https://codelatin-colombia.online/"
        >
          <img className="w-20" src="/images/colombia1.png" />
        </a>
        <div className="w-full overflow-auto pointer-events-auto flex justify-center">
          <div className="overflow-auto flex items-center gap-4 max-w-full p-10">
            {[...pages].map((_, index) => (
              <button
                key={index}
                className={`border-transparent hover:border-white transition-all duration-300  px-4 py-3 rounded-full  text-lg uppercase shrink-0 border ${
                  index === page
                    ? "bg-white/90 text-black"
                    : "bg-black/30 text-white"
                }`}
                onClick={() => setPage(index)}
              >
                {index === 0 ? "Cover" : `Page ${index}`}
              </button>
            ))}
            <button
              className={`border-transparent hover:border-white transition-all duration-300  px-4 py-3 rounded-full  text-lg uppercase shrink-0 border ${
                page === pages.length
                  ? "bg-white/90 text-black"
                  : "bg-black/30 text-white"
              }`}
              onClick={() => setPage(pages.length)}
            >
              Contraportada
            </button>
          </div>
        </div>
      </main>

      <div className="fixed inset-0 flex items-center -rotate-2 select-none">
        <div className="relative">
          <div className="bg-white/0  animate-horizontal-scroll flex items-center gap-8 w-max px-8">
            <h1 className="shrink-0 text-white text-10xl font-black ">
              Juan Codelatn 2024
            </h1>
            <h2 className="shrink-0 text-white text-8xl italic font-light">
              App Con Reactjs
            </h2>
            <h2 className="shrink-0 text-white text-12xl font-bold">
              Three.js
            </h2>
            <h2 className="shrink-0 text-transparent text-12xl font-bold italic outline-text">
              Colombia
            </h2>
            <h2 className="shrink-0 text-white text-9xl font-medium">
              Comunidad
            </h2>
            <h2 className="shrink-0 text-white text-9xl font-extralight italic">
              De Programadores
            </h2>
            <h2 className="shrink-0 text-white text-13xl font-bold">
              En
            </h2>
            <h2 className="shrink-0 text-transparent text-13xl font-bold outline-text italic">
             Latinoamerica
            </h2>
          </div>
          <div className="absolute top-0 left-0 bg-white/0 animate-horizontal-scroll-2 flex items-center gap-8 px-8 w-max">
            <h1 className="shrink-0 text-white text-10xl font-black ">
              juan Quintero
            </h1>
            <h2 className="shrink-0 text-white text-8xl italic font-light">
             Codelatin
            </h2>
            <h2 className="shrink-0 text-white text-12xl font-bold">
              Comunidad
            </h2>
            <h2 className="shrink-0 text-transparent text-12xl font-bold italic outline-text">
              De
            </h2>
            <h2 className="shrink-0 text-white text-9xl font-medium">
              Programadores
            </h2>
            <h2 className="shrink-0 text-white text-9xl font-extralight italic">
              EN
            </h2>
            <h2 className="shrink-0 text-white text-13xl font-bold">
              Latinoamerica
            </h2>
            <h2 className="shrink-0 text-transparent text-13xl font-bold outline-text italic">
              2024
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};