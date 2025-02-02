const fs = require('fs');

const toJson = async () => {
    stereogramsItems = [
        {
            id: 1,
            poster: 'https://newtonexcelbach.com/wp-content/uploads/2022/09/stereogram-world.png',
            src: 'https://newtonexcelbach.com/wp-content/uploads/2022/09/stereogram-world.png',
            iframe: false,
        },
        {
            id: 2,
            poster: 'https://newtonexcelbach.com/wp-content/uploads/2022/09/stereogram-neb.png',
            src: 'https://newtonexcelbach.com/wp-content/uploads/2022/09/stereogram-neb.png',
            iframe: false,
        },
        {
            id: 3,
            poster: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Sphere_Cube_Triangle_3D_Stereogram_Illusion.png/400px-Sphere_Cube_Triangle_3D_Stereogram_Illusion.png',
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Sphere_Cube_Triangle_3D_Stereogram_Illusion.png/400px-Sphere_Cube_Triangle_3D_Stereogram_Illusion.png',
            iframe: false,
        },
        {
            id: 4,
            poster: 'https://i.imgur.com/JQYukwb.gif',
            src: 'https://i.imgur.com/JQYukwb.gif',
            iframe: false,
        },
        {
            id: 5,
            poster: 'https://i.pinimg.com/736x/ee/93/ef/ee93efaa2278fda73a03b8ce6fbb441e.jpg',
            src: 'https://i.pinimg.com/736x/ee/93/ef/ee93efaa2278fda73a03b8ce6fbb441e.jpg',
            iframe: false,
        },
        {
            id: 6,
            poster: 'https://i.makeagif.com/media/8-02-2024/ZbG_8t.gif',
            src: 'https://i.makeagif.com/media/8-02-2024/ZbG_8t.gif',
            iframe: false,
        },
        {
            id: 7,
            poster: 'https://i.ytimg.com/vi/g0i3nrV2e44/hqdefault.jpg',
            src: 'https://www.youtube.com/embed/g0i3nrV2e44?si=P6S39btDnnl6zcQu',
            iframe: true,
        },
        {
            id: 8,
            poster: 'https://i1.wp.com/puzzlewocky.com/wp-content/uploads/2015/10/animalwallpaperstereogram.jpg',
            src: 'https://i1.wp.com/puzzlewocky.com/wp-content/uploads/2015/10/animalwallpaperstereogram.jpg',
            iframe: false,
        },
        {
            id: 9,
            poster: 'https://i.ytimg.com/vi/2AKtp3XHn38/sddefault.jpg?sqp=-oaymwEmCIAFEOAD8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGFMgXShlMA8=&rs=AOn4CLBFpe26j_6k-t_vQNmPoeoF8GwDig&quot',
            src: 'https://www.youtube.com/embed/2AKtp3XHn38?si=U5zdXl743IdUbSjo',
            iframe: true,
        },
        {
            id: 10,
            poster: 'https://i.etsystatic.com/46549401/r/il/30fa1b/5259247854/il_570xN.5259247854_seno.jpg',
            src: 'https://i.etsystatic.com/46549401/r/il/30fa1b/5259247854/il_570xN.5259247854_seno.jpg',
            iframe: false,
        },
        {
            id: 11,
            poster: 'https://eyefitness.fit/wp-content/uploads/2024/03/image-2.png',
            src: 'https://eyefitness.fit/wp-content/uploads/2024/03/image-2.png',
            iframe: false,
        },
        {
            id: 12,
            poster: 'https://i.ytimg.com/vi/hIcLMrK-sHk/hqdefault.jpg',
            src: 'https://www.youtube.com/embed/hIcLMrK-sHk?si=PuOWbcNdCarq_1Dx',
            iframe: true,
        },
        {
            id: 13,
            poster: 'https://i.ytimg.com/an_webp/sfTXVJOTIrk/mqdefault_6s.webp?du=3000&sqp=CILovrUG&rs=AOn4CLCK2SE6nSB-Wt-DLwGtkfcPcAKBmg',
            src: 'https://www.youtube.com/embed/sfTXVJOTIrk?si=hVp07QspLsJ12MTg',
            iframe: true,
        },
        {
            id: 14,
            poster: 'https://i.ytimg.com/an_webp/FCSr5lxwtR0/mqdefault_6s.webp?du=3000&sqp=CL7ZvrUG&rs=AOn4CLDRcPCoa5Osc-0W4Q48DaJ3Zz6WOA',
            src: 'https://www.youtube.com/embed/FCSr5lxwtR0?si=rSvDn-gpE9XTXKKJ',
            iframe: true,
        },
        {
            id: 15,
            poster: 'https://i.ytimg.com/an_webp/PpK5ejLFEIE/mqdefault_6s.webp?du=3000&sqp=CIjtvrUG&rs=AOn4CLA9AMuDWqP-66vnIqf033tnTCytkQ',
            src: 'https://www.youtube.com/embed/PpK5ejLFEIE?si=qb9NBzLJq4g602l4',
            iframe: true,
        },
        {
            id: 16,
            poster: 'https://i.ytimg.com/an_webp/oVunVtQSgFk/mqdefault_6s.webp?du=3000&sqp=CI7xvrUG&rs=AOn4CLAMeRlcPeqjSBqS8PjSghMKeXXcog',
            src: 'https://www.youtube.com/embed/oVunVtQSgFk?si=r4d6uiq7oDwMTjX6',
            iframe: true,
        },
        {
            id: 17,
            poster: 'https://i.imgur.com/72H3t8c.jpeg',
            src: 'https://i.imgur.com/72H3t8c.jpeg',
            iframe: false,
        },
        {
            id: 18,
            poster: 'https://i.imgur.com/gBSvnPB.jpeg',
            src: 'https://i.imgur.com/gBSvnPB.jpeg',
            iframe: false,
        },
        {
            id: 19,
            poster: 'https://i.imgur.com/H6kVGjC.jpeg',
            src: 'https://i.imgur.com/H6kVGjC.jpeg',
            iframe: false,
        },
        {
            id: 20,
            poster: 'https://i.imgur.com/6r1Ii82.jpeg',
            src: 'https://i.imgur.com/6r1Ii82.jpeg',
            iframe: false,
        },
        {
            id: 21,
            poster: 'https://i.imgur.com/J1hRIvS.jpeg',
            src: 'https://i.imgur.com/J1hRIvS.jpeg',
            iframe: false,
        },
    ];

    const jsonData = JSON.stringify(stereogramsItems);

    fs.writeFileSync("stereogramItems.json", jsonData);

}

toJson();