require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000
const githubdata={
  "login": "satyam1298",
  "id": 183854439,
  "node_id": "U_kgDOCvVlZw",
  "avatar_url": "https://avatars.githubusercontent.com/u/183854439?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/satyam1298",
  "html_url": "https://github.com/satyam1298",
  "followers_url": "https://api.github.com/users/satyam1298/followers",
  "following_url": "https://api.github.com/users/satyam1298/following{/other_user}",
  "gists_url": "https://api.github.com/users/satyam1298/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/satyam1298/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/satyam1298/subscriptions",
  "organizations_url": "https://api.github.com/users/satyam1298/orgs",
  "repos_url": "https://api.github.com/users/satyam1298/repos",
  "events_url": "https://api.github.com/users/satyam1298/events{/privacy}",
  "received_events_url": "https://api.github.com/users/satyam1298/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 5,
  "public_gists": 0,
  "followers": 1,
  "following": 1,
  "created_at": "2024-10-04T16:42:49Z",
  "updated_at": "2025-07-26T04:36:05Z"
}


app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
    res.send('satyam1729')
})

app.get('/login',(req,res)=>{
    res.send('<h1> please login at this website</h1>')
})
app.get('/github',(req,res)=>{
  res.json(githubdata)
})

app.get('/youtube',(req,res)=>{
    res.send("<h2>this is a youtube platform</h2>")
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

