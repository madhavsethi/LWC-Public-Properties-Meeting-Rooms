import { LightningElement,api } from 'lwc';

export default class MeetingRoom extends LightningElement {
    @api roominfo;// = {roomNumber: A_01, roomCapacity:4};
}