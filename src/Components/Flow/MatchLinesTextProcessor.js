import React, {Component} from 'react';
import TextProcessorControlls from './TextProcessorControlls.js';

class MatchLinesTextProcessor extends Component {
	render() {
		return (
			<div className="TextProcessor MatchLinesTextProcessor">
				<div className="TextProcessor__Header">
					Replace in text
					<TextProcessorControlls/>
				</div>
				<div className="TextProcessor__Contents">
					<form>
						<fieldset>
							<div className="form-group">
								<label>Get lines <span>not</span> matching (showing 1 of 1 lines)</label>
								<input type="text" className="form-control input-sm" placeholder="regular expression"/>
								<p className="TextProcessor__Contents__RegexpErrors TextProcessor__Contents__RegexpErrors--Hidden"/>
							</div>
							<div className="form-group form-inline">
								<div className="checkbox">
									<label>
										Case Insensitive
										<input type="checkbox"/>
									</label>
								</div>
								<div className="checkbox">
									<label>
										Invert match?
										<input type="checkbox"/>
									</label>
								</div>
								<ul className="TextProcessor__Contents__Help TextProcessor__Contents__Help--Hidden">
									<li>returns whole lines that are matched by regular expression</li>
									<li>if 'invert' flag is checked - then returns lines that DO NOT match regular expression</li>
									<li>lines are returned, joined with \n character - not their original newline character!</li>
								</ul>
							</div>
						</fieldset>
						<fieldset className="TextProcessor__Contents__Description TextProcessor__Contents__Description--Hidden">
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

export default MatchLinesTextProcessor;
