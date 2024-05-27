export default {
	fetch_role: async () => {
		const employeeData = [
			{
				"name": "Admin",
				"code": "admin"
			},
			{
				"name": "Team Lead",
				"code": "teamlead"
			},
			{
				"name": "Team Member",
				"code": "teammember"
			}
		];

		// Capitalize and format the role names and codes
		const formattedRoles = employeeData.map(emp => {
			const words = emp.name.split(' ');
			const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
			const formattedCode = capitalizedWords.join(' ');
			return {
				name: formattedCode,
				code: emp.name
			};
		});

		return formattedRoles;
	}
}



