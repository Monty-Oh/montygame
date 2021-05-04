// // userAgent test url
// class URL {
//     // '/' 단위로 나뉠 url
//     private url: string[];

//     // 생성자. /로 나눠서 배열로 만듬
//     constructor(url: string) {
//         this.url = url.split("/").filter((url) => url !== "");
//     }

//     // url 리턴
//     getUrl(index?: number): string {
//         return index !== undefined ? "/" + this.url[index] : "/";
//     }
// }

// // testing url
// export const testUrl = new URL("/test");

export const apiUrl = {
    api: "/api",
};

export const testUrl = {
    test: "/test",
    userAgentTest: "/userAgent",
};

export const rootUrl = {
    root: "/",
    empty: "",
};

export const pageUrl = {
    page: "/",
    web: "/monty",
    mobile: "/m.monty",
};
