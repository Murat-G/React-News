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
        author: 'Habertürk',
        title: "KORSAN BASKINI! Son dakika! Türk gemisi Nijerya'da...",
        description:
            'Son dakika haberine göre, Batı Afrika ülkesi Gine açıklarında M/V Mozart isimli bir Türk gemisi, silahlı korsanlar tarafından rehin alındı. İlk belirlemelere göre, mürettebattan 1 kişi öldürüldü, 15 kişi kaçırıldı.Türk gemisine korsan baskını: 1 ölü! Nijery…',
        imageUrl:
            'https://im.haberturk.com/2021/01/23/ver1611483304/2948333_810x458.jpg',
    },
    {
        id: 2,
        author: 'Sabah',
        title: 'Koronavirüsü atlatanlar tek tek incelendi! Bu etkiler...',
        description:
            "Kişilerin, hastalığı atlattıktan sonra da solunum yetmezliğinin yanı sıra eklem ağrısı, halsizlik, yorgunluk, uyku bozuklukları, dalgınlık ve unutkanlık gibi nörolojik rahatsızlıklarının devam ettiği ortaya çıktı. Dr. Yaşar Bildirici, koronavirüs hastalığını",
        imageUrl:
            'https://iasbh.tmgrup.com.tr/f64c4f/960/505/0/0/1138/600?u=https://isbh.tmgrup.com.tr/sbh/2021/01/24/son-dakika-koronavirusu-atlatanlar-tek-tek-incelendi-bu-etkiler-kaliyor-1611471856653.jpg',
    },
    {
        id: 3,
        author: 'Ntv',
        title: 'Restoran ve kafelerin kademeli açılmasında 2 bin hedefi',
        description:
            'Cumhurbaşkanı Erdoğan, kafe ve restoranların ‘Batıyoruz’ isyanının kabine toplantısında ele alınacağını açıklamıştı. Bilim Kurulu üyeleri ve uzmanlar, restoranların da açılabileceği kademeli normalleşmenin şartlarını yorumladı.",',
        imageUrl: 'https://cdn1.ntv.com.tr/gorsel/yfkUW7kPvUab0Sxbh7D2Vw.jpg?width=1080&mode=crop&scale=both',
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
