let examples = [];

let example_1 = {
	name: 'Find words and convert to JS array',
	actions: [
		{type: "REGEXP_FLOW_ADD_FILTER", filterType: "FindAll"},
		{type: "FILTER_UPDATE_SEARCH_STRING", id: "1", searchString: "[a-z]+"},
		{type: "FILTER_TOGGLE_CASE_INSENSITIVE", id: "1"},

		{type: "REGEXP_FLOW_ADD_FILTER", filterType: "Unique"},

		{type: "REGEXP_FLOW_ADD_FILTER", filterType: "Replace"},
		{type: "FILTER_UPDATE_SEARCH_STRING", id: "3", searchString: "^(.+?)$"},
		{type: "FILTER_UPDATE_REPLACE_STRING", id: "3", replaceString: "'$1',"},

		{
			type: "UPDATE_INPUT_TEXT",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
			"Cras ut pharetra ipsum, in interdum risus. " +
			"Donec ante mauris, pellentesque condimentum felis sed, dictum pulvinar elit. " +
			"Sed nulla metus, sagittis eu elit vel, adipdsdsdiscing interdum risus. " +
			"Mauris vitae ligula massa. " +
			"Integer in blandit arcu. " +

			"Aliquam laoreet justo a lorem pellentesque scelerisque. " +
			"Curabitur varius et odio ut condimentum. " +
			"Etiam cursus nunc et porttitor cursus. " +
			"Nulla blandit hendrerit metus, a auctor magna ullamcorper non. " +
			"Cras vitae metus tortor. " +
			"Proin venenatis eros et sem consectetur vehicula. " +
			"Donec commodo sit amet metus a scelerisque. " +
			"Sed vitae dapibus lorem. " +
			"Vestibulum sed varius nisl. " +

			"Curabitur id lobortis dui.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse egestas ultrices eros et cursus. " +
			"In quam erat, fermentum in volutpat eu, ornare eget enim. " +
			"Vivamus eu pharetra sem. " +
			"Mauris id congue urna. " +
			"Proin leo augue, pretium eu pulvinar sit amet, placerat eget sapien. " +
			"Phasellus porta nunc euismod ultricies dignissim. " +
			"Mauris luctus bibendum vehicula. " +
			"In hac habitasse platea dictumst. " +
			"Curabitur posuere ac felis non interdum. " +
			"Phasellus laoreet id purus id semper. "
		},
	]
};
examples.push(example_1);

let example_2 = {
	name: 'Convert Excel to JSON',
	actions: [
		{
			type: "UPDATE_INPUT_TEXT",
			text: "1	Aaa	2016-10-01	8\n" +
			"2	Bbb	2016-10-01	16\n" +
			"3	Ccc	2016-10-02	10\n" +
			"4	Ddd	2016-10-03	14\n" +
			"5	Eee	2016-10-05	16\n" +
			"6	Fff	2016-10-10	11\n" +
			"7	Ggg	2016-10-12	11\n" +
			"8	Hhh	2016-10-14	18\n" +
			"9	Iii	2016-10-20	18\n" +
			"10	Jjj	2016-10-24	7\n" +
			"11	Kkk	2016-10-30	17\n"
		},
		{type: "REGEXP_FLOW_ADD_FILTER", filterType: "Replace"},
		{type: "FILTER_UPDATE_SEARCH_STRING", id: "1", searchString: "^(.+?)\t(.+?)\t(.+?)\t(.+?)$"},
		{type: "FILTER_UPDATE_REPLACE_STRING", id: "1", replaceString: '{"id":$1, "name": "$2", "startedAt": "$3", "total": $4}'},
	]
};
examples.push(example_2);

export default examples;
