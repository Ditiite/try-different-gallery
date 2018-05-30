
class PhotoInfoCollection {

    constructor(list) {
        this.photoInfo = list;
        this.currentIndex = 0;
    }

    getCurrent() {
        return this.photoInfo[this.currentIndex];
    }

    moveNext() {
        const nextIndex = this.currentIndex + 1;

        // Only move if nextIndex is valid
        if (nextIndex >= this.photoInfo.length) {
            return null;
        }
        this.currentIndex = nextIndex;
        return true;
    }

    movePrevious() {
        const nextIndex = this.currentIndex - 1;

        // Only move if nextIndex is valid
        if (nextIndex < 0) {
            return null;
        }
        this.currentIndex = nextIndex;
        return true;
    }

    moveBeginning() {
        this.currentIndex = 0;
    }
}