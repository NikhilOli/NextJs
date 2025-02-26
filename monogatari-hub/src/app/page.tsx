import Sidebar from "@/components/Sidebar";
import Manga from "./(pages)/manga/Manga";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <Sidebar />
      <div className="md:overflow-y-scroll bg-gray-100 flex-1 scroll-smooth">
      <Manga /> 
      </div>
    </div>
  );
}
