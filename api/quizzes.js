import fs from "fs";
import path from "path";

export default function handler(req, res) {
  try {
    // Путь к твоему db.json
    const filePath = path.join(process.cwd(), "data", "db.json");
    const jsonData = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(jsonData);

    // Только quizzes возвращаем
    res.status(200).json(data.quizzes);
  } catch (error) {
    console.error("Ошибка при чтении db.json:", error);
    res.status(500).json({ message: "Ошибка сервера" });
  }
}
