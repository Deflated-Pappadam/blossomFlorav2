import Image from "next/image";
import { font_logo } from "./assets/fonts";
import NavBar from "./components/NavBar";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between  bg-background">
      <NavBar/>
     <div></div>
    </main>
  );
}
