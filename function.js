/**
 * <b>DESCR:</b><br>
 * All VARIABLES used in this small program
 *
 */
let mainNav = document.getElementById('main-nav')
let title = document.getElementById('title')
let descriptionDiv = document.getElementById('nav-text')
let i

/**
 * <b>DESCR:</b><br>
 * Add 'Opener' css class to the title & navigation menu
 *
 */
mainNav.classList.add('opener')
title.classList.add('opener')


/**
 * <b>DESCR:</b><br>
 * Deals with the mouseover event listener
 *
 * @function mouseOver
 *
 * @param {string} item the navigation item's ID
 * @param {string} color the navigation item's color
 * @param {string} descr the navigation item's title || descrption
 * @param {string} thumb the DOM node associated w/ the navigation item
 */
function mouseOver(item, color, descr, thumb) {
  item.addEventListener('mouseover', function() {
    descriptionDiv.style.color = color
    descriptionDiv.innerHTML = descr+thumb
    descriptionDiv.classList.add('fade-in')
    // Miniatures fade-in
    setTimeout(function() {
      let shining = document.getElementById('shining')
      shining.classList.add('slow-in')
    }, 100)
    // Remove fade-in on title to reset & re-use it later
    setTimeout(function () {
     descriptionDiv.classList.remove('fade-in')
   }, 200)
 })
}

/**
 * A loop to parse through all items data & attach event listener
 */
for (i = 0; i < navItems.length; i ++) {
  let itemSelector = document.getElementById(navItems[i].id)
  let itemColor = navItems[i].color
  let itemDescr = navItems[i].descr
  let itemThumb = navItems[i].thumb
  mouseOver(itemSelector, itemColor, itemDescr, itemThumb)
}

/**
 * 'Click' on title cleans central DIV
 */
title.addEventListener('click', function (event) {
  document.getElementById('nav-text').innerHTML = ' '
  document.getElementById('nav-text').classList.remove('slide-up')
})
