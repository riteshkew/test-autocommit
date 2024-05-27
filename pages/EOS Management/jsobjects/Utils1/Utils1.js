export default {
	objective: {},
	setObjective: (objective) => {
		this.Objective = objective;
	},
	
	getObjective: async () => {
		const objective  = await fetchObjective.run();
		const adjustedObjective = objective.map(s => {
			return {
				Id: s.id,
				Name: s.name,
				company:s.company
			}
		});

		storeValue('Objective', adjustedObjective);
	},

	createObjective: async () => 		{
		await createObjective.run({
			name: Inp_Obj_name.text
		});

	//	await this.getObjective();
		closeModal('mdl_manageSubject');
		showAlert('Objective Created!', 'success')
	},


}