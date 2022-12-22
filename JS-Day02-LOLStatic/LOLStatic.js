// {
//     Index:,
//     EngName:,
//     ChName:,
//     Title:,
//     Description:,
//     Tags:,
//     ImgUrl:,
// }
let heroData;

fetch("./Champion.json")
  .then((res) => res.json())
  .then((json) => {
    heroData = json;
    console.log(heroData);
  });

let championArr = [];
let indexs = [];
let engs = [];
let chs = [];
let titles = [];
let descriptions = [];
let tags = [];
let urls = [];
let card = document.querySelectorAll(".card");
card.forEach((champion, index) => {
  //標題
  let title = champion.querySelector(".card-title").innerText;
  //中文名
  let chStart = title.indexOf(" - ") + 3;
  let ch = title.slice(chStart);
  //描述
  let description = champion.querySelector(".card-text").innerText;
  //標籤
  let tagArr = [];
  let tag = champion.querySelectorAll("span");
  tag.forEach((t) => {
    tagArr.push(t.innerText);
  });
  //圖片網址
  let url = champion.querySelector("img").src;

  titles.push(title);
  chs.push(ch);
  descriptions.push(description);
  tags.push(tagArr);
  urls.push(url);

  championArr.push({
    Index: index + 1,
    EngName: champion.id,
    ChName: ch,
    Title: title,
    Description: description,
    Tags: tagArr,
    ImgUrl: url,
  });
});
