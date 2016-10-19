import React, {PropTypes, Component} from 'react'
import TextProcessorControlls from './Flow/TextProcessorControlls'

class UniqueFilterComponent extends Component {

	constructor(props) {
		super(props);

		this.state = {
			showDescription: Boolean(props.description),
			showHelp: false
		};

		this.toggleShowHelp = this.toggleShowHelp.bind(this);
		this.toggleShowDescription = this.toggleShowDescription.bind(this);
	}

	toggleShowHelp() {
		this.setState({
			showHelp: !this.state.showHelp
		})
	}

	toggleShowDescription() {
		this.setState({
			showDescription: !this.state.showDescription
		})
	}

	render() {
		return (
			<div className="TextProcessor FindAllTextProcessor">
				<div className="TextProcessor__Header">
					Unique
					<div className="btn-group pull-right">
						<TextProcessorControlls toggleShowHelp={this.toggleShowHelp} toggleShowDescription={this.toggleShowDescription} onEnabledClick={this.props.onEnabledClick} onDeleteClick={this.props.onDeleteClick}/>
					</div>
				</div>
				<div className={this.props.enabled ? 'TextProcessor__Contents' : 'TextProcessor__Contents TextProcessor__Contents--Hidden'}>
					<form>
						<fieldset>
							<div className="form-group">
								<label className="TextProcessor__Contents__Checkbox__Label">Show just unique lines (showing 0 of 0 lines)</label>
							</div>
							<div className="form-group form-inline">
							</div>
						</fieldset>
						<fieldset className={this.state.showDescription ? "help-block TextProcessor__Contents__Description" : "help-block TextProcessor__Contents__Description TextProcessor__Contents__Description--Hidden"}>
							<div className="form-group">
								<label className="TextProcessor__Contents__Checkbox__Label">Description</label>
								<input type="text" className="form-control input-sm" value={this.props.description} onChange={(event) => {
									this.props.onDescriptionChange(event.target.value)
								}}/>
							</div>
						</fieldset>
					</form>
				</div>
			</div>
		)
	}
}

UniqueFilterComponent.propTypes = {
	description: PropTypes.string.isRequired,
	//
	enabled: PropTypes.bool.isRequired,
	//
	//
	//
	onDescriptionChange: PropTypes.func.isRequired,
	//
	onEnabledClick: PropTypes.func.isRequired,
	onDeleteClick: PropTypes.func.isRequired
};

export default UniqueFilterComponent;
