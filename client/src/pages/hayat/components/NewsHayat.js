import React from 'react'
import './NewsHayat.css'


const news_hayat = [
    {
        id: 0,
        author: 'hurriyet.com.tr',
        title: "İstanbul'da kısıtlamaya saatler kala trafik kilit",
        description: "Haftasonları uygulanan sokağa çıkma kısıtlaması bu akşam saat 21:00'de başlayacak. Kısıtlamaya saatler kala İstanbul'da trafik yoğunluğu yaşanıyor. Öte yandan, kısıtlama öncesi güneşli havayı fırsat bilen vatandaşlar Kadıköy Moda Sahili'ne akın etti." ,
        imageUrl: 'https://img3.aksam.com.tr/imgsdisk/2020/12/11/son-dakika-istanbulda-tra-757.jpg',
    },
    
    {
        id: 1,
        author: 'Habertürk',
        title: "Son dakika... AB'den aşı özeleştirisi: Söyleyemedik",
        description:'Son dakika haberler... AB Komisyonu Başkanı von der Leyen, aşılamaların hızlı ilerlemesini engelleyecek zorlukların devam edebileceğini söyledi.',
        imageUrl: 'https://im.haberturk.com/2021/02/05/ver1612531717/2962934_1200x627.jpg',
    },
    {
        id: 2,
        author: 'Sabah',
        title: 'iPhone 12 inceleme! - 2 ay içerisinde neler hissettim?',
        description:"Aralık ayında ülkemizde satışa sunulan ve kamera özellikleri ile dikkat çeken iPhone 12 ailesi, bir çok kullanıcı tarafından beğeniliyor. Merakla beklenen iP",
        imageUrl: 'https://ceres.shiftdelete.net/500x300/original/2020/10/WhatsApp-Image-2020-10-26-at-14.23.18-2.jpeg',
    },
    {
        id: 3,
        author: 'Ntv',
        title: 'Son dakika altın fiyatları düşüşte!',
        description:"Piyasalarda haftanın son işlem gününe girilirken altın fiyatları son dakika haberleri yakından takip ediliyor. Küçük ve büyük yatırımcılar canlı ve güncel rakamlar bilgisini öğrenmeden kuyumcuların yolunu tutmuyor. Tam bu noktada Kapalıçarşı’dan gelen canlı v…",
        imageUrl: 'https://iasbh.tmgrup.com.tr/295d63/650/344/0/0/1192/627?u=https://isbh.tmgrup.com.tr/sbh/2021/02/05/kapalicarsida-altin-fiyatlari-son-dakika-5-subat-bugun-22-ayar-bilezik-yarim-cumhuriyet-tam-gram-ve-ceyrek-altin-ne-kadar-oldu-1612539629113.jpg',
    },
    {
        id: 4,
        author: 'Sabah',
        title: 'Aşı skandalına soruşturma başlatıldı',
        description:"Konya'da bulunan Taşkent Devlet Hastanesi'nde 35 aşı kayboldu. 35 aşının 2 sinin korona aşısı olduğu belirtildi. Olay hakkında Sağlık Müdürlüğü soruşturma başlattı.",
        imageUrl: 'https://www.cumhuriyet.com.tr/Archive/2021/2/5/1811579/kapak_152112.jpg',
    }
];

function NewsHayat() {
    return (
        <div className="container-hayat">
            {news_hayat.map(item => {
                return (
                    <div className = "cardContent-Hayat" id={item.id}>
                        <img src = {item.imageUrl}  alt='ee' className = "cardImage-Hayat"/>
                        <p className = "cardText-HayatText">{item.title}</p>
                    </div>
                )
            })}
            
        </div>
    )
}

export default NewsHayat;
