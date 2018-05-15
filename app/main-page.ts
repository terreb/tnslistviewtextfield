import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import { HelloWorldModel } from './main-view-model';

let page

export function navigatingTo(args: EventData) {
    page = <Page>args.object;
    page.bindingContext = new HelloWorldModel();
}

let count = 0
export function onBlur( args ) {
    count++
    console.log( `onBlur ${count}`)
}