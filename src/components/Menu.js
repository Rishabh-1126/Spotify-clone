import React, { useEffect } from "react";

function Menu({ title, menuobject }) {
  useEffect(() => {
    const allLi = document
      .querySelector(".Menucontainer ul")
      .querySelectorAll("li");
    function changeMenuactive() {
      //remove active from whoever have it
      allLi.forEach((n) =>
        // console.log(n);
        n.classList.remove("active")
      );

      this.classList.add("active");
    }

    allLi.forEach((n) => n.addEventListener("click", changeMenuactive));
  }, []);

  return (
    <div className="Menucontainer">
      <p className="title">{title}</p>
      <ul>
        {menuobject &&
          menuobject.map((menu) => (
            <li key={menu.id}>
              <a href="#">
                <i>{menu.icon}</i>
                <span>{menu.name}</span>
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Menu;
