// القاموس اللغوي (يحتوي فقط على المدن المتوفرة في البيانات)
const translations = {
    ar: {
        app_title: "إمساكية رمضان 1447 - موريتانيا",
        main_heading: "إمساكية رمضان 1447 هـ",
        sub_heading: "الجمهورية الإسلامية الموريتانية - 2026 م",
        timer_iftar: "المتبقي للإفطار",
        timer_imsak: "المتبقي للإمساك",
        timer_imsak_next: "المتبقي لإمساك الغد",
        p_imsak: "الإمساك",
        p_fajr: "الفجر",
        p_dhuhr: "الظهر",
        p_asr: "العصر",
        p_iftar: "الإفطار",
        p_isha: "العشاء",
        footer_text: "وزارة الشؤون الإسلامية والتعليم الأصلي",
        cities: {
            nouakchott: "نواكشوط",
            nema: "النعمة",
            aioun: "العيون",
            kiffa: "كيفه",
            kaedi: "كيهيدي",
            aleg: "ألاك",
			atar: "أطار",
			nouadhibou: "انواذيبو"
        }
    },
    fr: {
        app_title: "Calendrier Ramadan 1447 - Mauritanie",
        main_heading: "Calendrier Ramadan 1447 H",
        sub_heading: "République Islamique de Mauritanie - 2026",
        timer_iftar: "Temps pour Iftar",
        timer_imsak: "Temps pour Imsak",
        timer_imsak_next: "Imsak de demain dans",
        p_imsak: "Imsak",
        p_fajr: "Fajr",
        p_dhuhr: "Dhuhr",
        p_asr: "Asr",
        p_iftar: "Iftar",
        p_isha: "Isha",
        footer_text: "Ministère des Affaires Islamiques",
        cities: {
            nouakchott: "Nouakchott",
            nema: "Néma",
            aioun: "Aïoun",
            kiffa: "Kiffa",
            kaedi: "Kaédi",
            aleg: "Aleg",
			atar: "Atar",
			nouadhibou: "انواذيبو"
        }
    }
};

// ==========================================
// بيانات أوقات الصلاة (المتوفرة)
// ==========================================
const ramadanData = {
    "انواكشوط": [
        {"day": 1, "imsak": "06:05", "fajr": "06:10", "dhuhr": "13:18", "asr": "16:38", "iftar": "19:09", "isha": "20:18"},
        {"day": 2, "imsak": "06:04", "fajr": "06:09", "dhuhr": "13:18", "asr": "16:38", "iftar": "19:10", "isha": "20:18"},
        {"day": 3, "imsak": "06:04", "fajr": "06:09", "dhuhr": "13:18", "asr": "16:38", "iftar": "19:10", "isha": "20:18"},
        {"day": 4, "imsak": "06:03", "fajr": "06:08", "dhuhr": "13:17", "asr": "16:38", "iftar": "19:11", "isha": "20:18"},
        {"day": 5, "imsak": "06:03", "fajr": "06:08", "dhuhr": "13:17", "asr": "16:38", "iftar": "19:11", "isha": "20:19"},
        {"day": 6, "imsak": "06:02", "fajr": "06:07", "dhuhr": "13:17", "asr": "16:38", "iftar": "19:11", "isha": "20:19"},
        {"day": 7, "imsak": "06:02", "fajr": "06:07", "dhuhr": "13:17", "asr": "16:38", "iftar": "19:12", "isha": "20:19"},
        {"day": 8, "imsak": "06:01", "fajr": "06:06", "dhuhr": "13:17", "asr": "16:38", "iftar": "19:12", "isha": "20:20"},
        {"day": 9, "imsak": "06:00", "fajr": "06:05", "dhuhr": "13:17", "asr": "16:38", "iftar": "19:12", "isha": "20:20"},
        {"day": 10, "imsak": "06:00", "fajr": "06:05", "dhuhr": "13:16", "asr": "16:38", "iftar": "19:13", "isha": "20:20"},
        {"day": 11, "imsak": "05:59", "fajr": "06:04", "dhuhr": "13:16", "asr": "16:38", "iftar": "19:13", "isha": "20:20"},
        {"day": 12, "imsak": "05:58", "fajr": "06:03", "dhuhr": "13:16", "asr": "16:38", "iftar": "19:13", "isha": "20:21"},
        {"day": 13, "imsak": "05:58", "fajr": "06:03", "dhuhr": "13:16", "asr": "16:38", "iftar": "19:13", "isha": "20:21"},
        {"day": 14, "imsak": "05:57", "fajr": "06:02", "dhuhr": "13:16", "asr": "16:38", "iftar": "19:14", "isha": "20:21"},
        {"day": 15, "imsak": "05:56", "fajr": "06:01", "dhuhr": "13:15", "asr": "16:38", "iftar": "19:14", "isha": "20:21"},
        {"day": 16, "imsak": "05:56", "fajr": "06:01", "dhuhr": "13:15", "asr": "16:38", "iftar": "19:14", "isha": "20:22"},
        {"day": 17, "imsak": "05:55", "fajr": "06:00", "dhuhr": "13:15", "asr": "16:37", "iftar": "19:15", "isha": "20:22"},
        {"day": 18, "imsak": "05:54", "fajr": "05:59", "dhuhr": "13:15", "asr": "16:37", "iftar": "19:15", "isha": "20:22"},
        {"day": 19, "imsak": "05:53", "fajr": "05:58", "dhuhr": "13:15", "asr": "16:37", "iftar": "19:15", "isha": "20:22"},
        {"day": 20, "imsak": "05:53", "fajr": "05:58", "dhuhr": "13:14", "asr": "16:37", "iftar": "19:15", "isha": "20:23"},
        {"day": 21, "imsak": "05:52", "fajr": "05:57", "dhuhr": "13:14", "asr": "16:37", "iftar": "19:16", "isha": "20:23"},
        {"day": 22, "imsak": "05:51", "fajr": "05:56", "dhuhr": "13:14", "asr": "16:37", "iftar": "19:16", "isha": "20:23"},
        {"day": 23, "imsak": "05:50", "fajr": "05:55", "dhuhr": "13:13", "asr": "16:36", "iftar": "19:16", "isha": "20:23"},
        {"day": 24, "imsak": "05:50", "fajr": "05:55", "dhuhr": "13:13", "asr": "16:36", "iftar": "19:16", "isha": "20:24"},
        {"day": 25, "imsak": "05:49", "fajr": "05:54", "dhuhr": "13:13", "asr": "16:36", "iftar": "19:17", "isha": "20:24"},
        {"day": 26, "imsak": "05:48", "fajr": "05:53", "dhuhr": "13:13", "asr": "16:36", "iftar": "19:17", "isha": "20:24"},
        {"day": 27, "imsak": "05:47", "fajr": "05:52", "dhuhr": "13:12", "asr": "16:35", "iftar": "19:17", "isha": "20:24"},
        {"day": 28, "imsak": "05:46", "fajr": "05:51", "dhuhr": "13:12", "asr": "16:35", "iftar": "19:17", "isha": "20:25"},
        {"day": 29, "imsak": "05:46", "fajr": "05:51", "dhuhr": "13:11", "asr": "16:35", "iftar": "19:18", "isha": "20:25"},
        {"day": 30, "imsak": "05:45", "fajr": "05:50", "dhuhr": "13:11", "asr": "16:34", "iftar": "19:18", "isha": "20:25"}
    ],
    "النعمة": [
        {"day": 1, "imsak": "05:29", "fajr": "05:34", "dhuhr": "12:43", "asr": "16:03", "iftar": "18:36", "isha": "19:43"},
        {"day": 2, "imsak": "05:29", "fajr": "05:34", "dhuhr": "12:43", "asr": "16:03", "iftar": "18:36", "isha": "19:44"},
        {"day": 3, "imsak": "05:28", "fajr": "05:33", "dhuhr": "12:43", "asr": "16:03", "iftar": "18:36", "isha": "19:44"},
        {"day": 4, "imsak": "05:28", "fajr": "05:33", "dhuhr": "12:43", "asr": "16:03", "iftar": "18:37", "isha": "19:44"},
        {"day": 5, "imsak": "05:27", "fajr": "05:32", "dhuhr": "12:42", "asr": "16:03", "iftar": "18:37", "isha": "19:44"},
        {"day": 6, "imsak": "05:27", "fajr": "05:32", "dhuhr": "12:42", "asr": "16:03", "iftar": "18:37", "isha": "19:45"},
        {"day": 7, "imsak": "05:26", "fajr": "05:31", "dhuhr": "12:42", "asr": "16:03", "iftar": "18:38", "isha": "19:45"},
        {"day": 8, "imsak": "05:26", "fajr": "05:31", "dhuhr": "12:42", "asr": "16:03", "iftar": "18:38", "isha": "19:45"},
        {"day": 9, "imsak": "05:25", "fajr": "05:30", "dhuhr": "12:42", "asr": "16:03", "iftar": "18:38", "isha": "19:45"},
        {"day": 10, "imsak": "05:25", "fajr": "05:30", "dhuhr": "12:42", "asr": "16:03", "iftar": "18:39", "isha": "19:46"},
        {"day": 11, "imsak": "05:24", "fajr": "05:29", "dhuhr": "12:41", "asr": "16:03", "iftar": "18:39", "isha": "19:46"},
        {"day": 12, "imsak": "05:23", "fajr": "05:28", "dhuhr": "12:41", "asr": "16:03", "iftar": "18:39", "isha": "19:46"},
        {"day": 13, "imsak": "05:23", "fajr": "05:28", "dhuhr": "12:41", "asr": "16:03", "iftar": "18:39", "isha": "19:46"},
        {"day": 14, "imsak": "05:22", "fajr": "05:27", "dhuhr": "12:41", "asr": "16:03", "iftar": "18:40", "isha": "19:46"},
        {"day": 15, "imsak": "05:21", "fajr": "05:26", "dhuhr": "12:41", "asr": "16:03", "iftar": "18:40", "isha": "19:47"},
        {"day": 16, "imsak": "05:21", "fajr": "05:26", "dhuhr": "12:40", "asr": "16:02", "iftar": "18:40", "isha": "19:47"},
        {"day": 17, "imsak": "05:20", "fajr": "05:25", "dhuhr": "12:40", "asr": "16:02", "iftar": "18:40", "isha": "19:47"},
        {"day": 18, "imsak": "05:19", "fajr": "05:24", "dhuhr": "12:40", "asr": "16:02", "iftar": "18:41", "isha": "19:47"},
        {"day": 19, "imsak": "05:19", "fajr": "05:24", "dhuhr": "12:40", "asr": "16:02", "iftar": "18:41", "isha": "19:47"},
        {"day": 20, "imsak": "05:18", "fajr": "05:23", "dhuhr": "12:39", "asr": "16:02", "iftar": "18:41", "isha": "19:48"},
        {"day": 21, "imsak": "05:17", "fajr": "05:22", "dhuhr": "12:39", "asr": "16:01", "iftar": "18:41", "isha": "19:48"},
        {"day": 22, "imsak": "05:17", "fajr": "05:22", "dhuhr": "12:39", "asr": "16:01", "iftar": "18:41", "isha": "19:48"},
        {"day": 23, "imsak": "05:16", "fajr": "05:21", "dhuhr": "12:39", "asr": "16:01", "iftar": "18:42", "isha": "19:48"},
        {"day": 24, "imsak": "05:15", "fajr": "05:20", "dhuhr": "12:38", "asr": "16:01", "iftar": "18:42", "isha": "19:48"},
        {"day": 25, "imsak": "05:14", "fajr": "05:19", "dhuhr": "12:38", "asr": "16:00", "iftar": "18:42", "isha": "19:49"},
        {"day": 26, "imsak": "05:14", "fajr": "05:19", "dhuhr": "12:38", "asr": "16:00", "iftar": "18:42", "isha": "19:49"},
        {"day": 27, "imsak": "05:13", "fajr": "05:18", "dhuhr": "12:37", "asr": "16:00", "iftar": "18:42", "isha": "19:49"},
        {"day": 28, "imsak": "05:12", "fajr": "05:17", "dhuhr": "12:37", "asr": "15:59", "iftar": "18:42", "isha": "19:49"},
        {"day": 29, "imsak": "05:11", "fajr": "05:16", "dhuhr": "12:37", "asr": "15:59", "iftar": "18:43", "isha": "19:49"},
        {"day": 30, "imsak": "05:10", "fajr": "05:15", "dhuhr": "12:37", "asr": "15:59", "iftar": "18:43", "isha": "19:50"}
    ],
    "العيون": [
        {"day": 1, "imsak": "05:39", "fajr": "05:44", "dhuhr": "12:52", "asr": "16:13", "iftar": "18:45", "isha": "19:53"},
        {"day": 2, "imsak": "05:39", "fajr": "05:43", "dhuhr": "12:52", "asr": "16:13", "iftar": "18:45", "isha": "19:53"},
        {"day": 3, "imsak": "05:38", "fajr": "05:43", "dhuhr": "12:52", "asr": "16:13", "iftar": "18:46", "isha": "19:53"},
        {"day": 4, "imsak": "05:37", "fajr": "05:42", "dhuhr": "12:52", "asr": "16:13", "iftar": "18:46", "isha": "19:54"},
        {"day": 5, "imsak": "05:37", "fajr": "05:42", "dhuhr": "12:52", "asr": "16:13", "iftar": "18:46", "isha": "19:54"},
        {"day": 6, "imsak": "05:36", "fajr": "05:41", "dhuhr": "12:52", "asr": "16:13", "iftar": "18:47", "isha": "19:54"},
        {"day": 7, "imsak": "05:36", "fajr": "05:41", "dhuhr": "12:52", "asr": "16:13", "iftar": "18:47", "isha": "19:54"},
        {"day": 8, "imsak": "05:35", "fajr": "05:40", "dhuhr": "12:51", "asr": "16:13", "iftar": "18:47", "isha": "19:54"},
        {"day": 9, "imsak": "05:35", "fajr": "05:40", "dhuhr": "12:51", "asr": "16:13", "iftar": "18:48", "isha": "19:55"},
        {"day": 10, "imsak": "05:34", "fajr": "05:39", "dhuhr": "12:51", "asr": "16:13", "iftar": "18:48", "isha": "19:55"},
        {"day": 11, "imsak": "05:33", "fajr": "05:38", "dhuhr": "12:51", "asr": "16:13", "iftar": "18:48", "isha": "19:55"},
        {"day": 12, "imsak": "05:33", "fajr": "05:38", "dhuhr": "12:51", "asr": "16:12", "iftar": "18:48", "isha": "19:55"},
        {"day": 13, "imsak": "05:32", "fajr": "05:37", "dhuhr": "12:50", "asr": "16:12", "iftar": "18:49", "isha": "19:56"},
        {"day": 14, "imsak": "05:31", "fajr": "05:36", "dhuhr": "12:50", "asr": "16:12", "iftar": "18:49", "isha": "19:56"},
        {"day": 15, "imsak": "05:31", "fajr": "05:36", "dhuhr": "12:50", "asr": "16:12", "iftar": "18:49", "isha": "19:56"},
        {"day": 16, "imsak": "05:30", "fajr": "05:35", "dhuhr": "12:50", "asr": "16:12", "iftar": "18:49", "isha": "19:56"},
        {"day": 17, "imsak": "05:29", "fajr": "05:34", "dhuhr": "12:50", "asr": "16:12", "iftar": "18:50", "isha": "19:56"},
        {"day": 18, "imsak": "05:29", "fajr": "05:34", "dhuhr": "12:49", "asr": "16:11", "iftar": "18:50", "isha": "19:57"},
        {"day": 19, "imsak": "05:28", "fajr": "05:33", "dhuhr": "12:49", "asr": "16:11", "iftar": "18:50", "isha": "19:57"},
        {"day": 20, "imsak": "05:27", "fajr": "05:32", "dhuhr": "12:49", "asr": "16:11", "iftar": "18:50", "isha": "19:57"},
        {"day": 21, "imsak": "05:27", "fajr": "05:32", "dhuhr": "12:48", "asr": "16:11", "iftar": "18:51", "isha": "19:57"},
        {"day": 22, "imsak": "05:26", "fajr": "05:31", "dhuhr": "12:48", "asr": "16:10", "iftar": "18:51", "isha": "19:57"},
        {"day": 23, "imsak": "05:25", "fajr": "05:30", "dhuhr": "12:48", "asr": "16:10", "iftar": "18:51", "isha": "19:58"},
        {"day": 24, "imsak": "05:24", "fajr": "05:29", "dhuhr": "12:48", "asr": "16:10", "iftar": "18:51", "isha": "19:58"},
        {"day": 25, "imsak": "05:24", "fajr": "05:29", "dhuhr": "12:47", "asr": "16:10", "iftar": "18:51", "isha": "19:58"},
        {"day": 26, "imsak": "05:23", "fajr": "05:28", "dhuhr": "12:47", "asr": "16:09", "iftar": "18:52", "isha": "19:58"},
        {"day": 27, "imsak": "05:22", "fajr": "05:27", "dhuhr": "12:47", "asr": "16:09", "iftar": "18:52", "isha": "19:58"},
        {"day": 28, "imsak": "05:21", "fajr": "05:26", "dhuhr": "12:47", "asr": "16:09", "iftar": "18:52", "isha": "19:59"},
        {"day": 29, "imsak": "05:21", "fajr": "05:26", "dhuhr": "12:46", "asr": "16:08", "iftar": "18:52", "isha": "19:59"},
        {"day": 30, "imsak": "05:20", "fajr": "05:25", "dhuhr": "12:46", "asr": "16:08", "iftar": "18:52", "isha": "19:59"}
    ],
    "كيفه": [
        {"day": 1, "imsak": "05:46", "fajr": "05:51", "dhuhr": "12:59", "asr": "16:20", "iftar": "18:52", "isha": "20:00"},
        {"day": 2, "imsak": "05:45", "fajr": "05:50", "dhuhr": "12:59", "asr": "16:20", "iftar": "18:52", "isha": "20:00"},
        {"day": 3, "imsak": "05:45", "fajr": "05:50", "dhuhr": "12:59", "asr": "16:20", "iftar": "18:53", "isha": "20:00"},
        {"day": 4, "imsak": "05:44", "fajr": "05:49", "dhuhr": "12:59", "asr": "16:20", "iftar": "18:53", "isha": "20:01"},
        {"day": 5, "imsak": "05:44", "fajr": "05:49", "dhuhr": "12:59", "asr": "16:20", "iftar": "18:53", "isha": "20:01"},
        {"day": 6, "imsak": "05:43", "fajr": "05:48", "dhuhr": "12:58", "asr": "16:20", "iftar": "18:54", "isha": "20:01"},
        {"day": 7, "imsak": "05:42", "fajr": "05:47", "dhuhr": "12:58", "asr": "16:20", "iftar": "18:54", "isha": "20:01"},
        {"day": 8, "imsak": "05:42", "fajr": "05:47", "dhuhr": "12:58", "asr": "16:20", "iftar": "18:54", "isha": "20:02"},
        {"day": 9, "imsak": "05:41", "fajr": "05:46", "dhuhr": "12:58", "asr": "16:20", "iftar": "18:54", "isha": "20:02"},
        {"day": 10, "imsak": "05:41", "fajr": "05:46", "dhuhr": "12:58", "asr": "16:20", "iftar": "18:55", "isha": "20:02"},
        {"day": 11, "imsak": "05:40", "fajr": "05:45", "dhuhr": "12:58", "asr": "16:19", "iftar": "18:55", "isha": "20:02"},
        {"day": 12, "imsak": "05:40", "fajr": "05:45", "dhuhr": "12:57", "asr": "16:19", "iftar": "18:55", "isha": "20:02"},
        {"day": 13, "imsak": "05:39", "fajr": "05:44", "dhuhr": "12:57", "asr": "16:19", "iftar": "18:55", "isha": "20:03"},
        {"day": 14, "imsak": "05:38", "fajr": "05:43", "dhuhr": "12:57", "asr": "16:19", "iftar": "18:56", "isha": "20:03"},
        {"day": 15, "imsak": "05:38", "fajr": "05:43", "dhuhr": "12:57", "asr": "16:19", "iftar": "18:56", "isha": "20:03"},
        {"day": 16, "imsak": "05:37", "fajr": "05:42", "dhuhr": "12:56", "asr": "16:18", "iftar": "18:56", "isha": "20:03"},
        {"day": 17, "imsak": "05:36", "fajr": "05:41", "dhuhr": "12:56", "asr": "16:18", "iftar": "18:56", "isha": "20:03"},
        {"day": 18, "imsak": "05:36", "fajr": "05:41", "dhuhr": "12:56", "asr": "16:18", "iftar": "18:57", "isha": "20:04"},
        {"day": 19, "imsak": "05:35", "fajr": "05:40", "dhuhr": "12:56", "asr": "16:18", "iftar": "18:57", "isha": "20:04"},
        {"day": 20, "imsak": "05:34", "fajr": "05:39", "dhuhr": "12:55", "asr": "16:18", "iftar": "18:57", "isha": "20:04"},
        {"day": 21, "imsak": "05:34", "fajr": "05:39", "dhuhr": "12:55", "asr": "16:17", "iftar": "18:57", "isha": "20:04"},
        {"day": 22, "imsak": "05:33", "fajr": "05:38", "dhuhr": "12:55", "asr": "16:17", "iftar": "18:58", "isha": "20:05"},
        {"day": 23, "imsak": "05:32", "fajr": "05:37", "dhuhr": "12:55", "asr": "16:17", "iftar": "18:58", "isha": "20:05"},
        {"day": 24, "imsak": "05:32", "fajr": "05:37", "dhuhr": "12:54", "asr": "16:17", "iftar": "18:58", "isha": "20:05"},
        {"day": 25, "imsak": "05:31", "fajr": "05:36", "dhuhr": "12:54", "asr": "16:16", "iftar": "18:58", "isha": "20:05"},
        {"day": 26, "imsak": "05:30", "fajr": "05:35", "dhuhr": "12:54", "asr": "16:16", "iftar": "18:59", "isha": "20:05"},
        {"day": 27, "imsak": "05:29", "fajr": "05:34", "dhuhr": "12:54", "asr": "16:16", "iftar": "18:59", "isha": "20:06"},
        {"day": 28, "imsak": "05:29", "fajr": "05:34", "dhuhr": "12:53", "asr": "16:16", "iftar": "18:59", "isha": "20:06"},
        {"day": 29, "imsak": "05:28", "fajr": "05:33", "dhuhr": "12:53", "asr": "16:15", "iftar": "18:59", "isha": "20:06"},
        {"day": 30, "imsak": "05:27", "fajr": "05:32", "dhuhr": "12:53", "asr": "16:15", "iftar": "18:59", "isha": "20:06"}
    ],
    "كيهيدي": [
        {"day": 1, "imsak": "05:54", "fajr": "05:59", "dhuhr": "13:08", "asr": "16:28", "iftar": "19:01", "isha": "20:09"},
        {"day": 2, "imsak": "05:54", "fajr": "05:59", "dhuhr": "13:08", "asr": "16:28", "iftar": "19:01", "isha": "20:09"},
        {"day": 3, "imsak": "05:53", "fajr": "05:58", "dhuhr": "13:08", "asr": "16:28", "iftar": "19:01", "isha": "20:10"},
        {"day": 4, "imsak": "05:53", "fajr": "05:58", "dhuhr": "13:08", "asr": "16:28", "iftar": "19:02", "isha": "20:10"},
        {"day": 5, "imsak": "05:52", "fajr": "05:57", "dhuhr": "13:08", "asr": "16:28", "iftar": "19:02", "isha": "20:10"},
        {"day": 6, "imsak": "05:52", "fajr": "05:57", "dhuhr": "13:07", "asr": "16:28", "iftar": "19:02", "isha": "20:10"},
        {"day": 7, "imsak": "05:51", "fajr": "05:56", "dhuhr": "13:07", "asr": "16:28", "iftar": "19:02", "isha": "20:11"},
        {"day": 8, "imsak": "05:51", "fajr": "05:56", "dhuhr": "13:07", "asr": "16:28", "iftar": "19:03", "isha": "20:11"},
        {"day": 9, "imsak": "05:50", "fajr": "05:55", "dhuhr": "13:07", "asr": "16:28", "iftar": "19:03", "isha": "20:11"},
        {"day": 10, "imsak": "05:49", "fajr": "05:54", "dhuhr": "13:07", "asr": "16:28", "iftar": "19:03", "isha": "20:11"},
        {"day": 11, "imsak": "05:49", "fajr": "05:54", "dhuhr": "13:06", "asr": "16:27", "iftar": "19:03", "isha": "20:12"},
        {"day": 12, "imsak": "05:48", "fajr": "05:53", "dhuhr": "13:06", "asr": "16:27", "iftar": "19:04", "isha": "20:12"},
        {"day": 13, "imsak": "05:47", "fajr": "05:52", "dhuhr": "13:06", "asr": "16:27", "iftar": "19:04", "isha": "20:12"},
        {"day": 14, "imsak": "05:47", "fajr": "05:52", "dhuhr": "13:06", "asr": "16:27", "iftar": "19:04", "isha": "20:12"},
        {"day": 15, "imsak": "05:46", "fajr": "05:51", "dhuhr": "13:06", "asr": "16:27", "iftar": "19:05", "isha": "20:12"},
        {"day": 16, "imsak": "05:46", "fajr": "05:51", "dhuhr": "13:05", "asr": "16:26", "iftar": "19:05", "isha": "20:13"},
        {"day": 17, "imsak": "05:45", "fajr": "05:50", "dhuhr": "13:05", "asr": "16:26", "iftar": "19:05", "isha": "20:13"},
        {"day": 18, "imsak": "05:44", "fajr": "05:49", "dhuhr": "13:05", "asr": "16:26", "iftar": "19:05", "isha": "20:13"},
        {"day": 19, "imsak": "05:44", "fajr": "05:49", "dhuhr": "13:05", "asr": "16:26", "iftar": "19:05", "isha": "20:13"},
        {"day": 20, "imsak": "05:43", "fajr": "05:48", "dhuhr": "13:05", "asr": "16:26", "iftar": "19:06", "isha": "20:13"},
        {"day": 21, "imsak": "05:42", "fajr": "05:47", "dhuhr": "13:04", "asr": "16:25", "iftar": "19:06", "isha": "20:13"},
        {"day": 22, "imsak": "05:42", "fajr": "05:47", "dhuhr": "13:04", "asr": "16:25", "iftar": "19:06", "isha": "20:14"},
        {"day": 23, "imsak": "05:41", "fajr": "05:46", "dhuhr": "13:04", "asr": "16:25", "iftar": "19:06", "isha": "20:14"},
        {"day": 24, "imsak": "05:40", "fajr": "05:45", "dhuhr": "13:04", "asr": "16:25", "iftar": "19:07", "isha": "20:14"},
        {"day": 25, "imsak": "05:40", "fajr": "05:45", "dhuhr": "13:03", "asr": "16:24", "iftar": "19:07", "isha": "20:14"},
        {"day": 26, "imsak": "05:39", "fajr": "05:44", "dhuhr": "13:03", "asr": "16:24", "iftar": "19:07", "isha": "20:14"},
        {"day": 27, "imsak": "05:38", "fajr": "05:43", "dhuhr": "13:03", "asr": "16:24", "iftar": "19:07", "isha": "20:14"},
        {"day": 28, "imsak": "05:38", "fajr": "05:43", "dhuhr": "13:03", "asr": "16:24", "iftar": "19:08", "isha": "20:14"},
        {"day": 29, "imsak": "05:37", "fajr": "05:42", "dhuhr": "13:02", "asr": "16:23", "iftar": "19:08", "isha": "20:15"},
        {"day": 30, "imsak": "05:36", "fajr": "05:41", "dhuhr": "13:02", "asr": "16:23", "iftar": "19:08", "isha": "20:15"}
    ],
    "ألاك": [
        {"day": 1, "imsak": "05:56", "fajr": "06:01", "dhuhr": "13:10", "asr": "16:30", "iftar": "19:02", "isha": "20:10"},
        {"day": 2, "imsak": "05:55", "fajr": "06:00", "dhuhr": "13:10", "asr": "16:30", "iftar": "19:03", "isha": "20:11"},
        {"day": 3, "imsak": "05:55", "fajr": "06:00", "dhuhr": "13:10", "asr": "16:30", "iftar": "19:03", "isha": "20:11"},
        {"day": 4, "imsak": "05:54", "fajr": "05:59", "dhuhr": "13:09", "asr": "16:30", "iftar": "19:03", "isha": "20:11"},
        {"day": 5, "imsak": "05:54", "fajr": "05:59", "dhuhr": "13:09", "asr": "16:30", "iftar": "19:03", "isha": "20:11"},
        {"day": 6, "imsak": "05:53", "fajr": "05:58", "dhuhr": "13:09", "asr": "16:30", "iftar": "19:04", "isha": "20:12"},
        {"day": 7, "imsak": "05:53", "fajr": "05:58", "dhuhr": "13:09", "asr": "16:30", "iftar": "19:04", "isha": "20:12"},
        {"day": 8, "imsak": "05:52", "fajr": "05:57", "dhuhr": "13:09", "asr": "16:30", "iftar": "19:04", "isha": "20:12"},
        {"day": 9, "imsak": "05:51", "fajr": "05:56", "dhuhr": "13:09", "asr": "16:30", "iftar": "19:05", "isha": "20:13"},
        {"day": 10, "imsak": "05:51", "fajr": "05:56", "dhuhr": "13:09", "asr": "16:30", "iftar": "19:05", "isha": "20:13"},
        {"day": 11, "imsak": "05:50", "fajr": "05:55", "dhuhr": "13:08", "asr": "16:30", "iftar": "19:05", "isha": "20:13"},
        {"day": 12, "imsak": "05:49", "fajr": "05:54", "dhuhr": "13:08", "asr": "16:30", "iftar": "19:05", "isha": "20:13"},
        {"day": 13, "imsak": "05:49", "fajr": "05:54", "dhuhr": "13:08", "asr": "16:30", "iftar": "19:05", "isha": "20:13"},
        {"day": 14, "imsak": "05:48", "fajr": "05:53", "dhuhr": "13:08", "asr": "16:29", "iftar": "19:06", "isha": "20:13"},
        {"day": 15, "imsak": "05:48", "fajr": "05:53", "dhuhr": "13:08", "asr": "16:29", "iftar": "19:06", "isha": "20:13"},
        {"day": 16, "imsak": "05:47", "fajr": "05:52", "dhuhr": "13:07", "asr": "16:29", "iftar": "19:06", "isha": "20:14"},
        {"day": 17, "imsak": "05:47", "fajr": "05:52", "dhuhr": "13:07", "asr": "16:29", "iftar": "19:07", "isha": "20:14"},
        {"day": 18, "imsak": "05:46", "fajr": "05:51", "dhuhr": "13:07", "asr": "16:29", "iftar": "19:07", "isha": "20:14"},
        {"day": 19, "imsak": "05:45", "fajr": "05:50", "dhuhr": "13:07", "asr": "16:29", "iftar": "19:07", "isha": "20:14"},
        {"day": 20, "imsak": "05:45", "fajr": "05:50", "dhuhr": "13:06", "asr": "16:28", "iftar": "19:07", "isha": "20:15"},
        {"day": 21, "imsak": "05:44", "fajr": "05:49", "dhuhr": "13:06", "asr": "16:28", "iftar": "19:08", "isha": "20:15"},
        {"day": 22, "imsak": "05:43", "fajr": "05:48", "dhuhr": "13:06", "asr": "16:28", "iftar": "19:08", "isha": "20:15"},
        {"day": 23, "imsak": "05:43", "fajr": "05:48", "dhuhr": "13:06", "asr": "16:28", "iftar": "19:08", "isha": "20:15"},
        {"day": 24, "imsak": "05:42", "fajr": "05:47", "dhuhr": "13:05", "asr": "16:27", "iftar": "19:08", "isha": "20:15"},
        {"day": 25, "imsak": "05:41", "fajr": "05:46", "dhuhr": "13:05", "asr": "16:27", "iftar": "19:09", "isha": "20:16"},
        {"day": 26, "imsak": "05:40", "fajr": "05:45", "dhuhr": "13:05", "asr": "16:27", "iftar": "19:09", "isha": "20:16"},
        {"day": 27, "imsak": "05:40", "fajr": "05:45", "dhuhr": "13:05", "asr": "16:27", "iftar": "19:09", "isha": "20:16"},
        {"day": 28, "imsak": "05:39", "fajr": "05:44", "dhuhr": "13:04", "asr": "16:26", "iftar": "19:09", "isha": "20:16"},
        {"day": 29, "imsak": "05:38", "fajr": "05:43", "dhuhr": "13:04", "asr": "16:26", "iftar": "19:10", "isha": "20:16"},
        {"day": 30, "imsak": "05:37", "fajr": "05:42", "dhuhr": "13:03", "asr": "16:25", "iftar": "19:10", "isha": "20:16"}
    ],
	"أطار": [
    {"day": 1, "imsak": "05:58", "fajr": "06:03", "dhuhr": "13:06", "asr": "16:25", "iftar": "18:53", "isha": "20:23"},
    {"day": 2, "imsak": "05:58", "fajr": "06:03", "dhuhr": "13:06", "asr": "16:25", "iftar": "18:53", "isha": "20:23"},
    {"day": 3, "imsak": "05:57", "fajr": "06:02", "dhuhr": "13:06", "asr": "16:25", "iftar": "18:54", "isha": "20:24"},
    {"day": 4, "imsak": "05:56", "fajr": "06:01", "dhuhr": "13:06", "asr": "16:25", "iftar": "18:54", "isha": "20:24"},
    {"day": 5, "imsak": "05:56", "fajr": "06:01", "dhuhr": "13:06", "asr": "16:26", "iftar": "18:55", "isha": "20:25"},
    {"day": 6, "imsak": "05:55", "fajr": "06:00", "dhuhr": "13:05", "asr": "16:26", "iftar": "18:55", "isha": "20:25"},
    {"day": 7, "imsak": "05:54", "fajr": "05:59", "dhuhr": "13:05", "asr": "16:26", "iftar": "18:55", "isha": "20:25"},
    {"day": 8, "imsak": "05:54", "fajr": "05:59", "dhuhr": "13:05", "asr": "16:26", "iftar": "18:56", "isha": "20:26"},
    {"day": 9, "imsak": "05:53", "fajr": "05:58", "dhuhr": "13:05", "asr": "16:26", "iftar": "18:56", "isha": "20:26"},
    {"day": 10, "imsak": "05:52", "fajr": "05:57", "dhuhr": "13:05", "asr": "16:26", "iftar": "18:57", "isha": "20:27"},
    {"day": 11, "imsak": "05:51", "fajr": "05:56", "dhuhr": "13:05", "asr": "16:26", "iftar": "18:57", "isha": "20:27"},
    {"day": 12, "imsak": "05:50", "fajr": "05:55", "dhuhr": "13:04", "asr": "16:26", "iftar": "18:58", "isha": "20:28"},
    {"day": 13, "imsak": "05:49", "fajr": "05:54", "dhuhr": "13:04", "asr": "16:26", "iftar": "18:58", "isha": "20:28"},
    {"day": 14, "imsak": "05:49", "fajr": "05:54", "dhuhr": "13:04", "asr": "16:26", "iftar": "18:58", "isha": "20:28"},
    {"day": 15, "imsak": "05:48", "fajr": "05:53", "dhuhr": "13:03", "asr": "16:26", "iftar": "18:59", "isha": "20:29"},
    {"day": 16, "imsak": "05:47", "fajr": "05:52", "dhuhr": "13:03", "asr": "16:26", "iftar": "18:59", "isha": "20:29"},
    {"day": 17, "imsak": "05:46", "fajr": "05:51", "dhuhr": "13:03", "asr": "16:26", "iftar": "19:00", "isha": "20:30"},
    {"day": 18, "imsak": "05:45", "fajr": "05:50", "dhuhr": "13:03", "asr": "16:26", "iftar": "19:00", "isha": "20:30"},
    {"day": 19, "imsak": "05:44", "fajr": "05:49", "dhuhr": "13:03", "asr": "16:26", "iftar": "19:00", "isha": "20:30"},
    {"day": 20, "imsak": "05:43", "fajr": "05:48", "dhuhr": "13:02", "asr": "16:26", "iftar": "19:01", "isha": "20:31"},
    {"day": 21, "imsak": "05:42", "fajr": "05:47", "dhuhr": "13:02", "asr": "16:26", "iftar": "19:01", "isha": "20:31"},
    {"day": 22, "imsak": "05:41", "fajr": "05:46", "dhuhr": "13:02", "asr": "16:26", "iftar": "19:02", "isha": "20:32"},
    {"day": 23, "imsak": "05:40", "fajr": "05:45", "dhuhr": "13:02", "asr": "16:26", "iftar": "19:02", "isha": "20:32"},
    {"day": 24, "imsak": "05:39", "fajr": "05:44", "dhuhr": "13:01", "asr": "16:26", "iftar": "19:02", "isha": "20:32"},
    {"day": 25, "imsak": "05:38", "fajr": "05:43", "dhuhr": "13:01", "asr": "16:26", "iftar": "19:03", "isha": "20:33"},
    {"day": 26, "imsak": "05:37", "fajr": "05:42", "dhuhr": "13:01", "asr": "16:26", "iftar": "19:03", "isha": "20:33"},
    {"day": 27, "imsak": "05:36", "fajr": "05:41", "dhuhr": "13:01", "asr": "16:26", "iftar": "19:04", "isha": "20:34"},
    {"day": 28, "imsak": "05:35", "fajr": "05:40", "dhuhr": "13:01", "asr": "16:26", "iftar": "19:04", "isha": "20:34"},
    {"day": 29, "imsak": "05:34", "fajr": "05:39", "dhuhr": "13:00", "asr": "16:26", "iftar": "19:04", "isha": "20:34"},
    {"day": 30, "imsak": "05:33", "fajr": "05:38", "dhuhr": "13:00", "asr": "16:26", "iftar": "19:05", "isha": "20:35"}
],
"انواذيبو": [
    {"day": 1, "imsak": "06:18", "fajr": "06:23", "dhuhr": "13:28", "asr": "16:47", "iftar": "19:18", "isha": "20:28"},
    {"day": 2, "imsak": "06:17", "fajr": "06:22", "dhuhr": "13:28", "asr": "16:47", "iftar": "19:19", "isha": "20:29"},
    {"day": 3, "imsak": "06:17", "fajr": "06:22", "dhuhr": "13:28", "asr": "16:47", "iftar": "19:19", "isha": "20:29"},
    {"day": 4, "imsak": "06:16", "fajr": "06:21", "dhuhr": "13:28", "asr": "16:47", "iftar": "19:20", "isha": "20:30"},
    {"day": 5, "imsak": "06:15", "fajr": "06:20", "dhuhr": "13:27", "asr": "16:48", "iftar": "19:20", "isha": "20:30"},
    {"day": 6, "imsak": "06:14", "fajr": "06:19", "dhuhr": "13:27", "asr": "16:48", "iftar": "19:21", "isha": "20:31"},
    {"day": 7, "imsak": "06:13", "fajr": "06:18", "dhuhr": "13:27", "asr": "16:48", "iftar": "19:21", "isha": "20:31"},
    {"day": 8, "imsak": "06:12", "fajr": "06:17", "dhuhr": "13:27", "asr": "16:48", "iftar": "19:22", "isha": "20:32"},
    {"day": 9, "imsak": "06:11", "fajr": "06:16", "dhuhr": "13:27", "asr": "16:48", "iftar": "19:22", "isha": "20:32"},
    {"day": 10, "imsak": "06:10", "fajr": "06:15", "dhuhr": "13:26", "asr": "16:48", "iftar": "19:23", "isha": "20:33"},
    {"day": 11, "imsak": "06:09", "fajr": "06:14", "dhuhr": "13:26", "asr": "16:48", "iftar": "19:23", "isha": "20:33"},
    {"day": 12, "imsak": "06:08", "fajr": "06:13", "dhuhr": "13:26", "asr": "16:48", "iftar": "19:24", "isha": "20:34"},
    {"day": 13, "imsak": "06:07", "fajr": "06:12", "dhuhr": "13:26", "asr": "16:48", "iftar": "19:24", "isha": "20:34"},
    {"day": 14, "imsak": "06:06", "fajr": "06:11", "dhuhr": "13:25", "asr": "16:48", "iftar": "19:25", "isha": "20:35"},
    {"day": 15, "imsak": "06:05", "fajr": "06:10", "dhuhr": "13:25", "asr": "16:48", "iftar": "19:25", "isha": "20:35"},
    {"day": 16, "imsak": "06:04", "fajr": "06:09", "dhuhr": "13:25", "asr": "16:47", "iftar": "19:26", "isha": "20:36"},
    {"day": 17, "imsak": "06:03", "fajr": "06:08", "dhuhr": "13:25", "asr": "16:47", "iftar": "19:26", "isha": "20:36"},
    {"day": 18, "imsak": "06:02", "fajr": "06:07", "dhuhr": "13:24", "asr": "16:47", "iftar": "19:26", "isha": "20:36"},
    {"day": 19, "imsak": "06:01", "fajr": "06:06", "dhuhr": "13:24", "asr": "16:47", "iftar": "19:27", "isha": "20:37"},
    {"day": 20, "imsak": "06:00", "fajr": "06:05", "dhuhr": "13:24", "asr": "16:47", "iftar": "19:27", "isha": "20:37"},
    {"day": 21, "imsak": "05:59", "fajr": "06:04", "dhuhr": "13:24", "asr": "16:47", "iftar": "19:28", "isha": "20:38"},
    {"day": 22, "imsak": "05:58", "fajr": "06:03", "dhuhr": "13:23", "asr": "16:47", "iftar": "19:28", "isha": "20:38"},
    {"day": 23, "imsak": "05:56", "fajr": "06:01", "dhuhr": "13:23", "asr": "16:47", "iftar": "19:29", "isha": "20:39"},
    {"day": 24, "imsak": "05:55", "fajr": "06:00", "dhuhr": "13:23", "asr": "16:46", "iftar": "19:29", "isha": "20:39"},
    {"day": 25, "imsak": "05:54", "fajr": "05:59", "dhuhr": "13:23", "asr": "16:46", "iftar": "19:30", "isha": "20:40"},
    {"day": 26, "imsak": "05:53", "fajr": "05:58", "dhuhr": "13:22", "asr": "16:46", "iftar": "19:30", "isha": "20:40"},
    {"day": 27, "imsak": "05:52", "fajr": "05:57", "dhuhr": "13:22", "asr": "16:46", "iftar": "19:31", "isha": "20:41"},
    {"day": 28, "imsak": "05:51", "fajr": "05:56", "dhuhr": "13:22", "asr": "16:46", "iftar": "19:31", "isha": "20:41"},
    {"day": 29, "imsak": "05:50", "fajr": "05:55", "dhuhr": "13:22", "asr": "16:45", "iftar": "19:32", "isha": "20:42"},
    {"day": 30, "imsak": "05:49", "fajr": "05:54", "dhuhr": "13:22", "asr": "16:45", "iftar": "19:32", "isha": "20:42"}
]
};

// خريطة لتحويل المفتاح الإنجليزي إلى الاسم العربي المستخدم في البيانات
const cityKeyToArabic = {
    nouakchott: "انواكشوط",
    nema: "النعمة",
    aioun: "العيون",
    kiffa: "كيفه",
    kaedi: "كيهيدي",
    aleg: "ألاك",
	atar: "أطار",
	nouadhibou: "انواذيبو"
};

// ==========================================

let currentLang = 'ar';
let countdownInterval = null;

// دالة لتحديث جميع النصوص بناءً على اللغة الحالية
function translatePage() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (key && translations[currentLang] && translations[currentLang][key]) {
            if (el.tagName === 'TITLE') {
                el.textContent = translations[currentLang][key];
            } else {
                el.textContent = translations[currentLang][key];
            }
        }
    });
}

// دالة تبديل اللغة (تستدعى من الزر)
function toggleLanguage() {
    const newLang = currentLang === 'ar' ? 'fr' : 'ar';
    switchLanguage(newLang);
}

// دالة تغيير اللغة وتحديث الواجهة
function switchLanguage(lang) {
    currentLang = lang;
    document.getElementById('htmlTag').dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.getElementById('langBtn').querySelector('.lang-text').textContent = 
        lang === 'ar' ? 'Français' : 'العربية';
    
    // تحديث أسماء المدن في القائمة (فقط المدن المتوفرة في البيانات)
    const citySelect = document.getElementById('citySelect');
    const currentCity = citySelect.value || 'nouakchott';
    citySelect.innerHTML = '';
    
    Object.keys(translations[lang].cities)
        .filter(id => cityKeyToArabic[id]) // تأكد من وجود بيانات لهذه المدينة
        .forEach(id => {
            const opt = document.createElement('option');
            opt.value = id;
            opt.textContent = translations[lang].cities[id];
            citySelect.appendChild(opt);
        });
    
    // استعادة المدينة المختارة سابقاً إن وجدت
    if (citySelect.querySelector(`option[value="${currentCity}"]`)) {
        citySelect.value = currentCity;
    } else {
        citySelect.value = citySelect.options[0]?.value || 'nouakchott';
    }

    translatePage();
    updateUI();
}

// ==========================
// دوال المشاركة
// ==========================

function shareApp() {
    const shareData = {
        title: translations[currentLang].app_title,
        text: translations[currentLang].main_heading,
        url: window.location.href
    };

    if (navigator.share) {
        navigator.share(shareData)
            .catch(err => console.log('لم تتم المشاركة:', err));
    } else {
        // نسخ الرابط للحافظة كبديل
        navigator.clipboard?.writeText(window.location.href)
            .then(() => alert('تم نسخ رابط التطبيق. يمكنك مشاركته الآن.'))
            .catch(() => alert('يمكنك مشاركة الرابط: ' + window.location.href));
    }
}

// ==========================
// دوال حساب اليوم والتوقيت
// ==========================

function getRamadanDay() {
    const startRamadan = new Date('2026-02-19T00:00:00');
    const today = new Date();
    const start = new Date(startRamadan.getFullYear(), startRamadan.getMonth(), startRamadan.getDate());
    const current = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const diffTime = current - start;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;
    
    if (diffDays < 1) return 1;
    if (diffDays > 30) return 30;
    return diffDays;
}

function updateUI() {
    const cityKey = document.getElementById('citySelect').value;
    const cityArabic = cityKeyToArabic[cityKey];
    if (cityArabic) {
        displayCityData(cityArabic);
    }
}

function displayCityData(cityArabic) {
    const ramadanDay = getRamadanDay();
    const dayData = ramadanData[cityArabic]?.[ramadanDay - 1];

    if (!dayData) {
        console.error('لا توجد بيانات لليوم', ramadanDay);
        return;
    }

    document.getElementById('imsak').textContent = dayData.imsak;
    document.getElementById('fajr').textContent = dayData.fajr;
    document.getElementById('dhuhr').textContent = dayData.dhuhr;
    document.getElementById('asr').textContent = dayData.asr;
    document.getElementById('iftar').textContent = dayData.iftar;
    document.getElementById('isha').textContent = dayData.isha;

    runCountdown(dayData, cityArabic, ramadanDay);
}

function runCountdown(dayData, cityArabic, currentDay) {
    const now = new Date();
    
    const getTimeDate = (timeStr, addDay = false) => {
        const [h, m] = timeStr.split(':').map(Number);
        const d = new Date(now);
        d.setHours(h, m, 0, 0);
        if (addDay) {
            d.setDate(d.getDate() + 1);
        }
        return d;
    };

    const iftarTime = getTimeDate(dayData.iftar);
    const imsakTime = getTimeDate(dayData.imsak);

    let target, titleKey;

    if (now > iftarTime) {
        let nextDay = currentDay + 1;
        let nextDayData;
        if (nextDay > 30) {
            nextDayData = dayData;
        } else {
            nextDayData = ramadanData[cityArabic][nextDay - 1];
        }
        target = getTimeDate(nextDayData.imsak, true);
        titleKey = 'timer_imsak_next';
    } else if (now > imsakTime) {
        target = iftarTime;
        titleKey = 'timer_iftar';
    } else {
        target = imsakTime;
        titleKey = 'timer_imsak';
    }

    document.getElementById('eventTitle').textContent = translations[currentLang][titleKey];
    
    const diff = target - now;
    if (diff < 0) {
        document.getElementById('countdown').textContent = '00:00:00';
        return;
    }

    const hours = Math.floor(diff / 3600000).toString().padStart(2, '0');
    const minutes = Math.floor((diff % 3600000) / 60000).toString().padStart(2, '0');
    const seconds = Math.floor((diff % 60000) / 1000).toString().padStart(2, '0');
    
    document.getElementById('countdown').textContent = `${hours}:${minutes}:${seconds}`;
}

// التشغيل الأولي
document.addEventListener('DOMContentLoaded', () => {
    switchLanguage('ar');
    if (countdownInterval) clearInterval(countdownInterval);
    countdownInterval = setInterval(updateUI, 1000);
    document.getElementById('citySelect').addEventListener('change', updateUI);
});