import Image from "next/image";

export default function Inicio() {
  return (
    <Image
      src={require("./inicio.svg")}
      width={800}
      height={800}
      alt="Picture of the author"
    />
  );
}
