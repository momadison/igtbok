<div className="row">
<div className="col-md-4">
    <Select
        key={stageType}
        id="stageType"
        name="stageType"
        options={stageType}
        onChange={this.handleInputChange}
        small="select stage type" />
</div>
<div className="col-md-4">
    <Select
        key="stage_shape"
        id="stageShape"
        name="stageShape"
        options={stageShape}
        onChange={this.handleInputChange}
        small="select stage shape" />
</div>
<div className="col-md-4">
    <Select
        id="stageLocation"
        name="stageLocation"
        options={stageLocation}
        onChange={this.handleInputChange}
        small="select stage location" />
</div>
</div>

 {/* SETTING UP TABLES */}
 <div className={this.state.activeID === 3 ?
    "carousel-item active" :
    "carousel-item"}>
        <img src="https://us.123rf.com/450wm/tomertu/tomertu1506/tomertu150600340/41325485-glitter-vintage-lights-background-light-silver-purple-blue-gold-and-black-defocused-.jpg?ver=6" className="d-block w-100" alt="..." />
        <div className="carousel-caption inputCaption">
            <h2 className="h3-responsive">Table Time</h2>
            <p> Lets setup your table count and size.</p>
        <form>
                
                <FormBtn
                    disabled={!(this.state.tableCount && this.state.tableWidth)}
                    onClick={this.handleSandboxTransition}
                    className="btn btn-danger sandboxTime"
                >
                Next
                </FormBtn>
            </form>
            </div>
    </div>

<Input
type="number"
id="tableWidth"
name="tableWidth"
onChange={this.handleInputChange}
placeholder="Table Length"
small="please enter the length of your table in feet"/>
</div>
<div className="col-md-4">