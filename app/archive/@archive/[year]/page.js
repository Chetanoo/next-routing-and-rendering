import {getAvailableNewsYears} from "@/lib/news";
import NewsList from "@/components/news-list";
import {DUMMY_NEWS} from "@/dummy-news";

export default function FilteredNewsPage(props) {
    const links = getAvailableNewsYears()

    return <div id="archive-header">
        <NewsList news={DUMMY_NEWS}/>
    </div>
}
