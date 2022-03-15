//An object to store all of the possible messages
const messageTemplate ={
    _greetings:[
        'Good morning!',
        'Good afternoon!',
        'Good evening!',
        'Hello!',
        'It’s nice to meet you!',
        'It’s a pleasure to meet you!',
        'What’s up!',
        'Hey!',
        'Howdy!',
        'Pleased to meet you!'
    ],
    _introductions:[
        'My name is Message Generator.',
        'This is Message Generator.',
        'I don\'t think we\'ve met before. My name\'s Message Generator.',
        'How are you?',
        'I’m Message Generator.',
        'You can call me Message Generator.',
        'How\'s it going?',
        'May I introduce myself? I\'m Message Generator.',
        'I\'m Message Generator.',
        'My name is Message Generator, or Genny for short'
    ],
    _compliment:[
        'You light up the room!',
        'I appreciate you!',
        'You look great today!',
        'You are making a difference!',
        'You’re awesome!',
        'You should be proud of yourself!',
        'Your hair looks stunning!',
        'You’re inspiring!',
        'You’re a candle in the darkness!',
        'You’re someone’s reason to smile!'
    ],

    //Random number generator between 0-9
    randomInt() {return Math.floor(Math.random() * 10)},
    //Getters for each message, randomly selected
    get greetings() {return this._greetings[this.randomInt()]},
    get introductions() {return this._introductions[this.randomInt()]},
    get compliment() {return this._compliment[this.randomInt()]}
}


//A message factory so you can easily create multiple messages
function messageFactory(beginning, middle, end){
    return {
        _beginning:beginning,
        _middle:middle,
        _end:end,

        //A method to print of the whole message
        print(){
            console.log(`${this._beginning} ${this._middle} ${this._end}`);
        }
    }
};

//Creating a message and printing it off
message = messageFactory(messageTemplate.greetings, messageTemplate.introductions, messageTemplate.compliment); 
message.print();
