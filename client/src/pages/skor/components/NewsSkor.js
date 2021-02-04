import React from 'react';
import './NewsSkor.css';

const news_skor = [
    {
        id: 0,
        author: 'hurriyet.com.tr',
        title: 'Trabzonspor - Denizlispor (CANLI)',
        description: 'Son 6 maçta 16 puan toplayan, Beşiktaşı deplasmanda yıkarak lig liderini değiştiren Trabzonspor, Süper Ligin 23. haftasında son sırada yer alan Denizlisporu konuk ediyor. Trabzonspor çıkışını sürdürmenin, Denizlispor deplasmanda sürpriz yapmanın peşinde. Trab…' ,
        imageUrl: 'https://img.fanatik.com.tr/img/75/0x0/601b0defae298b5d7fdb097c.jpg',
    },
    
    {
        id: 1,
        author: 'Habertürk',
        title: "Göztepe 2-2 Yeni Malatyaspor",
        description: "Süper Lig'in 23. haftasında Göztepe ile Yeni Malatyaspor kozlarını paylaştı. Gürsel Aksel Stadyumu'nda oynanan mücadele 2-2 eşitlikle sona erdi ve kazanan çıkmadı.",
        imageUrl: 'https://i4.hurimg.com/i/hurriyet/75/0x0/601c0a7ec03c0e28246e23b8.jpg',
    },
    {
        id: 2,
        author: 'Sabah',
        title: 'Son dakika: Mustafa Cengiz: Ben olsam..',
        description:
            "Son dakika… Galatasaray Başkanı Mustafa Cengiz, gündeme dair değerlendirmelerde bulundu. Fenerbahçe'nin transferlerine de değinen Cengiz, Mesut Özil'in maaşıyla ilgili çarpıcı ifadeler kullandı. Alman yıldızın Arsenal'den kazandığı 18 milyon euro'luk maaşı bı…",
        imageUrl:
            'https://iasbh.tmgrup.com.tr/bd79eb/960/505/0/0/1138/600?u=https://isbh.tmgrup.com.tr/sbh/2021/02/04/1612445280374.jpg',
    },
    {
        id: 3,
        author: 'Ntv',
        title: 'JANUARY GOALS OF THE MONTH | 20/21 ',
        description:'Goal of the Month is here! Which is your favourite..?Compare this to some other great City goals by going to ',
        imageUrl: 'https://i.ytimg.com/vi/5yWxWT5ChXI/maxresdefault.jpg',
    },
];

function NewsGündem() {
    return (
        <div className="container-Skor">
            {news_skor.map(item => {
                return (
                    <div className = "cardContent-Skor" id={item.id}>
                        <img src = {item.imageUrl}  alt='ee' className = "cardImage-Skor"/>
                        <p className = "cardText-SkorText">{item.title}</p>
                    </div>
                )
            })}
            
        </div>
    )
}

export default NewsGündem;