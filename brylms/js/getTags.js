function getTags() {

	function getObject($tagName, $tag, $level, $newline) {
		return {
			tag_name : $tagName,
			tag : $tag,
			level : $level,
			newline : $newline
		};
	}

	var $return = [];

	/* ПОКАЗАТЕЛИ */
	function setMeasures() {
		$return.push(getObject('Показатели', 'm-', 1));
		$return.push(getObject('Summary', 'm-summary', 2));
		$return.push(getObject('Макро', 'm-macro', 2));
		$return.push(getObject('Ликвидность', 'm-liquidity', 2));
		$return.push(getObject('Капитал', 'm-capital', 2));
		$return.push(getObject('Баланс', 'm-balance', 2));
		$return.push(getObject('Доход', 'm-pl', 2));

		$return.push(getObject('OPEX', 'm-opex', 2));
		$return.push(getObject('OPEX - Персонал', 'm-opex-pers', 3));

		$return.push(getObject('OPEX - Недвижимость', 'm-opex-prem', 3));
		$return.push(getObject('OPEX - Проекты', 'm-opex-proj', 3));
		$return.push(getObject('OPEX - Бизнес-операции', 'm-opex-bis', 3));
		$return.push(getObject('OPEX - Прочее', 'm-opex-other', 3));

		$return.push(getObject('CAPEX', 'm-capex', 2));
		$return.push(getObject('CAPEX - Недвижимость', 'm-capex-prem', 3));
		$return.push(getObject('CAPEX - Проекты', 'm-capex-proj', 3));
		$return.push(getObject('CAPEX - Бизнес-операции', 'm-capex-bis', 3));

		$return.push(getObject('Ставки', 'm-rates', 2, 'NEWLINE'));
		$return.push(getObject('NPL', 'm-npl', 2));
		$return.push(getObject('Заявки', 'm-application', 2));
		$return.push(getObject('RAROC', 'm-raroc', 2));
		$return.push(getObject('CIR', 'm-cir', 2));
		$return.push(getObject('ROE', 'm-roe', 2));
		$return.push(getObject('Условный продукт', 'm-up', 2));
		$return.push(getObject('Риск-метрики', 'm-risk', 2));

	}

	/* КЛИЕНТЫ */
	function setClients() {
		$return.push(getObject('Клиенты', 'c-', 1));
		$return.push(getObject('Физ. лица', 'c-retail', 2));
		$return.push(getObject('Юр. лица', 'c-corporate', 2));
	}

	/* БЛОКИ */
	function setBlocks() {

		$return.push(getObject('Блоки', 'b-', 1, 'NEWLINE'));
		$return.push(getObject('Розничный', 'b-rb', 2));
		$return.push(getObject('CIB', 'b-cib', 2));
		$return.push(getObject('Корпоративный', 'b-cb', 2));
		$return.push(getObject('Крупные', 'b-cb-large', 3));
		$return.push(getObject('Средние', 'b-cb-medium', 3));
		$return.push(getObject('РГС', 'b-cb-rgs', 3));
		$return.push(getObject('ОПК', 'b-cb-opk', 3));
		$return.push(getObject('Малые', 'b-cb-small', 3));
		$return.push(getObject('УБ', 'b-ub', 2));
		$return.push(getObject('БМО', 'b-bmo', 2));
		$return.push(getObject('T', 'b-t', 2));
		$return.push(getObject('ДРПА', 'b-drpa', 2));
		$return.push(getObject('Риски', 'b-risk', 2));
		$return.push(getObject('ЦУНДО', 'b-cash', 2));

	}

	/* ПРОДУКТЫ */
	function setProducts() {
		$return.push(getObject('Продукты', 'a-', 1));
		$return.push(getObject('Привлечение', 'a-borrowing', 2));
		$return.push(getObject('Кредиты', 'a-loan', 2));
		$return.push(getObject('Жилищные', 'a-loan-mortgage', 3));
		$return.push(getObject('Авто', 'a-loan-car', 3));
		$return.push(getObject('Кредитные карты', 'a-loan-credit_cards', 3));
		$return.push(getObject('Потреб', 'a-loan-consumer', 3));
		$return.push(getObject('Ценные бумаги', 'a-securities', 2));
	}

	/* ПРОГНОЗ */
	function setForecast() {
		$return.push(getObject('Прогноз', 'f-', 1, 'NEWLINE'));
		$return.push(getObject('Прогноз', 'f-plan', 2));
	}

	/* РЕГИОН */
	function setRegions() {
		$return.push(getObject('Регион', 't-', 1));
		$return.push(getObject('Тер. банки', 't-tb', 2));
		$return.push(getObject('ЦА', 't-ca', 2));

	}

	/* КАНАЛЫ */
	function setChannels() {
		$return.push(getObject('Каналы', 'ch-', 1));
		$return.push(getObject('Устр-ва самообсл.', 'ch-atm', 2));
		$return.push(getObject('Удаленные', 'ch-remote', 2));
	}

	/* ПРОГРАММЫ */
	function setPrograms() {
		$return.push(getObject('Программы', 'p-', 1));
		$return.push(getObject('Очередей.Нет!', 'p-queue', 2));
		$return.push(getObject('Эффективность/CIR30', 'p-cir', 2));
	}

	/* ПРОЧЕЕ */
	function setOthers() {
		$return.push(getObject('Прочее', 'o-', 1));
		$return.push(getObject('Информационная картина', 'o-info', 2));
		$return.push(getObject('Инциденты', 'o-incidents', 2));
	}

	/* ИСТОЧНИКИ */
	function setSources() {
		$return.push(getObject('Источник', 's-', 1));
		$return.push(getObject('Оперативный отчет', 's-oper', 2));
		$return.push(getObject('Отчет по расходам', 's-expenses', 2));
	}

	setMeasures();
	setClients();
	setRegions();
	setChannels();
	setBlocks();
	setProducts();
	setForecast();
	setPrograms();
	setOthers();
	setSources();

	return $return;

}