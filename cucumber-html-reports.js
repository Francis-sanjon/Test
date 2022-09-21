const report=require("multiple-cucumber-html-reporter")
                             report.generate({
jsonDir:"mochawesome-report/",
       reportPath:"mochawesome-report/"
/*jsonDir: './path-to-your-json-output/',
	reportPath: './path-where-the-report-needs-to-be/',*/
})

