import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex p-3 items-center justify-between bg-slate-200 shadw-2xl">
      <h2 className="flex items-start font-bold">Gerenciador de eventos</h2>
      <div className="flex items-end">
        <div className="p-1 justify-end">
          <Link
            className="m-1 p-2 text-center bg-blue-500 text-white rounded-lg shadow-md"
            href="/login"
          >
            Login
          </Link>
          <Link
            className="m-1 p-2 text-center bg-blue-500 text-white rounded-lg shadow-md"
            href="/cadastro"
          >
            Cadastro
          </Link>
        </div>
      </div>
    </div>
  );
}
