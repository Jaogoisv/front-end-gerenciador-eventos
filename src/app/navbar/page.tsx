import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex p-3 justify-end items-center bg-slate-200 shadw-2xl">
      <div className="items-center flex justify-center">
        <div className="p-1">
          <Link
            className="m-1 p-2 text-center bg-blue-500 text-white rounded-lg shadow-md"
            href="/login"
          >
            Ir para Login
          </Link>
          <Link
            className="m-1 p-2 text-center bg-blue-500 text-white rounded-lg shadow-md"
            href="/cadastro"
          >
            Ir para Cadastro
          </Link>
        </div>
      </div>
    </div>
  );
}
