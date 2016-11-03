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

		$return.push(getObject('Показатели', 'm', 1, 'NEWLINE'));
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

		$return.push(getObject('Ставки', 'm-rates', 2));
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
		$return.push(getObject('Клиенты', 'c', 1, 'NEWLINE'));
		$return.push(getObject('Физ. лица', 'c-retail', 2));
		$return.push(getObject('Юр. лица', 'c-corporate', 2));
	}

	/* БЛОКИ */
	function setBlocks() {

		$return.push(getObject('Блоки', 'b', 1, 'NEWLINE'));
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
		$return.push(getObject('Продукты', 'a', 1, 'NEWLINE'));
		$return.push(getObject('Привлечение', 'a-borrowing', 2));
		$return.push(getObject('Кредиты', 'a-loan', 2));
		$return.push(getObject('Жилищные', 'a-loan-mortgage', 3));
		$return.push(getObject('Авто', 'a-loan-car', 3));
		$return.push(getObject('Кредитные карты', 'a-loan-credit_cards', 3));
		$return.push(getObject('Потреб', 'a-loan-consumer', 3));
		$return.push(getObject('Ценные бумаги', 'a-securities', 2));
	}

	/* РЕГИОН */
	function setRegions() {
		$return.push(getObject('Регион', 't', 1, 'NEWLINE'));
		$return.push(getObject('ЦА', 't-ca', 2));
		$return.push(getObject('Тер. банки', 't-tb', 2));
		//$return.push(getObject('Тер. банки', 't-tb', 2));

		$return.push(getObject('ББ', 't-bb', 2));
		$return.push(getObject('ВВБ', 't-vvb', 2));
		$return.push(getObject('ВСБ', 't-vsb', 2));
		$return.push(getObject('ДБ', 't-db', 2));
		$return.push(getObject('ЗСБ', 't-zsb', 2));
		$return.push(getObject('ЗУБ', 't-zub', 2));
		$return.push(getObject('МБ', 't-mb', 2));
		$return.push(getObject('ПВБ', 't-pvb', 2));
		$return.push(getObject('СевБ', 't-sevb', 2));
		$return.push(getObject('СЗБ', 't-szb', 2));
		$return.push(getObject('СКБ', 't-skb', 2));
		$return.push(getObject('СибБ', 't-sibb', 2));
		$return.push(getObject('СРБ', 't-srb', 2));
		$return.push(getObject('УБ', 't-ub', 2));
		$return.push(getObject('ЦЧБ', 't-tcb', 2));
		$return.push(getObject('ЮЗБ', 't-uzb', 2));

	}

	/* ПРОЧЕЕ */
	function setOthers() {
		$return.push(getObject('Прочее', 'o', 1, 'NEWLINE'));
		$return.push(getObject('Информ. картина', 'o-info', 2));
		$return.push(getObject('Инциденты', 'o-incidents', 2));
		$return.push(getObject('Программы', 'o-prog', 2));
		$return.push(getObject('Очередей.Нет!', 'o-prog-queue', 3));
		$return.push(getObject('Эффективность/CIR30', 'o-prog-cir', 3));
		$return.push(getObject('Каналы', 'o-ch', 2));
		$return.push(getObject('Устр-ва самообсл.', 'o-ch-atm', 3));
		$return.push(getObject('Удаленные', 'o-ch-remote', 3));
		$return.push(getObject('Прогноз', 'o-plan', 2));
		$return.push(getObject('Источник', 'o-s', 2));
		$return.push(getObject('Оперативный отчет', 'o-s-oper', 3));
		$return.push(getObject('Отчет по расходам', 'o-s-expenses', 3));
	}

	setBlocks();
	setClients();
	setRegions();
	setProducts();
	setMeasures();
	setOthers();

	return $return;

}