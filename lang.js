/* ArtLux – lang.js  |  EN / AR translation + RTL toggle */
(function () {
  'use strict';

  var LANGS = ['en', 'ar'];

  var T = {
    en: {
      /* ── Nav (all pages) ── */
      'nav.home': 'Home',
      'nav.gallery': 'Gallery',
      'nav.projects': 'Projects',
      'nav.about': 'About',
      'nav.contact': 'Contact',
      'nav.commission': 'Commission',
      /* ── Footer (all pages) ── */
      'footer.tagline': 'Elevating spaces with premium mural art and fine finishes since 2019.',
      'footer.quicklinks': 'Quick Links',
      'footer.legal': 'Legal',
      'footer.contact-us': 'Contact Us',
      'footer.address': 'Corniche El Mazraa, Beirut',
      /* ── Commission hero ── */
      'commission.hero.eye': 'ArtLux Studio',
      'commission.hero.title': 'Commission Your Masterpiece',
      'commission.hero.sub': 'Bespoke artwork, meticulously crafted for your space. Transform your vision into a timeless piece of art.',
      /* ── Process section ── */
      'commission.process.title': 'Our Process',
      'commission.p1.title': 'Initial Consultation',
      'commission.p1.text': 'We discuss your vision, space requirements, and artistic preferences to establish the creative direction.',
      'commission.p2.title': 'Concept Development',
      'commission.p2.text': 'Preliminary sketches and color studies are prepared for your review and approval.',
      'commission.p3.title': 'Artwork Creation',
      'commission.p3.text': 'Your vision comes to life using premium archival materials and expert techniques.',
      'commission.p4.title': 'Final Delivery',
      'commission.p4.text': 'Your completed artwork is carefully packaged and shipped with full insurance coverage.',
      /* ── Configurator ── */
      'commission.form.title': 'Commission Request',
      'cfg.step1.label': 'Type',
      'cfg.step2.label': 'Dimensions',
      'cfg.step3.label': 'Details',
      'cfg.hint1': 'What type of artwork are you commissioning?',
      'cfg.type.mural': 'Mural',
      'cfg.type.mural.desc': 'Large-scale wall paintings for residential or commercial spaces',
      'cfg.type.decorative': 'Decorative Finish',
      'cfg.type.decorative.desc': 'Venetian plaster, faux marble, and ornamental wall treatments',
      'cfg.type.canvas': 'Canvas Painting',
      'cfg.type.canvas.desc': 'Original oil or acrylic paintings on stretched canvas',
      'cfg.type.patina': 'Patina',
      'cfg.type.patina.desc': 'Aged metal and oxidized surface finishes',
      'cfg.btn.next1': 'Next: Dimensions',
      'cfg.hint2': 'Tell us about the size and scope of your project.',
      'cfg.label.width': 'Width (cm)',
      'cfg.label.height': 'Height (cm)',
      'cfg.label.surface': 'Surface',
      'cfg.label.budget': 'Budget Range',
      'cfg.label.timeline': 'Desired Timeline',
      'cfg.btn.back': 'Back',
      'cfg.btn.next2': 'Next: Details',
      'cfg.hint3': 'Share your vision and contact details.',
      'cfg.label.name': 'Full Name',
      'cfg.label.email': 'Email Address',
      'cfg.label.phone': 'Phone / WhatsApp',
      'cfg.label.desc': 'Project Description',
      'cfg.label.photos': 'Space Photos',
      'cfg.photos.hint': 'optional — helps us visualize',
      'cfg.upload.text': 'Drag & drop photos here, or',
      'cfg.upload.browse': 'browse',
      'cfg.upload.sub': 'JPG, PNG, PDF · Max 10 MB per file',
      'cfg.btn.submit': 'Submit Commission Request',
      /* ── FAQ ── */
      'faq.title': 'Frequently Asked Questions',
      'faq.q1': 'How long does a commission typically take?',
      'faq.a1': 'Most commissions take 4–6 weeks from concept approval to completion. Larger or complex works may require 8–10 weeks. We’ll provide a detailed timeline during our initial consultation.',
      'faq.q2': 'What materials do you use?',
      'faq.q3': 'Do you offer international shipping?',
      'faq.a3': 'Yes, we offer worldwide shipping with professional custom crating, full insurance coverage, and tracked delivery to ensure your artwork arrives safely.',
      'faq.q4': 'Can I see progress updates?',
      'faq.a4': 'Absolutely! We provide regular progress photos and updates throughout the creation process. We want you to be involved and excited as your vision comes to life.',
    },
    ar: {
      /* ── Nav ── */
      'nav.home': 'الرئيسية',
      'nav.gallery': 'المعرض',
      'nav.projects': 'المشاريع',
      'nav.about': 'من نحن',
      'nav.contact': 'تواصل معنا',
      'nav.commission': 'اطلب عملاً',
      /* ── Footer ── */
      'footer.tagline': 'نرتقي بالمساحات بفن الجداريات الفاخرة والتشطيبات الراقية منذ ٢٠١٩.',
      'footer.quicklinks': 'روابط سريعة',
      'footer.legal': 'القانونية',
      'footer.contact-us': 'تواصل معنا',
      'footer.address': 'كورنيش المزرعة، بيروت',
      /* ── Commission hero ── */
      'commission.hero.eye': 'استوديو ArtLux',
      'commission.hero.title': 'اطلب تحفتك الفنية',
      'commission.hero.sub': 'أعمال فنية مخصصة تُصنع بعناية لمساحتك. حوّل رؤيتك إلى قطعة فنية خالدة.',
      /* ── Process ── */
      'commission.process.title': 'مراحل العمل',
      'commission.p1.title': 'الاستشارة الأولية',
      'commission.p1.text': 'نناقش رؤيتك ومتطلبات المساحة وتفضيلاتك الفنية لتحديد التوجه الإبداعي.',
      'commission.p2.title': 'تطوير المفهوم',
      'commission.p2.text': 'يتم إعداد رسومات أولية ودراسات ألوان لمراجعتك واعتمادها.',
      'commission.p3.title': 'إنشاء العمل الفني',
      'commission.p3.text': 'تتجسد رؤيتك بأفضل المواد الأرشيفية وتقنيات الخبراء.',
      'commission.p4.title': 'التسليم النهائي',
      'commission.p4.text': 'يُعبّأ عملك الفني المكتمل بعناية ويُشحن مع تغطية تأمينية كاملة.',
      /* ── Configurator ── */
      'commission.form.title': 'طلب عمل فني',
      'cfg.step1.label': 'النوع',
      'cfg.step2.label': 'الأبعاد',
      'cfg.step3.label': 'التفاصيل',
      'cfg.hint1': 'ما نوع العمل الفني الذي تطلبه؟',
      'cfg.type.mural': 'جدارية',
      'cfg.type.mural.desc': 'لوحات جدارية كبيرة للمساحات السكنية أو التجارية',
      'cfg.type.decorative': 'تشطيب زخرفي',
      'cfg.type.decorative.desc': 'جص فينيسي، رخام مزيف، ومعالجات جدارية زخرفية',
      'cfg.type.canvas': 'لوحة قماشية',
      'cfg.type.canvas.desc': 'لوحات أصلية بالزيت أو الأكريليك على قماش ممتد',
      'cfg.type.patina': 'باتينا',
      'cfg.type.patina.desc': 'تشطيبات معدنية متقدمة في السن وأسطح مؤكسدة',
      'cfg.btn.next1': 'التالي: الأبعاد',
      'cfg.hint2': 'أخبرنا عن حجم ونطاق مشروعك.',
      'cfg.label.width': 'العرض (سم)',
      'cfg.label.height': 'الارتفاع (سم)',
      'cfg.label.surface': 'السطح',
      'cfg.label.budget': 'الميزانية',
      'cfg.label.timeline': 'الجدول الزمني المطلوب',
      'cfg.btn.back': 'رجوع',
      'cfg.btn.next2': 'التالي: التفاصيل',
      'cfg.hint3': 'شاركنا رؤيتك وبياناتك.',
      'cfg.label.name': 'الاسم الكامل',
      'cfg.label.email': 'البريد الإلكتروني',
      'cfg.label.phone': 'الهاتف / واتساب',
      'cfg.label.desc': 'وصف المشروع',
      'cfg.label.photos': 'صور المكان',
      'cfg.photos.hint': 'اختياري — يساعدنا في التصور',
      'cfg.upload.text': 'اسحب الصور هنا، أو',
      'cfg.upload.browse': 'تصفح',
      'cfg.upload.sub': 'JPG، PNG، PDF · الحد الأقصى ١٠ ميجا',
      'cfg.btn.submit': 'إرسال طلب العمل الفني',
      /* ── FAQ ── */
      'faq.title': 'أسئلة شائعة',
      'faq.q1': 'كم تستغرق مدة تنفيذ العمل؟',
      'faq.a1': 'معظم الأعمال تستغرق ٤–٦ أسابيع من اعتماد المفهوم حتى الاكتمال. قد تستلزم الأعمال الكبيرة ٨–٪٠ أسابيع. سنزودك بجدول زمني مفصّل خلال الاستشارة الأولى.',
      'faq.q2': 'ما المواد التي تستخدمونها؟',
      'faq.q3': 'هل تقدمون شحناً دولياً؟',
      'faq.a3': 'نعم، نقدم الشحن العالمي مع التغليف الاحترافي والتأمين الكامل والتتبع لضمان وصول عملك بأمان.',
      'faq.q4': 'هل يمكنني متابعة مراحل التنفيذ؟',
      'faq.a4': 'بالتأكيد! نرسل صور تقدم ومستجدات منتظمة طوال مراحل الإنشاء. نريدك مشاركاً ومتحمساً لتشاهد رؤيتك تتحقق.',
    }
  };

  function applyLang(lang) {
    if (!T[lang]) return;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('artlux-lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var val = T[lang][key];
      if (val === undefined) return;
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = val;
      } else {
        el.textContent = val;
      }
    });

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      var isActive = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
  }

  function init() {
    var saved = localStorage.getItem('artlux-lang');
    var lang = (saved && LANGS.indexOf(saved) !== -1) ? saved : 'en';
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        applyLang(this.getAttribute('data-lang'));
      });
    });
    applyLang(lang);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
