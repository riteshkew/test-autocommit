export default {
	access:async()=>{
		await storeValue('user',continue_api.data)
		await updateStatus.run();
		await updateCompany.run()
		await storeValue('company',updateCompany.data[0].comp_id)
		await fetch_emp_by_level.run()
		if(fetch_emp_by_level.data[0].lvl_id>2){
			navigateTo('EOS Management')
		}
		else{
			navigateTo('KPI Monitoring')
		}
	},
	new_comp:async()=>{
		await storeValue('user',continue_api.data)
		await auth.run();
		if(auth.data[0].case===true){
			await updateStatus.run();
			await updateCompany.run()
			await storeValue('company',updateCompany.data[0].comp_id)
			await fetch_emp_by_level.run()
			if(fetch_emp_by_level.data[0].lvl_id>2){
				navigateTo('EOS Management')
			}
			else{
				navigateTo('KPI Monitoring')
			}
		}
		else{
			navigateTo('New Company Sign In')
		}
	}
}