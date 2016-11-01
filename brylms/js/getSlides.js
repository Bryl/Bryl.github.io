function getObj($name, $tags, $file, $source, $path, $pres_tag) {
	return {
		name : $name,
		tags : $pres_tag + ' ' + $tags,
		file : $path + $file,
		source : $source
	};
}

function getSlides_e_201606() {

	function getObject($name, $tags, $file) {
		return getObj(
				$name,
				$tags,
				$file,
				'Отчет по расходам 2016-06',
				'e_201606/',
				's-expenses');
	}

	var $return = [];

	$return.push(getObject("Основные выводы", "m-summary", "Слайд4.jpg"));
	$return
			.push(getObject(
					"Операционные расходы – результаты 6М’16 года и прогноз до конца 2016 года (Группа)",
					"m-opex f-plan",
					"Слайд5.jpg"));
	$return.push(getObject(
			"ОПУ и основные показатели (Группа)",
			"m-pl",
			"Слайд6.jpg"));
	$return.push(getObject("Динамика CIR (Группа)", "m-cir", "Слайд7.jpg"));
	$return.push(getObject(
			"CIR бизнес-блоков",
			"m-cir b-cib b-cb b-rb b-bmo f-plan",
			"Слайд8.jpg"));
	$return.push(getObject(
			"CIR Группы и влияние на него ДЗО",
			"m-cir",
			"Слайд9.jpg"));
	$return.push(getObject(
			"Операционные расходы – общие тенденции (Группа)",
			"m-opex",
			"Слайд10.jpg"));
	$return.push(getObject(
			"Операционные расходы (Группа)",
			"m-opex",
			"Слайд11.jpg"));
	$return.push(getObject(
			"Операционные расходы - Факторы изменений (Группа)",
			"m-opex",
			"Слайд12.jpg"));
	$return
			.push(getObject(
					"Операционные расходы - Динамика расходов функциональных блоков в разрезе категорий",
					"m-opex b-cib b-cb b-rb b-bmo b-ub b-t b-risk",
					"Слайд13.jpg"));
	$return.push(getObject(
			"Аллокация расходов Группы по бизнес-блокам",
			"m-opex b-cib b-cb b-rb b-bmo",
			"Слайд14.jpg"));
	$return.push(getObject(
			"Персонал – расходы по категории",
			"m-opex m-opex-pers",
			"Слайд16.jpg"));
	$return.push(getObject(
			"Персонал – расходы по функциональным блокам",
			"m-opex m-opex-pers b-cib b-cb b-rb b-bmo b-ub b-t b-risk",
			"Слайд17.jpg"));
	$return.push(getObject(
			"Динамика численности",
			"m-opex m-opex-pers",
			"Слайд18.jpg"));
	$return.push(getObject(
			"Численность функциональных блоков: Динамика",
			"m-opex m-opex-pers b-cib b-cb b-rb b-bmo b-ub b-t b-risk",
			"Слайд19.jpg"));
	$return.push(getObject(
			"Численность функциональных блоков: Прогноз",
			"m-opex m-opex-pers b-cib b-cb b-rb b-bmo b-ub b-t b-risk f-plan",
			"Слайд20.jpg"));
	$return.push(getObject(
			"Недвижимость – расходы по категории",
			"m-opex m-opex-prem",
			"Слайд22.jpg"));
	$return.push(getObject(
			"Недвижимость – затраты по категории",
			"m-capex m-capex-prem",
			"Слайд23.jpg"));
	$return.push(getObject(
			"Структура и динамика портфеля недвижимости",
			"m-opex m-capex m-opex-prem m-capex-prem",
			"Слайд24.jpg"));
	$return.push(getObject(
			"Структура портфеля аренды и динамика ставок",
			"m-opex m-opex-prem",
			"Слайд25.jpg"));
	$return.push(getObject(
			"Исполнение плана выбытия объектов недвижимости",
			"m-capex m-capex-prem",
			"Слайд26.jpg"));
	$return.push(getObject(
			"Информационные технологии – расходы по категории",
			"m-opex m-opex-proj",
			"Слайд28.jpg"));
	$return.push(getObject(
			"Информационные технологии – затраты по категории",
			"m-capex m-capex-proj",
			"Слайд29.jpg"));
	$return
			.push(getObject(
					"Освоение финансового лимита и лимита на открытие (проектная деятельность)",
					"m-capex m-capex-proj m-opex m-opex-proj",
					"Слайд30.jpg"));
	$return.push(getObject(
			"Бизнес-операции – расходы по категории",
			"m-opex m-opex-bis",
			"Слайд32.jpg"));
	$return.push(getObject(
			"Бизнес операции – затраты по категории",
			"m-capex m-capex-bis",
			"Слайд33.jpg"));
	$return.push(getObject(
			"Маркетинг и коммуникации – расходы по категории",
			"m-opex m-opex-other",
			"Слайд35.jpg"));
	$return.push(getObject(
			"Консалтинг – расходы по категории",
			"m-opex m-opex-other",
			"Слайд36.jpg"));
	$return.push(getObject(
			"Расходы по категориям. Транспорт",
			"m-opex m-opex-other",
			"Слайд37.jpg"));
	$return.push(getObject(
			"Благотворительность",
			"m-opex m-opex-other",
			"Слайд38.jpg"));
	$return.push(getObject(
			"Блок Т (OPEX/CAPEX)",
			"m-opex m-capex b-t",
			"Слайд40.jpg"));
	$return.push(getObject(
			"Блок Т (Операционные расходы)",
			"m-opex b-t",
			"Слайд41.jpg"));
	$return.push(getObject("ДРПА (OPEX)", "m-opex b-drpa", "Слайд42.jpg"));
	$return
			.push(getObject("Блок Риски (OPEX)", "m-opex b-risk", "Слайд43.jpg"));
	$return.push(getObject(
			"ЦУНДО - облуживание объектов CIB",
			"m-opex b-cash b-cib",
			"Слайд44.jpg"));
	$return.push(getObject(
			"ЦУНДО - облуживание объектов Корпоративного блока",
			"m-opex b-cash b-cb",
			"Слайд45.jpg"));
	$return.push(getObject(
			"ЦУНДО - облуживание объектов Розничного блока",
			"m-opex b-cash b-rb",
			"Слайд46.jpg"));
	$return.push(getObject(
			"Операционные расходы (CIB)",
			"m-opex b-cib",
			"Слайд48.jpg"));
	$return.push(getObject(
			"Аллокация расходов блока 'Технологии' на CIB",
			"m-opex b-t b-cib",
			"Слайд49.jpg"));
	$return.push(getObject(
			"CIR (Корпоративный бизнес)",
			"m-cir b-cb",
			"Слайд51.jpg"));
	$return.push(getObject(
			"Структура и динамика расходов (Корпоративный бизнес)",
			"m-opex b-cb b-t b-cash b-risk b-drpa",
			"Слайд52.jpg"));
	$return.push(getObject(
			"Операционные расходы (Корпоративный бизнес)",
			"m-opex b-cb",
			"Слайд53.jpg"));
	$return.push(getObject(
			"Правила аллокации расходов (Корпоративный бизнес)",
			"m-opex b-cb b-cib b-rb b-t b-risk b-drpa",
			"Слайд54.jpg"));
	$return.push(getObject(
			"Сегменты - Доходы и расходы (Корпоративный бизнес)",
			"m-opex b-cb b-cb-large b-cb-medium b-cb-small b-cb-rgs b-cb-opk",
			"Слайд55.jpg"));
	$return.push(getObject(
			"Динамика расходов на персонал (Корпоративный бизнес)",
			"m-opex m-opex-pers b-cb",
			"Слайд56.jpg"));
	$return.push(getObject(
			"Расходы по недвижимости (Корпоративный бизнес)",
			"m-opex m-opex-prem b-cb",
			"Слайд57.jpg"));
	$return.push(getObject(
			"Недвижимость (Корпоративный бизнес)",
			"m-opex m-opex-prem b-cb",
			"Слайд58.jpg"));
	$return.push(getObject(
			"Аллокация расходов блока 'Технологии' на Корпоративный бизнес",
			"m-opex b-cb b-t",
			"Слайд59.jpg"));
	$return.push(getObject(
			"Операционные расходы (Розничный бизнес)",
			"m-opex b-rb",
			"Слайд61.jpg"));
	$return.push(getObject(
			"CIR (Розничный бизнес)",
			"m-cir b-rb",
			"Слайд62.jpg"));
	$return.push(getObject(
			"Прямые расходы на персонал (Розничный бизнес)",
			"m-opex m-opex-pers b-rb",
			"Слайд63.jpg"));
	$return.push(getObject(
			"Расходы по подразделениям (Розничный бизнес)",
			"m-opex b-rb t-tb t-ca",
			"Слайд64.jpg"));
	$return.push(getObject(
			"Прямые расходы на недвижимость (1/2) (Розничный бизнес)",
			"m-opex m-opex-prem b-rb",
			"Слайд65.jpg"));
	$return.push(getObject(
			"Прямые расходы на недвижимость (2/2) (Розничный бизнес)",
			"m-opex m-opex-prem b-rb",
			"Слайд66.jpg"));
	$return.push(getObject(
			"Недвижимость (Розничный бизнес)",
			"m-opex m-opex-prem b-rb t-tb t-ca",
			"Слайд67.jpg"));
	$return.push(getObject(
			"Аллокация расходов блока 'Технологии' на Розничный бизнес",
			"m-opex b-rb b-t",
			"Слайд68.jpg"));
	$return.push(getObject(
			"Операционные расходы ДБ",
			"m-opex b-bmo",
			"Слайд70.jpg"));
	$return.push(getObject(
			"Операционные расходы ДБ",
			"m-opex b-bmo",
			"Слайд71.jpg"));
	$return.push(getObject(
			"Консолидированные ДЗО и ДБ (кроме входящих в БМО)",
			"m-opex m-cir m-roe b-bmo b-cib b-cb b-ub b-rb",
			"Слайд72.jpg"));
	$return.push(getObject(
			"Операционные расходы (Управление благосостоянием)",
			"m-opex b-ub",
			"Слайд74.jpg"));
	$return.push(getObject(
			"Результаты внутреннего бенчмаркинга (Эффективность)",
			"m-macro m-cir",
			"Слайд76.jpg"));
	$return.push(getObject(
			"Результаты внутреннего бенчмаркинга",
			"m-macro",
			"Слайд77.jpg"));
	$return.push(getObject(
			"Утвержденный план vs Скорректированный план (Сбербанк)",
			"m-opex m-capex f-plan",
			"Слайд78.jpg"));
	$return.push(getObject("Амортизация", "m-opex", "Слайд79.jpg"));
	$return
			.push(getObject(
					"Операционные расходы в разрезе функциональных блоков и основных категорий",
					"m-opex b-cib b-cb b-rb b-bmo b-ub b-t b-risk",
					"Слайд80.jpg"));
	$return.push(getObject(
			"Капитальные затраты: Переформатирование сети ВСП (1/3)",
			"m-opex m-opex-prem m-capex m-capex-prem",
			"Слайд81.jpg"));
	$return.push(getObject(
			"Капитальные затраты: Переформатирование сети ВСП (2/3)",
			"m-opex m-opex-prem m-capex m-capex-prem b-tb",
			"Слайд82.jpg"));
	$return.push(getObject(
			"Капитальные затраты: Переформатирование сети ВСП (3/3)",
			"m-opex m-opex-prem m-capex m-capex-prem b-tb",
			"Слайд83.jpg"));
	$return.push(getObject(
			"Статус проведения работы по договорам в рублях",
			"m-opex m-opex-prem b-tb",
			"Слайд84.jpg"));
	$return.push(getObject(
			"Статус проведения работы по договорам в валюте",
			"m-opex m-opex-prem b-tb",
			"Слайд85.jpg"));
	$return.push(getObject(
			"Освоение финансового лимита и лимита на открытие",
			"m-opex m-opex-proj m-capex m-capex-proj",
			"Слайд86.jpg"));
	$return
			.push(getObject(
					"Расходы и затраты по проектам в разрезе блоков",
					"m-opex m-opex-proj m-capex m-capex-proj b-cib b-cb b-rb b-ub b-bmo b-t b-risk",
					"Слайд87.jpg"));
	$return
			.push(getObject(
					"Исполнение по открытию программ, проектов в программах и вне программ (портфель 2016 года)",
					"m-opex m-opex-proj m-capex m-capex-proj b-cib b-cb b-rb b-ub b-bmo b-t b-risk",
					"Слайд88.jpg"));
	$return
			.push(getObject(
					"Шаги достижения результата по Программе «Эффективность/CIR30» для Корпоративного блока",
					"p-cir b-cb",
					"Слайд89.jpg"));
	$return.push(getObject(
			"Ключевые метрики для сравнения операционных расходов",
			"m-opex b-cb",
			"Слайд90.jpg"));
	$return
			.push(getObject(
					"Перечень показателей  по Малому бизнесу и Корпоративному бизнесу (исключая CIB) от Finalta",
					"m-opex b-cb b-cb-small",
					"Слайд91.jpg"));
	$return.push(getObject(
			"Структура сети ВСП по типу населенных пунктов и численности",
			"b-cb",
			"Слайд92.jpg"));
	$return.push(getObject(
			"Структура сети ВСП по типу населенных пунктов и численности",
			"b-cb",
			"Слайд93.jpg"));
	$return.push(getObject(
			"Структура сети ВСП по типу населенных пунктов и численности",
			"b-cb",
			"Слайд94.jpg"));

	return $return;

}

function getSlides_o_20161003() {

	function getObject($name, $tags, $file) {
		return getObj(
				$name,
				$tags,
				$file,
				'Оперативный отчет 2016-10-03',
				'o_20161003/',
				's-oper');
	}

	var $return = [];

	$return.push(getObject("Executive Summary", "m-summary", "Слайд3.jpg"));
	$return.push(getObject("Рыночные доли", "m-summary", "Слайд4.jpg"));
	$return.push(getObject("Цены акций и индексы", "m-macro", "Слайд6.jpg"));
	$return.push(getObject("Оценки аналитиков", "m-macro", "Слайд7.jpg"));
	$return.push(getObject("Кривые доходности", "m-macro", "Слайд8.jpg"));
	$return
			.push(getObject(
					"Валютный и денежный рынок",
					"m-macro",
					"Слайд9.jpg"));
	$return.push(getObject(
			"Дэшборд ликвидности Сбербанка",
			"m-liquidity",
			"Слайд11.jpg"));
	$return.push(getObject(
			"Физическая ликвидность: рубли часть 1",
			"m-liquidity",
			"Слайд12.jpg"));
	$return.push(getObject(
			"Физическая ликвидность: рубли часть 2",
			"m-liquidity",
			"Слайд13.jpg"));
	$return.push(getObject(
			"Прогноз норматива краткосрочной ликвидности (H26)",
			"m-liquidity",
			"Слайд15.jpg"));
	$return
			.push(getObject(
					"Достаточность капитала",
					"m-capital",
					"Слайд16.jpg"));
	$return.push(getObject(
			"Динамика статей баланса: Юр. лица, Рубли (кредиты и привлечение)",
			"m-balance c-corporate a-loan a-borrowing",
			"Слайд17.jpg"));
	$return
			.push(getObject(
					"Динамика статей баланса: Юр. лица, Рубли (текущие и срочные счета)",
					"m-balance c-corporate a-borrowing",
					"Слайд18.jpg"));
	$return
			.push(getObject(
					"Динамика статей баланса: Юр. лица, Валюта (кредиты и привлечение)",
					"m-balance c-corporate a-loan a-borrowing",
					"Слайд19.jpg"));
	$return
			.push(getObject(
					"Динамика статей баланса: Юр. лица, Валюта (текущие и срочные счета)",
					"m-balance c-corporate a-borrowing",
					"Слайд20.jpg"));
	$return
			.push(getObject(
					"Динамика статей баланса: Физ. лица, Рубли (кредиты и привлечение)",
					"m-balance c-retail a-loan a-borrowing",
					"Слайд21.jpg"));
	$return
			.push(getObject(
					"Динамика статей баланса: Физ. лица, Рубли (текущие и срочные счета)",
					"m-balance c-retail a-borrowing",
					"Слайд22.jpg"));
	$return
			.push(getObject(
					"Динамика статей баланса: Физ. лица, Валюта (кредиты и привлечение)",
					"m-balance c-retail a-loan a-borrowing",
					"Слайд23.jpg"));
	$return
			.push(getObject(
					"Динамика статей баланса: Физ. лица, Валюта (текущие и срочные счета)",
					"m-balance c-retail a-borrowing",
					"Слайд24.jpg"));
	$return.push(getObject(
			"Справочно: показатели ликвидности Банка",
			"m-liquidity a-loan a-borrowing",
			"Слайд25.jpg"));
	$return.push(getObject(
			"Ставки по сделкам привлечения юр. лиц в депозиты в рублях",
			"m-rates c-corporate a-borrowing",
			"Слайд26.jpg"));
	$return.push(getObject(
			"Ставки по сделкам привлечения юр. лиц в депозиты в долларах США",
			"m-rates c-corporate a-borrowing",
			"Слайд27.jpg"));
	$return.push(getObject(
			"Ожидаемая динамика балансовых остатков",
			"f-plan m-balance",
			"Слайд28.jpg"));
	$return.push(getObject(
			"Закрытые бухгалтерские балансовые данные",
			"m-summary c-corporate m-balance c-retail a-loan a-borrowing",
			"Слайд30.jpg"));
	$return.push(getObject(
			"Работающие активы. CIB",
			"c-corporate b-cib a-loan m-balance",
			"Слайд32.jpg"));
	$return.push(getObject(
			"Выдачи кредитов. CIB",
			"c-corporate b-cib a-loan m-balance",
			"Слайд33.jpg"));
	$return.push(getObject(
			"TOP-10 выдач. CIB",
			"c-corporate b-cib a-loan m-balance",
			"Слайд34.jpg"));
	$return.push(getObject(
			"Проблемная задолженность крупнейших клиентов. NPL90+",
			"m-npl c-corporate b-cib a-loan",
			"Слайд35.jpg"));
	$return.push(getObject(
			"Привлеченные средства. CIB",
			"m-balance c-corporate b-cib a-borrowing",
			"Слайд36.jpg"));
	$return.push(getObject(
			"Новые депозиты, приток за неделю. CIB",
			"m-balance c-corporate b-cib a-borrowing",
			"Слайд37.jpg"));
	$return.push(getObject(
			"Неснижаемые остатки, приток за неделю. CIB",
			"m-balance c-corporate b-cib a-borrowing",
			"Слайд38.jpg"));
	$return.push(getObject(
			"Кредитный портфель. КБ",
			"m-balance c-corporate b-cb a-loan",
			"Слайд40.jpg"));
	$return.push(getObject(
			"Выдачи кредитов. КБ",
			"m-balance c-corporate b-cb a-loan",
			"Слайд41.jpg"));
	$return
			.push(getObject(
					"Кредитный портфель. Крупные и Средние и РГС",
					"m-balance c-corporate b-cb b-cb-large b-cb-medium b-cb-rgs a-loan",
					"Слайд42.jpg"));
	$return.push(getObject(
			"Кредитный портфель. ОПК И Малые",
			"m-balance c-corporate b-cb b-cb-opk b-cb-small a-loan",
			"Слайд43.jpg"));
	$return.push(getObject(
			"Проблемная задолженность Корпоративных клиентов. NPL90+",
			"m-npl c-corporate b-cb a-loan",
			"Слайд44.jpg"));
	$return.push(getObject(
			"Привлеченные средства. КБ",
			"m-balance c-corporate b-cb a-borrowing",
			"Слайд45.jpg"));
	$return.push(getObject(
			"Новые депозиты, приток за неделю. КБ",
			"m-balance c-corporate b-cb a-borrowing",
			"Слайд46.jpg"));
	$return.push(getObject(
			"Неснижаемые остатки, приток за неделю. КБ",
			"m-balance c-corporate b-cb a-borrowing",
			"Слайд47.jpg"));
	$return.push(getObject(
			"СДО кредитов и привлеченных средств. КПЭ КБ",
			"m-balance c-corporate b-cb a-borrowing a-loan",
			"Слайд48.jpg"));
	$return.push(getObject(
			"Заявки. Корпоративные клиенты",
			"m-application c-corporate b-cb b-cb-small",
			"Слайд49.jpg"));
	$return.push(getObject(
			"Работа с заявками по новому кредитному процессу",
			"m-application c-corporate b-cb",
			"Слайд50.jpg"));
	$return.push(getObject(
			"Работа с заявками малого и микробизнеса",
			"m-application c-corporate b-cb b-cb-small",
			"Слайд51.jpg"));
	$return.push(getObject(
			"Обзор проведенных расчетов RAROC с КПКИ ЦА от 28.09.2016",
			"m-raroc c-corporate t-ca",
			"Слайд53.jpg"));
	$return
			.push(getObject(
					"Обзор проведенных расчетов RAROC по сделкам КПКИ ТБ, одобренным за период с 23.09.2016  -  29.09.2016",
					"m-raroc c-corporate t-tb",
					"Слайд54.jpg"));
	$return
			.push(getObject(
					"Обзор проведенных расчетов RAROC по VD клиентам на КПКИ ТБ, одобренным за период с 23.09.2016  -  29.09.2016",
					"m-raroc c-corporate t-tb",
					"Слайд55.jpg"));
	$return
			.push(getObject(
					"Факторный анализ проведенных расчетов RAROC от 28.09.2016 (ГК «ОВК»)",
					"m-raroc c-corporate",
					"Слайд56.jpg"));
	$return
			.push(getObject(
					"Факторный анализ проведенных расчетов RAROC от 28.09.2016 (ГК «Yamata»)",
					"m-raroc c-corporate",
					"Слайд57.jpg"));
	$return
			.push(getObject(
					"Факторный анализ проведенных расчетов RAROC от 28.09.2016 (ГК «Ренова»)",
					"m-raroc c-corporate",
					"Слайд58.jpg"));
	$return
			.push(getObject(
					"Факторный анализ проведенных расчетов RAROC от 28.09.2016 (ГК «Башнефть»)",
					"m-raroc c-corporate",
					"Слайд59.jpg"));
	$return
			.push(getObject(
					"Факторный анализ проведенных расчетов RAROC от 28.09.2016 (ГК «ЧТЗ Сервис»)",
					"m-raroc c-corporate",
					"Слайд60.jpg"));
	$return
			.push(getObject(
					"Факторный анализ проведенных расчетов RAROC от 28.09.2016 (ГК «Дорстройсервис»)",
					"m-raroc c-corporate",
					"Слайд61.jpg"));
	$return
			.push(getObject(
					"Факторный анализ проведенных расчетов RAROC от 28.09.2016 (ГК «Полимерпром»)",
					"m-raroc c-corporate",
					"Слайд62.jpg"));
	$return
			.push(getObject(
					"Факторный анализ проведенных расчетов RAROC от 28.09.2016 (ГК «Сусуманзолото»)",
					"m-raroc c-corporate",
					"Слайд63.jpg"));
	$return.push(getObject(
			"Кредитный портфель. РБ",
			"m-balance c-retail b-rb a-loan",
			"Слайд65.jpg"));
	$return.push(getObject(
			"Кредитный портфель (динамика). РБ",
			"m-balance c-retail b-rb a-loan",
			"Слайд66.jpg"));
	$return.push(getObject(
			"Процентные ставки по кредитам. РБ",
			"m-rates c-retail b-rb a-loan",
			"Слайд67.jpg"));
	$return.push(getObject(
			"Кредитные карты",
			"m-balance c-retail b-rb a-loan a-loan-credit_cards",
			"Слайд68.jpg"));
	$return.push(getObject(
			"Заявки розничных клиентов",
			"m-application c-retail b-rb",
			"Слайд69.jpg"));
	$return.push(getObject(
			"Работа с заявками розничных клиентов",
			"m-application c-retail b-rb",
			"Слайд70.jpg"));
	$return.push(getObject(
			"Работа с заявками по потребительским кредитам",
			"m-application c-retail b-rb a-loan a-loan-consumer",
			"Слайд71.jpg"));
	$return.push(getObject(
			"Проблемная задолженность физических лиц. NPL90+",
			"m-npl c-retail b-rb t-tb",
			"Слайд72.jpg"));
	$return
			.push(getObject(
					"Проблемная задолженность физических лиц в разрезе продуктов. NPL90+",
					"m-npl c-retail b-rb a-loan a-loan-car a-loan-mortgage a-loan-credit_cards a-loan-consumer",
					"Слайд73.jpg"));
	$return.push(getObject(
			"Условный продукт",
			"m-up c-retail b-rb",
			"Слайд74.jpg"));
	$return.push(getObject(
			"Устройства самообслуживания",
			"c-retail b-rb t-tb ch-atm",
			"Слайд75.jpg"));
	$return
			.push(getObject(
					"Удаленные каналы обслуживания физических лиц (количество активных клиентов и % проникновения)",
					"c-retail b-rb t-tb ch-remote",
					"Слайд76.jpg"));
	$return
			.push(getObject(
					"Удаленные каналы обслуживания (действующие подписки на автоплатеж и время ожидания)",
					"c-retail b-rb t-tb ch-remote",
					"Слайд77.jpg"));
	$return.push(getObject(
			"Реализация программы «Очередей.Нет!»",
			"p-queue",
			"Слайд78.jpg"));
	$return.push(getObject(
			"Отзывы о Сбербанке в социальных сетях",
			"t-tb o-incidents",
			"Слайд79.jpg"));
	$return.push(getObject(
			"Основные результаты блока Управление Благосостоянием",
			"b-ub f-plan",
			"Слайд81.jpg"));
	$return
			.push(getObject(
					"Основные результаты блока Управление Благосостоянием (ООО СК «Сбербанк страхование жизни»)",
					"b-ub",
					"Слайд82.jpg"));
	$return
			.push(getObject(
					"Основные результаты блока Управление Благосостоянием (ООО СК «Сбербанк страхование»)",
					"b-ub",
					"Слайд83.jpg"));
	$return
			.push(getObject(
					"Основные результаты блока Управление Благосостоянием (Управление активами, НПф, Страховой брокер)",
					"b-ub",
					"Слайд84.jpg"));
	$return.push(getObject("Основные риск-метрики", "m-risk", "Слайд86.jpg"));
	$return.push(getObject(
			"Дайджест по CoR и расходам на резервы",
			"m-risk",
			"Слайд87.jpg"));
	$return
			.push(getObject(
					"Крупнейшие кейсы (Выходы на раннюю просрочку, Прирост/выходы в NPL90+, Топ выходов дефолт, Топ улучшений рейтинга)",
					"m-risk m-npl",
					"Слайд88.jpg"));
	$return.push(getObject(
			"Крупнейшие кейсы (Фокусные инциденты операционного риска)",
			"m-risk",
			"Слайд89.jpg"));
	$return.push(getObject(
			"Блок Международные операции",
			"m-balance m-capital a-loan a-borrowing b-bmo",
			"Слайд91.jpg"));
	$return
			.push(getObject(
					"Дэшборд дочерних банков по ликвидности и капиталу СНГ (Белорусь, Казахстан, Украина)",
					"m-liquidity m-capital b-bmo",
					"Слайд92.jpg"));
	$return
			.push(getObject(
					"Дэшборд дочерних банков по ликвидности и капиталу (Denizbank, SBE, SB India)",
					"m-liquidity m-capital b-bmo",
					"Слайд93.jpg"));
	$return
			.push(getObject(
					"Денизбанк",
					"m-summary m-balance m-liquidity m-capital a-loan a-borrowing b-bmo",
					"Слайд94.jpg"));
	$return
			.push(getObject(
					"Сбербанк Европа",
					"m-summary m-balance m-liquidity m-capital a-loan a-borrowing b-bmo",
					"Слайд95.jpg"));
	$return
			.push(getObject(
					"Сбербанк Казахстан",
					"m-summary m-balance m-liquidity m-capital a-loan a-borrowing b-bmo",
					"Слайд96.jpg"));
	$return
			.push(getObject(
					"Сбербанк Белоруссия",
					"m-summary m-balance m-liquidity m-capital a-loan a-borrowing b-bmo",
					"Слайд97.jpg"));
	$return
			.push(getObject(
					"Сбербанк Украина",
					"m-summary m-balance m-liquidity m-capital a-loan a-borrowing b-bmo",
					"Слайд98.jpg"));
	$return.push(getObject(
			"Вложения Сбербанка в дочерние банки БМО",
			"m-capital b-bmo",
			"Слайд99.jpg"));
	$return
			.push(getObject(
					"Технологические факторы, оказавшие существенное влияние на бизнес за период с 23 по 29 сентября",
					"o-incidents",
					"Слайд101.jpg"));
	$return
			.push(getObject(
					"Количество обращений vs. объем операций/активные клиенты 2015 - 2016",
					"o-incidents",
					"Слайд102.jpg"));
	$return.push(getObject(
			"Структура ТОП-10 проблем Банка",
			"o-incidents",
			"Слайд103.jpg"));
	$return.push(getObject(
			"Структура обращений, решенных сразу",
			"o-incidents",
			"Слайд104.jpg"));
	$return.push(getObject(
			"Структура отложенных обращений",
			"o-incidents",
			"Слайд105.jpg"));
	$return.push(getObject(
			"Результаты работы Службы заботы о клиентах ОПЕРУ (Динамика)",
			"o-incidents",
			"Слайд106.jpg"));
	$return
			.push(getObject(
					"Результаты работы Службы заботы о клиентах ОПЕРУ (Тематики решённых обращений)",
					"o-incidents",
					"Слайд107.jpg"));
	$return
			.push(getObject(
					"Результаты работы Службы заботы о клиентах ОПЕРУ (Регистрация в CRM и вывод решений на 1-ю линию)",
					"o-incidents",
					"Слайд108.jpg"));
	$return.push(getObject(
			"Обращения ВСП vs. количество обслуженных клиентов",
			"o-incidents",
			"Слайд109.jpg"));
	$return.push(getObject(
			"ТОП проблем: Розыск и возврат платежей",
			"o-incidents",
			"Слайд111.jpg"));
	$return.push(getObject(
			"В фокусе: событие (ОСВЕЩЕНИЕ МИФ В СОЧИ 2016)",
			"o-info",
			"Слайд113.jpg"));
	$return
			.push(getObject(
					"Информационная картина недели 24-30.09.2016 (ГЛАВНЫЕ ТЕМЫ С УЧАСТИЕМ ГРУППЫ СБЕРБАНК)",
					"o-info",
					"Слайд114.jpg"));
	$return
			.push(getObject(
					"Информационная картина недели 24-30.09.2016 (СТРУКТУРА НЕГАТИВА В СМИ И СОЦИАЛЬНЫХ МЕДИА)",
					"o-info",
					"Слайд115.jpg"));
	$return
			.push(getObject(
					"Информационная картина недели 24-30.09.2016 (ГЛАВНЫЕ ТЕМЫ С УЧАСТИЕМ ГРУППЫ СБЕРБАНК В СТРАНАХ ПРИСУТСТВИЯ)",
					"o-info",
					"Слайд116.jpg"));
	$return
			.push(getObject(
					"Информационная картина недели 24-30.09.2016 (СТРУКТУРА НЕГАТИВА В СМИ И СОЦИАЛЬНЫХ МЕДИА ЗА ЯНВАРЬ – СЕНТЯБРЬ 2016 Г.)",
					"o-info",
					"Слайд117.jpg"));
	$return
			.push(getObject(
					"Информационная картина недели 24-30.09.2016 (УПРАВЛЕНИЕ ИНФОРМАЦИОННЫМ ПОЛЕМ. РЕТРОСПЕКТИВА ЗА СЕНТЯБРЬ)",
					"o-info",
					"Слайд118.jpg"));
	$return
			.push(getObject(
					"Информационная картина недели 24-30.09.2016 (ГЛАВНЫЕ КАМПАНИИ ОКТЯБРЯ)",
					"o-info",
					"Слайд119.jpg"));
	$return
			.push(getObject(
					"Информационная картина недели 24-30.09.2016 (ГЛАВНЫЕ КАМПАНИИ ОКТЯБРЯ)",
					"o-info",
					"Слайд120.jpg"));
	$return
			.push(getObject(
					"Информационная картина недели 24-30.09.2016 (ГЛАВНЫЕ КАМПАНИИ ОКТЯБРЯ)",
					"o-info",
					"Слайд121.jpg"));
	$return
			.push(getObject(
					"Информационная картина недели 24-30.09.2016 (ОБЗОР ИННОВАЦИОННЫХ ПРАКТИК В БАНКОВСКОЙ СФЕРЕ)",
					"o-info",
					"Слайд122.jpg"));
	$return
			.push(getObject(
					"Информационная картина недели 24-30.09.2016 (ОБЗОР ИННОВАЦИОННЫХ ПРАКТИК В БАНКОВСКОЙ СФЕРЕ)",
					"o-info",
					"Слайд123.jpg"));
	$return
			.push(getObject(
					"Информационная картина недели 24-30.09.2016 (ОБЗОР ИННОВАЦИОННЫХ ПРАКТИК В БАНКОВСКОЙ СФЕРЕ)",
					"o-info",
					"Слайд124.jpg"));
	$return
			.push(getObject(
					"Информационная картина недели 24-30.09.2016 (ОБЗОР ИННОВАЦИОННЫХ ПРАКТИК В БАНКОВСКОЙ СФЕРЕ)",
					"o-info",
					"Слайд125.jpg"));
	$return.push(getObject(
			"Производственный статус ПИР",
			"o-pir",
			"Слайд126.jpg"));
	$return.push(getObject(
			"Портфели ценных бумаг внутреннего банка (Резюме)",
			"m-summary m-balance m-pl m-capital a-securities",
			"Слайд129.jpg"));
	$return.push(getObject(
			"Портфели ценных бумаг внутреннего банка",
			"m-balance m-capital a-securities",
			"Слайд130.jpg"));
	$return.push(getObject(
			"Финансовый результат портфелей ценных бумаг внутреннего банка",
			"m-pl m-capital a-securities",
			"Слайд131.jpg"));

	return $return;

}
