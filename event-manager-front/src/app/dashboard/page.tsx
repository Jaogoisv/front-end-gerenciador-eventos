import Navbar from "../navbar/page";

export default function dasboard() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col  justify-center items-center h-screen bg-gray-100">
        <div className=" p-9 rounded-xl shadow-lg bg-white"></div>
      </div>
    </div>
  );
}
