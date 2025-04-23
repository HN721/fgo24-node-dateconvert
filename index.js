import moment from "moment";
import readline from "readline";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("Masukan Tanggal = ", (date) => {
  if (date.length !== 10 || date.includes("/")) {
    console.log("Format Tanggal Salah");
  } else {
    const input = moment(date, "DD-MM-YYYY").format("DD/MM/YYYY");
    if (input === "Invalid date") {
      console.log("Format Tanggal Salah");
    } else {
      console.log(`${input}`);
    }
  }

  rl.close();
});
// Tanpa Package

rl.question("Masukan Tanggal : ", (input) => {
  const data = input.split("-").join("/");
  if (data.length !== 10 || /[a-zA-Z]/.test(data)) {
    console.log("Format Tanggal Salah");
  }else{
  console.log(data)
  }
  rl.close();
});
