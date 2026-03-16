import express from "express";
import cors from "cors";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

const DATA_DIR = path.join(__dirname, "data");
const SETTINGS_FILE = path.join(DATA_DIR, "settings.json");
const APPLICATIONS_FILE = path.join(DATA_DIR, "applications.json");

app.use(cors());
app.use(express.json({ limit: "1mb" }));
app.use(express.static(path.join(__dirname, "public")));

async function ensureFiles() {
  await fs.mkdir(DATA_DIR, { recursive: true });

  try { await fs.access(SETTINGS_FILE); }
  catch {
    await fs.writeFile(
      SETTINGS_FILE,
      JSON.stringify({
        centerName: "FLEPP имени профессора Фузайлова",
        sloganEn: "FLEPP — Learn. Develop. Lead.",
        sloganRu: "FLEPP (ФЛЭПП) — Учись. Развивайся. Лидируй.",
        heroTitle: "Официальный образовательный центр языков и базовых предметов.",
        heroText: "Современный центр с филиалами в нескольких городах, сильной командой преподавателей, понятной системой записи и курсами по языкам, IELTS и школьным предметам.",
        directorPhone: "+992927360045",
        whatsapp: "+992079033113",
        telegram: "https://t.me/FLEPPPCENTER",
        instagram: "https://www.instagram.com/flepp_fuzaylov",
        workTime: "Понедельник — Суббота, 08:00 — 18:00",
        adminPin: "1234"
      }, null, 2),
      "utf-8"
    );
  }

  try { await fs.access(APPLICATIONS_FILE); }
  catch { await fs.writeFile(APPLICATIONS_FILE, "[]", "utf-8"); }
}

async function readJson(file, fallback) {
  try {
    return JSON.parse(await fs.readFile(file, "utf-8"));
  } catch {
    return fallback;
  }
}

async function writeJson(file, value) {
  await fs.writeFile(file, JSON.stringify(value, null, 2), "utf-8");
}

async function sendTelegramNotification(application) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) return { sent: false, reason: "Telegram env vars not set" };

  const text =
    "Новая заявка FLEPP\n\n" +
    `Имя: ${application.name}\n` +
    `Телефон: ${application.phone}\n` +
    `Курс: ${application.course || "не указан"}\n` +
    `Филиал: ${application.branch || "не указан"}\n` +
    `Время: ${application.createdAt}`;

  const url = `https://api.telegram.org/bot${token}/sendMessage`;

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text
    })
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Telegram error: ${response.status} ${body}`);
  }

  return { sent: true };
}

app.get("/api/settings", async (req, res) => {
  const settings = await readJson(SETTINGS_FILE, {});
  res.json(settings);
});

app.put("/api/settings", async (req, res) => {
  const current = await readJson(SETTINGS_FILE, {});
  const next = { ...current, ...req.body };
  await writeJson(SETTINGS_FILE, next);
  res.json({ ok: true, settings: next });
});

app.get("/api/applications", async (req, res) => {
  const items = await readJson(APPLICATIONS_FILE, []);
  res.json(items);
});

app.post("/api/applications", async (req, res) => {
  const { name, phone, course, branch } = req.body || {};

  if (!name || !phone) {
    return res.status(400).json({ ok: false, error: "Name and phone are required" });
  }

  const items = await readJson(APPLICATIONS_FILE, []);
  const application = {
    id: Date.now().toString(),
    name: String(name).trim(),
    phone: String(phone).trim(),
    course: course ? String(course).trim() : "",
    branch: branch ? String(branch).trim() : "",
    createdAt: new Date().toLocaleString("ru-RU")
  };

  items.unshift(application);
  await writeJson(APPLICATIONS_FILE, items);

  let telegram = { sent: false, reason: "not attempted" };
  try {
    telegram = await sendTelegramNotification(application);
  } catch (e) {
    telegram = { sent: false, reason: e.message };
  }

  res.json({ ok: true, application, telegram });
});

app.delete("/api/applications/:id", async (req, res) => {
  const items = await readJson(APPLICATIONS_FILE, []);
  const next = items.filter((item) => item.id !== req.params.id);
  await writeJson(APPLICATIONS_FILE, next);
  res.json({ ok: true });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

await ensureFiles();

app.listen(PORT, () => {
  console.log(`FLEPP site running on http://localhost:${PORT}`);
});
