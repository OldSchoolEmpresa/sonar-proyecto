window.changeImage = function(imgElement) {
    const mainImage = document.getElementById('mainImage');
    mainImage.src = imgElement.src;
};

document.addEventListener('DOMContentLoaded', () => {
    const colorBtns = document.querySelectorAll('.color-option');
    const mainImage = document.getElementById('mainImage');
    const addBtn = document.querySelector('.btn-add-to-cart');

    const mapping = [
        {
            keyword: 'rojo',
            rgb: 'rgb(243, 0, 0)',
            image: 'asset/img/Buzo Jordan rojo.jpeg',
            name: 'rojo'
        },
        {
            keyword: 'blanco',
            rgb: 'rgb(255, 255, 255)',
            image: 'asset/img/Buzo Jordan blanco.jpeg',
            name: 'blanco'
        },
        {
            keyword: 'negro',
            rgb: 'rgb(0, 0, 0)',
            image: 'asset/img/Buzo Jordan negro.jpeg',
            name: 'negro'
        },
        {
            keyword: 'azul',
            rgb: 'rgb(0, 47, 255)',
            image: 'asset/img/jordan negro azul.jpg',
            name: 'azul'
        }
    ];

    colorBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const bg = window.getComputedStyle(btn).backgroundColor.trim();
            const item = mapping.find(m => m.rgb === bg);
            if (item) {
                mainImage.src = item.image;
                addBtn.dataset.image = item.image;
                addBtn.dataset.name = "Buzo Jordan";
                addBtn.dataset.price = "200000";
                addBtn.dataset.color = item.name;

                // Activar visualmente el botón
                colorBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            }
        });
    });
});
