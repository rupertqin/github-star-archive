$$('.repos>li').map(function(e){ return `### [${e.querySelector('.repo-name').innerText}](${e.querySelector('a')}) \n > ${e.querySelector('.repo-description').innerText} `}).join('\n\n')
