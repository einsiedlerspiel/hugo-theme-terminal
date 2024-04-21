function clickTab (evt) {

    let tabName = evt.target.getAttribute("tabName");
    let container = evt.currentTarget.parentElement;
    let tabContent = container.getElementsByClassName("tabContent");
    let tabBar = evt.currentTarget.children;

    for (let i = 0; i < tabContent.length; i++){
	tabContent[i].style.display = "none";
    }

    for (let i = 0; i < tabBar.length; i++){
	tabBar[i].classList.remove("active")
    }

    tabContent.namedItem(tabName).style.display = "block";
    evt.target.classList.add("active");
}
