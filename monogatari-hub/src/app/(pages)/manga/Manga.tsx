import { mangaLinks, NavLinksProps } from "@/app/utils/navlinks"
import Btn from "@/components/Button"

const Manga = () => {
    return (
        <div className="max-w-full h-screen">
            <div className="flex flex-wrap gap-4 mb-6 p-6">
                {
                    mangaLinks.map((link: NavLinksProps, index: number) => (
                        <Btn className={index === 0 ? "bg-[#e11d48] text-white" : "bg-white text-black font-normal"} path={link.url} text={link.title} key={link.id} />
                    ))
                }
            </div>
        </div>
    )
}

export default Manga