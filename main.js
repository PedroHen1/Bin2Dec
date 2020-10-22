document.getElementById('btn').addEventListener('click', convert)

function convert() {
    const binary = document.getElementById("binary").value
    const error = document.getElementById('binary')
    const x = document.getElementById("x")
    if (binary === '') 
        return error.setAttribute("placeholder", " Please write a binary number ⚠")

    binary.split('').map((char) => {
    if (char !== '0' && char !== '1') 
        return x.style.display = "inline-block"
    else {
        return x.style.display = "none"
    }})

    const decimal = parseInt(binary, 2);
    document.getElementById('decimal').value = decimal;
    return true;
}
