function getRandomChinese(length) {
  return new Promise((resolve) => {
    let result = '';
    const generateCharacter = () => {     
      const sing = String.fromCharCode(Date.now().toString().slice(-5));
      result += sing;
      console.log(result);
      if (result.length < length) {
				setTimeout(generateCharacter, 50);
			} else {
				resolve(result);
			}
    };
    generateCharacter();
  });
}

getRandomChinese(5);