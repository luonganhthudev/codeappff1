document.addEventListener('DOMContentLoaded', function() {
    var colorPicker = document.getElementById('colorPicker');
  
    colorPicker.addEventListener('input', function() {
      var color = colorPicker.value;
      browser.tabs.query({active: true, currentWindow: true}, function(tabs) {
        browser.tabs.sendMessage(tabs[0].id, {color: color});
      });
    });
  });