import { LightningElement } from 'lwc';

export default class MeetingRooms extends LightningElement {
    allRooms = [
        {roomNumber: 'A01', roomCapacity:'4'},
        {roomNumber: 'B01', roomCapacity:'10'},
        {roomNumber: 'C01', roomCapacity:'2'},
        {roomNumber: 'D01', roomCapacity:'6'},
        {roomNumber: 'E01', roomCapacity:'4'},
    ];
}