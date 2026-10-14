class Tag {
    constructor(name, active = true) {
        this.name = name.trim().toLowerCase(); // Stores the ingredient name in lowercase.
        this.active = active;  // Determines whether this tag is included in a search.
    }

    // Returns the ingredient name.
    getName() {
        return this.name;
    }

    // Updates the ingredient name.
    setName(name) {
        this.name = name.trim().toLowerCase();
    }

    // Checks whether another tag has the same name.
    equals(tag) {
        if (!tag) {
            return false;
        }

        if (typeof tag === "string") {
            return this.name === tag.trim().toLowerCase();
        } else {
            return this.name === tag.getName().trim().toLowerCase();
        }
    }

    // Activates or deactivates this tag.
    setActive(active) {
        this.active = active;
    }

    // Returns whether this tag is active.
    isActive() {
        return this.active;
    }
}

export default Tag;
