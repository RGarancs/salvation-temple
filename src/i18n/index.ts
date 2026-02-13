import ru from "./ru.json";
import en from "./en.json";
import lv from "./lv.json";

export type Language = "ru" | "en" | "lv";

export const translations: Record<Language, Record<string, string>> = { ru, en, lv };
