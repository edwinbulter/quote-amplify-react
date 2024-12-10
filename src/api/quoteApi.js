import {BASE_URL} from "../constants/constants";


async function getQuote() {
    const response = await fetch(`${BASE_URL}/quote`, {
        method: "GET",
    });
    return await response.json();
}

async function getUniqueQuote(receivedQuotes) {
    const quoteIds = receivedQuotes.map(quote => quote.id);
    const response = await fetch(`${BASE_URL}/quote`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(quoteIds)
    });
    return await response.json();
}

async function likeQuote(quote) {
    const response = await fetch(`${BASE_URL}/quote/${quote.id}/like`, {
        method: "PATCH",
    });
    return await response.json();
}

async function getLikedQuotes() {
    const response = await fetch(`${BASE_URL}/quote/liked`, {
        method: "GET",
    });
    return await response.json();
}


// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getQuote, getUniqueQuote, likeQuote, getLikedQuotes
};