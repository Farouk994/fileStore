// tells clerk how to phone home when you get token and auth against clerk 
export default {
    providers: [
        {
            domain: "https://handy-titmouse-62.clerk.accounts.dev",
            applicationID: "convex"
        }
    ]
}