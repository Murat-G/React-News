import React from 'react';
import './FourImage.css';


function FourImage() {
    const news_data = [
        {
            id: 0,
            author: 'Omkar Godbole',
            title: 'Bulls Exit BitMEX Bitcoin Futures Market',
            description:
                'Since the announcement from U.S. regulators, BitMEX has witnessed an outflow of more than 40,000 bitcoins, currently worth more than $422 million.',
            imageUrl:
                'https://static.coindesk.com/wp-content/uploads/2020/10/BitMEX-1180x628.png',
        },
        {
            id: 1,
            author: 'Benjamin Pirus',
            title: 'Coinbase customers can now dodge a bank',
            description:
                'New update from Coinbase quickens the transmutation of crypto into fiat. Coinbase has unveiled a faster way for its customers to move digital currencies out of crypto and into their bank accounts.',
            imageUrl:
                'https://static.coindesk.com/wp-content/uploads/2020/10/GettyImages-alex-wong-1-1024x628.jpg',
        },
        {
            id: 2,
            author: 'Malwarebytes Labs',
            title: 'VideoBytes: Ransomware gets wasted!',
            description:
                "On today's VideoBytes, we look at how ransomware is on the rise, attacking corporations with malware that not only encrypts files, but also steals it.",
            imageUrl:
                'https://blog.malwarebytes.com/wp-content/uploads/2020/09/shutterstock_640824457-600x410.jpg',
        },
        {
            id: 3,
            author: 'Daniel Sparks',
            title: 'Why Tesla Stock Fell Sharply Friday Morning - Motley Fool',
            description:
                'Shares are down despite Tesla reporting record third-quarter deliveries. Shares of electric-car maker Tesla(NASDAQ:TSLA) fell Friday morning, declining 5% a few minutes into market open.',
            imageUrl: 'https://g.foolcdn.com/editorial/images/593799/stock-down.jpg',
        },
       
    ];

    return (
        <div className = "container-FourImage">
            {news_data.map(item => {
                return (
                    <div className = "cardContent-FourImage" id={item.id}>
                        <img src = {item.imageUrl}  alt='ee' className = "cardImage-FourImage"/>
                        <p className = "cardText-FourText">{item.title}</p>
                    </div>
                )
            })}
        </div>
    )
}

export  {FourImage}
