export class Event {
    id         : number;
    resourceId : string;
    startDate  : Date;
    endDate    : Date;
    name       : string;
    description: string;
    iconCls    : string;
    eventType  : string;
    eventColor : string;
    style      : string = 'border-radius: 3px';
    resizable  : boolean = false;
    draggable  : boolean = false;

    constructor(
        _id         : number, 
        _resourceId : string, 
        _startDate  : Date, 
        _endDate    : Date, 
        _name       : string,
        _description: string,
        _iconCls    : string,
        _eventType  : string,
        _eventColor? : string
    ) {
        this.id = _id;
        this.resourceId = _resourceId;
        this.startDate =_startDate;
        this.endDate = _endDate;
        this.name = _name;
        this.description = _description;
        this.iconCls = _iconCls;
        this.eventType = _eventType;
        this.eventColor = _eventColor ? _eventColor : 'gray'  ;
    }
  }