const express = require('express')
const app = express()

app.get('', (req, res) =>{
    res.send('Today\'s topic will be classes')
})

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log('server is runing on port' + PORT + '🎉')
})
