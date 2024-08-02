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
    ];

    const jsonData = JSON.stringify(stereogramsItems);

    fs.writeFileSync("stereogramItems.json", jsonData);

}

toJson();