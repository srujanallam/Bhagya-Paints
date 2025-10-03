// Smooth scroll to products section
function scrollToProducts() {
    const productsSection = document.getElementById('products');
    productsSection.scrollIntoView({ behavior: 'smooth' });
}

// Hero background slider
const hero = document.querySelector('.hero');
const imageSpans = document.querySelectorAll('#background-images span');
let currentIndex = 0;

function changeBackground() {
    const imageUrl = imageSpans[currentIndex].getAttribute('data-img');
    hero.style.backgroundImage = `url('${imageUrl}')`;
    hero.style.backgroundSize = 'cover';
    hero.style.backgroundPosition = 'center';
    currentIndex = (currentIndex + 1) % imageSpans.length;
}

changeBackground();
setInterval(changeBackground, 5000);

// Modal references
const viewButtons = document.querySelectorAll('.view-btn');
const modal = document.getElementById('productModal');
const closeBtn = document.querySelector('.close-btn');
const modalContentContainer = document.getElementById('modal-content-cards');

// Color map for displaying colors dynamically
const colorMap = {
    "BLACK": "#000000ff",
    "FAST BLACK": "#000000ff",
    "ANTI RUSTING AGENT(BLACK)": "#000000ff",
    "WHITE": "#ffffffff",
    "PINK": "#e46495ff",
    "FAST RED": "#bd1717ff",
    "FAST ORANGE": "#ee821eff",
    "FAST BLUE": "#233dcfff",
    "FAST YELLOW": "#eed91eff",
    "FAST YELLOW OXIDE": "#9b790aff",
    "FAST YELLOW GREEN": "#a5ee1eff",
    "FAST GREEN": "#28cf12ff",
    "FAST VIOLET": "#85069eff",
    "GREY": "#808080",
    "ZINC CROMATE YELLOW": "#e2b520ff",
    "P.O.RED": "#ff0000ff",
    "PHIROZA": "#0000FF",
    "BR WHITE": "#FFFFFF",
    "SMOKE GREY": "#808080",
    "MINT GREEN": "#008000",
    "GOLDEN YELLOW": "#ff9100ff",
    "OXFORD BLUE": "#010152ff",
    "GOLDEN BROWN": "#a55b2aff",
    "PALE CREAM": "#f1dea9ff",
    "WILD LILAC": "#bb87c9ff",
    "DAWN": "#DEB887",
    "BROWN": "#654321",
    "SKY BLUE": "#52b9e2ff",
    "ROYAL IVORY": "#ebd7a1ff",
    "WILD PURPLE": "#5a3364ff",
    "BUS GREEN": "#053a05ff",
    "DEEP ORANGE": "#cf5706ff",
    "SPORTY YELLOW": "#ffd900ff",
    "LEMON SOUFFLE": "#73d304ff",
    "JOLLY HOLLY": "#099721ff",
    "PARROT GREEN": "rgba(21, 211, 4, 1)",
    "DARK AQUAMARINE": "rgba(2, 145, 114, 1)",
    "MOGHUL GREEN": "#034d28ff",
    "SOOTHING SAPPHIRE": "#0443b8ff",
    "ORANGE VISION": "#e68c26ff",
    "SUNRISE": "#da5904ff",
    "YOUNG WINE": "#da335aff",
    "SIGNAL RED": "#b31515ff",
    "MAROON": "#7c0f0fff",
    "RUST": "#581d1dff",
    "COFFEE": "#201010ff",
    "TERACOTTA": "#350505ff",
    "DAFFODIL": "#e2d773ff",
    "CANDY": "#ce8d68ff",
    "MERRIE PINK": "#FFD1DC",
    "PALE ROSE": "#db6767ff",
    "GULAB": "#cf1b66ff",
    "FIRE RED": "#b81f1fff",
    "MORNING FROST": "#8de6e6ff",
    "PADDY FIELD": "#8ddbb7ff",
    "PISTA": "#96e273ff",
    "LIGHT GREEN": "#3bdb48ff",
    "AQUAMARINE": "#08af7dff",
    "PASTEL GREEN": "#9fdb9dff",
    "ELECTRIC BLUE": "#0a9bb4ff",
};

// Product details
const productDetails = {
    "Enamel": [
        { img: './public/images/Enamel.jpg', title: "DZINER", colors: ['BR WHITE', 'ROYAL IVORY', 'PALE CREAM', 'GOLDEN YELLOW', 'DEEP ORANGE', 'DAWN', 'P.O.RED', 'GOLDEN BROWN', 'BROWN', 'WILD LILAC', 'WILD PURPLE', 'SKY BLUE', 'PHIROZA', 'SMOKE GREY', 'MINT GREEN', 'BUS GREEN', 'OXFORD BLUE', 'BLACK'], sizes: ['50ml', '100ml', '200ml', '500ml', '1 liter', '4 liter', '10 liter', '20 liter'] },
        { img: './public/images/metro.jpg', title: "METRO", colors: ['BR WHITE', 'ROYAL IVORY', 'PALE CREAM', 'GOLDEN YELLOW', 'DEEP ORANGE', 'DAWN', 'P.O.RED', 'GOLDEN BROWN', 'BROWN', 'WILD LILAC', 'WILD PURPLE', 'SKY BLUE', 'PHIROZA', 'SMOKE GREY', 'MINT GREEN', 'BUS GREEN', 'OXFORD BLUE', 'BLACK'], sizes: ['50ml', '100ml', '200ml', '500ml', '1 liter', '4 liter', '10 liter', '20 liter'] },
        { img: './public/images/wondertex.jpg', title: "WONDERTEK", colors: ['BR WHITE', 'ROYAL IVORY', 'PALE CREAM', 'GOLDEN YELLOW', 'DEEP ORANGE', 'DAWN', 'P.O.RED', 'GOLDEN BROWN', 'BROWN', 'WILD LILAC', 'WILD PURPLE', 'SKY BLUE', 'PHIROZA', 'SMOKE GREY', 'MINT GREEN', 'BUS GREEN', 'OXFORD BLUE', 'BLACK'], sizes: ['50ml', '100ml', '200ml', '500ml', '1 liter', '4 liter', '10 liter', '20 liter'] },
        { img: './public/images/rallis.jpg', title: "RALLI'S", colors: ['BR WHITE', 'ROYAL IVORY', 'PALE CREAM', 'GOLDEN YELLOW', 'DEEP ORANGE', 'DAWN', 'P.O.RED', 'GOLDEN BROWN', 'BROWN', 'WILD LILAC', 'WILD PURPLE', 'SKY BLUE', 'PHIROZA', 'SMOKE GREY', 'MINT GREEN', 'BUS GREEN', 'OXFORD BLUE', 'BLACK'], sizes: ['50ml', '100ml', '200ml', '500ml', '1 liter', '4 liter', '10 liter', '20 liter'] },
        { img: './public/images/sarathi.jpg', title: "SARATHI", colors: ['BR WHITE', 'ROYAL IVORY', 'PALE CREAM', 'GOLDEN YELLOW', 'DEEP ORANGE', 'DAWN', 'P.O.RED', 'GOLDEN BROWN', 'BROWN', 'WILD LILAC', 'WILD PURPLE', 'SKY BLUE', 'PHIROZA', 'SMOKE GREY', 'MINT GREEN', 'BUS GREEN', 'OXFORD BLUE', 'BLACK'], sizes: ['50ml', '100ml', '200ml', '500ml', '1 liter', '4 liter', '10 liter', '20 liter'] }
    ],
    "Emulsion": [
        { img: './public/images/emulsionm.jpg', title: 'Emulsion', colors: ['SPORTY YELLOW', 'LEMON SOUFFLE', 'JOLLY HOLLY', 'PARROT GREEN', 'DARK AQUAMARINE', 'MOGHUL GREEN', 'SOOTHING SAPPHIRE', 'WILD PURPLE', 'ORANGE VISION', 'SUNRISE', 'YOUNG WINE', 'SIGNAL RED', 'MAROON', 'RUST', 'COFFEE', 'TERACOTTA'] }
    ],
    "Primer": [
        { img: './public/images/primerm.jpg', title: 'Wood Primer', colors: ['WHITE', 'PINK', 'ZINC CROMATE YELLOW'], sizes: ['200ml', '500ml', '1 liter', '4 liter'] },
        { img: './public/images/cp.jpg', title: 'Cement Primer', colors: ['GREY'], sizes: ['10 kgs', '20 kgs'] },
        { img: './public/images/llb.jpg', title: 'Lacoloid Black', colors: ['ANTI RUSTING AGENT(BLACK)'], sizes: ['500ml', '1 liter', '4 liter'] }
    ],
    "Distemper": [
        { img: './public/images/Distemper.jpg', title: 'Pouch Distemper', colors: ['IVORY', 'PALE CREAM', 'DAFFODIL', 'CANDY', 'MERRIE PINK', 'PALE ROSE', 'GULAB', 'FIRE RED', 'MORNING FROST', 'PADDY FIELD', 'PISTA', 'LIGHT GREEN', 'AQUAMARINE', 'PASTEL GREEN', 'WILD LILAC', 'ELECTRIC BLUE'], sizes: ['1 kg'] },
        { img: './public/images/distemper (2).jpg', title: 'Bucket Distemper', colors: ['IVORY', 'PALE CREAM', 'DAFFODIL', 'CANDY', 'MERRIE PINK', 'PALE ROSE', 'GULAB', 'FIRE RED', 'MORNING FROST', 'PADDY FIELD', 'PISTA', 'LIGHT GREEN', 'AQUAMARINE', 'PASTEL GREEN', 'WILD LILAC', 'ELECTRIC BLUE'], sizes: ['1 kg'] }
    ],
    "Stainer": [
        { img: './public/images/stainer2.jpg', title: 'Stainer', colors: ['FAST RED', 'FAST BLUE', 'FAST ORANGE', 'FAST GREEN', 'FAST YELLOW GREEN', 'FAST YELLOW OXIDE', 'FAST YELLOW', 'FAST VIOLET', 'FAST BLACK'], sizes: ['10 ml', '20 ml'] }
    ]
};

// Helper: Choose black or white text based on background color
const getTextColor = (bgColor) => {
    if (!bgColor) return '#000';
    if (bgColor.startsWith('#')) {
        const hex = bgColor.slice(1, 7);
        const r = parseInt(hex.slice(0, 2), 16);
        const g = parseInt(hex.slice(2, 4), 16);
        const b = parseInt(hex.slice(4, 6), 16);
        const brightness = (r * 299 + g * 587 + b * 114) / 1000;
        return brightness > 200 ? '#000' : '#fff';
    }
    const rgb = bgColor.match(/\d+/g);
    if (rgb && rgb.length >= 3) {
        const r = parseInt(rgb[0]);
        const g = parseInt(rgb[1]);
        const b = parseInt(rgb[2]);
        const brightness = (r * 299 + g * 587 + b * 114) / 1000;
        return brightness > 200 ? '#000' : '#fff';
    }
    return '#000';
};

// Event Listeners - build modal dynamically
viewButtons.forEach(button => {
    button.addEventListener('click', () => {
        const product = button.getAttribute('data-product');
        const cards = productDetails[product];

        modalContentContainer.innerHTML = '';

        cards.forEach(item => {
            const card = document.createElement('div');
            card.classList.add('modal-card');

            const colorsHTML = item.colors.map(color => {
                const bg = colorMap[color] || '#ccc';
                const textColor = getTextColor(bg);
                return `
                    <span class="color" style="background-color: ${bg}; color: ${textColor};">
                        ${color}
                    </span>
                `;
            }).join(' ');

            const sizesHTML = (item.sizes && item.sizes.length > 0)
                ? `<select class="size-dropdown">
                        ${item.sizes.map(size => `<option value="${size}">${size}</option>`).join('')}
                   </select>`
                : `<p class="no-sizes">Sizes not available</p>`;

            card.innerHTML = `
                <img src="${item.img}" alt="${item.title}">
                <h3>${item.title}</h3>

                <p><strong>Available Colors:</strong></p>
                <div class="color-options">${colorsHTML}</div>

                <p><strong>Available Sizes:</strong></p>
                ${sizesHTML}
            `;

            modalContentContainer.appendChild(card);
        });

        modal.style.display = 'flex';
    });
});

// Close modal
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
