import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'ru' | 'en' | 'lv';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  ru: {
    // Header
    'nav.about': 'О курсе',
    'nav.program': 'Программа',
    'nav.team': 'Команда',
    'nav.register': 'Регистрация',
    
    // Hero
    'hero.year': '2026',
    'hero.dates': '14.02 — 12.12',
    'hero.age': '18 - 50 ЛЕТ',
    'hero.rhythm': '1 СУББОТА В МЕСЯЦ',
    'hero.title': 'ЦЕЛОСТНАЯ ЖИЗНЬ',
    'hero.subtitle': 'Практический курс для тех, кто хочет построить прочный фундамент в эпоху перемен.',
    'hero.cta': 'Регистрация Открыта',
    
    // Philosophy
    'philosophy.title': 'Цель и Философия Курса',
    'philosophy.text': 'Обучить лидеров и церковь библейским истинам для обретения внутреннего мира и баланса в важнейших сферах жизни, а также соединить с Богом для обретения Шалома. Каждый человек призван найти свою полноценную жизнь и пребывать в мире. Результат — это четкий план действий, как реализовать себя в каждой важной сфере жизни в соответствии с Божьим замыслом.',
    
    // Benefits
    'benefits.title': 'Что это вам даст?',
    'benefits.clarity.title': 'Ясность Призвания',
    'benefits.clarity.text': 'Перестань жить по инерции. Определи свою миссию и пойми, куда Бог зовет тебя в этом сезоне.',
    'benefits.core.title': 'Внутренний Стержень',
    'benefits.core.text': 'Развей устойчивость к стрессу, выгоранию и тревоге, опираясь на вечные истины.',
    'benefits.wisdom.title': 'Практическая Мудрость',
    'benefits.wisdom.text': 'Получи работающие инструменты: простые, но мощные вещи, которые могут изменить твою жизнь к лучшему.',
    'benefits.connections.title': 'Глубокие Связи',
    'benefits.connections.text': 'Найди друзей и наставников, с которыми можно быть настоящим и расти вместе.',
    
    // Target
    'target.title': 'Для Кого Это?',
    'target.text': 'Этот курс для лидеров, активных прихожан и всех, кто стремится к осознанной жизни и хочет обрести баланс (18-65 лет).',
    
    // Method
    'method.title': 'Как мы учимся',
    'method.subtitle': 'Мы используем метод Impact Based Learning (Обучение, основанное на влиянии). Минимум лекций, но больше работы над рефлексией, практикой, обсуждениями и формированием привычек.',
    'method.theory.title': 'Короткая Теория',
    'method.theory.text': 'Библейская истина + Мировые теоретические знания, адаптированные для нашего контекста.',
    'method.apply.title': 'Применение теории',
    'method.apply.text': 'Ты уходишь с заполненным планом, а не просто идеей.',
    'method.groups.title': 'Малые Группы',
    'method.groups.text': 'Честная обратная связь, молитва и обсуждение кейсов в безопасной среде.',
    'method.mentor.title': 'Менторинг и Практика',
    'method.mentor.text': 'Задания между модулями для внедрения навыков в реальную жизнь (семья, работа).',
    
    // Approach
    'approach.title': 'Наш Подход',
    'approach.1.title': 'Осознанность',
    'approach.1.text': 'Как Бог видит это? Чего Он хочет для этой сферы?',
    'approach.2.title': 'Цель',
    'approach.2.text': 'Где вы хотите быть и каков разрыв между текущим и желаемым?',
    'approach.3.title': 'Навыки',
    'approach.3.text': 'Инструменты: Библейская мудрость и практические методы.',
    'approach.4.title': 'План Действий',
    'approach.4.text': 'Какие конкретные шаги вы предпримете?',
    'approach.5.title': 'Закрепление',
    'approach.5.text': 'Поддержка среды и привычек для долгосрочных изменений.',
    
    // Wheel
    'wheel.title': 'Библейский Баланс',
    'wheel.subtitle': 'Мы не делим жизнь на "духовное" и "светское". Наведите на сферу, чтобы увидеть её смысл в Божьем замысле.',
    'wheel.hover': 'Наведите курсор на кнопку выше, чтобы раскрыть значение.',
    'wheel.purpose': 'Предназначение',
    'wheel.people': 'Люди',
    'wheel.body': 'Тело',
    'wheel.mind': 'Разум',
    'wheel.finance': 'Финансы',
    'wheel.character': 'Характер',
    'wheel.church': 'Церковь',
    'wheel.piety': 'Благочестие',
    'wheel.shalom': 'ШАЛОМ',
    'wheel.purpose.desc': 'Ваше уникальное призвание и миссия в этом мире.',
    'wheel.people.desc': 'Отношения, семья и сообщество вокруг вас.',
    'wheel.body.desc': 'Физическое здоровье — ваше тело как храм Духа.',
    'wheel.mind.desc': 'Обновление ума, мышление и личностный рост.',
    'wheel.finance.desc': 'Управление ресурсами как добрый управитель.',
    'wheel.character.desc': 'Плод Духа и формирование привычек.',
    'wheel.church.desc': 'Ваше место в Теле Христа и служение.',
    'wheel.piety.desc': 'Близость с Богом, молитва и духовные практики.',
    
    // Sessions
    'sessions.title': 'Программа Сессий',
    'sessions.about': 'О СЕССИИ',
    'sessions.tools': 'ИНСТРУМЕНТЫ',
    'sessions.break': 'Летний Перерыв (Июль - Август) — Время Практики',
    
    // Session details
    'session.1.month': 'ФЕВРАЛЬ',
    'session.1.date': '15 ФЕВ',
    'session.1.title': '1. Предназначение',
    'session.1.about': 'Старт программы. Мы проведем глубокий аудит вашей жизни и определим разрыв между тем, где вы есть, и где Бог хочет вас видеть.',
    'session.1.tools': 'Колесо Баланса (Библейская версия)\nФреймворк Икигай для поиска призвания\nНаписание "Письма из Будущего"',
    
    'session.2.month': 'МАРТ',
    'session.2.date': '15 МАР',
    'session.2.title': '2. Люди и Отношения',
    'session.2.about': 'Мы научимся говорить о сложных вещах без агрессии и устанавливать границы, которые сохраняют любовь и уважение.',
    'session.2.tools': 'Ненасильственное Общение (ННО)\nАудит Отношений\nСкрипты для установки границ',
    
    'session.3.month': 'АПРЕЛЬ',
    'session.3.date': '18 АПР',
    'session.3.title': '3. Тело и Энергия',
    'session.3.about': 'Ваше тело — Храм. Мы разберем физиологию энергии, сна и питания.',
    'session.3.tools': 'Протокол гигиены сна\nСоздание "Меню Радостного Движения"\nАнализ энергетических пиков дня',
    
    'session.4.month': 'МАЙ',
    'session.4.date': '16 МАЯ',
    'session.4.title': '4. Личностный Рост и Карьера',
    'session.4.about': 'Работа с мышлением. Как наши убеждения саботируют нас? Мы научимся "обновлять ум" (Рим 12:2).',
    'session.4.tools': 'Техника "Fear Setting" (Тим Феррис)\nКогнитивный рефрейминг убеждений',
    
    'session.5.month': 'ИЮНЬ',
    'session.5.date': '20 ИЮН',
    'session.5.title': '5. Финансы и Управление',
    'session.5.about': 'Мы перейдем от стресса выживания к радости управления ресурсами Царства.',
    'session.5.tools': 'Аудит "черных дыр" бюджета\nМетод конвертов (цифровой)\nПлан щедрости',
    
    'session.6.month': 'СЕНТЯБРЬ',
    'session.6.date': '19 СЕН',
    'session.6.title': '6. Характер и Привычки',
    'session.6.about': 'Характер — это сумма ваших привычек. Мы внедрим науку формирования привычек.',
    'session.6.tools': 'Петля Привычки (Atomic Habits)\nHabit Stacking\nSMART-цели на осень',
    
    'session.7.month': 'ОКТЯБРЬ',
    'session.7.date': '17 ОКТ',
    'session.7.title': '7. Церковь',
    'session.7.about': 'Как найти свое место в Теле Христа и превратить свой дом в место служения?',
    'session.7.tools': 'Тест духовных даров\nПрактика гостеприимства',
    
    'session.8.month': 'НОЯБРЬ',
    'session.8.date': '21 НОЯ',
    'session.8.title': '8. Благочестие и Шалом',
    'session.8.about': 'Искусство замедляться и слышать Бога в шумном мире.',
    'session.8.tools': 'Lectio Divina (Молитвенное чтение)\nПрактика Шаббата\nReview года',
    
    'session.9.month': 'ДЕКАБРЬ',
    'session.9.date': '12 ДЕК',
    'session.9.title': 'ФИНАЛ: Рефлексия и Выпускной',
    'session.9.about': 'Финальная сессия года. Время глубокой рефлексии пройденного пути, закрепления полезных привычек и празднования побед.',
    'session.9.tools': 'Годовой обзор (Year Compass)\nЗакрепление ключевых привычек\nПраздничный ужин',
    
    // Organization
    'org.title': 'Организация и Тайминг',
    'org.location': 'Локация',
    'org.location.value': 'Зал Рыба\nLāčplēša 117, Riga\n2 этаж.',
    'org.cost': 'Стоимость',
    'org.cost.value': 'Покрывается церковью «Храм Спасения»',
    'org.commitment': 'Посвящение',
    'org.commitment.value': 'Мы ожидаем участия в каждой сессии.',
    'org.details': 'Детали',
    'org.details.value': 'Возраст: 18 - 65 лет\nДаты: 15.02.2026 — 12.12.2026\nРитм: 1 Суббота в месяц',
    
    // Schedule
    'schedule.title': 'Расписание Субботы',
    'schedule.welcome': 'Приветствие',
    'schedule.welcome.desc': 'Чек-ин: «Одно слово, описывающее неделю». Кофе.',
    'schedule.part1': 'Часть 1: Осознанность',
    'schedule.part1.desc': 'Взгляд Бога: Чтение Якоря Писания.\n«Где вы сейчас по шкале 1-10?» Определение разрыва.',
    'schedule.part2': 'Часть 2: Навыки',
    'schedule.part2.desc': 'Теория и Демо: Ключевой инструмент, пропущенный через библейскую призму.',
    'schedule.coffee': 'Кофе-брейк',
    'schedule.coffee.desc': 'Неструктурированное время для общения.',
    'schedule.part3': 'Часть 3: Практикум',
    'schedule.part3.desc': 'Глубокое погружение в теорию и практический смысл вместе с обсуждением в группах.',
    'schedule.part4': 'Часть 4: Закрепление',
    'schedule.part4.desc': 'Ручка и Бумага: Заполнение рабочих листов. Работа в малых группах (2-3 чел).',
    'schedule.checkout': 'Чек-аут',
    'schedule.checkout.desc': 'Домашнее задание на месяц. «Твой один следующий шаг?»',
    
    // Team
    'team.title': 'Команда',
    'team.elya.name': 'Эля Файзулина',
    'team.elya.role': 'ТЕЛО И ЗДОРОВЬЕ',
    'team.elya.desc': 'Научит относиться к телу как к храму: энергия, сон и здоровое движение.',
    'team.alex.name': 'Александр Звирид',
    'team.alex.role': 'ЦЕРКОВЬ И ОБЩЕСТВО',
    'team.alex.desc': 'Раскроет тему служения, лидерства и создания благочестивой среды вокруг себя.',
    'team.tanya.name': 'Таня Абрамова',
    'team.tanya.role': 'ОТНОШЕНИЯ И ДУХ',
    'team.tanya.desc': 'С глубоким духовным практикам пребывания в Боге.',
    'team.sasha.name': 'Саша Абрамов',
    'team.sasha.role': 'ПРЕДНАЗНАЧЕНИЕ',
    'team.sasha.desc': 'Проведет вас через процесс поиска личной миссии и стратегического видения жизни.',
    'team.richards.name': 'Рихардс Гаранчс',
    'team.richards.role': 'ФИНАНСЫ И ХАРАКТЕР',
    'team.richards.desc': 'Поможет навести порядок в бюджете и построить "атомные привычки" для долгосрочного роста.',
    'team.victoria.name': 'Виктория Гаранча',
    'team.victoria.role': 'РАЗУМ И КАРЬЕРА',
    'team.victoria.desc': 'Научит преодолевать страхи и ограничивающие убеждения.',
    
    // Footer
    'footer.church': 'Церковь "Храм Спасения"',
    'footer.copyright': '© 2026 Целостная Жизнь. Все права защищены.',
  },
  en: {
    // Header
    'nav.about': 'About',
    'nav.program': 'Program',
    'nav.team': 'Team',
    'nav.register': 'Register',
    
    // Hero
    'hero.year': '2026',
    'hero.dates': '14.02 — 12.12',
    'hero.age': '18 - 50 YEARS',
    'hero.rhythm': '1 SATURDAY PER MONTH',
    'hero.title': 'WHOLESOME LIFE',
    'hero.subtitle': 'A practical course for those who want to build a solid foundation in an era of change.',
    'hero.cta': 'Registration Open',
    
    // Philosophy
    'philosophy.title': 'Course Purpose & Philosophy',
    'philosophy.text': 'To train leaders and the church in biblical truths for finding inner peace and balance in the most important areas of life, as well as to connect with God for obtaining Shalom. Every person is called to find their fullness of life and dwell in peace. The result is a clear action plan for how to fulfill yourself in every important area of life according to God\'s design.',
    
    // Benefits
    'benefits.title': 'What Will You Gain?',
    'benefits.clarity.title': 'Clarity of Calling',
    'benefits.clarity.text': 'Stop living on autopilot. Define your mission and understand where God is calling you in this season.',
    'benefits.core.title': 'Inner Core',
    'benefits.core.text': 'Develop resilience to stress, burnout, and anxiety by relying on eternal truths.',
    'benefits.wisdom.title': 'Practical Wisdom',
    'benefits.wisdom.text': 'Get working tools: simple but powerful things that can change your life for the better.',
    'benefits.connections.title': 'Deep Connections',
    'benefits.connections.text': 'Find friends and mentors with whom you can be authentic and grow together.',
    
    // Target
    'target.title': 'Who Is This For?',
    'target.text': 'This course is for leaders, active parishioners, and everyone who strives for a conscious life and wants to find balance (ages 18-65).',
    
    // Method
    'method.title': 'How We Learn',
    'method.subtitle': 'We use Impact Based Learning method. Minimum lectures, more work on reflection, practice, discussions, and habit formation.',
    'method.theory.title': 'Brief Theory',
    'method.theory.text': 'Biblical truth + World theoretical knowledge adapted for our context.',
    'method.apply.title': 'Theory Application',
    'method.apply.text': 'You leave with a completed plan, not just an idea.',
    'method.groups.title': 'Small Groups',
    'method.groups.text': 'Honest feedback, prayer, and case discussion in a safe environment.',
    'method.mentor.title': 'Mentoring & Practice',
    'method.mentor.text': 'Assignments between modules for implementing skills in real life (family, work).',
    
    // Approach
    'approach.title': 'Our Approach',
    'approach.1.title': 'Awareness',
    'approach.1.text': 'How does God see this? What does He want for this area?',
    'approach.2.title': 'Goal',
    'approach.2.text': 'Where do you want to be and what is the gap between current and desired?',
    'approach.3.title': 'Skills',
    'approach.3.text': 'Tools: Biblical wisdom and practical methods.',
    'approach.4.title': 'Action Plan',
    'approach.4.text': 'What specific steps will you take?',
    'approach.5.title': 'Reinforcement',
    'approach.5.text': 'Support environment and habits for long-term changes.',
    
    // Wheel
    'wheel.title': 'Biblical Balance',
    'wheel.subtitle': 'We don\'t divide life into "spiritual" and "secular". Hover over an area to see its meaning in God\'s design.',
    'wheel.hover': 'Hover over the button above to reveal meaning.',
    'wheel.purpose': 'Purpose',
    'wheel.people': 'People',
    'wheel.body': 'Body',
    'wheel.mind': 'Mind',
    'wheel.finance': 'Finances',
    'wheel.character': 'Character',
    'wheel.church': 'Church',
    'wheel.piety': 'Piety',
    'wheel.shalom': 'SHALOM',
    'wheel.purpose.desc': 'Your unique calling and mission in this world.',
    'wheel.people.desc': 'Relationships, family, and community around you.',
    'wheel.body.desc': 'Physical health — your body as a temple of the Spirit.',
    'wheel.mind.desc': 'Renewing of the mind, thinking, and personal growth.',
    'wheel.finance.desc': 'Managing resources as a good steward.',
    'wheel.character.desc': 'Fruit of the Spirit and habit formation.',
    'wheel.church.desc': 'Your place in the Body of Christ and ministry.',
    'wheel.piety.desc': 'Closeness with God, prayer, and spiritual practices.',
    
    // Sessions
    'sessions.title': 'Session Program',
    'sessions.about': 'ABOUT SESSION',
    'sessions.tools': 'TOOLS',
    'sessions.break': 'Summer Break (July - August) — Practice Time',
    
    // Session details
    'session.1.month': 'FEBRUARY',
    'session.1.date': 'FEB 15',
    'session.1.title': '1. Purpose',
    'session.1.about': 'Program start. We will conduct a deep audit of your life and determine the gap between where you are and where God wants to see you.',
    'session.1.tools': 'Balance Wheel (Biblical version)\nIkigai Framework for finding calling\nWriting "Letter from the Future"',
    
    'session.2.month': 'MARCH',
    'session.2.date': 'MAR 15',
    'session.2.title': '2. People & Relationships',
    'session.2.about': 'We will learn to talk about difficult things without aggression and set boundaries that preserve love and respect.',
    'session.2.tools': 'Non-Violent Communication (NVC)\nRelationship Audit\nScripts for setting boundaries',
    
    'session.3.month': 'APRIL',
    'session.3.date': 'APR 18',
    'session.3.title': '3. Body & Energy',
    'session.3.about': 'Your body is a Temple. We will explore the physiology of energy, sleep, and nutrition.',
    'session.3.tools': 'Sleep hygiene protocol\nCreating "Joyful Movement Menu"\nAnalysis of daily energy peaks',
    
    'session.4.month': 'MAY',
    'session.4.date': 'MAY 16',
    'session.4.title': '4. Personal Growth & Career',
    'session.4.about': 'Working with mindset. How do our beliefs sabotage us? We will learn to "renew the mind" (Rom 12:2).',
    'session.4.tools': 'Fear Setting technique (Tim Ferriss)\nCognitive reframing of beliefs',
    
    'session.5.month': 'JUNE',
    'session.5.date': 'JUN 20',
    'session.5.title': '5. Finances & Management',
    'session.5.about': 'We will move from survival stress to the joy of managing Kingdom resources.',
    'session.5.tools': 'Budget "black holes" audit\nEnvelope method (digital)\nGenerosity plan',
    
    'session.6.month': 'SEPTEMBER',
    'session.6.date': 'SEP 19',
    'session.6.title': '6. Character & Habits',
    'session.6.about': 'Character is the sum of your habits. We will implement the science of habit formation.',
    'session.6.tools': 'Habit Loop (Atomic Habits)\nHabit Stacking\nSMART goals for autumn',
    
    'session.7.month': 'OCTOBER',
    'session.7.date': 'OCT 17',
    'session.7.title': '7. Church',
    'session.7.about': 'How to find your place in the Body of Christ and turn your home into a place of ministry?',
    'session.7.tools': 'Spiritual gifts test\nHospitality practice',
    
    'session.8.month': 'NOVEMBER',
    'session.8.date': 'NOV 21',
    'session.8.title': '8. Piety & Shalom',
    'session.8.about': 'The art of slowing down and hearing God in a noisy world.',
    'session.8.tools': 'Lectio Divina (Prayerful reading)\nSabbath practice\nYear review',
    
    'session.9.month': 'DECEMBER',
    'session.9.date': 'DEC 12',
    'session.9.title': 'FINALE: Reflection & Graduation',
    'session.9.about': 'Final session of the year. Time for deep reflection on the journey, reinforcing useful habits, and celebrating victories.',
    'session.9.tools': 'Year Compass annual review\nReinforcing key habits\nCelebration dinner',
    
    // Organization
    'org.title': 'Organization & Timing',
    'org.location': 'Location',
    'org.location.value': 'Fish Hall\nLāčplēša 117, Riga\n2nd floor.',
    'org.cost': 'Cost',
    'org.cost.value': 'Covered by "Temple of Salvation" church',
    'org.commitment': 'Commitment',
    'org.commitment.value': 'We expect participation in every session.',
    'org.details': 'Details',
    'org.details.value': 'Age: 18 - 65 years\nDates: 15.02.2026 — 12.12.2026\nRhythm: 1 Saturday per month',
    
    // Schedule
    'schedule.title': 'Saturday Schedule',
    'schedule.welcome': 'Welcome',
    'schedule.welcome.desc': 'Check-in: "One word describing your week". Coffee.',
    'schedule.part1': 'Part 1: Awareness',
    'schedule.part1.desc': 'God\'s view: Reading Scripture Anchor.\n"Where are you now on a scale of 1-10?" Defining the gap.',
    'schedule.part2': 'Part 2: Skills',
    'schedule.part2.desc': 'Theory and Demo: Key tool through a biblical lens.',
    'schedule.coffee': 'Coffee Break',
    'schedule.coffee.desc': 'Unstructured time for fellowship.',
    'schedule.part3': 'Part 3: Workshop',
    'schedule.part3.desc': 'Deep dive into theory and practical meaning with group discussions.',
    'schedule.part4': 'Part 4: Reinforcement',
    'schedule.part4.desc': 'Pen and Paper: Filling worksheets. Work in small groups (2-3 people).',
    'schedule.checkout': 'Check-out',
    'schedule.checkout.desc': 'Homework for the month. "Your one next step?"',
    
    // Team
    'team.title': 'Team',
    'team.elya.name': 'Elya Fayzulina',
    'team.elya.role': 'BODY & HEALTH',
    'team.elya.desc': 'Will teach you to treat your body as a temple: energy, sleep, and healthy movement.',
    'team.alex.name': 'Alexander Zvirid',
    'team.alex.role': 'CHURCH & SOCIETY',
    'team.alex.desc': 'Will reveal the topic of ministry, leadership, and creating a godly environment around yourself.',
    'team.tanya.name': 'Tanya Abramova',
    'team.tanya.role': 'RELATIONSHIPS & SPIRIT',
    'team.tanya.desc': 'With deep spiritual practices of abiding in God.',
    'team.sasha.name': 'Sasha Abramov',
    'team.sasha.role': 'PURPOSE',
    'team.sasha.desc': 'Will guide you through the process of finding personal mission and strategic life vision.',
    'team.richards.name': 'Richards Garanchs',
    'team.richards.role': 'FINANCES & CHARACTER',
    'team.richards.desc': 'Will help you organize your budget and build "atomic habits" for long-term growth.',
    'team.victoria.name': 'Victoria Garancha',
    'team.victoria.role': 'MIND & CAREER',
    'team.victoria.desc': 'Will teach you to overcome fears and limiting beliefs.',
    
    // Footer
    'footer.church': '"Temple of Salvation" Church',
    'footer.copyright': '© 2026 Wholesome Life. All rights reserved.',
  },
  lv: {
    // Header
    'nav.about': 'Par kursu',
    'nav.program': 'Programma',
    'nav.team': 'Komanda',
    'nav.register': 'Reģistrācija',
    
    // Hero
    'hero.year': '2026',
    'hero.dates': '14.02 — 12.12',
    'hero.age': '18 - 50 GADI',
    'hero.rhythm': '1 SESTDIENA MĒNESĪ',
    'hero.title': 'PILNVĒRTĪGA DZĪVE',
    'hero.subtitle': 'Praktisks kurss tiem, kuri vēlas veidot stabilu pamatu pārmaiņu laikmetā.',
    'hero.cta': 'Reģistrācija atvērta',
    
    // Philosophy
    'philosophy.title': 'Kursa mērķis un filozofija',
    'philosophy.text': 'Apmācīt līderus un draudzi Bībeles patiesībās, lai iegūtu iekšēju mieru un līdzsvaru svarīgākajās dzīves jomās, kā arī savienoties ar Dievu, lai iegūtu Šalomu. Katrs cilvēks ir aicināts atrast savu pilnvērtīgo dzīvi un dzīvot mierā. Rezultāts ir skaidrs rīcības plāns, kā realizēt sevi katrā svarīgā dzīves jomā saskaņā ar Dieva nodomu.',
    
    // Benefits
    'benefits.title': 'Ko jūs iegūsiet?',
    'benefits.clarity.title': 'Aicinājuma skaidrība',
    'benefits.clarity.text': 'Beidz dzīvot pēc inerces. Nosaki savu misiju un saproti, kurp Dievs tevi aicina šajā sezonā.',
    'benefits.core.title': 'Iekšējais stingums',
    'benefits.core.text': 'Attīsti noturību pret stresu, izdegšanu un trauksmi, balstoties uz mūžīgām patiesībām.',
    'benefits.wisdom.title': 'Praktiskā gudrība',
    'benefits.wisdom.text': 'Iegūsti strādājošus rīkus: vienkāršas, bet spēcīgas lietas, kas var mainīt tavu dzīvi uz labo pusi.',
    'benefits.connections.title': 'Dziļas saites',
    'benefits.connections.text': 'Atrodi draugus un mentorus, ar kuriem vari būt īsts un augt kopā.',
    
    // Target
    'target.title': 'Kam tas ir domāts?',
    'target.text': 'Šis kurss ir līderiem, aktīviem draudzes locekļiem un visiem, kas tiecas pēc apzinātas dzīves un vēlas atrast līdzsvaru (18-65 gadi).',
    
    // Method
    'method.title': 'Kā mēs mācāmies',
    'method.subtitle': 'Mēs izmantojam Impact Based Learning metodi. Minimums lekciju, vairāk darba pie refleksijas, prakses, diskusijām un paradumu veidošanas.',
    'method.theory.title': 'Īsa teorija',
    'method.theory.text': 'Bībeles patiesība + Pasaules teorētiskās zināšanas, pielāgotas mūsu kontekstam.',
    'method.apply.title': 'Teorijas pielietojums',
    'method.apply.text': 'Tu aizej ar aizpildītu plānu, nevis tikai ideju.',
    'method.groups.title': 'Mazās grupas',
    'method.groups.text': 'Godīga atgriezeniskā saite, lūgšana un gadījumu apspriešana drošā vidē.',
    'method.mentor.title': 'Mentorings un prakse',
    'method.mentor.text': 'Uzdevumi starp moduļiem, lai ieviestu prasmes reālajā dzīvē (ģimene, darbs).',
    
    // Approach
    'approach.title': 'Mūsu pieeja',
    'approach.1.title': 'Apzinātība',
    'approach.1.text': 'Kā Dievs to redz? Ko Viņš vēlas šai jomai?',
    'approach.2.title': 'Mērķis',
    'approach.2.text': 'Kur tu vēlies būt un kāda ir plaisa starp pašreizējo un vēlamo?',
    'approach.3.title': 'Prasmes',
    'approach.3.text': 'Rīki: Bībeles gudrība un praktiskas metodes.',
    'approach.4.title': 'Rīcības plāns',
    'approach.4.text': 'Kādus konkrētus soļus tu speršu?',
    'approach.5.title': 'Nostiprināšana',
    'approach.5.text': 'Atbalstoša vide un paradumi ilgtermiņa izmaiņām.',
    
    // Wheel
    'wheel.title': 'Bībeles līdzsvars',
    'wheel.subtitle': 'Mēs nešķiram dzīvi "garīgajā" un "laicīgajā". Virziet kursoru uz jomu, lai redzētu tās nozīmi Dieva nodomā.',
    'wheel.hover': 'Virziet kursoru uz pogu, lai atklātu nozīmi.',
    'wheel.purpose': 'Mērķis',
    'wheel.people': 'Cilvēki',
    'wheel.body': 'Ķermenis',
    'wheel.mind': 'Prāts',
    'wheel.finance': 'Finanses',
    'wheel.character': 'Raksturs',
    'wheel.church': 'Draudze',
    'wheel.piety': 'Dievbijība',
    'wheel.shalom': 'ŠALOMS',
    'wheel.purpose.desc': 'Tavs unikālais aicinājums un misija šajā pasaulē.',
    'wheel.people.desc': 'Attiecības, ģimene un kopiena ap tevi.',
    'wheel.body.desc': 'Fiziskā veselība — tavs ķermenis kā Gara templis.',
    'wheel.mind.desc': 'Prāta atjaunošana, domāšana un personīgā izaugsme.',
    'wheel.finance.desc': 'Resursu pārvaldība kā labam pārvaldniekam.',
    'wheel.character.desc': 'Gara augļi un paradumu veidošana.',
    'wheel.church.desc': 'Tava vieta Kristus Miesā un kalpošana.',
    'wheel.piety.desc': 'Tuvība ar Dievu, lūgšana un garīgās prakses.',
    
    // Sessions
    'sessions.title': 'Sesiju programma',
    'sessions.about': 'PAR SESIJU',
    'sessions.tools': 'RĪKI',
    'sessions.break': 'Vasaras pārtraukums (jūlijs - augusts) — Prakses laiks',
    
    // Session details
    'session.1.month': 'FEBRUĀRIS',
    'session.1.date': '15 FEB',
    'session.1.title': '1. Mērķis',
    'session.1.about': 'Programmas sākums. Mēs veiksim dziļu tavas dzīves auditu un noteiktsim plaisu starp to, kur tu esi, un kur Dievs vēlas tevi redzēt.',
    'session.1.tools': 'Līdzsvara rats (Bībeles versija)\nIkigai ietvars aicinājuma atrašanai\n"Vēstules no nākotnes" rakstīšana',
    
    'session.2.month': 'MARTS',
    'session.2.date': '15 MAR',
    'session.2.title': '2. Cilvēki un attiecības',
    'session.2.about': 'Mēs mācīsimies runāt par grūtām lietām bez agresijas un noteikt robežas, kas saglabā mīlestību un cieņu.',
    'session.2.tools': 'Nevardarbīga komunikācija (NVC)\nAttiecību audits\nSkripti robežu noteikšanai',
    
    'session.3.month': 'APRĪLIS',
    'session.3.date': '18 APR',
    'session.3.title': '3. Ķermenis un enerģija',
    'session.3.about': 'Tavs ķermenis ir Templis. Mēs izpētīsim enerģijas, miega un uztura fizioloģiju.',
    'session.3.tools': 'Miega higiēnas protokols\n"Priecīgas kustības ēdienkartes" izveide\nDienas enerģijas pīķu analīze',
    
    'session.4.month': 'MAIJS',
    'session.4.date': '16 MAI',
    'session.4.title': '4. Personīgā izaugsme un karjera',
    'session.4.about': 'Darbs ar domāšanu. Kā mūsu pārliecības mūs sabotē? Mēs mācīsimies "atjaunot prātu" (Rom 12:2).',
    'session.4.tools': 'Fear Setting tehnika (Tims Feriss)\nKognitīvā pārliecību pārveidošana',
    
    'session.5.month': 'JŪNIJS',
    'session.5.date': '20 JŪN',
    'session.5.title': '5. Finanses un pārvaldība',
    'session.5.about': 'Mēs pāriešim no izdzīvošanas stresa uz Valstības resursu pārvaldīšanas prieku.',
    'session.5.tools': 'Budžeta "melno caurumu" audits\nAplokšņu metode (digitālā)\nDāsnuma plāns',
    
    'session.6.month': 'SEPTEMBRIS',
    'session.6.date': '19 SEP',
    'session.6.title': '6. Raksturs un paradumi',
    'session.6.about': 'Raksturs ir tavu paradumu summa. Mēs ieviesīsim paradumu veidošanas zinātni.',
    'session.6.tools': 'Paradumu cilpa (Atomic Habits)\nHabit Stacking\nSMART mērķi rudenī',
    
    'session.7.month': 'OKTOBRIS',
    'session.7.date': '17 OKT',
    'session.7.title': '7. Draudze',
    'session.7.about': 'Kā atrast savu vietu Kristus Miesā un pārvērst savas mājas kalpošanas vietā?',
    'session.7.tools': 'Garīgo dāvanu tests\nViesmīlības prakse',
    
    'session.8.month': 'NOVEMBRIS',
    'session.8.date': '21 NOV',
    'session.8.title': '8. Dievbijība un Šaloms',
    'session.8.about': 'Māksla palēnināties un dzirdēt Dievu trokšņainajā pasaulē.',
    'session.8.tools': 'Lectio Divina (Lūgšanu lasīšana)\nŠabata prakse\nGada apskats',
    
    'session.9.month': 'DECEMBRIS',
    'session.9.date': '12 DEC',
    'session.9.title': 'FINĀLS: Refleksija un izlaidums',
    'session.9.about': 'Gada pēdējā sesija. Laiks dziļai refleksijai par noieto ceļu, noderīgo paradumu nostiprināšanai un uzvaru svinēšanai.',
    'session.9.tools': 'Gada apskats (Year Compass)\nGalveno paradumu nostiprināšana\nSvinību vakariņas',
    
    // Organization
    'org.title': 'Organizācija un laiks',
    'org.location': 'Vieta',
    'org.location.value': 'Zivs zāle\nLāčplēša 117, Rīga\n2. stāvs.',
    'org.cost': 'Izmaksas',
    'org.cost.value': 'Sedz "Pestīšanas tempļa" draudze',
    'org.commitment': 'Apņemšanās',
    'org.commitment.value': 'Mēs sagaidām dalību katrā sesijā.',
    'org.details': 'Detaļas',
    'org.details.value': 'Vecums: 18 - 65 gadi\nDatumi: 15.02.2026 — 12.12.2026\nRitms: 1 Sestdiena mēnesī',
    
    // Schedule
    'schedule.title': 'Sestdienas grafiks',
    'schedule.welcome': 'Sveicināšana',
    'schedule.welcome.desc': 'Atzīmēšanās: "Viens vārds, kas apraksta nedēļu". Kafija.',
    'schedule.part1': '1. daļa: Apzinātība',
    'schedule.part1.desc': 'Dieva skatījums: Rakstu enkura lasīšana.\n"Kur tu esi tagad skalā no 1 līdz 10?" Plaisas noteikšana.',
    'schedule.part2': '2. daļa: Prasmes',
    'schedule.part2.desc': 'Teorija un demo: Galvenais rīks caur Bībeles prizmu.',
    'schedule.coffee': 'Kafijas pārtraukums',
    'schedule.coffee.desc': 'Nestrukturēts laiks sadraudzībai.',
    'schedule.part3': '3. daļa: Darbnīca',
    'schedule.part3.desc': 'Dziļa iegremdēšanās teorijā un praktiskajā nozīmē ar grupu diskusijām.',
    'schedule.part4': '4. daļa: Nostiprināšana',
    'schedule.part4.desc': 'Pildspalva un papīrs: Darba lapu aizpildīšana. Darbs mazās grupās (2-3 cilvēki).',
    'schedule.checkout': 'Izrakstīšanās',
    'schedule.checkout.desc': 'Mājas darbs mēnesim. "Tavs viens nākamais solis?"',
    
    // Team
    'team.title': 'Komanda',
    'team.elya.name': 'Eļa Faizuļina',
    'team.elya.role': 'ĶERMENIS UN VESELĪBA',
    'team.elya.desc': 'Iemācīs izturēties pret ķermeni kā pret templi: enerģija, miegs un veselīga kustība.',
    'team.alex.name': 'Aleksandrs Zvirids',
    'team.alex.role': 'DRAUDZE UN SABIEDRĪBA',
    'team.alex.desc': 'Atklās kalpošanas, līderības un dievbijīgas vides veidošanas tēmu.',
    'team.tanya.name': 'Taņa Abramova',
    'team.tanya.role': 'ATTIECĪBAS UN GARS',
    'team.tanya.desc': 'Ar dziļām garīgām praktiķēm uzturēšanai Dievā.',
    'team.sasha.name': 'Saša Abramovs',
    'team.sasha.role': 'MĒRĶIS',
    'team.sasha.desc': 'Vadīs tevi caur personīgās misijas un stratēģiskās dzīves vīzijas atrašanas procesu.',
    'team.richards.name': 'Ričards Garančs',
    'team.richards.role': 'FINANSES UN RAKSTURS',
    'team.richards.desc': 'Palīdzēs sakārtot budžetu un veidot "atomāros paradumus" ilgtermiņa izaugsmei.',
    'team.victoria.name': 'Viktorija Garanča',
    'team.victoria.role': 'PRĀTS UN KARJERA',
    'team.victoria.desc': 'Iemācīs pārvarēt bailes un ierobežojošus uzskatus.',
    
    // Footer
    'footer.church': '"Pestīšanas tempļa" draudze',
    'footer.copyright': '© 2026 Pilnvērtīga dzīve. Visas tiesības aizsargātas.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('ru');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
