import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'ru' | 'en' | 'lv';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  ru: {
    // Church Info
    'church.name': 'Храм Спасения',
    'church.officialName': 'Rīgas Misionāru baptistu draudze',
    'church.shortName': 'Евангельская церковь',
    'church.tagline': 'Евангельская церковь в Риге',
    'church.welcome': 'Добро пожаловать в наш дом! Мы — живая община верующих, объединённых любовью ко Христу. Здесь каждый найдёт поддержку, вдохновение и путь к духовному росту.',
    'church.shortDesc': 'Евангельская христианская церковь, служащая Риге с любовью и верой.',
    'church.serviceSunday': 'Воскресенье 11:00',
    'church.serviceWednesday': 'Библейские занятия: Ср 18:00',
    'church.planVisit': 'Посетить нас',
    'church.watchLive': 'Смотреть онлайн',

    // Navigation
    'nav.about': 'О нас',
    'nav.events': 'События',
    'nav.ministries': 'Служения',
    'nav.care': 'Забота',
    'nav.contacts': 'Контакты',
    'nav.donations': 'Пожертвования',
    'nav.program': 'Программа',
    'nav.calendar': 'Календарь',
    'nav.team': 'Команда',
    'nav.register': 'Регистрация',

    // Events Section
    'events.title': 'События',
    'events.subtitle': 'Будьте в курсе церковной жизни и предстоящих мероприятий',
    'events.news.title': 'Новости',
    'events.news.desc': 'Последние новости и обновления из жизни церкви',
    'events.news.content': 'Следите за нашими социальными сетями для получения последних новостей и обновлений.',
    'events.calendar.title': 'Календарь',
    'events.calendar.desc': 'Расписание богослужений и мероприятий',
    'events.calendar.content': 'Воскресное богослужение в 11:00, Библейские занятия по средам в 18:00.',
    'events.training.title': 'Учебные мероприятия',
    'events.training.desc': 'Курс "Целостная Жизнь" 2026-2027',
    'events.training.content': 'Практический курс для тех, кто хочет построить прочный фундамент, основанный на библейских принципах.',
    'events.training.link': 'Подробнее о курсе',
    'events.baptism.title': 'Водное крещение',
    'events.baptism.desc': 'Информация о крещении и подготовке',
    'events.baptism.content': 'Крещение — важный шаг веры. Свяжитесь с нами для получения информации о подготовке к крещению.',

    // Ministries Section
    'ministries.title': 'Служения',
    'ministries.subtitle': 'Найдите своё место в нашей общине и служите вместе с нами',
    'ministries.wantToServe': 'Хочу служить',
    'ministries.worship.title': 'Богослужения',
    'ministries.worship.desc': 'Еженедельные богослужения и прославление',
    'ministries.sundaySchool.title': 'Воскресная школа',
    'ministries.sundaySchool.desc': 'Библейское обучение для детей',
    'ministries.ribaClub.title': 'Клуб Рыба',
    'ministries.ribaClub.desc': 'Подростковый клуб (12-16 лет)',
    'ministries.youth.title': 'Молодёжь',
    'ministries.youth.desc': 'Служение для молодых людей',
    'ministries.charity.title': 'Благотворительность',
    'ministries.charity.desc': 'Помощь нуждающимся',
    'ministries.choir.title': 'Хор',
    'ministries.choir.desc': 'Музыкальное служение',
    'ministries.smallGroups.title': 'Домашние группы',
    'ministries.smallGroups.desc': 'Малые группы для общения',
    'ministries.serve.title': 'Хочу служить',
    'ministries.serve.desc': 'Найди своё служение',

    // Care Section
    'care.title': 'Забота и Поддержка',
    'care.subtitle': 'Мы здесь, чтобы поддержать вас в любых жизненных ситуациях',
    'care.prayer.title': 'Молитвенная поддержка',
    'care.prayer.desc': 'Отправьте нам свою молитвенную нужду, и мы будем молиться вместе с вами.',
    'care.prayer.cta': 'Отправить просьбу',
    'care.counseling.title': 'Душепопечение',
    'care.counseling.desc': 'Пасторское консультирование для тех, кто нуждается в духовной поддержке и руководстве.',
    'care.counseling.cta': 'Записаться',

    // Contacts Section
    'contacts.title': 'Контакты',
    'contacts.pastor': 'Пастор',
    'contacts.manager': 'Управляющий',
    'contacts.address': 'Адрес',
    'contacts.serviceTimes': 'Время служений',
    'contacts.parking': 'Парковка доступна рядом с церковью',

    // Donations Section
    'donations.title': 'Пожертвования',
    'donations.subtitle': 'Ваши пожертвования помогают нам служить общине и нести Благую Весть',
    'donations.bankDetails': 'Банковские реквизиты',
    'donations.recipient': 'Получатель',
    'donations.bank': 'Банк',
    'donations.thankYou': 'Благодарим вас за вашу щедрость и поддержку служения церкви!',
    'donations.footer': 'Поддержите служение церкви',
    'donations.cta': 'Пожертвовать',

    // Footer
    'footer.rights': 'Все права защищены.',
    'footer.church': 'Церковь "Храм Спасения"',
    'footer.copyright': '© 2026-2027 Целостная Жизнь. Все права защищены.',
    'footer.scanQR': 'Сканируйте для регистрации',
    
    // ===== TRAINING PROGRAM TRANSLATIONS =====
    // Hero
    'hero.year': '2026-2027',
    'hero.dates': '19.09 — 22.05',
    'hero.time': '10:00 — 14:00',
    'hero.age': '18 - 50 ЛЕТ',
    'hero.rhythm': '1 СУББОТА В МЕСЯЦ',
    'hero.title': 'ЦЕЛОСТНАЯ ЖИЗНЬ',
    'hero.subtitle': 'Практический курс для тех, кто хочет построить прочный фундамент в эпоху перемен, основанный на библейских принципах и практическом фундаменте.',
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
    'target.text': 'Этот курс для лидеров, активных прихожан и всех, кто стремится к осознанной жизни и хочет обрести баланс (18-50 лет).',
    'target.checklist.title': 'Это для тебя, если:',
    'target.persona.1': 'У меня есть видение, но я не знаю, как его достичь',
    'target.persona.2': 'Я ставлю одни и те же цели, но терплю неудачу',
    'target.persona.3': 'Я знаю, чего хочу и как это сделать, но мне нужна поддержка',
    'target.persona.4': 'Я разный человек в церкви, на работе и дома',
    'target.persona.5': 'Я вроде бы успешен, но не знаю, ради чего',
    'target.persona.6': 'Я успешен в карьере, но разбит дома (или счастлив дома, но испытываю финансовые трудности)',
    'target.persona.7': 'У меня не расставлены приоритеты или я борюсь с одним из аспектов колеса баланса',
    'target.persona.8': 'Я не хочу расти, но внутренний голос / Бог говорит, что мне нужно измениться, и я откладываю это, я не в мире',
    
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
    'wheel.purpose.quote': '«Ибо мы — Его творение, созданы во Христе Иисусе на добрые дела» — Еф. 2:10',
    'wheel.people.quote': '«Возлюби ближнего твоего, как самого себя» — Мф. 22:39',
    'wheel.body.quote': '«Тело ваше есть храм живущего в вас Святого Духа» — 1 Кор. 6:19',
    'wheel.mind.quote': '«Преобразуйтесь обновлением ума вашего» — Рим. 12:2',
    'wheel.finance.quote': '«Верный в малом и во многом верен» — Лк. 16:10',
    'wheel.character.quote': '«Плод же духа: любовь, радость, мир, долготерпение...» — Гал. 5:22',
    'wheel.church.quote': '«Вы — тело Христово, а порознь — члены» — 1 Кор. 12:27',
    'wheel.piety.quote': '«Приблизьтесь к Богу, и приблизится к вам» — Иак. 4:8',
    
    // Calendar
    'calendar.title': 'Календарь Сессий',
    'calendar.subtitle': 'Даты проведения курса с сентября 2026 по июнь 2027',
    'calendar.break': 'Зимний перерыв',
    
    // Sessions
    'sessions.title': 'Программа Сессий',
    'sessions.about': 'О СЕССИИ',
    'sessions.tools': 'ИНСТРУМЕНТЫ',
    'sessions.break': 'Зимний Перерыв (Декабрь - Январь)',
    
    'session.1.month': 'СЕНТЯБРЬ',
    'session.1.date': '19 СЕН',
    'session.1.title': '1. Предназначение',
    'session.1.about': 'Старт программы. Мы проведем глубокий аудит вашей жизни и определим разрыв между тем, где вы есть, и где Бог хочет вас видеть.',
    'session.1.tools': 'Колесо Баланса (Библейская версия)\nФреймворк Икигай для поиска призвания\nНаписание "Письма из Будущего"',
    
    'session.2.month': 'ОКТЯБРЬ',
    'session.2.date': '17 ОКТ',
    'session.2.title': '2. Люди и Отношения',
    'session.2.about': 'Мы научимся говорить о сложных вещах без агрессии и устанавливать границы, которые сохраняют любовь и уважение.',
    'session.2.tools': 'Ненасильственное Общение (ННО)\nАудит Отношений\nСкрипты для установки границ',
    
    'session.3.month': 'НОЯБРЬ',
    'session.3.date': '21 НОЯ',
    'session.3.title': '3. Тело и Здоровье',
    'session.3.about': 'Ваше тело — Храм. Мы разберем физиологию энергии, сна и питания.',
    'session.3.tools': 'Протокол гигиены сна\nСоздание "Меню Радостного Движения"\nАнализ энергетических пиков дня',
    
    'session.4.month': 'ДЕКАБРЬ',
    'session.4.date': '12 ДЕК',
    'session.4.title': '4. Личностный Рост и Карьера',
    'session.4.about': 'Работа с мышлением. Как наши убеждения саботируют нас? Мы научимся "обновлять ум" (Рим 12:2).',
    'session.4.tools': 'Техника "Fear Setting" (Тим Феррис)\nКогнитивный рефрейминг убеждений',
    
    'session.5.month': 'ЯНВАРЬ',
    'session.5.date': '30 ЯНВ',
    'session.5.title': '5. Характер и Привычки',
    'session.5.about': 'Характер — это сумма ваших привычек. Мы внедрим науку формирования привычек.',
    'session.5.tools': 'Петля Привычки (Atomic Habits)\nHabit Stacking\nSMART-цели',
    
    'session.6.month': 'ФЕВРАЛЬ',
    'session.6.date': '20 ФЕВ',
    'session.6.title': '6. Финансы и Управление',
    'session.6.about': 'Мы перейдем от стресса выживания к радости управления ресурсами Царства.',
    'session.6.tools': 'Аудит "черных дыр" бюджета\nМетод конвертов (цифровой)\nПлан щедрости',
    
    'session.7.month': 'МАРТ',
    'session.7.date': '20 МАР',
    'session.7.title': '7. Церковь',
    'session.7.about': 'Как найти свое место в Теле Христа и превратить свой дом в место служения?',
    'session.7.tools': 'Тест духовных даров\nПрактика гостеприимства',
    
    'session.8.month': 'АПРЕЛЬ',
    'session.8.date': '24 АПР',
    'session.8.title': '8. Благочестие и Шалом',
    'session.8.about': 'Искусство замедляться и слышать Бога в шумном мире.',
    'session.8.tools': 'Lectio Divina (Молитвенное чтение)\nПрактика Шаббата\nReview года',
    
    'session.9.month': 'МАЙ',
    'session.9.date': '22 МАЯ',
    'session.9.title': '9. Разум и Эмоции',
    'session.9.about': 'Работа с эмоциональным интеллектом и внутренней гармонией.',
    'session.9.tools': 'Эмоциональный аудит\nТехники осознанности\nПланирование на год',
    
    'session.10.month': 'ИЮНЬ 2027',
    'session.10.date': '12 ИЮН',
    'session.10.title': 'ФИНАЛ: Рефлексия и Вечер Лидеров',
    'session.10.about': 'Финальная сессия. Время глубокой рефлексии пройденного пути, закрепления полезных привычек и празднования побед вместе с Вечером Лидеров.',
    'session.10.tools': 'Годовой обзор (Year Compass)\nЗакрепление ключевых привычек\nПраздничный ужин с лидерами',
    
    // Organization
    'org.title': 'Организация и Тайминг',
    'org.location': 'Локация',
    'org.location.value': 'Зал Рыба\nLāčplēša 117, Riga\n2 этаж.',
    'org.cost': 'Стоимость',
    'org.cost.value': 'Покрывается церковью «Храм Спасения»\n+ 10 EUR за сессию (кофе и закуски)',
    'org.commitment': 'Посвящение',
    'org.commitment.value': 'Мы ожидаем участия в каждой сессии.',
    'org.details': 'Детали',
    'org.details.value': 'Возраст: 18 - 50 лет\nДаты: 19.09.2026 — 12.06.2027\nРитм: 1 Суббота в месяц',
    
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
  },
  en: {
    // Church Info
    'church.name': 'Salvation Temple',
    'church.officialName': 'Riga Missionary Baptist Church',
    'church.shortName': 'Evangelical Church',
    'church.tagline': 'Evangelical Church in Riga',
    'church.welcome': 'Welcome to our home! We are a living community of believers united by love for Christ. Here everyone will find support, inspiration, and a path to spiritual growth.',
    'church.shortDesc': 'Evangelical Christian church serving Riga with love and faith.',
    'church.serviceSunday': 'Sunday 11:00',
    'church.serviceWednesday': 'Bible Study: Wed 18:00',
    'church.planVisit': 'Plan a Visit',
    'church.watchLive': 'Watch Live',

    // Navigation
    'nav.about': 'About',
    'nav.events': 'Events',
    'nav.ministries': 'Ministries',
    'nav.care': 'Care',
    'nav.contacts': 'Contacts',
    'nav.donations': 'Donations',
    'nav.program': 'Program',
    'nav.calendar': 'Calendar',
    'nav.team': 'Team',
    'nav.register': 'Register',

    // Events Section
    'events.title': 'Events',
    'events.subtitle': 'Stay up to date with church life and upcoming events',
    'events.news.title': 'News',
    'events.news.desc': 'Latest news and updates from church life',
    'events.news.content': 'Follow our social media for the latest news and updates.',
    'events.calendar.title': 'Calendar',
    'events.calendar.desc': 'Schedule of services and events',
    'events.calendar.content': 'Sunday service at 11:00, Bible studies on Wednesdays at 18:00.',
    'events.training.title': 'Training Events',
    'events.training.desc': '"Wholesome Life" Course 2026-2027',
    'events.training.content': 'A practical course for those who want to build a solid foundation based on biblical principles.',
    'events.training.link': 'Learn more about the course',
    'events.baptism.title': 'Water Baptism',
    'events.baptism.desc': 'Information about baptism and preparation',
    'events.baptism.content': 'Baptism is an important step of faith. Contact us for information about baptism preparation.',

    // Ministries Section
    'ministries.title': 'Ministries',
    'ministries.subtitle': 'Find your place in our community and serve with us',
    'ministries.wantToServe': 'I Want to Serve',
    'ministries.worship.title': 'Worship Services',
    'ministries.worship.desc': 'Weekly services and praise',
    'ministries.sundaySchool.title': 'Sunday School',
    'ministries.sundaySchool.desc': 'Bible education for children',
    'ministries.ribaClub.title': 'Riba Club',
    'ministries.ribaClub.desc': 'Teen club (12-16 years)',
    'ministries.youth.title': 'Youth Ministry',
    'ministries.youth.desc': 'Ministry for young people',
    'ministries.charity.title': 'Charity',
    'ministries.charity.desc': 'Helping those in need',
    'ministries.choir.title': 'Choir',
    'ministries.choir.desc': 'Music ministry',
    'ministries.smallGroups.title': 'Home Groups',
    'ministries.smallGroups.desc': 'Small groups for fellowship',
    'ministries.serve.title': 'Want to Serve',
    'ministries.serve.desc': 'Find your ministry',

    // Care Section
    'care.title': 'Care & Support',
    'care.subtitle': 'We are here to support you in any life situation',
    'care.prayer.title': 'Prayer Support',
    'care.prayer.desc': 'Send us your prayer request and we will pray together with you.',
    'care.prayer.cta': 'Submit Request',
    'care.counseling.title': 'Pastoral Counseling',
    'care.counseling.desc': 'Pastoral counseling for those who need spiritual support and guidance.',
    'care.counseling.cta': 'Schedule',

    // Contacts Section
    'contacts.title': 'Contacts',
    'contacts.pastor': 'Pastor',
    'contacts.manager': 'Manager',
    'contacts.address': 'Address',
    'contacts.serviceTimes': 'Service Times',
    'contacts.parking': 'Parking available near the church',

    // Donations Section
    'donations.title': 'Donations',
    'donations.subtitle': 'Your donations help us serve the community and share the Good News',
    'donations.bankDetails': 'Bank Details',
    'donations.recipient': 'Recipient',
    'donations.bank': 'Bank',
    'donations.thankYou': 'Thank you for your generosity and support of the church ministry!',
    'donations.footer': 'Support the church ministry',
    'donations.cta': 'Donate',

    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.church': '"Salvation Temple" Church',
    'footer.copyright': '© 2026-2027 Wholesome Life. All rights reserved.',
    'footer.scanQR': 'Scan to register',
    
    // ===== TRAINING PROGRAM TRANSLATIONS =====
    // Hero
    'hero.year': '2026-2027',
    'hero.dates': '19.09 — 22.05',
    'hero.time': '10:00 — 14:00',
    'hero.age': '18 - 50 YEARS',
    'hero.rhythm': '1 SATURDAY PER MONTH',
    'hero.title': 'WHOLESOME LIFE',
    'hero.subtitle': 'A practical course for those who want to build a solid foundation in an era of change, based on biblical principles and practical foundation.',
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
    'target.text': 'This course is for leaders, active parishioners, and everyone who strives for a conscious life and wants to find balance (ages 18-50).',
    'target.checklist.title': 'This is for you if:',
    'target.persona.1': 'I have a vision but don\'t know how to achieve it',
    'target.persona.2': 'I set the same goals but keep failing',
    'target.persona.3': 'I know what I want and how to do it, but I need support',
    'target.persona.4': 'I am a different person at church, work, and home',
    'target.persona.5': 'I seem successful but don\'t know what for',
    'target.persona.6': 'I\'m successful in career but broken at home (or happy at home but struggling financially)',
    'target.persona.7': 'I don\'t have my priorities straight or I\'m struggling with one aspect of the balance wheel',
    'target.persona.8': 'I don\'t want to grow but my inner voice / God says I need to change, and I postpone it, I\'m not at peace',
    
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
    'wheel.purpose.quote': '"For we are His workmanship, created in Christ Jesus for good works" — Eph. 2:10',
    'wheel.people.quote': '"Love your neighbor as yourself" — Matt. 22:39',
    'wheel.body.quote': '"Your body is a temple of the Holy Spirit" — 1 Cor. 6:19',
    'wheel.mind.quote': '"Be transformed by the renewing of your mind" — Rom. 12:2',
    'wheel.finance.quote': '"Whoever is faithful in little is faithful in much" — Luke 16:10',
    'wheel.character.quote': '"The fruit of the Spirit is love, joy, peace, patience..." — Gal. 5:22',
    'wheel.church.quote': '"You are the body of Christ, and individually members" — 1 Cor. 12:27',
    'wheel.piety.quote': '"Draw near to God, and He will draw near to you" — James 4:8',
    
    // Calendar
    'calendar.title': 'Session Calendar',
    'calendar.subtitle': 'Course dates from September 2026 to June 2027',
    'calendar.break': 'Winter Break',
    
    // Sessions
    'sessions.title': 'Session Program',
    'sessions.about': 'ABOUT SESSION',
    'sessions.tools': 'TOOLS',
    'sessions.break': 'Winter Break (December - January)',
    
    'session.1.month': 'SEPTEMBER',
    'session.1.date': 'SEP 19',
    'session.1.title': '1. Purpose',
    'session.1.about': 'Program start. We will conduct a deep audit of your life and determine the gap between where you are and where God wants to see you.',
    'session.1.tools': 'Balance Wheel (Biblical version)\nIkigai Framework for finding calling\nWriting "Letter from the Future"',
    
    'session.2.month': 'OCTOBER',
    'session.2.date': 'OCT 17',
    'session.2.title': '2. People & Relationships',
    'session.2.about': 'We will learn to talk about difficult things without aggression and set boundaries that preserve love and respect.',
    'session.2.tools': 'Non-Violent Communication (NVC)\nRelationship Audit\nScripts for setting boundaries',
    
    'session.3.month': 'NOVEMBER',
    'session.3.date': 'NOV 21',
    'session.3.title': '3. Body & Health',
    'session.3.about': 'Your body is a Temple. We will explore the physiology of energy, sleep, and nutrition.',
    'session.3.tools': 'Sleep hygiene protocol\nCreating "Joyful Movement Menu"\nAnalysis of daily energy peaks',
    
    'session.4.month': 'DECEMBER',
    'session.4.date': 'DEC 12',
    'session.4.title': '4. Personal Growth & Career',
    'session.4.about': 'Working with mindset. How do our beliefs sabotage us? We will learn to "renew the mind" (Rom 12:2).',
    'session.4.tools': 'Fear Setting technique (Tim Ferriss)\nCognitive reframing of beliefs',
    
    'session.5.month': 'JANUARY',
    'session.5.date': 'JAN 30',
    'session.5.title': '5. Character & Habits',
    'session.5.about': 'Character is the sum of your habits. We will implement the science of habit formation.',
    'session.5.tools': 'Habit Loop (Atomic Habits)\nHabit Stacking\nSMART goals',
    
    'session.6.month': 'FEBRUARY',
    'session.6.date': 'FEB 20',
    'session.6.title': '6. Finances & Management',
    'session.6.about': 'We will move from survival stress to the joy of managing Kingdom resources.',
    'session.6.tools': 'Budget "black holes" audit\nEnvelope method (digital)\nGenerosity plan',
    
    'session.7.month': 'MARCH',
    'session.7.date': 'MAR 20',
    'session.7.title': '7. Church',
    'session.7.about': 'How to find your place in the Body of Christ and turn your home into a place of ministry?',
    'session.7.tools': 'Spiritual gifts test\nHospitality practice',
    
    'session.8.month': 'APRIL',
    'session.8.date': 'APR 24',
    'session.8.title': '8. Piety & Shalom',
    'session.8.about': 'The art of slowing down and hearing God in a noisy world.',
    'session.8.tools': 'Lectio Divina (Prayerful reading)\nSabbath practice\nYear review',
    
    'session.9.month': 'MAY',
    'session.9.date': 'MAY 22',
    'session.9.title': '9. Mind & Emotions',
    'session.9.about': 'Working with emotional intelligence and inner harmony.',
    'session.9.tools': 'Emotional audit\nMindfulness techniques\nYear planning',
    
    'session.10.month': 'JUNE 2027',
    'session.10.date': 'JUN 12',
    'session.10.title': 'FINALE: Reflection & Leaders Evening',
    'session.10.about': 'Final session. Time for deep reflection on the journey, reinforcing useful habits, and celebrating victories together with Leaders Evening.',
    'session.10.tools': 'Year Compass annual review\nReinforcing key habits\nCelebration dinner with leaders',
    
    // Organization
    'org.title': 'Organization & Timing',
    'org.location': 'Location',
    'org.location.value': 'Fish Hall\nLāčplēša 117, Riga\n2nd floor.',
    'org.cost': 'Cost',
    'org.cost.value': 'Covered by "Salvation Temple" church\n+ 10 EUR per session (coffee and snacks)',
    'org.commitment': 'Commitment',
    'org.commitment.value': 'We expect participation in every session.',
    'org.details': 'Details',
    'org.details.value': 'Age: 18 - 50 years\nDates: 19.09.2026 — 12.06.2027\nRhythm: 1 Saturday per month',
    
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
  },
  lv: {
    // Church Info
    'church.name': 'Pestīšanas Templis',
    'church.officialName': 'Rīgas Misionāru baptistu draudze',
    'church.shortName': 'Evaņģēliskā draudze',
    'church.tagline': 'Evaņģēliskā draudze Rīgā',
    'church.welcome': 'Laipni lūdzam mūsu mājās! Mēs esam dzīva ticīgo kopiena, ko vieno mīlestība pret Kristu. Šeit ikviens atradīs atbalstu, iedvesmu un ceļu uz garīgo izaugsmi.',
    'church.shortDesc': 'Evaņģēliskā kristīgā draudze, kas kalpo Rīgai ar mīlestību un ticību.',
    'church.serviceSunday': 'Svētdiena 11:00',
    'church.serviceWednesday': 'Bībeles studijas: Tr 18:00',
    'church.planVisit': 'Apmeklēt mūs',
    'church.watchLive': 'Skatīties tiešsaistē',

    // Navigation
    'nav.about': 'Par mums',
    'nav.events': 'Notikumi',
    'nav.ministries': 'Kalpošanas',
    'nav.care': 'Atbalsts',
    'nav.contacts': 'Kontakti',
    'nav.donations': 'Ziedojumi',
    'nav.program': 'Programma',
    'nav.calendar': 'Kalendārs',
    'nav.team': 'Komanda',
    'nav.register': 'Reģistrācija',

    // Events Section
    'events.title': 'Notikumi',
    'events.subtitle': 'Sekojiet līdzi draudzes dzīvei un gaidāmajiem pasākumiem',
    'events.news.title': 'Jaunumi',
    'events.news.desc': 'Jaunākās ziņas un atjauninājumi no draudzes dzīves',
    'events.news.content': 'Sekojiet mūsu sociālajiem tīkliem, lai uzzinātu jaunākās ziņas.',
    'events.calendar.title': 'Kalendārs',
    'events.calendar.desc': 'Dievkalpojumu un pasākumu grafiks',
    'events.calendar.content': 'Svētdienas dievkalpojums plkst. 11:00, Bībeles studijas trešdienās plkst. 18:00.',
    'events.training.title': 'Mācību pasākumi',
    'events.training.desc': 'Kurss "Pilnvērtīga Dzīve" 2026-2027',
    'events.training.content': 'Praktisks kurss tiem, kuri vēlas veidot stabilu pamatu, balstoties uz Bībeles principiem.',
    'events.training.link': 'Uzzināt vairāk par kursu',
    'events.baptism.title': 'Ūdens kristības',
    'events.baptism.desc': 'Informācija par kristībām un sagatavošanos',
    'events.baptism.content': 'Kristības ir svarīgs ticības solis. Sazinieties ar mums, lai uzzinātu par sagatavošanos kristībām.',

    // Ministries Section
    'ministries.title': 'Kalpošanas',
    'ministries.subtitle': 'Atrodiet savu vietu mūsu kopienā un kalpojiet kopā ar mums',
    'ministries.wantToServe': 'Vēlos kalpot',
    'ministries.worship.title': 'Dievkalpojumi',
    'ministries.worship.desc': 'Iknedēļas dievkalpojumi un slavēšana',
    'ministries.sundaySchool.title': 'Svētdienas skola',
    'ministries.sundaySchool.desc': 'Bībeles mācības bērniem',
    'ministries.ribaClub.title': 'Riba klubs',
    'ministries.ribaClub.desc': 'Pusaudžu klubs (12-16 gadi)',
    'ministries.youth.title': 'Jauniešu kalpošana',
    'ministries.youth.desc': 'Kalpošana jauniem cilvēkiem',
    'ministries.charity.title': 'Labdarība',
    'ministries.charity.desc': 'Palīdzība tiem, kam nepieciešams',
    'ministries.choir.title': 'Koris',
    'ministries.choir.desc': 'Mūzikas kalpošana',
    'ministries.smallGroups.title': 'Mājas grupas',
    'ministries.smallGroups.desc': 'Mazās grupas kopībai',
    'ministries.serve.title': 'Vēlos kalpot',
    'ministries.serve.desc': 'Atrodi savu kalpošanu',

    // Care Section
    'care.title': 'Rūpes un Atbalsts',
    'care.subtitle': 'Mēs esam šeit, lai atbalstītu jūs jebkurā dzīves situācijā',
    'care.prayer.title': 'Lūgšanu atbalsts',
    'care.prayer.desc': 'Nosūtiet mums savu lūgšanas vajadzību, un mēs lūgsimies kopā ar jums.',
    'care.prayer.cta': 'Nosūtīt lūgumu',
    'care.counseling.title': 'Dvēseļu kopšana',
    'care.counseling.desc': 'Mācītāja konsultācijas tiem, kam nepieciešams garīgs atbalsts un vadība.',
    'care.counseling.cta': 'Pieteikties',

    // Contacts Section
    'contacts.title': 'Kontakti',
    'contacts.pastor': 'Mācītājs',
    'contacts.manager': 'Pārvaldnieks',
    'contacts.address': 'Adrese',
    'contacts.serviceTimes': 'Dievkalpojumu laiki',
    'contacts.parking': 'Autostāvvieta pieejama netālu no draudzes',

    // Donations Section
    'donations.title': 'Ziedojumi',
    'donations.subtitle': 'Jūsu ziedojumi palīdz mums kalpot kopienai un nest Labo Vēsti',
    'donations.bankDetails': 'Bankas rekvizīti',
    'donations.recipient': 'Saņēmējs',
    'donations.bank': 'Banka',
    'donations.thankYou': 'Paldies par jūsu dāsnumu un draudzes kalpošanas atbalstu!',
    'donations.footer': 'Atbalstiet draudzes kalpošanu',
    'donations.cta': 'Ziedot',

    // Footer
    'footer.rights': 'Visas tiesības aizsargātas.',
    'footer.church': 'Draudze "Pestīšanas Templis"',
    'footer.copyright': '© 2026-2027 Pilnvērtīga Dzīve. Visas tiesības aizsargātas.',
    'footer.scanQR': 'Skenējiet, lai reģistrētos',
    
    // ===== TRAINING PROGRAM TRANSLATIONS =====
    // Hero
    'hero.year': '2026-2027',
    'hero.dates': '19.09 — 22.05',
    'hero.time': '10:00 — 14:00',
    'hero.age': '18 - 50 GADI',
    'hero.rhythm': '1 SESTDIENA MĒNESĪ',
    'hero.title': 'PILNVĒRTĪGA DZĪVE',
    'hero.subtitle': 'Praktisks kurss tiem, kuri vēlas veidot stabilu pamatu pārmaiņu laikmetā, balstoties uz Bībeles principiem un praktisku pamatu.',
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
    'target.text': 'Šis kurss ir līderiem, aktīviem draudzes locekļiem un visiem, kas tiecas pēc apzinātas dzīves un vēlas atrast līdzsvaru (18-50 gadi).',
    'target.checklist.title': 'Tas ir tev, ja:',
    'target.persona.1': 'Man ir vīzija, bet es nezinu, kā to sasniegt',
    'target.persona.2': 'Es izvirzu vienus un tos pašus mērķus, bet cieš neveiksmi',
    'target.persona.3': 'Es zinu, ko gribu un kā to izdarīt, bet man vajag atbalstu',
    'target.persona.4': 'Es esmu atšķirīgs cilvēks draudzē, darbā un mājās',
    'target.persona.5': 'Es šķietami esmu veiksmīgs, bet nezinu, kāpēc',
    'target.persona.6': 'Es esmu veiksmīgs karjerā, bet salauzts mājās (vai laimīgs mājās, bet finansiāli grūtības)',
    'target.persona.7': 'Man nav sakārtotas prioritātes vai es cīnos ar kādu līdzsvara rata aspektu',
    'target.persona.8': 'Es negribu augt, bet iekšējā balss / Dievs saka, ka man jāmainās, un es to atliek, es neesmu mierā',
    
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
    'wheel.purpose.quote': '"Jo mēs esam Viņa darbs, Kristū Jēzū radīti labiem darbiem" — Ef. 2:10',
    'wheel.people.quote': '"Mīli savu tuvāko kā sevi pašu" — Mt. 22:39',
    'wheel.body.quote': '"Jūsu miesa ir Svētā Gara templis" — 1.Kor. 6:19',
    'wheel.mind.quote': '"Pārvērtieties, atjaunodami savu prātu" — Rom. 12:2',
    'wheel.finance.quote': '"Kas ir uzticams mazumā, tas arī lielumā ir uzticams" — Lk. 16:10',
    'wheel.character.quote': '"Bet Gara auglis ir: mīlestība, prieks, miers, pacietība..." — Gal. 5:22',
    'wheel.church.quote': '"Jūs esat Kristus miesa, un katrs no jums ir tās loceklis" — 1.Kor. 12:27',
    'wheel.piety.quote': '"Tuvojieties Dievam, un Viņš tuvosies jums" — Jēk. 4:8',
    
    // Calendar
    'calendar.title': 'Sesiju kalendārs',
    'calendar.subtitle': 'Kursa datumi no 2026. gada septembra līdz 2027. gada jūnijam',
    'calendar.break': 'Ziemas pārtraukums',
    
    // Sessions
    'sessions.title': 'Sesiju programma',
    'sessions.about': 'PAR SESIJU',
    'sessions.tools': 'RĪKI',
    'sessions.break': 'Ziemas pārtraukums (Decembris - Janvāris)',
    
    'session.1.month': 'SEPTEMBRIS',
    'session.1.date': '19. SEP',
    'session.1.title': '1. Mērķis',
    'session.1.about': 'Programmas sākums. Mēs veiksim dziļu tavas dzīves auditu un noteikt plaisu starp to, kur tu esi, un kur Dievs vēlas tevi redzēt.',
    'session.1.tools': 'Līdzsvara rats (Bībeles versija)\nIkigai ietvars aicinājuma atrašanai\n"Vēstules no nākotnes" rakstīšana',
    
    'session.2.month': 'OKTOBRIS',
    'session.2.date': '17. OKT',
    'session.2.title': '2. Cilvēki un attiecības',
    'session.2.about': 'Mēs mācīsimies runāt par grūtām lietām bez agresijas un noteikt robežas, kas saglabā mīlestību un cieņu.',
    'session.2.tools': 'Nevardarbīgā komunikācija (NVC)\nAttiecību audits\nRobežu noteikšanas skripti',
    
    'session.3.month': 'NOVEMBRIS',
    'session.3.date': '21. NOV',
    'session.3.title': '3. Ķermenis un veselība',
    'session.3.about': 'Tavs ķermenis ir Templis. Mēs izpētīsim enerģijas, miega un uztura fizioloģiju.',
    'session.3.tools': 'Miega higiēnas protokols\n"Priecīgas kustības ēdienkartes" izveide\nDienas enerģijas maksimumu analīze',
    
    'session.4.month': 'DECEMBRIS',
    'session.4.date': '12. DEC',
    'session.4.title': '4. Personīgā izaugsme un karjera',
    'session.4.about': 'Darbs ar domāšanu. Kā mūsu pārliecības mūs sabotē? Mēs mācīsimies "atjaunot prātu" (Rom 12:2).',
    'session.4.tools': 'Fear Setting tehnika (Tim Ferriss)\nPārliecību kognitīvā pārformulēšana',
    
    'session.5.month': 'JANVĀRIS',
    'session.5.date': '30. JAN',
    'session.5.title': '5. Raksturs un paradumi',
    'session.5.about': 'Raksturs ir tavu paradumu summa. Mēs ieviesīsim paradumu veidošanas zinātni.',
    'session.5.tools': 'Paradumu cilpa (Atomic Habits)\nHabit Stacking\nSMART mērķi',
    
    'session.6.month': 'FEBRUĀRIS',
    'session.6.date': '20. FEB',
    'session.6.title': '6. Finanses un pārvaldība',
    'session.6.about': 'Mēs pāriesim no izdzīvošanas stresa uz prieku pārvaldīt Valstības resursus.',
    'session.6.tools': 'Budžeta "melno caurumu" audits\nAplokšņu metode (digitālā)\nDāsnuma plāns',
    
    'session.7.month': 'MARTS',
    'session.7.date': '20. MAR',
    'session.7.title': '7. Draudze',
    'session.7.about': 'Kā atrast savu vietu Kristus Miesā un pārvērst savas mājas par kalpošanas vietu?',
    'session.7.tools': 'Garīgo dāvanu tests\nViesmīlības prakse',
    
    'session.8.month': 'APRĪLIS',
    'session.8.date': '24. APR',
    'session.8.title': '8. Dievbijība un Šaloms',
    'session.8.about': 'Māksla palēnināt un dzirdēt Dievu trokšņainā pasaulē.',
    'session.8.tools': 'Lectio Divina (Lūgšanu lasīšana)\nŠabata prakse\nGada pārskats',
    
    'session.9.month': 'MAIJS',
    'session.9.date': '22. MAI',
    'session.9.title': '9. Prāts un emocijas',
    'session.9.about': 'Darbs ar emocionālo inteliģenci un iekšējo harmoniju.',
    'session.9.tools': 'Emocionālais audits\nApzinātības tehnikas\nGada plānošana',
    
    'session.10.month': 'JŪNIJS 2027',
    'session.10.date': '12. JŪN',
    'session.10.title': 'FINĀLS: Refleksija un Līderu vakars',
    'session.10.about': 'Noslēguma sesija. Laiks dziļai refleksijai par noieto ceļu, noderīgo paradumu nostiprināšanai un uzvaru svinēšanai kopā ar Līderu vakaru.',
    'session.10.tools': 'Year Compass gada pārskats\nGalveno paradumu nostiprināšana\nSvinīgās vakariņas ar līderiem',
    
    // Organization
    'org.title': 'Organizācija un laiks',
    'org.location': 'Vieta',
    'org.location.value': 'Riba zāle\nLāčplēša 117, Rīga\n2. stāvs.',
    'org.cost': 'Izmaksas',
    'org.cost.value': 'Sedz draudze "Pestīšanas Templis"\n+ 10 EUR par sesiju (kafija un uzkodas)',
    'org.commitment': 'Apņemšanās',
    'org.commitment.value': 'Mēs sagaidām dalību katrā sesijā.',
    'org.details': 'Detaļas',
    'org.details.value': 'Vecums: 18 - 50 gadi\nDatumi: 19.09.2026 — 12.06.2027\nRitms: 1 sestdiena mēnesī',
    
    // Schedule
    'schedule.title': 'Sestdienas grafiks',
    'schedule.welcome': 'Sveicināšana',
    'schedule.welcome.desc': 'Reģistrēšanās: "Viens vārds, kas raksturo nedēļu". Kafija.',
    'schedule.part1': '1. daļa: Apzinātība',
    'schedule.part1.desc': 'Dieva skatījums: Rakstu enkura lasīšana.\n"Kur tu tagad esi skalā no 1-10?" Plaisas noteikšana.',
    'schedule.part2': '2. daļa: Prasmes',
    'schedule.part2.desc': 'Teorija un demonstrācija: Galvenais rīks caur Bībeles prizmu.',
    'schedule.coffee': 'Kafijas pārtraukums',
    'schedule.coffee.desc': 'Nestrukturēts laiks kopībai.',
    'schedule.part3': '3. daļa: Praktikums',
    'schedule.part3.desc': 'Dziļa iegremdēšanās teorijā un praktiskajā nozīmē ar grupu diskusijām.',
    'schedule.part4': '4. daļa: Nostiprināšana',
    'schedule.part4.desc': 'Pildspalva un papīrs: Darba lapu aizpildīšana. Darbs mazās grupās (2-3 cilvēki).',
    'schedule.checkout': 'Noslēgums',
    'schedule.checkout.desc': 'Mājas darbs mēnesim. "Tavs viens nākamais solis?"',
    
    // Team
    'team.title': 'Komanda',
    'team.elya.name': 'Eļa Faizulina',
    'team.elya.role': 'ĶERMENIS UN VESELĪBA',
    'team.elya.desc': 'Iemācīs izturēties pret savu ķermeni kā pret templi: enerģija, miegs un veselīga kustība.',
    'team.alex.name': 'Aleksandrs Zvirids',
    'team.alex.role': 'DRAUDZE UN SABIEDRĪBA',
    'team.alex.desc': 'Atklās kalpošanas, līderības tēmu un dievbijīgas vides veidošanu ap sevi.',
    'team.tanya.name': 'Taņa Abramova',
    'team.tanya.role': 'ATTIECĪBAS UN GARS',
    'team.tanya.desc': 'Ar dziļām garīgām praksēm, lai paliktu Dievā.',
    'team.sasha.name': 'Saša Abramovs',
    'team.sasha.role': 'MĒRĶIS',
    'team.sasha.desc': 'Vadīs tevi caur personīgās misijas un stratēģiskās dzīves vīzijas atrašanas procesu.',
    'team.richards.name': 'Rihards Garančs',
    'team.richards.role': 'FINANSES UN RAKSTURS',
    'team.richards.desc': 'Palīdzēs sakārtot budžetu un veidot "atomiskos paradumus" ilgtermiņa izaugsmei.',
    'team.victoria.name': 'Viktorija Garanča',
    'team.victoria.role': 'PRĀTS UN KARJERA',
    'team.victoria.desc': 'Iemācīs pārvarēt bailes un ierobežojošus uzskatus.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language') as Language;
    return saved || 'ru';
  });

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
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
