$$('.repos>li').map(function(e){ 
   str = `### [${e.querySelector('.repo-name').innerText}](${e.querySelector('a')}) 
> ${e.querySelector('.repo-description').innerText} `
  return str
}).join('\n\n')
