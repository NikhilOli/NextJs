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

export const mangaLinks: NavLinksProps[] = [
    {
        id: 1,
        title: " All Manga (89)",
        url: "/manga/1"
    },
    {
        id: 2,
        title: "Currently Reading (12)",
        url: "/manga/2"
    },
    {
        id: 3,
        title: "Completed (27)",
        url: "/manga/3"
    },
    {
        id: 4,
        title: "On-Hold (5)",
        url: "/manga/4"
    },
    {
        id: 5,
        title: "Dropped (1)",
        url: "/manga/5"
    },
    {
        id: 6,
        title: "Plan to Read (18)",
        url: "/manga/6"
    }
]