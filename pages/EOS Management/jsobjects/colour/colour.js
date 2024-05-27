export default {
	setButtonOne() {
		storeValue('activeButton', 1);
	},

	setButtonTwo() {
		storeValue('activeButton', 2);
	},

	setButtonThree() {
		storeValue('activeButton', 3);
	},
	setCurrentButton() {
		storeValue('currentListItemId', Obj_List.triggeredItem.id)
	}
}