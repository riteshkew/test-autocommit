export default {
	revert_back_to_login:async()=>{
		if(appsmith.store.user===undefined){
			navigateTo('login')
		}
	}
}