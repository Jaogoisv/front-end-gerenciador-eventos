import Inicio from "@/image/page";
import Navbar from "./navbar/page";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center h-screen bg-white">
        <div className=" p-3 m-2 rounded-xl bg-white">
          <Inicio />
        </div>
        <div className=" flex flex-col justify-center w-96">
          <div className=" p-3 m-2 rounded-xl shadow-xl bg-white">
            <h1 className="p-2 text-xl text-center">
              Bem-vindo ao Organizador de Eventos!
            </h1>
          </div>

          <div className=" p-3 m-2 rounded-xl shadow-xl bg-white">
            <h1 className="p-2 text-xl text-center">
              Um organizador de eventos transforma ideias e sonhos em memórias
              inesquecíveis, garantindo que todos os detalhes sejam impecáveis.
              Com eles, você aproveita o momento sem preocupações. Crie momentos
              mágicos e únicos com a ajuda de um especialista.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
