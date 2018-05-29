

class InfoSlider {
    
    constructor(containerEl, photoInfoCollection) {
        this.containerEl = containerEl;
        this.photoInfoCollection = photoInfoCollection;
        this.personElements = [];
        
        let person;
        let personElement;
        let personId;
        do {
            person = this.photoInfoCollection.getCurrent();
            personElement = this.createElement(person);
            
            this.attachEvents(personElement);

            this.personElements.push(personElement);
        } while (this.photoInfoCollection.moveNext());
        this.photoInfoCollection.moveBeginning();
    }

    displayPerson() {
        const personElement = this.personElements[this.photoInfoCollection.currentIndex];
       
        this.containerEl.innerHTML = '';
        this.containerEl.appendChild(personElement);
    }

    attachEvents(personElement) {
        personElement.querySelector('.next-person').addEventListener('click', () => {
            this.photoInfoCollection.moveNext();
            this.displayPerson();
        });
        personElement.querySelector('.prev-person').addEventListener('click', () => {
            this.photoInfoCollection.movePrevious();
            this.displayPerson();
        });

        personElement.querySelector('.toggle-info').addEventListener('click', () => {
            personElement.classList.toggle('expanded');
        });
    }

    createElement(person) {
        let element = document.createElement('div');
        element.classList.add('person');

        let html = `
            <div class="persons-img-container trigger">
                <img class="persons-img" src="images/${person.src}" alt="${person.alt}" />
                <div class="persons-img-buttons">
                    <p class="persons-name">${person.firstName} ${person.lastName}</p>
                    <button class="prev-person"><i class="fas fa-arrow-circle-left"></i></button>
                    <button class="toggle-info">...</button>
                    <button class="next-person"><i class="fas fa-arrow-circle-right"></i></button>
                </div>
            </div>
            <div class="info-cont box">
                <div class="persons-info-container">

                    <p class="right">Title: </p>
                    <p class="left">${person.title}</p>

                    <p class="right">Nationality:</p>
                    <p class="left">${person.nationality}</p>
                    <p class="right">Skills
                        <i class="fas fa-caret-down skills"></i>
                    </p>
                    <ul class="skills-list left">
                        <li>${person.skills}</li>
                    </ul>

                    <p class="right">Why Softwear Developer:</p>
                    <p class="left">${person.whySofterDeveloper}</p>

                    <p class="right">Long Terms Vision:</p>
                    <p class="left">${person.longTermVision}</p>

                    <p class="right">What Motivate Me:</p>
                    <p class="left">${person.motivatesMe}</p>

                    <p class="right">Favorite Quote:</p>
                    <p class="left">${person.favoriteQuote}</p>

                    <p class="right">Joined:</p>
                    <p class="left">${person.joinedOn}</p>
                </div>
            </div>
        `;

        element.innerHTML = html;

        return element;
    }

    
}

