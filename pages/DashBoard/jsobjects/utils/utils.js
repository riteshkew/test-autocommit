export default {
	avg_ontrack:(data=show_KPI_Monitor.data)=>{
		let kpi_data = data
		if(Select_Owner.selectedOptionValue !==''){
			kpi_data = kpi_data.filter(k=> k.emp_id===Select_Owner.selectedOptionValue)
		}
		if(Inp_Sel_Team.selectedOptionValue !==''){
			kpi_data = kpi_data.filter(k=> k.team_id===Inp_Sel_Team.selectedOptionValue)
		}
		let sum = 0
		for (let i = 0; i < kpi_data.length; i++){
			sum = sum + kpi_data[i].ontrack
		}
		return kpi_data.length>=0?parseInt(sum/kpi_data.length):0
	},
	avg_progress:(data=show_KPI_Monitor.data)=>{
		let kpi_data = data
		if(Select_Owner.selectedOptionValue !==''){
			kpi_data = kpi_data.filter(k=> k.emp_id===Select_Owner.selectedOptionValue)
		}
		if(Inp_Sel_Team.selectedOptionValue !==''){
			kpi_data = kpi_data.filter(k=> k.team_id===Inp_Sel_Team.selectedOptionValue)
		}
		let sum = 0
		for (let i = 0; i < kpi_data.length; i++){
			sum = sum + kpi_data[i].progress
		}
		return kpi_data.length>=0?parseInt(sum/kpi_data.length):0
	},

	weekly_ontrack_avg: async()=>{
		await fetch_KPI_Week_Task.run()
		let kwt  = fetch_KPI_Week_Task.data

		if(Inp_Sel_Team.selectedOptionValue !==''){
			kwt = kwt.filter(k=> k.team_id===Inp_Sel_Team.selectedOptionValue)
		}
		if(Select_Owner.selectedOptionValue !==''){
			kwt = kwt.filter(k=> k.emp_id===Select_Owner.selectedOptionValue)
		}
		if(Inp_Obj.selectedOptionValue !==''){
			kwt = kwt.filter(k=> k.kpi_obj_id===Inp_Obj.selectedOptionValue)
		}
		if(Inp_OKR.selectedOptionValue !==''){
			kwt = kwt.filter(k=> k.kpi_kr_id===Inp_OKR.selectedOptionValue)
		}

		let count = 0
		let weeks = [0,0,0,0,0,0,0,0,0,0,0,0,0]
		for (let i = 0; i < 13; i++){
			count = 0
			for (let j = 0; j < kwt.length; j++){
				if(kwt[j].weeks==="Week "+(i+1).toString() && kwt[j].ontrack!==null)
				{
					weeks[i]= weeks[i] + kwt[j].ontrack
					count++
				}
			}//j
			if(count!==0)weeks[i]= weeks[i]/count
		}//i

		return [
  {
    "x": "Week 1",
    "y": weeks[0]
  },
  {
    "x": "Week 2",
    "y": weeks[1]
  },
  {
    "x": "Week 3",
    "y":weeks[2]
  },
   {
    "x": "Week 4",
    "y": weeks[3]
  },
  {
    "x": "Week 5",
    "y":weeks[4]
  },
  {
    "x": "Week 6",
    "y": weeks[5]
  },
   {
    "x": "Week 7",
    "y": weeks[6]
  },
  {
    "x": "Week 8",
    "y": weeks[7]
  },
  {
    "x": "Week 9",
    "y": weeks[8]
  },
   {
    "x": "Week 10",
    "y": weeks[9]
  },
  {
    "x": "Week 11",
    "y": weeks[10]
  },
  {
    "x": "Week 12",
    "y": weeks[11]
  },
  {
    "x": "Week 13",
    "y":weeks[12]
  }
]
	}

}



