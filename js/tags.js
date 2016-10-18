function getTags() {
	return [

	{
		tag_name : 'Показатели',
		tag : 'm-',
		level : 1
	},

	{
		tag_name : 'Summary',
		tag : 'm-summary',
		level : 2
	},

	{
		tag_name : 'Макро',
		tag : 'm-macro',
		level : 2
	},

	{
		tag_name : 'Ликвидность',
		tag : 'm-liquidity',
		level : 2
	},

	{
		tag_name : 'Капитал',
		tag : 'm-capital',
		level : 2
	},

	{
		tag_name : 'Баланс',
		tag : 'm-balance',
		level : 2
	},

	{
		tag_name : 'Доход',
		tag : 'm-pl',
		level : 2
	},

	{
		tag_name : 'Ставки',
		tag : 'm-rates',
		level : 2
	},

	{
		tag_name : 'NPL',
		tag : 'm-npl',
		level : 2
	},

	{
		tag_name : 'Заявки',
		tag : 'm-application',
		level : 2
	},

	{
		tag_name : 'RAROC',
		tag : 'm-raroc',
		level : 2
	},

	{
		tag_name : 'Условные продукт',
		tag : 'm-up',
		level : 2
	},

	{
		tag_name : 'Риск-метрики',
		tag : 'm-risk',
		level : 2
	},

	{
		tag_name : 'Клиенты',
		tag : 'c:',
		level : 1
	},

	{
		tag_name : 'Физ. лица',
		tag : 'c:retail',
		level : 2
	},

	{
		tag_name : 'Юр. лица',
		tag : 'c:corporate',
		level : 2
	},

	{
		tag_name : 'Блоки',
		tag : 'b:',
		level : 1
	},

	{
		tag_name : 'Розничный',
		tag : 'b:rb',
		level : 2
	},

	{
		tag_name : 'CIB',
		tag : 'b:cib',
		level : 2
	},

	{
		tag_name : 'Корпоративный',
		tag : 'b:cb',
		level : 2
	}, {
		tag_name : 'Крупные',
		tag : 'b:large',
		level : 3
	},

	{
		tag_name : 'Средние',
		tag : 'b:medium',
		level : 3
	},

	{
		tag_name : 'РГС',
		tag : 'b:rgs',
		level : 3
	},

	{
		tag_name : 'ОПК',
		tag : 'b:opk',
		level : 3
	},

	{
		tag_name : 'Малые',
		tag : 'b:small',
		level : 3
	},

	{
		tag_name : 'УБ',
		tag : 'b:ub',
		level : 2
	},

	{
		tag_name : 'БМО',
		tag : 'b:bmo',
		level : 2
	},

	{
		tag_name : 'Продукты',
		tag : 'a:',
		level : 1
	},

	{
		tag_name : 'Привлечение',
		tag : 'a:borrowing',
		level : 2
	},

	{
		tag_name : 'Кредиты',
		tag : 'a:loan',
		level : 2
	},

	{
		tag_name : 'Жилищные',
		tag : 'a:mortgage',
		level : 3
	},

	{
		tag_name : 'Авто',
		tag : 'a:car',
		level : 3
	},

	{
		tag_name : 'Кредитные карты',
		tag : 'a:credit_cards',
		level : 3
	},

	{
		tag_name : 'Потреб',
		tag : 'a:consumer',
		level : 3
	},

	{
		tag_name : 'Ценные бумаги',
		tag : 'a:securities',
		level : 2
	},

	{
		tag_name : 'Прогноз',
		tag : 'f:',
		level : 1
	},

	{
		tag_name : 'Прогноз',
		tag : 'f:plan',
		level : 2
	},

	{
		tag_name : 'Регион',
		tag : 't:',
		level : 1
	},

	{
		tag_name : 'Тер. банки',
		tag : 't:tb',
		level : 2
	},

	{
		tag_name : 'ЦА',
		tag : 't:ca',
		level : 2
	},

	{
		tag_name : 'Каналы',
		tag : 'ch:',
		level : 1
	},

	{
		tag_name : 'Устр-ва самообсл.',
		tag : 'ch:atm',
		level : 2
	},

	{
		tag_name : 'Удаленные',
		tag : 'ch:remote',
		level : 2
	},

	{
		tag_name : 'Программы',
		tag : 'p:',
		level : 1
	},

	{
		tag_name : 'Очередей.Нет!',
		tag : 'p:queue',
		level : 2
	},

	{
		tag_name : 'Прочее',
		tag : 'o:',
		level : 1
	},

	{
		tag_name : 'Информационная картина',
		tag : 'o:info',
		level : 2
	}, {
		tag_name : 'Инциденты',
		tag : 'o:incidents',
		level : 2
	}

	];
}

function getSlides() {

	return [
			{
				name : "Executive Summary",
				tags : "m-summary",
				file : "Слайд3.jpg"
			},

			{
				name : "Рыночные доли",
				tags : "m-summary",
				file : "Слайд4.jpg"
			},

			{
				name : "Цены акций и индексы",
				tags : "m-macro",
				file : "Слайд6.jpg"
			},

			{
				name : "Оценки аналитиков",
				tags : "m-macro",
				file : "Слайд7.jpg"
			},

			{
				name : "Кривые доходности",
				tags : "m-macro",
				file : "Слайд8.jpg"
			},

			{
				name : "Валютный и денежный рынок",
				tags : "m-macro",
				file : "Слайд9.jpg"
			},

			{
				name : "Дэшборд ликвидности Сбербанка",
				tags : "m-liquidity",
				file : "Слайд11.jpg"
			},

			{
				name : "Физическая ликвидность: рубли часть 1",
				tags : "m-liquidity",
				file : "Слайд12.jpg"
			},

			{
				name : "Физическая ликвидность: рубли часть 2",
				tags : "m-liquidity",
				file : "Слайд13.jpg"
			},

			{
				name : "Прогноз норматива краткосрочной ликвидности (H26)",
				tags : "m-liquidity",
				file : "Слайд15.jpg"
			},

			{
				name : "Достаточность капитала",
				tags : "m-capital",
				file : "Слайд16.jpg"
			},

			{
				name : "Динамика статей баланса: Юр. лица, Рубли (кредиты и привлечение)",
				tags : "m-balance c:corporate a:loan a:borrowing",
				file : "Слайд17.jpg"
			},

			{
				name : "Динамика статей баланса: Юр. лица, Рубли (текущие и срочные счета)",
				tags : "m-balance c:corporate a:borrowing",
				file : "Слайд18.jpg"
			},

			{
				name : "Динамика статей баланса: Юр. лица, Валюта (кредиты и привлечение)",
				tags : "m-balance c:corporate a:loan a:borrowing",
				file : "Слайд19.jpg"
			},

			{
				name : "Динамика статей баланса: Юр. лица, Валюта (текущие и срочные счета)",
				tags : "m-balance c:corporate a:borrowing",
				file : "Слайд20.jpg"
			},

			{
				name : "Динамика статей баланса: Физ. лица, Рубли (кредиты и привлечение)",
				tags : "m-balance c:retail a:loan a:borrowing",
				file : "Слайд21.jpg"
			},

			{
				name : "Динамика статей баланса: Физ. лица, Рубли (текущие и срочные счета)",
				tags : "m-balance c:retail a:borrowing",
				file : "Слайд22.jpg"
			},

			{
				name : "Динамика статей баланса: Физ. лица, Валюта (кредиты и привлечение)",
				tags : "m-balance c:retail a:loan a:borrowing",
				file : "Слайд23.jpg"
			},

			{
				name : "Динамика статей баланса: Физ. лица, Валюта (текущие и срочные счета)",
				tags : "m-balance c:retail a:borrowing",
				file : "Слайд24.jpg"
			},

			{
				name : "Справочно: показатели ликвидности Банка",
				tags : "m-liquidity a:loan a:borrowing",
				file : "Слайд25.jpg"
			},

			{
				name : "Ставки по сделкам привлечения юр. лиц в депозиты в рублях",
				tags : "m-rates c:corporate a:borrowing",
				file : "Слайд26.jpg"
			},

			{
				name : "Ставки по сделкам привлечения юр. лиц в депозиты в долларах США",
				tags : "m-rates c:corporate a:borrowing",
				file : "Слайд27.jpg"
			},

			{
				name : "Ожидаемая динамика балансовых остатков",
				tags : "f:plan m-balance",
				file : "Слайд28.jpg"
			},

			{
				name : "Закрытые бухгалтерские балансовые данные",
				tags : "m-summary c:corporate m-balance c:retail a:loan a:borrowing",
				file : "Слайд30.jpg"
			},

			{
				name : "Работающие активы. CIB",
				tags : "c:corporate b:cib a:loan m-balance",
				file : "Слайд32.jpg"
			},

			{
				name : "Выдачи кредитов. CIB",
				tags : "c:corporate b:cib a:loan m-balance",
				file : "Слайд33.jpg"
			},

			{
				name : "TOP-10 выдач. CIB",
				tags : "c:corporate b:cib a:loan m-balance",
				file : "Слайд34.jpg"
			},

			{
				name : "Проблемная задолженность крупнейших клиентов. NPL90+",
				tags : "m-npl c:corporate b:cib a:loan",
				file : "Слайд35.jpg"
			},

			{
				name : "Привлеченные средства. CIB",
				tags : "m-balance c:corporate b:cib a:borrowing",
				file : "Слайд36.jpg"
			},

			{
				name : "Новые депозиты, приток за неделю. CIB",
				tags : "m-balance c:corporate b:cib a:borrowing",
				file : "Слайд37.jpg"
			},

			{
				name : "Неснижаемые остатки, приток за неделю. CIB",
				tags : "m-balance c:corporate b:cib a:borrowing",
				file : "Слайд38.jpg"
			},

			{
				name : "Кредитный портфель. КБ",
				tags : "m-balance c:corporate b:cb a:loan",
				file : "Слайд40.jpg"
			},

			{
				name : "Выдачи кредитов. КБ",
				tags : "m-balance c:corporate b:cb a:loan",
				file : "Слайд41.jpg"
			},

			{
				name : "Кредитный портфель. Крупные и Средние и РГС",
				tags : "m-balance c:corporate b:cb b:large b:medium b:rgs a:loan",
				file : "Слайд42.jpg"
			},

			{
				name : "Кредитный портфель. ОПК И Малые",
				tags : "m-balance c:corporate b:cb b:opk b:small a:loan",
				file : "Слайд43.jpg"
			},

			{
				name : "Проблемная задолженность Корпоративных клиентов. NPL90+",
				tags : "m-npl c:corporate b:cb a:loan",
				file : "Слайд44.jpg"
			},

			{
				name : "Привлеченные средства. КБ",
				tags : "m-balance c:corporate b:cb a:borrowing",
				file : "Слайд45.jpg"
			},

			{
				name : "Новые депозиты, приток за неделю. КБ",
				tags : "m-balance c:corporate b:cb a:borrowing",
				file : "Слайд46.jpg"
			},

			{
				name : "Неснижаемые остатки, приток за неделю. КБ",
				tags : "m-balance c:corporate b:cb a:borrowing",
				file : "Слайд47.jpg"
			},

			{
				name : "СДО кредитов и привлеченных средств. КПЭ КБ",
				tags : "m-balance c:corporate b:cb a:borrowing a:loan",
				file : "Слайд48.jpg"
			},

			{
				name : "Заявки. Корпоративные клиенты",
				tags : "m-application c:corporate b:cb b:small",
				file : "Слайд49.jpg"
			},

			{
				name : "Работа с заявками по новому кредитному процессу",
				tags : "m-application c:corporate b:cb",
				file : "Слайд50.jpg"
			},

			{
				name : "Работа с заявками малого и микробизнеса",
				tags : "m-application c:corporate b:cb b:small",
				file : "Слайд51.jpg"
			},

			{
				name : "Обзор проведенных расчетов RAROC с КПКИ ЦА от 28.09.2016",
				tags : "m-raroc c:corporate t:ca",
				file : "Слайд53.jpg"
			},

			{
				name : "Обзор проведенных расчетов RAROC по сделкам КПКИ ТБ, одобренным за период с 23.09.2016  -  29.09.2016",
				tags : "m-raroc c:corporate t:tb",
				file : "Слайд54.jpg"
			},

			{
				name : "Обзор проведенных расчетов RAROC по VD клиентам на КПКИ ТБ, одобренным за период с 23.09.2016  -  29.09.2016",
				tags : "m-raroc c:corporate t:tb",
				file : "Слайд55.jpg"
			},

			{
				name : "Факторный анализ проведенных расчетов RAROC от 28.09.2016 (ГК «ОВК»)",
				tags : "m-raroc c:corporate",
				file : "Слайд56.jpg"
			},

			{
				name : "Факторный анализ проведенных расчетов RAROC от 28.09.2016 (ГК «Yamata»)",
				tags : "m-raroc c:corporate",
				file : "Слайд57.jpg"
			},

			{
				name : "Факторный анализ проведенных расчетов RAROC от 28.09.2016 (ГК «Ренова»)",
				tags : "m-raroc c:corporate",
				file : "Слайд58.jpg"
			},

			{
				name : "Факторный анализ проведенных расчетов RAROC от 28.09.2016 (ГК «Башнефть»)",
				tags : "m-raroc c:corporate",
				file : "Слайд59.jpg"
			},

			{
				name : "Факторный анализ проведенных расчетов RAROC от 28.09.2016 (ГК «ЧТЗ Сервис»)",
				tags : "m-raroc c:corporate",
				file : "Слайд60.jpg"
			},

			{
				name : "Факторный анализ проведенных расчетов RAROC от 28.09.2016 (ГК «Дорстройсервис»)",
				tags : "m-raroc c:corporate",
				file : "Слайд61.jpg"
			},

			{
				name : "Факторный анализ проведенных расчетов RAROC от 28.09.2016 (ГК «Полимерпром»)",
				tags : "m-raroc c:corporate",
				file : "Слайд62.jpg"
			},

			{
				name : "Факторный анализ проведенных расчетов RAROC от 28.09.2016 (ГК «Сусуманзолото»)",
				tags : "m-raroc c:corporate",
				file : "Слайд63.jpg"
			},

			{
				name : "Кредитный портфель. РБ",
				tags : "m-balance c:retail b:rb a:loan",
				file : "Слайд65.jpg"
			},

			{
				name : "Кредитный портфель (динамика). РБ",
				tags : "m-balance c:retail b:rb a:loan",
				file : "Слайд66.jpg"
			},

			{
				name : "Процентные ставки по кредитам. РБ",
				tags : "m-rates c:retail b:rb a:loan",
				file : "Слайд67.jpg"
			},

			{
				name : "Кредитные карты",
				tags : "m-balance c:retail b:rb a:loan a:credit_cards",
				file : "Слайд68.jpg"
			},

			{
				name : "Заявки розничных клиентов",
				tags : "m-application c:retail b:rb",
				file : "Слайд69.jpg"
			},

			{
				name : "Работа с заявками розничных клиентов",
				tags : "m-application c:retail b:rb",
				file : "Слайд70.jpg"
			},

			{
				name : "Работа с заявками по потребительским кредитам",
				tags : "m-application c:retail b:rb a:loan a:consumer",
				file : "Слайд71.jpg"
			},

			{
				name : "Проблемная задолженность физических лиц. NPL90+",
				tags : "m-npl c:retail b:rb t:tb",
				file : "Слайд72.jpg"
			},

			{
				name : "Проблемная задолженность физических лиц в разрезе продуктов. NPL90+",
				tags : "m-npl c:retail b:rb a:loan a:car a:mortgage a:credit_cards a:consumer",
				file : "Слайд73.jpg"
			},

			{
				name : "Условный продукт",
				tags : "m-up c:retail b:rb",
				file : "Слайд74.jpg"
			},

			{
				name : "Устройства самообслуживания",
				tags : "c:retail b:rb t:tb ch:atm",
				file : "Слайд75.jpg"
			},

			{
				name : "Удаленные каналы обслуживания физических лиц (количество активных клиентов и % проникновения)",
				tags : "c:retail b:rb t:tb ch:remote",
				file : "Слайд76.jpg"
			},

			{
				name : "Удаленные каналы обслуживания (действующие подписки на автоплатеж и время ожидания)",
				tags : "c:retail b:rb t:tb ch:remote",
				file : "Слайд77.jpg"
			},

			{
				name : "Реализация программы «Очередей.Нет!»",
				tags : "p:queue",
				file : "Слайд78.jpg"
			},

			{
				name : "Отзывы о Сбербанке в социальных сетях",
				tags : "t:tb o:incidents",
				file : "Слайд79.jpg"
			},

			{
				name : "Основные результаты блока Управление Благосостоянием",
				tags : "b:ub f:plan",
				file : "Слайд81.jpg"
			},

			{
				name : "Основные результаты блока Управление Благосостоянием (ООО СК «Сбербанк страхование жизни»)",
				tags : "b:ub",
				file : "Слайд82.jpg"
			},

			{
				name : "Основные результаты блока Управление Благосостоянием (ООО СК «Сбербанк страхование»)",
				tags : "b:ub",
				file : "Слайд83.jpg"
			},

			{
				name : "Основные результаты блока Управление Благосостоянием (Управление активами, НПф, Страховой брокер)",
				tags : "b:ub",
				file : "Слайд84.jpg"
			},

			{
				name : "Основные риск-метрики",
				tags : "m-risk",
				file : "Слайд86.jpg"
			},

			{
				name : "Дайджест по CoR и расходам на резервы",
				tags : "m-risk",
				file : "Слайд87.jpg"
			},

			{
				name : "Крупнейшие кейсы (Выходы на раннюю просрочку, Прирост/выходы в NPL90+, Топ выходов дефолт, Топ улучшений рейтинга)",
				tags : "m-risk m-npl",
				file : "Слайд88.jpg"
			},

			{
				name : "Крупнейшие кейсы (Фокусные инциденты операционного риска)",
				tags : "m-risk",
				file : "Слайд89.jpg"
			},

			{
				name : "Блок Международные операции",
				tags : "m-balance m-capital a:loan a:borrowing b:bmo",
				file : "Слайд91.jpg"
			},

			{
				name : "Дэшборд дочерних банков по ликвидности и капиталу СНГ (Белорусь, Казахстан, Украина)",
				tags : "m-liquidity m-capital b:bmo",
				file : "Слайд92.jpg"
			},

			{
				name : "Дэшборд дочерних банков по ликвидности и капиталу (Denizbank, SBE, SB India)",
				tags : "m-liquidity m-capital b:bmo",
				file : "Слайд93.jpg"
			},

			{
				name : "Денизбанк",
				tags : "m-summary m-balance m-liquidity m-capital a:loan a:borrowing b:bmo",
				file : "Слайд94.jpg"
			},

			{
				name : "Сбербанк Европа",
				tags : "m-summary m-balance m-liquidity m-capital a:loan a:borrowing b:bmo",
				file : "Слайд95.jpg"
			},

			{
				name : "Сбербанк Казахстан",
				tags : "m-summary m-balance m-liquidity m-capital a:loan a:borrowing b:bmo",
				file : "Слайд96.jpg"
			},

			{
				name : "Сбербанк Белоруссия",
				tags : "m-summary m-balance m-liquidity m-capital a:loan a:borrowing b:bmo",
				file : "Слайд97.jpg"
			},

			{
				name : "Сбербанк Украина",
				tags : "m-summary m-balance m-liquidity m-capital a:loan a:borrowing b:bmo",
				file : "Слайд98.jpg"
			},

			{
				name : "Вложения Сбербанка в дочерние банки БМО",
				tags : "m-capital b:bmo",
				file : "Слайд99.jpg"
			},

			{
				name : "Технологические факторы, оказавшие существенное влияние на бизнес за период с 23 по 29 сентября",
				tags : "o:incidents",
				file : "Слайд101.jpg"
			},

			{
				name : "Количество обращений vs. объем операций/активные клиенты 2015 - 2016",
				tags : "o:incidents",
				file : "Слайд102.jpg"
			},

			{
				name : "Структура ТОП-10 проблем Банка",
				tags : "o:incidents",
				file : "Слайд103.jpg"
			},

			{
				name : "Структура обращений, решенных сразу",
				tags : "o:incidents",
				file : "Слайд104.jpg"
			},

			{
				name : "Структура отложенных обращений",
				tags : "o:incidents",
				file : "Слайд105.jpg"
			},

			{
				name : "Результаты работы Службы заботы о клиентах ОПЕРУ (Динамика)",
				tags : "o:incidents",
				file : "Слайд106.jpg"
			},

			{
				name : "Результаты работы Службы заботы о клиентах ОПЕРУ (Тематики решённых обращений)",
				tags : "o:incidents",
				file : "Слайд107.jpg"
			},

			{
				name : "Результаты работы Службы заботы о клиентах ОПЕРУ (Регистрация в CRM и вывод решений на 1-ю линию)",
				tags : "o:incidents",
				file : "Слайд108.jpg"
			},

			{
				name : "Обращения ВСП vs. количество обслуженных клиентов",
				tags : "o:incidents",
				file : "Слайд109.jpg"
			},

			{
				name : "ТОП проблем: Розыск и возврат платежей",
				tags : "o:incidents",
				file : "Слайд111.jpg"
			},

			{
				name : "В фокусе: событие (ОСВЕЩЕНИЕ МИФ В СОЧИ 2016)",
				tags : "o:info",
				file : "Слайд113.jpg"
			},

			{
				name : "Информационная картина недели 24-30.09.2016 (ГЛАВНЫЕ ТЕМЫ С УЧАСТИЕМ ГРУППЫ СБЕРБАНК)",
				tags : "o:info",
				file : "Слайд114.jpg"
			},

			{
				name : "Информационная картина недели 24-30.09.2016 (СТРУКТУРА НЕГАТИВА В СМИ И СОЦИАЛЬНЫХ МЕДИА)",
				tags : "o:info",
				file : "Слайд115.jpg"
			},

			{
				name : "Информационная картина недели 24-30.09.2016 (ГЛАВНЫЕ ТЕМЫ С УЧАСТИЕМ ГРУППЫ СБЕРБАНК В СТРАНАХ ПРИСУТСТВИЯ)",
				tags : "o:info",
				file : "Слайд116.jpg"
			},

			{
				name : "Информационная картина недели 24-30.09.2016 (СТРУКТУРА НЕГАТИВА В СМИ И СОЦИАЛЬНЫХ МЕДИА ЗА ЯНВАРЬ – СЕНТЯБРЬ 2016 Г.)",
				tags : "o:info",
				file : "Слайд117.jpg"
			},

			{
				name : "Информационная картина недели 24-30.09.2016 (УПРАВЛЕНИЕ ИНФОРМАЦИОННЫМ ПОЛЕМ. РЕТРОСПЕКТИВА ЗА СЕНТЯБРЬ)",
				tags : "o:info",
				file : "Слайд118.jpg"
			},

			{
				name : "Информационная картина недели 24-30.09.2016 (ГЛАВНЫЕ КАМПАНИИ ОКТЯБРЯ)",
				tags : "o:info",
				file : "Слайд119.jpg"
			},

			{
				name : "Информационная картина недели 24-30.09.2016 (ГЛАВНЫЕ КАМПАНИИ ОКТЯБРЯ)",
				tags : "o:info",
				file : "Слайд120.jpg"
			},

			{
				name : "Информационная картина недели 24-30.09.2016 (ГЛАВНЫЕ КАМПАНИИ ОКТЯБРЯ)",
				tags : "o:info",
				file : "Слайд121.jpg"
			},

			{
				name : "Информационная картина недели 24-30.09.2016 (ОБЗОР ИННОВАЦИОННЫХ ПРАКТИК В БАНКОВСКОЙ СФЕРЕ)",
				tags : "o:info",
				file : "Слайд122.jpg"
			},

			{
				name : "Информационная картина недели 24-30.09.2016 (ОБЗОР ИННОВАЦИОННЫХ ПРАКТИК В БАНКОВСКОЙ СФЕРЕ)",
				tags : "o:info",
				file : "Слайд123.jpg"
			},

			{
				name : "Информационная картина недели 24-30.09.2016 (ОБЗОР ИННОВАЦИОННЫХ ПРАКТИК В БАНКОВСКОЙ СФЕРЕ)",
				tags : "o:info",
				file : "Слайд124.jpg"
			},

			{
				name : "Информационная картина недели 24-30.09.2016 (ОБЗОР ИННОВАЦИОННЫХ ПРАКТИК В БАНКОВСКОЙ СФЕРЕ)",
				tags : "o:info",
				file : "Слайд125.jpg"
			},

			{
				name : "Производственный статус ПИР",
				tags : "o:pir",
				file : "Слайд126.jpg"
			},

			{
				name : "Портфели ценных бумаг внутреннего банка (Резюме)",
				tags : "m-summary m-balance m-pl m-capital a:securities",
				file : "Слайд129.jpg"
			},

			{
				name : "Портфели ценных бумаг внутреннего банка",
				tags : "m-balance m-capital a:securities",
				file : "Слайд130.jpg"
			},

			{
				name : "Финансовый результат портфелей ценных бумаг внутреннего банка",
				tags : "m-pl m-capital a:securities",
				file : "Слайд131.jpg"
			}

	];

}

function getData($filter) {

	var $slides = getSlides();
	var arrReturn = [];
	var bInclude;
	var bFound;
	var counts = {};

	for ( var i = 0; i < $slides.length; i++) {

		bInclude = true;
		var item = $slides[i];
		var item_tags = item.tags;
		var arr_tags = item_tags.split(' ');

		if ($filter) {
			for ( var iFilter = 0; iFilter < $filter.length; iFilter++) {

				bFound = false;
				for ( var iTag = 0; iTag < arr_tags.length; iTag++) {
					if (arr_tags[iTag] === $filter[iFilter]) {
						bFound = true;
					}
				}

				if (bFound === false) {
					bInclude = false;
				}
			}
		}

		if (bInclude) {
			arrReturn.push([ '<a href = "slides/' + item.file
					+ '" target = "_blank">' + item.name + '</a>' ]);

			for ( var iTag = 0; iTag < arr_tags.length; iTag++) {
				if (counts[arr_tags[iTag]] != undefined) {
					counts[arr_tags[iTag]] = counts[arr_tags[iTag]] + 1;
				} else {
					counts[arr_tags[iTag]] = 1;
				}
			}

		}
	}

	updateCounts(counts);

	/*
	 * $slides.forEach(function(item, i, arr) { /* if ($filter) { bInclude =
	 * true; $filter.forEach(function(item, i, arr) {
	 * 
	 * }); } else { bInclude = true; }
	 * 
	 * if (bInclude === true) { arrReturn.push([ '<a href = "slides/' +
	 * item.file + '" target = "_blank">' + item.name + '</a>' ]); }
	 */

	return arrReturn;
}

function updateCounts(counts) {
	$(".btn").each(function(k, n) {
		var value;
		
		if (counts[n.id] != undefined) {
			value = counts[n.id];
		}
		else {
			value = "";
		}
		n.children[0].innerText = value; 		

	});

	/*
	 * for (k in counts) { console.log(k); console.log(counts[k]); }
	 */
}

function setData($data) {

	$("#sr").DataTable().rows().remove();

	for ( var i = 0; i < $data.length; i++) {
		$("#sr").DataTable().row.add($data[i]);
	}
	$("#sr").DataTable().draw();
}

function drawButtons() {
	var $tags = getTags();
	var $html = '';
	var $size = '';

	for ( var i = 0; i < $tags.length; i++) {

		if ($tags[i].level === 1) {
			$size = '';

			if (i > 0) {
				$html = $html + '</tr>';
			}
			$html = $html + '<tr class = "table-bordered">';

			$html = $html + '<td>' + $tags[i].tag_name + '</td><td>';

		} else {
			if ($tags[i].level === 2) {
				$size = 'btn-sm ml5 mb5';
			} else {
				$size = 'btn-xs';
			}

			$html = $html + '<a id = "' + $tags[i].tag
					+ '" class="btn btn-default ' + $size + '" href="#">'
					+ $tags[i].tag_name + '</a>';

		}

		if (i === $tags.length - 1) {
			$html = $html + '</tr>';
		}

	}

	$(".graph").html($html);
	$(".btn").click(function() {
		$(this).toggleClass("btn-primary");
		// $(this).toggleClass("active");

		var $filter = [];
		$(".btn-primary").each(function(i, item) {
			$filter.push(this.id);
		});
		setData(getData($filter));

	});

}

function drawButtons2() {
	var $tags = getTags();
	var $html = '';
	var $size = '';

	$html = '';

	for ( var i = 0; i < $tags.length; i++) {

		if ($tags[i].level === 1) {
			$size = '';

			if (i > 0) {
				$html = $html + '</td>';
			}
			$html = $html + '<td class = "width-1">' + $tags[i].tag_name;

		} else {
			if ($tags[i].level === 2) {
				$size = 'btn-sm mr5 mt5';
			} else {
				$size = 'btn-xs mr5 mt5';
			}

			$html = $html + '<a id = "' + $tags[i].tag
					+ '" class="font-12px btn btn-default pos-relative '
					+ $size + '" href="#">' + $tags[i].tag_name
					+ '<div class="info">NN</div>' + '</a>';

		}

		if (i === $tags.length - 1) {
			$html = $html + '</td>';
		}

	}

	$(".graph").html($html);
	$(".btn").click(function() {
		$(this).toggleClass("btn-primary");
		// $(this).toggleClass("active");

		var $filter = [];
		$(".btn-primary").each(function(i, item) {
			$filter.push(this.id);
		});
		setData(getData($filter));

	});

}

$(document).ready(function() {
	// to do main: fill in search

	$("#sr").DataTable({
		searching : true,
		ordering : false,
		bLengthChange : false
	});

	setData(getData());
	$("thead").hide();

	// Format Search Label
	var $n = $("label")[0].children[0];
	$n.className = "width-100";

});
