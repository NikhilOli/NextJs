export interface NavLinksProps{
    id: number;
    title: string;
    url: string;

}
export const links: NavLinksProps[] = [
    {
        id: 1,
        title: "Dashboard",
        url: "/dashboard"
    },
    {
        id: 2,
        title: "Anime",
        url: "/anime"
    },
    {
        id: 3,
        title: "Manga",
        url: "/manga"
    },
    {
        id: 4,
        title: "News",
        url: "/news"
    },
    {
        id: 5,
        title: "Database",
        url: "/database"
    },
]