function openthedooor(attr) {
    let plusBtn = $(`.plus${attr}`)
    let minusBtn = $(`.minus${attr}`)
    let text = $(`#${attr}`)
    if(plusBtn.css('display') === 'flex'){
        text.css('display' ,'flex') 
        minusBtn.css('display' ,'flex') 
        plusBtn.css('display' ,'none') 
    } else {
        text.css('display' ,'none') 
        minusBtn.css('display' ,'none') 
        plusBtn.css('display' ,'flex') 
    }
}
