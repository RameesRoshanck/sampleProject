function capitalizeWords(str) {
    const words = str.split(" ");
    for (let i = 0; i < words.length; i++) { 
      words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    return words.join(" "); 
  }
  
  console.log(capitalizeWords("cycling uphill from this hill is really dangerous"));