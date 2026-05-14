/**
 * 밥약 패러디 랜딩페이지 - Home
 * Design: 스타트업 IR 덱 패러디 스타일
 * Dark mode + Mint (#00d4aa) accent + Pretendard font
 * Framer Motion scroll animations + Toast reactions
 */

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useCallback } from "react";
import { toast } from "sonner";

/* ─────────────────────────────────────────────
   애니메이션 variants
───────────────────────────────────────────── */
const EASE_OUT = "easeOut" as const;

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_OUT },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.93 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: EASE_OUT },
  },
};

/* ─────────────────────────────────────────────
   ScrollReveal 래퍼
───────────────────────────────────────────── */
function ScrollReveal({
  children,
  variants = fadeUp,
  className = "",
}: {
  children: React.ReactNode;
  variants?: typeof fadeUp;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   1. Hero Section
───────────────────────────────────────────── */
function HeroSection() {
  const handleApply = () => {
    toast("📋 신청서 검토 중...", {
      description: "후배 내부 심사 시스템이 가동되었습니다. 결과는 후배 편의에 따라 통보됩니다.",
      duration: 4000,
    });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 py-20">
      {/* 배경 이미지 */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663659752027/P9Mg652tsi4UERLQKL5ece/hero-bg-QNnYYu3AQCvqUtagVSs7QL.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          opacity: 0.6,
        }}
      />
      {/* 오버레이 */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(10,10,15,0.3) 0%, rgba(10,10,15,0.7) 60%, #0a0a0f 100%)",
        }}
      />

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        {/* 배지 */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE_OUT }}
          className="flex justify-center mb-6"
        >
          <span className="badge-mint">🏛️ 후배 인권위원회 공식 인증</span>
        </motion.div>

        {/* 메인 타이틀 */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE_OUT }}
          className="font-black leading-[1.1] tracking-tight mb-4"
          style={{
            fontSize: "clamp(2.8rem, 8vw, 5.5rem)",
            letterSpacing: "-0.03em",
          }}
        >
          선배님,{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #00d4aa, #00b8d9)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            밥약 기회
          </span>{" "}
          드립니다.
        </motion.h1>

        {/* 부제 */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: EASE_OUT }}
          className="text-xl md:text-2xl font-medium mb-3"
          style={{ color: "rgba(240,240,245,0.6)" }}
        >
          선착순 아닙니다.{" "}
          <span style={{ color: "#00d4aa", fontWeight: 700 }}>심사제</span>입니다.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-sm mb-10"
          style={{ color: "rgba(240,240,245,0.35)" }}
        >
          ※ 본 공고는 후배의 선의로 제공되며, 선배의 권리는 보장되지 않습니다.
        </motion.p>

        {/* CTA 버튼 */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5, ease: EASE_OUT }}
          className="flex flex-col sm:flex-row gap-3 justify-center items-center"
        >
          <button
            onClick={handleApply}
            className="btn-mint text-lg px-10 py-4"
            style={{ minWidth: "180px" }}
          >
            신청하기 →
          </button>
          <button
            onClick={() =>
              document
                .getElementById("conditions")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-4 rounded-full font-semibold text-base transition-all duration-200"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "rgba(240,240,245,0.8)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background =
                "rgba(255,255,255,0.1)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background =
                "rgba(255,255,255,0.06)";
            }}
          >
            조건 확인하기
          </button>
        </motion.div>

        {/* 통계 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 flex flex-wrap justify-center gap-8"
        >
          {[
            { value: "0%", label: "선배 의견 반영률" },
            { value: "100%", label: "후배 만족 보장" },
            { value: "∞", label: "후배 권한 범위" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-3xl font-black mb-1"
                style={{ color: "#00d4aa" }}
              >
                {stat.value}
              </div>
              <div
                className="text-xs font-medium"
                style={{ color: "rgba(240,240,245,0.4)" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* 스크롤 인디케이터 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        style={{ color: "rgba(240,240,245,0.25)" }}
      >
        <span className="text-xs tracking-widest uppercase">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-8"
          style={{ background: "linear-gradient(to bottom, rgba(0,212,170,0.5), transparent)" }}
        />
      </motion.div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   2. 소개 카드 섹션
───────────────────────────────────────────── */
const introCards = [
  {
    icon: "🤝",
    title: "사회성 유지 지원",
    desc: "선배님의 사회적 고립을 방지하고, 최소한의 인간관계 유지를 지원합니다. 후배와의 정기적 접촉은 사회성 퇴화를 늦춥니다.",
    tag: "복지 서비스",
  },
  {
    icon: "🍽️",
    title: "후배와의 식사 기회 제공",
    desc: "바쁜 후배의 스케줄 사이, 소중한 빈 슬롯을 선배님께 할당합니다. 이 기회는 매우 제한적으로 운영됩니다.",
    tag: "한정 제공",
  },
  {
    icon: "✨",
    title: "선배 자존감 향상 가능",
    desc: "후배에게 밥을 사줄 수 있다는 사실 자체가 선배님의 자존감 향상에 기여합니다. 경험 기반 심리 치료 효과가 있습니다.",
    tag: "심리 지원",
  },
];

function IntroSection() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal className="text-center mb-14">
          <span className="badge-mint mb-4 inline-block">서비스 소개</span>
          <h2
            className="text-4xl md:text-5xl font-black tracking-tight mt-3"
            style={{ letterSpacing: "-0.03em" }}
          >
            왜 이 기회를 잡아야 할까요?
          </h2>
          <p
            className="mt-4 text-lg"
            style={{ color: "rgba(240,240,245,0.5)" }}
          >
            선배님을 위한 맞춤형 혜택을 확인하세요.
          </p>
        </ScrollReveal>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {introCards.map((card) => (
            <motion.div
              key={card.title}
              variants={scaleIn}
              className="glass-card p-7 group"
              style={{ cursor: "default" }}
            >
              <div
                className="text-4xl mb-5 w-14 h-14 flex items-center justify-center rounded-2xl"
                style={{ background: "rgba(0,212,170,0.1)" }}
              >
                {card.icon}
              </div>
              <span
                className="text-xs font-semibold tracking-widest uppercase mb-3 inline-block"
                style={{ color: "#00d4aa" }}
              >
                {card.tag}
              </span>
              <h3 className="text-xl font-bold mb-3 tracking-tight">
                {card.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(240,240,245,0.55)" }}
              >
                {card.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   3. 진행 조건 섹션
───────────────────────────────────────────── */
const conditions = [
  {
    label: "일정",
    value: "후배 일정 우선",
    detail: "선배님의 일정은 참고용으로만 활용됩니다.",
    icon: "📅",
  },
  {
    label: "장소",
    value: "후배 동선 기준",
    detail: "후배의 이동 거리를 최소화하는 방향으로 선정됩니다.",
    icon: "📍",
  },
  {
    label: "메뉴",
    value: "후배 입맛 고려",
    detail: "선배님의 식성은 참고하되, 최종 결정권은 후배에게 있습니다.",
    icon: "🍱",
  },
  {
    label: "종료 시점",
    value: "후배 피곤도 기반",
    detail: "후배의 에너지 레벨에 따라 식사는 언제든 종료될 수 있습니다.",
    icon: "😴",
  },
];

function ConditionsSection() {
  return (
    <section id="conditions" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal className="text-center mb-14">
          <span className="badge-mint mb-4 inline-block">진행 조건</span>
          <h2
            className="text-4xl md:text-5xl font-black tracking-tight mt-3"
            style={{ letterSpacing: "-0.03em" }}
          >
            식사 운영 기준
          </h2>
          <p
            className="mt-4 text-lg"
            style={{ color: "rgba(240,240,245,0.5)" }}
          >
            본 밥약은 아래 기준에 따라 엄격하게 운영됩니다.
          </p>
        </ScrollReveal>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="space-y-4"
        >
          {conditions.map((item, i) => (
            <motion.div
              key={item.label}
              variants={fadeUp}
              className="glass-card p-5 md:p-6 flex items-center gap-5"
            >
              <div
                className="text-2xl w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl"
                style={{ background: "rgba(0,212,170,0.08)" }}
              >
                {item.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-baseline gap-2 mb-1">
                  <span
                    className="text-xs font-semibold tracking-widest uppercase"
                    style={{ color: "rgba(240,240,245,0.4)" }}
                  >
                    {item.label}
                  </span>
                  <span className="font-bold text-base">{item.value}</span>
                </div>
                <p
                  className="text-sm"
                  style={{ color: "rgba(240,240,245,0.45)" }}
                >
                  {item.detail}
                </p>
              </div>
              <div
                className="hidden md:flex items-center justify-center w-8 h-8 rounded-full flex-shrink-0"
                style={{ background: "rgba(0,212,170,0.1)" }}
              >
                <span style={{ color: "#00d4aa", fontSize: "0.75rem", fontWeight: 700 }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 경고 문구 */}
        <ScrollReveal className="mt-6">
          <div
            className="rounded-2xl p-4 flex items-start gap-3"
            style={{
              background: "rgba(255,180,0,0.06)",
              border: "1px solid rgba(255,180,0,0.2)",
            }}
          >
            <span className="text-xl flex-shrink-0">⚠️</span>
            <p
              className="text-sm font-medium"
              style={{ color: "rgba(255,200,50,0.8)" }}
            >
              ※ 선배님의 과도한 TMI는 제한될 수 있습니다. 3회 경고 후 식사가
              조기 종료될 수 있으며, 이에 대한 이의 제기는 후배 인권위원회에서
              기각될 예정입니다.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   4. 협조사항 섹션
───────────────────────────────────────────── */
const cooperations = [
  {
    icon: "🪖",
    text: "군대 얘기 30분 이상 금지",
    sub: "15분 초과 시 경고 1회, 30분 초과 시 화제 강제 전환",
  },
  {
    icon: "🙅",
    text: '"요즘 애들은~" 사용 금지',
    sub: "해당 발언 감지 시 즉시 스마트폰 확인 모드 전환",
  },
  {
    icon: "💳",
    text: "계산 시 자연스러운 카드 꺼내기 권장",
    sub: '"어? 나 지갑 안 가져왔나?" 연기는 이미 알고 있습니다',
  },
  {
    icon: "🎭",
    text: "후배 억텐 맞추기 금지",
    sub: "후배의 리액션은 진심이 아닐 수 있습니다. 오해 금지.",
  },
];

function CooperationSection() {
  const [checked, setChecked] = useState<Set<number>>(new Set());

  const toggle = useCallback((i: number) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(i)) {
        next.delete(i);
      } else {
        next.add(i);
        if (next.size === cooperations.length) {
          setTimeout(() => {
            toast("🎉 전 항목 동의 완료!", {
              description: "선배님의 협조 의지를 확인했습니다. 심사 결과는 추후 통보됩니다.",
              duration: 4000,
            });
          }, 300);
        }
      }
      return next;
    });
  }, []);

  const allChecked = checked.size === cooperations.length;

  return (
    <section className="py-24 px-4">
      <div
        className="max-w-4xl mx-auto rounded-3xl p-8 md:p-12 relative overflow-hidden"
        style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        {/* 배경 글로우 */}
        <div
          className="absolute top-0 right-0 w-64 h-64 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(0,212,170,0.08) 0%, transparent 70%)",
          }}
        />

        <ScrollReveal className="mb-10">
          <span className="badge-mint mb-4 inline-block">협조사항</span>
          <h2
            className="text-4xl md:text-5xl font-black tracking-tight mt-3"
            style={{ letterSpacing: "-0.03em" }}
          >
            선배님께 드리는
            <br />
            <span style={{ color: "#00d4aa" }}>안내사항</span>
          </h2>
          <p
            className="mt-4 text-base"
            style={{ color: "rgba(240,240,245,0.45)" }}
          >
            아래 항목을 숙지하고 동의해주시기 바랍니다.
          </p>
        </ScrollReveal>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="space-y-3"
        >
          {cooperations.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              onClick={() => toggle(i)}
              className="flex items-start gap-4 p-4 md:p-5 rounded-2xl transition-all duration-200 cursor-pointer select-none"
              style={{
                background: checked.has(i)
                  ? "rgba(0,212,170,0.07)"
                  : "rgba(255,255,255,0.03)",
                border: checked.has(i)
                  ? "1px solid rgba(0,212,170,0.25)"
                  : "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {/* 체크박스 */}
              <div
                className="flex-shrink-0 w-6 h-6 rounded-md flex items-center justify-center mt-0.5 transition-all duration-200"
                style={{
                  background: checked.has(i)
                    ? "#00d4aa"
                    : "rgba(255,255,255,0.06)",
                  border: checked.has(i)
                    ? "none"
                    : "1.5px solid rgba(255,255,255,0.2)",
                }}
              >
                {checked.has(i) && (
                  <motion.svg
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.2, ease: EASE_OUT }}
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M2.5 7L5.5 10L11.5 4"
                      stroke="#0a0a0f"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </motion.svg>
                )}
              </div>

              {/* 아이콘 */}
              <span className="text-xl flex-shrink-0">{item.icon}</span>

              {/* 텍스트 */}
              <div className="flex-1 min-w-0">
                <p
                  className="font-semibold text-sm md:text-base leading-snug"
                  style={{
                    color: checked.has(i)
                      ? "#f0f0f5"
                      : "rgba(240,240,245,0.85)",
                    textDecoration: checked.has(i) ? "none" : "none",
                  }}
                >
                  {item.text}
                </p>
                <p
                  className="text-xs mt-1"
                  style={{ color: "rgba(240,240,245,0.35)" }}
                >
                  {item.sub}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 전체 동의 상태 */}
        <AnimatePresence>
          {allChecked && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              className="mt-6 p-4 rounded-2xl text-center"
              style={{
                background: "rgba(0,212,170,0.1)",
                border: "1px solid rgba(0,212,170,0.3)",
              }}
            >
              <p className="font-bold" style={{ color: "#00d4aa" }}>
                ✅ 모든 협조사항에 동의하셨습니다. 선배님의 자세가 훌륭합니다.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   5. 최종 심사 카드
───────────────────────────────────────────── */
const verdicts = [
  {
    label: "1차 합격",
    emoji: "🎉",
    color: "#00d4aa",
    bg: "rgba(0,212,170,0.12)",
    border: "rgba(0,212,170,0.35)",
    messages: [
      "🎉 1차 합격을 축하드립니다! 단, 최종 합격은 당일 후배 컨디션에 따라 변경될 수 있습니다.",
      "🎊 선배님, 합격입니다! 기쁨은 잠시 후 식사 당일까지만 유효합니다.",
      "✅ 통과! 하지만 방심은 금물. 후배 심사는 24시간 진행됩니다.",
    ],
  },
  {
    label: "재수강 권장",
    emoji: "📚",
    color: "#f59e0b",
    bg: "rgba(245,158,11,0.1)",
    border: "rgba(245,158,11,0.3)",
    messages: [
      "📚 아쉽지만 재수강을 권장합니다. 협조사항 재숙지 후 재신청 바랍니다.",
      "🔄 이번엔 조금 부족했어요. 다음 기회를 노려보세요. 언제가 될지는 모르겠지만요.",
      "📖 재수강 권장. 특히 군대 얘기 자제 항목을 중점적으로 복습하세요.",
    ],
  },
  {
    label: "가능성 있음",
    emoji: "🌱",
    color: "#818cf8",
    bg: "rgba(129,140,248,0.1)",
    border: "rgba(129,140,248,0.3)",
    messages: [
      "🌱 가능성은 있습니다. 꾸준한 자기계발을 통해 후배 기준에 부합하도록 노력해주세요.",
      "💫 잠재력이 보입니다. 계속 지켜보겠습니다. 지켜보는 건 후배가 합니다.",
      "🌿 성장 가능성 확인. 다음 분기 재평가 예정입니다. 일정은 후배가 정합니다.",
    ],
  },
];

function VerdictSection() {
  const handleVerdict = (verdict: (typeof verdicts)[0]) => {
    const msg =
      verdict.messages[Math.floor(Math.random() * verdict.messages.length)];
    toast(msg, {
      duration: 5000,
    });
  };

  return (
    <section className="py-24 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <ScrollReveal className="mb-10">
          <span className="badge-mint mb-4 inline-block">최종 심사</span>
          <h2
            className="text-4xl md:text-5xl font-black tracking-tight mt-3"
            style={{ letterSpacing: "-0.03em" }}
          >
            심사 결과 조회
          </h2>
        </ScrollReveal>

        {/* 메인 심사 카드 */}
        <ScrollReveal>
          <div
            className="rounded-3xl p-8 md:p-10 mb-8 relative overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(0,212,170,0.08) 0%, rgba(0,184,217,0.05) 100%)",
              border: "1px solid rgba(0,212,170,0.2)",
            }}
          >
            {/* 장식 요소 */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-12"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(0,212,170,0.5), transparent)",
              }}
            />
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full -translate-y-1"
              style={{ background: "#00d4aa" }}
            />

            <div
              className="text-5xl mb-5 mx-auto w-20 h-20 flex items-center justify-center rounded-3xl"
              style={{ background: "rgba(0,212,170,0.1)" }}
            >
              ⚖️
            </div>

            <p
              className="text-base md:text-lg font-medium leading-relaxed mb-2"
              style={{ color: "rgba(240,240,245,0.75)" }}
            >
              본 식사권은 후배 내부 심사를 통해
            </p>
            <p className="text-xl md:text-2xl font-black mb-2">
              <span style={{ color: "#00d4aa" }}>제한적으로</span> 제공됩니다.
            </p>
            <p
              className="text-sm"
              style={{ color: "rgba(240,240,245,0.35)" }}
            >
              심사 기준은 후배 재량에 따르며, 외부에 공개되지 않습니다.
            </p>
          </div>
        </ScrollReveal>

        {/* 심사 버튼들 */}
        <ScrollReveal>
          <p
            className="text-sm mb-5"
            style={{ color: "rgba(240,240,245,0.4)" }}
          >
            선배님의 현재 상태를 선택하세요
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {verdicts.map((v) => (
              <motion.button
                key={v.label}
                onClick={() => handleVerdict(v)}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.18, ease: EASE_OUT }}
                className="px-6 py-3 rounded-2xl font-bold text-sm transition-all duration-200"
                style={{
                  background: v.bg,
                  border: `1px solid ${v.border}`,
                  color: v.color,
                }}
              >
                {v.emoji} {v.label}
              </motion.button>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   6. 푸터
───────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="py-12 px-4 mt-8">
      <hr className="divider mb-10" />
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span
                className="font-black text-lg tracking-tight"
                style={{ color: "#00d4aa" }}
              >
                후배 인권위원회
              </span>
              <span
                className="text-xs px-2 py-0.5 rounded-full font-semibold"
                style={{
                  background: "rgba(0,212,170,0.1)",
                  color: "#00d4aa",
                  border: "1px solid rgba(0,212,170,0.2)",
                }}
              >
                공식
              </span>
            </div>
            <p
              className="text-sm"
              style={{ color: "rgba(240,240,245,0.35)" }}
            >
              후배 인권위원회 공식 인증 프로젝트
            </p>
          </div>

          <div className="text-center md:text-right">
            <p
              className="text-xs"
              style={{ color: "rgba(240,240,245,0.25)" }}
            >
              © 2025 후배 인권위원회. 모든 권리는 후배에게 있습니다.
            </p>
            <p
              className="text-xs mt-1"
              style={{ color: "rgba(240,240,245,0.18)" }}
            >
              본 페이지는 패러디 목적으로 제작되었으며, 실제 선배님을 비하하는
              의도가 없습니다. (아마도)
            </p>
          </div>
        </div>

        {/* 하단 배지 */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {[
            "🏆 후배 권익 보호 인증",
            "📋 TMI 방지 시스템 탑재",
            "💳 계산 자동화 권장",
            "🎖️ MZ 감성 공식 인증",
          ].map((badge) => (
            <span
              key={badge}
              className="text-xs px-3 py-1.5 rounded-full"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.07)",
                color: "rgba(240,240,245,0.35)",
              }}
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────────
   네비게이션 바
───────────────────────────────────────────── */
function Navbar() {
  const handleApply = () => {
    toast("📋 신청서 검토 중...", {
      description: "후배 내부 심사 시스템이 가동되었습니다.",
      duration: 4000,
    });
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: EASE_OUT }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-3"
      style={{
        background: "rgba(10,10,15,0.8)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-lg font-black tracking-tight" style={{ color: "#00d4aa" }}>
            밥약.kr
          </span>
          <span
            className="hidden sm:inline text-xs px-2 py-0.5 rounded-full font-semibold"
            style={{
              background: "rgba(0,212,170,0.1)",
              color: "#00d4aa",
              border: "1px solid rgba(0,212,170,0.2)",
            }}
          >
            BETA
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() =>
              document
                .getElementById("conditions")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="hidden sm:block text-sm font-medium px-4 py-2 rounded-full transition-all duration-200"
            style={{
              color: "rgba(240,240,245,0.6)",
              background: "transparent",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.color = "#f0f0f5";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.color =
                "rgba(240,240,245,0.6)";
            }}
          >
            진행 조건
          </button>
          <button
            onClick={handleApply}
            className="text-sm font-bold px-5 py-2 rounded-full transition-all duration-200"
            style={{
              background: "rgba(0,212,170,0.15)",
              color: "#00d4aa",
              border: "1px solid rgba(0,212,170,0.3)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background =
                "rgba(0,212,170,0.25)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background =
                "rgba(0,212,170,0.15)";
            }}
          >
            신청하기
          </button>
        </div>
      </div>
    </motion.nav>
  );
}

/* ─────────────────────────────────────────────
   메인 페이지
───────────────────────────────────────────── */
export default function Home() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "#0a0a0f", color: "#f0f0f5" }}
    >
      <Navbar />
      <HeroSection />

      <hr className="divider" />
      <IntroSection />

      <hr className="divider" />
      <ConditionsSection />

      <hr className="divider" />
      <CooperationSection />

      <hr className="divider" />
      <VerdictSection />

      <Footer />
    </div>
  );
}
