import React from 'react'
import './NewsGündem.css'
const news_gundem = [
    {
        id: 0,
        author: 'hurriyet.com.tr',
        title: 'Gıdada fahiş fiyat şikayeti iletildi…',
        description: 'Son zamanlarda mutfak alışverisi için marketlere gidenler zamlı fiyatlarla karşılaşıyor. Ayçiçek yağından tereyağına, peynirden yumurtaya kadar birçok üründe dikkat çeken oranda fiyat artışının olduğu görünüyor.' ,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkbV6-ytp2aIrDcqD8SMjtkY6Imxh7dgaTUA&usqp=CAU',
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

function NewsGündem() {
    return (
        <div className="container-gundem">
            {news_gundem.map(item => {
                return (
                    <div className = "cardContent-Gundem" id={item.id}>
                        <img src = {item.imageUrl}  alt='ee' className = "cardImage-Gundem"/>
                        <p className = "cardText-GundemText">{item.title}</p>
                    </div>
                )
            })}
            
        </div>
    )
}

export default NewsGündem
