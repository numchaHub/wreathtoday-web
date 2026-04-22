// ============================================
// WreathToday - Single Page App
// ============================================

// Cache bust version - bump this when images are updated
const IMG_VER = '20260422';
const imgUrl = (path) => `${path}?v=${IMG_VER}`;
const webpUrl = (path) => `${path.replace(/\.jpg$/i, '.webp')}?v=${IMG_VER}`;
// Small version (500px wide) for grid cards — saves 70% bandwidth
const webpThumbUrl = (path) => `${path.replace(/\.jpg$/i, '-sm.webp')}?v=${IMG_VER}`;

document.addEventListener('DOMContentLoaded', () => {
    initHeroImage();
    initMobileMenu();
    initBackToTop();
    initFilters();
    initModal();
    renderProducts('all', 'popular');
});

// --- Hero Image (random fresh wreath > 2000) ---
function initHeroImage() {
    const heroImg = document.getElementById('heroImg');
    if (!heroImg || typeof PRODUCTS === 'undefined') return;
    const picks = PRODUCTS.filter(p => p.category === 'fresh' && p.price > 2000);
    if (picks.length === 0) return;
    const random = picks[Math.floor(Math.random() * picks.length)];
    const heroSource = document.getElementById('heroSource');
    if (heroSource) heroSource.srcset = webpThumbUrl(random.image);
    heroImg.src = imgUrl(random.image);
    heroImg.alt = random.name + ' - ' + random.sku;
}

// --- State ---
let currentCat = 'all';
let currentSort = 'popular';

// --- Mobile Menu ---
function initMobileMenu() {
    const btn = document.getElementById('mobileMenuBtn');
    const nav = document.getElementById('nav');
    if (!btn || !nav) return;
    btn.addEventListener('click', () => {
        btn.classList.toggle('active');
        nav.classList.toggle('open');
        document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
        btn.setAttribute('aria-expanded', nav.classList.contains('open'));
    });
    nav.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            btn.classList.remove('active');
            nav.classList.remove('open');
            document.body.style.overflow = '';
            const cat = link.dataset.cat;
            if (cat) { filterByCategory(cat); }
        });
    });
}

// --- Back to Top ---
function initBackToTop() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;
    window.addEventListener('scroll', () => btn.classList.toggle('show', window.scrollY > 400));
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// --- Filters ---
function initFilters() {
    // Filter tabs
    document.querySelectorAll('.filter-tab').forEach(tab => {
        tab.addEventListener('click', () => filterByCategory(tab.dataset.cat));
    });
    // Sort
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', () => {
            currentSort = sortSelect.value;
            renderProducts(currentCat, currentSort);
        });
    }
}

function filterByCategory(cat) {
    currentCat = cat;
    // Update active states
    document.querySelectorAll('.filter-tab').forEach(t => t.classList.toggle('active', t.dataset.cat === cat));
    document.querySelectorAll('.nav-link').forEach(n => n.classList.toggle('active', n.dataset.cat === cat));
    renderProducts(cat, currentSort);
    // Scroll to products
    document.querySelector('.filter-bar')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// --- Render Products ---
function renderProducts(cat, sort) {
    const container = document.getElementById('productsGrid');
    const countEl = document.getElementById('productsCount');
    if (!container) return;

    let filtered = cat === 'all' ? [...PRODUCTS] : PRODUCTS.filter(p => p.category === cat);

    switch (sort) {
        case 'price-low': filtered.sort((a, b) => a.price - b.price); break;
        case 'price-high': filtered.sort((a, b) => b.price - a.price); break;
        default: break; // keep original array order (1, 2, 3...7, 7.1...47)
    }

    if (countEl) countEl.textContent = `แสดง ${filtered.length} รายการ`;
    container.innerHTML = filtered.map(p => createProductCard(p)).join('');

    // Add click events to cards
    container.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (e.target.closest('a[target="_blank"]')) return; // Don't intercept LINE links
            e.preventDefault();
            const id = parseInt(card.dataset.id);
            openProductModal(id);
        });
    });
}

function createProductCard(product) {
    const badgeHTML = product.badge
        ? `<span class="product-badge badge-${product.badge}">${getBadgeLabel(product.badge)}</span>`
        : '';
    const originalPriceHTML = product.originalPrice
        ? `<span class="price-original">฿${product.originalPrice.toLocaleString()}</span>`
        : '';

    return `
        <div class="product-card" data-id="${product.id}">
            <div class="product-image">
                ${badgeHTML}
                <picture>
                    <source srcset="${webpThumbUrl(product.image)}" type="image/webp">
                    <img src="${imgUrl(product.image)}" alt="พวงหรีด${product.name} ${product.categoryName} ${product.description}"
                         width="400" height="500" loading="lazy" decoding="async">
                </picture>
            </div>
            <div class="product-info">
                <div class="product-price">
                    <span class="price-current">฿${product.price.toLocaleString()}</span>
                    ${originalPriceHTML}
                </div>
                <h3 class="product-name">${product.name}-${product.sku}</h3>
                <div class="product-actions">
                    <a href="https://line.me/R/ti/p/@wreathtoday?text=${encodeURIComponent('สนใจสั่งซื้อ: ' + product.name + ' (฿' + product.price.toLocaleString() + ')')}" target="_blank" class="btn btn-line btn-sm"><i class="fab fa-line"></i> สั่งเลย</a>
                </div>
            </div>
        </div>
    `;
}

function getBadgeLabel(badge) {
    return { hot: 'ขายดี', new: 'ใหม่', sale: 'ลดราคา' }[badge] || '';
}

// --- Product Modal ---
function initModal() {
    const overlay = document.getElementById('modalOverlay');
    const closeBtn = document.getElementById('modalClose');
    if (!overlay) return;

    closeBtn?.addEventListener('click', closeModal);
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeModal();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });
}

function openProductModal(id) {
    const product = PRODUCTS.find(p => p.id === id);
    if (!product) return;

    const overlay = document.getElementById('modalOverlay');
    const body = document.getElementById('modalBody');

    const originalPriceHTML = product.originalPrice
        ? `<span class="price-original">฿${product.originalPrice.toLocaleString()}</span>`
        : '';
    const flowersHTML = product.flowers.map(f => `<li>${f}</li>`).join('');
    const lineMsg = encodeURIComponent(
        'สนใจสั่งซื้อ: ' + product.name +
        '\nราคา: ฿' + product.price.toLocaleString() +
        '\nรหัส: ' + product.sku +
        '\n\nข้อความบนป้าย: \nสถานที่จัดส่ง: \nวันที่จัดส่ง: '
    );

    body.innerHTML = `
        <div class="modal-grid">
            <div class="modal-image">
                <picture>
                    <source srcset="${webpUrl(product.image)}" type="image/webp">
                    <img src="${imgUrl(product.image)}" alt="พวงหรีด${product.name} ${product.categoryName} ${product.description}"
                         width="800" height="1200" loading="lazy" decoding="async">
                </picture>
            </div>
            <div class="modal-info">
                <h2>${product.name}-${product.sku}</h2>
                <div class="modal-sku">รหัส: ${product.sku} | ${product.categoryName}</div>
                <div class="modal-price">
                    <span class="price-current">฿${product.price.toLocaleString()}</span>
                    ${originalPriceHTML}
                </div>
                <div class="modal-desc">
                    <h3>รายละเอียด</h3>
                    <p>${product.description}</p>
                    <p><strong>ขนาด:</strong> ${product.size}</p>
                    <h3 style="margin-top:12px;">ส่วนประกอบ</h3>
                    <ul>${flowersHTML}</ul>
                </div>
                <div class="modal-order">
                    <h3>สั่งซื้อพวงหรีดนี้</h3>
                    <a href="https://line.me/R/ti/p/@wreathtoday?text=${lineMsg}" target="_blank" rel="noopener" class="btn btn-line btn-lg" style="width:100%;justify-content:center;font-size:17px;">
                        <i class="fab fa-line"></i> สั่งซื้อผ่าน LINE ฿${product.price.toLocaleString()}
                    </a>
                    <a href="tel:0941476210" class="btn btn-secondary btn-lg" style="width:100%;justify-content:center;margin-top:8px;">
                        <i class="fas fa-phone-alt"></i> โทรสั่ง 094-147-6210
                    </a>
                </div>
                <div class="modal-guarantees">
                    <div class="guarantee-item"><i class="fas fa-truck"></i> ส่งฟรีทั่วประเทศ</div>
                    <div class="guarantee-item"><i class="fas fa-camera"></i> ส่งรูปยืนยัน</div>
                    <div class="guarantee-item"><i class="fas fa-bolt"></i> สั่งก่อนเที่ยง ส่งวันนี้</div>
                    <div class="guarantee-item"><i class="fas fa-undo"></i> รับประกันคืนเงิน</div>
                </div>
            </div>
        </div>
    `;

    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('modalOverlay')?.classList.remove('open');
    document.body.style.overflow = '';
}

// --- Toast ---
function showToast(message) {
    let toast = document.querySelector('.toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.className = 'toast';
        toast.style.cssText = 'position:fixed;bottom:100px;right:24px;background:var(--secondary);color:#fff;padding:14px 24px;border-radius:8px;font-size:14px;box-shadow:0 8px 30px rgba(0,0,0,0.12);z-index:10000;transform:translateY(20px);opacity:0;transition:all 0.3s ease;';
        document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.style.transform = 'translateY(0)';
    toast.style.opacity = '1';
    setTimeout(() => { toast.style.transform = 'translateY(20px)'; toast.style.opacity = '0'; }, 4000);
}
