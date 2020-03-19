
            // DEAR DEVELOPERS, THIS CODE IS NOT FOR REUSE OR REDISTRIBUTION
            // THANKS FOR VIEWING

            const enclosure = ['pasture', 'pond', 'forest', 'cave', 'barn'];

            const species = ['bear', 'fish', 'horse', 'sheep', 'donkey', 'fox', 'pig', 'deer'];

            let happyAnimals = 0, totalAnimals = 0, index = 0;
            
            let animals = [], potentialAnimals = [], potentialEnclosures = [];

            let followRules = true;
            
            //initialize functions to begin the app
            createPotentialAnimals();
            display();

            function addAnimal() {
                let animal_species = document.getElementById('list_animal_species').value;
                let animal_enclosure = document.getElementById('list_animal_enclosure').value;

                if(!potentialAnimals.includes(animal_species) || !potentialEnclosures.includes(animal_enclosure) || animal_enclosure.length < 1 || animal_species.length < 1) {
                    followRules = false;
                } else {
                    followRules = true;
                }

                if(!followRules) {
                    document.getElementById('rules').style.display = 'block';
                    console.log('invalid input was entered.')
                    return;
                } else {
                    document.getElementById('rules').style.display = 'none';
                }
                animals.push({animal_species: animal_species, animal_enclosure: animal_enclosure});
                potentialAnimals.splice(potentialAnimals.indexOf(animal_species), 1);
                potentialEnclosures.splice(potentialEnclosures.indexOf(animal_enclosure), 1);

                display();
                displayData();
            }

            function clearPastData() {
                document.getElementById('list_animal_species').value = '';
                document.getElementById('list_animal_enclosure').value = '';
            }

            function displayData() {
                var p = document.getElementById('addData');
                var row = document.createElement('tr');

                var col_species = document.createElement('td');
                var col_enclosure = document.createElement('td');
                var textSpecies = document.createTextNode(animals[index].animal_species);
                var textEnclosure = document.createTextNode(animals[index].animal_enclosure);

                col_species.appendChild(textSpecies);
                col_enclosure.appendChild(textEnclosure);
                row.appendChild(col_species);
                row.appendChild(col_enclosure);
                p.appendChild(row);
                index++;
            }

            function createPotentialAnimals() {
                clearPastData();
                var rand = Math.floor(Math.random() * 9);
                for(i = 0; i <= rand; i++) {
                    let temp_species = species[Math.floor(Math.random() * species.length)];
                    let temp_enclosure = enclosure[Math.floor(Math.random() * enclosure.length)];
                    potentialAnimals.push(temp_species);
                    potentialEnclosures.push(temp_enclosure);
                }
            }

            function display() {
                document.getElementById('potential-animals').innerHTML = "available animals: ";
                document.getElementById('enclosures').innerHTML = "available enclosure: ";
                if(potentialAnimals.length === 0){
                    document.getElementById('done').style.display = 'block';
                    document.getElementById('addAnimal').style.display = 'none';
                    clearPastData();
                    return;
                }
                for(i = 0; i < potentialAnimals.length; i++){
                    document.getElementById('potential-animals').append(potentialAnimals[i] + ", ");
                    document.getElementById('enclosures').append(potentialEnclosures[i] + ", ");
                }
                document.getElementById('animals').style.display = 'block';
            }
