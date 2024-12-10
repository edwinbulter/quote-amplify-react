import './FavouritesComponent.css'
import {useEffect, useState} from "react";
import quoteApi from "../api/quoteApi";

function FavouritesComponent() {

    const [quotes, setQuotes] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadFavouriteQuotes();
    }, []);

    async function loadFavouriteQuotes() {
        try {
            setLoading(true);
            const quotes = await quoteApi.getLikedQuotes();
            setQuotes(quotes);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="favouritesBox">
            <button className="favouritesButton" disabled={loading} onClick={loadFavouriteQuotes}>
                {loading ? "Loading Favourite Quotes..." : "Favourite Quotes"}
            </button>

            <div className="messageBox">
                {quotes.map((quote, index) => (
                    <div className={index % 2 === 0 ? "quoteEven" : "quoteOdd"} key={index}>{quote.quoteText} - {quote.author}</div>
                ))}
            </div>
        </div>
    );
}

export default FavouritesComponent;