import * as XLSX from "xlsx"

function handleFile(fileToParce) {
    let f = fileToParce
    let reader = new FileReader()
    
    reader.onload = function(fileToParce) {
        let data = new Uint8Array(fileToParce.target.result)
        let workbook = XLSX.read(data, {type: 'array'})
        let CSV_book = XLSX.utils.book_new()                                // Create new book
        CSV_book.Props = {                                                  // Set properties book
            Title: 'Node-red TagsList'
        }
    let first_sheet_name = workbook.SheetNames[0]                           // Get Sheet name
    let worksheet = workbook.Sheets[first_sheet_name]                       // Get worksheet
    let range = XLSX.utils.decode_range(worksheet['!ref'])                  // Get the range
    let listRange = (Object.values(range)[1]).r
    let i = 1
    let sheetArr = []
    let group = ''
console.log('worksheet: ', worksheet);
    for (i; i < listRange; i++) {
            let A_X_Cell = worksheet[`A${i}`]
            let A_X_Value = String((A_X_Cell ? A_X_Cell.v : undefined))
            if (A_X_Value.includes('Spare')) {
                continue
            }
            let B_X_Cell = worksheet[`B${i}`]
            let B_X_Value = String((B_X_Cell ? B_X_Cell.v : undefined))
            let C_X_Cell = worksheet[`C${i}`]
            let C_X_Value = String((C_X_Cell ? C_X_Cell.v : undefined))
            let D_X_Cell = worksheet[`D${i}`]
            let D_X_Value = String((D_X_Cell ? D_X_Cell.v : undefined))

            let A_Cell_CSV = ''
            let B_Cell_CSV = ''

            if (B_X_Value.includes('Struct')) {
                group = A_X_Value
                continue
            }

            if (D_X_Value.includes('%')) {
                if (C_X_Value === 'Timer') {
                    A_Cell_CSV = 'MD' + D_X_Value.slice(2)
                } else {
                    A_Cell_CSV = D_X_Value.slice(1)
                }
            B_Cell_CSV = `${A_X_Value} - ${B_X_Value}`
    
            } else {
                let dataType = ''
                if (B_X_Value === 'Bool') {
                    dataType = 'X'
                    if (!C_X_Value.includes('.')) { C_X_Value = C_X_Value + '.0' }
                } else  if (B_X_Value === 'Int') {
                    dataType = 'DI'
                } else  if (B_X_Value === 'Real') {
                    dataType = 'R'
                } else  if (B_X_Value === 'Time') {
                    dataType = 'DW'
                }
                if (!dataType.includes('X')) {
                    if (C_X_Value.includes('.0')) { C_X_Value = C_X_Value.slice(0, C_X_Value.length - 2) }
                }

                A_Cell_CSV = `${D_X_Value},${dataType}${C_X_Value}`
                B_Cell_CSV = `${A_X_Value} - ${group}`

            }
            const cellArr = []
            cellArr.push(A_Cell_CSV, B_Cell_CSV)
            sheetArr.push(cellArr)
        }                
            let CSV_sheet = XLSX.utils.aoa_to_sheet(sheetArr)
            XLSX.utils.sheet_to_csv(CSV_sheet)
            XLSX.utils.book_append_sheet(CSV_book, CSV_sheet)
            XLSX.writeFile(CSV_book, 'Node-red TagsList.csv', {bookType:"csv", FS:"\t"})
}

    reader.readAsArrayBuffer(f)
   
}

export default handleFile