name = "";
active = false;

function getName() {
    return name;
};

function setName(newName: string) {
    name = newName;
};

function equals(tag: Tag) {
    return name === tag.name;
}