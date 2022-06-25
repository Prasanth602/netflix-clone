import React, { Component } from "react";
import Separator from "../../Separator/Separator";
import JumboItem from "../JumboItem/JumboItem";
import './JumboComponent.css';

const data =[
    {
        'title':'Enjoy your TV',
        'subheading' : 'Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.',
        'imageSrc':'images/home/tv.png'
    },
    {
        'title':'Download your shows to watch offline.',
        'subheading' : 'Save your favourites easily and always have something to watch.',
        'imageSrc':'images/home/mobile-0819.jpeg',
    },
    {
        'title':'Watch everywhere.',
        'subheading' : 'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.',
        'imageSrc':'images/home/device-pile-in.png' 
    },
    {
        'title':'Create profiles for children.',
        'subheading' : 'Send children on adventures with their favourite characters in a space made just for them—free with your membership.', 
        'imageSrc':'images/home/kidsValueProp.png'
    }
]

function JumboComponent(){
    return(
        <div className="jumbo-component">
            { data.map((item, index) =>(
                <div>
                    <JumboItem alignment= {index%2 === 0} title = { item.title } subheading={ item.subheading } imgSrc={item.imageSrc}/>
                    <Separator />
                </div>
                
            ))}
        </div>
    )
}
 export default JumboComponent;