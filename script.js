const body = document.querySelector("body"),
      sidebar = body.querySelector(".sidebar"),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");

      toggle.addEventListener("click", () =>{
        sidebar.classList.toggle("close");
      } );


      searchBtn.addEventListener("click", () =>{
        sidebar.classList.remove("close");
      } );


      modeSwitch.addEventListener("click", () =>{
        body.classList.toggle("dark")

        if(body.classList.contains("dark")){
            modeText.innerText = "Світла Тема"
        }
        else{
            modeText.innerText = "Нічна Тема"
        }
      } );

      let button = document.querySelector(".button");
      button.addEventListener("click", () => {
          button.classList.add("active");
      
          setTimeout(() => {
              button.classList.remove("active");
              document.querySelector(".button i").classList.replace("bx-cloud-download", "bx-check-circle");
              document.querySelector(".button-text").innerText = "Готово";
          }, 6000); // 1s = 1000ms
      });
  // Реалізація завантаження
  const downloadButton = document.getElementById("downloadButton");
  const downloadLink = document.getElementById("downloadLink");
  downloadButton.addEventListener("click", () => {
    downloadLink.click(); 
  });

  const archiveButton = document.getElementById("archiveButton");
  const archiveLink = document.getElementById("archiveLink");
  archiveButton.addEventListener("click", () => {
    archiveLink.click(); 
  });


  // // Плавне прокручування до секцій при натисканні
  const mainButton = document.getElementById("mainbutton");
  const downButton = document.getElementById("downbutton");
  const contactButton = document.getElementById("contactbutton");
  const aboutusButton = document.getElementById("aboutusbutton");

  const homeSection = document.getElementById("homeSection");
  const downloadSection = document.getElementById("downloadSection");
  const contactSection = document.getElementById("contactSection");
  const aboutusSection = document.getElementById("aboutusSection");

  mainButton.addEventListener("click", () => {
      
      homeSection.scrollIntoView({ behavior: "smooth" });
  });
  downButton.addEventListener("click", () => {
      
    downloadSection.scrollIntoView({ behavior: "smooth" });
  });
  contactButton.addEventListener("click", () => {
        
    contactSection.scrollIntoView({ behavior: "smooth" });
  });
  aboutusButton.addEventListener("click", () => {
        
    aboutusSection.scrollIntoView({ behavior: "smooth" });
  });

    