import Work from "./work.js";
import DanhSachCongViec from "./workList.js"
let dscv = new DanhSachCongViec();
const themCongViec = () => {
    let name = document.getElementById("newTask").value ;
    let cv = new Work(name);
    dscv.themCongViec(cv);
    // console.log(dscv.mangA);
    hienthiDS(dscv.mangA);
}
document.getElementById("addItem").onclick = themCongViec;
const hienthiDS = (mang) => {
    let mangb = mang.map((task,index) => { 
        return `<li>${task.tenCongviec}
                <div>
                <i class="fa-solid fa-trash" onclick="xoaTask('${index}')"></i>
                <i class="fa-regular fa-circle-check"  onclick="tickTask('${index}')"></i>
                </div>
        </li>`
     })
    //  console.log(mangb);
    document.getElementById("todo").innerHTML = mangb.join("");
}
const xoaTask = (id) => {
    dscv.xoaCongViec(id);
    hienthiDS(dscv.mangA)
    // console.log(dscv.mangA)
}
window.xoaTask = xoaTask;
const tickTask = (id) => {
    dscv.chuyenCV(id);
    // console.log(dscv.mangB);
    hienThiDSht(dscv.mangB);
    dscv.xoaCongViec(id);
    hienthiDS(dscv.mangA);
}
window.tickTask = tickTask;
const hienThiDSht = (mang) => {
    let manght = mang.map((task,index) => { 
        return `<li>${task.tenCongviec}
                <div>
                <i class="fa-solid fa-trash" onclick="xoaTask1('${index}')"></i>
                <i class="fa-regular fa-circle-check" style="color:green"></i>
                </div>
        </li>`
     })
    //  console.log(mangb);
    document.getElementById("completed").innerHTML = manght.join("");
}
const xoaTask1 = (id) => {
    dscv.xoaCongViec1(id);
    hienThiDSht(dscv.mangB);
}
window.xoaTask1 = xoaTask1;
const sapxepaz = () => {
    dscv.Sapxepaz();
    hienthiDS(dscv.mangA);
    hienThiDSht(dscv.mangB);
}
document.getElementById("two").onclick = sapxepaz;
const sapxepza = () => {
    dscv.Sapxepza();
    hienthiDS(dscv.mangA);
    hienThiDSht(dscv.mangB);
}
document.getElementById("three").onclick = sapxepza;