function buttonChange(text){
    button.innerText = text;
    text ==='notreset' ? button.classList.remove('reset') : button.classList.add('reset')

    if(text ==='notstart'){
        button.classList.remove('pause','start')
    } else if (text ==='pause'){
        button.classList.remove('pause','notstart')
    }
    else if (text ==='start'){
        button.classList.remove('start','notstart')
    }
}

buttonChange('notreset')