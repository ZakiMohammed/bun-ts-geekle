import type { User } from "./user";
const config = require("../config.json");

(async () => {
  const response = await fetch("http://localhost:3000/api/users");
  const users = await response.json();

  users.map((user: User) => {
    const listGroup = document.querySelector(".list-group");
    if (listGroup) {
      listGroup.innerHTML += `
        <li class="list-group-item">
            👉 ${user.name}
            <span class="float-end">${user.email}</span>
        </li>`;
    }
  });
})();

if (config) {
  const appInfo = document.querySelector("#appInfo");
  if (appInfo) {
    appInfo.innerHTML = `${config.appName}: ${config.version}`;
  }
}
