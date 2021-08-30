const Queue=require('./queue');

class AnimalShelter {
    constructor(){
        this.dogs=new Queue();
        this.cats=new Queue();
    }

    enqueue(animal){
        if(animal.pref=='cat'){
            this.cats.enqueue(animal);
            return animal;
        }else if(animal.pref=='dog'){
            this.dogs.enqueue(animal);
            return animal;
        }else{
            return 'Wrong animals';
        }

    }

    dequeue(pref){
        if(pref=='cat'){
            return this.cats.dequeue();

        }else if(pref=='dog'){
            return this.dogs.dequeue();

        }else{
            return null;
        }
        
    }
}

module.exports=AnimalShelter ;