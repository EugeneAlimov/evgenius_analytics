import * as XLSX from "xlsx";

const greedOptimisation = (fileToParce) => {
  let f = fileToParce;
  let reader = new FileReader();

  reader.onload = function (fileToParce) {
    let data = new Uint8Array(fileToParce.target.result);
    let workbook = XLSX.read(data, { type: "array" });
    let priceBook = XLSX.utils.book_new(); // Create new book

    priceBook.Props = {
      Title: "Prices",
    };

    let first_sheet_name = workbook.SheetNames[0]; // Get Sheet name
    let worksheet = workbook.Sheets[first_sheet_name]; // Get worksheet
    let range = XLSX.utils.decode_range(worksheet["!ref"]); // Get the range
    let listRange = Object.values(range)[1].r;

    const objArr = Array.from({ length: listRange }, () => {
      return {
        type: null,
        name: null,
        manufactor: null,
        place: null,
        "order-number": null,
        measurement: null,
        "one-pc-price": null,
        quantity: null,
        "full-price": null,
        picture: null,
        link: null,
        discription: null,
      };
    });

    objArr.forEach((el, i) => {
      const keys = Object.keys(el);

      keys.forEach((key, k) => {
        let cellref = XLSX.utils.encode_cell({ c: k, r: i });
        let cell = worksheet[`${cellref}`];
        let cell_Value = cell ? cell.v : undefined;
        el[key] = cell_Value;
      });
    });

    const greed = divideArray(objArr);

    const finalyArr = [];

    greed.forEach((elem) => {
      // for (let i = 0; i >= elem.length; i++) {
      // console.log('elem.length ');
      // if (i === elem.length) {
      //   finalyArr.push(objArr)
      //   continue
      // }

      // finalyArr.push(elem[i])
      // }
      const obj = {
        type: "",
        name: "",
        manufactor: "",
        place: "",
        "order-number": "",
        measurement: "",
        "one-pc-price": "",
        quantity: "",
        "full-price": "",
        picture: "",
        link: "",
        discription: "",
      };

      elem.forEach((el) => {
        finalyArr.push(el);
      });
      finalyArr.push(obj);
    });

    console.log("finalyArr ", finalyArr);
    const newWorksheet = XLSX.utils.json_to_sheet(finalyArr);
    const newWorkbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(newWorkbook, newWorksheet, "Electric");
    XLSX.utils.sheet_add_aoa(
      newWorksheet,
      [
        [
          "Típus",
          "Név",
          "Gyártó",
          "Telepítési hely",
          "Megnevezés",
          "Mennyiség",
          "Ft/db",
          "Darabszám",
          "Összeg",
          "Fénykép",
          "Link",
          "Описание",
        ],
      ],
      { origin: "A1" }
    );

    const max_width = finalyArr.reduce((w, r) => Math.max(w, r.name.length));

    XLSX.writeFile(newWorkbook, "Prices.xlsx", { compression: false });
    newWorksheet["!cols"] = [{ wch: max_width }];
  };

  reader.readAsArrayBuffer(f);
};

function divideArray(arr) {
  let sortedArr = arr.sort((p1, p2) =>
    p1["full-price"] < p2["full-price"] ? 1 : p1["full-price"] > p2["full-price"] ? -1 : 0
  );

  const targetSum = sortedArr.reduce((acc, cur) => acc + cur["full-price"], 0) / 12;
  const result = [];

  for (let i = 0; i < 12; i++) {
    let sum = 0;
    let tempArr = [];

    for (let j = 0; j < sortedArr.length; j++) {
      const value = parseFloat(sortedArr[j]["full-price"]);
      if (sum + value > targetSum) {
        continue;
      }
      sum += value;
      tempArr.push(sortedArr[j]);

      if (sum === targetSum) {
        break;
      }
    }

    sortedArr = sortedArr.filter((item) => !tempArr.includes(item));
    result.push(tempArr);
  }

  return result;
}

export default greedOptimisation;
