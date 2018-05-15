import { Observable } from 'data/observable';

export class HelloWorldModel extends Observable {
    items = [ { text: 'Text 1'}, { text: 'Text 2'}, { text: 'Text 3'}, { text: 'Text 4'} ]
}
