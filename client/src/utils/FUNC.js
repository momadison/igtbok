export default {
    placeBox: (venueWidth, venueHeight, windowWidth) => {
    //place the bounding box to hold the venue seating arrangement.
    let width = parseInt(venueWidth);
    let height = parseInt(venueHeight);
    let ratio = (width > height) ? (height/width) : (width/height);
    //increase the size of the box to match the dimensions of the venue
    let fitWidth = Math.floor(parseInt(windowWidth) - (windowWidth/5));
    let fitHeight = Math.floor(fitWidth * ratio);
    return{
        venueWidth: fitWidth,
        venueHeight: fitHeight 
    }
    },
    setStage: (those) => {
        //get reference of bounding box
        const node = those.venueRef.current;
        //get bounding box dimensions
        const dimension = node.getBoundingClientRect();
        //check if venue width or length is bigger and assign value to largest length in feet
        const bigger = (those.state.venue.venueWidth > those.state.venue.venueLength) ? 
        (those.state.venue.venueWidth) : (those.state.venue.venueLength)
        //assign value to the size of a seat in feet
        let seatFeet = 2;
        //get growth rate of venueBox by dividing venue feet by current pixels to convert
        //feet to pixels
        const growthRate = (dimension.width/bigger);
        //convert all items to pixels
        let tableSize = Math.floor(those.state.venue.tableWidth * growthRate);
        let stageWidth = Math.floor(those.state.venue.stageWidth * growthRate);
        let stageLength = Math.floor(those.state.venue.stageLength * growthRate);
        let seatSize = Math.floor(seatFeet * growthRate);
        //set stage size state
        those.setState({
            stageWidth: stageWidth,
            stageLength: stageLength,
            seatSize: seatSize,
            dimension: dimension,
            tableSize: tableSize
        })
        
        //place stage in middle-top of venue if coordinates are not already given
        
        if (!those.state.originalvRef) {
        let stageX = those.state.stageX;
        let stageY = those.state.stageY;
        stageX = (dimension.x + (Math.round((dimension.width/2) - (stageWidth / 2))));
        stageY = dimension.top;

        those.setState({
            stageX: stageX,
            stageY: stageY + window.pageYOffset
        })
        }
        
        

        those.setTables();
        },
        tableStageAdjust: (those) => {
            //adjust tables and seats based on the user screen
            let tempArray = those.state.tables
            let stageX = those.state.stageX
            let stageY = those.state.stageY
            let radius = those.state.tableSize/1.5;
            let xOffset = radius/2;
            let yOffset = radius/1.35;
            let angle;
            let myVenueBox = those.venueRef.current.getBoundingClientRect();

            //Mapping threw my state of tables position adjust handleResize()
            tempArray.map( (table) => {
                
                //use table ratio calculated in sandbox
                table.x = (myVenueBox.width * table.xRatio) + myVenueBox.left;
                table.y = (myVenueBox.height * table.yRatio) + myVenueBox.top + yOffset + window.pageYOffset;
                //this is overfit and would need to be balanced to handle other sized tables
                table.seat.map( (seat, index) => {
                    angle = (index / (those.state.venue.seatCount/2)) * Math.PI;
                    seat.x = (radius * Math.cos(angle)) + xOffset;
                    seat.y = (radius * Math.sin(angle)) + yOffset;
                })
            })
    
            //adjust stage
            if (stageX === 0 && stageY === 0) {
                stageX = (myVenueBox.x + (Math.round((myVenueBox.width/2) - (those.state.stageWidth / 2))));
                stageY = myVenueBox.top;
            } else {
                // adjust stage for window width
                stageX = (those.state.stageXRatio * myVenueBox.width)+ myVenueBox.left;
                stageY = (those.state.stageYRatio * myVenueBox.height) + myVenueBox.top;
            }
                
            those.setState({
                tables: tempArray,
                stageX: stageX,
                stageY: stageY + window.pageYOffset 
            })
                
        }
}