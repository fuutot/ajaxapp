// CSSセレクタを使ってDOMツリー中のh1要素を取得する
const heading = document.querySelector("h1");
// h2要素に含まれるテキストコンテンツを取得する
const headingText = heading.textContent;
console.log(headingText)

// button要素を作成する
const button = document.createElement("button");
button.textContent = "Push Me";
// body要素の子要素としてbuttonを挿入する
document.body.appendChild(button);