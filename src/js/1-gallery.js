import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const images = [
    {
        preview: 'https://pixabay.com/images/download/leaves-7508744_640.jpg',
        original: 'https://pixabay.com/get/gb71630862484594589431e218dc6fc4e1e99851db67e3daceca12ec816059d6fe1e712202d2b43510f06c8ea7c7a71f675e6c932e0bb4c641329b1e1f997aff2_1920.jpg',
        description: 'Autmn leaves',
    },
    {
        preview: 'https://pixabay.com/get/g5a09a7e661060bf3c11cbff332730a57b0268030b9e69f83df064c57b68d46a0a05a85bc614df3774e637c6ae06ae464_640.jpg',
        original: 'https://pixabay.com/get/gab4381ac52861b3deb0e99ed90e82e3a78452e87384f8f7e95a6bc00442d85a3b184f651c35f82fdcb2fc3675c60e91810447ad783f47deebe140a48be12b0cf_1920.jpg',
        description: 'Lavender, Lavender field',
    },
    {
        preview: 'https://pixabay.com/get/g39dddc6bfec0f5445b391e833a880661c7af6e1ffd2971130ea022966a1e76298fcbac6f8ed651d25588a26e50bd1745_640.jpg',
        original: 'https://pixabay.com/get/gdc992394c4cc1630cd7e5828e845456ea94ed872f1807b685c86d4e35e48d78954d338d14c43cf654a7516fcc5364ff9f2261ccf5954da4759372c5391ba6a9e_1920.jpg',
        description: 'Stones, Balance',
    },
    {
        preview: 'https://pixabay.com/get/g2935d124d7f8698fac821363a7e4ade2039106e93d6dbfe4718547efa5759e12651a630908fa99c1af3051e456d43cd8_640.jpg',
        original: 'https://pixabay.com/get/g4dabe33f11e98db98768d8ecf8b43260359b7bd1e4fadde22965dedaf365e61456ec43f96041ae9b0198edef07d429f27ff4d3d178cac253abeb1dcce3d65cd0_1920.jpg',
        description: 'Sky, Nature',
    },
    {
        preview: 'https://pixabay.com/get/g7883297d076e94aae2ce0041f55b4a2501a889397f75c8cbd00b84ad17c44d5979cf416f35f24723e075702a7e5f7c01_640.jpg',
        original: 'https://pixabay.com/get/g82d78117f97c6a978a1fb1797f5bd3322b25756a134ed9f380d6e862b1a267c0f2a3640f221b8a5a38ed8b2f409055b98fc2c2815770dbb441085c632505413b_1920.jpg',
        description: 'Beach, Volcano, Ocean',
    },
    {
        preview: 'https://pixabay.com/get/g09a7a13d1d81d84ff2b4e3d7a89f5079f8d0ac0a096236e94db4e450404d7782423e79602a33eb8d5025f00660e25cb4_640.jpg',
        original: 'https://pixabay.com/get/gd1e083d31c8bf6a2862fb522aea1ce31a131f0337bf23980ff44dbc398eebee3a8ad057fdc8aec57f79d82012565f4d73df066f690ed374598796dffa7b21348_1920.jpg',
        description: 'Dawn, Lava',
    },
    {
        preview: 'https://pixabay.com/get/g169d49e8cd432bb70da6cc9526a34582ae1c2bf765149b45821e3f66fcc301222c629403bc4bff517895f489b5ac50d4_640.jpg',
        original: 'https://pixabay.com/get/gd62adf052bb803041c14126beca851913414c20195720dda156ec76ccf9d7184ed9daadacbedaf9949404bae94d9b9d2a529dfac45c25f72934c72548e2e9a8c_1920.jpg',
        description: 'River, Boat',
    },
    {
        preview: 'https://pixabay.com/get/g8d8b8ca49003a5d8cbfb49abe60ff7c97e9b099da1e50ff0872cc5cafed90112824efd3d32775a25647d39c36a12cab6_640.jpg',
        original: 'https://pixabay.com/get/g9ee2a0a763723eae10e8a132ab80ad0cab4548f176e326ea9bb1feb0895e174d0a069fc10f6d4ed1b5bb623d73450b7b4d5c8f042abb4dba799fdadc0e9b3291_1920.jpg',
        description: 'Winter, Snow',
    },
    {
        preview: 'https://pixabay.com/get/g7e04d22f73d4ac11098d6b50de7589af52e8543421bcd80d0612076405e01e937289b6c1d7a31bd8cdd1992413f6fcf0_640.jpg',
        original: 'https://pixabay.com/get/g4486e2ff54dcb6ca07b0d6fe85b7854a63e996826ff61f9419c9df938b30df868bdfff31b08680e0a791d3ce9cb384670a023b45ee7f926ccb2e2361507277fb_1920.jpg',
        description: 'Mountains, Landscape',
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
