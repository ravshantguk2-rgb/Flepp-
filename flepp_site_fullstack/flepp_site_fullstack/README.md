# FLEPP Fullstack Site

Рабочая версия сайта с серверной формой.

## Что уже реализовано
- сайт с разделами: главная, программы, филиалы, команда, контакты, админ
- серверная форма заявок
- заявки сохраняются в `data/applications.json`
- настройки сайта сохраняются в `data/settings.json`
- админ-панель с PIN
- при наличии Telegram-переменных окружения заявка уходит в Telegram
- WhatsApp добавлен как быстрый переход по ссылке

## Установка
```bash
npm install
npm start
```

Откройте:
```bash
http://localhost:3000
```

## Telegram-бот
Чтобы заявки уходили в Telegram, задайте переменные окружения:

### Windows PowerShell
```powershell
$env:TELEGRAM_BOT_TOKEN="ВАШ_ТОКЕН"
$env:TELEGRAM_CHAT_ID="ВАШ_CHAT_ID"
npm start
```

### Linux / macOS
```bash
TELEGRAM_BOT_TOKEN="ВАШ_ТОКЕН" TELEGRAM_CHAT_ID="ВАШ_CHAT_ID" npm start
```

## WhatsApp API
Настоящий WhatsApp API требует отдельный Meta Business аккаунт, подтверждение номера и серверную интеграцию.
В этом проекте сделан практичный и рабочий вариант:
- серверная форма
- Telegram-уведомление
- прямая ссылка в WhatsApp

## Файлы
- `server.js` — backend на Express
- `public/` — frontend
- `data/settings.json` — настройки сайта
- `data/applications.json` — заявки

## Стартовый PIN админ-панели
`1234`
