const express = require('express')
const app = express()
const port =process.env.PORT|| 3000
app.use(express.static('my resume'))
app.get('/', (req, res) => res.sendFile(--dirname +'/index.html'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))