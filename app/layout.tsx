import '@fontsource-variable/manrope'
import './globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="bg-[#121316]">
      <head>
        <title>Faro Casino Официальный Сайт | Фаро Казино Вход и Рабочее Зеркало Онлайн</title>
        <meta name="description" content="Faro Casino официальный сайт и актуальное рабочее зеркало на сегодня. Играйте в Фаро Казино онлайн: мгновенная регистрация, щедрые бонусы на депозит, лицензионные слоты и быстрый вывод выигрышей." />
        <link rel="canonical" href="https://farocasino36.vercel.app" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#121316" />
        <meta property="og:title" content="Faro Casino Официальный Сайт | Фаро Казино Вход и Рабочее Зеркало Онлайн" />
        <meta property="og:description" content="Faro Casino официальный сайт и актуальное рабочее зеркало на сегодня. Играйте в Фаро Казино онлайн: мгновенная регистрация, щедрые бонусы на депозит, лицензионные слоты и быстрый вывод выигрышей." />
        <meta property="og:url" content="https://farocasino36.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Faro Casino" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Faro Casino Официальный Сайт | Фаро Казино Вход и Рабочее Зеркало Онлайн" />
        <meta name="twitter:description" content="Faro Casino официальный сайт и актуальное рабочее зеркало на сегодня. Играйте в Фаро Казино онлайн: мгновенная регистрация, щедрые бонусы на депозит, лицензионные слоты и быстрый вывод выигрышей." />
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/icon.png" />
      </head>
      <body className="antialiased font-sans bg-[#121316] text-[#e6e8ec] min-h-screen selection:bg-[#f3b72c] selection:text-[#121316]">
        {children}
      </body>
    </html>
  )
}
