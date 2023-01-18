/* Add credit with query params */
const urlParams = new URLSearchParams(window.location.search);
const credit = urlParams.get('credit');
if(credit != null) {
    const creditTitle = document.createElement("p");
    creditTitle.textContent = "鳴謝:";
    document.body.append(creditTitle);
    const credits = credit.split(";")
    for(const credit of credits) {
        const creditElement = document.createElement("p");
        creditElement.textContent = credit;
        document.body.append(creditElement);
    }
}