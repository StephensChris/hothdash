const searchInput = document.getElementById('searchbar-input');
// Toggle the search bar placeholder text upon activating/deactivating (focusing/unfocusing) the input field
function toggleSearchBarPlaceholder() {
  searchInput.addEventListener('focus', function() {
    this.removeAttribute('placeholder');
  });
  
  searchInput.addEventListener('blur', function() {
    if (!this.value.trim()) {
      this.setAttribute('placeholder', 'Search');
    }
  });
}





const newEntryFormPanel = document.getElementById('new-entry-form-panel');

let newEntryFormHidden = true;

// This will open the "new entry" form when clicking the "new" button
function toggleNewEntryForm() {
  if (newEntryFormHidden) {
    document.getElementById("new-entry-form-panel").style.display = "block";
    document.getElementById("document-blocker").style.zIndex = "1";
    document.getElementById("document-blocker").style.opacity = ".1";
    newEntryFormHidden = false;
  } 
}

// This will deactivate the new entry form if you click outside the form panel (or click the exit button)
function hideNewEntryForm() {
  window.addEventListener('mouseup',function(event){
    if(
      event.target != newEntryFormPanel 

      && event.target.parentNode != newEntryFormPanel
      && event.target.parentNode != document.querySelector('#new-entry-form')
      
      && event.target.parentNode != document.querySelector('#form-parent')
      && event.target.parentNode != document.querySelector("#form-parent-name")
      && event.target.parentNode != document.querySelector("#form-parent-pnum")
      && event.target.parentNode != document.querySelector("#form-parent-type")
      && event.target.parentNode != document.querySelector("#form-parent-type-options")
      && event.target.parentNode != document.querySelector("#form-parent-address")
      && event.target.parentNode != document.querySelector("#form-parent-city")
      && event.target.parentNode != document.querySelector("#form-parent-zip")
      && event.target.parentNode != document.querySelector("#form-parent-state")

      || event.target == document.getElementById('new-entry-form-exit') 
    )
    { 
      newEntryFormPanel.style.display = 'none'; 
      document.getElementById("document-blocker").style.zIndex = "0";
      document.getElementById("document-blocker").style.opacity = "0";
      newEntryFormHidden = true;
    }
  });  
}


// Function Calls
toggleSearchBarPlaceholder();
hideNewEntryForm()











// BROKEN BROKEN BROKEN BROKEN BROKEN BROKEN BROKEN BROKEN BROKEN BROKEN BROKEN BROKEN BROKEN BROKEN BROKEN BROKEN BROKEN 

// let collapsed = false;
// function changeWidth() { 

//     if (!collapsed) {
//         collapsed = true;
//         document.getElementById('sidebar-container').style.width = '30px';
//         document.getElementById('sidebar-container').style.transition = '.3s';

//         document.getElementById('nav-heading').style.display = 'none';

//         document.getElementById('dash-container').style.transition = '.3s';
//         document.getElementById('dash-container').style.left = '80px';
//         document.getElementById('dash-container').style.transform = 'translateX(80px)';
        
//         // document.getElementById('collapse-btn').style.alignContent = 'center';
//     } else {
//         collapsed = false;
//         document.getElementById('sidebar-container').style.width = '300px';

//         document.getElementById('sidebar-heading').style.display = 'inline-block';
//         // document.getElementById('collapse-btn').style.float = 'right';

//         document.getElementById('dash-container').style.left = '350px';
//         document.getElementById('dash-container').style.transform = 'translateX(350px)';
//     }
// }
// BROKEN BROKEN BROKEN BROKEN BROKEN BROKEN BROKEN BROKEN BROKEN BROKEN BROKEN BROKEN BROKEN BROKEN BROKEN BROKEN BROKEN BROKEN BROKEN BROKEN BROKEN 
