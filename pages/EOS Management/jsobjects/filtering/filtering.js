export default {
	filter_KPI:(data=fetchkpiall.data)=>{
		let kpi_data = data

		if(fetch_emp_by_level.data[0]&&fetch_emp_by_level.data[0].id==='teammember'){
			kpi_data = kpi_data.filter(k=> k.emp_id===fetch_emp_by_level.data[0].emp_id)
		}
		else if(fetch_emp_by_level.data[0]&&(fetch_emp_by_level.data[0].id==='teamlead' && (fetch_emp_by_level.data[0].lvl_id===3||fetch_emp_by_level.data[0].lvl_id===4))){
			kpi_data = kpi_data.filter(k=> k.team_id===fetch_emp_by_level.data[0].teams_id)
		}

		if(Obj_List.selectedItem){
			kpi_data = kpi_data.filter(k=> k.kpi_obj_id === Obj_List.selectedItem.id)
		}
		if(Okr_List.selectedItem){
			kpi_data = kpi_data.filter(k=> k.kpi_kr_id === Okr_List.selectedItem.kr_id)
		}

		return kpi_data
	},

	filter_OKR:(data=fetchOKR.data)=>{
		let OKR_Data = data
		if(fetch_emp_by_level.data[0]&&fetch_emp_by_level.data[0].id!=='admin'){
			OKR_Data = OKR_Data.filter(k=> k.team===fetch_emp_by_level.data[0].teams_id)
		}
		if(Obj_List.selectedItem){
			OKR_Data = OKR_Data.filter(k=> k.obj_id===Obj_List.selectedItem.id)
		}
		return OKR_Data
	},


	filter_emp:(data=fetchEmployee.data)=>{
		let emp_data = data
		if(get_team_by_okr.data[0]){
			emp_data = emp_data.filter(k=> k.teams_id ===get_team_by_okr.data[0].team)
		}
		return emp_data
	}
}


