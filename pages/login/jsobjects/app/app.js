export default {

	run: async  ()=> {
		try{
		const {Email} = jsonwebtoken.verify(appsmith.store.token, 'secret');
return Email;
		}catch (error){
			return showAlert('session expired')
		}
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}