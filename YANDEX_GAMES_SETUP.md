# Yandex Games'ga O'yin Qo'yish Qo'llanmasi

## 1. Yandex Games Developer Console'ga Kirish

1. [Yandex Games Developer Console](https://developer.tech.yandex.ru/games/) ga kiring
2. Yandex akkauntingiz bilan kirib kiring
3. "Yangi o'yin yaratish" tugmasini bosing

## 2. O'yin Ma'lumotlarini To'ldirish

### Asosiy Ma'lumotlar:
- **O'yin nomi**: Level Devil 2
- **Tavsif**: 70 ta level bilan platformer o'yin
- **Kategoriya**: Action / Platformer
- **Til**: O'zbek tili
- **Yosh cheklovi**: 6+

### O'yin Sozlamalari:
- **O'yin turi**: HTML5
- **Ekran o'lchami**: 1200x800 (yoki moslashtirilgan)
- **Orientation**: Landscape (gorizontal)

## 3. O'yin Fayllarini Tayyorlash

### Zarur Fayllar:
```
3d/
├── index.html      (asosiy fayl)
├── game.js         (o'yin kodi)
├── style.css       (stil fayli)
└── README.md       (ixtiyoriy)
```

### index.html Faylini Tekshirish:
- `index.html` faylida barcha fayllar to'g'ri yo'llangan bo'lishi kerak
- Yandex Games SDK integratsiyasi qo'shilgan bo'lishi kerak

## 4. O'yin Kodini Yandex Games uchun Optimallashtirish

### Yandex Games SDK Integratsiyasi:
1. `index.html` ga Yandex Games SDK script qo'shish
2. SDK orqali progress saqlash
3. Fullscreen rejimini yoqish
4. Loading API'ni ishlatish

## 5. O'yinni Yuklash

### Variant 1: ZIP Fayl Yuklash
1. Barcha fayllarni ZIP arxiviga yig'ing
2. Developer Console'da "O'yin fayllarini yuklash" bo'limiga kiring
3. ZIP faylni yuklang

### Variant 2: Git Repository
1. GitHub yoki boshqa Git hosting'ga kodni yuklang
2. Developer Console'da Git repository URL'ni kiriting

## 6. O'yin Sozlamalarini To'ldirish

### Ekran Sozlamalari:
- **Asosiy fayl**: `index.html`
- **Ekran o'lchami**: 1200x800
- **Responsive**: Ha (yoki Yo'q - o'yin o'lchamiga qarab)

### Metadata:
- **Screenshots**: O'yin rasmlarini yuklang (kamida 3-5 ta)
- **Icon**: O'yin ikonasi (512x512 px)
- **Banner**: O'yin banneri (1200x600 px)

## 7. Test Qilish

1. Developer Console'da "Test" tugmasini bosing
2. O'yinni brauzerda ochib tekshiring
3. Barcha funksiyalar ishlayotganini tekshiring:
   - Level selection
   - O'yin mexanikasi
   - Progress saqlash
   - Barcha level'lar

## 8. Nashr Qilish

1. Barcha ma'lumotlar to'ldirilganini tekshiring
2. "Nashr qilish" tugmasini bosing
3. Moderatsiya jarayonini kutib turing (1-3 kun)
4. O'yin tasdiqlangandan keyin, u Yandex Games'da ko'rinadi

## 9. O'yin Linkini Olish

Nashr qilingandan keyin:
- O'yin linki: `https://yandex.ru/games/app/[ID]`
- Bu linkni do'stlaringizga yuborishingiz mumkin

## 10. Statistikani Kuzatish

Developer Console'da:
- O'yin o'yinlar soni
- Foydalanuvchilar soni
- O'rtacha o'yin vaqti
- Va boshqa statistikalar

## Muhim Eslatmalar:

1. **Progress Saqlash**: Yandex Games'da localStorage ishlaydi, lekin SDK orqali saqlash yaxshiroq
2. **Performance**: O'yin tez ishlashi kerak (60 FPS)
3. **Mobile**: Mobil qurilmalarda ham ishlashi kerak
4. **Content**: O'yin tarkibi Yandex qoidalariga mos kelishi kerak

## Yordam:

Agar muammo bo'lsa:
- [Yandex Games Developer Documentation](https://yandex.ru/dev/games/doc/dg/)
- Developer Console'da "Yordam" bo'limi
- Yandex Games Developer Community

