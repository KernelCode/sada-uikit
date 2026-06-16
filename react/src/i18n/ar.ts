import type { Dict } from "./en";

export const ar: Dict = {
  brand: "base",
  nav: { landing: "الرئيسية", pricing: "الأسعار", dashboard: "لوحة التحكم", components: "المكوّنات", cta: "ابدأ الآن" },
  canvas: {
    eyebrow: "// لوحة الأساس",
    title: "حقيبتك تبدأ من هنا.",
    body: "BASE هو السباكة المحايدة — رموز التصميم، الوضع الداكن، والعربية + RTL، كلها موصولة. استبدل الثيم وهذه الصفحات بتصميمك الكامل. افتح prompts/build.md وابدأ.",
    build: "اقرأ الموجز",
    secondary: "prompts/build.md",
    checklist: [
      "اضبط ألوانك وخطوطك في design/theme.css (و tokens.json)",
      "ابنِ مجموعة المكوّنات الكاملة — كل الأنماط والحالات",
      "صفحات كاملة: هبوط · أسعار · لوحة تحكم · عرض المكوّنات",
      "العربية والإنجليزية مع RTL كامل، ومبدّل للوضع الداكن",
      "npx uikit-studio validate، ثم أضف اللقطات",
    ],
    todo: "ابنِ هذه الصفحة — استبدلها بشاشة كاملة بهوية الحقيبة. راجع prompts/build.md.",
    pages: { landing: "الهبوط", pricing: "الأسعار", dashboard: "لوحة التحكم", components: "عرض المكوّنات" },
  },
};
