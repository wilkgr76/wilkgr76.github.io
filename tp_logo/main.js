laptop_info = [];

Papa.parse("bios-requirements.csv", {
  download: true,
  header: true,
  dynamicTyping: true,
  skipEmptyLines: true,
  complete: setup
})


function setup(results) {
  console.log(results)
  models = [];
  results.data.forEach(function(currentItem) {
    models.push(currentItem.model)
    laptop_info.push(currentItem)
  })
  var list = document.getElementById("modelList")
  models.forEach(function(item){
    var option = document.createElement('option');
    option.value = item;
    list.appendChild(option);
  });

  document.getElementById("entryBoxDiv").style.display = "block";
  document.getElementById("entryBox").disabled = false;
  document.getElementById("entryBox").addEventListener("input", checkInfo)
}

function checkInfo() {
  var found = false;
  for(var i = 0; i < laptop_info.length; i++) {
    if(document.getElementById("entryBox").value == laptop_info[i].model) {
      found = true;
      item = laptop_info[i];
      // Show table and hide the 'not found' warning
      document.getElementById("infoTable").style.display = "table";
      document.getElementById("notFound").style.display = "none"

      document.getElementById("modelName").innerText = item.model;
      document.getElementById("modelGeneration").innerText = item.generation;

      if(item.support_bmp == null) {
        document.getElementById("unavailable").style.display = "block"
        document.getElementById("infoTable").style.display = "none";
      } else {
        document.getElementById("unavailable").style.display = "none"
        document.getElementById("infoTable").style.display = "table";
      }

      // Check if it supports boot logo at all
      if(!item.support_bmp && !item.support_jpg && !item.support_gif) {
        // Custom boot logo not supported - show warning
        document.getElementById("1_supported").innerText = "❌"
        manipDisplay("primary", "none")
        document.getElementById("2_supported").innerText = "❌"
        manipDisplay("secondary", "none")
      } else {
        document.getElementById("1_supported").innerText = "✔️"
        manipDisplay("primary", "table-row")
        document.getElementById("supportBMP").innerText = (item.support_bmp ? "✔️" : "❌")
        document.getElementById("supportJPG").innerText = (item.support_jpg ? "✔️" : "❌")
        document.getElementById("supportGIF").innerText = (item.support_gif ? "✔️" : "❌")
        document.getElementById("1_res").innerText = item.main_res;
        document.getElementById("1_size").innerText = item.main_size;
        document.getElementById("1_col").innerText = item.main_colours;
        document.getElementById("1_name").innerText = item.main_name;
        console.log(item.secondary_res)
        if(item.secondary_res !== null) {
          document.getElementById("2_supported").innerText = "✔️"
          manipDisplay("secondary", "table-row")
          document.getElementById("2_res").innerText = item.secondary_res;
          document.getElementById("2_size").innerText = item.secondary_size;
          document.getElementById("2_col").innerText = item.secondary_colours;
          document.getElementById("2_name").innerText = item.secondary_name;
        } else {
          document.getElementById("2_supported").innerText = "❌"
          manipDisplay("secondary", "none")
        }
      }
      break
    }
  }
  if(found == false && document.getElementById("entryBox").value != "") {
    document.getElementById("notFound").style.display = "inline"
    document.getElementById("infoTable").style.display = "none";
  } else if (found == false) {
    document.getElementById("notFound").style.display = "none"
    document.getElementById("infoTable").style.display = "none";
  }
}

function manipDisplay(className, display) {
  var all = document.getElementsByClassName(className);
  for (var i = 0; i < all.length; i++) {
    all[i].style.display = display;
  }
}
