class DnD
{
	listItemsMatching(dv, names, regex)
	{
		names = customJS.BCFuncs.getAllFilesDownFrom(names)

		let secrets =
			dv.pages()
			.where(page =>
				names.includes(page.file.name)
			)
			.file.lists
			.where(task =>
				regex.test(task.section?.subpath)
			)

		dv.taskList(secrets, true)
	}

	listLoot(dv, names)
	{
		this.listItemsMatching(dv, names,
			/([Ll]oot)|([Tt]reasure)|([Ii]nventory)|([Ii]tems)/)
	}

	listSecrets(dv, names)
	{
		this.listItemsMatching(dv, names,
			/([Ss]ecrets?)|([Cc]lues?)/)
	}

	listExtras(dv, names)
	{
		this.listItemsMatching(dv, names,
			/([Ee]xtras?)|([Mm]aps?)|([Hh]andouts?)|([Aa]rt(work)?)/)
	}
}
