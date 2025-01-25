import Image from "next/image";
import inicio from "./inicio.svg";

export default function Inicio() {
  return (
    <Image src={inicio} width={600} height={600} alt="Picture of the author" />
  );
}
