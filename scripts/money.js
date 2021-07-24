export function getMoney() {
    return parseInt(localStorage.getItem("money"));
}

export function setMoney(amount) {
    localStorage.setItem("money", amount);
}

export function addMoney(amount) {
    if (getMoney() || getMoney() == 0 ) {
        localStorage.setItem("money", getMoney() + amount);
    } else (
        setMoney(amount)
    )
}

export function removeMoney(amount) {
    if (getMoney() || getMoney() == 0) {
        localStorage.setItem("money", getMoney() - amount);
    } else (
        setMoney(-amount)
    )
}
