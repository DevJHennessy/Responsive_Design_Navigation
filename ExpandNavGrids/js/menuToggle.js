function toggleMenu() {
  let primaryNav = document.getElementById('primaryNav');
  if (primaryNav.className==="closed") {
    primaryNav.className="open";
  }
  else {
    primaryNav.className="closed";
  }
}

let x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;
