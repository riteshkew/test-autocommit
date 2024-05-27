export default {

	updatedObjectiveName: '',
	objective: {},
OKR:{},
	updatedOKRname:'',

	setOKR: (OKR) => {
		this.OKR = OKR; 
	},


	setObjective:async (objective) => {
		storeValue('color','red');
		this.objective = objective; 
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

	SetUpdatedObjectiveName: (name) => {
		this.updatedObjectiveName = name; 
	},


	/*
	init: async () => {
		const courseTypes = await fetchCourseType.run();
		const courseLevels = await fetchCourseLevels.run();

		storeValue('types', courseTypes);
		storeValue('levels', courseLevels);
	},
*/



	getObjective: async () => {
		const objective  = await fetchObjective.run();
		const adjustedObjective = objective.map(s => {
			return {
				Id: s.id,
				Name: s.name,
				company:s.company,
			}
			const myElement = document.getElementById('my-element');

myElement.addEventListener('click', function() {
  myElement.style.backgroundColor = 'red';
});
			storeValue('cname',s.name)
		});

		storeValue('Objective', adjustedObjective);
	},
	getObj: async (Nameobj) => {
		const objective  = await fetchObjective.run();
		const adjustedObj = objective.map(s => {
			if(Nameobj===s.name){ 
				return {
					Id: s.id,
					Name: s.name,
					company:s.company
				}
			}

		});

		storeValue('Obj', adjustedObj);
	},





	createObjective: async () => 		{
		await createObjective.run({
			name: Inp_Obj_name.text
		});

		await this.getObjective();
		closeModal('Obj_Modal');
		showAlert('Objective Created!', 'success')
	},



	updateObjectiveName: async () => {
		await patchObjective.run();
		await this.getObjective();
		closeModal('update_Obj_Modal');
		showAlert('Objective Updated', 'success');
	},


	/*
	getCourseBySubject: async () => {
		const courses = await fetchCoursesBySubject.run();
		return courses.map(c => {
			return {
				Id: c.course_id,
				Name: c.course_name,
				Duration: c.course_duration,
				Description: c.course_description,
				Image: c.course_thumbnail_url,
				Type: c.type_name,
				Level: c.level_name,
				Instructor: c.course_instructor,
				Language: c.course_language,
			}
		})
	},

	updateCourse: async () => {

		let thumbnailUrl;

		if (fpk_uploadThumbnail.files.length > 0) {
			thumbnailUrl = await cloudinaryImageUpload.run({
				data: fpk_uploadThumbnail.files[0].data,
			});
		} else {
			thumbnailUrl = img_thumbnail.image;
		}

		await patchCourse.run({
			thumbnailUrl: thumbnailUrl.url
		});


		await this.getCourseBySubject();
		closeModal('mdl_handleCourse')
		showAlert('Course Updated!', 'success');
	},

	addCourse: async () => {

		let thumbnailUrl;

		if (fpk_uploadThumbnail.files.length > 0) {
			thumbnailUrl = await cloudinaryImageUpload.run({
				data: fpk_uploadThumbnail.files[0].data,
			});
		} else {
			thumbnailUrl = null;
		}

		await createCourse.run({
			thumbnailUrl: thumbnailUrl.url
		});


		await this.getCourseBySubject();
		closeModal('mdl_handleCourse')
		showAlert('Course Created!', 'success');
	},
	*/
}