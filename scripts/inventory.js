function createInventory() {
    localStorage.setItem("inventory", JSON.stringify(new Array(3).fill({})));
}

export function addItem(item) {
    if (getInventory()) {
        let inventory = getInventory();
         inventory[item.type] = item;
         localStorage.setItem("inventory", JSON.stringify(inventory));
     } else (
         createInventory()
     )
}

export function removeItem(item) {
    if (getInventory()) {
       let inventory = getInventory();
        inventory[item.type] = {};
        localStorage.setItem("inventory", JSON.stringify(inventory));
    } else (
        createInventory()
    )
}

export function getInventory() {
    return JSON.parse(localStorage.getItem("inventory"));
}

