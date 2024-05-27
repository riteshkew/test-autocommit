export default{
	fetchList:async()=> {
		const accessLevels = [
			{
				name: "Level 1: View Access of only user's KPI data in KPI monitoring",
				code: 1
			},
			{
				name: "Level 2: Edit access of only user's KPI data in KPI Monitoring",
				code: 2
			},
			{
				name: "Level 3: View access of only teams's data in KPI monitoring and EOS management",
				code:3
			},
			{
				name: "Level 4: Edit access of only team's data in KPI monitoring and EOS management",
				code:4
			},
			{
				name: "Level 5: View access of all data",
				code:5
			}
		]
		return accessLevels;
	}
}

