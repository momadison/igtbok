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
        //check if venue width or length is bigger, flip and display in window based on window size
        //width and length could have been flipped in placeBox function to fit screen
        const bigger = (those.state.venue.venueWidth > those.state.venue.venueLength) ? 
        (those.state.venue.venueWidth) : (those.state.venue.venueLength)
        //get growth rate of venueBox and apply to stage, table, and seats
        let seatFeet = 2;
        const growthRate = (dimension.width/bigger);
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
        let stageX = those.state.stageX;
        let stageY = those.state.stageY;
        if (!those.state.originalvRef) {
        stageX = (dimension.x + (Math.round((dimension.width/2) - (stageWidth / 2))));
        stageY = dimension.top;
        }
               
        those.setState({
            stageX: stageX,
            stageY: stageY     
        })

        those.setTables();
        },
        tableStageAdjust: (those) => {
            //adjust tables and seats based on the user screen
            let tempArray = those.state.tables
            let stageX = those.state.stageX
            let stageY = those.state.stageY
            let xRatio = 0;
            let yRatio = 0;
            let radius = those.state.tableSize/1.5;
            let xOffset = radius/2;
            let yOffset = radius/1.35;
            let angle;
            let myVenueBox = those.venueRef.current.getBoundingClientRect();
            
            tempArray.map( (table) => {
                xRatio = (parseInt(table.x) - parseInt(those.state.originalvRef.left)) / (parseInt(those.state.originalvRef.width))
                yRatio = (parseInt(table.y) - parseInt(those.state.originalvRef.top)) / (parseInt(those.state.originalvRef.height))
                
                table.x = (myVenueBox.width * xRatio) + myVenueBox.left;
                table.y = (myVenueBox.height * yRatio) + myVenueBox.top;
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
                stageX = (((those.state.stageX - those.state.originalvRef.left) / (those.state.originalvRef.width)) * 
                                myVenueBox.width)+ myVenueBox.left;
                stageY = (((those.state.stageY - those.state.originalvRef.top) / (those.state.originalvRef.height)) *
                                myVenueBox.height) + myVenueBox.top;
            }
                
            those.setState({
                tables: tempArray,
                stageX: stageX,
                stageY: stageY 
            })
                
        },
        windowAdjust: (those) => {
            let tempArray = those.state.originalTables;
            let myVenueBox = those.venueRef.current.getBoundingClientRect();
            for (var i=0; i<tempArray.length; i++) {
                console.log("originalvref: " + those.state.orginalvRef + "tempArray: ", tempArray[i].x)
                tempArray[i].x = (((tempArray[i].x - those.state.originalvRef.left) / (those.state.originalvRef.width)) *
                    myVenueBox.width) + myVenueBox.left;
            }

            those.setState({
                tables: tempArray
            })

        }
}