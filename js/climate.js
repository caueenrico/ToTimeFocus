export default function () {
  // const lightTheme = document.querySelector("#light");
  // const darkTheme = document.querySelector("#dark");

  const sun = document.querySelector("#sun");
  const moon = document.querySelector("#moon");
  const Main = document.querySelector("main");

  sun.addEventListener("click", () => {
    document.body.classList.add("dark");
    document.body.classList.remove("light");

    Main.classList.add("tet");


    
    sun.classList.add("hide");
    moon.classList.remove("hide");
  });

  moon.addEventListener("click", () => {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
   

    sun.classList.remove("hide");
    moon.classList.add("hide");
  });
};
