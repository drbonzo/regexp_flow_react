// @flow

import * as React from 'react';

import FilterConfigControls from './FilterConfigControls';
import FilterComponent from './FilterComponent';
import HelpForFilterComponent from './HelpForFilterComponent';

type Props = {
    searchString: string,
    global: boolean,
    caseInsensitive: boolean,
    multiline: boolean,
    replaceString: string,
    replacementsCount: number,
    //
    description: string,
    enabled: boolean,
    //
    //
    //
    onSearchStringChange: (string) => void,
    onGlobalChange: () => void,
    onCaseInsensitiveChange: () => void,
    onMultilineChange: () => void,
    onReplaceStringChange: (string) => void,
    onDescriptionChange: (string) => void,
    //
    onEnabledClick: () => void,
    onDeleteClick: () => void
}

class ReplaceFilterComponent extends FilterComponent<Props> {

    render() {
        return (
            <div className="FilterConfig ReplaceFilterConfig">
                <div className="FilterConfig__Header">
                    Replace in text
                    <div className="btn-group pull-right">
                        <FilterConfigControls toggleShowHelp={this.toggleShowHelp} toggleShowDescription={this.toggleShowDescription} onEnabledClick={this.props.onEnabledClick} onDeleteClick={this.props.onDeleteClick} enabled={this.props.enabled}/>
                    </div>
                </div>
                <div className={this.props.enabled ? 'FilterConfig__Contents' : 'FilterConfig__Contents FilterConfig__Contents--Hidden'}>
                    <form>
                        <fieldset>
                            <div className="form-group">
                                <label className="FilterConfig__Contents__Label">Search for</label>
                                <input type="text" ref={input => this.firstInput = input} className="form-control input-sm" placeholder="regular expression" value={this.props.searchString} onChange={(event) => {
                                    this.props.onSearchStringChange(event.target.value);
                                }}/>
                                <p className="FilterConfig__Contents__RegexpErrors FilterConfig__Contents__RegexpErrors--Hidden"/>
                            </div>
                            <div className="form-group form-inline">
                                <div className="checkbox FilterConfig__Contents__Checkbox">
                                    <label className="FilterConfig__Contents__Checkbox__Label">
                                        <input type="checkbox" checked={this.props.global} onChange={this.props.onGlobalChange}/>
                                        Global
                                    </label>
                                </div>
                                <div className="checkbox FilterConfig__Contents__Checkbox">
                                    <label className="FilterConfig__Contents__Checkbox__Label">
                                        <input type="checkbox" checked={this.props.multiline} onChange={this.props.onMultilineChange}/>
                                        Multiline
                                    </label>
                                </div>
                                <div className="checkbox FilterConfig__Contents__Checkbox">
                                    <label className="FilterConfig__Contents__Checkbox__Label">
                                        <input type="checkbox" checked={this.props.caseInsensitive} onChange={this.props.onCaseInsensitiveChange}/>
                                        Case Insensitive
                                    </label>
                                </div>
                            </div>
                        </fieldset>

                        <fieldset>
                            <div className="form-group">
                                <label className="FilterConfig__Contents__Label">and replace with ({this.props.replacementsCount} replacements):</label>
                                <input type="text" className="form-control input-sm" placeholder="replacement string" value={this.props.replaceString} onChange={(event) => {
                                    this.props.onReplaceStringChange(event.target.value);
                                }}/>
                            </div>
                        </fieldset>

                        <HelpForFilterComponent showHelp={this.state.showHelp}>
                            <li>$1, $2, $3 - for groups.</li>
                            <li>$$ Inserts a &quot;$&quot;.</li>
                            <li>$& Inserts the matched substring.</li>
                            <li>$&grave; Inserts the portion of the string that precedes the matched substring.</li>
                            <li>$&apos; Inserts the portion of the string that follows the matched substring.</li>
                            <li>$n or $nn</li>
                            <li>Where n or nn are decimal digits, inserts the nth parenthesized submatch string, provided the first argument was a RegExp object.</li>
                            <li>\t, \n - to insert tab/newline characters</li>
                        </HelpForFilterComponent>

                        <fieldset className={this.state.showDescription ? 'FilterConfig__Contents__Description' : 'FilterConfig__Contents__Description FilterConfig__Contents__Description--Hidden'}>
                            <div className="form-group">
                                <label className="FilterConfig__Contents__Label">Description</label>
                                <input type="text" className="form-control input-sm" value={this.props.description} onChange={(event) => {
                                    this.props.onDescriptionChange(event.target.value);
                                }}/>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        );
    }
}

export default ReplaceFilterComponent;
