export default {
	filter_KPI_Moniter:(data=show_KPI_Monitor.data)=>{
		let kpi_data = data
		if(fetch_emp_by_level.data[0].id==='teammember'){
			kpi_data = kpi_data.filter(k=> k.emp_id===fetch_emp_by_level.data[0].emp_id)
		}
		else if(fetch_emp_by_level.data[0].id==='teamlead'){
			kpi_data = kpi_data.filter(k=> k.team_id===fetch_emp_by_level.data[0].teams_id)
		}
		if(Select_Owner.selectedOptionValue !==''){
			kpi_data = kpi_data.filter(k=> k.emp_id===Select_Owner.selectedOptionValue)
		}
		if(Inp_Sel_Team.selectedOptionValue !==''){
			kpi_data = kpi_data.filter(k=> k.team_id===Inp_Sel_Team.selectedOptionValue)
		}
		if(Select_KPI.selectedOptionValue !==''){
			kpi_data = kpi_data.filter(k=> k.kpi_id===Select_KPI.selectedOptionValue)
		}
		if(Quarter_Inp.selectedOptionValue !==''){
			kpi_data = kpi_data.filter(k=> 			parseInt(k.quarter)===parseInt(Quarter_Inp.selectedOptionValue))
		}
		if(Input_Year.selectedOptionValue !==''){
			kpi_data = kpi_data.filter(k=> 			parseInt(k.year)===parseInt(Input_Year.selectedOptionValue))
		}
		return kpi_data
	},
	save_week_actual:async() =>{
		await save_actual_week.run(),
		await update_ontrack.run(),
			await Select_KPI_Week_Task.run(),
			// await Cal_OnTrack.run(),
			await update_overall_actual.run(),
			await Select_KPI_Week_Task.run(),
			await show_KPI_Monitor.run()
	},
	fun:()=>{
		return Table2.triggeredRow.week_actual
	},
	create_task_monitor:()=>{
		// let num = utils.filter_KPI_Moniter(show_KPI_Monitor.data)
		if(Table1.tableData.length<=0){showModal('KPI_Monitor_Label')}
		else{showAlert('KPI moniter already exists for selected options','warning')}

	},
	fun2:()=>{
		let id  = Select_emp_by_kpi.run()
		return id[0]
	}

}