// "Batafsil ma'lumotlar" tugmasini tanlash
document.getElementById('loadMore').addEventListener('click', function() {
    // Qo'shimcha ma'lumotlarni ko'rsatish uchun elementni tanlash
    const additionalInfo = document.getElementById('additionalInfo');

    // Qo'shimcha ma'lumotlar
    const info = 
        <><h3>Biz haqimizda</h3><p>Bizning kompaniya 2010 yilda tashkil etilgan. Biz eng zamonaviy texnologiyalar yordamida mijozlarimizga yuqori sifatli xizmatlar taqdim etamiz.</p><h4>Bizning jamoa</h4><ul>
            <li>O'rtacha 10 yillik tajribaga ega mutaxassislar</li>
            <li>Innovatsion fikrlash va kreativ echimlar</li>
            <li>Mijozlar ehtiyojini tushunish va ularga moslashish</li>
        </ul><h4>Bizning qadriyatlarimiz</h4><p>Biz ishonch, sifat va mijozlar bilan aloqalarni birinchi o'ringa qo'yamiz.</p></>
    ;
    








    // Qo'shimcha ma'lumotlarni ko'rsatish
    additionalInfo.innerHTML = info;
});// Aloqa formasini yuborish funksiyasi
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Formani standart yuborishni to'xtatish

    // Foydalanuvchi ma'lumotlarini olish
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Xabarning muvaffaqiyatli yuborilganligini ko'rsatish
    const successMessage = document.getElementById('successMessage');
    successMessage.style.display = 'block';

    // Formani tozalash
    document.getElementById('contactForm').reset();
});











