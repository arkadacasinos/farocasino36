import Image from 'next/image'

const REF_URL = 'https://comboflo.site/aetf3u2q9u'

export default function HomePage() {
  return (
    <div className="fr7x-layout flex flex-col lg:flex-row min-h-screen bg-[#121316] text-[#e6e8ec]">
      {/* Mobile Sticky Top Header */}
      <header className="lg:hidden sticky top-0 z-30 flex items-center justify-between px-4 py-3 bg-[#141519] border-b border-white/5">
        <div className="flex items-center gap-3">
          <a
            href="#fr7x-nav-drawer"
            className="p-2 text-gray-300 hover:text-white rounded-lg bg-white/5 focus:outline-none"
            aria-label="Открыть меню Faro Casino"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </a>
          <a href={REF_URL} className="flex items-center gap-2">
            <span className="text-[#f5ba38] font-black text-xl tracking-wider flex items-center gap-1.5">
              <svg className="w-6 h-6 text-[#f5ba38]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2.5 19h19l-2-12-5 5-2.5-7-2.5 7-5-5-2 12zm2.1-2l1.2-7.2 3.2 3.2 3-8.4 3 8.4 3.2-3.2 1.2 7.2H4.6z" />
              </svg>
              FARO
            </span>
          </a>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={REF_URL}
            className="fr7x-dark-btn text-xs font-semibold px-3.5 py-2 rounded-full"
          >
            Вход
          </a>
          <a
            href={REF_URL}
            className="fr7x-gold-btn text-xs font-bold px-4 py-2 rounded-full"
          >
            Регистрация
          </a>
        </div>
      </header>

      {/* Mobile Drawer (Pure CSS :target) */}
      <div id="fr7x-nav-drawer" className="fixed inset-0 z-50">
        <a
          href="#!"
          className="fixed inset-0 bg-black/75 transition-opacity"
          aria-label="Закрыть меню"
        />
        <div className="relative w-72 max-w-[85vw] bg-[#141519] border-r border-white/10 flex flex-col p-4 z-10 overflow-y-auto">
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <a href={REF_URL} className="flex items-center gap-2">
              <svg className="w-6 h-6 text-[#f5ba38]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2.5 19h19l-2-12-5 5-2.5-7-2.5 7-5-5-2 12zm2.1-2l1.2-7.2 3.2 3.2 3-8.4 3 8.4 3.2-3.2 1.2 7.2H4.6z" />
              </svg>
              <span className="text-[#f5ba38] font-black text-xl tracking-wider">FARO</span>
            </a>
            <a
              href="#!"
              className="p-2 text-gray-400 hover:text-white rounded-lg bg-white/5"
              aria-label="Закрыть меню"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </a>
          </div>

          <div className="my-4">
            <a
              href={REF_URL}
              className="flex items-center justify-between p-3 rounded-2xl bg-[#1c1e24] border border-[#f5ba38]/30"
            >
              <div>
                <p className="text-xs font-bold text-white">Рулетка удачи</p>
                <div className="flex items-center gap-1.5 text-[11px] text-[#f5ba38] mt-1">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" strokeWidth="2" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6l4 2" />
                  </svg>
                  <span className="font-mono font-bold">02:02:22</span>
                </div>
              </div>
              <div className="w-10 h-10 relative rounded-full overflow-hidden shrink-0">
                <Image
                  src="/images/roulette-wheel.png"
                  alt="Рулетка удачи"
                  fill
                  className="object-cover"
                  sizes="40px"
                />
              </div>
            </a>
          </div>

          <nav className="flex flex-col gap-1">
            <a href={REF_URL} className="fr7x-nav-link text-white bg-white/5">
              <svg className="w-4 h-4 text-[#f5ba38]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
              <span>Бонусы</span>
            </a>
            <a href={REF_URL} className="fr7x-nav-link">
              <svg className="w-4 h-4 text-[#f5ba38]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span>Магазин</span>
            </a>
            <a href={REF_URL} className="fr7x-nav-link">
              <svg className="w-4 h-4 text-[#f5ba38]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="9" strokeWidth={2} />
                <circle cx="12" cy="12" r="3" strokeWidth={2} />
              </svg>
              <span>Миссии</span>
            </a>
            <a href={REF_URL} className="fr7x-nav-link">
              <svg className="w-4 h-4 text-[#f5ba38]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Гонка рефералов</span>
            </a>
            <a href={REF_URL} className="fr7x-nav-link">
              <svg className="w-4 h-4 text-[#f5ba38]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
              <span>Сундуки</span>
            </a>
            <a href={REF_URL} className="fr7x-nav-link">
              <svg className="w-4 h-4 text-[#f5ba38]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" strokeWidth={2} />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2a10 10 0 1010 10" />
              </svg>
              <span>Умножение баланса</span>
            </a>
            <a href={REF_URL} className="fr7x-nav-link">
              <svg className="w-4 h-4 text-[#f5ba38]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="3" y="4" width="18" height="18" rx="2" strokeWidth={2} />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 2v4M8 2v4M3 10h18" />
              </svg>
              <span>Шабаш Хэллоуина</span>
            </a>
            <a href={REF_URL} className="fr7x-nav-link">
              <svg className="w-4 h-4 text-[#f5ba38]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span>Реферальная программа</span>
            </a>
          </nav>
        </div>
      </div>

      {/* Desktop Left Sidebar Rail */}
      <aside className="fr7x-sidebar hidden lg:flex">
        {/* Top Logo and Back Button */}
        <div className="flex items-center gap-2 px-2 py-2 mb-2">
          <a
            href={REF_URL}
            className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
            aria-label="Назад"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </a>
          <a href={REF_URL} className="flex items-center gap-2">
            <svg className="w-7 h-7 text-[#f5ba38]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M2.5 19h19l-2-12-5 5-2.5-7-2.5 7-5-5-2 12zm2.1-2l1.2-7.2 3.2 3.2 3-8.4 3 8.4 3.2-3.2 1.2 7.2H4.6z" />
            </svg>
            <span className="text-[#f5ba38] font-black text-2xl tracking-wider">FARO</span>
          </a>
        </div>

        {/* Roulette of Luck Card */}
        <a
          href={REF_URL}
          className="flex items-center justify-between p-3 my-2 rounded-2xl bg-[#1c1e24] border border-[#f5ba38]/30 hover:border-[#f5ba38]/60 transition-colors group"
        >
          <div>
            <p className="text-xs font-bold text-white group-hover:text-[#f5ba38] transition-colors">
              Рулетка удачи
            </p>
            <div className="flex items-center gap-1.5 text-[11px] text-[#f5ba38] mt-1">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" strokeWidth="2" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6l4 2" />
              </svg>
              <span className="font-mono font-bold">02:02:22</span>
            </div>
          </div>
          <div className="w-11 h-11 relative rounded-full overflow-hidden shrink-0 shadow-md shadow-black/40">
            <Image
              src="/images/roulette-wheel.png"
              alt="Рулетка удачи в Faro Casino"
              fill
              className="object-cover group-hover:scale-105 transition-transform"
              sizes="44px"
            />
          </div>
        </a>

        {/* Sidebar Nav Links */}
        <nav className="flex flex-col gap-1 mt-2 flex-1">
          <a href={REF_URL} className="fr7x-nav-link text-white bg-white/5">
            <svg className="w-4 h-4 text-[#f5ba38]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
            </svg>
            <span>Бонусы</span>
          </a>
          <a href={REF_URL} className="fr7x-nav-link">
            <svg className="w-4 h-4 text-[#f5ba38]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span>Магазин</span>
          </a>
          <a href={REF_URL} className="fr7x-nav-link">
            <svg className="w-4 h-4 text-[#f5ba38]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="9" strokeWidth={2} />
              <circle cx="12" cy="12" r="3" strokeWidth={2} />
            </svg>
            <span>Миссии</span>
          </a>
          <a href={REF_URL} className="fr7x-nav-link">
            <svg className="w-4 h-4 text-[#f5ba38]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Гонка рефералов</span>
          </a>
          <a href={REF_URL} className="fr7x-nav-link">
            <svg className="w-4 h-4 text-[#f5ba38]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
            <span>Сундуки</span>
          </a>
          <a href={REF_URL} className="fr7x-nav-link">
            <svg className="w-4 h-4 text-[#f5ba38]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" strokeWidth={2} />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2a10 10 0 1010 10" />
            </svg>
            <span>Умножение баланса</span>
          </a>
          <a href={REF_URL} className="fr7x-nav-link">
            <svg className="w-4 h-4 text-[#f5ba38]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <rect x="3" y="4" width="18" height="18" rx="2" strokeWidth={2} />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 2v4M8 2v4M3 10h18" />
            </svg>
            <span>Шабаш Хэллоуина</span>
          </a>
          <a href={REF_URL} className="fr7x-nav-link">
            <svg className="w-4 h-4 text-[#f5ba38]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span>Реферальная прог...</span>
          </a>
        </nav>

        {/* Language selector */}
        <div className="pt-3 border-t border-white/5">
          <a
            href={REF_URL}
            className="flex items-center justify-between px-3 py-2 rounded-xl bg-white/5 text-xs text-gray-300 hover:text-white"
          >
            <div className="flex items-center gap-2">
              <span className="w-4 h-3 rounded-xs overflow-hidden flex flex-col justify-between shrink-0 shadow-xs">
                <span className="h-1 bg-white w-full" />
                <span className="h-1 bg-blue-600 w-full" />
                <span className="h-1 bg-red-600 w-full" />
              </span>
              <span>Русский</span>
            </div>
            <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="fr7x-main flex-1 flex flex-col">
        {/* Desktop Top Header */}
        <div className="fr7x-header hidden lg:flex">
          <a
            href={REF_URL}
            className="fr7x-dark-btn text-sm font-semibold px-6 py-2.5 rounded-full"
          >
            Вход
          </a>
          <a
            href={REF_URL}
            className="fr7x-gold-btn text-sm font-bold px-7 py-2.5 rounded-full shadow-md shadow-[#f5ba38]/10"
          >
            Регистрация
          </a>
        </div>

        {/* Content Container */}
        <div className="p-4 md:p-6 lg:p-8 max-w-[1400px] w-full mx-auto flex flex-col gap-6">
          {/* Main Hero Banner: Шабаш Хэллоуина */}
          <section className="fr7x-gold-card relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#17181d] via-[#1c1d23] to-[#121316] p-6 md:p-10 lg:p-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-7 lg:col-span-7 flex flex-col gap-3 z-10">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-black text-[#f5ba38] leading-tight tracking-tight">
                  Шабаш Хэллоуина
                  <br />
                  <span className="text-white">21 день подарков</span>
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-gray-300 font-medium">
                  Забирай награды на <span className="text-white font-bold">139 500 ₽</span> и{' '}
                  <span className="text-[#f5ba38] font-bold">1 145 FS</span>
                </p>
                <div className="mt-4 sm:mt-6 flex items-center gap-4">
                  <a
                    href={REF_URL}
                    className="fr7x-gold-btn text-sm sm:text-base font-extrabold px-8 sm:px-10 py-3 sm:py-3.5 rounded-full shadow-lg shadow-[#f5ba38]/20"
                  >
                    Забрать
                  </a>
                </div>

                {/* Carousel Pagination Dots */}
                <div className="flex items-center gap-2 mt-6">
                  <span className="w-2 h-2 rounded-full bg-white/20" />
                  <span className="w-4 h-2 rounded-full bg-[#f5ba38]" />
                  <span className="w-2 h-2 rounded-full bg-white/20" />
                </div>
              </div>

              {/* Witch & Coins Graphic */}
              <div className="md:col-span-5 lg:col-span-5 relative flex justify-center md:justify-end">
                <div className="relative w-full max-w-[340px] sm:max-w-[380px] md:max-w-[420px] h-64 sm:h-72 md:h-80 lg:h-88">
                  <Image
                    src="/images/hero-witch.png"
                    alt="Шабаш Хэллоуина в Faro Casino"
                    fill
                    priority
                    className="object-contain [mask-image:radial-gradient(ellipse_at_center,black_62%,transparent_98%)] drop-shadow-[0_10px_30px_rgba(245,186,56,0.2)]"
                    sizes="(max-width: 768px) 340px, 420px"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Three Feature Cards Row */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
            {/* Card 1: Депозитный стрик */}
            <div className="fr7x-gold-card rounded-2xl bg-[#17181d] p-5 flex flex-col justify-between relative overflow-hidden group">
              <div>
                <h3 className="text-base lg:text-lg font-bold text-white group-hover:text-[#f5ba38] transition-colors">
                  Депозитный стрик
                </h3>
                <p className="text-xs text-gray-400 mt-1 max-w-[200px]">
                  Чем длиннее серия депозитов, тем ценнее призы
                </p>
                <div className="mt-4">
                  <a
                    href={REF_URL}
                    className="fr7x-gold-btn inline-block text-xs font-bold px-4 py-2 rounded-full"
                  >
                    Начать стрик
                  </a>
                </div>
              </div>

              {/* Streak Steps Track */}
              <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-gray-400">
                <div className="flex items-center gap-1.5 font-bold">
                  <span className="w-6 h-6 rounded-full bg-[#f5ba38]/20 text-[#f5ba38] flex items-center justify-center text-[10px]">
                    ★
                  </span>
                  <span>4</span>
                  <span>5</span>
                  <span>6</span>
                </div>
                <div className="flex items-center gap-1 text-[#f5ba38]">
                  <span>🎁</span>
                  <span>🎁</span>
                </div>
              </div>

              {/* Image corner */}
              <div className="absolute right-1 top-2 w-32 h-32 opacity-95 pointer-events-none">
                <Image
                  src="/images/deposit-streak.png"
                  alt="Депозитный стрик Faro Casino"
                  fill
                  className="object-contain [mask-image:radial-gradient(circle_at_center,black_65%,transparent_98%)]"
                  sizes="128px"
                />
              </div>
            </div>

            {/* Card 2: Faro Casino App */}
            <div className="fr7x-gold-card rounded-2xl bg-[#17181d] p-5 flex flex-col justify-between relative overflow-hidden group">
              <div>
                <h3 className="text-base lg:text-lg font-bold text-white group-hover:text-[#f5ba38] transition-colors">
                  Faro Casino App
                </h3>
                <p className="text-xs text-gray-400 mt-1 max-w-[200px]">
                  Скачивайте мобильное приложение и получайте эксклюзивные бонусы
                </p>
                <div className="flex items-center gap-1.5 text-[11px] text-[#f5ba38] mt-2 font-medium">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.551 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.997-3.4582c.1011-.1751.0411-.3993-.134-.5004-.1751-.1011-.3993-.0411-.5004.134l-2.024 3.5049c-1.562-.7146-3.309-1.1235-5.2201-1.1235-1.9111 0-3.6581.4089-5.2201 1.1235l-2.024-3.5049c-.1011-.1751-.3253-.2351-.5004-.134-.1751.1011-.2351.3253-.134.5004l1.997 3.4582c-3.4731 1.8841-5.8341 5.378-6.1381 9.4796h23.9022c-.304-4.1016-2.665-7.5955-6.1381-9.4796" />
                  </svg>
                  <span>Доступно для Android</span>
                </div>
                <div className="mt-4">
                  <a
                    href={REF_URL}
                    className="fr7x-gold-btn inline-block text-xs font-bold px-5 py-2 rounded-full"
                  >
                    Скачать
                  </a>
                </div>
              </div>

              {/* Image corner */}
              <div className="absolute right-0 bottom-0 w-32 h-32 opacity-95 pointer-events-none">
                <Image
                  src="/images/casino-app.png"
                  alt="Мобильное приложение Faro Casino"
                  fill
                  className="object-contain [mask-image:radial-gradient(circle_at_center,black_65%,transparent_98%)]"
                  sizes="128px"
                />
              </div>
            </div>

            {/* Card 3: Миссии */}
            <div className="fr7x-gold-card rounded-2xl bg-[#17181d] p-5 flex flex-col justify-between relative overflow-hidden group">
              <div>
                <h3 className="text-base lg:text-lg font-bold text-white group-hover:text-[#f5ba38] transition-colors">
                  Миссии
                </h3>
                <p className="text-xs text-gray-400 mt-1 max-w-[210px]">
                  Выполняйте задания, собирайте Faro Coins и обменивайте их на награды
                </p>
                <div className="mt-3 flex items-center justify-between text-xs">
                  <span className="text-gray-300 font-medium">Завершите 3 депозита</span>
                  <span className="bg-[#f5ba38]/15 text-[#f5ba38] font-bold px-2 py-0.5 rounded-full text-[10px]">
                    +12 Faro Coins
                  </span>
                </div>
                <div className="mt-4">
                  <a
                    href={REF_URL}
                    className="fr7x-dark-btn block text-center text-xs font-semibold py-2 rounded-full hover:bg-white/10"
                  >
                    Начать
                  </a>
                </div>
              </div>

              {/* Image corner */}
              <div className="absolute right-1 top-2 w-32 h-32 opacity-95 pointer-events-none">
                <Image
                  src="/images/missions-target.png"
                  alt="Миссии и награды Faro Casino"
                  fill
                  className="object-contain [mask-image:radial-gradient(circle_at_center,black_65%,transparent_98%)]"
                  sizes="128px"
                />
              </div>
            </div>
          </section>

          {/* SEO Text Sheet (Простыня текста с ключевыми фразами) */}
          <article className="mt-6 p-6 sm:p-8 md:p-10 rounded-3xl bg-[#16171c] border border-white/5 shadow-xl">
            <header className="mb-6 border-b border-white/10 pb-4">
              <span className="text-xs uppercase tracking-widest font-extrabold text-[#f5ba38]">
                Официальный обзор клуба
              </span>
              <h2
                id="faro-casino-official"
                className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white mt-2 leading-snug"
              >
                Faro Casino официальный сайт и рабочее зеркало
              </h2>
            </header>

            <div className="flex flex-col gap-6 text-sm sm:text-[15px] leading-relaxed text-gray-300">
              <p>
                Добро пожаловать в игровой клуб <strong>Faro Casino</strong> — современное онлайн-казино с лицензионными слотами, быстрыми выплатами и щедрой бонусной программой. Если ваш основной домен временно недоступен, используйте проверенное <strong>Faro Casino зеркало</strong>, чтобы сохранить бесперебойный доступ к любимым автоматам. Надежное <strong>Faro Casino зеркало</strong> полностью синхронизировано с базой данных: ваш баланс, активированные бонусы и игровой статус остаются в полной безопасности. Переходите на <strong>Faro Casino официальный сайт</strong> или используйте актуальное альтернативное зеркало для мгновенного входа в личный кабинет в любое время суток.
              </p>

              <div>
                <h2
                  id="faro-casino-mirror"
                  className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3"
                >
                  Фаро Казино зеркало рабочее: безопасный вход и Faro Casino играть
                </h2>
                <p>
                  Многие гемблеры выбирают <strong>Фаро Казино играть</strong> на реальные деньги благодаря честной отдаче слотов и моментальному выводу выигрышей. Когда провайдеры ограничивают соединение, на помощь приходит официальное <strong>Фаро Казино зеркало</strong>. Актуальное <strong>Фаро Казино зеркало рабочее</strong> позволяет запускать любые игровые аппараты, карточные столы и live-рулетку без задержек и без использования сторонних VPN-сервисов. В клубе <strong>Фаро Казино онлайн</strong> вас ждут регулярные турниры, щедрый кэшбэк и накопительные джекпоты. Начните в <strong>Faro Casino играть</strong> прямо сейчас с компьютера или любого мобильного устройства.
                </p>
              </div>

              <div>
                <h2
                  id="faro-casino-slots"
                  className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3"
                >
                  Фаро Казино играть онлайн: лицензионные слоты и официальный сайт Faro Casino
                </h2>
                <p>
                  Посещая <strong>Faro Казино</strong>, каждый пользователь получает доступ к тысячам сертифицированных эмуляторов от мировых разработчиков. На платформе <strong>Faro Casino официальный</strong> ресурс гарантирует конфиденциальность личных данных и прозрачные условия финансовых операций. Создание учетной записи занимает считанные секунды: введите e-mail, придумайте пароль и подтвердите согласие с правилами клуба. Авторизовавшись через <strong>Фаро Казино официальный сайт</strong>, вы сможете активировать приветственный бонус на первый депозит и получить пакет фриспинов для топовых слотов.
                </p>
              </div>

              <div>
                <h2
                  id="faro-casino-bonuses"
                  className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3"
                >
                  Фаро Казино официальный портал: бонусы, регистрация и Faro Казино
                </h2>
                <p>
                  Лицензированное <strong>Фаро Казино</strong> предоставляет круглосуточную поддержку игроков на русском языке. Администрация регулярно обновляет рабочие ссылки, поэтому <strong>Фаро Казино официальный</strong> портал, основной <strong>Фаро Казино официальный сайт</strong> и запасное зеркало <strong>Фаро Казино онлайн</strong> работают стабильно 24/7. Выбирайте <strong>Faro Casino официальный</strong> зал или безопасное <strong>Faro Казино</strong>, участвуйте в сезонных акциях и выводите свои выигрыши на банковские карты или популярные криптовалютные кошельки без скрытых комиссий.
                </p>
              </div>
            </div>

            {/* Quick Action Button within Article */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-white font-bold text-base">Готовы испытать удачу в Фаро Казино?</p>
                <p className="text-xs text-gray-400 mt-0.5">
                  Регистрация занимает меньше минуты. Получите до 150 000 ₽ + 250 FS на первый депозит!
                </p>
              </div>
              <a
                href={REF_URL}
                className="fr7x-gold-btn text-xs sm:text-sm font-bold px-8 py-3 rounded-full shrink-0 shadow-md shadow-[#f5ba38]/10"
              >
                Играть сейчас
              </a>
            </div>
          </article>

          {/* Footer with SEO Hashtag navigation chips */}
          <footer className="mt-4 pt-6 pb-12 border-t border-white/5 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <span className="text-xs uppercase tracking-wider text-gray-400 font-bold">
                Популярные разделы и теги
              </span>
              <div className="flex flex-wrap gap-2 text-xs">
                <a
                  href="#faro-casino-official"
                  className="px-3 py-1.5 rounded-lg bg-white/5 text-gray-300 hover:text-[#f5ba38] hover:bg-white/10 transition-colors"
                >
                  #faro-casino
                </a>
                <a
                  href="#faro-casino-official"
                  className="px-3 py-1.5 rounded-lg bg-white/5 text-gray-300 hover:text-[#f5ba38] hover:bg-white/10 transition-colors"
                >
                  #faro-casino-зеркало
                </a>
                <a
                  href="#faro-casino-mirror"
                  className="px-3 py-1.5 rounded-lg bg-white/5 text-gray-300 hover:text-[#f5ba38] hover:bg-white/10 transition-colors"
                >
                  #faro-casino-играть
                </a>
                <a
                  href="#faro-casino-slots"
                  className="px-3 py-1.5 rounded-lg bg-white/5 text-gray-300 hover:text-[#f5ba38] hover:bg-white/10 transition-colors"
                >
                  #faro-casino-официальный
                </a>
                <a
                  href="#faro-casino-official"
                  className="px-3 py-1.5 rounded-lg bg-white/5 text-gray-300 hover:text-[#f5ba38] hover:bg-white/10 transition-colors"
                >
                  #faro-casino-официальный-сайт
                </a>
                <a
                  href="#faro-casino-slots"
                  className="px-3 py-1.5 rounded-lg bg-white/5 text-gray-300 hover:text-[#f5ba38] hover:bg-white/10 transition-colors"
                >
                  #faro-казино
                </a>
                <a
                  href="#faro-casino-mirror"
                  className="px-3 py-1.5 rounded-lg bg-white/5 text-gray-300 hover:text-[#f5ba38] hover:bg-white/10 transition-colors"
                >
                  #фаро-казино
                </a>
                <a
                  href="#faro-casino-mirror"
                  className="px-3 py-1.5 rounded-lg bg-white/5 text-gray-300 hover:text-[#f5ba38] hover:bg-white/10 transition-colors"
                >
                  #фаро-казино-зеркало
                </a>
                <a
                  href="#faro-casino-mirror"
                  className="px-3 py-1.5 rounded-lg bg-white/5 text-gray-300 hover:text-[#f5ba38] hover:bg-white/10 transition-colors"
                >
                  #фаро-казино-зеркало-рабочее
                </a>
                <a
                  href="#faro-casino-slots"
                  className="px-3 py-1.5 rounded-lg bg-white/5 text-gray-300 hover:text-[#f5ba38] hover:bg-white/10 transition-colors"
                >
                  #фаро-казино-играть
                </a>
                <a
                  href="#faro-casino-mirror"
                  className="px-3 py-1.5 rounded-lg bg-white/5 text-gray-300 hover:text-[#f5ba38] hover:bg-white/10 transition-colors"
                >
                  #фаро-казино-онлайн
                </a>
                <a
                  href="#faro-casino-bonuses"
                  className="px-3 py-1.5 rounded-lg bg-white/5 text-gray-300 hover:text-[#f5ba38] hover:bg-white/10 transition-colors"
                >
                  #фаро-казино-официальный
                </a>
                <a
                  href="#faro-casino-slots"
                  className="px-3 py-1.5 rounded-lg bg-white/5 text-gray-300 hover:text-[#f5ba38] hover:bg-white/10 transition-colors"
                >
                  #фаро-казино-официальный-сайт
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 border-t border-white/5 pt-4">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full border border-red-500/40 text-red-400 font-bold text-[10px]">
                  18+
                </span>
                <span>© 2026 Faro Casino. Все права защищены. Ответственная игра.</span>
              </div>
              <p>Официальный сайт и актуальное зеркало Faro Casino онлайн.</p>
            </div>
          </footer>
        </div>
      </main>

      {/* Floating Chat Support Widget */}
      <a
        href={REF_URL}
        className="fixed bottom-5 right-5 z-40 w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#f5ba38] hover:bg-[#e5a822] text-[#121316] flex items-center justify-center shadow-2xl shadow-[#f5ba38]/30 transition-transform hover:scale-105 active:scale-95"
        aria-label="Поддержка Faro Casino онлайн"
      >
        <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12zM7 9h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z" />
        </svg>
      </a>
    </div>
  )
}
