function createCard(title, cName, views, monthsOld, duration, thumbnail) {
  let viewsNumber;
  if (views < 1000) {
    viewsNumber = views;
  } else if (views > 1000000 && views < 1000000000) {
    viewsNumber = views / 1000000 + "M";
  } else {
    viewsNumber = views / 1000 + "K";
  }

  let html = `
  <div class="card">
        <div class="image">
          <img
            src="${thumbnail}"
            ;
            alt=""
            srcset=""
          />
           <div class="capsule">${duration}</div>
        </div>
        
        <div class="text">
          <h1>${title}</h1>
          <p>${cName} . ${viewsNumber} views .${monthsOld} months ago</p>
        </div>
      </div>`;

  document.querySelector(".container").innerHTML =
    document.querySelector(".container").innerHTML + html;
}

createCard(
  "Introduction to Backend | Sigma Web Dev video #2",
  "CodeWithHarry",
  560000,
  7,
  "31:22",
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw"
);

createCard(
  "Introduction to Express | Sigma Web Dev video #3",
  "CodeWithHarry",
  760000000,
  4,
  "30:02",
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw"
);
createCard(
  "Introduction to Express | Sigma Web Dev video #3",
  "CodeWithHarry",
  76,
  4,
  "30:02",
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw"
);
