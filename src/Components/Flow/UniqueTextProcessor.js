import React, {Component} from 'react';
import TextProcessorControlls from './TextProcessorControlls.js';

class UniqueTextProcessor extends Component {
	render() {
		return (
			<div className="TextProcessor UniqueTextProcessor">
				<div className="TextProcessor__Header">
					Unique
					<TextProcessorControlls/>
				</div>
				<div className="TextProcessor__Contents">
					<form>
						<fieldset>
							<div className="form-group">
								<label>Show just unique lines (showing 5 of 10 lines)</label>
							</div>
							<div className="form-group form-inline">
								{/* no checkboxes */}
								<ul className="TextProcessor__Contents__Help TextProcessor__Contents__Help--Hidden">
									{/* no data*/}
								</ul>
							</div>
						</fieldset>
						<fieldset className="TextProcessor__Contents__Description">
							<div className="form-group">
								<label>Description</label>
								<input type="text" className="form-control input-sm"/>
							</div>
						</fieldset>
					</form>
				</div>
			</div>
		);
	}
}

export default UniqueTextProcessor;
