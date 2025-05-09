export default function Home() {
  return (
    <div className="container mx-auto px-4 max-w-4xl text-center">
      <div className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 font-heading">
          Технические работы
        </h2>
        <p className="text-xl mb-8">
          В настоящее время мы устанавливаем обновление 3.0
        </p>
        <div className="mb-12 p-6 bg-white/5 rounded-lg">
          <p className="text-lg mb-4">
            Скоро мы вернемся с новыми возможностями и улучшениями!
          </p>
          <p className="text-lg">
            Пока вы можете следить за нашими обновлениями в социальных сетях:
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <a
            href="https://t.me/gamio_n"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
          >

            Telegram
          </a>
          <a
            href="https://vk.com/gamio_ru"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
          >

            ВКонтакте
          </a>
        </div>
      </div>

      <footer className="mt-auto py-4 text-center text-sm opacity-75">
        &copy; {new Date().getFullYear()} Gamio AI. Все права защищены.
      </footer>
    </div>
  );
}
