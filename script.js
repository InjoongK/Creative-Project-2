function onClick(e) {
	e.preventDefault();
	let title = document.getElementById('title').value;
	let artist = document.getElementById('artist').value;
	let url = "https://api.lyrics.ovh/v1/" + artist + "/" + title;

  let goodInput = true;
  
	fetch(url)
	  .then(function(response) {
  
		if (response.status != 200) {
		  goodInput = false;
		  return {
			text: "Not a valid input"
		  }
		}
  
		return response.json();
	  }).then(function(json) {
		console.log(json);
  
		let results = "";
		if (goodInput === false) {
		  results = "<p>" + "Title is not found" + "</p>";
		}
		else if (goodInput === true) {
		  results += '<h1>' + title + " by " + artist + "</h1><br>";
		  let lyrics = json.lyrics;
		  results += "<p>" + lyrics + "</p>";
		}
		document.getElementById('result').innerHTML = results;
	  });
  }
  function updateResult(info) {
	document.getElementById('result').textContent = info;
  }
  document.getElementById('woo').addEventListener('click', onClick);
