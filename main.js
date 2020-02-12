declutter = () => {
  //JS VERSION
  let containerElement = document.getElementsByClassName(
    "container stream-container"
  )[0];
  containerElement.style.margin = "0";
  containerElement.style.padding = "0";
  containerElement.style.width = "100%";

  let steamSectionElement = document.getElementById("stream-section");
  steamSectionElement.className = "none";

  let parentRow = steamSectionElement.parentElement;
  parentRow.style.margin = "0";

  //Change view (Промени изгледа) functionality
  // let playerElement = document.getElementById("player");
  // playerElement.className = "camera-and-big-screen-video";

  let mobileResources = document.getElementsByClassName("mobile-resources")[0];
  let mobileMenu = (mobileResources.children[0].style.display = "block");

  let asideElement = document.getElementsByTagName("aside")[0];
  asideElement.remove();

  let headerSection = document.getElementsByClassName(
    "row stream-nav-header no-margin-offset"
  )[0];
  headerSection.remove();
};

declutter();