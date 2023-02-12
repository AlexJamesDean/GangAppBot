module.exports = class BaseCommand {
    constructor (name, category, value) {
        this.name = name;
        this.category = category;
        this.value = value;
    }
}