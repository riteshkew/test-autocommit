export default {
	OKR:{},
	updatedOKRname:'',

	setOKR: (OKR) => {
		this.OKR = OKR; 
	},

	getOKR: async () => {
		const OKR  = await fetchOKR.run();
		const adjustedOKR = OKR.map(s => {
			return {
				Result:s.key_result,
				Description:s.key_result_desc,
				Id:s.kr_id,
				ObjId:s.obj_id,
			}
		});
		storeValue('OKR', adjustedOKR);
	},
	createOKR: async () => 		{
		await createOKR.run();
		await this.getOKR();
		closeModal('Add_OKR_Modal');
		showAlert('OKR Created!', 'success')
	},
	updateOKR: async () => 		{
		await patchOKR.run();
		await this.getOKR();
		closeModal('update_OKR_Modal');
		showAlert('OKR Updated!', 'success')
	},
	//KPI
	getKPI: async () => {
		const courses = await fetchKPI.run();
		return courses.map(c => {
			return {
				Id:c.kpi_id,
				Type:c.kpi_type,
				KPI :c.kpi,
				Team_Id:c.team_id,
				Emp_Id:c.emp_id,
				KR_Id:c.kpi_kr_id,
				Obj_Id:c.kpi_obj_id,
			}
		})
	},
		addKPI: async () => {
		await createKPI.run();
		await this.getKPI();
		closeModal('KPI_Modal')
		showAlert('KPI Created!', 'success');
	},
	

}