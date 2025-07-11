import Link from "next/link";

export default function NewsList({news}) {
    return (<ul className="news-list">
        {news.map(n => <li key={n.id}>
            <Link href={`/news/${n.slug}`}>
                <img src={`/images/news/${n.image}`} alt={n.title} />
                <span>{n.title}</span>
            </Link>
        </li>)}
    </ul>)
}
