import React from 'react';
import './NewsDunya.css';
const news_dunya = [
    {
        id: 0,
        author: 'Adam Shaw',
        title: 'Biden to end support for Saudi-led offensive operations in Yemen',
        description: 'President Biden will end U.S. support for Saudi-led offensive operations in Yemen, his national security adviser announced Thursday -- marking a withdrawal from support for a Saudi-led coalition fighting Houthi rebels in the war-torn country.' ,
        imageUrl: 'https://cf-images.us-east-1.prod.boltdns.net/v1/static/694940094001/b8444866-a0eb-466e-b8eb-bd054190dcaa/5296ded8-624b-47f2-801c-3dc4b0d47ffd/1280x720/match/image.jpg',
    },
    
    {
        id: 1,
        author: 'Kevin Breuninger',
        title: "House will vote to strip Rep. Marjorie Taylor Greene of committee assignments",
        description: 'Democrats rejected an attempt by House Minority Leader Kevin McCarthy, R-Calif., to reach a compromise on Greene.',
        imageUrl: 'https://image.cnbcfm.com/api/v1/image/106835519-1612459331697-gettyimages-1230970618-AFP_9296Y9.jpeg?v=1612459367',
    },
    {
        id: 2,
        author: 'Katie Hunt, CNN',
        title: 'One change took this fish from fins to limbs',
        description: "Life on Earth began in the water. When animals moved onto the ground, they switched fins for limbs. But how exactly did that happen? US scientists say they may have stumbled on a possible answer.",
        imageUrl:'https://cdn.cnn.com/cnnnext/dam/assets/210204151454-01-zebrafish-split-super-tease.jpg',
    },
    {
        id: 3,
        author: 'Ciara Farmer',
        title: 'Rita Ora DELETES ALL her Instagram posts during Australian quarantine.',
        description:'Rita Ora has deleted all posts from her Instagram feed.',
        imageUrl: 'https://i.dailymail.co.uk/1s/2021/02/04/14/38880854-0-image-a-62_1612448391595.jpg',
    },
];

function NewsDunya() {
    return (
        <div className="container-dunya">

            {news_dunya.map(item => {
                return (
                    <div className = "cardContent-Dunya" key={item.id}>
                        <img src = {item.imageUrl}  alt='ee' className = "cardImage-Dunya"/>
                        <p className = "cardText-DunyaText">{item.title}</p>
                    </div>
                )
            })}
            
        </div>
    )
}

export default NewsDunya;