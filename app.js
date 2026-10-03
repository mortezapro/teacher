const form = document.querySelector("#levelForm");
const result = document.querySelector("#levelResult");

const suggestions = {
  beginner: {
    course: "پیشنهاد ما: دوره شروع از صفر با دو جلسه زنده در هفته و تمرین تلفظ روزانه.",
    app: "پیشنهاد ما: مسیر واژگان پایه در اپلیکیشن، روزی ۱۵ دقیقه همراه با مرور صوتی.",
    ielts: "پیشنهاد ما: ابتدا دوره پایه را بگذران و بعد وارد مسیر مقدماتی IELTS شو."
  },
  basic: {
    course: "پیشنهاد ما: دوره مکالمه روزمره برای ساخت جمله و پاسخ سریع در موقعیت‌های ساده.",
    app: "پیشنهاد ما: تمرین مکالمه کوتاه، فلش‌کارت و آزمون هفتگی در اپلیکیشن.",
    ielts: "پیشنهاد ما: برنامه پیش‌نیاز IELTS با تمرکز روی لغت، شنیدار و گرامر کاربردی."
  },
  conversation: {
    course: "پیشنهاد ما: کلاس مکالمه نیمه‌خصوصی برای روان‌تر صحبت‌کردن و اصلاح خطاها.",
    app: "پیشنهاد ما: تمرین Listening و Speaking روزانه در اپلیکیشن.",
    ielts: "پیشنهاد ما: مسیر IELTS مقدماتی با نمونه‌سوال و بازخورد مدرس."
  },
  ielts: {
    course: "پیشنهاد ما: جلسه مشاوره آموزشی و تعیین نقشه راه اختصاصی IELTS.",
    app: "پیشنهاد ما: بسته تمرین IELTS در اپلیکیشن، شامل واژگان، شنیدار و آزمون کوتاه.",
    ielts: "پیشنهاد ما: دوره آمادگی IELTS با تمرین چهار مهارت و آزمون‌های مرحله‌ای."
  }
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const level = data.get("englishLevel");
  const goal = data.get("goal");

  result.textContent = suggestions[level][goal];
});
