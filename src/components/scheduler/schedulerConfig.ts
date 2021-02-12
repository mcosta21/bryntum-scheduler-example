import { Resource } from '../../models/Resource';
import { Event } from '../../models/Event';

/**
 * Scheduler config file
 */

 interface WorkerResource {
    id: string;
    name: string;
    charge: string;
    photo?: string;
 }

 function generateResourceData(worker : WorkerResource){
     const { id, name, charge, photo } = worker;
     const initials = photo === undefined ? name.substring(0, 1) : '';
     return `
            <div class="resource">
                <div class="worker">
                    ${photo !== undefined ? `<img src="${photo}"/>` : `<span>${initials}</span>`}
                    <div>
                        <h4>${name}</h4>
                        <p>${charge}</p>
                    </div>
                </div>
                <div class="options">
                    <mat-resource></mat-resource>
                    ${id}
                </div>
            </div>
        `
}

function generateNewResource() {
    return `<button class="btn-new-resource" type="button" onclick="alert('hello')">CLIQUE AQUI PARA SELECIONAR UM TRABALHADOR</button>`
}

function generateEvent(name : string, description: string){
    return `
        <div class="event">
            <p>${description}</p>
            <h4>${name}</h4>
        </div>
    `;
}

const r1 = new Resource('r1', 'Mike', 'Cozinheiro', 'https://avatars.githubusercontent.com/u/30120305?s=460&u=2c33a6777ec253d664a59108230924e555c89070&v=4');
const r2 = new Resource('r2', 'Linda', 'Cozinheiro');
const r3 = new Resource('undefined', 'undefined', 'undefined');

const resources = [r1, r2, r3];

const e1 = new Event(1, 'r1', new Date(2021, 0, 1, 10), new Date(2021, 0, 5, 12), 'Iteração 1', 'Janeiro 01, 2021  -  Janeiro 05, 2021', 'b-fa b-fa-mouse-pointer', 'Meeting', 'blue');
const e2 = new Event(2, 'r2', new Date(2021, 0, 5, 10), new Date(2021, 0, 10, 12), 'Iteração 2', 'Janeiro 01, 2021  -  Janeiro 05, 2021', 'b-fa b-fa-mouse-pointer', 'Meeting', 'green');
const e3 = new Event(3, 'undefined', new Date(2021, 0, 1, 10), new Date(2021, 0, 10, 12), 'Iteração 3', 'Janeiro 01, 2021  -  Janeiro 05, 2021', 'b-fa b-fa-mouse-pointer', 'Meeting');

const events = [ e1, e2, e3 ];

  
const schedulerConfig = {
    rowHeight: 60,

    // Justify height of container timeline
    autoHeight: true,

    // Resources equals Workers
    resources: resources,

    // Events equals Embarks
    events: events,

    startDate: new Date(2021, 0, 1, 0),
    endDate: new Date(2021, 3, 31, 23, 59, 59),

    // Design of events
    eventStyle: 'colored',

    // Format columns to timeline
    viewPreset: {
        timeResolution: {
            unit: 'day',
            increment: 1
        },
        headers: [
            {
                unit: 'month',
                dateFormat: 'MMM'
            },
            {
                unit: 'day',
                dateFormat: 'DD'
            }
        ]
    },

    // Columns to resources
    columns : [
        { 
            type: 'resourceInfo', 
            text: 'NAME', 
            field: 'name', 
            editor: false,
            width: 300,
            htmlEncode : false, 
            // Disable context menu on resources (To disable option Delete record)
            enableCellContextMenu: false,
            renderer({record}: any) {
                const { id, name, charge } = record.originalData;
                const resource = new Resource(id, name, charge);
                // Use registered Custom Element tag name and pass it attributes
                return `<app-worker-resource [resource]="resource"></app-worker-resource>`;
              }
            
        }
    ],

    // Disable double click on timeline to create new event
    createEventOnDblClick: false,

    // Disable double click zoom on date columns
    zoomOnTimeAxisDoubleClick: false,

    // To include these features on angular component, it'll need to add Feature name in front of event type. Ex: eventFilterFeature, headerZoomFeature
    features: {

        // When true, click Filter Tasks to search by task name
        eventFilter: false,

        // When true, click and drag between some date to apply zoom
        headerZoom: false,

        // Disable context menu to add event on timeline
        scheduleMenu: {
            items: {
                addEvent: false
            }
        },

        timeAxisHeaderMenu: {
            items: {
                zoomLevel: false,
                currentTimeLine: false,
                extraItem: {
                    text: 'Extra',
                    icon: 'b-fa b-fa-fw b-fa-flag',
                    onItem() {
                        
                    }
                }
            }
        },

        // Disable editing with double click on timeline
        eventEdit : false,

        // Disable selection group events to edite on timeline
        eventDragSelect      : false,

        // Disable creation event with drag on timeline
        eventDragCreate      : false,

        // Context menu of timeline
        eventMenu: {
            // Default items menu
            items: {
                editEvent: false,
                deleteEvent: false,
                associate : {
                    text: 'Associar',
                    icon: 'b-fa b-fa-fw b-fa-arrow-left',
                    cls: 'b-separator',
                    weight: 500,
                    onItem({ eventRecord }:any) {
                        eventRecord.name = 'Associado'
                    }
                },
                disassociate: {
                    text: 'Desassociar',
                    icon: 'b-fa b-fa-fw b-fa-arrow-left',
                    weight: 500,
                    onItem({ eventRecord }:any) {
                        eventRecord.name = 'Desassociado'
                    }
                }
            },
            // Process items before menu is shown
            processItems({eventRecord, items}:any) {
                // Show or unshow item menu for a specific resource
                if (eventRecord.data.resourceId == 'undefined') {
                    items.disassociate = false;
                }

                // Disabled menu
                if (eventRecord.data.resourceId === 'r1') {
                    return false;
                }

                return true;
            },

           
        }
    },

    // WIP
    eventStore: {
        // Additional fields added to EventModel
        fields: ['done', 'canceled', 'locked']
    },

    // Add a custom content inside event on timeline
    eventRenderer: (props:any) => {
        //console.log(props)
        const { name, description } = props.eventRecord;
        return generateEvent(name, description);
    },

    // WIP
    useInitialAnimation : 'slide-from-left'

};

export default schedulerConfig;
