import Link from "next/link";
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
        <div className=" flex justify-center">
          <div className=" p-3 m-2 rounded-xl shadow-xl bg-white">
            <h1 className="p-2 text-xl">
              Bem-vindo ao Organizador de Eventos!
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
