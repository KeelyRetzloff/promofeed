//photo feed container component

import React from 'react'
import Post from './post'

import p1 from './assets/promotions/1.jpeg'
import p2 from './assets/promotions/2.jpeg'
import p3 from './assets/promotions/3.jpeg'
import p4 from './assets/promotions/4.jpeg'
import p5 from './assets/promotions/5.jpeg'
import p6 from './assets/promotions/6.jpeg'
import p7 from './assets/promotions/7.jpeg'
import p8 from './assets/promotions/8.jpeg'
import p9 from './assets/promotions/9.jpeg'
import p10 from './assets/promotions/10.jpeg'


export default function Feed() {
    //simulate data with array
    const posts = [
        {id:1, title: 'Avenyn Bar & Steakhouse', img: p1},
        {id:2, title: 'Pyramid Sports Bar', img: p2},
        {id:3, title: 'Stockholm Stadsmission', img: p3},
        {id:4, title: 'Twisted Rose', img: p4},
        {id:5, title: 'International Stockholm', img: p5},
        {id:6, title: 'Twisted Rose', img: p6},
        {id:7, title: 'Le Mans', img: p7},
        {id:8, title: 'The Liffey Crew', img: p8},
        {id:9, title: 'Special', img: p9},
        {id:10, title: 'Pitchers', img: p10}
      ]
    const content = posts.map((post) =><Post key={post.id} post={post}> </Post>)
    return <div className="content-container">{content}</div>

}

  


  