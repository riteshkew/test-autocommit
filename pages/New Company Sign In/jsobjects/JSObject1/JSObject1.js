export default {

	create_company:async()=> {
		await create_company.run();
		await create_team.run();
		await create_employee.run();
		await updateCompany.run();
		try{
			await storeValue('company',updateCompany.data[0].comp_id);
		}
		catch(err){};
	}
}