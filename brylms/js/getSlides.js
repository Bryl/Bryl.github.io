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
				'o-s-expenses');
	}

	var $return = [];

	$return.push(getObject("Основные выводы", "m-summary", "Слайд4.JPG"));
	$return
			.push(getObject(
					"Операционные расходы – результаты 6М’16 года и прогноз до конца 2016 года (Группа)",
					"m-opex o-plan",
					"Слайд5.JPG"));
	$return.push(getObject(
			"ОПУ и основные показатели (Группа)",
			"m-pl",
			"Слайд6.JPG"));
	$return.push(getObject("Динамика CIR (Группа)", "m-cir", "Слайд7.JPG"));
	$return.push(getObject(
			"CIR бизнес-блоков",
			"m-cir b-cib b-cb b-rb b-bmo o-plan",
			"Слайд8.JPG"));
	$return.push(getObject(
			"CIR Группы и влияние на него ДЗО",
			"m-cir",
			"Слайд9.JPG"));
	$return.push(getObject(
			"Операционные расходы – общие тенденции (Группа)",
			"m-opex",
			"Слайд10.JPG"));
	$return.push(getObject(
			"Операционные расходы (Группа)",
			"m-opex",
			"Слайд11.JPG"));
	$return.push(getObject(
			"Операционные расходы - Факторы изменений (Группа)",
			"m-opex",
			"Слайд12.JPG"));
	$return
			.push(getObject(
					"Операционные расходы - Динамика расходов функциональных блоков в разрезе категорий",
					"m-opex b-cib b-cb b-rb b-bmo b-ub b-t b-risk",
					"Слайд13.JPG"));
	$return.push(getObject(
			"Аллокация расходов Группы по бизнес-блокам",
			"m-opex b-cib b-cb b-rb b-bmo",
			"Слайд14.JPG"));
	$return.push(getObject(
			"Персонал – расходы по категории",
			"m-opex-pers",
			"Слайд16.JPG"));
	$return.push(getObject(
			"Персонал – расходы по функциональным блокам",
			"m-opex-pers b-cib b-cb b-rb b-bmo b-ub b-t b-risk",
			"Слайд17.JPG"));
	$return.push(getObject(
			"Динамика численности",
			"m-opex-pers",
			"Слайд18.JPG"));
	$return.push(getObject(
			"Численность функциональных блоков: Динамика",
			"m-opex-pers b-cib b-cb b-rb b-bmo b-ub b-t b-risk",
			"Слайд19.JPG"));
	$return.push(getObject(
			"Численность функциональных блоков: Прогноз",
			"m-opex-pers b-cib b-cb b-rb b-bmo b-ub b-t b-risk o-plan",
			"Слайд20.JPG"));
	$return.push(getObject(
			"Недвижимость – расходы по категории",
			"m-opex-prem",
			"Слайд22.JPG"));
	$return.push(getObject(
			"Недвижимость – затраты по категории",
			"m-capex-prem",
			"Слайд23.JPG"));
	$return.push(getObject(
			"Структура и динамика портфеля недвижимости",
			"m-opex-prem m-capex-prem",
			"Слайд24.JPG"));
	$return.push(getObject(
			"Структура портфеля аренды и динамика ставок",
			"m-opex-prem",
			"Слайд25.JPG"));
	$return.push(getObject(
			"Исполнение плана выбытия объектов недвижимости",
			"m-capex-prem",
			"Слайд26.JPG"));
	$return.push(getObject(
			"Информационные технологии – расходы по категории",
			"m-opex-proj",
			"Слайд28.JPG"));
	$return.push(getObject(
			"Информационные технологии – затраты по категории",
			"m-capex-proj",
			"Слайд29.JPG"));
	$return
			.push(getObject(
					"Освоение финансового лимита и лимита на открытие (проектная деятельность)",
					"m-capex-proj m-opex-proj",
					"Слайд30.JPG"));
	$return.push(getObject(
			"Бизнес-операции – расходы по категории",
			"m-opex-bis",
			"Слайд32.JPG"));
	$return.push(getObject(
			"Бизнес операции – затраты по категории",
			"m-capex-bis",
			"Слайд33.JPG"));
	$return.push(getObject(
			"Маркетинг и коммуникации – расходы по категории",
			"m-opex-other",
			"Слайд35.JPG"));
	$return.push(getObject(
			"Консалтинг – расходы по категории",
			"m-opex-other",
			"Слайд36.JPG"));
	$return.push(getObject(
			"Расходы по категориям. Транспорт",
			"m-opex-other",
			"Слайд37.JPG"));
	$return.push(getObject(
			"Благотворительность",
			"m-opex-other",
			"Слайд38.JPG"));
	$return.push(getObject(
			"Блок Т (OPEX/CAPEX)",
			"m-opex m-capex b-t",
			"Слайд40.JPG"));
	$return.push(getObject(
			"Блок Т (Операционные расходы)",
			"m-opex b-t",
			"Слайд41.JPG"));
	$return.push(getObject("ДРПА (OPEX)", "m-opex b-drpa", "Слайд42.JPG"));
	$return
			.push(getObject("Блок Риски (OPEX)", "m-opex b-risk", "Слайд43.JPG"));
	$return.push(getObject(
			"ЦУНДО - облуживание объектов CIB",
			"m-opex b-cash b-cib",
			"Слайд44.JPG"));
	$return.push(getObject(
			"ЦУНДО - облуживание объектов Корпоративного блока",
			"m-opex b-cash b-cb",
			"Слайд45.JPG"));
	$return.push(getObject(
			"ЦУНДО - облуживание объектов Розничного блока",
			"m-opex b-cash b-rb",
			"Слайд46.JPG"));
	$return.push(getObject(
			"Операционные расходы (CIB)",
			"m-opex b-cib",
			"Слайд48.JPG"));
	$return.push(getObject(
			"Аллокация расходов блока 'Технологии' на CIB",
			"m-opex b-t b-cib",
			"Слайд49.JPG"));
	$return.push(getObject(
			"CIR (Корпоративный бизнес)",
			"m-cir b-cb",
			"Слайд51.JPG"));
	$return.push(getObject(
			"Структура и динамика расходов (Корпоративный бизнес)",
			"m-opex b-cb b-t b-cash b-risk b-drpa",
			"Слайд52.JPG"));
	$return.push(getObject(
			"Операционные расходы (Корпоративный бизнес)",
			"m-opex b-cb",
			"Слайд53.JPG"));
	$return.push(getObject(
			"Правила аллокации расходов (Корпоративный бизнес)",
			"m-opex b-cb b-cib b-rb b-t b-risk b-drpa",
			"Слайд54.JPG"));
	$return.push(getObject(
			"Сегменты - Доходы и расходы (Корпоративный бизнес)",
			"m-opex b-cb-large b-cb-medium b-cb-small b-cb-rgs b-cb-opk",
			"Слайд55.JPG"));
	$return.push(getObject(
			"Динамика расходов на персонал (Корпоративный бизнес)",
			"m-opex-pers b-cb",
			"Слайд56.JPG"));
	$return.push(getObject(
			"Расходы по недвижимости (Корпоративный бизнес)",
			"m-opex-prem b-cb",
			"Слайд57.JPG"));
	$return.push(getObject(
			"Недвижимость (Корпоративный бизнес)",
			"m-opex-prem b-cb",
			"Слайд58.JPG"));
	$return.push(getObject(
			"Аллокация расходов блока 'Технологии' на Корпоративный бизнес",
			"m-opex b-cb b-t",
			"Слайд59.JPG"));
	$return.push(getObject(
			"Операционные расходы (Розничный бизнес)",
			"m-opex b-rb",
			"Слайд61.JPG"));
	$return.push(getObject(
			"CIR (Розничный бизнес)",
			"m-cir b-rb",
			"Слайд62.JPG"));
	$return.push(getObject(
			"Прямые расходы на персонал (Розничный бизнес)",
			"m-opex-pers b-rb",
			"Слайд63.JPG"));
	$return.push(getObject(
			"Расходы по подразделениям (Розничный бизнес)",
			"m-opex b-rb t-tb t-ca",
			"Слайд64.JPG"));
	$return.push(getObject(
			"Прямые расходы на недвижимость (1/2) (Розничный бизнес)",
			"m-opex-prem b-rb",
			"Слайд65.JPG"));
	$return.push(getObject(
			"Прямые расходы на недвижимость (2/2) (Розничный бизнес)",
			"m-opex-prem b-rb",
			"Слайд66.JPG"));
	$return.push(getObject(
			"Недвижимость (Розничный бизнес)",
			"m-opex-prem b-rb t-tb t-ca",
			"Слайд67.JPG"));
	$return.push(getObject(
			"Аллокация расходов блока 'Технологии' на Розничный бизнес",
			"m-opex b-rb b-t",
			"Слайд68.JPG"));
	$return.push(getObject(
			"Операционные расходы ДБ",
			"m-opex b-bmo",
			"Слайд70.JPG"));
	$return.push(getObject(
			"Операционные расходы ДБ",
			"m-opex b-bmo",
			"Слайд71.JPG"));
	$return.push(getObject(
			"Консолидированные ДЗО и ДБ (кроме входящих в БМО)",
			"m-opex m-cir m-roe b-bmo b-cib b-cb b-ub b-rb",
			"Слайд72.JPG"));
	$return.push(getObject(
			"Операционные расходы (Управление благосостоянием)",
			"m-opex b-ub",
			"Слайд74.JPG"));
	$return.push(getObject(
			"Результаты внутреннего бенчмаркинга (Эффективность)",
			"m-macro m-cir",
			"Слайд76.JPG"));
	$return.push(getObject(
			"Результаты внутреннего бенчмаркинга",
			"m-macro",
			"Слайд77.JPG"));
	$return.push(getObject(
			"Утвержденный план vs Скорректированный план (Сбербанк)",
			"m-opex m-capex o-plan",
			"Слайд78.JPG"));
	$return.push(getObject("Амортизация", "m-opex", "Слайд79.JPG"));
	$return
			.push(getObject(
					"Операционные расходы в разрезе функциональных блоков и основных категорий",
					"m-opex b-cib b-cb b-rb b-bmo b-ub b-t b-risk",
					"Слайд80.JPG"));
	$return.push(getObject(
			"Капитальные затраты: Переформатирование сети ВСП (1/3)",
			"m-opex-prem m-capex-prem",
			"Слайд81.JPG"));
	$return.push(getObject(
			"Капитальные затраты: Переформатирование сети ВСП (2/3)",
			"m-opex-prem m-capex-prem b-tb",
			"Слайд82.JPG"));
	$return.push(getObject(
			"Капитальные затраты: Переформатирование сети ВСП (3/3)",
			"m-opex-prem m-capex-prem b-tb",
			"Слайд83.JPG"));
	$return.push(getObject(
			"Статус проведения работы по договорам в рублях",
			"m-opex-prem b-tb",
			"Слайд84.JPG"));
	$return.push(getObject(
			"Статус проведения работы по договорам в валюте",
			"m-opex-prem b-tb",
			"Слайд85.JPG"));
	$return.push(getObject(
			"Освоение финансового лимита и лимита на открытие",
			"m-opex-proj m-capex-proj",
			"Слайд86.JPG"));
	$return
			.push(getObject(
					"Расходы и затраты по проектам в разрезе блоков",
					"m-opex-proj m-capex-proj b-cib b-cb b-rb b-ub b-bmo b-t b-risk",
					"Слайд87.JPG"));
	$return
			.push(getObject(
					"Исполнение по открытию программ, проектов в программах и вне программ (портфель 2016 года)",
					"m-opex-proj m-capex-proj b-cib b-cb b-rb b-ub b-bmo b-t b-risk",
					"Слайд88.JPG"));
	$return
			.push(getObject(
					"Шаги достижения результата по Программе «Эффективность/CIR30» для Корпоративного блока",
					"o-prog-cir b-cb",
					"Слайд89.JPG"));
	$return.push(getObject(
			"Ключевые метрики для сравнения операционных расходов",
			"m-opex b-cb",
			"Слайд90.JPG"));
	$return
			.push(getObject(
					"Перечень показателей  по Малому бизнесу и Корпоративному бизнесу (исключая CIB) от Finalta",
					"m-opex b-cb-small",
					"Слайд91.JPG"));
	$return.push(getObject(
			"Структура сети ВСП по типу населенных пунктов и численности",
			"b-cb",
			"Слайд92.JPG"));
	$return.push(getObject(
			"Структура сети ВСП по типу населенных пунктов и численности",
			"b-cb",
			"Слайд93.JPG"));
	$return.push(getObject(
			"Структура сети ВСП по типу населенных пунктов и численности",
			"b-cb",
			"Слайд94.JPG"));

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
				'o-s-oper');
	}

	var $return = [];

	$return.push(getObject("Executive Summary", "m-summary", "Слайд3.JPG"));
	$return.push(getObject("Рыночные доли", "m-summary", "Слайд4.JPG"));
	$return.push(getObject("Цены акций и индексы", "m-macro", "Слайд6.JPG"));
	$return.push(getObject("Оценки аналитиков", "m-macro", "Слайд7.JPG"));
	$return.push(getObject("Кривые доходности", "m-macro", "Слайд8.JPG"));
	$return
			.push(getObject(
					"Валютный и денежный рынок",
					"m-macro",
					"Слайд9.JPG"));
	$return.push(getObject(
			"Дэшборд ликвидности Сбербанка",
			"m-liquidity",
			"Слайд11.JPG"));
	$return.push(getObject(
			"Физическая ликвидность: рубли часть 1",
			"m-liquidity",
			"Слайд12.JPG"));
	$return.push(getObject(
			"Физическая ликвидность: рубли часть 2",
			"m-liquidity",
			"Слайд13.JPG"));
	$return.push(getObject(
			"Прогноз норматива краткосрочной ликвидности (H26)",
			"m-liquidity",
			"Слайд15.JPG"));
	$return
			.push(getObject(
					"Достаточность капитала",
					"m-capital",
					"Слайд16.JPG"));
	$return.push(getObject(
			"Динамика статей баланса: Юр. лица, Рубли (кредиты и привлечение)",
			"m-balance c-corporate a-loan a-borrowing",
			"Слайд17.JPG"));
	$return
			.push(getObject(
					"Динамика статей баланса: Юр. лица, Рубли (текущие и срочные счета)",
					"m-balance c-corporate a-borrowing",
					"Слайд18.JPG"));
	$return
			.push(getObject(
					"Динамика статей баланса: Юр. лица, Валюта (кредиты и привлечение)",
					"m-balance c-corporate a-loan a-borrowing",
					"Слайд19.JPG"));
	$return
			.push(getObject(
					"Динамика статей баланса: Юр. лица, Валюта (текущие и срочные счета)",
					"m-balance c-corporate a-borrowing",
					"Слайд20.JPG"));
	$return
			.push(getObject(
					"Динамика статей баланса: Физ. лица, Рубли (кредиты и привлечение)",
					"m-balance c-retail a-loan a-borrowing",
					"Слайд21.JPG"));
	$return
			.push(getObject(
					"Динамика статей баланса: Физ. лица, Рубли (текущие и срочные счета)",
					"m-balance c-retail a-borrowing",
					"Слайд22.JPG"));
	$return
			.push(getObject(
					"Динамика статей баланса: Физ. лица, Валюта (кредиты и привлечение)",
					"m-balance c-retail a-loan a-borrowing",
					"Слайд23.JPG"));
	$return
			.push(getObject(
					"Динамика статей баланса: Физ. лица, Валюта (текущие и срочные счета)",
					"m-balance c-retail a-borrowing",
					"Слайд24.JPG"));
	$return.push(getObject(
			"Справочно: показатели ликвидности Банка",
			"m-liquidity a-loan a-borrowing",
			"Слайд25.JPG"));
	$return.push(getObject(
			"Ставки по сделкам привлечения юр. лиц в депозиты в рублях",
			"m-rates c-corporate a-borrowing",
			"Слайд26.JPG"));
	$return.push(getObject(
			"Ставки по сделкам привлечения юр. лиц в депозиты в долларах США",
			"m-rates c-corporate a-borrowing",
			"Слайд27.JPG"));
	$return.push(getObject(
			"Ожидаемая динамика балансовых остатков",
			"o-plan m-balance",
			"Слайд28.JPG"));
	$return.push(getObject(
			"Закрытые бухгалтерские балансовые данные",
			"m-summary c-corporate m-balance c-retail a-loan a-borrowing",
			"Слайд30.JPG"));
	$return.push(getObject(
			"Работающие активы. CIB",
			"c-corporate b-cib a-loan m-balance",
			"Слайд32.JPG"));
	$return.push(getObject(
			"Выдачи кредитов. CIB",
			"c-corporate b-cib a-loan m-balance",
			"Слайд33.JPG"));
	$return.push(getObject(
			"TOP-10 выдач. CIB",
			"c-corporate b-cib a-loan m-balance",
			"Слайд34.JPG"));
	$return.push(getObject(
			"Проблемная задолженность крупнейших клиентов. NPL90+",
			"m-npl c-corporate b-cib a-loan",
			"Слайд35.JPG"));
	$return.push(getObject(
			"Привлеченные средства. CIB",
			"m-balance c-corporate b-cib a-borrowing",
			"Слайд36.JPG"));
	$return.push(getObject(
			"Новые депозиты, приток за неделю. CIB",
			"m-balance c-corporate b-cib a-borrowing",
			"Слайд37.JPG"));
	$return.push(getObject(
			"Неснижаемые остатки, приток за неделю. CIB",
			"m-balance c-corporate b-cib a-borrowing",
			"Слайд38.JPG"));
	$return.push(getObject(
			"Кредитный портфель. КБ",
			"m-balance c-corporate b-cb a-loan",
			"Слайд40.JPG"));
	$return.push(getObject(
			"Выдачи кредитов. КБ",
			"m-balance c-corporate b-cb a-loan",
			"Слайд41.JPG"));
	$return
			.push(getObject(
					"Кредитный портфель. Крупные и Средние и РГС",
					"m-balance c-corporate b-cb-large b-cb-medium b-cb-rgs a-loan",
					"Слайд42.JPG"));
	$return.push(getObject(
			"Кредитный портфель. ОПК И Малые",
			"m-balance c-corporate b-cb-opk b-cb-small a-loan",
			"Слайд43.JPG"));
	$return.push(getObject(
			"Проблемная задолженность Корпоративных клиентов. NPL90+",
			"m-npl c-corporate b-cb a-loan",
			"Слайд44.JPG"));
	$return.push(getObject(
			"Привлеченные средства. КБ",
			"m-balance c-corporate b-cb a-borrowing",
			"Слайд45.JPG"));
	$return.push(getObject(
			"Новые депозиты, приток за неделю. КБ",
			"m-balance c-corporate b-cb a-borrowing",
			"Слайд46.JPG"));
	$return.push(getObject(
			"Неснижаемые остатки, приток за неделю. КБ",
			"m-balance c-corporate b-cb a-borrowing",
			"Слайд47.JPG"));
	$return.push(getObject(
			"СДО кредитов и привлеченных средств. КПЭ КБ",
			"m-balance c-corporate b-cb a-borrowing a-loan",
			"Слайд48.JPG"));
	$return.push(getObject(
			"Заявки. Корпоративные клиенты",
			"m-application c-corporate b-cb-small",
			"Слайд49.JPG"));
	$return.push(getObject(
			"Работа с заявками по новому кредитному процессу",
			"m-application c-corporate b-cb",
			"Слайд50.JPG"));
	$return.push(getObject(
			"Работа с заявками малого и микробизнеса",
			"m-application c-corporate b-cb-small",
			"Слайд51.JPG"));
	$return.push(getObject(
			"Обзор проведенных расчетов RAROC с КПКИ ЦА от 28.09.2016",
			"m-raroc c-corporate t-ca",
			"Слайд53.JPG"));
	$return
			.push(getObject(
					"Обзор проведенных расчетов RAROC по сделкам КПКИ ТБ, одобренным за период с 23.09.2016  -  29.09.2016",
					"m-raroc c-corporate t-tb",
					"Слайд54.JPG"));
	$return
			.push(getObject(
					"Обзор проведенных расчетов RAROC по VD клиентам на КПКИ ТБ, одобренным за период с 23.09.2016  -  29.09.2016",
					"m-raroc c-corporate t-tb",
					"Слайд55.JPG"));
	$return
			.push(getObject(
					"Факторный анализ проведенных расчетов RAROC от 28.09.2016 (ГК «ОВК»)",
					"m-raroc c-corporate",
					"Слайд56.JPG"));
	$return
			.push(getObject(
					"Факторный анализ проведенных расчетов RAROC от 28.09.2016 (ГК «Yamata»)",
					"m-raroc c-corporate",
					"Слайд57.JPG"));
	$return
			.push(getObject(
					"Факторный анализ проведенных расчетов RAROC от 28.09.2016 (ГК «Ренова»)",
					"m-raroc c-corporate",
					"Слайд58.JPG"));
	$return
			.push(getObject(
					"Факторный анализ проведенных расчетов RAROC от 28.09.2016 (ГК «Башнефть»)",
					"m-raroc c-corporate",
					"Слайд59.JPG"));
	$return
			.push(getObject(
					"Факторный анализ проведенных расчетов RAROC от 28.09.2016 (ГК «ЧТЗ Сервис»)",
					"m-raroc c-corporate",
					"Слайд60.JPG"));
	$return
			.push(getObject(
					"Факторный анализ проведенных расчетов RAROC от 28.09.2016 (ГК «Дорстройсервис»)",
					"m-raroc c-corporate",
					"Слайд61.JPG"));
	$return
			.push(getObject(
					"Факторный анализ проведенных расчетов RAROC от 28.09.2016 (ГК «Полимерпром»)",
					"m-raroc c-corporate",
					"Слайд62.JPG"));
	$return
			.push(getObject(
					"Факторный анализ проведенных расчетов RAROC от 28.09.2016 (ГК «Сусуманзолото»)",
					"m-raroc c-corporate",
					"Слайд63.JPG"));
	$return.push(getObject(
			"Кредитный портфель. РБ",
			"m-balance c-retail b-rb a-loan",
			"Слайд65.JPG"));
	$return.push(getObject(
			"Кредитный портфель (динамика). РБ",
			"m-balance c-retail b-rb a-loan",
			"Слайд66.JPG"));
	$return.push(getObject(
			"Процентные ставки по кредитам. РБ",
			"m-rates c-retail b-rb a-loan",
			"Слайд67.JPG"));
	$return.push(getObject(
			"Кредитные карты",
			"m-balance c-retail b-rb a-loan a-loan-credit_cards",
			"Слайд68.JPG"));
	$return.push(getObject(
			"Заявки розничных клиентов",
			"m-application c-retail b-rb",
			"Слайд69.JPG"));
	$return.push(getObject(
			"Работа с заявками розничных клиентов",
			"m-application c-retail b-rb",
			"Слайд70.JPG"));
	$return.push(getObject(
			"Работа с заявками по потребительским кредитам",
			"m-application c-retail b-rb a-loan a-loan-consumer",
			"Слайд71.JPG"));
	$return.push(getObject(
			"Проблемная задолженность физических лиц. NPL90+",
			"m-npl c-retail b-rb t-tb",
			"Слайд72.JPG"));
	$return
			.push(getObject(
					"Проблемная задолженность физических лиц в разрезе продуктов. NPL90+",
					"m-npl c-retail b-rb a-loan a-loan-car a-loan-mortgage a-loan-credit_cards a-loan-consumer",
					"Слайд73.JPG"));
	$return.push(getObject(
			"Условный продукт",
			"m-up c-retail b-rb",
			"Слайд74.JPG"));
	$return.push(getObject(
			"Устройства самообслуживания",
			"c-retail b-rb t-tb o-ch-atm",
			"Слайд75.JPG"));
	$return
			.push(getObject(
					"Удаленные каналы обслуживания физических лиц (количество активных клиентов и % проникновения)",
					"c-retail b-rb t-tb o-ch-remote",
					"Слайд76.JPG"));
	$return
			.push(getObject(
					"Удаленные каналы обслуживания (действующие подписки на автоплатеж и время ожидания)",
					"c-retail b-rb t-tb o-ch-remote",
					"Слайд77.JPG"));
	$return.push(getObject(
			"Реализация программы «Очередей.Нет!»",
			"o-prog-queue",
			"Слайд78.JPG"));
	$return.push(getObject(
			"Отзывы о Сбербанке в социальных сетях",
			"t-tb o-incidents",
			"Слайд79.JPG"));
	$return.push(getObject(
			"Основные результаты блока Управление Благосостоянием",
			"b-ub o-plan",
			"Слайд81.JPG"));
	$return
			.push(getObject(
					"Основные результаты блока Управление Благосостоянием (ООО СК «Сбербанк страхование жизни»)",
					"b-ub",
					"Слайд82.JPG"));
	$return
			.push(getObject(
					"Основные результаты блока Управление Благосостоянием (ООО СК «Сбербанк страхование»)",
					"b-ub",
					"Слайд83.JPG"));
	$return
			.push(getObject(
					"Основные результаты блока Управление Благосостоянием (Управление активами, НПф, Страховой брокер)",
					"b-ub",
					"Слайд84.JPG"));
	$return.push(getObject("Основные риск-метрики", "m-risk", "Слайд86.JPG"));
	$return.push(getObject(
			"Дайджест по CoR и расходам на резервы",
			"m-risk",
			"Слайд87.JPG"));
	$return
			.push(getObject(
					"Крупнейшие кейсы (Выходы на раннюю просрочку, Прирост/выходы в NPL90+, Топ выходов дефолт, Топ улучшений рейтинга)",
					"m-risk m-npl",
					"Слайд88.JPG"));
	$return.push(getObject(
			"Крупнейшие кейсы (Фокусные инциденты операционного риска)",
			"m-risk",
			"Слайд89.JPG"));
	$return.push(getObject(
			"Блок Международные операции",
			"m-balance m-capital a-loan a-borrowing b-bmo",
			"Слайд91.JPG"));
	$return
			.push(getObject(
					"Дэшборд дочерних банков по ликвидности и капиталу СНГ (Белорусь, Казахстан, Украина)",
					"m-liquidity m-capital b-bmo",
					"Слайд92.JPG"));
	$return
			.push(getObject(
					"Дэшборд дочерних банков по ликвидности и капиталу (Denizbank, SBE, SB India)",
					"m-liquidity m-capital b-bmo",
					"Слайд93.JPG"));
	$return
			.push(getObject(
					"Денизбанк",
					"m-summary m-balance m-liquidity m-capital a-loan a-borrowing b-bmo",
					"Слайд94.JPG"));
	$return
			.push(getObject(
					"Сбербанк Европа",
					"m-summary m-balance m-liquidity m-capital a-loan a-borrowing b-bmo",
					"Слайд95.JPG"));
	$return
			.push(getObject(
					"Сбербанк Казахстан",
					"m-summary m-balance m-liquidity m-capital a-loan a-borrowing b-bmo",
					"Слайд96.JPG"));
	$return
			.push(getObject(
					"Сбербанк Белоруссия",
					"m-summary m-balance m-liquidity m-capital a-loan a-borrowing b-bmo",
					"Слайд97.JPG"));
	$return
			.push(getObject(
					"Сбербанк Украина",
					"m-summary m-balance m-liquidity m-capital a-loan a-borrowing b-bmo",
					"Слайд98.JPG"));
	$return.push(getObject(
			"Вложения Сбербанка в дочерние банки БМО",
			"m-capital b-bmo",
			"Слайд99.JPG"));
	$return
			.push(getObject(
					"Технологические факторы, оказавшие существенное влияние на бизнес за период с 23 по 29 сентября",
					"o-incidents",
					"Слайд101.JPG"));
	$return
			.push(getObject(
					"Количество обращений vs. объем операций/активные клиенты 2015 - 2016",
					"o-incidents",
					"Слайд102.JPG"));
	$return.push(getObject(
			"Структура ТОП-10 проблем Банка",
			"o-incidents",
			"Слайд103.JPG"));
	$return.push(getObject(
			"Структура обращений, решенных сразу",
			"o-incidents",
			"Слайд104.JPG"));
	$return.push(getObject(
			"Структура отложенных обращений",
			"o-incidents",
			"Слайд105.JPG"));
	$return.push(getObject(
			"Результаты работы Службы заботы о клиентах ОПЕРУ (Динамика)",
			"o-incidents",
			"Слайд106.JPG"));
	$return
			.push(getObject(
					"Результаты работы Службы заботы о клиентах ОПЕРУ (Тематики решённых обращений)",
					"o-incidents",
					"Слайд107.JPG"));
	$return
			.push(getObject(
					"Результаты работы Службы заботы о клиентах ОПЕРУ (Регистрация в CRM и вывод решений на 1-ю линию)",
					"o-incidents",
					"Слайд108.JPG"));
	$return.push(getObject(
			"Обращения ВСП vs. количество обслуженных клиентов",
			"o-incidents",
			"Слайд109.JPG"));
	$return.push(getObject(
			"ТОП проблем: Розыск и возврат платежей",
			"o-incidents",
			"Слайд111.JPG"));
	$return.push(getObject(
			"В фокусе: событие (ОСВЕЩЕНИЕ МИФ В СОЧИ 2016)",
			"o-info",
			"Слайд113.JPG"));
	$return
			.push(getObject(
					"Информационная картина недели 24-30.09.2016 (ГЛАВНЫЕ ТЕМЫ С УЧАСТИЕМ ГРУППЫ СБЕРБАНК)",
					"o-info",
					"Слайд114.JPG"));
	$return
			.push(getObject(
					"Информационная картина недели 24-30.09.2016 (СТРУКТУРА НЕГАТИВА В СМИ И СОЦИАЛЬНЫХ МЕДИА)",
					"o-info",
					"Слайд115.JPG"));
	$return
			.push(getObject(
					"Информационная картина недели 24-30.09.2016 (ГЛАВНЫЕ ТЕМЫ С УЧАСТИЕМ ГРУППЫ СБЕРБАНК В СТРАНАХ ПРИСУТСТВИЯ)",
					"o-info",
					"Слайд116.JPG"));
	$return
			.push(getObject(
					"Информационная картина недели 24-30.09.2016 (СТРУКТУРА НЕГАТИВА В СМИ И СОЦИАЛЬНЫХ МЕДИА ЗА ЯНВАРЬ – СЕНТЯБРЬ 2016 Г.)",
					"o-info",
					"Слайд117.JPG"));
	$return
			.push(getObject(
					"Информационная картина недели 24-30.09.2016 (УПРАВЛЕНИЕ ИНФОРМАЦИОННЫМ ПОЛЕМ. РЕТРОСПЕКТИВА ЗА СЕНТЯБРЬ)",
					"o-info",
					"Слайд118.JPG"));
	$return
			.push(getObject(
					"Информационная картина недели 24-30.09.2016 (ГЛАВНЫЕ КАМПАНИИ ОКТЯБРЯ)",
					"o-info",
					"Слайд119.JPG"));
	$return
			.push(getObject(
					"Информационная картина недели 24-30.09.2016 (ГЛАВНЫЕ КАМПАНИИ ОКТЯБРЯ)",
					"o-info",
					"Слайд120.JPG"));
	$return
			.push(getObject(
					"Информационная картина недели 24-30.09.2016 (ГЛАВНЫЕ КАМПАНИИ ОКТЯБРЯ)",
					"o-info",
					"Слайд121.JPG"));
	$return
			.push(getObject(
					"Информационная картина недели 24-30.09.2016 (ОБЗОР ИННОВАЦИОННЫХ ПРАКТИК В БАНКОВСКОЙ СФЕРЕ)",
					"o-info",
					"Слайд122.JPG"));
	$return
			.push(getObject(
					"Информационная картина недели 24-30.09.2016 (ОБЗОР ИННОВАЦИОННЫХ ПРАКТИК В БАНКОВСКОЙ СФЕРЕ)",
					"o-info",
					"Слайд123.JPG"));
	$return
			.push(getObject(
					"Информационная картина недели 24-30.09.2016 (ОБЗОР ИННОВАЦИОННЫХ ПРАКТИК В БАНКОВСКОЙ СФЕРЕ)",
					"o-info",
					"Слайд124.JPG"));
	$return
			.push(getObject(
					"Информационная картина недели 24-30.09.2016 (ОБЗОР ИННОВАЦИОННЫХ ПРАКТИК В БАНКОВСКОЙ СФЕРЕ)",
					"o-info",
					"Слайд125.JPG"));
	$return.push(getObject(
			"Производственный статус ПИР",
			"o-pir",
			"Слайд126.JPG"));
	$return.push(getObject(
			"Портфели ценных бумаг внутреннего банка (Резюме)",
			"m-summary m-balance m-pl m-capital a-securities",
			"Слайд129.JPG"));
	$return.push(getObject(
			"Портфели ценных бумаг внутреннего банка",
			"m-balance m-capital a-securities",
			"Слайд130.JPG"));
	$return.push(getObject(
			"Финансовый результат портфелей ценных бумаг внутреннего банка",
			"m-pl m-capital a-securities",
			"Слайд131.JPG"));

	return $return;

}
