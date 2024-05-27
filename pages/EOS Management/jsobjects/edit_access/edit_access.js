export default {
	editable:async(current)=>{
		if(fetch_emp_by_level.data[0].emp_role==='admin'){
			return true
		}
		else{
			if((fetch_emp_by_level.data[0].lvl_id===3||fetch_emp_by_level.data[0].lvl_id===4)&& current===fetch_emp_by_level.data[0].teams_id){
				return true
			}
			
		}
		return false
	}
}