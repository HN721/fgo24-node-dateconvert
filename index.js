import moment from "moment";
import readline from "readline";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("Masukan Tanggal = ", (date) => {
  try {
    if (date.length !== 10 || date.includes("/")) {
      throw new Error("Harus 10 Angka");
    } else {
      const input = moment(date, "DD-MM-YYYY").format("DD/MM/YYYY");
      if (input === "Invalid date") {
        throw new Error("Invalid date");
      } else {
        console.log(`${input}`);
      }
    }

    rl.close();
  } catch (err) {
    if (err.message === "Harus 10 Angka") {
      console.log("Harap Masukan Tanggal Sesuai Format");
    }
    if (err.message === "Invalid Date") {
      console.log("Format Tanggal Salah");
    }
  }
  rl.close();
});
// Tanpa Package

rl.question("Masukan Tanggal : ", (input) => {
  try {
    const data = input.split("-").join("/");
    if (data.length === 10) {
      throw new Error("Harus 10 Angka");
    }
    if (/[a-zA-Z]/.test(data)) {
      throw new Error("Harap Masukan Huruf");
    }
    rl.close();
  } catch (err) {
    if (err.message === "Harus 10 Angka") {
      console.log("Harap Masukan Tanggal Sesuai Format");
    }
    if (err.message === "Harap Masukan Huruf") {
      console.log("Format Tanggal Salah");
    }
    rl.close();
  }
});
// function sebuahProgram(kondisi) {
//   if (typeof kondisi !== "boolean") {
//     const y = new Error("tipe_data");
//     throw y;
//   }
//   if (!kondisi) {
//     const x = new Error("false");
//     throw x;
//   }
//   return `Program Berjalan`;
// }
// try {
//   const result = sebuahProgram(false);
//   console.log(result);
// } catch (err) {
//   if (err.message === "tipe_data") {
//     console.log("Tipe Data tidak sesuai");
//   }
//   if (err.message == "false") {
//     console.log("Parameter tidak boleh diisikan flase");
//   }
// }
