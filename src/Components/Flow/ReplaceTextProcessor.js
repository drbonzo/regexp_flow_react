import React, {Component} from 'react';
import TextProcessorControlls from './TextProcessorControlls.js';

class ReplaceTextProcessor extends Component {
	render() {
		return (
			<div className="TextProcessor ReplaceTextProcessor">
				<div className="TextProcessor__Header">
					Replace in text
					<TextProcessorControlls/>
				</div>
				<div className="TextProcessor__Contents">
					<form>
						<fieldset>
							<div className="form-group">
								<label className="TextProcessor__Contents__Label">Search for</label>
								<input type="text" className="form-control input-sm" placeholder="regular expression"/>
								<p className="TextProcessor__Contents__RegexpErrors TextProcessor__Contents__RegexpErrors--Hidden"/>
							</div>
							<div className="form-group form-inline">
								<div className="checkbox">
									<label className="TextProcessor__Contents__Label">
										Global
										<input type="checkbox"/>
									</label>
								</div>
								<div className="checkbox">
									<label className="TextProcessor__Contents__Label">
										Multiline
										<input type="checkbox"/>
									</label>
								</div>
								<div className="checkbox">
									<label className="TextProcessor__Contents__Label">
										Case Insensitive
										<input type="checkbox"/>
									</label>
								</div>
							</div>
						</fieldset>
						<fieldset>
							<div className="form-group">
								<label className="TextProcessor__Contents__Label">and replace with. (5 replacements)</label>
								<input type="text" className="form-control input-sm" placeholder="replacement string"/>
								<ul className="help-block TextProcessor__Contents__Help TextProcessor__Contents__Help--Hidden">
									<li>$1, $2, $3 - for groups.</li>
									<li>$$ Inserts a "$".</li>
									<li>$& Inserts the matched substring.</li>
									<li>$` Inserts the portion of the string that precedes the matched substring.</li>
									<li>$' Inserts the portion of the string that follows the matched substring.</li>
									<li>$n or $nn</li>
									<li>Where n or nn are decimal digits, inserts the nth parenthesized submatch string, provided the first argument was a RegExp object.</li>
									<li>\t, \n - to insert tab/newline characters</li>
								</ul>
							</div>
						</fieldset>

						<fieldset className="TextProcessor__Contents__Description">
							<div className="form-group">
								<label className="TextProcessor__Contents__Label">Description</label>
								<input type="text" className="form-control input-sm"/>
							</div>
						</fieldset>
					</form>
				</div>
			</div>
		);
	}
}

export default ReplaceTextProcessor;
