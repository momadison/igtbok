switch (icons.comp) {
    case "Icon":
        return (
            <div onClick={this.handleBtnClick}
            onMouseDown={this.handleMouseDown}
            onMouseUp={this.handleMouseUp}>
            <Icon width="30%"
            id="table1" 
            fill="#49c"
            className="telephone"
            viewBox="0 0 32 32"
            style={{position: "absolute",
            left: this.state.tables.filter( (table) => {
                return (table.id === "table1")
            }).map( (table) => {
                return table.x
            })+"px",
            top: this.state.tables.filter( (table) => {
                return (table.id === "table1")
            }).map( (table) => {
                return table.y
            })+"px"}} 
            />
            </div>                       
        )
    case "FA":
        return (
            <div onClick={this.handleBtnClick}
            onMouseDown={this.handleMouseDown}
            onMouseUp={this.handleMouseUp}>
                <i id="table3" className="fas fa-circle fa-5x"
                    style={{position: "absolute",
                    left: this.state.tables.filter( (table) => {
                    return (table.id === "table3")
                    }).map( (table) => {
                    return table.x
                    })+"px",
                    top: this.state.tables.filter( (table) => {
                    return (table.id === "table3")
                    }).map( (table) => {
                    return table.y
                    })+"px"}}>
                </i>
            </div>
        )
    case "Table":
        return (
            <div onClick={this.handleBtnClick}
            onMouseDown={this.handleMouseDown}
             onMouseUp={this.handleMouseUp}>
                <Table width={200}
                    id="table2"
                    fill="BA1900"
                    className="table"
                    style={{position: "absolute",
                    left: this.state.tables.filter( (table) => {
                    return (table.id === "table2")
                    }).map( (table) => {
                    return table.x
                    })+"px",
                    top: this.state.tables.filter( (table) => {
                    return (table.id === "table2")
                    }).map( (table) => {
                    return table.y
                    })+"px"}}
                />  
             </div>
        )
        default:
            return (
                <div></div>
            )
    }