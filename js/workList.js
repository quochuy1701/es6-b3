export default class DanhSachCongViec {
    mangA = [];
    mangB = [];
    constructor() { };
    themCongViec = (congViec) => {
        this.mangA.push(congViec);

    }
    xoaCongViec = (id) => {
        this.mangA.splice(id, 1);
    }
    chuyenCV = (id) => {
        this.mangB.push(this.mangA[id]);
    }
    xoaCongViec1 = (id) => {
        this.mangB.splice(id, 1);
    }
    Sapxepaz = () => {
        this.mangA.sort(function (a, b) {
            let n1 = a.tenCongviec.toLowerCase();
            let n2 = b.tenCongviec.toLowerCase();
            if (n1 < n2) {
                return -1;

            } else if (n1 > n2) {
                return 1;
            }
            else {
                return 0

            }
        })
        this.mangB.sort(function (a, b) {
            let n1 = a.tenCongviec.toLowerCase();
            let n2 = b.tenCongviec.toLowerCase();
            if (n1 < n2) {
                return -1;

            } else if (n1 > n2) {
                return 1;
            }
            else {
                return 0

            }
        })
        
    }
    Sapxepza = () => {
        this.mangA.sort(function (a, b) {
            let n1 = a.tenCongviec.toLowerCase();
            let n2 = b.tenCongviec.toLowerCase();
            if (n1 < n2) {
                return 1;

            } else if (n1 > n2) {
                return -1;
            }
            else {
                return 0

            }
        })
        this.mangB.sort(function (a, b) {
            let n1 = a.tenCongviec.toLowerCase();
            let n2 = b.tenCongviec.toLowerCase();
            if (n1 < n2) {
                return 1;

            } else if (n1 > n2) {
                return -1;
            }
            else {
                return 0

            }
        })
        
       
        
    }
}