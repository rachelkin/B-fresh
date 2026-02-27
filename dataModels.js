class product {
    constructor(name, product_id, price, url, Sale_price, Sale_quantity,discription) {
        this.name = name;
        this.product_id = product_id;
        this.price = price;
        this.url = url;
        this.discription = discription;
        this.sale = (!Sale_price && !Sale_quantity) ? undefined : {
            Sale_price,
            Sale_quantity
        };

    }
}
class User {
    constructor(name, User_id, password) {
        this.name = name;
        this.User_id = User_id;
        this.password = password;

    }
}
class shoping_bag {
    constructor(product_id, amount, total_price) {
        this.product_id = product_id;
        this.amount = amount;
        this.total_price = total_price;
    }
}


let p1 = new product("איס קפה", 1, 20, 'picture/ice-coffee.jpg', 50, 3,"משקה קפה קר ומרענן, מושלם ליום קיץ חם");
let p2 = new product("שייק בריאות - קיווי בננה וציה", 2, 'picture/b-boost.jpg', "שייק עשיר בויטמינים עם קיווי, בננה וזרעי צ'יה.", 30, null, null);
let p3 = new product("שייק מרענן-אוכמניות , מנגו ותות", 3, 34.99, 'picture/B-BUBBLE-SUNRISE.jpg', 60, 2,"שילוב פירות טרופיים ליצירת שייק צבעוני וטעים");
let p4 = new product(" אייס קפה קצפת", 4, 25, 'picture/B-CHOCO-BRULEE.jpg', 50, 3,"אייס קפה עשיר עם שכבת קצפת מתוקה מעל.");
let p5 = new product(" אייס קפה פקאן ", 5, 18, 'picture/ice-coffee.jpg', 45, 3,"קפה קר בטעם אגוזי פקאן מיוחד וניחוח מפתה");
let p6 = new product("אייס תות בננה וקצפת", 6, 'picture/Strawberry_whipped_cream.jpg', "שייק תות ובננה עם קצפת מעל – מתוק ומפנק.", 25, null, null);
let p7 = new product("שייק אבטיח ותות", 7, 'picture/wathermelon.jpg', "משקה קייצי ומרענן עם אבטיח ותותים טריים.", 28, null, null);
let p8 = new product("יוגורט קיווי ותות", 8, 'picture/yogurt.jpg', "קינוח יוגורט בריא עם פירות קיווי ותות מעל.", 48, null, null);
let p9 = new product("שייק מנגו ובננה", 9, 'picture/banana_mango.jpg', "שייק חלק וקטיפתי עם טעמי מנגו ובננה.", 25, null, null);
let p10 = new product("שייק תות בננה", 10, 'picture/shakeStrobery.jpg', "הקלאסיקה האהובה של תות ובננה – מרענן ונפלא.", 18.98, null, null);
let p11 = new product("שייק פסיפלורה ובננה", 11, 'picture/pasiflora-banana.jpg', "טעם אקזוטי מיוחד עם פסיפלורה חמוצה ובננה.", 28.98, null, null);
let p12 = new product("שייק מנגו", 12, 'picture/mango.jpg', "שייק מנגו מתקתק וקטיפתי שמרגיש כמו חופשה.", 20, null, null);
export const products = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12];

let u1=new User("rachel",216373514,1234);
let u2=new User("chen",329426373,5678);
export const users = [u1, u2];


