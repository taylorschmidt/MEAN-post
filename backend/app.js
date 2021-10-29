const express = require('express')

const app = express();

app.use('/api/posts',(req, res, next)=>{
    const posts = [
        {id: '323532', title: 'Title', content: 'Content'},
        {id: '543453', title: 'Title2', content: 'Content2'}
    ]
    res.status(200).json({
        message: 'Posts fetched successfully.',
        posts: posts
    });
});

module.exports = app;