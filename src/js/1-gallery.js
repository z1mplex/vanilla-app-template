import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const images = [
    {
        preview: 'https://pixabay.com/get/ged311213db21a30a64deef5f78e70f59c671c2d71d35a7cf8732735f9bcc7cc169f52d436c2184532169dc6a31d1485c_640.jpg',
        original: 'https://pixabay.com/get/g9510f633f0dd2711c0b4153d1a8d5b4bc1af0026cf83fc6cea67621ddea349d96871d7a61dfd86e40f40b2e60447c2ab3d7a0c600b00cab3f5625801524edeb1_1920.jpg',
        description: 'Lake',
    },
    {
        preview: 'https://pixabay.com/get/gf021c5bf3b9e4052d4d165c2d533dc98d26b19afa4ac80fe5ed86f3924e401f23b27a57cce9fbe22bcc729fbc25f537d_640.jpg',
        original: 'https://pixabay.com/get/g8491faae94715d858a3d09df0eb488bda5ed81b16bbb9f010220584cfed615c5f805b38f53889279cfedf67a9ec934e1a15333839afafd8a3403a9fc7d318a49_1920.jpg',
        description: 'Beautiful snow',
    },
    {
        preview: 'https://pixabay.com/get/g3fb4ba474e0c719d828d58e31f52a1bf2074b948986ccf7fd58352f7306578a50f7fc0326ada48b3edff6465d4b4abe4_640.jpg',
        original: 'https://pixabay.com/get/gddbce59a70790d0c736515fc25d32747eead374acdf33a6346cf963036129371b81b8ad063ebd3857051796802d52ce0bf1554076f092c557d6d575d067c74f0_1920.jpg',
        description: 'Beautiful mountains',
    },
    {
        preview: 'https://pixabay.com/get/g906948f6924d52075e88f1900c38a1cd7bc452ac481ca8bbac08b054d97c37092ce1c9a266936e2a2495a7fe741aefe1_640.jpg',
        original: 'https://pixabay.com/get/g88275a39eebe6c800a395d0d4cc8173035b984cc823356090ec3bc22f380d5e2d6b18c943a2590ce2cc472def81ba9f378243a7f9ab6b6de76708bc4152f06dd_1920.jpg',
        description: 'Desert',
    },
    {
        preview: 'https://pixabay.com/get/g8acf1c3faaf3b1231df6f35b4d301b2386bd8431eba8b2c2d973f5fc3404fae29669171ef4e0c555bcc804b4ff0af41a_640.jpg',
        original: 'https://pixabay.com/get/g7943e5326e5fb373d334dbccd6ce12715f24e2e7b1261010fa4ac22f232d81df4feee2a6c187021939de0d533db2b1db2386580ab9a8e80fa7be8a2f55da0605_1920.jpg',
        description: 'Geese',
    },
    {
        preview: 'https://pixabay.com/get/g1bc6079b400f619c8c65ca29d26f79c1f33886b116b2626d46f7415dcb64fa53e90e71bd217cdc3fb80e36a8d892f38f_640.jpg',
        original: 'https://pixabay.com/get/gb5daf855cc7cf6256996d85327d56a9352702b36926139473aeca2d0a41898c5f05cce3375ed9310fa291a7a0f99ac61f605cf2065d518c5adba5c5d34ee35af_1920.jpg',
        description: 'City, Structure, Moon',
    },
    {
        preview: 'https://pixabay.com/get/g09496a5e23a2b0ff09dbd81486d8eb28b5f4e003560522c6ea55c5cf63c9912049446fa1cc1d4e8e259215cbe7e53a68_640.jpg',
        original: 'https://pixabay.com/get/g8ac7110bff21fc60904f0f7bfd8a61b381c0829e0d76ca6df7a9618be4aa057926eba69a3ad8500fb3de696d1ca837feacb5bd14c2473e55d61d54cdce5a488d_1920.jpg',
        description: 'Lantern, Sea, Heaven',
    },
    {
        preview: 'https://pixabay.com/get/g78b9157d1e8d6df70281de89d3c5e5d48a7504e82a9fdcda3d15b745744cc225d7753f6a7d2d63282a13fa986cb7f834_640.jpg',
        original: 'https://pixabay.com/get/g087a45cb23a7350c5b50e524348772562b0a486fa7727d4befd7e453004255c80780dd123c16f8a194cf4887fcca63c101bf9e0db3881ad01e0430aa6a76410c_1920.jpg',
        description: 'Owl, Bird, Nature',
    },
    {
        preview: 'https://pixabay.com/get/g79a2e740e166351aae61e47b3732b7d54da55741d259dae17f4931d03179e8e933a781f6c7e70482956528f8e20ecf6d_640.jpg',
        original: 'https://pixabay.com/get/g1bae1d68f64f280ce4d3af42de43fd869581526586bc52264731961e6506829b53bb243989a36c1a2d62d3f406276017a8774e933318d552488b68b22dac9a96_1920.jpg',
        description: 'Roe deer, Nature, Animal',
    },
];


const galleryContainer = document.querySelector('.gallery');

function createMarkup(arr) {
    return arr.map(({ preview, original, description }) => 
        `<li class="gallery-item">
            <a class="gallery-link" href="${original}">
                <img class="gallery-image" src="${preview}" alt="${description}" />
            </a>
        </li>`
    ).join('');
}

galleryContainer.innerHTML = createMarkup(images);

const gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});
