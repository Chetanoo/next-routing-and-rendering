import NewsList from "@/components/news-list";
import {getNewsForYear} from "@/lib/news";

export default async function NewsPage({params}) {
    const {year} = await params;

    const news = getNewsForYear(year);

    return (
        <div>
            <h1>News Page</h1>
                <NewsList news={news}/>
        </div>
    )
}
