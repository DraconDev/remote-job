export function generateRandomNumericId() {
    let id = "";
    for (let i = 0; i < 32; i++) {
        id += Math.floor(Math.random() * 10).toString();
    }
    return parseInt(id);
}
