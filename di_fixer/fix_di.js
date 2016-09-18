function remove_paywall()
{
    console.log('showing paywall content');
    a = document.getElementsByClassName("paywall-content")
    if(a.length != 0){
        a[0].style = "height:auto"
    } else {
        setTimeout(remove_paywall, 1000)
    }
}

setTimeout(remove_paywall, 1000)

// remove anoying top banner
a = document.getElementsByClassName("di_panorama-wrapper")
if(a.length != 0){
    console.log('Removing panorama')
    a[0].parentNode.removeChild(a[0])
} else {
    console.log('No panorama found!')
}



