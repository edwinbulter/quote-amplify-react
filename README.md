# Quote web app written in ReactJS for AWS Amplify
The deployed web app can be visited at:
>https://master.d3bgu77svyk8ir.amplifyapp.com/

This web app uses the REST API which can be found at:
>https://github.com/edwinbulter/quote-lambda

## Screenshot
![quote-web-screenshot](public/screenshot.png)


Implemented features:
- New Quote Button:
    - Requests a new Random quote and sends the ids of all previously received quotes in the request to avoid receiving the same quote again
    - The button is disabled while the new quote is loading (and displays loading...)
- Like Button:
    - Sends a request to like the current quote
    - The button is disabled and displays liking... while the request is being sent
    - The button is disabled and displays Like when the user has already liked the quote
- Favourite Quotes Box:
    - When a user likes a quote, the quote gets liked in the database
    - By pressing the button in the header of the box, the favourite quotes are refreshed
- Walking through the quote history:
    - All quotes received can be watched again, or liked unless the user has already liked it
    - The history can be browsed with the next buttons:
        - Previous Button:
            - Shows the previous quote, when there is one
            - Is disabled if there is no previous quote
        - Next Button
            - Shows the next quote, when there is one
            - Is disabled if there is no next quote
        - First
            - jumps to the first received quote
        - Last
            - jumps to the last received quote






