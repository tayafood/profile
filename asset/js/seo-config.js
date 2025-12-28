/**
 * SEO Configuration for TAYA FOOD Website
 * File: seo-config.js
 * 
 * Tập trung quản lý tất cả thông tin SEO theo từng ngôn ngữ
 */

const SEO_CONFIG = {
    // Thông tin chung
    siteName: "TAYA FOOD",
    siteUrl: "https://tayafood.com",
    logo: "https://tayafood.com/asset/tayafood-logo-logan_transparent.PNG",
    
    // Social Media
    social: {
        facebook: "https://facebook.com/tayafood",
        // Thêm các mạng xã hội khác nếu có
    },

    // SEO theo ngôn ngữ
    languages: {
        vi: {
            title: "TAYA FOOD - Nhà Sản Xuất Gia Vị & Xốt Hàng Đầu Việt Nam | OEM Thực Phẩm",
            description: "TAYA FOOD - Công ty sản xuất gia vị, nước xốt, gia vị bột chất lượng cao. Chuyên gia công OEM cho ngành F&B, FMCG. Chứng nhận ISO 22000:2018. Đối tác tin cậy cho doanh nghiệp thực phẩm.",
            keywords: [
                // Từ khóa chính
                "TAYA FOOD",
                "gia vị Việt Nam",
                "sản xuất gia vị",
                "nhà máy gia vị",
                "gia công OEM gia vị",
                
                // Sản phẩm
                "gia vị bột",
                "nước xốt",
                "gia vị rắc",
                "gia vị tẩm",
                "bột soup",
                "gia vị snack",
                "gia vị gà rán",
                "xốt chấm",
                "xốt lẩu",
                
                // Dịch vụ
                "OEM thực phẩm",
                "gia công thực phẩm",
                "đóng gói gia vị",
                "sản xuất theo yêu cầu",
                "nguyên liệu F&B",
                "nguyên liệu FMCG",
                
                // Địa điểm
                "gia vị TP.HCM",
                "nhà máy thực phẩm Việt Nam",
                "sản xuất gia vị Hồ Chí Minh",
                
                // Chứng nhận
                "ISO 22000",
                "an toàn thực phẩm",
                "chất lượng cao"
            ],
            ogLocale: "vi_VN"
        },
        
        en: {
            title: "TAYA FOOD - Leading Seasoning & Sauce Manufacturer in Vietnam | Food OEM",
            description: "TAYA FOOD - Premium seasoning, sauce, and powder spice manufacturer. Specialized OEM services for F&B and FMCG industries. ISO 22000:2018 certified. Your trusted food production partner.",
            keywords: [
                // Main keywords
                "TAYA FOOD",
                "Vietnam seasoning manufacturer",
                "spice production",
                "seasoning factory",
                "OEM food processing",
                
                // Products
                "seasoning powder",
                "sauce production",
                "coating seasoning",
                "soup powder",
                "snack seasoning",
                "fried chicken seasoning",
                "dipping sauce",
                "hot pot sauce",
                
                // Services
                "food OEM",
                "private label seasoning",
                "contract manufacturing",
                "F&B ingredients",
                "FMCG raw materials",
                
                // Location
                "Vietnam food manufacturer",
                "Ho Chi Minh City factory",
                "Southeast Asia seasoning",
                
                // Certification
                "ISO 22000 certified",
                "food safety",
                "quality assurance"
            ],
            ogLocale: "en_US"
        },
        
        zh: {
            title: "TAYA FOOD - 越南领先的调味料和酱料制造商 | 食品OEM",
            description: "TAYA FOOD - 优质调味料、酱料、粉状香料制造商。专业为F&B和FMCG行业提供OEM服务。ISO 22000:2018认证。值得信赖的食品生产合作伙伴。",
            keywords: [
                "TAYA FOOD",
                "越南调味料制造商",
                "香料生产",
                "调味料工厂",
                "食品OEM加工",
                "调味粉",
                "酱料生产",
                "汤料粉",
                "零食调味料",
                "食品代工",
                "ISO 22000认证",
                "东南亚调味料"
            ],
            ogLocale: "zh_CN"
        },
        
        ja: {
            title: "TAYA FOOD - ベトナム大手調味料・ソースメーカー | 食品OEM",
            description: "TAYA FOOD - 高品質な調味料、ソース、粉末スパイスメーカー。F&B・FMCG業界向けOEMサービス専門。ISO 22000:2018認証取得。信頼できる食品生産パートナー。",
            keywords: [
                "TAYA FOOD",
                "ベトナム調味料メーカー",
                "スパイス生産",
                "調味料工場",
                "食品OEM加工",
                "シーズニングパウダー",
                "ソース製造",
                "スープパウダー",
                "スナック調味料",
                "食品受託製造",
                "ISO 22000認証",
                "東南アジア調味料"
            ],
            ogLocale: "ja_JP"
        },
        
        ko: {
            title: "TAYA FOOD - 베트남 최고의 조미료 및 소스 제조업체 | 식품 OEM",
            description: "TAYA FOOD - 프리미엄 조미료, 소스, 분말 향신료 제조업체. F&B 및 FMCG 산업 전문 OEM 서비스. ISO 22000:2018 인증. 신뢰할 수 있는 식품 생산 파트너.",
            keywords: [
                "TAYA FOOD",
                "베트남 조미료 제조업체",
                "향신료 생산",
                "조미료 공장",
                "식품 OEM 가공",
                "시즈닝 파우더",
                "소스 생산",
                "수프 파우더",
                "스낵 조미료",
                "식품 위탁 제조",
                "ISO 22000 인증",
                "동남아시아 조미료"
            ],
            ogLocale: "ko_KR"
        },
        
        th: {
            title: "TAYA FOOD - ผู้ผลิตเครื่องปรุงรสและซอสชั้นนำของเวียดนาม | OEM อาหาร",
            description: "TAYA FOOD - ผู้ผลิตเครื่องปรุงรส ซอส และเครื่องเทศผงคุณภาพสูง บริการ OEM เฉพาะทางสำหรับอุตสาหกรรม F&B และ FMCG ได้รับการรับรอง ISO 22000:2018 พันธมิตรการผลิตอาหารที่เชื่อถือได้",
            keywords: [
                "TAYA FOOD",
                "ผู้ผลิตเครื่องปรุงรสเวียดนาม",
                "การผลิตเครื่องเทศ",
                "โรงงานเครื่องปรุงรส",
                "OEM แปรรูปอาหาร",
                "ผงปรุงรส",
                "การผลิตซอส",
                "ผงซุป",
                "เครื่องปรุงรสขนมขบเคี้ยว",
                "การผลิตอาหารตามสัญญา",
                "ISO 22000 รับรอง",
                "เครื่องปรุงรสเอเชียตะวันออกเฉียงใต้"
            ],
            ogLocale: "th_TH"
        }
    },

    // Schema.org structured data
    structuredData: {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "TAYA FOOD - Công ty TNHH Thực phẩm TAYA Việt Nam",
        "alternateName": "TAYA VIETNAM FOOD CO., LTD",
        "url": "https://tayafood.com",
        "logo": "https://tayafood.com/asset/tayafood-logo-logan_transparent.PNG",
        "description": "Nhà sản xuất gia vị, nước xốt hàng đầu Việt Nam. Chuyên gia công OEM cho ngành F&B, FMCG.",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "5C2 Hòa Bình, Phường Bình Thới",
            "addressLocality": "Quận 11",
            "addressRegion": "TP. Hồ Chí Minh",
            "addressCountry": "VN"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+84-938-163-038",
            "contactType": "sales",
            "email": "anmtt@tayafood.com",
            "availableLanguage": ["Vietnamese", "English", "Chinese", "Japanese", "Korean", "Thai"]
        },
        "sameAs": [
            "https://facebook.com/tayafood"
        ]
    }
};

// Export for use
if (typeof window !== 'undefined') {
    window.SEO_CONFIG = SEO_CONFIG;
}

// Function to apply SEO based on language
function applySEO(lang) {
    const seo = SEO_CONFIG.languages[lang] || SEO_CONFIG.languages.vi;
    
    // Update title
    document.title = seo.title;
    
    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        metaDesc.setAttribute('content', seo.description);
    }
    
    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
        metaKeywords.setAttribute('content', seo.keywords.join(', '));
    }
    
    // Update Open Graph tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', seo.title);
    
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', seo.description);
    
    let ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) ogLocale.setAttribute('content', seo.ogLocale);
    
    // Update Twitter tags
    let twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute('content', seo.title);
    
    let twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute('content', seo.description);
}

// Make applySEO available globally
if (typeof window !== 'undefined') {
    window.applySEO = applySEO;
}
