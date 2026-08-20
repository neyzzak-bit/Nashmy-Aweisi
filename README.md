# Nashmy Aweisi — Digital Business Card

بطاقة تواصل رقمية (Digital vCard) لـ **نشمي العويسي — مدير قسم الأعمال** في بيارق الريادة الحديثة.
مبنية بـ HTML/CSS/JS خالص — بدون أي مكتبات خارجية — جاهزة للنشر على GitHub Pages.

## المحتويات
```
├── index.html      # هيكل الصفحة
├── style.css       # التنسيق والتصميم
├── script.js       # زر "Add Contact" لتحميل ملف vCard (.vcf)
├── assets/
│   └── logo.png    # شعار الشركة
└── README.md
```

## التشغيل محليًا
افتح `index.html` مباشرة في المتصفح، أو شغّل سيرفر بسيط:
```bash
python3 -m http.server 8000
```
ثم افتح `http://localhost:8000`

## النشر على GitHub Pages
1. ارفع هذا المجلد كـ repository جديد على GitHub.
2. من إعدادات الـ repo: **Settings → Pages**.
3. اختر الفرع `main` والمجلد `/ (root)`.
4. احفظ، وستحصل على رابط مباشر للبطاقة خلال دقيقة.

## التخصيص
- عدّل بيانات التواصل (الهاتف، البريد، الاسم، المسمى الوظيفي) في `index.html` وفي ملف الـ vCard داخل `script.js`.
- الألوان والخطوط قابلة للتعديل من متغيرات `:root` في أعلى `style.css`.
